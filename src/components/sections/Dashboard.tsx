import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { GoogleGenAI, Modality } from "@google/genai";
import { auth, db, handleFirestoreError, OperationType } from '../../firebase';
import { collection, addDoc, serverTimestamp, query, where, onSnapshot, orderBy } from 'firebase/firestore';
import { Button } from '../ui/button';
import { Video, Music, Upload, Loader2, Play, Download, Music2, Film } from 'lucide-react';

export const Dashboard = () => {
  const [user, setUser] = useState(auth.currentUser);
  const [videoPrompt, setVideoPrompt] = useState('');
  const [musicPrompt, setMusicPrompt] = useState('');
  const [isGeneratingVideo, setIsGeneratingVideo] = useState(false);
  const [isGeneratingMusic, setIsGeneratingMusic] = useState(false);
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [generations, setGenerations] = useState<any[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((u) => setUser(u));
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!user) return;

    const q = query(
      collection(db, 'generations'),
      where('userId', '==', user.uid),
      orderBy('createdAt', 'desc')
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const docs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setGenerations(docs);
    }, (error) => {
      handleFirestoreError(error, OperationType.LIST, 'generations');
    });

    return () => unsubscribe();
  }, [user]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setVideoFile(e.target.files[0]);
    }
  };

  const generateVideo = async () => {
    if (!user || !videoPrompt) return;
    setIsGeneratingVideo(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      
      let imagePayload = undefined;
      if (videoFile) {
        const reader = new FileReader();
        const base64 = await new Promise<string>((resolve) => {
          reader.onload = () => resolve((reader.result as string).split(',')[1]);
          reader.readAsDataURL(videoFile);
        });
        imagePayload = {
          imageBytes: base64,
          mimeType: videoFile.type,
        };
      }

      let operation = await ai.models.generateVideos({
        model: 'veo-3.1-lite-generate-preview',
        prompt: videoPrompt,
        image: imagePayload,
        config: {
          numberOfVideos: 1,
          resolution: '720p',
          aspectRatio: '16:9'
        }
      });

      while (!operation.done) {
        await new Promise(resolve => setTimeout(resolve, 5000));
        operation = await ai.operations.getVideosOperation({ operation: operation });
      }

      const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;
      const videoResponse = await fetch(downloadLink!, {
        headers: { 'x-goog-api-key': process.env.GEMINI_API_KEY! }
      });
      const blob = await videoResponse.blob();
      const videoUrl = URL.createObjectURL(blob);

      await addDoc(collection(db, 'generations'), {
        userId: user.uid,
        type: 'video',
        prompt: videoPrompt,
        url: videoUrl,
        createdAt: serverTimestamp(),
      });

      setVideoPrompt('');
      setVideoFile(null);
    } catch (error) {
      console.error('Video generation failed:', error);
    } finally {
      setIsGeneratingVideo(false);
    }
  };

  const generateMusic = async () => {
    if (!user || !musicPrompt) return;
    setIsGeneratingMusic(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await ai.models.generateContentStream({
        model: "lyria-3-pro-preview",
        contents: musicPrompt,
      });

      let audioBase64 = "";
      let mimeType = "audio/wav";

      for await (const chunk of response) {
        const parts = chunk.candidates?.[0]?.content?.parts;
        if (!parts) continue;
        for (const part of parts) {
          if (part.inlineData?.data) {
            if (!audioBase64 && part.inlineData.mimeType) {
              mimeType = part.inlineData.mimeType;
            }
            audioBase64 += part.inlineData.data;
          }
        }
      }

      const binary = atob(audioBase64);
      const bytes = new Uint8Array(binary.length);
      for (let i = 0; i < binary.length; i++) {
        bytes[i] = binary.charCodeAt(i);
      }
      const blob = new Blob([bytes], { type: mimeType });
      const audioUrl = URL.createObjectURL(blob);

      await addDoc(collection(db, 'generations'), {
        userId: user.uid,
        type: 'music',
        prompt: musicPrompt,
        url: audioUrl,
        createdAt: serverTimestamp(),
      });

      setMusicPrompt('');
    } catch (error) {
      console.error('Music generation failed:', error);
    } finally {
      setIsGeneratingMusic(false);
    }
  };

  if (!user) return null;

  return (
    <section id="dashboard" className="py-24 px-6 bg-black relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-4">
            AI CREATION HUB
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto font-light">
            Harness the power of Gemini to create astronomical media.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Video Generation */}
          <div className="p-8 rounded-[32px] bg-white/5 border border-white/10">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/20 flex items-center justify-center">
                <Film className="text-purple-400" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">Video Generation</h3>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-white/60 text-sm mb-2">Prompt</label>
                <textarea
                  value={videoPrompt}
                  onChange={(e) => setVideoPrompt(e.target.value)}
                  placeholder="Describe the video you want to generate..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-purple-500 transition-colors min-h-[120px]"
                />
              </div>

              <div 
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center gap-4 cursor-pointer hover:border-purple-500/50 transition-all"
              >
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  onChange={handleFileChange} 
                  className="hidden" 
                  accept="image/*"
                />
                <Upload className="text-white/40" size={32} />
                <span className="text-white/60 text-sm">
                  {videoFile ? videoFile.name : 'Upload starting image (optional)'}
                </span>
              </div>

              <Button 
                onClick={generateVideo} 
                disabled={isGeneratingVideo || !videoPrompt}
                className="w-full"
                variant="secondary"
              >
                {isGeneratingVideo ? (
                  <>
                    <Loader2 className="mr-2 animate-spin" size={20} />
                    Generating Video...
                  </>
                ) : (
                  'Generate Video'
                )}
              </Button>
            </div>
          </div>

          {/* Music Generation */}
          <div className="p-8 rounded-[32px] bg-white/5 border border-white/10">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center">
                <Music2 className="text-blue-400" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">Music Generation</h3>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-white/60 text-sm mb-2">Prompt</label>
                <textarea
                  value={musicPrompt}
                  onChange={(e) => setMusicPrompt(e.target.value)}
                  placeholder="Describe the music style, mood, and instruments..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-blue-500 transition-colors min-h-[120px]"
                />
              </div>

              <Button 
                onClick={generateMusic} 
                disabled={isGeneratingMusic || !musicPrompt}
                className="w-full"
                variant="secondary"
                style={{ backgroundColor: 'rgb(59 130 246)' }}
              >
                {isGeneratingMusic ? (
                  <>
                    <Loader2 className="mr-2 animate-spin" size={20} />
                    Generating Music...
                  </>
                ) : (
                  'Generate Music'
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Recent Generations */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-white mb-8">Recent Generations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {generations.map((gen) => (
              <motion.div
                key={gen.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 rounded-3xl bg-white/5 border border-white/10 overflow-hidden"
              >
                <div className="aspect-video rounded-2xl bg-black mb-4 overflow-hidden flex items-center justify-center">
                  {gen.type === 'video' ? (
                    <video src={gen.url} controls className="w-full h-full object-cover" />
                  ) : (
                    <div className="flex flex-col items-center gap-4 p-4 text-center">
                      <Music className="text-blue-400" size={48} />
                      <audio src={gen.url} controls className="w-full" />
                    </div>
                  )}
                </div>
                <p className="text-white font-medium mb-1 truncate">{gen.prompt}</p>
                <p className="text-white/40 text-xs uppercase tracking-widest">{gen.type}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
