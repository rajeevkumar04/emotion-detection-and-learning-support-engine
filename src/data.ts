import { FeatureItem, TechItem, EmotionItem, TeamMember } from './types';

export const featuresData: FeatureItem[] = [
  {
    id: 'real-time-emotion',
    title: 'Real-time Emotion Detection',
    description: 'Continuously analyzes facial features through the video feed to detect subtle transitions in a student’s cognitive-affective state.',
    icon: 'Activity',
    category: 'core'
  },
  {
    id: 'webcam-integration',
    title: 'Webcam Integration',
    description: 'Seamless browser-based webcam feed access with secure frames, zero-latency rendering, and low CPU overhead.',
    icon: 'Video',
    category: 'system'
  },
  {
    id: 'cnn-prediction',
    title: 'CNN-Based Prediction',
    description: 'Powered by an optimized convolutional neural network (CNN) trained specifically on FER-2013 facial expression databases.',
    icon: 'BrainCircuit',
    category: 'ai'
  },
  {
    id: 'personalized-learning',
    title: 'Personalized Learning Support',
    description: 'Intelligently alters the learning pace, difficulty, and material delivery based on the identified learner emotion.',
    icon: 'GraduationCap',
    category: 'core'
  },
  {
    id: 'motivational-suggestions',
    title: 'Motivational Suggestions',
    description: 'Delivers dynamic motivational messages, inspirational quotes, and mental health reminders to keep students engaged.',
    icon: 'HeartHandshake',
    category: 'ui'
  },
  {
    id: 'emotion-history',
    title: 'Emotion History Tracking',
    description: 'Maintains granular history of session engagement metrics, enabling students and teachers to analyze long-term learning trends.',
    icon: 'History',
    category: 'system'
  },
  {
    id: 'interactive-dashboard',
    title: 'Interactive Analytics Dashboard',
    description: 'Equipped with robust visualization tools to review facial data matrices, model prediction confidence, and learning progress.',
    icon: 'BarChart3',
    category: 'ui'
  },
  {
    id: 'fast-processing',
    title: 'Sub-second Inference Processing',
    description: 'Highly lightweight architecture designed for instant frame inference, operating smoothly on standard edge hardware.',
    icon: 'Zap',
    category: 'ai'
  },
  {
    id: 'responsive-ui',
    title: 'Adaptive Responsive Design',
    description: 'Fully responsive glassmorphic interfaces designed for perfect high-resolution desktop and accessible mobile usage.',
    icon: 'Smartphone',
    category: 'ui'
  }
];

export const techStackData: TechItem[] = [
  {
    name: 'Python',
    logoType: 'python',
    description: 'The core programming language chosen for its extensive scientific ecosystem and rich array of standard packages.',
    purpose: 'Core engine development, neural network training pipeline, and data analysis orchestration.'
  },
  {
    name: 'Streamlit',
    logoType: 'streamlit',
    description: 'An open-source Python framework designed to build and share interactive machine learning and data science apps instantly.',
    purpose: 'Web UI prototype deployment, dynamic user controls, live video loop rendering, and analytics dashboard host.'
  },
  {
    name: 'TensorFlow / Keras',
    logoType: 'tensorflow',
    description: 'An end-to-end open-source platform for machine learning, offering modular tools for training deep neural networks.',
    purpose: 'Designing, training, and running inference on the custom Convolutional Neural Network (CNN) architecture.'
  },
  {
    name: 'OpenCV',
    logoType: 'opencv',
    description: 'A highly optimized library for computer vision and image processing tasks, designed to maximize computational efficiency.',
    purpose: 'Real-time camera frame capturing, Haar Cascade face detection, image scaling, and grayscale conversion filters.'
  },
  {
    name: 'NumPy',
    logoType: 'numpy',
    description: 'The fundamental package for scientific computing with Python, offering multidimensional array structures and operations.',
    purpose: 'High-speed mathematical matrices processing for transforming pixel arrays before model ingestion.'
  },
  {
    name: 'Pandas',
    logoType: 'pandas',
    description: 'A flexible, fast, and high-performance data manipulation toolset built on top of the Python language.',
    purpose: 'Parsing historical learning records, managing session statistics, and structuring state parameters.'
  },
  {
    name: 'Matplotlib',
    logoType: 'matplotlib',
    description: 'A comprehensive library for creating static, animated, and interactive visualizations in Python.',
    purpose: 'Generating visual charts for emotion distributions, learning curves, and model training progress reports.'
  },
  {
    name: 'Pillow',
    logoType: 'pillow',
    description: 'A powerful image processing library in Python that provides extensive file format support and image filters.',
    purpose: 'Pre-processing raw snapshots, handling asset rendering transformations, and managing user-uploaded image streams.'
  },
  {
    name: 'Scikit-learn',
    logoType: 'scikit',
    description: 'A premier machine learning toolset featuring classification, regression, clustering, and data preprocessing algorithms.',
    purpose: 'Performing dataset splitting, computing precision-recall scoring metrics, and establishing confidence baselines.'
  },
  {
    name: 'FER-2013 Dataset',
    logoType: 'dataset',
    description: 'The standard Facial Expression Recognition database containing 35,887 grayscale, 48x48 pixel images of human faces.',
    purpose: 'Serving as the exhaustive training and validation foundation for deep feature learning across 7 emotion classes.'
  },
  {
    name: 'CNN Architecture',
    logoType: 'cnn',
    description: 'A multi-layered deep learning architecture including Convolution, MaxPooling, Dropout, and Dense layers with ReLU activations.',
    purpose: 'Extracting hierarchical spatial features from human face crops and classifying them into distinct emotional states.'
  }
];

