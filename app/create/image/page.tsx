'use client';

import { Button } from "@/components/ui/button";
import { ImageIcon, ArrowLeft, Sparkles } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useGeneration } from "@/hooks/useGeneration";
import Image from "next/image";

export default function ImageGenerationPage() {
  const [prompt, setPrompt] = useState('');
  const [style, setStyle] = useState('Realistic');
  const [size, setSize] = useState('1024x1024');
  const { generate, loading, error, output } = useGeneration('image');

  const handleGenerate = async () => {
    if (!prompt) return;
    await generate({ prompt, style, size });
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
            <h1 className="text-xl font-semibold">Image Generation</h1>
          </div>
        </div>
      </header>

      <div className="container max-w-6xl mx-auto px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_400px]">
          {/* Main Content */}
          <div className="space-y-6">
            <div className="p-8 rounded-2xl bg-white dark:bg-gray-900 shadow-lg">
              <div className="space-y-4">
                <h2 className="text-lg font-semibold">Create Image</h2>
                <textarea
                  className="w-full h-32 p-4 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Describe the image you want to create..."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                />
                <div className="flex items-center gap-4">
                  <Button 
                    className="bg-gradient-to-r from-indigo-500 to-purple-500"
                    onClick={handleGenerate}
                    disabled={loading || !prompt}
                  >
                    {loading ? 'Generating...' : 'Generate'} <Sparkles className="ml-2 h-4 w-4" />
                  </Button>
                  <p className="text-sm text-gray-500">Using SDXL</p>
                </div>
                {error && (
                  <p className="text-sm text-red-500">{error}</p>
                )}
              </div>
            </div>

            {/* Generated Image Display */}
            <div className="aspect-square rounded-2xl bg-white dark:bg-gray-900 shadow-lg flex items-center justify-center border-2 border-dashed border-gray-200 dark:border-gray-700">
              {output && output[0] ? (
                <div className="relative w-full h-full">
                  <Image
                    src={output[0]}
                    alt="Generated image"
                    fill
                    className="object-contain rounded-2xl"
                  />
                </div>
              ) : (
                <div className="text-center space-y-4 p-8">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center mx-auto">
                    <ImageIcon className="h-6 w-6 text-white" />
                  </div>
                  <p className="text-gray-500">Generated images will appear here</p>
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
                  <label className="block text-sm font-medium mb-2">Image Size</label>
                  <select 
                    className="w-full p-2 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                  >
                    <option>1024x1024</option>
                    <option>1024x1365</option>
                    <option>1365x1024</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Style</label>
                  <select 
                    className="w-full p-2 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
                    value={style}
                    onChange={(e) => setStyle(e.target.value)}
                  >
                    <option>Realistic</option>
                    <option>Artistic</option>
                    <option>Anime</option>
                    <option>Digital Art</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-gray-900 shadow-lg">
              <h3 className="text-lg font-semibold mb-4">History</h3>
              <div className="space-y-4">
                <p className="text-sm text-gray-500">Your generated images will appear here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 