'use client';

import { Button } from "@/components/ui/button";
import { Wand2, ArrowLeft, Sparkles, Upload, ImageIcon } from "lucide-react";
import Link from "next/link";
import { useState, useCallback } from "react";
import { useGeneration } from "@/hooks/useGeneration";
import Image from "next/image";
import { useDropzone } from 'react-dropzone';

export default function ImageEditingPage() {
  const [image, setImage] = useState<string | null>(null);
  const [prompt, setPrompt] = useState('');
  const [enhancementLevel, setEnhancementLevel] = useState(50);
  const [aspectRatio, setAspectRatio] = useState('original');
  const { generate, loading, error, output } = useGeneration('edit');

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/jpeg': ['.jpg', '.jpeg'],
      'image/png': ['.png'],
      'image/webp': ['.webp']
    },
    maxFiles: 1,
  });

  const handleEdit = async () => {
    if (!image || !prompt) return;
    await generate({ image, prompt, enhancementLevel, aspectRatio });
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
            <h1 className="text-xl font-semibold">Image Editing</h1>
          </div>
        </div>
      </header>

      <div className="container max-w-6xl mx-auto px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_400px]">
          {/* Main Content */}
          <div className="space-y-6">
            {/* Image Upload */}
            <div className="p-8 rounded-2xl bg-white dark:bg-gray-900 shadow-lg">
              <div className="space-y-4">
                <h2 className="text-lg font-semibold">Upload Image</h2>
                <div 
                  {...getRootProps()}
                  className="border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-lg p-8 cursor-pointer hover:border-gray-300 dark:hover:border-gray-600 transition-colors"
                >
                  <input {...getInputProps()} />
                  <div className="flex flex-col items-center space-y-4">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-rose-500 to-orange-500 flex items-center justify-center">
                      <Upload className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-center">
                      {isDragActive ? (
                        <p className="text-sm text-gray-500">Drop the image here</p>
                      ) : (
                        <>
                          <p className="text-sm text-gray-500">Drag and drop your image here, or click to select</p>
                          <p className="text-xs text-gray-400 mt-1">Supports JPG, PNG, WEBP</p>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <textarea
                    className="w-full h-24 p-4 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-rose-500"
                    placeholder="Describe how you want to edit the image..."
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                  />
                  <div className="flex items-center gap-4">
                    <Button 
                      className="bg-gradient-to-r from-rose-500 to-orange-500"
                      onClick={handleEdit}
                      disabled={loading || !image || !prompt}
                    >
                      {loading ? 'Processing...' : 'Apply Changes'} <Sparkles className="ml-2 h-4 w-4" />
                    </Button>
                    <p className="text-sm text-gray-500">Using Stable Diffusion</p>
                  </div>
                  {error && (
                    <p className="text-sm text-red-500">{error}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Image Preview */}
            <div className="grid gap-8 grid-cols-2">
              <div className="aspect-square rounded-2xl bg-white dark:bg-gray-900 shadow-lg flex items-center justify-center border-2 border-dashed border-gray-200 dark:border-gray-700 overflow-hidden">
                {image ? (
                  <div className="relative w-full h-full">
                    <Image
                      src={image}
                      alt="Original image"
                      fill
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <div className="text-center space-y-4 p-8">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-rose-500 to-orange-500 flex items-center justify-center mx-auto">
                      <ImageIcon className="h-6 w-6 text-white" />
                    </div>
                    <p className="text-gray-500">Original Image</p>
                  </div>
                )}
              </div>

              <div className="aspect-square rounded-2xl bg-white dark:bg-gray-900 shadow-lg flex items-center justify-center border-2 border-dashed border-gray-200 dark:border-gray-700 overflow-hidden">
                {output && output[0] ? (
                  <div className="relative w-full h-full">
                    <Image
                      src={output[0]}
                      alt="Edited image"
                      fill
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <div className="text-center space-y-4 p-8">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-rose-500 to-orange-500 flex items-center justify-center mx-auto">
                      <Wand2 className="h-6 w-6 text-white" />
                    </div>
                    <p className="text-gray-500">Edited Image</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Settings Panel */}
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-white dark:bg-gray-900 shadow-lg">
              <h3 className="text-lg font-semibold mb-4">Edit Settings</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Aspect Ratio</label>
                  <select 
                    className="w-full p-2 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
                    value={aspectRatio}
                    onChange={(e) => setAspectRatio(e.target.value)}
                  >
                    <option value="original">Original</option>
                    <option value="1:1">1:1 Square</option>
                    <option value="4:3">4:3 Standard</option>
                    <option value="16:9">16:9 Widescreen</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Enhancement Level</label>
                  <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    value={enhancementLevel}
                    onChange={(e) => setEnhancementLevel(Number(e.target.value))}
                    className="w-full"
                  />
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-gray-900 shadow-lg">
              <h3 className="text-lg font-semibold mb-4">History</h3>
              <div className="space-y-4">
                <p className="text-sm text-gray-500">Your edited images will appear here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 