export const emotionsData: EmotionItem[] = [
  {
    emoji: '😊',
    name: 'Happy',
    description: 'The learner is relaxed, receptive, and feeling successful. Their focus is high, making it the perfect opportunity to offer challenging and advanced material.',
    recommendation: 'Advanced Learning Module. Provide premium depth extension topics, logic puzzles, and fast-track research projects to maximize current momentum.',
    studyFocus: 'Advanced Algorithms & Creative Design Problems',
    bgGradient: 'from-emerald-500/10 to-teal-500/10 border-emerald-500/30 text-emerald-500',
    iconColor: 'bg-emerald-500/20 text-emerald-400'
  },
  {
    emoji: '😢',
    name: 'Sad',
    description: 'The learner may feel discouraged or fatigued by the material. High cognitive stress or lack of context may be hindering their confidence levels.',
    recommendation: 'Motivational Videos & Warm-Up. Pause core challenges to display inspiring academic success stories, easy visual tutorials, and high-quality mood lifts.',
    studyFocus: 'Conceptual Explanations & Visual Video Playlists',
    bgGradient: 'from-blue-500/10 to-sky-500/10 border-blue-500/30 text-blue-500',
    iconColor: 'bg-blue-500/20 text-blue-400'
  },
  {
    emoji: '😡',
    name: 'Angry',
    description: 'The learner is experiencing intense frustration or blocker fatigue. Stubborn bugs or confusing guidelines can spark anxiety, requiring an active cooling period.',
    recommendation: 'Relaxation & Guided Deep Breathing. Prompt a 2-minute relaxation break, breathing exercises, and suggest stepping away from the keyboard to reset.',
    studyFocus: 'Mindfulness Break & Guided Debugging Assistance',
    bgGradient: 'from-rose-500/10 to-red-500/10 border-rose-500/30 text-rose-500',
    iconColor: 'bg-rose-500/20 text-rose-400'
  },
  {
    emoji: '😨',
    name: 'Fear',
    description: 'The learner feels overwhelmed, anxious, or highly insecure about their understanding of the current topic, triggering risk-aversion and hesitation.',
    recommendation: 'Beginner Practice Sandbox. Re-route to step-by-step interactive walk-throughs, micro-concepts, and highly scaffolded questions with immediate tips.',
    studyFocus: 'Step-by-Step interactive code templates & Syntax Guides',
    bgGradient: 'from-purple-500/10 to-fuchsia-500/10 border-purple-500/30 text-purple-500',
    iconColor: 'bg-purple-500/20 text-purple-400'
  },
  {
    emoji: '😐',
    name: 'Neutral',
    description: 'The learner is in a steady, calm, objective state. This represents an optimal baseline for standard content retention, reading code documentation, and active practice.',
    recommendation: 'Continue Core Learning. Proceed with standard syllabus timeline progression, medium-difficulty challenge exercises, and regular milestone knowledge checks.',
    studyFocus: 'Primary Syllabus Progression & Interactive Code Labs',
    bgGradient: 'from-slate-500/10 to-zinc-500/10 border-slate-500/30 text-slate-400',
    iconColor: 'bg-slate-500/20 text-slate-400'
  },
  {
    emoji: '😲',
    name: 'Surprise',
    description: 'An unexpected discovery, breakthrough, or unexpected system output was witnessed. This shows sudden cognitive engagement and excitement.',
    recommendation: 'Explore Deeper Edge Topics. capitalizes on curiosity by offering alternative problem-solving hacks, deep technical articles, and fun research vectors.',
    studyFocus: 'Exploratory Open-ended Sandboxes & System Hacks',
    bgGradient: 'from-amber-500/10 to-orange-500/10 border-amber-500/30 text-amber-500',
    iconColor: 'bg-amber-500/20 text-amber-400'
  },
  {
    emoji: '🤢',
    name: 'Disgust',
    description: 'Shows strong aversion or dissatisfaction with current layouts, tasks, or bugs. Indicates immediate need for design variety or positive re-engagement.',
    recommendation: 'Positive Reinforcement & Theme Swapping. Change visual topic delivery styling, present gamified trivia blocks, and grant visual achievement badges.',
    studyFocus: 'Interactive Trivia & Gamified Programming Modules',
    bgGradient: 'from-lime-500/10 to-emerald-500/10 border-lime-500/30 text-lime-500',
    iconColor: 'bg-lime-500/20 text-lime-400'
  }
];

