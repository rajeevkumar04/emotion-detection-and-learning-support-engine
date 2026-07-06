import React, { useState } from "react";
import { 
  X, 
  User, 
  Lock, 
  Mail, 
  Sparkles, 
  AlertCircle, 
  CheckCircle2,
  LogIn,
  UserPlus
} from "lucide-react";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAuthSuccess: (user: { username: string; fullName: string; avatarColor: string }) => void;
}

const AVATAR_PRESETS = [
  { id: "crimson", name: "Crimson Spark", gradient: "from-rose-500 to-red-600", bg: "#f43f5e" },
  { id: "emerald", name: "Emerald Mind", gradient: "from-emerald-400 to-teal-600", bg: "#10b981" },
  { id: "cosmic", name: "Cosmic Flow", gradient: "from-indigo-500 to-purple-600", bg: "#6366f1" },
  { id: "amber", name: "Amber Logic", gradient: "from-amber-400 to-orange-500", bg: "#f59e0b" },
  { id: "gold", name: "Solar Focus", gradient: "from-yellow-400 to-amber-500", bg: "#eab308" },
  { id: "royal", name: "Royal Vision", gradient: "from-violet-500 to-fuchsia-600", bg: "#8b5cf6" },
];

export default function AuthModal({ isOpen, onClose, onAuthSuccess }: AuthModalProps) {
  const [isSignUp, setIsSignUp] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [selectedAvatar, setSelectedAvatar] = useState<string>("cosmic");
  
  // Status states
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  if (!isOpen) return null;

  const resetForm = () => {
    setUsername("");
    setFullName("");
    setPassword("");
    setConfirmPassword("");
    setSelectedAvatar("cosmic");
    setError("");
    setSuccess("");
  };

  const handleSignIn = () => {
    if (!username.trim() || !password.trim()) {
      setError("Please fill in all fields.");
      return;
    }

    setLoading(true);
    setError("");

    // Simulate small latency for premium feels
    setTimeout(() => {
      const storedUsersRaw = localStorage.getItem("auth_registered_users");
      const users = storedUsersRaw ? JSON.parse(storedUsersRaw) : [];
      
      const foundUser = users.find(
        (u: any) => u.username.toLowerCase() === username.trim().toLowerCase()
      );

      if (!foundUser) {
        setError("Account not found. Please sign up first.");
        setLoading(false);
        return;
      }

      if (foundUser.password !== password) {
        setError("Incorrect password. Please try again.");
        setLoading(false);
        return;
      }

      // Successful Auth
      setSuccess(`Welcome back, ${foundUser.fullName}!`);
      setTimeout(() => {
        onAuthSuccess({
          username: foundUser.username,
          fullName: foundUser.fullName,
          avatarColor: foundUser.avatarColor,
        });
        setLoading(false);
        onClose();
        resetForm();
      }, 1000);
    }, 800);
  };

  const handleSignUp = () => {
    if (!username.trim() || !fullName.trim() || !password.trim()) {
      setError("Please fill in all fields.");
      return;
    }

    if (username.length < 3) {
      setError("Username must be at least 3 characters.");
      return;
    }

    if (password.length < 4) {
      setError("Password must be at least 4 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);
    setError("");

    setTimeout(() => {
      const storedUsersRaw = localStorage.getItem("auth_registered_users");
      const users = storedUsersRaw ? JSON.parse(storedUsersRaw) : [];

      const exists = users.some(
        (u: any) => u.username.toLowerCase() === username.trim().toLowerCase()
      );

      if (exists) {
        setError("Username is already taken.");
        setLoading(false);
        return;
      }

      // Create new user record
      const newUser = {
        username: username.trim(),
        fullName: fullName.trim(),
        password: password, // standard demo storage
        avatarColor: selectedAvatar,
        registeredAt: new Date().toISOString(),
      };

      users.push(newUser);
      localStorage.setItem("auth_registered_users", JSON.stringify(users));

      setSuccess("Account successfully registered!");
      setTimeout(() => {
        onAuthSuccess({
          username: newUser.username,
          fullName: newUser.fullName,
          avatarColor: newUser.avatarColor,
        });
        setLoading(false);
        onClose();
        resetForm();
      }, 1000);
    }, 800);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSignUp) {
      handleSignUp();
    } else {
      handleSignIn();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#04060b]/80 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="bg-[#0b0d19] border border-slate-800/80 w-full max-w-md rounded-3xl overflow-hidden relative z-10 shadow-2xl shadow-black/60 flex flex-col max-h-[90vh]">
        
        {/* Glow Header */}
        <div className="bg-gradient-to-r from-[#ff4a5a]/10 to-indigo-600/15 p-6 border-b border-slate-850 flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#ff4a5a]/10 border border-[#ff4a5a]/30 flex items-center justify-center text-[#ff4a5a]">
              {isSignUp ? <UserPlus className="w-4.5 h-4.5" /> : <LogIn className="w-4.5 h-4.5" />}
            </div>
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                {isSignUp ? "Create Account" : "Sign In Session"}
              </h3>
              <p className="text-slate-400 text-[10px] font-mono mt-0.5">
                {isSignUp ? "Join the cognitive analytics system" : "Access personal telemetry & logs"}
              </p>
            </div>
          </div>
          
          <button 
            onClick={onClose}
            className="p-1.5 rounded-xl bg-slate-900/60 border border-slate-800/80 text-slate-400 hover:text-white hover:border-slate-700 transition-all"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Form Content */}
        <div className="p-6 overflow-y-auto space-y-5">
          {/* Custom Tabs */}
          <div className="bg-[#131722]/85 p-1 rounded-2xl border border-slate-850 flex relative">
            <button
              onClick={() => { setIsSignUp(false); setError(""); }}
              className={`flex-1 text-center py-2.5 rounded-xl text-xs font-mono font-bold transition-all relative z-10 ${
                !isSignUp ? "text-white" : "text-slate-400 hover:text-slate-200"
              }`}
            >
              SIGN IN
            </button>
            <button
              onClick={() => { setIsSignUp(true); setError(""); }}
              className={`flex-1 text-center py-2.5 rounded-xl text-xs font-mono font-bold transition-all relative z-10 ${
                isSignUp ? "text-white" : "text-slate-400 hover:text-slate-200"
              }`}
            >
              REGISTER
            </button>
            {/* Sliding backdrop indicator */}
            <div 
              className={`absolute top-1 bottom-1 bg-[#ff4a5a] rounded-xl transition-all duration-300 shadow-md ${
                isSignUp ? "left-1/2 right-1" : "left-1 right-1/2"
              }`}
            />
          </div>

          {/* Feedback states */}
          {error && (
            <div className="bg-rose-500/10 border border-rose-500/20 rounded-2xl p-3.5 flex items-start space-x-2.5 text-xs text-rose-400">
              <AlertCircle className="w-4.5 h-4.5 shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          {success && (
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-3.5 flex items-start space-x-2.5 text-xs text-emerald-400">
              <CheckCircle2 className="w-4.5 h-4.5 shrink-0 mt-0.5" />
              <span>{success}</span>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Full Name (Sign Up Only) */}
            {isSignUp && (
              <div className="space-y-1.5">
                <label className="text-slate-400 text-[10px] font-mono uppercase tracking-wider block">
                  Full Name / Alias
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-3 w-4 h-4 text-slate-500" />
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Dr. Claude Shannon"
                    className="w-full bg-[#131722] border border-slate-800/80 focus:border-[#ff4a5a]/70 rounded-xl pl-10 pr-4 py-2.5 text-slate-100 text-xs focus:outline-none focus:ring-2 focus:ring-[#ff4a5a]/15 transition-all"
                  />
                </div>
              </div>
            )}

            {/* Username */}
            <div className="space-y-1.5">
              <label className="text-slate-400 text-[10px] font-mono uppercase tracking-wider block">
                Username
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-3 w-4 h-4 text-slate-500" />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="shannon_1948"
                  className="w-full bg-[#131722] border border-slate-800/80 focus:border-[#ff4a5a]/70 rounded-xl pl-10 pr-4 py-2.5 text-slate-100 text-xs focus:outline-none focus:ring-2 focus:ring-[#ff4a5a]/15 transition-all font-mono"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <label className="text-slate-400 text-[10px] font-mono uppercase tracking-wider block">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-3 w-4 h-4 text-slate-500" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-[#131722] border border-slate-800/80 focus:border-[#ff4a5a]/70 rounded-xl pl-10 pr-4 py-2.5 text-slate-100 text-xs focus:outline-none focus:ring-2 focus:ring-[#ff4a5a]/15 transition-all"
                />
              </div>
            </div>

            {/* Confirm Password (Sign Up Only) */}
            {isSignUp && (
              <div className="space-y-1.5">
                <label className="text-slate-400 text-[10px] font-mono uppercase tracking-wider block">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-3 w-4 h-4 text-slate-500" />
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full bg-[#131722] border border-slate-800/80 focus:border-[#ff4a5a]/70 rounded-xl pl-10 pr-4 py-2.5 text-slate-100 text-xs focus:outline-none focus:ring-2 focus:ring-[#ff4a5a]/15 transition-all"
                  />
                </div>
              </div>
            )}

            {/* Custom Avatar Selector (Sign Up Only) */}
            {isSignUp && (
              <div className="space-y-2.5 pt-2">
                <label className="text-slate-400 text-[10px] font-mono uppercase tracking-wider block flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin-slow" />
                  Select Cognitive Energy Aura
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {AVATAR_PRESETS.map((preset) => {
                    const isSelected = selectedAvatar === preset.id;
                    return (
                      <button
                        key={preset.id}
                        type="button"
                        onClick={() => setSelectedAvatar(preset.id)}
                        className={`p-2.5 rounded-xl border flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
                          isSelected 
                            ? "bg-[#ff4a5a]/10 border-[#ff4a5a] text-white" 
                            : "bg-[#131722]/60 border-slate-850 hover:bg-[#131722] text-slate-400 hover:text-slate-200"
                        }`}
                      >
                        <div className={`w-6 h-6 rounded-full bg-gradient-to-tr ${preset.gradient} shrink-0 shadow-inner`} />
                        <span className="text-[9px] font-mono font-medium truncate w-full text-center">{preset.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Submit Action Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 mt-4 rounded-xl text-xs font-mono font-bold uppercase tracking-wider text-white shadow-lg shadow-rose-500/10 cursor-pointer active:scale-98 transition-all flex items-center justify-center space-x-2 ${
                loading 
                  ? "bg-slate-800 border border-slate-700 cursor-not-allowed opacity-70" 
                  : "bg-gradient-to-r from-[#ff4a5a] to-rose-600 hover:opacity-95"
              }`}
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  <span>Processing...</span>
                </>
              ) : (
                <span>{isSignUp ? "Complete Registration" : "Initiate Session"}</span>
              )}
            </button>

          </form>
        </div>

        {/* Switch mode label footer */}
        <div className="bg-[#131722]/50 border-t border-slate-850 py-4 px-6 text-center text-[10px] font-mono text-slate-500">
          {isSignUp ? (
            <span>
              Already registered?{" "}
              <button 
                onClick={() => { setIsSignUp(false); setError(""); }}
                className="text-[#ff4a5a] hover:underline font-bold"
              >
                Sign In
              </button>
            </span>
          ) : (
            <span>
              New observer?{" "}
              <button 
                onClick={() => { setIsSignUp(true); setError(""); }}
                className="text-[#ff4a5a] hover:underline font-bold"
              >
                Register Here
              </button>
            </span>
          )}
        </div>

      </div>
    </div>
  );
}
