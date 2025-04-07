'use client';

import { ArrowRight, Sparkles, Video, Image as ImageIcon, Bot, CheckCircle, Star, Repeat, 
  CircleDollarSign, Zap, CloudCog, Wallet, ShoppingCart, Share2, Bot as BotIcon, 
  Swords, Globe, Puzzle, Database, FileCheck, UserCog, Paintbrush, Mic2, User, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white dark:bg-gray-950">
      {/* Hero Section - Split Design */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-950 dark:to-gray-900">
        <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
        <div className="container max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px] items-center">
            <div className="flex flex-col justify-center space-y-8 max-w-2xl mx-auto lg:mx-0">
              <div className="space-y-6">
                <div className="inline-flex items-center rounded-lg bg-gray-100 dark:bg-gray-800 px-3 py-1 text-sm dark:text-gray-300">
                  <Sparkles className="mr-2 h-4 w-4" />
                  Powered by Advanced AI
                </div>
                <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                  Transform Your Ideas Into Reality
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Experience the future of creativity with Lyra's AI-powered tools. Generate images, process videos, and interact with intelligent assistants.
                </p>
              </div>
              <div className="flex flex-col space-y-6">
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center">
                    <CheckCircle className="mr-1 h-4 w-4 text-green-500" />
                    Free Trial
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="mr-1 h-4 w-4 text-green-500" />
                    No Credit Card
                  </div>
                </div>

                {/* Token Information */}
                <div className="flex flex-col space-y-4 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                  <div className="flex items-center space-x-2">
                    <CircleDollarSign className="h-5 w-5 text-indigo-500" />
                    <span className="font-semibold text-lg">$LYRA Token</span>
                    <div className="px-2 py-1 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 text-xs font-medium">
                      Solana
                    </div>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500 dark:text-gray-400">Total Supply:</span>
                      <span className="font-mono font-medium">1,000,000,000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500 dark:text-gray-400">Contract Address:</span>
                      <div className="flex items-center space-x-2">
                        <span className="font-mono text-sm bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-lg">Coming Soon</span>
                        <button 
                          className="p-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                          title="Copy address"
                          disabled
                        >
                          <svg 
                            className="w-4 h-4 text-gray-500" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth={2} 
                              d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" 
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative flex items-center justify-center lg:justify-end">
              <div className="relative w-full max-w-[500px] aspect-square rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 p-1">
                <div className="absolute inset-0 rounded-full bg-white dark:bg-gray-950 m-1"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Center Image */}
                  <div className="relative w-[80%] h-[80%] rounded-full overflow-hidden">
                    <img 
                      src="/2BAFEFEA-08D1-4B11-B2AD-4A8A5DDB03DE.PNG" 
                      alt="Lyra AI Assistant"
                      className="w-full h-full object-cover object-top transform translate-y-[10%]"
                    />
                  </div>
                  
                  {/* Fixed Position Icons */}
                  <div className="absolute inset-0">
                    {/* Primary Icons */}
                    {/* Top Icon */}
                    <div className="absolute top-[15%] left-1/2 -translate-x-1/2">
                      <div className="bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900 dark:to-purple-900 p-3 rounded-lg shadow-lg relative backdrop-blur-sm hover:scale-110 transition-transform">
                        <ImageIcon className="h-6 w-6 text-indigo-500" />
                        <div className="absolute -top-1 -right-1 h-2 w-2 bg-indigo-400 rounded-full animate-sparkle-1"></div>
                      </div>
                    </div>

                    {/* Right Icon */}
                    <div className="absolute top-1/2 right-[15%] -translate-y-1/2">
                      <div className="bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 p-3 rounded-lg shadow-lg relative backdrop-blur-sm hover:scale-110 transition-transform">
                        <Video className="h-6 w-6 text-purple-500" />
                        <div className="absolute -top-1 -right-1 h-2 w-2 bg-purple-400 rounded-full animate-sparkle-2"></div>
                      </div>
                    </div>

                    {/* Bottom Icon */}
                    <div className="absolute bottom-[15%] left-1/2 -translate-x-1/2">
                      <div className="bg-gradient-to-br from-pink-100 to-rose-100 dark:from-pink-900 dark:to-rose-900 p-3 rounded-lg shadow-lg relative backdrop-blur-sm hover:scale-110 transition-transform">
                        <Bot className="h-6 w-6 text-pink-500" />
                        <div className="absolute -top-1 -right-1 h-2 w-2 bg-pink-400 rounded-full animate-sparkle-1"></div>
                      </div>
                    </div>

                    {/* Left Icon */}
                    <div className="absolute top-1/2 left-[15%] -translate-y-1/2">
                      <div className="bg-gradient-to-br from-rose-100 to-indigo-100 dark:from-rose-900 dark:to-indigo-900 p-3 rounded-lg shadow-lg relative backdrop-blur-sm hover:scale-110 transition-transform">
                        <Sparkles className="h-6 w-6 text-rose-500" />
                        <div className="absolute -top-1 -right-1 h-2 w-2 bg-rose-400 rounded-full animate-sparkle-2"></div>
                      </div>
                    </div>

                    {/* Secondary Icons (Smaller) */}
                    <div className="absolute top-[30%] right-[30%]">
                      <div className="bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900 dark:to-purple-900 p-2 rounded-lg shadow-lg relative backdrop-blur-sm hover:scale-110 transition-transform">
                        <ImageIcon className="h-4 w-4 text-indigo-500" />
                      </div>
                    </div>

                    <div className="absolute top-[30%] left-[30%]">
                      <div className="bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 p-2 rounded-lg shadow-lg relative backdrop-blur-sm hover:scale-110 transition-transform">
                        <Video className="h-4 w-4 text-purple-500" />
                      </div>
                    </div>

                    <div className="absolute bottom-[30%] right-[30%]">
                      <div className="bg-gradient-to-br from-pink-100 to-rose-100 dark:from-pink-900 dark:to-rose-900 p-2 rounded-lg shadow-lg relative backdrop-blur-sm hover:scale-110 transition-transform">
                        <Bot className="h-4 w-4 text-pink-500" />
                      </div>
                    </div>

                    <div className="absolute bottom-[30%] left-[30%]">
                      <div className="bg-gradient-to-br from-rose-100 to-indigo-100 dark:from-rose-900 dark:to-indigo-900 p-2 rounded-lg shadow-lg relative backdrop-blur-sm hover:scale-110 transition-transform">
                        <Sparkles className="h-4 w-4 text-rose-500" />
                      </div>
                    </div>

                    {/* Tiny Icons */}
                    <div className="absolute top-[45%] right-[20%]">
                      <div className="bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900 dark:to-purple-900 p-1.5 rounded-md shadow-lg relative backdrop-blur-sm hover:scale-110 transition-transform">
                        <ImageIcon className="h-3 w-3 text-indigo-500" />
                      </div>
                    </div>

                    <div className="absolute bottom-[45%] left-[20%]">
                      <div className="bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 p-1.5 rounded-md shadow-lg relative backdrop-blur-sm hover:scale-110 transition-transform">
                        <Video className="h-3 w-3 text-purple-500" />
                      </div>
                    </div>

                    {/* Background Sparkles */}
                    <div className="absolute inset-0">
                      <div className="absolute top-[35%] left-[35%] h-1 w-1 bg-purple-300/50 rounded-full animate-sparkle-1"></div>
                      <div className="absolute top-[65%] left-[35%] h-1 w-1 bg-pink-300/50 rounded-full animate-sparkle-2"></div>
                      <div className="absolute top-[35%] right-[35%] h-1 w-1 bg-indigo-300/50 rounded-full animate-sparkle-1"></div>
                      <div className="absolute bottom-[35%] right-[35%] h-1 w-1 bg-rose-300/50 rounded-full animate-sparkle-2"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Gradient Border */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container max-w-6xl mx-auto px-4 md:px-6">
          <div className="relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
            <div className="relative bg-white dark:bg-gray-950 m-[1px] rounded-[calc(1.5rem-1px)]">
              <div className="p-8 md:p-12 lg:p-16 flex flex-col items-center text-center space-y-8">
                <Sparkles className="h-16 w-16 text-indigo-500" />
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Get Started?</h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Join thousands of creators and professionals using Lyra to bring their ideas to life.
                </p>
                <div className="flex flex-col gap-4 min-[400px]:flex-row">
                  <Link href="/create">
                    <Button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                      Start Creating Now
                    </Button>
                  </Link>
                  <Button variant="outline">Contact Sales</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Card Grid */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Powerful AI Features</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Everything you need to bring your creative vision to life, powered by cutting-edge AI technology.
            </p>
          </div>
          <div className="mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-16 items-start">
            {/* Image Generation Card */}
            <div className="relative group overflow-hidden rounded-xl border bg-white dark:bg-gray-900 p-1">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity"></div>
              <div className="p-6">
                <div className="relative w-12 h-12 mb-6">
                  <div className="absolute inset-0 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg transform rotate-6"></div>
                  <div className="absolute inset-0 bg-indigo-50 dark:bg-indigo-900/60 rounded-lg transform -rotate-3"></div>
                  <div className="relative flex items-center justify-center w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg">
                    <ImageIcon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Image Generation</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Create stunning, unique images from text descriptions using state-of-the-art AI models.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-gray-500 dark:text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    Multiple AI Models
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    Style Customization
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    Batch Processing
                  </li>
                </ul>
              </div>
            </div>

            {/* Video Processing Card */}
            <div className="relative group overflow-hidden rounded-xl border bg-white dark:bg-gray-900 p-1">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity"></div>
              <div className="p-6">
                <div className="relative w-12 h-12 mb-6">
                  <div className="absolute inset-0 bg-purple-100 dark:bg-purple-900/30 rounded-lg transform rotate-6"></div>
                  <div className="absolute inset-0 bg-purple-50 dark:bg-purple-900/60 rounded-lg transform -rotate-3"></div>
                  <div className="relative flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg">
                    <Video className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Video Processing</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Transform and enhance your videos with advanced AI-powered processing tools.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-gray-500 dark:text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    Real-time Enhancement
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    Smart Editing
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    Format Conversion
                  </li>
                </ul>
              </div>
            </div>

            {/* AI Assistant Card */}
            <div className="relative group overflow-hidden rounded-xl border bg-white dark:bg-gray-900 p-1">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-rose-500 opacity-0 group-hover:opacity-10 transition-opacity"></div>
              <div className="p-6">
                <div className="relative w-12 h-12 mb-6">
                  <div className="absolute inset-0 bg-pink-100 dark:bg-pink-900/30 rounded-lg transform rotate-6"></div>
                  <div className="absolute inset-0 bg-pink-50 dark:bg-pink-900/60 rounded-lg transform -rotate-3"></div>
                  <div className="relative flex items-center justify-center w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-lg">
                    <Bot className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">AI Assistant</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Get intelligent responses and assistance powered by advanced language models.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-gray-500 dark:text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    24/7 Availability
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    Multi-language Support
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    Custom Training
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <div className="bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl flex items-center justify-center">
                <Star className="w-8 h-8 mr-2 text-indigo-500" /> Development Roadmap
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-400">
                Our journey to revolutionize AI-powered content creation
              </p>
            </div>

            <div className="mt-16">
              {/* Token Utility - Moved to top */}
              <div className="mb-24">
                <div className="flex items-center justify-center mb-8">
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-2 rounded-full flex items-center">
                    <CircleDollarSign className="w-5 h-5 mr-2" />
                    <span className="font-semibold">Token Utility</span>
                  </div>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  <div className="rounded-xl bg-white dark:bg-gray-800 shadow-lg p-6 transform hover:-translate-y-1 duration-200">
                    <div className="flex flex-col items-center space-y-4">
                      <Wallet className="w-10 h-10 text-indigo-500" />
                      <span className="text-sm font-medium text-center">Pay for AI tools and credits</span>
                    </div>
                  </div>
                  <div className="rounded-xl bg-white dark:bg-gray-800 shadow-lg p-6 transform hover:-translate-y-1 duration-200">
                    <div className="flex flex-col items-center space-y-4">
                      <Star className="w-10 h-10 text-purple-500" />
                      <span className="text-sm font-medium text-center">Unlock premium features</span>
                    </div>
                  </div>
                  <div className="rounded-xl bg-white dark:bg-gray-800 shadow-lg p-6 transform hover:-translate-y-1 duration-200">
                    <div className="flex flex-col items-center space-y-4">
                      <Database className="w-10 h-10 text-pink-500" />
                      <span className="text-sm font-medium text-center">Stake for AI model training</span>
                    </div>
                  </div>
                  <div className="rounded-xl bg-white dark:bg-gray-800 shadow-lg p-6 transform hover:-translate-y-1 duration-200">
                    <div className="flex flex-col items-center space-y-4">
                      <BotIcon className="w-10 h-10 text-rose-500" />
                      <span className="text-sm font-medium text-center">Enable "Hire My AI" features</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline Container */}
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 rounded-full" />

                {/* Q1 2025: Foundations */}
                <div className="relative mb-24">
                  <div className="flex items-center justify-center mb-8">
                    <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-2 rounded-full flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      <span className="font-semibold">Q1 2025: Foundations (Current)</span>
                    </div>
                  </div>
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow p-6 transform hover:-translate-y-1 duration-200">
                      <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500">
                        <ImageIcon className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-lg font-semibold mb-2">AI Image Generation</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">High-quality image generation with customizable styles</p>
                    </div>
                    <div className="rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow p-6 transform hover:-translate-y-1 duration-200">
                      <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500">
                        <Video className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-lg font-semibold mb-2">AI Video Generation</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Dynamic video creation from text prompts</p>
                    </div>
                    <div className="rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow p-6 transform hover:-translate-y-1 duration-200">
                      <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-gradient-to-br from-pink-500 to-rose-500">
                        <Mic2 className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-lg font-semibold mb-2">Text-to-Speech</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Multiple voices with natural speech patterns</p>
                    </div>
                    <div className="rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow p-6 transform hover:-translate-y-1 duration-200">
                      <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-gradient-to-br from-rose-500 to-indigo-500">
                        <Paintbrush className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-lg font-semibold mb-2">Image Editing</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Advanced editing with filters and style transfer</p>
                    </div>
                  </div>
                </div>

                {/* Future Phases */}
                <div className="space-y-24">
                  {/* Q2 2025 */}
                  <div className="relative">
                    <div className="flex items-center justify-center mb-8">
                      <div className="bg-white dark:bg-gray-800 text-indigo-500 px-6 py-2 rounded-full shadow-lg flex items-center">
                        <Repeat className="w-5 h-5 mr-2" />
                        <span className="font-semibold">Q2 2025: Creative Expansion</span>
                      </div>
                    </div>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                      <div className="col-span-2 rounded-xl bg-white dark:bg-gray-800 shadow-lg p-6">
                        <ul className="space-y-4">
                          <li className="flex items-center text-gray-600 dark:text-gray-400">
                            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 mr-3">
                              <Video className="w-4 h-4 text-white" />
                            </div>
                            AI Scene Builder - Comic strips & storyboards
                          </li>
                          <li className="flex items-center text-gray-600 dark:text-gray-400">
                            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 mr-3">
                              <Mic2 className="w-4 h-4 text-white" />
                            </div>
                            Voice Cloning AI - Personal voice customization
                          </li>
                          <li className="flex items-center text-gray-600 dark:text-gray-400">
                            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-pink-500 to-rose-500 mr-3">
                              <User className="w-4 h-4 text-white" />
                            </div>
                            AI Avatar Creator - 2D/3D avatars for VTubing
                          </li>
                          <li className="flex items-center text-gray-600 dark:text-gray-400">
                            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-rose-500 to-indigo-500 mr-3">
                              <Lock className="w-4 h-4 text-white" />
                            </div>
                            Token-Gated Access Tiers
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Q3 2025 */}
                  <div className="relative">
                    <div className="flex items-center justify-center mb-8">
                      <div className="bg-white dark:bg-gray-800 text-purple-500 px-6 py-2 rounded-full shadow-lg flex items-center">
                        <Star className="w-5 h-5 mr-2" />
                        <span className="font-semibold">Q3 2025: Creator Monetization</span>
                      </div>
                    </div>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                      <div className="rounded-xl bg-white dark:bg-gray-800 shadow-lg p-6 transform hover:-translate-y-1 duration-200">
                        <div className="flex items-center mb-4">
                          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 mr-3">
                            <ShoppingCart className="w-5 h-5 text-white" />
                          </div>
                          <h4 className="font-semibold">AI Marketplace</h4>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Sell prompts, models & templates</p>
                      </div>
                      <div className="rounded-xl bg-white dark:bg-gray-800 shadow-lg p-6 transform hover:-translate-y-1 duration-200">
                        <div className="flex items-center mb-4">
                          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-pink-500 to-rose-500 mr-3">
                            <Share2 className="w-5 h-5 text-white" />
                          </div>
                          <h4 className="font-semibold">Auto-Post to Social</h4>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Seamless social media integration</p>
                      </div>
                      <div className="rounded-xl bg-white dark:bg-gray-800 shadow-lg p-6 transform hover:-translate-y-1 duration-200">
                        <div className="flex items-center mb-4">
                          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-rose-500 to-indigo-500 mr-3">
                            <BotIcon className="w-5 h-5 text-white" />
                          </div>
                          <h4 className="font-semibold">"Hire My AI"</h4>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Rent your AI models & earn</p>
                      </div>
                    </div>
                  </div>

                  {/* Q4 2025 */}
                  <div className="relative">
                    <div className="flex items-center justify-center mb-8">
                      <div className="bg-white dark:bg-gray-800 text-pink-500 px-6 py-2 rounded-full shadow-lg flex items-center">
                        <Zap className="w-5 h-5 mr-2" />
                        <span className="font-semibold">Q4 2025: Social + Creator Economy</span>
                      </div>
                    </div>
                    <div className="grid gap-6 sm:grid-cols-3">
                      <div className="rounded-xl bg-white dark:bg-gray-800 shadow-lg p-6">
                        <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500">
                          <Swords className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="text-lg font-semibold mb-2 text-center">Prompt Battle Arena</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 text-center">Weekly competitions with token rewards</p>
                      </div>
                      <div className="rounded-xl bg-white dark:bg-gray-800 shadow-lg p-6">
                        <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500">
                          <Globe className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="text-lg font-semibold mb-2 text-center">Creative Feed</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 text-center">Social platform for AI content</p>
                      </div>
                      <div className="rounded-xl bg-white dark:bg-gray-800 shadow-lg p-6">
                        <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-gradient-to-br from-pink-500 to-rose-500">
                          <Puzzle className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="text-lg font-semibold mb-2 text-center">Plugin Hub</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 text-center">Extensible mini-apps platform</p>
                      </div>
                    </div>
                  </div>

                  {/* Q1-Q2 2026 */}
                  <div className="relative">
                    <div className="flex items-center justify-center mb-8">
                      <div className="bg-white dark:bg-gray-800 text-rose-500 px-6 py-2 rounded-full shadow-lg flex items-center">
                        <CloudCog className="w-5 h-5 mr-2" />
                        <span className="font-semibold">Q1-Q2 2026: Decentralization & On-Chain AI</span>
                      </div>
                    </div>
                    <div className="grid gap-6 sm:grid-cols-3">
                      <div className="rounded-xl bg-white dark:bg-gray-800 shadow-lg p-6 transform hover:scale-105 duration-200">
                        <div className="flex flex-col items-center">
                          <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-gradient-to-br from-rose-500 to-indigo-500">
                            <Database className="w-6 h-6 text-white" />
                          </div>
                          <h4 className="text-lg font-semibold mb-2 text-center">AI Training Pools</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400 text-center">Decentralized model training</p>
                        </div>
                      </div>
                      <div className="rounded-xl bg-white dark:bg-gray-800 shadow-lg p-6 transform hover:scale-105 duration-200">
                        <div className="flex flex-col items-center">
                          <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500">
                            <FileCheck className="w-6 h-6 text-white" />
                          </div>
                          <h4 className="text-lg font-semibold mb-2 text-center">Content Licensing</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400 text-center">On-chain rights management</p>
                        </div>
                      </div>
                      <div className="rounded-xl bg-white dark:bg-gray-800 shadow-lg p-6 transform hover:scale-105 duration-200">
                        <div className="flex flex-col items-center">
                          <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500">
                            <UserCog className="w-6 h-6 text-white" />
                          </div>
                          <h4 className="text-lg font-semibold mb-2 text-center">AI Clone Wallets</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400 text-center">Autonomous AI creation & earning</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-950 dark:to-gray-900">
        <div className="container max-w-6xl mx-auto px-4 md:px-6">
          <div className="relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-10"></div>
            <div className="relative bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm rounded-3xl">
              <div className="p-8 md:p-12 flex flex-col items-center text-center space-y-6">
                <div className="relative w-16 h-16">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl transform rotate-6 opacity-30"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl transform -rotate-3 opacity-30"></div>
                  <div className="relative flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-2xl">
                    <svg viewBox="0 0 24 24" className="w-8 h-8 text-white" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </div>
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Follow Us on X (Twitter)</h2>
                  <p className="text-gray-500 dark:text-gray-400">
                    Stay updated with our latest AI innovations and announcements
                  </p>
                </div>
                <a 
                  href="https://x.com/lyra_agent?s=21&t=ARvJV7n4r1UMTlD-08jo_g"
            target="_blank"
            rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-medium hover:opacity-90 transition-opacity"
                >
                  <span>@lyra_agent</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white dark:bg-gray-950">
        <div className="container max-w-6xl mx-auto px-4 md:px-6 py-12">
          <div className="flex justify-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © 2024 Lyra. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