export const teamData: TeamMember[] = [
  {
    name: 'Dr. Evelyn Carter',
    role: 'Lead AI Scientist & Architect',
    email: 'evelyn.carter@ai-edu-engine.org',
    github: 'https://github.com/evelyn-carter',
    linkedin: 'https://linkedin.com/in/dr-evelyn-carter',
    image: 'EC',
    bio: 'Specialist in Affective Computing and deep visual models with over 12 peer-reviewed papers on neural-network driven pedagogical frameworks.'
  },
  {
    name: 'Marcus Chen',
    role: 'Senior Full-Stack & Streamlit Developer',
    email: 'marcus.chen@ai-edu-engine.org',
    github: 'https://github.com/marcus-chen',
    linkedin: 'https://linkedin.com/in/marcuschen-dev',
    image: 'MC',
    bio: 'Passionate about bringing machine learning tools to life. Crafted the modular real-time OpenCV-Streamlit engine logic and state managers.'
  },
  {
    name: 'Sofia Rodriguez',
    role: 'Computer Vision Research Specialist',
    email: 'sofia.rodriguez@ai-edu-engine.org',
    github: 'https://github.com/sofia-rod',
    linkedin: 'https://linkedin.com/in/sofia-rodriguez-cv',
    image: 'SR',
    bio: 'Expert in facial landmark regression and high-throughput real-time spatial transformations. Optimized our custom CNN model training on FER-2013.'
  },
  {
    name: 'David Kim',
    role: 'Educational Psychology Consultant',
    email: 'david.kim@ai-edu-engine.org',
    github: 'https://github.com/davidkim-edu',
    linkedin: 'https://linkedin.com/in/davidkim-pedagogy',
    image: 'DK',
    bio: 'Designs learning scaffold mapping workflows, linking real-time emotional triggers with pedagogically backed academic recommendations.'
  }
];

export const faqData = [
  {
    question: 'How does the facial expression analysis protect student privacy?',
    answer: 'The system runs edge-inference directly on the student’s local environment or through self-contained processing loops. No video streams or raw facial images are transmitted or saved to external databases; only anonymized temporal state logs are kept for visual charts.'
  },
  {
    question: 'What is the accuracy of the model trained on the FER-2013 dataset?',
    answer: 'Our custom CNN achieves a robust ~68.4% top-1 accuracy and ~88.2% top-2 classification accuracy on the validation split. This is highly competitive on FER-2013, which is known for its intense expression variation, shadow artifacts, and head pose changes.'
  },
  {
    question: 'Can this engine be integrated into standard LMS platforms like Moodle or Canvas?',
    answer: 'Yes! The modular Python core can easily export state triggers via standard REST APIs, and the Streamlit-based controller serves as a perfect prototype wrapper that can be embedded into LMS dashboards using iframe protocols.'
  },
  {
    question: 'How do teachers benefit from this emotion logging engine?',
    answer: 'Teachers gain access to consolidated aggregate engagement boards, showing when students faced peak frustration (Anger), felt overwhelmed (Fear), or enjoyed the material (Happy), allowing data-driven revisions of course curriculums.'
  }
];

export const testimonialsData = [
  {
    quote: 'This system transformed how my computer science students approach self-guided labs. When they feel lost and start to look angry, the AI offers guidance before they lose hope.',
    author: 'Prof. Amara Okafor',
    title: 'Dean of Information Technology, Stanford Prep',
    avatar: 'AO'
  },
  {
    quote: 'A masterpiece of Computer Vision applied to pedagogy. Combining simple Haar Cascade facial croppings with highly specific learning rerouting creates a seamless feedback cycle.',
    author: 'Liam Vance',
    title: 'Senior Researcher, Affective AI Laboratory',
    avatar: 'LV'
  }
];

export const timelineData = [
  {
    phase: 'Phase 1: Exploratory Analysis',
    date: 'Sept - Nov 2025',
    title: 'Dataset Preparation & Baseline Training',
    description: 'Cleaned FER-2013 dataset categories. Designed and trained baseline models using DenseNet and lightweight Convolutional neural network matrices.'
  },
  {
    phase: 'Phase 2: Local Core Architecture',
    date: 'Dec 2025 - Feb 2026',
    title: 'OpenCV pipeline & Streamlit MVP',
    description: 'Engineered high-speed camera capture with local cascade face croppers. Integrated python-based local recommendation state machine.'
  },
  {
    phase: 'Phase 3: Deep Model Optimization',
    date: 'March - May 2026',
    title: 'Hyperparameter Tuning & Scaffold Design',
    description: 'Applied data augmentation, dropout regularization, and learning rate schedules. Structured robust educational recommendation mappings.'
  },
  {
    phase: 'Phase 4: Full Deployment & UX Design',
    date: 'June 2026 (Current)',
    title: 'Production Website & Public Showcase',
    description: 'Created premium glassmorphic portal, full interactive simulation workspace, comprehensive workflow visualization, and documentation packages.'
  }
];
