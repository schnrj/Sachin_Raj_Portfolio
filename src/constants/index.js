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
} from "../assets";

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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "FullStack Developer",
    icon: mobile,
  },
  {
    title: "Machine Learning Engineer",
    icon: backend, // You can replace this with a relevant ML icon
  },
  {
    title: "Deep Learning Specialist",
    icon: mobile, // You can replace this with a relevant DL icon
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
    icon: meta, // You can replace this with a relevant icon for Google AI
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
    icon: meta, // You can replace this with a relevant icon for OpenAI
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
const testimonials = [
  {
    testimonial:
      "Enabled a client to improve their website's performance by 50%, resulting in a 20% increase in user retention.",
    name: "Tech Innovators",
    designation: "Client",
    company: "N/A",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Collaborated with cross-functional teams to deliver a complex project two weeks ahead of schedule, showcasing excellent team coordination skills.",
    name: "Innovatech",
    designation: "Team Lead",
    company: "N/A",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Provided innovative solutions that reduced infrastructure costs by 25% while enhancing application reliability.",
    name: "Project Insights",
    designation: "Feedback",
    company: "N/A",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    testimonial:
      "Sachin consistently delivers exceptional results, blending technical expertise with creative problem-solving to exceed expectations.",
    name: "Digital Solutions",
    designation: "Senior Manager",
    company: "N/A",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
  },
];

const projects = [
  {
    name: "Uber App",
    description:
      "A campus-centric ride-hailing application with real-time location tracking and seamless payment integration.",
    tags: [
      {
        name: "reactnative",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/schnrj/Uber-App",
  },
  {
    name: "File Converter & Compressor",
    description:
      "A high-performance web app for file conversion and compression (JPG, PNG, DOC to PDF), optimizing server load and ensuring smooth user interaction.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/schnrj/File_Compress_Convert",
  },
  {
    name: "Online Whiteboard",
    description:
      "A collaborative drawing tool with real-time editing capabilities, enabling teamwork and storing session data securely.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "websockets",
        color: "green-text-gradient",
      },
      {
        name: "canvasapi",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/schnrj/Online_White_Board",
  },
  {
    name: "YouTube Clone",
    description:
      "A comprehensive video-sharing platform with user authentication, video streaming, and optimized storage using AWS S3.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "aws",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/schnrj/YouTube-Clone",
  },
  {
    name: "Udemy Data Analysis",
    description:
      "A data analysis tool to process and visualize Udemy course data, providing insights into course trends, ratings, and pricing.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: carrent, // Placeholder image
    source_code_link: "https://github.com/schnrj/Udemy-Data-Analysis",
  },
  {
    name: "Sentimental Analysis",
    description:
      "A sentiment analysis tool that classifies social media posts or reviews as positive, negative, or neutral using NLP techniques.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "tensorflow",
        color: "green-text-gradient",
      },
      {
        name: "flask",
        color: "pink-text-gradient",
      },
    ],
    image: jobit, // Placeholder image
    source_code_link: "https://github.com/schnrj/Prml_project",
  },
  {
    name: "Job Trends Monitoring",
    description:
      "A dashboard to monitor job trends, in-demand skills, job categories, and salaries based on aggregated data from job postings.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "scrapy",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide, // Placeholder image
    source_code_link: "https://github.com/schnrj/Job-Trends-Monitoring",
  },
];

export { services, technologies, experiences, testimonials, projects };
