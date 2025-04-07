'use client';

import { Button } from "@/components/ui/button";
import { ArrowLeft, Sparkles, Play } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function VideoPage() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const [predictionId, setPredictionId] = useState<string | null>(null);

  // Poll for video status
  useEffect(() => {
    if (!predictionId || !loading) return;

    const pollInterval = setInterval(async () => {
      try {
        const response = await fetch('/api/video', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ predictionId }),
        });

        const data = await response.json();

        if (data.status === 'error') {
          throw new Error(data.error);
        }

        if (data.status === 'success') {
          setVideoUrl(data.url);
          setLoading(false);
          setPredictionId(null);
          clearInterval(pollInterval);
        }
      } catch (err: any) {
        setError(err.message);
        setLoading(false);
        setPredictionId(null);
        clearInterval(pollInterval);
      }
    }, 1000);

    return () => clearInterval(pollInterval);
  }, [predictionId, loading]);

  // Progress bar animation
  useEffect(() => {
    if (!loading) {
      setProgress(0);
      return;
    }

    const totalDuration = 184972; // Total duration in milliseconds
    const intervalDuration = 100; // Update every 100ms
    const steps = totalDuration / intervalDuration;
    const incrementPerStep = 100 / steps;
    let currentProgress = 0;

    const interval = setInterval(() => {
      currentProgress += incrementPerStep;
      if (currentProgress >= 100) {
        clearInterval(interval);
        currentProgress = 100;
      }
      setProgress(currentProgress);
    }, intervalDuration);

    return () => clearInterval(interval);
  }, [loading]);

  const generateVideo = async () => {
    try {
      setLoading(true);
      setError(null);
      setVideoUrl(null);
      setProgress(0);
      setPredictionId(null);

      const response = await fetch('/api/video', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();

      if (data.status === 'error') {
        throw new Error(data.error);
      }

      if (data.status === 'pending') {
        setPredictionId(data.id);
      } else if (data.status === 'success') {
        setVideoUrl(data.url);
        setLoading(false);
      }
    } catch (err: any) {
      setError(err.message);
      setLoading(false);
      console.error('Video generation error:', err);
    }
  };

  // Format time remaining
  const formatTimeRemaining = () => {
    const totalDuration = 184972;
    const remaining = totalDuration * (1 - progress / 100);
    const seconds = Math.ceil(remaining / 1000);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link href="/" className="text-gray-400 hover:text-white transition">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <h1 className="text-2xl font-bold">Video Generation</h1>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="space-y-4">
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Describe the video you want to generate..."
              className="w-full h-32 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
            />
            <Button
              onClick={generateVideo}
              disabled={!prompt || loading}
              className="w-full py-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-lg flex items-center justify-center gap-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5" />
                  Generate Video
                </>
              )}
            </Button>
            {loading && (
              <div className="space-y-2">
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-200"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <div className="flex justify-between text-sm text-gray-400">
                  <span>{Math.round(progress)}%</span>
                  <span>Estimated time: {formatTimeRemaining()}</span>
                </div>
              </div>
            )}
            {error && (
              <div className="text-red-500 text-sm mt-2">
                {error}
              </div>
            )}
          </div>

          {/* Video Display Section */}
          <div className="bg-gray-800 rounded-lg p-4 min-h-[300px] flex items-center justify-center">
            {videoUrl ? (
              <video
                src={videoUrl}
                controls
                className="max-w-full max-h-[500px] rounded-lg"
                autoPlay
                loop
              >
                Your browser does not support the video tag.
              </video>
            ) : (
              <div className="text-gray-400 flex flex-col items-center gap-2">
                <Play className="w-12 h-12" />
                <p>Generated video will appear here</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 