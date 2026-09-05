export const personalInfo = {
  name: "SUDHANSHU SINGH",
  firstName: "SUDHANSHU",
  lastName: "SINGH",
  title: "Java • Spring Boot • Full-Stack Developer",
  subtitle: "Computer Science & Engineering Student",
  location: "Siwan, Bihar, India",
  region: "India / Bihar",
  email: "rathoressudhanshu@gmail.com",
  phone: "+91-8789XXX8318",
  quote: "Code. Build. Learn. Repeat.",
  avatar: "/assets/developer_character.jpg",
  resumeUrl: "/resume/Sudhanshu_Singh_Resume.pdf",
  bio: "Turning ideas into impactful digital experiences through code, creativity, and technology.",
  aboutDetailed: "I’m Sudhanshu Singh, a Computer Science & Engineering student and aspiring Java & Spring Boot Developer. I enjoy building practical applications and solving real-world problems through technology. My primary focus is Java, Spring Boot, REST APIs, SQL, and full-stack development. I learn by building hands-on projects, exploring new technologies, and continuously improving my problem-solving and development skills. I’m looking forward to growing as a developer and contributing to software that is useful, reliable, and impactful.",
  stats: [
    { label: "PROJECTS", value: "5" },
    { label: "INTERNSHIPS", value: "4" },
    { label: "CGPA", value: "8.53" },
  ],
  socials: {
    github: "https://github.com/mesudhanshusingh",
    linkedin: "https://www.linkedin.com/in/sudhanshu-singh-777525276",
    instagram: "https://www.instagram.com/mesudhanshusingh?igsi=emliZ3JkZTE5cDY5",
    x: "https://x.com/mesudhansusingh",
  }
};

export const heroTechBadges = [
  { name: "Java", icon: "Code2" },
  { name: "Python", icon: "Terminal" },
  { name: "Spring Boot", icon: "Layers" },
  { name: "REST APIs", icon: "Server" },
  { name: "MySQL", icon: "Database" },
  { name: "JavaScript", icon: "FileCode2" },
  { name: "GitHub", icon: "Github" }
];

export const educationList = [
  {
    degree: "B.Tech. in Computer Science & Engineering",
    institution: "Government Engineering College Arwal, Bihar",
    period: "2024 – 2027 (Expected)",
    score: "CGPA: 8.53",
    badge: "Undergraduate"
  },
  {
    degree: "Diploma in Computer Science & Engineering",
    institution: "Government Polytechnic Munger, Bihar",
    period: "2022 – 2024",
    score: "CGPA: 8.61",
    badge: "Diploma"
  },
  {
    degree: "Intermediate (12th Class)",
    institution: "S.B.R. High School Cum Inter College",
    period: "2020 – 2022",
    score: "Marks: 74.8%",
    badge: "Higher Secondary"
  },
  {
    degree: "Matriculation (10th Class)",
    institution: "S.B.R. High School",
    period: "2019 – 2020",
    score: "Marks: 75.6%",
    badge: "Secondary"
  }
];

export const skillCategories = [
  {
    category: "PROGRAMMING LANGUAGE",
    icon: "Code2",
    skills: ["Java"]
  },
  {
    category: "BACKEND",
    icon: "Server",
    skills: ["Spring Boot", "REST APIs", "Spring Data JPA"]
  },
  {
    category: "FRONTEND",
    icon: "Layout",
    skills: ["HTML5", "CSS3", "JavaScript"]
  },
  {
    category: "DATABASE",
    icon: "Database",
    skills: ["MySQL", "SQL"]
  },
  {
    category: "DEPLOYMENT & HOSTING",
    icon: "Cloud",
    skills: ["Render", "Vercel", "Netlify", "Azure", "Aiven"]
  },
  {
    category: "CORE CS",
    icon: "Cpu",
    skills: ["OOP", "DSA", "DBMS", "Operating Systems", "Computer Networks"]
  },
  {
    category: "TOOLS",
    icon: "Wrench",
    skills: ["Git", "GitHub", "Maven", "Postman"]
  }
];

