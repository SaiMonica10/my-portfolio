// Single source of truth for all site content. Game mode and Recruiter Mode
// both render from this file, so edit text here only.

export const profile = {
  name: 'Sai Monica R',
  title: 'Junior Data Scientist · AI/ML Engineer',
  tagline: 'Data science + LLM applications, deployed end to end.',
  location: 'Chennai, India — open to Bangalore and remote.',
  summary:
    'Associate AI Software Developer with 1+ years of experience and an Integrated M.Tech in Computer Science and Engineering (Data Science). Skilled in data preprocessing, exploratory data analysis, feature engineering, and building and evaluating machine learning models with scikit-learn and PyTorch. Experienced in developing LLM applications with RAG, tool-calling agents, and evaluation suites, and in deploying models as REST APIs with FastAPI, Docker, Kubernetes, and CI/CD.',
  stats: [
    { label: 'Class', value: 'Junior Data Scientist' },
    { label: 'Level', value: '1+ year XP' },
    { label: 'Base', value: 'Chennai' },
  ],
  email: 'sai.monica444@gmail.com',
  linkedin: { label: 'linkedin.com/in/saimonica', url: 'https://www.linkedin.com/in/saimonica' },
  github: { label: 'github.com/SaiMonica10', url: 'https://github.com/SaiMonica10' },
  resume: '/Sai_Monica_R_Resume.pdf',
};

export const skills = [
  { group: 'Languages', items: ['Python', 'SQL', 'JavaScript', 'Java'] },
  {
    group: 'Data Science & ML',
    items: ['Pandas', 'NumPy', 'scikit-learn', 'PyTorch', 'EDA', 'Feature Engineering', 'Model Evaluation', 'Tableau'],
  },
  {
    group: 'Generative AI',
    items: ['LLM APIs (OpenAI, Gemini, Groq)', 'LangChain', 'Hugging Face', 'Prompt Engineering', 'RAG', 'MCP'],
  },
  {
    group: 'Backend & Databases',
    items: ['FastAPI', 'Flask', 'Node.js', 'Express.js', 'React.js', 'REST APIs', 'PostgreSQL', 'MySQL'],
  },
  {
    group: 'DevOps & Testing',
    items: ['Docker', 'Kubernetes', 'Jenkins', 'CI/CD', 'Git', 'Selenium', 'Unit and Integration Testing'],
  },
];

export const projects = [
  {
    id: 'voice-assistant',
    level: '1-1',
    title: 'AI Voice Assistant (Agentic LLM App)',
    dates: 'Apr 2026 – Jul 2026',
    stack: ['Python', 'FastAPI', 'Groq LLM (Llama 3.3 70B)', 'ElevenLabs', 'Google APIs'],
    problem: 'An end-to-end voice assistant that takes spoken requests, reasons about them, and replies by voice.',
    input: 'Speech, converted to text with the Google Web Speech API.',
    approach: [
      'Reasons with a Groq-hosted LLM (Llama 3.3 70B) and replies by voice using the ElevenLabs Text-to-Speech API.',
      'Served through a FastAPI WebSocket API for real-time, two-way communication.',
      'Multi-step ReAct tool-calling agent that decides which of 15 tools to use, covering web search, news, weather, and system control.',
      'Google Calendar integration through OAuth 2.0 (Google API Python Client), so users can create and manage meetings and events by voice.',
    ],
    result:
      'An LLM-as-judge evaluation suite that scores tool-selection accuracy and response quality against a baseline, catching regressions after prompt and tool changes.',
    badge: 'Evaluation suite',
    links: [{ label: 'GitHub', url: 'https://github.com/SaiMonica10/voice-assistent' }],
  },
  {
    id: 'disease-prediction',
    level: '1-2',
    title: 'Disease Prediction using Random Forest',
    dates: 'May 2022 – Jul 2022',
    stack: ['Python', 'scikit-learn', 'Flask', 'Pickle'],
    problem: 'Predicting diseases from symptoms.',
    input: 'A medical symptom dataset, preprocessed, with feature selection across 132 symptoms to prepare model inputs.',
    approach: [
      'Trained and evaluated a scikit-learn Random Forest classifier.',
      'Deployed the model as a Flask REST API for real-time predictions, using Pickle to load the trained model efficiently at inference time.',
    ],
    result: '85% accuracy in predicting diseases from symptoms.',
    links: [{ label: 'GitHub', url: 'https://github.com/SaiMonica10/Disease-Prediction-Using-Random-Forest-Classifier' }],
  },
  {
    id: 'salaries-dashboard',
    level: '1-3',
    title: 'Data Science Salaries Dashboard',
    dates: 'May 2025 – Jun 2025',
    stack: ['Python', 'Tableau'],
    problem: 'Identifying patterns and trends in data science salaries.',
    input: 'A global data science salaries dataset.',
    approach: ['Exploratory data analysis (EDA) in Python.'],
    result:
      'An interactive Tableau dashboard showing salary distribution, geographic trends, and differences across job roles.',
    links: [{ label: 'GitHub', url: 'https://github.com/SaiMonica10/Tableau-projects-Data-Visualisation' }],
  },
];

