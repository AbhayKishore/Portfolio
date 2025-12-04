import React, { useEffect, useState, useRef } from "react";

export default function PortfolioPage() {
  // ========== DATA SECTION ==========
  const personal = {
    name: "Abhay Kishore",
    role: "Full-Stack Developer & AI Enthusiast",
    summary: "Building intelligent full-stack solutions that merge engineering, AI, creativity, and purposeful impact.",
   about: [
  "I'm Abhay, a full-stack developer and AI enthusiast who enjoys building practical digital solutions that blend solid engineering with emerging technologies. I focus on creating meaningful applications, exploring AI research, and developing products that contribute value through thoughtful design and purposeful innovation."],
    stats: {
        experience: "Fresh Graduate with Internship Experience", 
        support: "24*7" 
    },
skills: [
  {
    category: "Web Development",
    icon: "bi-globe",
    items: [
      { name: "HTML & CSS", level: 90 },
      { name: "React & JavaScript", level: 80 },               
      { name: "Django & Flask", level: 90 },                   
      { name: "PHP & MySQL", level: 80 },                      
      { name: "REST APIs, AJAX & JSON", level: 80 }            
    ]
  },
  {
    category: "AI & Data Science",
    icon: "bi-robot",
    items: [
      { name: "Python (NumPy, Pandas)", level: 90 },           
      { name: "Data Visualization (Matplotlib)", level: 80 },  
      { name: "Generative AI & Gemini API", level: 85 },       
      { name: "Prompt Engineering", level: 85 },               
      { name: "NLP & Document Processing (PDF, DOCX, OCR)", level: 80 }  
    ]
  },
  {
    category: "Programming Languages",
    icon: "bi-code-slash",
    items: [
      { name: "Python", level: 95 },
      { name: "Java", level: 75 },                             
      { name: "C / C++", level: 70 }                           
    ]
  },
  {
    category: "Other Tools",
     icon: "bi-cpu",
    items: [
      { name: "Git & GitHub", level: 85 },
      { name: "Linux Administration & Shell", level: 80 },     
      { name: "Cybersecurity Fundamentals", level: 80 },       
      { name: "Ethical Hacking Tools", level: 70 },            
      { name: "Cloud & Deployment (WSGI, venv)", level: 70 },
      { name: "Robotic Systems & Sensor Integration (Basics)", level: 60 } 
    ]
  },
  {
    category: "Computer Science Fundamentals",
    icon: "bi-motherboard",
    items: [
      { name: "Data Structures & Algorithms", level: 80 },     
      { name: "Object-Oriented Programming", level: 80 },      
      { name: "Database Design & SQL (DBMS)", level: 85 },     
      { name: "Operating Systems & Linux Concepts", level: 75 },
      { name: "Computer Networks", level: 75 },                
      { name: "Software Engineering & SDLC", level: 80 }       
    ]
  },
],
    email: "abhaykishore2004@gmail.com",
    github: "https://github.com/AbhayKishore",
    linkedin: "https://www.linkedin.com/in/abhay-kishore",
    phone: "+91 8304966250",
    location: "Ernakulam, Kerala, India",
  };

  // Flatten skills for the Tech Stack cloud
  const allSkills = personal.skills.flatMap(category => category.items.map(item => item.name));

  // --- STATE MANAGEMENT ---
  const [openSkillIndex, setOpenSkillIndex] = useState(0);
  const [filter, setFilter] = useState("all");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Hi there! I am Abhay\'s Assistant. How can I help you today?' }
  ]);
  
  const chatEndRef = useRef(null);

  // --- HELPER FUNCTIONS ---

  

  const toggleSkill = (index) => {
    setOpenSkillIndex(openSkillIndex === index ? null : index);
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleFooterServicesClick = (e) => {
    e.preventDefault();
    setChatOpen(true);
    handleChatOption({
      label: "What services does Abhay provide?",
      action: "services"
    });
  };

  // --- CHAT LOGIC ---
const handleChatOption = (option) => {
  setMessages((prev) => [...prev, { type: "user", text: option.label }]);

  setTimeout(() => {
    let botResponse = "";

    switch (option.action) {
      case "contact":
        botResponse =
          `You can reach Abhay at ${personal.email} or on WhatsApp/phone at ${personal.phone}. ` +
          `He is based in ${personal.location} and is open to remote or hybrid opportunities.`;
        scrollToSection("contact");
        break;

      case "resume": {
        botResponse = "Sure, downloading Abhay’s latest resume for you.";
        const link = document.createElement("a");
        link.href = "/Abhay_Kishore_CV.pdf";
        link.download = "Abhay_Kishore_CV.pdf";
        link.click();
        break;
      }

      case "projects":
        botResponse =
          "Key projects: FitConnect, a full-stack fitness platform built with Django and MySQL, and an AI Resume Evaluator using Flask and Gemini to score resumes and suggest improvements.";
        scrollToSection("projects");
        break;

      case "experience":
        botResponse =
          "Abhay has interned as an AI Intern at AccelerateX and as a Web Development Intern at Megatrend, alongside multiple academic and personal projects in full-stack development and AI.";
        scrollToSection("work");
        break;

      case "education":
        botResponse =
          "Abhay completed his BCA at Rajagiri College with a CGPA of 8.8, studying programming, data structures, databases, operating systems, networks, cloud computing and Android, and was the class topper in his first semester.";
        scrollToSection("education");
        break;

      case "roles":
        botResponse =
          "Abhay is seeking roles such as junior full-stack developer, backend developer (Python/Django or PHP), or AI/data/ML intern, especially where he can combine web development with AI features.";
        break;

      case "ai_profile":
        botResponse =
          "Abhay works with Python, NumPy, Pandas and Matplotlib, has built a Gemini-powered resume analysis tool, attended workshops on Generative AI and prompt engineering, and presented AI-focused cybersecurity research at national and international conferences.";
        scrollToSection("certifications");
        break;

      case "why_abhay":
        botResponse =
          "Abhay combines strong fundamentals in programming, data structures and databases with practical experience in Django, Flask, PHP, MySQL and AI tools, backed by solid academics and published conference work—making him a well-rounded early-career engineer.";
        break;

      case "bio":
        botResponse =
          "Abhay is a BCA graduate from Kerala with a focus on full-stack development and applied AI, building practical web and AI solutions and aiming to pursue a Master’s in Data Science and Artificial Intelligence.";
        scrollToSection("about");
        break;

      case "services":
        botResponse =
          "Abhay can help with full-stack web development (Django, Flask, PHP/CodeIgniter, MySQL), AI integration using Gemini and other LLMs, data analysis and dashboards in Python, and secure backend and API design.";
        scrollToSection("skills");
        break;

      case "skills":
        botResponse =
          "His core skills include Python, Django, Flask, React, PHP, MySQL, REST APIs, Git/GitHub, Linux, NumPy, Pandas, Matplotlib, Generative AI, prompt engineering and solid CS fundamentals in DSA, operating systems and networks.";
        scrollToSection("skills");
        break;

      case "current_work":
        botResponse =
          "Abhay is currently enhancing his AI Resume Evaluator, experimenting with new LLM-powered features, building Django applications and strengthening his data and ML skill set.";
        break;

      default:
        botResponse =
          "I’m not sure about that request, but you can always contact Abhay directly at " +
          personal.email +
          ".";
    }

    setMessages((prev) => [...prev, { type: "bot", text: botResponse }]);
  }, 600);
};

// --- CHAT OPTIONS (one for every action above) ---
const chatOptions = [
  { label: "What roles is Abhay looking for?", action: "roles" },
  { label: "What services can Abhay help with?", action: "services" },
  { label: "Tell me about his AI & data skills", action: "ai_profile" },
  { label: "Show his main projects", action: "projects" },
  { label: "Summarise his experience", action: "experience" },
  { label: "Where did he study?", action: "education" },
  { label: "Why should I hire Abhay?", action: "why_abhay" },
  { label: "Give me a short bio", action: "bio" },
  { label: "What are his core skills?", action: "skills" },
  { label: "What is he working on now?", action: "current_work" },
  { label: "How can I contact Abhay?", action: "contact" },
  { label: "Download his resume", action: "resume" },
];

// --- NAV SECTIONS (unchanged, just grouped here) ---
const navSections = [
  { id: "about",          label: "About Me",    icon: "bi-person" },
  { id: "projects",       label: "Projects",       icon: "bi-code-square" },
  { id: "education",      label: "Education",      icon: "bi-mortarboard" },
  { id: "work",           label: "Experience",     icon: "bi-briefcase" },
  { id: "certifications", label: "Certifications", icon: "bi-patch-check" },
  { id: "achievements",   label: "Achievements",   icon: "bi-trophy" },
  { id: "skills",         label: "Skills",         icon: "bi-cpu" },
  { id: "contact",        label: "Contact",        icon: "bi-envelope" },
];

  // --- EFFECT HOOKS ---
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, chatOpen]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("active");
        });
      },
      { threshold: 0.1 }
    );
    const hiddenElements = document.querySelectorAll(".reveal");
    hiddenElements.forEach((el) => observer.observe(el));
    return () => hiddenElements.forEach((el) => observer.unobserve(el));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth > 992) {
        setSidebarCollapsed(window.scrollY > 100);
      }
      const sections = document.querySelectorAll("section[id]");
      let current = "home";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 300) {
          current = section.getAttribute("id");
        }
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  // --- STATIC DATA ---
  const projects = [
    {
      id: 1,
      title: "FitConnect",
      category: "web",
      image: "/assets/fitness-app.png",
      desc: "Full-stack gym management platform with role-based access, AI workout recommendations, and nutrition tracking.",
      tech: ["Django", "MySQL", "HTML", "Bootstrap", "AJAX"],
      link: "https://github.com/AbhayKishore/fitness-app-django",
    },
    {
      id: 2,
      title: "AI Resume Evaluator",
      category: "ai",
      image: "/assets/resume-analyzer.png",
      desc: "Intelligent system using Google Gemini to analyze resumes, score ATS compatibility, and suggest improvements.",
      tech: ["Flask", "Gemini AI", "Python", "Bootstrap"],
      link: "https://github.com/AbhayKishore/AI-Resume-Evaluator",
    },
    
  ];

  const filteredProjects = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  const filters = [
    { name: "all", label: "All" },
    { name: "web", label: "Web" },
    { name: "ai", label: "AI/ML" },
  ];
  const completedProjects = projects.length;

  const workExperience = [
    {
      id: 1,
      range: "19/10/2024 — 23/10/2024",
      role: "AI Intern",
      company: "AccelerateX, M A College of Engineering",
      points: [
        "Built foundational AI models and deployed basic ML systems.",
        "Hands-on experience in data processing and AI project lifecycle.",
      ],
    },
    {
      id: 2,
      range: "01/04/2024 — 30/04/2024",
      role: "Web Development Intern",
      company: "Megatrend Knowledge Management Systems",
      points: [
        "Developed a School Management System with secure multi-level user access.",
        "Worked with WAMP, CodeIgniter, PHP and Bootstrap.",
      ],
    },
  ];

  const education = [
    {
      id: 1,
      range: "Aug 2022 — May 2025",
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Rajagiri College of Management & Applied Sciences",
      extras: "CGPA: 8.8 / 10.0",
    },
    {
      id: 2,
      range: "Sept 2020 — Jul 2022",
      degree: "Senior School Certificate (Class XII)",
      institution: "Assisi Vidyaniketan Public School, Ernakulam",
    },
    {
      id: 3,
      range: "Jun 2019 — Jul 2020",
      degree: "Secondary School Examination (Class X)",
      institution: "Assisi Vidyaniketan Public School, Ernakulam, Kerala, India",
    },
  ];

  const certifications = [
    {
      id: 1,
      title: "Workshop on Generative AI",
      description: "Participated in a workshop on applications of Generative AI models.",
    },
    {
      id: 2,
      title: "Workshop on AI Applications in Research Writing",
      description: "Explored AI tools integration in academic research.",
    },
    {
      id: 3,
      title: "Workshop on Prompt Engineering",
      description: "Hands-on workshop conducted by AccelerateX.",
    },
    {
      id: 4,
      title: "Cybersecurity & Ethical Hacking",
      description: "Training in cybersecurity fundamentals and ethical hacking tools.",
    },
    {
      id: 5,
      title: "Advanced Python for Data Analysis",
      description: "Advanced-level training on Python libraries.",
    },
    {
      id: 6,
      title: "Robotics Workshop",
      description: "Hands-on workshop covering fundamentals of robotic systems.",
    },
    {
      id: 7,
      title: "AI Builders Lab (Google for Developers)",
      description: "Completed Google-supported AI Builders Lab certification.",
    },
  ];

  const achievements = [
    { id: 1, text: "Class Topper — First Semester (Rajagiri College)" },
    { id: 2, text: "Presented research on 'AI in Cybersecurity' at International Conference" },
    { id: 3, text: "Presented 'AI-Generated Deepfakes' at National Conference" },
  ];



  // ========== RENDER ==========
  return (
    <>
      {/* SIDEBAR */}
      <aside className={`sidebar ${sidebarCollapsed ? "collapsed" : ""}`}>
        <div className="sidebar-inner" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          
          <a href="#home" className="logo" onClick={(e) => { e.preventDefault(); scrollToSection("home"); }}>
            <div className="logo-avatar">{sidebarCollapsed ? "AK" : "AK"}</div>
            <span className="logo-text">Abhay Kishore</span>
          </a>

          <nav className="sidebar-nav">
            {navSections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={`sidebar-link ${activeSection === s.id ? "active" : ""}`}
                onClick={(e) => { e.preventDefault(); scrollToSection(s.id); }}
                title={s.label}
              >
                <i className={`bi ${s.icon} sidebar-icon`}></i>
                <span className="sidebar-label">{s.label}</span>
              </a>
            ))}
          </nav>

          <div className="sidebar-cta">
            <a href="/Abhay_Kishore_CV.pdf" download className="contact-btn">
              <i className="bi bi-download"></i>
              <span className="cta-label">Resume</span>
            </a>
          </div>
        </div>
      </aside>

      {/* MAIN PAGE CONTENT */}
      <main className={`page-content ${sidebarCollapsed ? "collapsed" : ""}`}>
        
        {/* 1. HERO */}
        <section id="home" className="hero reveal active">
          <div className="hero-content">
            
            {/* LEFT SIDE: Text */}
            <div className="hero-text">
              <span style={{ color: "var(--accent)", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase", fontSize: "0.9rem" }}>
                Hello, I am
              </span>
              <h1 className="text-gradient">{personal.name}</h1>
              <h2 style={{ fontSize: "1.5rem", color: "#334155", fontWeight: 600, marginBottom: "1rem" }}>
                {personal.role}
              </h2>
              <p className="lead">{personal.summary}</p>
              
              <div style={{ display: "flex", gap: "1rem" }}>
                <a href={personal.github} target="_blank" rel="noreferrer" className="contact-btn" style={{ width: "auto", padding: "0.8rem 1.5rem" }}>
                  <i className="bi bi-github"></i> GitHub
                </a>
                <a href={personal.linkedin} target="_blank" rel="noreferrer" className="contact-btn" style={{ width: "auto", padding: "0.8rem 1.5rem", background: "#0077b5" }}>
                  <i className="bi bi-linkedin"></i> LinkedIn
                </a>
              </div>
            </div>
            <div className="hero-img-container">
              
              {/* Abstract Background Shapes */}
              <div className="hero-blob blob-1"></div>
              <div className="hero-blob blob-2"></div>
              
              {/* The Laptop Illustration */}
              <div className="laptop-container">
                <div className="laptop-screen">
                  <div className="code-window">
                    <div className="window-header">
                      <span className="dot red"></span>
                      <span className="dot yellow"></span>
                      <span className="dot green"></span>
                    </div>
                    <div className="code-lines">
                      <div className="line line-1"></div>
                      <div className="line line-2"></div>
                      <div className="line line-3"></div>
                      <div className="line line-4"></div>
                    </div>
                  </div>
                </div>
                <div className="laptop-base"></div>
              </div>

              {/* Floating Tech Badges (Orbiting elements) */}
              <div className="floating-badge badge-1">
                <i className="bi bi-database-fill"></i>
              </div>
              <div className="floating-badge badge-2">
                <i className="bi bi-shield-lock-fill"></i>
              </div>
              <div className="floating-badge badge-3">
                <i className="bi bi-code-slash"></i>
              </div>

            </div>


          </div>
        </section>

        {/* 2. ABOUT */}
      <section className="about section" id="about">
        <h2 className="section-title">About Me</h2>

        <div className="about__container container grid">
          {/* Left Side: Image */}
         <img src="/assets/AbhayKishore_Photo.jpg" alt="Abhay Kishore" className="about__img" />

          {/* Right Side: Data */}
          <div className="about__data">
            
            {/* The Text Paragraphs */}
            <div className="about__info">
              {personal.about.map((paragraph, index) => (
                <p className="about__description" key={index}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* The Stats Boxes */}
            <div className="about__boxes">
              
              {/* Box 1: Experience */}
              <div className="about__box">
                <i className="bi bi-award about__icon"></i>
                <h3 className="about__title">Experience</h3>
                <span className="about__subtitle">{personal.stats.experience}</span>
              </div>

              {/* Box 2: Completed */}
              <div className="about__box">
                <i className="bi bi-briefcase-fill about__icon"></i>
                <h3 className="about__title">Completed</h3>
                <span className="about__subtitle">{completedProjects} Projects</span>
              </div>

              {/* Box 3: Support */}
              <div className="about__box">
                <i className="bi bi-headset about__icon"></i>
                <h3 className="about__title">Online Support</h3>
                <span className="about__subtitle">{personal.stats.support}</span>
              </div>
              
            </div>

            <a href="#contact" className="button button--flex">
              Contact Me <i className="bi bi-send button__icon"></i>
            </a>
          </div>
        </div>
      </section>

        {/* 3. PROJECTS */}
        <section id="projects" className="reveal">
          <h2 className="section-title">Featured Work</h2>

          {/* Filter Buttons */}
          <div className="work-filters">
            {filters.map((item) => (
              <span 
                key={item.name}
                onClick={() => setFilter(item.name)}
                className={`work-item ${filter === item.name ? 'active-work' : ''}`}
              >
                {item.label}
              </span>
            ))}
          </div>

          {/* Project Grid */}
          <div className="grid">
            {filteredProjects.map((p) => (
              <a key={p.id} href={p.link} target="_blank" rel="noreferrer" className="project-card">
                <div className="card-thumb">
                  {p.image ? <img src={p.image} alt={p.title} /> : <div style={{width:'100%', height:'100%', background:'#cbd5e1'}}></div>}
                </div>
                <div className="card-body">
                  <h3>{p.title}</h3>
                  <p style={{ color: "#64748b", fontSize: "0.95rem" }}>{p.desc}</p>
                  <div className="tech-badges">
                    {p.tech.map((t) => <span key={t} className="tech-badge">{t}</span>)}
                  </div>
                </div>
              </a>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <p style={{textAlign: "center", color: "#94a3b8", marginTop: "2rem"}}>
              No projects found in this category yet.
            </p>
          )}
        </section>

        {/* 4. EDUCATION */}
        <section id="education" className="reveal">
          <h2 className="section-title">Education</h2>
          <div className="timeline">
            {education.map((item) => (
              <div key={item.id} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-card">
                  <span style={{ fontSize: "0.85rem", color: "var(--accent)", fontWeight: 700, textTransform: "uppercase" }}>{item.range}</span>
                  <h3 style={{ margin: "0.4rem 0 0.2rem" }}>{item.degree}</h3>
                  <h4 style={{ fontSize: "1rem", color: "#64748b", fontWeight: 500 }}>{item.institution}</h4>
                  {item.extras && <p style={{ marginTop: "0.5rem", color: "#475569" }}>{item.extras}</p>}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. EXPERIENCE */}
        <section id="work" className="reveal">
          <h2 className="section-title">Experience</h2>
          <div className="timeline">
            {workExperience.map((item) => (
              <div key={item.id} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-card">
                  <span style={{ fontSize: "0.85rem", color: "var(--accent)", fontWeight: 700, textTransform: "uppercase" }}>{item.range}</span>
                  <h3 style={{ margin: "0.4rem 0 0.2rem" }}>{item.role}</h3>
                  <h4 style={{ fontSize: "1rem", color: "#64748b", fontWeight: 500 }}>{item.company}</h4>
                  <ul style={{ marginTop: "0.8rem", paddingLeft: "1.2rem", color: "#475569" }}>
                    {item.points.map((pt, i) => <li key={i}>{pt}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. CERTIFICATIONS */}
        <section id="certifications" className="reveal">
            <h2 className="section-title" style={{marginBottom:'2rem'}}>Certifications & Workshops</h2>
            <div className="cert-grid">
              {certifications.map((c) => (
                <div key={c.id} className="cert-card">
                  <div className="cert-header">
                      <i className="bi bi-patch-check-fill text-gradient" style={{fontSize:'1.5rem', marginBottom:'0.5rem', display:'block'}}></i>
                      <div className="cert-title">{c.title}</div>
                  </div>
                  <div className="cert-desc">{c.description}</div>
                </div>
              ))}
            </div>
        </section>

        {/* 7. ACHIEVEMENTS */}
        <section id="achievements" className="reveal">
            <h2 className="section-title" style={{marginBottom:'2rem'}}>Achievements</h2>
            <div className="achievements-wrapper">
              {achievements.map((item) => (
                <div key={item.id} className="achievement-card">
                  <div className="achievement-icon">
                    <i className="bi bi-trophy-fill"></i>
                  </div>
                  <div>
                    <p style={{ margin: 0, fontWeight: 500, color: '#334155', lineHeight: '1.5' }}>
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
        </section>

        {/* 8. SKILLS (Tabbed) */}
        <section id="skills" className="reveal">
          <h2 className="section-title">My Experience</h2>
          
          <div className="skills-container">
            {/* LEFT COLUMN: The Tabs List */}
            <div className="skills-tabs">
              {personal.skills.map((category, idx) => {
                const isActive = openSkillIndex === idx;
                return (
                  <div 
                    key={idx} 
                    className={`skills-header ${isActive ? "active" : ""}`} 
                    onClick={() => setOpenSkillIndex(idx)}
                  >
                    <i className={`bi ${category.icon} skills-icon-large`}></i>
                    
                    <div className="skills-header-titles">
                      <h3 className="skills-title">{category.category}</h3>
                      <span className="skills-subtitle">
                          {isActive ? "Viewing details" : "Click to view"}
                      </span>
                    </div>

                    <i className="bi bi-chevron-right skills-arrow"></i>
                  </div>
                );
              })}
            </div>

            {/* RIGHT COLUMN: The Content for the Selected Tab */}
            <div className="skills-content-panel">
              {personal.skills[openSkillIndex] && personal.skills[openSkillIndex].items.map((skill, sIdx) => (
                <div key={sIdx} className="skill-bar-item">
                  <div className="skill-info">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="progress-bg">
                    <div 
                      className="progress-fill" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

         {/* 9. CONTACT */}
        <section id="contact" style={{ paddingBottom: "8rem" }}>
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-container">
            <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem", color: "#475569" }}>
              I am currently open for <strong>internships, entry-level roles, and freelance opportunities.</strong>
            </p>
            <a href={`mailto:${personal.email}`} className="contact-btn" style={{ margin: "0 auto", maxWidth: "200px", fontSize: "1rem" }}>
              <i className="bi bi-envelope-at"></i> Mail Me
            </a>
            <div style={{ marginTop: "1.5rem", color: "#94a3b8", fontSize: "0.9rem" }}>
              {personal.location} <br /> 
              {personal.phone}
            </div>
          </div>
        </section>

        {/* 10. FOOTER */}
        <footer className="footer">
          <div className="footer-content">
            
            {/* Left: Brand & Role */}
            <div className="footer-brand">
              <h2>{personal.name}</h2>
              <p>{personal.role}</p>
              <p style={{fontSize: '0.9rem', opacity: 0.7}}>Based in {personal.location}</p>
            </div>

            {/* Center: Navigation Links */}
            <div className="footer-links">
              <a href="#services" onClick={handleFooterServicesClick}>Services</a>
              <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection("projects"); }}>Works</a>
              <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }}>Contact</a>
            </div>

            {/* Right: Social Icons */}
            <div className="footer-socials">
              <a href={personal.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="https://wa.me/+918304966250" target="_blank" rel="noreferrer" aria-label="Instagram">
                <i className="bi bi-whatsapp"></i>
              </a>
              <a href={personal.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <i className="bi bi-github"></i>
              </a>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} {personal.name}. All Rights Reserved.</p>
          </div>
        </footer>

        {/* --- CHAT BOT UI --- */}
        {chatOpen && (
            <div className="chat-window">
                <div className="chat-header">
                    <span><i className="bi bi-robot" style={{marginRight:'8px'}}></i> Assistant</span>
                    <button className="chat-close-btn" onClick={() => setChatOpen(false)}>
                        <i className="bi bi-x"></i>
                    </button>
                </div>
                <div className="chat-body">
                    {messages.map((msg, idx) => (
                        <div key={idx} className={`message ${msg.type}`}>
                            {msg.text}
                        </div>
                    ))}
                    <div ref={chatEndRef}></div>
                </div>
                <div className="chat-options">
                    {chatOptions.map((opt, idx) => (
                        <button key={idx} className="option-btn" onClick={() => handleChatOption(opt)}>
                            {opt.label}
                        </button>
                    ))}
                </div>
            </div>
        )}

        <div className="floating-bubble" onClick={() => setChatOpen(!chatOpen)} title="Chat with me">
          {chatOpen ? <i className="bi bi-x-lg"></i> : <i className="bi bi-robot"></i>}
        </div>

      </main>
    </>
  );
}