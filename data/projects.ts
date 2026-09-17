export type Project = {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  category: string;
  role?: string;
  roleDescription?: string;
  summary: string;
  overview: string;
  problem: string;
  solution: string;
  technologies: string[];
  features: string[];
  results: string[];
  image: string;
  imageAlt: string;
  gallery?: { src: string; alt: string }[];
  metric?: { value: string; label: string };
  publication?: string;
};

export const projects: Project[] = [
  {
    slug: "mbg-sentiment-analysis",
    number: "01",
    title: "Analyzing Public Sentiment Toward the Makan Bergizi Gratis Program",
    shortTitle: "MBG Sentiment Analysis Project",
    category: "Artificial Intelligence · NLP Research",
    summary: "A published NLP study comparing static and contextual word embeddings with CapsNet to classify Indonesian public sentiment from Twitter data.",
    overview: "This research analyzes public discussion around Indonesia’s Makan Bergizi Gratis program and classifies Twitter posts into positive, neutral, and negative sentiment. The work was published in JUTIF, a SINTA 2 journal.",
    problem: "Public reactions to the program are widely expressed on social media, but manually interpreting thousands of posts is inefficient. A systematic approach was needed to understand overall sentiment at scale.",
    solution: "The study applied an NLP pipeline to 7,133 Indonesian-language tweets, comparing Word2Vec, FastText, ELMo, and IndoBERT embeddings in a Capsule Network under raw-text and stemming preprocessing settings.",
    technologies: ["Python", "NLP", "Word2Vec", "FastText", "ELMo", "IndoBERT", "CapsNet", "TensorFlow", "Gensim", "Scikit-learn", "Google Colab"],
    features: ["Twitter data collection and manual sentiment labeling", "Raw-text and stemming preprocessing experiments", "Static and contextual embedding comparison", "Capsule Network sentiment classification", "Evaluation across positive, neutral, and negative classes"],
    results: ["Word2Vec on raw text produced the highest accuracy at 96.17%.", "FastText performed best on stemmed data at 94.10%, reflecting its reliance on subword structure.", "ELMo and IndoBERT delivered stable results but required greater computational resources.", "The research demonstrates how social sentiment analysis can support evidence-based evaluation of public programs."],
    image: "/images/projects/skripsi.png",
    imageAlt: "JUTIF paper for the MBG sentiment analysis research displayed on a laptop",
    gallery: [{ src: "/images/projects/mbg-result.png", alt: "Accuracy comparison table showing the proposed CapsNet and Word2Vec method" }],
    metric: { value: "96.17%", label: "best classification accuracy" },
    publication: "https://doi.org/10.52436/1.jutif.2026.7.1.5424",
  },
  {
    slug: "sibisa",
    number: "02",
    title: "SiBisa — Stamet Banjarmasin Inventory System",
    shortTitle: "SiBisa — Stamet Banjarmasin Inventory System",
    category: "Full-Stack Development",
    role: "Full Stack Developer",
    roleDescription: "Responsible for system design, backend and frontend development, database management, and API integration.",
    summary: "A centralized web and mobile inventory system for real-time item status, internal borrowing, approvals, QR scanning, and notifications.",
    overview: "SiBisa (Stamet Banjarmasin Inventory System) records, monitors, and manages inventory movement at Stasiun Meteorologi Syamsudin Noor through web and mobile interfaces.",
    problem: "Inventory records previously lived in notebooks or separate spreadsheets, making item status, borrowing history, and stock availability difficult to track consistently.",
    solution: "A centralized system gives authorized users real-time inventory visibility, structured borrowing workflows, and faster transactions through QR scanning and Telegram updates.",
    technologies: ["Node.js", "Express.js", "MySQL", "CodeIgniter 4", "Tailwind CSS", "Flutter", "Dart", "QR Code API", "Telegram Bot"],
    features: ["Authentication and role management", "Inventory data management", "Borrowing and return logging", "Approval workflow", "Real-time item status", "QR Code scanning", "Telegram Bot notifications"],
    results: ["Replaced fragmented manual records with a centralized digital workflow.", "Improved visibility into inventory status, transaction history, and stock availability across web and mobile devices."],
    image: "/images/projects/sibisa3.png",
    imageAlt: "SiBisa inventory system authentication screen",
    gallery: [{ src: "/images/projects/sibisa2.png", alt: "Relational database structure for inventory, users, and loan history" }],
  },
  { 
    slug: "edutraffic",
    number: "03",
    title: "EduTraffic: Child-Friendly Traffic Safety Education",
    shortTitle: "EduTraffic",
    category: "Web Development",
    role: "Full Stack Developer",
    roleDescription: "Responsible for system design, backend and frontend development, database management, and API integration.",
    summary: "An interactive learning platform that turns traffic-safety education into measurable quizzes, immediate feedback, and participant insights.",
    overview: "EduTraffic is a child-friendly web platform combining interactive quizzes with personalized learning feedback across driving and pedestrian safety topics.",
    problem: "Static traffic-safety materials can be less engaging for children and provide little insight into individual understanding or knowledge gaps.",
    solution: "The platform evaluates participant knowledge, returns immediate category-based feedback and personalized conclusions, and gives administrators tools to manage questions and monitor performance.",
    technologies: ["PHP 8.2+", "CodeIgniter 4.7", "MySQL", "Composer", "HTML5", "CSS3", "JavaScript", "Responsive Design"],
    features: ["Interactive driving and pedestrian safety quizzes", "Immediate educational feedback", "Category-based strengths and knowledge-gap analysis", "Personalized participant conclusions", "Admin question management and performance monitoring", "Question snapshots and local AI fallback"],
    results: ["Makes traffic education more engaging and accessible for children.", "Category-based results help identify topics that need greater attention.", "The dashboard gives schools and institutions a measurable view of participant understanding."],
    image: "/images/projects/edu.png",
    imageAlt: "EduTraffic quiz score screen showing category-based safety results",
    gallery: [{ src: "/images/projects/edutraffic3.png", alt: "EduTraffic showing question and score" }],
  },
  {
    slug: "smart-fish-feeder",
    number: "04",
    title: "Smart Fish Feeder & Water Quality Monitoring",
    shortTitle: "Smart Fish Feeder",
    category: "IoT · Web Development",
    roleDescription: "Designed and developed the complete system, including sensor integration, microcontroller programming, automatic feeding control, data monitoring, web integration, and Telegram notification functionality.",
    summary: "An ESP32 system connecting automated feeding, multi-sensor water monitoring, a live web dashboard, and Telegram controls.",
    overview: "This IoT system combines scheduled fish feeding with real-time water-condition monitoring, remote visibility, and alerts when conditions require attention.",
    problem: "Fish owners need a practical way to maintain consistent feeding while monitoring temperature, dissolved solids, and water clarity when away from the aquarium or pond.",
    solution: "An ESP32 integrates physical sensors and automated controls with a browser-based dashboard, on-device OLED status, and a Telegram Bot for monitoring and commands.",
    technologies: ["ESP32", "TDS Sensor", "Turbidity Sensor", "DS18B20", "Servo MG90S", "DC Motor", "RTC DS3231", "OLED I2C", "Web Dashboard", "Telegram Bot API"],
    features: ["Scheduled automatic feeding", "Real-time temperature, TDS, and turbidity monitoring", "Live sensor dashboard", "Telegram condition alerts and device commands", "OLED device-status display", "Automated servo control"],
    results: ["Integrated embedded hardware, sensing, automation, networking, and web monitoring in one working system.", "Enabled remote water-condition visibility while automating the feeding process."],
    image: "/images/projects/iot.png",
    imageAlt: "Mobile water-monitoring dashboard beside Telegram Bot controls",
  },
];

export const getProject = (slug: string) => projects.find((project) => project.slug === slug);