export const experience = [
  {
    company: 'ESDS Software Solutions',
    role: 'Associate AI Software Developer',
    place: 'Chennai',
    dates: 'Jul 2025 – Present',
    points: [
      'Developed and maintained full-stack enterprise applications with React.js front ends, Node.js/Express.js and FastAPI back ends, and PostgreSQL databases, writing testable, production-quality code.',
      'Built, deployed, and maintained 30+ REST API endpoints and microservices, designing endpoints and database interactions to support business workflows.',
      'Integrated LLM-based features into production systems, applying prompt engineering and evaluation to improve the quality and consistency of model responses.',
      'Debugged and performed root cause analysis on model and application issues, tracing problems across the front end, API, and database layers.',
      'Automated build, test, and deployment on every code commit using CI/CD pipelines with Docker and Kubernetes, improving deployment reliability.',
      'Adopted Claude Code as an agentic coding assistant with a review-before-merge workflow, delivering features about 60% faster and reducing rework by 40%.',
      'Collaborated with cross-functional teams to translate business requirements into technical solutions.',
    ],
  },
  {
    company: 'Nokia',
    role: 'Software Development Intern',
    place: 'Bengaluru',
    dates: 'Aug 2024 – May 2025',
    points: [
      'Developed an automated end-to-end UI testing framework using Python, Selenium, and Robot Framework, structured with the Page Object Model (POM) for reusable, maintainable test code.',
      'Integrated automated test suites into Jenkins CI/CD pipelines, improving test coverage by 45% and reducing manual testing effort by 40%.',
      'Automated test workflows and deployment processes using shell scripting in WSL environments.',
    ],
  },
  {
    company: 'Ashok Leyland',
    role: 'AI Intern',
    place: 'Chennai',
    dates: 'May 2023 – Jun 2023',
    points: [
      'Built an LLM-powered document chatbot using the OpenAI API and LangChain, applying retrieval-augmented generation (RAG) to answer questions from internal documents.',
      'Generated embeddings for document chunks and stored them in a FAISS vector database, enabling semantic retrieval of the most relevant context for each query.',
      'Developed a Streamlit interface for the chatbot, reducing manual document search effort and making information easier to access.',
    ],
  },
];

export const education = {
  degree: 'Integrated M.Tech in Computer Science and Engineering (Data Science)',
  school: 'Vellore Institute of Technology',
  dates: 'Sep 2020 – Jun 2025',
  detail: 'CGPA 8.63',
};

export const certifications = [
  { name: 'AI Fluency', issuer: 'Anthropic' },
  { name: 'AI-900: Azure AI Fundamentals', issuer: 'Microsoft' },
  { name: 'AI Engineer Agentic Track: Agents & MCP', issuer: 'Udemy' },
];

// World map blocks, in map order.
export const sections = [
  { id: 'stats', title: 'Player Stats', subtitle: 'About', color: 'grass' },
  { id: 'inventory', title: 'Inventory', subtitle: 'Skills', color: 'dirt' },
  { id: 'levels', title: 'Levels', subtitle: 'Projects', color: 'sky' },
  { id: 'quests', title: 'Quest Log', subtitle: 'Experience', color: 'red' },
  { id: 'achievements', title: 'Achievements', subtitle: 'Education & Certifications', color: 'gold' },
  { id: 'save', title: 'Save Point', subtitle: 'Contact', color: 'mist' },
];

export const XP_PER_SECTION = 100;
