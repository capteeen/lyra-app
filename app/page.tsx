import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Video, Image as ImageIcon, Bot, CheckCircle } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
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

      {/* CTA Section - Gradient Border */}
      <section className="py-20">
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
    </div>
  );
}
