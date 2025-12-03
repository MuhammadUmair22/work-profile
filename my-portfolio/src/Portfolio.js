import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Download, Mail, Phone, MapPin, Github, Linkedin, MessageCircleMore, ExternalLink, Menu, X } from 'lucide-react';
import "./Portfolio.css";
import emailjs from '@emailjs/browser';
import profileImage from './assets/profile.jpeg';

// import tadabbur projects images
import tadabbur1 from './assets/Tadabbur AI/1.jpeg';
import tadabbur2 from './assets/Tadabbur AI/2.jpeg';
import tadabbur3 from './assets/Tadabbur AI/3.jpeg';

// import theseus finsync images
import finsync1 from './assets/Theseus Finsync/1.png';
import finsync2 from './assets/Theseus Finsync/2.png';
import finsync3 from './assets/Theseus Finsync/3.png';

// import ai auto interviewer images
import aiAuto1 from './assets/Auto Interviewer/1.png';
import aiAuto2 from './assets/Auto Interviewer/2.png';
import aiAuto3 from './assets/Auto Interviewer/3.png';
import aiAuto4 from './assets/Auto Interviewer/4.png';
import aiAuto5 from './assets/Auto Interviewer/5.png';
import aiAuto6 from './assets/Auto Interviewer/6.png';
import aiAuto7 from './assets/Auto Interviewer/7.png';

// import benjitron images
import benjitron1 from './assets/Benjitron-9000/1.png';
import benjitron2 from './assets/Benjitron-9000/2.png';
import benjitron3 from './assets/Benjitron-9000/3.png';

