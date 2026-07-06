export type ActivePage =
  | 'home'
  | 'about'
  | 'features'
  | 'how-it-works'
  | 'tech-stack'
  | 'architecture'
  | 'workflow'
  | 'emotions'
  | 'recommendations'
  | 'demo'
  | 'team'
  | 'contact';

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'core' | 'ai' | 'ui' | 'system';
}

export interface TechItem {
  name: string;
  logoType: 'python' | 'streamlit' | 'tensorflow' | 'opencv' | 'numpy' | 'pandas' | 'matplotlib' | 'pillow' | 'scikit' | 'dataset' | 'cnn';
  description: string;
  purpose: string;
  version?: string;
}

export interface EmotionItem {
  emoji: string;
  name: string;
  description: string;
  recommendation: string;
  studyFocus: string;
  bgGradient: string;
  iconColor: string;
}

export interface TeamMember {
  name: string;
  role: string;
  email: string;
  github: string;
  linkedin: string;
  image: string; // placeholder text or key
  bio: string;
}

export interface DemoSession {
  id: string;
  timestamp: string;
  detectedEmotion: string;
  recommendationGiven: string;
  confidence: number;
}