export const projectsList = [
  {
    id: "amburoute",
    name: "01 — AmbuRoute — Intelligent Emergency Ambulance Navigation System",
    tagline: "AI Healthcare & Routing Platform",
    year: "2026",
    highlight: true,
    techStack: ["Java", "Spring Boot", "Python", "MySQL", "HTML5", "CSS3", "JavaScript", "Bootstrap 5", "Chart.js", "REST APIs", "Git"],
    description: "AI-powered ambulance routing platform inspired by real-world emergency healthcare challenges.",
    features: [
      "Smart Route Optimization",
      "AI Hospital Recommendation",
      "Railway Crossing Intelligence",
      "Green Corridor Simulation",
      "Live Ambulance Tracking",
      "Emergency Driver Alerts"
    ],
    liveDemoUrl: "https://emergency-ambulance-navigation-system.onrender.com/#landing",
    githubUrl: "https://github.com/mesudhanshusingh/Emergency-Ambulance-Navigation-System.git",
    image: "/assets/amburoute_mockup.jpg",
    category: "Emergency & Navigation System"
  },
  {
    id: "employee-management-system",
    name: "02 — Employee Management & Leave Tracking System",
    tagline: "Full-Stack Enterprise Application",
    year: "2026",
    highlight: true,
    techStack: ["Java", "Spring Boot", "REST APIs", "Spring Data JPA", "MySQL", "HTML5", "CSS3", "JavaScript"],
    description: "Full-stack employee management system for managing employee records, departments, and leave requests.",
    features: [
      "Employee CRUD operations",
      "Employee search",
      "Department-based filtering",
      "Leave application and history",
      "Leave approval/rejection",
      "Leave balance management",
      "REST APIs connecting the JavaScript frontend with Spring Boot backend",
      "Validation and exception handling"
    ],
    liveDemoUrl: "https://employee-management-system-oobe.onrender.com/",
    githubUrl: "https://github.com/mesudhanshusingh/Employee-Management-System.git",
    image: "/assets/employee_management_mockup.jpg",
    category: "Full-Stack Enterprise Application"
  },
  {
    id: "skill-based-team-allocation",
    name: "03 — Skill-Based Student Project Team Allocation System",
    tagline: "Algorithmic Team Allocation Platform",
    year: "2026",
    highlight: false,
    techStack: ["Java", "Spring Boot", "REST APIs", "Spring Data JPA", "MySQL", "HTML5", "CSS3", "JavaScript"],
    description: "Full-stack system that manages student profiles, skills, project requirements, and team assignments.",
    features: [
      "Student profile and skill management",
      "Project requirement management",
      "Skill-based matching",
      "Rule-based matching score",
      "Automatic team generation",
      "Team-size handling",
      "Skill coverage",
      "Duplicate-student prevention"
    ],
    liveDemoUrl: "https://skill-based-student-project-team-9yw9.onrender.com/",
    githubUrl: "https://github.com/mesudhanshusingh/Skill-Based-Student-Project-Team-Allocation-System.git",
    image: "/assets/team_allocation_mockup.jpg",
    category: "Algorithmic Team Allocation Platform"
  },
  {
    id: "saferide",
    name: "04 — SafeRide — Women’s Safety Platform",
    tagline: "AI Safety Platform",
    year: "2026",
    highlight: false,
    techStack: ["Java", "Spring Boot", "Python", "FastAPI", "MySQL", "MongoDB", "HTML5", "CSS3", "JavaScript", "JWT", "REST APIs"],
    description: "AI-powered full-stack women’s safety platform inspired by real-world safety challenges during solo travel.",
    features: [
      "Smart SOS Alerts",
      "Live Location Sharing",
      "Emergency Recording",
      "Community Safety Alerts",
      "Real-time emergency response system",
      "Rapid emergency alerts and location sharing",
      "Emergency coordination"
    ],
    liveDemoUrl: "https://saferide-womens-safety-platform.onrender.com/",
    githubUrl: "https://github.com/mesudhanshusingh/SafeRide-Womens-Safety-Platform.git",
    image: "/assets/saferide_mockup.jpg",
    category: "Full Stack Platform"
  },
  {
    id: "upi-offline",
    name: "05 — UPI Payment Without Internet using Spring Boot",
    tagline: "Offline FinTech Payment Solution",
    year: "2026",
    highlight: false,
    techStack: ["Spring Boot"],
    description: "UPI Payment Without Internet using Spring Boot.",
    features: [],
    liveDemoUrl: null,
    githubUrl: "https://github.com/mesudhanshusingh/UPI-Without-Internet.git",
    image: "/assets/upi_offline_mockup.jpg",
    category: "Backend & Fintech Systems"
  }
];

export const experienceList = [
  {
    role: "Artificial Intelligence Intern",
    company: "Edulogy Private Ltd.",
    period: "March 2026",
    description: "Worked with Python, Artificial Intelligence, Machine Learning fundamentals, and data preprocessing through internship projects and assignments.",
    skills: ["Python", "AI Fundamentals", "Machine Learning", "Data Preprocessing"]
  },
  {
    role: "Web Development Intern",
    company: "Skill Internship",
    period: "June 2025",
    description: "Developed responsive web pages using HTML5, CSS3, and JavaScript, focusing on functionality and user experience.",
    skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design"]
  },
  {
    role: "JavaScript Intern",
    company: "Scaler",
    period: "January 2024",
    description: "Applied JavaScript, HTML5, and CSS3 through web development tasks and responsive page design.",
    skills: ["JavaScript", "DOM Manipulation", "CSS Layouts"]
  },
  {
    role: "Python Intern",
    company: "Internshala Trainings",
    period: "January 2023",
    description: "Applied Python programming, problem-solving, and basic programming concepts through practical exercises.",
    skills: ["Python", "Data Structures", "Algorithms"]
  }
];

export const certificationsList = [
  {
    title: "Oracle Java Foundations: Training and Assessment",
    issuer: "Oracle",
    year: "2026",
    logo: "/logos/oracle.svg",
    badge: "Official Oracle Certification"
  },
  {
    title: "Deploy a Spring Boot App to Azure Container Apps",
    issuer: "Microsoft",
    year: "2026",
    logo: "/logos/microsoft.svg",
    badge: "Microsoft Cloud Credential"
  },
  {
    title: "Oracle SQL Explorer",
    issuer: "Oracle",
    year: "2026",
    logo: "/logos/oracle.svg",
    badge: "Oracle Database Credential"
  },
  {
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte Australia (Forage)",
    year: "2026",
    logo: "/logos/deloitte.svg",
    badge: "Deloitte Industry Simulation"
  },
  {
    title: "Soft Skill Development (Elite Certification)",
    issuer: "NPTEL / IIT Kharagpur",
    year: "2026",
    logo: "/logos/nptel.svg",
    badge: "Elite Academic Honor"
  }
];