// import veriqs images
import veriqs1 from './assets/Veriqs/1.png';
import veriqs2 from './assets/Veriqs/2.png';
import veriqs3 from './assets/Veriqs/3.png';
import veriqs4 from './assets/Veriqs/4.png';
import veriqs5 from './assets/Veriqs/5.png';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showThankYouModal, setShowThankYouModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Refs for scroll animations
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  // Sample project data with multiple images
  const projects = [
    {
      id: 1,
      title: "Tadabbur AI",
      description:
        "A cross-platform mobile application that curates Quranic Ayats based on user mood, offering personalized spiritual content with interactive features and user preferences.",
      images: [tadabbur1, tadabbur2, tadabbur3],
      checklist: [
        "User authentication with PostgreSQL",
        "Quranic Ayat data engineering",
        "Azure AI Search integration",
        "Intuitive React Native UI",
        "Play Store deployment"
      ],
      features: [
        "Secure login/signup",
        "Audio and text-based mood input",
        "AI-curated Quranic Ayats based on mood",
        "Reels-style scrolling of Ayats",
        "Playback controls (pause/resume)",
        "Favorites management",
        "Select from 12 reciters"
      ],
      technologies: [
        "React Native",
        "FastAPI",
        "PostgreSQL",
        "OpenAI",
        "Azure AI Search"
      ],
      liveLink: "https://example.com",
      githubLink: "https://github.com/example"
    },
    {
      id: 2,
      title: "AI Auto Interviewer",
      description:
        "A full-stack web platform that automates candidate interviews using AI, providing real-time evaluation, scoring, and feedback with advanced admin and user dashboards.",
      images: [aiAuto1, aiAuto2, aiAuto3, aiAuto4, aiAuto5, aiAuto6, aiAuto7],
      checklist: [
        "User authentication via Azure B2C",
        "SSO integration with Azure AD",
        "GPT-4o integration for interviews",
        "Advanced prompt engineering",
        "Interactive React-based UI",
        "Robust admin panel",
        "Multi-language support",
        "Asynchronous task handling with Celery/Redis"
      ],
      features: [
        "Google/Outlook login",
        "Audio/video interview formats",
        "Candidate face recognition",
        "AI-based scoring and feedback",
        "Multi-language interviews (e.g., Malay, English)",
        "Admin dashboard with candidate management",
        "Candidate profile update requests",
        "Excel export of candidate data",
        "Dynamic follow-up questions",
        "Interview retry mechanism",
        "Detailed dashboards for users and admins"
      ],
      technologies: [
        "React",
        "FastAPI",
        "PostgreSQL",
        "OpenAI",
        "Azure B2C",
        "Celery"
      ],
      liveLink: "https://example.com",
      githubLink: "https://github.com/example"
    },
    {
      id: 3,
      title: "Finsync AI",
      description:
        "An AI-powered platform that recommends optimal global banks based on user-submitted preferences, featuring SharePoint-integrated data filters, contextual retrieval, and natural language chat capabilities.",
      images: [finsync1, finsync2, finsync3],
      checklist: [
        "Excel-based data integration via SharePoint",
        "Dynamic filtering based on user input",
        "GPT-4o integration for intelligent recommendations",
        "Retrieval-Augmented Generation (RAG) pipeline for contextual insights",
        "Interactive chatbot interface with threaded memory",
        "Professional-grade UI and data visualization"
      ],
      features: [
        "Smart questionnaire for bank recommendations",
        "Detailed results with multi-criteria bank scoring",
        "Categorization of matched and mismatched banks",
        "Natural language chatbot powered by RAG and embeddings",
        "Thread-based chat history management with context recall"
      ],
      technologies: [
        "React",
        "FastAPI",
        "Python",
        "PostgreSQL",
        "OpenAI",
        "LangChain",
        "SharePoint API",
        "RAG Pipeline",
        "Chatbot"
      ],
      liveLink: "https://example.com",
      githubLink: "https://github.com/example"
    },
    {
      id: 4,
      title: "Benjitron-9000",
      description:
        "Benjitron-9000 is an AI-powered automation and communication platform built for public adjusting firms. It unifies Trello, Google Workspace, Telegram, and voice systems to intelligently manage claims, automate outreach, and provide natural-language control over firm operations. Featuring GPT-4o intelligence, LangGraph workflows, and Azure-triggered automations, Benjitron ensures seamless claim tracking, document handling, and compliance with human-in-the-loop oversight.",
      images: [benjitron1, benjitron2, benjitron3],
      checklist: [
        "Telegram-based conversational interface with voice and text (via Whisper)",
        "LangChain + LangGraph orchestration for contextual claim workflows",
        "Azure Functions for event-driven data ingestion and automation triggers",
        "Trello, Gmail, Google Sheets, and Calendar integrations",
        "Dynamic appraisal and mediation readiness logic",
        "Automated voice, SMS, and email communication via Twilio and Vapi",
        "AI-generated invoices and litigation update requests",
        "Human-in-the-loop approval system for sensitive actions",
        "PGVector-powered semantic search and retrieval from structured data",
        "Secure audit logging and performance analytics dashboard"
      ],
      features: [
        "Conversational command center on Telegram for claim insights and actions",
        "AI-assisted drafting of client emails, follow-ups, and reminders",
        "Outbound AI voice calls with live transfer, voicemail fallback, and logging",
        "Event-driven automation via Azure Functions for data synchronization",
        "Embeddings-based retrieval for claim context and communication history",
        "Smart appraisal and mediation readiness detection across Trello + Gmail data",
        "Invoice generation and litigation update automation",
        "Human review and confirmation for settlement and invoice actions",
        "Team productivity tracking and task-based time estimation",
        "Secure audit logs with explainable AI interactions"
      ],
      technologies: [
        "React",
        "FastAPI",
        "Python",
        "PostgreSQL",
        "PGVector",
        "LangChain",
        "LangGraph",
        "OpenAI (GPT-4o, Embeddings, Whisper)",
        "Twilio",
        "Vapi",
        "Azure Functions",
        "Telegram Bot API",
        "Google Workspace APIs",
        "Trello API"
      ],
      liveLink: "https://example.com",
      githubLink: "https://github.com/example"
    },
    {
      id: 5,
      title: "Veriqs",
      description:
        "Veriqs is an AI-powered due diligence platform designed for comprehensive background checks and risk analysis in Brazil and Mexico. It aggregates public data from court records and judicial databases, using AI-driven analysis to deliver detailed risk assessments. The platform helps users make informed decisions about personal interactions while ensuring full compliance with Brazilian data protection laws (LGPD). Features include multi-parameter search, instant risk classification, detailed PDF reports, and a complete credit/subscription payment system.",
      images: [veriqs1, veriqs2, veriqs3, veriqs4, veriqs5],
      checklist: [
        "Multi-parameter search by CPF, full name, or phone number",
        "AI-powered instant risk classification (Low/Medium/High)",
        "Comprehensive PDF report generation with criminal records and judicial data",
        "Google OAuth 2.0 authentication with JWT session management",
        "Stripe integration for credit purchases and unlimited subscriptions",
        "Credit-based wallet system for search transactions",
        "Admin dashboard for user management and payment monitoring",
        "Multi-language support (English, Spanish, Portuguese)",
        "IP-based geolocation tracking for audit purposes",
        "Full LGPD compliance with Brazilian data protection laws"
      ],
      features: [
        "Instant background verification with AI-driven risk assessment",
        "Detailed judicial involvement and court case analysis",
        "Search history tracking with geolocation data",
        "Credit wallet management for pay-per-search model",
        "Unlimited subscription option for frequent users",
        "Admin controls for user banning, refunds, and role management",
        "Transaction history with Stripe payment tracking",
        "Mobile-responsive design with intuitive navigation",
        "Localized safety tips for Brazil and Mexico regions",
        "Comprehensive audit logging and compliance reporting"
      ],
      technologies: [
        "React 19",
        "TypeScript",
        "Vite",
        "FastAPI",
        "Python",
        "PostgreSQL",
        "SQLAlchemy",
        "SQLModel",
        "Stripe",
        "Google OAuth 2.0",
        "JWT",
        "i18next",
        "ReportLab",
        "Axios"
      ],
      liveLink: "https://example.com",
      githubLink: "https://github.com/example"
    }
  ];

  const skills = [
    { name: "React", level: 90 },
    { name: "React-Native", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "Python", level: 75 },
    { name: "FastAPI", level: 80 },
    { name: "Golang", level: 80 },
    { name: "OpenAI", level: 80 },
    { name: "PostgreSQL", level: 90 },
    { name: "Vector Database", level: 90 },
    { name: "Langraph Workflows", level: 90 },
    { name: "RAG Workflows", level: 90 },
  ];

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const projectsGridRef = useRef(null);

  // Add these functions for carousel navigation
  const scrollProjects = (direction) => {
    const container = projectsGridRef.current;
    if (container) {
      const scrollAmount = 370; // card width + gap
      const newScrollLeft = direction === 'left'
        ? container.scrollLeft - scrollAmount
        : container.scrollLeft + scrollAmount;

      container.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  const checkScrollButtons = () => {
    const container = projectsGridRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft < container.scrollWidth - container.clientWidth
      );
    }
  };

  // Add useEffect to check scroll buttons
  useEffect(() => {
    const container = projectsGridRef.current;
    if (container) {
      checkScrollButtons();
      container.addEventListener('scroll', checkScrollButtons);
      window.addEventListener('resize', checkScrollButtons);

      return () => {
        container.removeEventListener('scroll', checkScrollButtons);
        window.removeEventListener('resize', checkScrollButtons);
      };
    }
  }, [projects]);

  // Initialize EmailJS
  useEffect(() => {
    // Initialize EmailJS with your public key
    if (window.emailjs) {
      window.emailjs.init("FU4zv71zDwIR2cP2z"); // Replace with your EmailJS public key
    }
  }, []);

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  // Handle project image navigation
  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Please fill in all fields');
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_bo3heh9",
        "template_sn4t2xm",
        {
          name: formData.name,
          email: formData.email,
          title: formData.subject,
          message: formData.message,
        },
        "FU4zv71zDwIR2cP2z"
      );

      setFormData({ name: '', email: '', subject: '', message: '' });
      setShowThankYouModal(true);
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Sorry, there was an error sending your message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Download resume function
  const downloadResume = () => {
    // Replace with your actual resume URL
    const resumeUrl = 'https://example.com/your-resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'John_Doe_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Scroll effect for navbar and animations
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Update scrolled state for navbar
      setScrolled(scrollPosition > 50);

      // Handle section active states
      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'contact'];
      const scrollPos = scrollPosition + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPos >= offsetTop && scrollPos < offsetTop + height) {
            setActiveSection(section);
          }
        }
      });

      // Animate sections on scroll with dynamic staggered children
      const animateOnScroll = (ref, className, childSelector) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight * 0.8;

          if (isVisible && !ref.current.classList.contains(className)) {
            ref.current.classList.add(className);

            // Apply staggered animation to children
            if (childSelector) {
              const children = ref.current.querySelectorAll(childSelector);
              children.forEach((child, index) => {
                setTimeout(() => {
                  child.classList.add('fade-in');
                  child.style.animationDelay = `${(index % 4) * 0.1}s`;
                }, 0);
              });
            }
          }
        }
      };

      animateOnScroll(aboutRef, 'animate-in', '.stat');
      animateOnScroll(experienceRef, 'animate-in', '.experience-item');
      animateOnScroll(skillsRef, 'animate-in', '.skill-item');
      animateOnScroll(projectsRef, 'animate-in', '.project-card');
      animateOnScroll(contactRef, 'animate-in');
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-logo">
            <span>Portfolio</span>
          </div>

          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            {['home', 'about', 'experience', 'skills', 'projects', 'contact'].map((item) => (
              <button
                key={item}
                className={`nav-link ${activeSection === item ? 'active' : ''}`}
                onClick={() => scrollToSection(item)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>

          <div className="nav-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Hi, I'm <span className="highlight">Muhammad Umair</span>
              </h1>
              <h2 className="hero-subtitle">Full Stack Software Engineer</h2>
              <p className="hero-description">
                🚀 I build AI-powered, scalable software solutions with a strong focus on performance and user experience. With extensive experience across product and service domains, I specialize in end-to-end development using Python, Golang, React, and Microsoft Azure. Passionate about AI, clean architecture, and solving real-world problems.
              </p>
              <div className="hero-buttons">
                <button className="btn btn-primary" onClick={() => scrollToSection('projects')}>
                  View My Work
                </button>
                <button className="btn btn-outline" onClick={downloadResume}>
                  <Download size={20} />
                  Download Resume
                </button>
              </div>
              <div className="social-links">
                <a href="https://github.com/MuhammadUmair22" target="_blank" rel="noopener noreferrer">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/muhammad-umair0/" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://wa.me/923214634016?text=Hi%2C%20I%20visited%20your%20portfolio%20and%20wanted%20to%20connect!"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircleMore size={24} />
                </a>
              </div>
            </div>
            <div className="hero-image">
              <div className="image-container">
                <img
                  src={profileImage}
                  alt="John Doe"
                />
                <div className="image-glow"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about" ref={aboutRef}>
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm a passionate Software Engineer with over 2 years of hands-on experience in building scalable,
                AI-powered applications across both product and service-based industries.
                I specialize in end-to-end development using technologies like Python (FastAPI),
                React, and Microsoft Azure. From architecting cloud-based solutions to crafting user-friendly interfaces,
                I love solving real-world problems with clean, efficient code.
                I thrive in fast-paced environments, learn quickly, and take full ownership of the work I do—always with a focus on innovation and impact.
              </p>
              <p>
                My journey started with a Computer Science degree, and I've been constantly learning
                and adapting to new technologies. I believe in writing clean, maintainable code and
                creating user-centered applications.
              </p>
              <div className="about-stats">
                <div className="stat">
                  <span className="stat-number">5+</span>
                  <span className="stat-label">Projects Completed</span>
                </div>
                <div className="stat">
                  <span className="stat-number">2.5+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="stat">
                  <span className="stat-number">6+</span>
                  <span className="stat-label">Happy Clients</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience" ref={experienceRef}>
        <div className="container">
          <h2 className="section-title">Professional Experience</h2>
          <div className="experience-timeline">
            <div className="experience-item">
              <div className="experience-header">
                <h3 className="experience-title">Software Engineer</h3>
                <span className="experience-company">Mcloud (Product-Based Company)</span>
                <span className="experience-duration">Full-time</span>
              </div>
              <div className="experience-content">
                <h4 className="experience-category">Backend Development (Golang)</h4>
                <ul className="experience-details">
                  <li>Architected modular Golang packages to enhance code maintainability and reusability</li>
                  <li>Optimized database operations by integrating pgx and kpgx connection pools with auto-unmarshalling, reducing runtime and memory usage</li>
                  <li>Implemented microservice architecture with a robust file server for efficient local storage and retrieval</li>
                  <li>Developed an AWS S3-like service using CephFS integration for production-grade scalable storage</li>
                  <li>Built internal SDK to streamline interactions with private APIs, improving developer productivity</li>
                  <li>Designed and optimized PostgreSQL schemas, wrote efficient queries, and managed complex migrations and transactions</li>
                  <li>Contributed to IAM system development, implementing user invitation features and enhancing security</li>
                  <li>Implemented comprehensive audit log functionality across multiple Mcloud products for accountability and compliance</li>
                  <li>Developed robust notification system to enhance user engagement and real-time communication</li>
                  <li>Developed RESTful APIs ensuring high performance, low latency, and handling of edge cases for robustness</li>
                </ul>

                <h4 className="experience-category">Full Stack Development (HRMS System)</h4>
                <ul className="experience-details">
                  <li>Built HRMS system from scratch as part of a collaborative team effort</li>
                  <li>Designed and implemented attendance module schema ensuring data integrity and efficient querying</li>
                  <li>Developed filtration system for the entire Mcloud platform</li>
                  <li>Created generic and reusable React/TypeScript components improving code maintainability</li>
                  <li>Engaged in bug fixing, problem-solving, and manual testing for quality assurance</li>
                  <li>Collaborated with cross-functional teams using Git/GitHub maintaining high code quality standards</li>
                </ul>

                <h4 className="experience-category">Key Technologies</h4>
                <div className="experience-technologies">
                  <span className="tech-tag">Golang</span>
                  <span className="tech-tag">PostgreSQL</span>
                  <span className="tech-tag">pgx/kpgx</span>
                  <span className="tech-tag">CephFS</span>
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">TypeScript</span>
                  <span className="tech-tag">Microservices</span>
                  <span className="tech-tag">RESTful APIs</span>
                  <span className="tech-tag">IAM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills" ref={skillsRef}>
        <div className="container">
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects" ref={projectsRef}>
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-container">
            <button
              className="carousel-nav-btn prev"
              onClick={() => scrollProjects('left')}
              disabled={!canScrollLeft}
            >
              <ChevronLeft size={24} />
            </button>

            <div className="projects-grid" ref={projectsGridRef}>
              {projects.map((project) => (
                <div key={project.id} className="project-card">
                  <div className="project-image">
                    <img src={project.images[0]} alt={project.title} />
                    <div className="project-overlay">
                      <button
                        className="btn btn-primary"
                        onClick={() => {
                          setSelectedProject(project);
                          setCurrentImageIndex(0);
                        }}
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="project-technologies">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                    <div className="project-links">
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                        <Github size={16} />
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              className="carousel-nav-btn next"
              onClick={() => scrollProjects('right')}
              disabled={!canScrollRight}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact" ref={contactRef}>
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Let's work together!</h3>
              <p>I'm always interested in new opportunities and exciting projects.</p>
              <div className="contact-details">
                <div className="contact-item">
                  <Mail size={20} />
                  <span>umairashfaq2015@gmail.com</span>
                </div>
                <div className="contact-item">
                  <Phone size={20} />
                  <span>+92 321 4634016</span>
                </div>
                <div className="contact-item">
                  <MapPin size={20} />
                  <span>Lahore, Pakistan</span>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              <button
                onClick={handleSubmit}
                className={`btn btn-primary ${isSubmitting ? 'submit-button-loading' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setSelectedProject(null)}
            >
              <X size={24} />
            </button>

            <div className="modal-header">
              <h3>{selectedProject.title}</h3>
            </div>

            <div className="image-carousel">
              <button className="carousel-btn prev" onClick={prevImage}>
                <ChevronLeft size={24} />
              </button>

              <div className="carousel-image">
                <a
                  href={selectedProject.images[currentImageIndex]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={selectedProject.images[currentImageIndex]}
                    alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                  />
                </a>
              </div>

              <button className="carousel-btn next" onClick={nextImage}>
                <ChevronRight size={24} />
              </button>

              <div className="carousel-dots">
                {selectedProject.images.map((_, index) => (
                  <button
                    key={index}
                    className={`dot ${index === currentImageIndex ? 'active' : ''}`}
                    onClick={() => setCurrentImageIndex(index)}
                  ></button>
                ))}
              </div>
            </div>

            <div className="modal-body">
              <p>{selectedProject.description}</p>
              <div>
                <div className="features-title">Overview</div>
                <ul className='project-checklist'>
                  {selectedProject.checklist.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="features-title">Features</div>
                <ul className="project-features">
                  {selectedProject.features.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              {/* <div className="project-technologies">
                {selectedProject.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div> */}
              <div className="project-links">
                <a href={selectedProject.liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  <ExternalLink size={16} />
                  Live Demo
                </a>
                <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                  <Github size={16} />
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Thank You Modal */}
      {showThankYouModal && (
        <div className="thank-you-modal-overlay" onClick={() => setShowThankYouModal(false)}>
          <div className="thank-you-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="thank-you-modal-close"
              onClick={() => setShowThankYouModal(false)}
            >
              <X size={18} />
            </button>

            <div className="thank-you-icon">
              <Mail />
            </div>

            <h3 className="thank-you-title">Thank You!</h3>

            <p className="thank-you-message">
              Your message has been sent successfully. I'll get back to you as soon as possible!
            </p>

            <button
              className="thank-you-button"
              onClick={() => setShowThankYouModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Muhammad Umair. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
};

export default Portfolio;