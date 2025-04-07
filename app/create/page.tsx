import { Button } from "@/components/ui/button";
import { ImageIcon, Video, Bot, Mic, Wand2, Sparkles } from "lucide-react";
import Link from "next/link";

export default function CreatePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-950 dark:to-gray-900">
      {/* Header */}
      <header className="border-b bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl">
        <div className="container max-w-6xl mx-auto px-4 h-16 flex items-center">
          <Link href="/" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            Lyra
          </Link>
        </div>
      </header>

      <div className="container max-w-6xl mx-auto px-4 py-12">
        <div className="space-y-8">
          {/* Title Section */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              Create with AI
            </h1>
            <p className="text-gray-500 dark:text-gray-400 max-w-[600px] mx-auto">
              Choose your creative tool and start bringing your ideas to life
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Image Generation */}
            <Link href="/create/image" className="group">
              <div className="relative h-[300px] p-6 rounded-3xl bg-white dark:bg-gray-900 shadow-lg overflow-hidden border border-gray-200 dark:border-gray-800 transition-all hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 group-hover:opacity-100 opacity-0 transition-opacity" />
                <div className="relative z-10 h-full flex flex-col">
                  <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center mb-4">
                    <ImageIcon className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-semibold mb-2">Image Generation</h2>
                  <p className="text-gray-500 dark:text-gray-400 mb-6">
                    Create stunning images from text descriptions using Recraft AI
                  </p>
                  <div className="mt-auto flex items-center text-indigo-500 font-medium">
                    Start Creating <Sparkles className="ml-2 h-4 w-4" />
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 blur-3xl rounded-full transform translate-x-1/2 translate-y-1/2 group-hover:scale-150 transition-transform" />
              </div>
            </Link>

            {/* Video Generation */}
            <Link href="/create/video" className="group">
              <div className="relative h-[300px] p-6 rounded-3xl bg-white dark:bg-gray-900 shadow-lg overflow-hidden border border-gray-200 dark:border-gray-800 transition-all hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 group-hover:opacity-100 opacity-0 transition-opacity" />
                <div className="relative z-10 h-full flex flex-col">
                  <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4">
                    <Video className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-semibold mb-2">Video Generation</h2>
                  <p className="text-gray-500 dark:text-gray-400 mb-6">
                    Create videos from text prompts using WAN-2.1
                  </p>
                  <div className="mt-auto flex items-center text-purple-500 font-medium">
                    Start Creating <Sparkles className="ml-2 h-4 w-4" />
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 blur-3xl rounded-full transform translate-x-1/2 translate-y-1/2 group-hover:scale-150 transition-transform" />
              </div>
            </Link>

            {/* Text to Speech */}
            <Link href="/create/speech" className="group">
              <div className="relative h-[300px] p-6 rounded-3xl bg-white dark:bg-gray-900 shadow-lg overflow-hidden border border-gray-200 dark:border-gray-800 transition-all hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-rose-500/10 group-hover:opacity-100 opacity-0 transition-opacity" />
                <div className="relative z-10 h-full flex flex-col">
                  <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center mb-4">
                    <Mic className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-semibold mb-2">Text to Speech</h2>
                  <p className="text-gray-500 dark:text-gray-400 mb-6">
                    Convert text to natural speech using Kokoro
                  </p>
                  <div className="mt-auto flex items-center text-pink-500 font-medium">
                    Start Creating <Sparkles className="ml-2 h-4 w-4" />
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-500/20 to-rose-500/20 blur-3xl rounded-full transform translate-x-1/2 translate-y-1/2 group-hover:scale-150 transition-transform" />
              </div>
            </Link>

            {/* AI Chat */}
            <Link href="/create/chat" className="group">
              <div className="relative h-[300px] p-6 rounded-3xl bg-white dark:bg-gray-900 shadow-lg overflow-hidden border border-gray-200 dark:border-gray-800 transition-all hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 group-hover:opacity-100 opacity-0 transition-opacity" />
                <div className="relative z-10 h-full flex flex-col">
                  <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center mb-4">
                    <Bot className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-semibold mb-2">AI Chat</h2>
                  <p className="text-gray-500 dark:text-gray-400 mb-6">
                    Get creative assistance and guidance from Lyra AI
                  </p>
                  <div className="mt-auto flex items-center text-blue-500 font-medium">
                    Start Chatting <Sparkles className="ml-2 h-4 w-4" />
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 blur-3xl rounded-full transform translate-x-1/2 translate-y-1/2 group-hover:scale-150 transition-transform" />
              </div>
            </Link>

            {/* Image Editing */}
            <Link href="/create/edit" className="group">
              <div className="relative h-[300px] p-6 rounded-3xl bg-white dark:bg-gray-900 shadow-lg overflow-hidden border border-gray-200 dark:border-gray-800 transition-all hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 to-orange-500/10 group-hover:opacity-100 opacity-0 transition-opacity" />
                <div className="relative z-10 h-full flex flex-col">
                  <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-rose-500 to-orange-500 flex items-center justify-center mb-4">
                    <Wand2 className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-semibold mb-2">Image Editing</h2>
                  <p className="text-gray-500 dark:text-gray-400 mb-6">
                    Edit and enhance images using Flux Redux
                  </p>
                  <div className="mt-auto flex items-center text-rose-500 font-medium">
                    Start Creating <Sparkles className="ml-2 h-4 w-4" />
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-rose-500/20 to-orange-500/20 blur-3xl rounded-full transform translate-x-1/2 translate-y-1/2 group-hover:scale-150 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 