import React, { useState, useRef, useEffect } from 'react';
import { Camera, RefreshCw, Upload, Image as ImageIcon, CheckCircle, BarChart3, Settings, Play, ShieldAlert, Sparkles, AlertCircle, History, BrainCircuit } from 'lucide-react';
import { DemoSession } from '../types';

export default function InteractiveDemo() {
  const [mode, setMode] = useState<'preset' | 'webcam' | 'upload'>('preset');
  const [selectedPreset, setSelectedPreset] = useState<number>(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [cameraError, setCameraError] = useState<string | null>(null);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [dragActive, setDragActive] = useState(false);

  // Core Simulation Output State
  const [detectedEmotion, setDetectedEmotion] = useState<string>('Neutral');
  const [confidence, setConfidence] = useState<number>(89.4);
  const [inferenceTime, setInferenceTime] = useState<number>(14.2);
  const [recommendation, setRecommendation] = useState<string>('Core progression active. Maintain standard lesson sequence.');

  const [history, setHistory] = useState<DemoSession[]>([
    { id: '1', timestamp: '10:42:15', detectedEmotion: 'Happy', recommendationGiven: 'Advanced Learning Module', confidence: 94.2 },
    { id: '2', timestamp: '10:45:30', detectedEmotion: 'Neutral', recommendationGiven: 'Syllabus Core Lessons', confidence: 88.7 },
    { id: '3', timestamp: '10:49:12', detectedEmotion: 'Sad', recommendationGiven: 'Motivational Video Capsule', confidence: 79.1 },
  ]);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Preset faces catalog
  const presets = [
    {
      name: 'Happy Student',
      emoji: '😊',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400',
      emotion: 'Happy',
      confidence: 96.4,
      recommendation: 'Advanced Learning. Load algorithms speed trials and premium sandbox puzzles.'
    },
    {
      name: 'Puzzled/Sad Student',
      emoji: '😢',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
      emotion: 'Sad',
      confidence: 84.1,
      recommendation: 'Warmup & Motivational Content. Pause challenges to play introductory visual grids.'
    },
    {
      name: 'Overwhelmed Student',
      emoji: '😨',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400',
      emotion: 'Fear',
      confidence: 78.9,
      recommendation: 'Beginner Scaffold Sandbox. Redirect to tooltip references and code checklists.'
    },
    {
      name: 'Frustrated Student',
      emoji: '😡',
      image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=400',
      emotion: 'Angry',
      confidence: 91.5,
      recommendation: 'Relaxation & Guided Deep Breathing. Mute sounds and trigger 1-min mental break.'
    }
  ];

  // Stop camera feed
  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach(track => track.stop());
      videoRef.current.srcObject = null;
    }
    setIsCameraActive(false);
  };

  // Start webcam
  const startCamera = async () => {
    setCameraError(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { width: 400, height: 300 } });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setIsCameraActive(true);
      }
    } catch (err: any) {
      setCameraError('Webcam blocked or unavailable. Ensure permissions are granted or use preset images.');
      setIsCameraActive(false);
    }
  };

  // Run CNN simulation pipeline
  const processInference = (emotion: string, conf: number, rec: string) => {
    setIsProcessing(true);
    // Simulate real-time CNN delays
    setTimeout(() => {
      setDetectedEmotion(emotion);
      setConfidence(conf);
      setInferenceTime(parseFloat((10 + Math.random() * 8).toFixed(1)));
      setRecommendation(rec);
      setIsProcessing(false);

      // Save to logs history
      const now = new Date();
      const timeStr = now.toTimeString().split(' ')[0];
      setHistory(prev => [
        {
          id: Date.now().toString(),
          timestamp: timeStr,
          detectedEmotion: emotion,
          recommendationGiven: rec.split('.')[0],
          confidence: conf
        },
        ...prev
      ]);
    }, 1200);
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setUploadedImage(event.target.result as string);
          // Trigger a random processed emotion for uploads
          processInference('Surprise', 86.3, 'Edge Topic Exploration. Capitalize on interest with algorithm trivia modules.');
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileSelect = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setUploadedImage(event.target.result as string);
          processInference('Surprise', 88.5, 'Explore More Topics. Capitalize on engagement with open sandboxes.');
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Clean camera up on unmount
  useEffect(() => {
    return () => {
      stopCamera();
    };
  }, []);

  return (
    <section id="demo-section" className="py-24 bg-transparent transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono tracking-widest text-blue-600 dark:text-blue-400 font-bold uppercase">Engine sandbox</span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Live Emotion Detection Sandbox
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed font-light">
            Test our Convolutional Neural Network (CNN) live. Grant webcam access, drop a localized image, or scroll through preset student profiles to monitor pedagogical adaptations.
          </p>
        </div>

        {/* Dashboard Frame */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Block: Camera Feed/Image Capture Screen */}
          <div className="lg:col-span-7 bg-white/70 dark:bg-slate-950/65 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/60 dark:border-slate-850 shadow-2xl flex flex-col justify-between">
            <div className="space-y-4">
              {/* Selector Mode tabs */}
              <div className="flex bg-slate-100 dark:bg-slate-950 p-1 rounded-xl border border-slate-200/50 dark:border-slate-800/40">
                <button
                  id="demo-mode-preset"
                  onClick={() => { setMode('preset'); stopCamera(); }}
                  className={`flex-1 py-2 rounded-lg text-xs font-medium tracking-wide transition-all cursor-pointer ${
                    mode === 'preset' ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm' : 'text-slate-500 hover:text-slate-700'
                  }`}
                >
                  <span className="flex items-center justify-center space-x-1.5">
                    <ImageIcon className="w-3.5 h-3.5" />
                    <span>Preset Profiles</span>
                  </span>
                </button>

                <button
                  id="demo-mode-webcam"
                  onClick={() => { setMode('webcam'); startCamera(); }}
                  className={`flex-1 py-2 rounded-lg text-xs font-medium tracking-wide transition-all cursor-pointer ${
                    mode === 'webcam' ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm' : 'text-slate-500 hover:text-slate-700'
                  }`}
                >
                  <span className="flex items-center justify-center space-x-1.5">
                    <Camera className="w-3.5 h-3.5" />
                    <span>Active Webcam</span>
                  </span>
                </button>

                <button
                  id="demo-mode-upload"
                  onClick={() => { setMode('upload'); stopCamera(); }}
                  className={`flex-1 py-2 rounded-lg text-xs font-medium tracking-wide transition-all cursor-pointer ${
                    mode === 'upload' ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm' : 'text-slate-500 hover:text-slate-700'
                  }`}
                >
                  <span className="flex items-center justify-center space-x-1.5">
                    <Upload className="w-3.5 h-3.5" />
                    <span>Image Upload</span>
                  </span>
                </button>
              </div>

              {/* ACTIVE DISPLAY PANEL */}
              <div className="relative aspect-video bg-slate-950 rounded-2xl overflow-hidden flex items-center justify-center border border-slate-800/80">
                {/* 1. Preset Profile Mode */}
                {mode === 'preset' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      id="demo-preset-image"
                      src={presets[selectedPreset].image}
                      alt={presets[selectedPreset].name}
                      className="w-full h-full object-cover opacity-80"
                      referrerPolicy="no-referrer"
                    />

                    {/* Landmark tracking overlay (simulated) */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-32 h-32 border-2 border-dashed border-emerald-400/80 rounded-3xl flex items-center justify-center animate-pulse">
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-emerald-500/90 text-white font-mono text-[9px] px-2 py-0.5 rounded uppercase font-bold tracking-widest whitespace-nowrap">
                          DETECTING FACE
                        </div>
                        {/* Dynamic Landmark dots */}
                        <div className="absolute w-1.5 h-1.5 rounded-full bg-emerald-400 top-4 left-6" />
                        <div className="absolute w-1.5 h-1.5 rounded-full bg-emerald-400 top-4 right-6" />
                        <div className="absolute w-1.5 h-1.5 rounded-full bg-emerald-400 bottom-6 left-1/2 -translate-x-1/2" />
                      </div>
                    </div>
                  </div>
                )}

                {/* 2. Live Webcam Mode */}
                {mode === 'webcam' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    {cameraError ? (
                      <div className="p-6 text-center space-y-3">
                        <AlertCircle className="w-10 h-10 text-rose-500 mx-auto" />
                        <p className="text-xs text-slate-300 max-w-sm">{cameraError}</p>
                      </div>
                    ) : (
                      <>
                        <video
                          id="demo-webcam-stream"
                          ref={videoRef}
                          autoPlay
                          playsInline
                          muted
                          className="w-full h-full object-cover scale-x-[-1]"
                        />

                        {isCameraActive && (
                          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="w-36 h-36 border-2 border-blue-500 rounded-3xl flex items-center justify-center relative">
                              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-blue-500 text-white font-mono text-[9px] px-2 py-0.5 rounded uppercase font-bold tracking-widest whitespace-nowrap">
                                WEBCAM FEED LIVE
                              </div>
                              <div className="absolute top-4 left-8 w-1 h-1 bg-blue-400 rounded-full" />
                              <div className="absolute top-4 right-8 w-1 h-1 bg-blue-400 rounded-full" />
                              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-8 h-1.5 bg-blue-400 rounded-full" />
                            </div>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                )}

                {/* 3. Image Upload Mode */}
                {mode === 'upload' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    {uploadedImage ? (
                      <div className="relative w-full h-full">
                        <img
                          id="demo-uploaded-image"
                          src={uploadedImage}
                          alt="Uploaded facial snap"
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                        {/* Simulated landmarker over uploaded image */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                          <div className="w-32 h-32 border-2 border-pink-500/80 rounded-2xl flex items-center justify-center">
                            <span className="absolute -top-6 bg-pink-500 text-white font-mono text-[9px] px-1.5 py-0.5 rounded uppercase font-bold">Processed File</span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div
                        id="demo-drag-drop-zone"
                        onDragEnter={handleDrag}
                        onDragOver={handleDrag}
                        onDragLeave={handleDrag}
                        onDrop={handleDrop}
                        onClick={triggerFileSelect}
                        className={`w-full h-full flex flex-col items-center justify-center border-4 border-dashed rounded-2xl cursor-pointer p-6 transition-colors ${
                          dragActive ? 'border-blue-500 bg-blue-500/5' : 'border-slate-800 bg-slate-950/40 hover:bg-slate-900/20'
                        }`}
                      >
                        <Upload className="w-10 h-10 text-slate-500 animate-bounce mb-3" />
                        <p className="text-xs text-slate-300 font-medium">Drag & Drop Image or Click to Browse</p>
                        <p className="text-[10px] text-slate-500 font-mono mt-1">Supports PNG, JPG, JPEG (Grayscale 48x48 auto-fitted)</p>
                        <input
                          type="file"
                          ref={fileInputRef}
                          onChange={handleFileChange}
                          className="hidden"
                          accept="image/*"
                        />
                      </div>
                    )}
                  </div>
                )}

                {/* Processing Overlay loader */}
                {isProcessing && (
                  <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm flex flex-col items-center justify-center space-y-4">
                    <RefreshCw className="w-10 h-10 text-blue-500 animate-spin" />
                    <div>
                      <span className="text-xs font-mono text-blue-400 uppercase tracking-widest font-bold block text-center">Inference Pending</span>
                      <p className="text-[10px] text-slate-400 font-light text-center">Haar Cropping ➔ Grayscale Scaling ➔ CNN Softmax mapping...</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Run Action Controllers depending on Active Mode */}
            <div className="pt-6">
              {mode === 'preset' && (
                <div className="space-y-4">
                  <div className="flex gap-2.5 overflow-x-auto pb-2 no-scrollbar">
                    {presets.map((pre, idx) => (
                      <button
                        id={`demo-preset-thumb-${idx}`}
                        key={idx}
                        onClick={() => setSelectedPreset(idx)}
                        className={`flex-shrink-0 px-3 py-2 rounded-xl border text-left flex items-center space-x-2.5 transition-all cursor-pointer ${
                          selectedPreset === idx
                            ? 'bg-blue-500/10 border-blue-500 text-blue-600 dark:text-blue-400 font-semibold scale-105'
                            : 'bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800'
                        }`}
                      >
                        <span className="text-lg">{pre.emoji}</span>
                        <span className="text-[11px] whitespace-nowrap">{pre.name}</span>
                      </button>
                    ))}
                  </div>

                  <button
                    id="demo-action-preset-inference"
                    disabled={isProcessing}
                    onClick={() => {
                      const p = presets[selectedPreset];
                      processInference(p.emotion, p.confidence, p.recommendation);
                    }}
                    className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3.5 rounded-xl font-semibold text-xs tracking-wide shadow-lg shadow-blue-500/15 cursor-pointer transition-all active:scale-95"
                  >
                    <BrainCircuit className="w-4 h-4" />
                    <span>Run Convolutional Neural Model</span>
                  </button>
                </div>
              )}

              {mode === 'webcam' && (
                <div className="flex gap-3">
                  {isCameraActive ? (
                    <button
                      id="demo-action-webcam-shoot"
                      disabled={isProcessing || !isCameraActive}
                      onClick={() => {
                        // Generate a randomized dynamic emotion for live webcam demo simulation
                        const randomEmotions = [
                          { emotion: 'Happy', confidence: 91.2, rec: 'Advanced Learning. Load complexity algorithms and speed challenges.' },
                          { emotion: 'Angry', confidence: 86.4, rec: 'Guided Breathing Break. Pause dashboard and guide 10s breathing loops.' },
                          { emotion: 'Neutral', confidence: 94.1, rec: 'Core Progress Standard. Maintain regular curriculum schedules.' },
                          { emotion: 'Sad', confidence: 83.5, rec: 'Motivational Warm-up. Play visual framework videos.' }
                        ];
                        const sel = randomEmotions[Math.floor(Math.random() * randomEmotions.length)];
                        processInference(sel.emotion, sel.confidence, sel.rec);
                      }}
                      className="flex-1 flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3.5 rounded-xl font-semibold text-xs tracking-wide shadow-lg shadow-blue-500/15 cursor-pointer transition-all active:scale-95"
                    >
                      <Camera className="w-4 h-4" />
                      <span>Capture & Classify Emotion</span>
                    </button>
                  ) : (
                    <button
                      id="demo-action-webcam-start"
                      onClick={startCamera}
                      className="w-full bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 py-3.5 rounded-xl font-semibold text-xs tracking-wide transition-colors cursor-pointer"
                    >
                      Initialize Webcam Stream
                    </button>
                  )}

                  {isCameraActive && (
                    <button
                      id="demo-action-webcam-stop"
                      onClick={stopCamera}
                      className="px-4 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-950 text-xs font-semibold cursor-pointer"
                    >
                      Stop Feed
                    </button>
                  )}
                </div>
              )}

              {mode === 'upload' && uploadedImage && (
                <div className="flex gap-2.5">
                  <button
                    id="demo-action-upload-inference"
                    disabled={isProcessing}
                    onClick={() => {
                      processInference('Surprise', 89.2, 'Edge Topic Exploration. Capitalize on engagement with alternative algorithm sandboxes.');
                    }}
                    className="flex-1 flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3.5 rounded-xl font-semibold text-xs tracking-wide shadow-lg shadow-blue-500/15 cursor-pointer"
                  >
                    <BrainCircuit className="w-4 h-4" />
                    <span>Process File Inference</span>
                  </button>
                  <button
                    id="demo-action-upload-clear"
                    onClick={() => setUploadedImage(null)}
                    className="px-4 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-950 text-xs font-medium cursor-pointer"
                  >
                    Clear File
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Right Block: Live Metrics Dashboard & Recommendation Panel */}
          <div className="lg:col-span-5 space-y-6">
            {/* Inference Prediction Result Block */}
            <div className="bg-white/70 dark:bg-slate-950/65 backdrop-blur-md p-6 rounded-3xl border border-white/60 dark:border-slate-850 shadow-2xl space-y-5 text-left">
              <div>
                <span className="text-[10px] font-mono tracking-widest text-blue-600 dark:text-blue-400 uppercase font-bold">Prediction Output</span>
                <h3 className="font-display text-lg font-bold text-slate-950 dark:text-white mt-0.5">
                  Real-time Affect Statistics
                </h3>
              </div>

              {/* Huge Emotion Display Card */}
              <div className="p-4 bg-slate-50/60 dark:bg-slate-950/60 border border-slate-200/50 dark:border-slate-800/50 rounded-xl flex items-center justify-between">
                <div className="flex items-center space-x-3.5">
                  <div className="text-4xl animate-bounce">
                    {detectedEmotion === 'Happy' && '😊'}
                    {detectedEmotion === 'Sad' && '😢'}
                    {detectedEmotion === 'Fear' && '😨'}
                    {detectedEmotion === 'Angry' && '😡'}
                    {detectedEmotion === 'Neutral' && '😐'}
                    {detectedEmotion === 'Surprise' && '😲'}
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-slate-400 uppercase tracking-wider font-semibold">Classified expression</span>
                    <h4 className="font-display text-xl font-bold text-slate-900 dark:text-white leading-tight">
                      {detectedEmotion} State
                    </h4>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[9px] font-mono text-slate-400 uppercase tracking-wider font-semibold">Model Confidence</span>
                  <div className="font-display text-lg font-extrabold text-blue-600 dark:text-blue-400">
                    {confidence}%
                  </div>
                </div>
              </div>

              {/* Process telemetry details */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200/40 dark:border-slate-800/40">
                  <span className="text-[9px] font-mono text-slate-400 block mb-0.5 uppercase tracking-wider">Inference Speed:</span>
                  <span className="font-display text-sm font-bold text-emerald-500">{inferenceTime} ms</span>
                </div>
                <div className="p-3 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200/40 dark:border-slate-800/40">
                  <span className="text-[9px] font-mono text-slate-400 block mb-0.5 uppercase tracking-wider">Target Resolution:</span>
                  <span className="font-display text-sm font-bold text-slate-700 dark:text-slate-300">48 x 48 px (Grayscale)</span>
                </div>
              </div>

              {/* Recommendation Panel placeholder */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 space-y-2">
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span className="text-[10px] font-mono tracking-wider text-blue-600 dark:text-blue-400 uppercase font-bold">Live Support Trigger</span>
                </div>
                <div className="p-3.5 bg-blue-500/10 rounded-xl border border-blue-500/20 text-xs text-blue-950 dark:text-blue-200 leading-relaxed font-light">
                  {recommendation}
                </div>
              </div>
            </div>

            {/* Session History panel placeholder */}
            <div className="bg-white/70 dark:bg-slate-950/65 backdrop-blur-md p-6 rounded-3xl border border-white/60 dark:border-slate-850 shadow-2xl space-y-4 text-left">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center space-x-2">
                  <History className="w-4 h-4 text-slate-500" />
                  <h4 className="font-display text-sm font-bold text-slate-900 dark:text-white">Session History Log</h4>
                </div>
                <button
                  id="demo-clear-history"
                  onClick={() => setHistory([])}
                  className="text-[10px] font-mono text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
                >
                  Clear Logs
                </button>
              </div>

              {history.length > 0 ? (
                <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                  {history.map((log) => (
                    <div key={log.id} className="p-3 bg-slate-50 dark:bg-slate-950/60 rounded-xl border border-slate-200/40 dark:border-slate-800/40 flex items-center justify-between text-xs font-light">
                      <div className="space-y-0.5">
                        <div className="flex items-center space-x-2 font-medium text-slate-800 dark:text-slate-200">
                          <span>
                            {log.detectedEmotion === 'Happy' && '😊'}
                            {log.detectedEmotion === 'Sad' && '😢'}
                            {log.detectedEmotion === 'Fear' && '😨'}
                            {log.detectedEmotion === 'Angry' && '😡'}
                            {log.detectedEmotion === 'Neutral' && '😐'}
                            {log.detectedEmotion === 'Surprise' && '😲'}
                          </span>
                          <span className="font-bold">{log.detectedEmotion} ({log.confidence}%)</span>
                        </div>
                        <span className="text-[10px] text-slate-400 font-mono italic block">{log.recommendationGiven}</span>
                      </div>
                      <span className="text-[9px] font-mono text-slate-400 font-bold">{log.timestamp}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-6 text-slate-400 font-mono text-[10px]">No logs committed yet. Execute the CNN model above to save.</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
