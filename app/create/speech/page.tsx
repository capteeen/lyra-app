'use client';

import { Button } from "@/components/ui/button";
import { Mic, ArrowLeft, Sparkles, Play, Pause } from "lucide-react";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export default function TextToSpeechPage() {
  const [text, setText] = useState('');
  const [voice, setVoice] = useState('en_alloy');
  const [speed, setSpeed] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleGenerate = async () => {
    if (!text) return;
    
    try {
      setLoading(true);
      setError(null);
      setAudioUrl(null);

      const response = await fetch('/api/speech', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text, voice, speed }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to generate speech');
      }

      setAudioUrl(data.url);
      setDuration(data.duration || 0);
    } catch (err: any) {
      setError(err.message);
      console.error('Speech generation error:', err);
    } finally {
      setLoading(false);
    }
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

  useEffect(() => {
    if (!audioRef.current) return;

    const audio = audioRef.current;
    const updateTime = () => setCurrentTime(audio.currentTime);
    const handleLoadedMetadata = () => setDuration(audio.duration);

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('ended', () => setIsPlaying(false));

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('ended', () => setIsPlaying(false));
    };
  }, [audioRef.current]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
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
                  <p className="text-sm text-gray-500">Using OpenAI TTS</p>
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
                  {audioUrl ? (
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
                        src={audioUrl}
                        onEnded={() => setIsPlaying(false)} 
                        className="hidden" 
                      />
                      <div className="w-48 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-pink-500 rounded-full transition-all duration-150"
                          style={{ width: `${(currentTime / duration) * 100}%` }}
                        />
                      </div>
                      <span className="text-sm text-gray-500">
                        {formatTime(currentTime)} / {formatTime(duration)}
                      </span>
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
                    <option value="en_alloy">Alloy (Neutral)</option>
                    <option value="en_echo">Echo (Male)</option>
                    <option value="en_fable">Fable (Expressive)</option>
                    <option value="en_nova">Nova (Female)</option>
                    <option value="en_shimmer">Shimmer (Warm)</option>
                    <option value="en_onyx">Onyx (Deep)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Speed ({speed}x)</label>
                  <input 
                    type="range" 
                    min="0.25" 
                    max="4.0" 
                    step="0.25" 
                    value={speed}
                    onChange={(e) => setSpeed(Number(e.target.value))}
                    className="w-full accent-pink-500"
                  />
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-gray-900 shadow-lg">
              <h3 className="text-lg font-semibold mb-4">Tips</h3>
              <div className="space-y-2 text-sm text-gray-500">
                <p>• Try different voices for variety</p>
                <p>• Adjust speed for natural pacing</p>
                <p>• Use punctuation for better flow</p>
                <p>• Keep text under 4096 characters</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 