// Import the image and assets
import thumbnail_downloader from '../assets/thumbnail-downloader-screenshot.jpg'; // Relative path
import mernAIChatBotImage from '../assets/mernAIChatBot.jpg';
import uberAppImage from '../assets/uberApp.jpg';
import allInOneCalculatorImage from '../assets/allInOneCalculator.jpg';
import onlineWhiteBoardImage from '../assets/onlineWhiteBoard.jpg';
import neuralNetworkImage from '../assets/neuralNetwork.jpg';
import sentimentalAnalysisImage from '../assets/sentimentalAnalysis.jpg';
import plagiarismDetectorImage from '../assets/plagiarismDetector.jpg';
import spamClassificationImage from '../assets/spamClassification.jpg';
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent, 
  jobit,
  tripguide,
  threejs,
} from '../assets';  // Ensure correct relative path

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "FullStack Developer",
    icon: web,
  },
  {
    title: "Deep Learning Specialist",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining scalable web applications using React.js, Node.js, and MongoDB.",
      "Collaborating with cross-functional teams to create high-quality software solutions.",
      "Implementing responsive design and optimizing performance for seamless user experiences.",
      "Participating in code reviews and adhering to best practices for software development.",
    ],
  },
  {
    title: "Machine Learning Engineer",
    company_name: "",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Apr 2023- Present",
    points: [
      "Designed and trained machine learning models to predict customer behaviors and enhance recommendation systems.",
      "Implemented pipelines for data preprocessing, feature extraction, and model validation.",
      "Collaborated with data scientists and engineers to deploy scalable AI models in production environments.",
      "Optimized ML workflows, reducing training times by 30% through advanced hyperparameter tuning and distributed computing.",
    ],
  },
  {
    title: "Deep Learning Specialist",
    company_name: "",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Dec 2024 - Present",
    points: [
      "Developed state-of-the-art deep learning models for natural language processing (NLP) and computer vision tasks.",
      "Built custom neural network architectures using TensorFlow and PyTorch to solve complex AI challenges.",
      "Published research on transformer models, leading to improvements in contextual language understanding.",
      "Enhanced model accuracy by 20% using advanced training techniques, including transfer learning and data augmentation.",
    ],
  },
];

const projects = [
  {
    name: "YouTube Thumbnail Downloader",
    description:
      "Web tool for extracting YouTube thumbnails with 4K resolution support and instant preview.",
    tags: [
      {
        name: "React",
        color: "text-cyan-400",
      },
      {
        name: "JavaScript",
        color: "text-amber-400",
      },
      {
        name: "API",
        color: "text-purple-400",
      },
    ],
    image: thumbnail_downloader, // Image imported correctly
    source_code_link: "https://github.com/schnrj/YouTube-Thumbnail-Downloader",
    live_demo_link: "https://youtube-thumbnail-downloader-iota.vercel.app/",
  },
  {
    name: "MernAI ChatBot",
    description:
      "A chatbot application built with Node.js, Express, and MongoDB that utilizes AI for natural conversation.",
    tags: [
      {
        name: "Node.js",
        color: "text-green-400",
      },
      {
        name: "Express",
        color: "text-red-400",
      },
      {
        name: "MongoDB",
        color: "text-blue-400",
      },
    ],
    image: mernAIChatBotImage, // Add path to your project image
    source_code_link: "https://github.com/schnrj/MERN-AI-ChatBot",
    live_demo_link: "https://mern-ai-chatbot-demo.com", // Replace with your live demo link
  },
  {
    name: "UberApp Fullstack",
    description:
      "A full-stack Uber-like app with features such as ride booking, driver tracking, and payment gateway integration.",
    tags: [
      {
        name: "React",
        color: "text-cyan-400",
      },
      {
        name: "Node.js",
        color: "text-green-400",
      },
      {
        name: "MongoDB",
        color: "text-blue-400",
      },
    ],
    image: uberAppImage, // Add path to your project image
    source_code_link: "https://github.com/schnrj/Uber-App",
    live_demo_link: "https://uberapp-fullstack-demo.com", // Replace with your live demo link
  },
  {
    name: "AllInOneCalculator",
    description:
      "A versatile calculator with 21 functionalities including scientific and graphical operations.",
    tags: [
      {
        name: "JavaScript",
        color: "text-amber-400",
      },
      {
        name: "API",
        color: "text-purple-400",
      },
      {
        name: "HTML & CSS",
        color: "text-gray-400",
      },
    ],
    image: allInOneCalculatorImage, // Add path to your project image
    source_code_link: "https://github.com/schnrj/SuperCalculator",
    live_demo_link: "https://all-in-one-calculator-my3ln3zo8-sachins-projects-4c45740f.vercel.app/", // Replace with your live demo link
  },
  {
    name: "Online WhiteBoard",
    description:
      "An online collaborative whiteboard application where multiple users can draw, write, and share in real-time.",
    tags: [
      {
        name: "React",
        color: "text-cyan-400",
      },
      {
        name: "Node.js",
        color: "text-green-400",
      },
      {
        name: "WebSocket",
        color: "text-orange-400",
      },
    ],
    image: onlineWhiteBoardImage, // Add path to your project image
    source_code_link: "https://github.com/schnrj/Online_White_Board",
    live_demo_link: "https://onlinewhiteboard-demo.com", // Replace with your live demo link
  },
  {
    name: "Neural Network from Scratch",
    description:
      "A basic neural network implemented from scratch in Python, demonstrating the core principles of deep learning.",
    tags: [
      {
        name: "Python",
        color: "text-yellow-400",
      },
      {
        name: "Deep Learning",
        color: "text-blue-400",
      },
    ],
    image: neuralNetworkImage, // Add path to your project image
    source_code_link: "https://github.com/schnrj/Deep-Neural-Network-From-Scratch",
    live_demo_link: "https://neuralnetwork-demo.com", // Replace with your live demo link
  },
  {
    name: "Sentimental Analysis",
    description:
      "A sentiment analysis project using Natural Language Processing to classify sentiment from text data.",
    tags: [
      {
        name: "Python",
        color: "text-yellow-400",
      },
      {
        name: "Machine Learning",
        color: "text-green-400",
      },
    ],
    image: sentimentalAnalysisImage, // Add path to your project image
    source_code_link: "https://github.com/schnrj/Sentiment_Analysis",
    live_demo_link: "https://sentimental-analysis-demo.com", // Replace with your live demo link
  },
  {
    name: "Plagiarism Detector",
    description:
      "A plagiarism detection tool that analyzes text for similarities using various algorithms.",
    tags: [
      {
        name: "Python",
        color: "text-yellow-400",
      },
      {
        name: "Algorithm",
        color: "text-red-400",
      },
    ],
    image: plagiarismDetectorImage, // Add path to your project image
    source_code_link: "https://github.com/schnrj/Plagiarism_Detector",
    live_demo_link: "https://plagiarism-detector-demo.com", // Replace with your live demo link
  },
  {
    name: "Spam Classification",
    description:
      "A classification model built using machine learning algorithms to identify spam emails or messages.",
    tags: [
      {
        name: "Python",
        color: "text-yellow-400",
      },
      {
        name: "Machine Learning",
        color: "text-green-400",
      },
    ],
    image: spamClassificationImage, // Add path to your project image
    source_code_link: "https://github.com/schnrj/Spam-Email-Classification",
    live_demo_link: "https://spam-classification-demo.com", // Replace with your live demo link
  },
];

export { services, technologies, experiences, projects };
