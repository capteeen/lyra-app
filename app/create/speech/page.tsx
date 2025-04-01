'use client';

import { Button } from "@/components/ui/button";
import { Mic, ArrowLeft, Sparkles, Play, Pause } from "lucide-react";
import Link from "next/link";
import { useState, useRef } from "react";
import { useGeneration } from "@/hooks/useGeneration";

export default function TextToSpeechPage() {
  const [text, setText] = useState('');
  const [voice, setVoice] = useState('en_female');
  const [speed, setSpeed] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const { generate, loading, error, output } = useGeneration('speech');

  const handleGenerate = async () => {
    if (!text) return;
    await generate({ text, voice, speed });
  };

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-950 dark:to-gray-900">
      {/* Header */}
      <header className="border-b bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl">
        <div className="container max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/create" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">
              <ArrowLeft className="h-6 w-6" />
            </Link>
            <h1 className="text-xl font-semibold">Text to Speech</h1>
          </div>
        </div>
      </header>

      <div className="container max-w-6xl mx-auto px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_400px]">
          {/* Main Content */}
          <div className="space-y-6">
            <div className="p-8 rounded-2xl bg-white dark:bg-gray-900 shadow-lg">
              <div className="space-y-4">
                <h2 className="text-lg font-semibold">Convert Text to Speech</h2>
                <textarea
                  className="w-full h-48 p-4 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder="Enter the text you want to convert to speech..."
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
                <div className="flex items-center gap-4">
                  <Button 
                    className="bg-gradient-to-r from-pink-500 to-rose-500"
                    onClick={handleGenerate}
                    disabled={loading || !text}
                  >
                    {loading ? 'Generating...' : 'Generate'} <Sparkles className="ml-2 h-4 w-4" />
                  </Button>
                  <p className="text-sm text-gray-500">Using Bark</p>
                </div>
                {error && (
                  <p className="text-sm text-red-500">{error}</p>
                )}
              </div>
            </div>

            {/* Audio Player */}
            <div className="p-8 rounded-2xl bg-white dark:bg-gray-900 shadow-lg">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Generated Audio</h3>
                  {output && output[0] ? (
                    <div className="flex items-center gap-4">
                      <Button size="icon" variant="ghost" onClick={togglePlay}>
                        {isPlaying ? (
                          <Pause className="h-5 w-5" />
                        ) : (
                          <Play className="h-5 w-5" />
                        )}
                      </Button>
                      <audio 
                        ref={audioRef} 
                        src={output[0]} 
                        onEnded={() => setIsPlaying(false)} 
                        className="hidden" 
                      />
                      <div className="w-48 h-1 bg-gray-200 dark:bg-gray-700 rounded-full">
                        <div className="w-1/3 h-full bg-pink-500 rounded-full"></div>
                      </div>
                      <span className="text-sm text-gray-500">0:00</span>
                    </div>
                  ) : (
                    <div className="text-sm text-gray-500">No audio generated yet</div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Settings Panel */}
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-white dark:bg-gray-900 shadow-lg">
              <h3 className="text-lg font-semibold mb-4">Voice Settings</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Voice</label>
                  <select 
                    className="w-full p-2 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
                    value={voice}
                    onChange={(e) => setVoice(e.target.value)}
                  >
                    <option value="en_female">Nicole (Female)</option>
                    <option value="en_male">James (Male)</option>
                    <option value="en_neutral">Alex (Neutral)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Speed</label>
                  <input 
                    type="range" 
                    min="0.5" 
                    max="2" 
                    step="0.1" 
                    value={speed}
                    onChange={(e) => setSpeed(Number(e.target.value))}
                    className="w-full"
                  />
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-gray-900 shadow-lg">
              <h3 className="text-lg font-semibold mb-4">History</h3>
              <div className="space-y-4">
                <p className="text-sm text-gray-500">Your generated audio files will appear here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 