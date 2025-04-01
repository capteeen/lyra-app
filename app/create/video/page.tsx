'use client';

import { Button } from "@/components/ui/button";
import { Video, ArrowLeft, Sparkles, Play } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useGeneration } from "@/hooks/useGeneration";

export default function VideoGenerationPage() {
  const [prompt, setPrompt] = useState('');
  const [duration, setDuration] = useState(5);
  const [resolution, setResolution] = useState('1080p');
  const { generate, loading, error, output } = useGeneration('video');

  const handleGenerate = async () => {
    if (!prompt) return;
    await generate({ prompt, duration, resolution });
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
            <h1 className="text-xl font-semibold">Video Generation</h1>
          </div>
        </div>
      </header>

      <div className="container max-w-6xl mx-auto px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_400px]">
          {/* Main Content */}
          <div className="space-y-6">
            <div className="p-8 rounded-2xl bg-white dark:bg-gray-900 shadow-lg">
              <div className="space-y-4">
                <h2 className="text-lg font-semibold">Create Video</h2>
                <textarea
                  className="w-full h-32 p-4 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Describe the video you want to create..."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                />
                <div className="flex items-center gap-4">
                  <Button 
                    className="bg-gradient-to-r from-purple-500 to-pink-500"
                    onClick={handleGenerate}
                    disabled={loading || !prompt}
                  >
                    {loading ? 'Generating...' : 'Generate'} <Sparkles className="ml-2 h-4 w-4" />
                  </Button>
                  <p className="text-sm text-gray-500">Using Zeroscope XL</p>
                </div>
                {error && (
                  <p className="text-sm text-red-500">{error}</p>
                )}
              </div>
            </div>

            {/* Generated Video Display */}
            <div className="aspect-video rounded-2xl bg-white dark:bg-gray-900 shadow-lg flex items-center justify-center border-2 border-dashed border-gray-200 dark:border-gray-700">
              {output && output[0] ? (
                <video 
                  src={output[0]} 
                  controls 
                  className="w-full h-full rounded-2xl"
                />
              ) : (
                <div className="text-center space-y-4 p-8">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto">
                    <Play className="h-6 w-6 text-white" />
                  </div>
                  <p className="text-gray-500">Generated videos will appear here</p>
                </div>
              )}
            </div>
          </div>

          {/* Settings Panel */}
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-white dark:bg-gray-900 shadow-lg">
              <h3 className="text-lg font-semibold mb-4">Settings</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Video Length</label>
                  <select 
                    className="w-full p-2 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
                    value={duration}
                    onChange={(e) => setDuration(Number(e.target.value))}
                  >
                    <option value={5}>5 seconds</option>
                    <option value={10}>10 seconds</option>
                    <option value={15}>15 seconds</option>
                    <option value={30}>30 seconds</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Resolution</label>
                  <select 
                    className="w-full p-2 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
                    value={resolution}
                    onChange={(e) => setResolution(e.target.value)}
                  >
                    <option>480p</option>
                    <option>720p</option>
                    <option>1080p</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Style</label>
                  <select className="w-full p-2 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                    <option>Realistic</option>
                    <option>Cinematic</option>
                    <option>Animated</option>
                    <option>Abstract</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-gray-900 shadow-lg">
              <h3 className="text-lg font-semibold mb-4">History</h3>
              <div className="space-y-4">
                <p className="text-sm text-gray-500">Your generated videos will appear here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 