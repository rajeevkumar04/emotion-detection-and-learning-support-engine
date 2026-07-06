import React, { useState } from "react";
import { Zap, Info, ArrowRight, Gauge, CheckCircle2, ChevronRight, HelpCircle } from "lucide-react";

interface StepDetail {
  number: number;
  title: string;
  analogyTitle: string;
  analogy: string;
  technical: string;
  color: string;
}

export default function OpAmpFeedbackVisualizer() {
  const [vin, setVin] = useState<number>(2.5); // Input voltage
  const [rf, setRf] = useState<number>(10);    // Feedback resistor in kOhm
  const [rin, setRin] = useState<number>(10);   // Input resistor in kOhm
  const [activeStep, setActiveStep] = useState<number>(1);
  const [useAnalogy, setUseAnalogy] = useState<boolean>(true);

  // Non-inverting amplifier math
  // Vout = Vin * (1 + Rf/Rin)
  const gain = 1 + rf / rin;
  const rawVout = vin * gain;
  // Limit Vout to standard op-amp rails (say +12V)
  const vout = Math.min(12, parseFloat(rawVout.toFixed(2)));
  const vMinus = parseFloat(((vout * rin) / (rin + rf)).toFixed(2));
  const vPlus = vin;
  const difference = parseFloat((vPlus - vMinus).toFixed(4));
  const isSaturated = rawVout >= 12;

  const steps: StepDetail[] = [
    {
      number: 1,
      title: "The Target Shifts (Input Rises)",
      analogyTitle: "🚗 Adjusting Cruise Control",
      analogy: "Imagine you're driving on the highway and click your cruise control speed up from 60 mph to 75 mph. You've just introduced a new 'desired target' for the car.",
      technical: `The input voltage (V_in) at the positive terminal (V_+) rises to ${vin}V. This creates an immediate gap because the negative terminal (V_-) is still at its previous state.`,
      color: "from-blue-500 to-indigo-600"
    },
    {
      number: 2,
      title: "The Surge (Output Reacts)",
      analogyTitle: "🔥 Flooring the Gas Pedal",
      analogy: "Sensing that your current speed is below your new 75 mph target, the engine responds instantly by flooring the gas, causing the car to surge forward rapidly.",
      technical: `The op-amp amplifies the difference (V_+ - V_-) by an extremely high factor (often 100,000+). Because V_+ is higher, the Output (V_out) shoots rapidly upward towards ${vout}V.`,
      color: "from-red-500 to-amber-600"
    },
    {
      number: 3,
      title: "The Feed Back (Sensor Checks In)",
      analogyTitle: "📊 Speedometer Reporting Back",
      analogy: "As your speed rises, your dashboard speedometer keeps real-time track of how fast you're going and sends this info back to the cruise control computer.",
      technical: `The feedback resistor (R_f = ${rf}kΩ) carries a portion of this rising output voltage (V_out) back to the negative terminal (V_-), raising its voltage to ${vMinus}V.`,
      color: "from-purple-500 to-pink-600"
    },
    {
      number: 4,
      title: "The Perfect Balance (Stabilization)",
      analogyTitle: "✨ Smooth Steady Glide",
      analogy: "As you reach exactly 75 mph, the system backs off the accelerator slightly. Your speed locks in perfectly, maintaining a smooth, self-regulated balance.",
      technical: `Because the negative terminal (V_-) rose, the input gap (V_+ - V_-) shrinks to almost zero (currently ${difference}V). This holds the output (V_out) rock-steady at exactly ${vout}V!`,
      color: "from-emerald-500 to-teal-600"
    }
  ];

  return (
    <div className="bg-[#0b0d19] border border-slate-800 rounded-3xl p-5 sm:p-6 space-y-6 text-slate-200">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center space-x-2 text-indigo-400 font-mono text-xs font-semibold tracking-wider uppercase mb-1">
            <Zap className="w-4 h-4 text-[#ff4a5a]" />
            <span>Interactive Concept Explainer</span>
          </div>
          <h3 className="font-sans text-lg sm:text-xl font-bold text-white tracking-tight">
            Demystifying Negative Feedback Loops
          </h3>
        </div>
        
        {/* Toggle Mode */}
        <div className="flex items-center bg-[#131722] p-1 rounded-xl border border-slate-800 self-start sm:self-auto">
          <button
            onClick={() => setUseAnalogy(true)}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
              useAnalogy
                ? "bg-[#ff4a5a] text-white shadow-md"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Human Analogy
          </button>
          <button
            onClick={() => setUseAnalogy(false)}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
              !useAnalogy
                ? "bg-[#ff4a5a] text-white shadow-md"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Circuit Physics
          </button>
        </div>
      </div>

      {/* Simulator Control Board */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-[#131722]/60 p-4 sm:p-5 rounded-2xl border border-slate-800/60">
        
        {/* Interactive Sliders */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center space-x-2 text-slate-300 font-bold text-xs font-mono mb-2">
            <Gauge className="w-4 h-4 text-[#ff4a5a]" />
            <span>Adjust Circuit Parameters</span>
          </div>

          {/* V_in Slider */}
          <div className="space-y-1.5 bg-[#171b26] p-3.5 rounded-xl border border-slate-800/80">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-slate-400">Input Voltage (V_in):</span>
              <span className="text-emerald-400 font-bold">{vin} V</span>
            </div>
            <input
              type="range"
              min="0"
              max="5"
              step="0.1"
              value={vin}
              onChange={(e) => setVin(parseFloat(e.target.value))}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#ff4a5a]"
            />
          </div>

          {/* R_f Slider */}
          <div className="space-y-1.5 bg-[#171b26] p-3.5 rounded-xl border border-slate-800/80">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-slate-400">Feedback Resistor (R_f):</span>
              <span className="text-indigo-400 font-bold">{rf} kΩ</span>
            </div>
            <input
              type="range"
              min="1"
              max="30"
              step="1"
              value={rf}
              onChange={(e) => setRf(parseInt(e.target.value))}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#ff4a5a]"
            />
          </div>

          {/* R_in Slider */}
          <div className="space-y-1.5 bg-[#171b26] p-3.5 rounded-xl border border-slate-800/80">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-slate-400">Input Resistor (R_in):</span>
              <span className="text-blue-400 font-bold">{rin} kΩ</span>
            </div>
            <input
              type="range"
              min="1"
              max="20"
              step="1"
              value={rin}
              onChange={(e) => setRin(parseInt(e.target.value))}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#ff4a5a]"
            />
          </div>
        </div>

        {/* Real-time Telemetry Visualization */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            
            {/* V+ Node */}
            <div className="bg-[#171b26] p-3 rounded-xl border border-slate-800 flex flex-col justify-between">
              <span className="text-[10px] font-mono uppercase text-slate-400">Target (V+)</span>
              <span className="text-base sm:text-lg font-mono font-bold text-emerald-400">{vPlus} V</span>
            </div>

            {/* V- Node */}
            <div className="bg-[#171b26] p-3 rounded-xl border border-slate-800 flex flex-col justify-between">
              <span className="text-[10px] font-mono uppercase text-slate-400">Feedback (V-)</span>
              <span className="text-base sm:text-lg font-mono font-bold text-indigo-400">{vMinus} V</span>
            </div>

            {/* V_out Node */}
            <div className="bg-[#171b26] p-3 rounded-xl border border-slate-800 col-span-2 sm:col-span-1 flex flex-col justify-between">
              <span className="text-[10px] font-mono uppercase text-slate-400">Output (V_out)</span>
              <span className="text-base sm:text-lg font-mono font-bold text-[#ff4a5a]">{vout} V</span>
            </div>

          </div>

          {/* Seesaw / Balance visualization */}
          <div className="bg-[#171b26] p-4 rounded-xl border border-slate-800 flex flex-col justify-center space-y-2 relative overflow-hidden">
            <div className="flex justify-between items-center text-[10px] font-mono text-slate-400">
              <span>Error Signal (V+ - V-)</span>
              <span>Status: <strong className={isSaturated ? "text-amber-500" : "text-emerald-400"}>{isSaturated ? "Saturated" : "Stable Balance"}</strong></span>
            </div>
            
            {/* The visual seesaw */}
            <div className="h-10 flex items-center justify-center relative">
              {/* Center Pivot */}
              <div className="absolute w-2.5 h-2.5 bg-[#ff4a5a] rounded-full z-10" />
              
              {/* Seesaw Bar */}
              <div 
                className="w-full h-1 bg-slate-700 rounded-full transition-transform duration-300 origin-center"
                style={{ transform: `rotate(${Math.max(-15, Math.min(15, difference * 15))}deg)` }}
              >
                {/* Left side node (V+) */}
                <div className="absolute -left-1 -top-1.5 w-4 h-4 bg-emerald-500 rounded-full border border-[#0b0d19] flex items-center justify-center shadow-lg">
                  <span className="text-[8px] font-bold text-[#0b0d19]">+</span>
                </div>
                {/* Right side node (V-) */}
                <div className="absolute -right-1 -top-1.5 w-4 h-4 bg-indigo-500 rounded-full border border-[#0b0d19] flex items-center justify-center shadow-lg">
                  <span className="text-[8px] font-bold text-[#0b0d19]">-</span>
                </div>
              </div>
            </div>

            <div className="flex justify-between text-[10px] font-mono text-slate-400">
              <span>Gain Factor: {gain.toFixed(1)}x</span>
              <span>Terminal Difference: {difference === 0 ? "0.0000" : difference} V</span>
            </div>
          </div>
        </div>

      </div>

      {/* Interactive Step Timeline */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs text-slate-400 font-mono uppercase tracking-wider">
          <span>Explore the Self-Regulating Loop Step-by-Step</span>
          <span>Click each step to examine</span>
        </div>

        {/* Timeline Stepper Tabs */}
        <div className="grid grid-cols-4 gap-1.5">
          {steps.map((step) => (
            <button
              key={step.number}
              onClick={() => setActiveStep(step.number)}
              className={`p-2.5 rounded-xl border flex flex-col items-center justify-center transition-all cursor-pointer ${
                activeStep === step.number
                  ? "bg-[#1b2030] border-[#ff4a5a] text-white"
                  : "bg-[#131722]/40 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-[#131722]/80"
              }`}
            >
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-mono font-bold mb-1 ${
                activeStep === step.number ? "bg-[#ff4a5a] text-white" : "bg-slate-800 text-slate-400"
              }`}>
                {step.number}
              </span>
              <span className="text-[10px] font-sans font-bold hidden sm:inline text-center">
                Step {step.number}
              </span>
            </button>
          ))}
        </div>

        {/* Main Step Detail Card */}
        <div className="bg-[#131722] border border-slate-800/80 p-5 rounded-2xl relative overflow-hidden">
          
          {/* Subtle colored top accent line */}
          <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${steps[activeStep - 1].color}`} />

          <div className="space-y-4">
            
            {/* Step Title */}
            <div className="flex items-center justify-between">
              <span className={`text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-gradient-to-r ${steps[activeStep - 1].color} text-white`}>
                Step {activeStep} of 4
              </span>
              <span className="text-xs font-mono text-slate-400">
                {useAnalogy ? "Human Language Analogy" : "Electrical Engineering Principles"}
              </span>
            </div>

            <h4 className="font-sans text-base font-bold text-white tracking-tight flex items-center space-x-2">
              <span className="text-lg">
                {useAnalogy ? steps[activeStep - 1].analogyTitle.split(" ")[0] : "⚡"}
              </span>
              <span>
                {useAnalogy ? steps[activeStep - 1].analogyTitle.substring(steps[activeStep - 1].analogyTitle.indexOf(" ") + 1) : steps[activeStep - 1].title}
              </span>
            </h4>

            {/* Body Explanation */}
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light font-sans">
              {useAnalogy ? steps[activeStep - 1].analogy : steps[activeStep - 1].technical}
            </p>

            {/* Connective Insight */}
            <div className="bg-[#171b26]/80 p-3 rounded-xl border border-slate-850 text-xs text-slate-400 flex items-start space-x-2.5 font-sans">
              <Info className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-300">Why this matters: </strong>
                {activeStep === 1 && "This establishes the target. Just like cruise control needs a speed setting, an amplifier needs an input signal to determine what output it needs to generate."}
                {activeStep === 2 && "The raw op-amp is an extremely powerful engine with massive open-loop gain. Left alone without feedback, it would saturate immediately and become unusable as a clean linear amplifier."}
                {activeStep === 3 && "This feedback resistor acts as the monitor. It bridges the output back to the inverting input, creating an anti-balancing pressure that fights the initial raw surge."}
                {activeStep === 4 && "Self-regulation is complete! This balancing pressure keeps the active inputs V+ and V- virtually identical, locking the system in perfect, stable gain tracking."}
              </div>
            </div>

            {/* Timeline Controls */}
            <div className="flex justify-between items-center pt-2 border-t border-slate-800/60 mt-4">
              <button
                disabled={activeStep === 1}
                onClick={() => setActiveStep(activeStep - 1)}
                className={`text-xs font-sans font-semibold px-3 py-1.5 rounded-lg border border-slate-800 hover:bg-slate-800/40 transition-colors ${
                  activeStep === 1 ? "opacity-40 cursor-not-allowed" : "cursor-pointer text-slate-300"
                }`}
              >
                Previous Step
              </button>

              <button
                disabled={activeStep === 4}
                onClick={() => setActiveStep(activeStep + 1)}
                className={`text-xs font-sans font-semibold px-3 py-1.5 rounded-lg border border-slate-800 hover:bg-slate-800/40 transition-colors ${
                  activeStep === 4 ? "opacity-40 cursor-not-allowed text-slate-500" : "cursor-pointer text-white bg-[#1b2030] hover:border-slate-700"
                }`}
              >
                {activeStep === 4 ? "Finished Loop" : "Next Step"}
              </button>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}
