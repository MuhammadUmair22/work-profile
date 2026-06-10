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

// import bde images
import bde1 from './assets/BDE/1.png';
import bde2 from './assets/BDE/2.png';
import bde3 from './assets/BDE/3.png';
import bde4 from './assets/BDE/4.png';
import bde5 from './assets/BDE/5.png';
import bde6 from './assets/BDE/6.png';

// import ovie images
import ovie1 from './assets/Ovie/1.png';
import ovie2 from './assets/Ovie/2.png';
import ovie3 from './assets/Ovie/3.png';
import ovie4 from './assets/Ovie/4.png';
import ovie5 from './assets/Ovie/5.png';

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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
    },
    {
      id: 6,
      title: "BDE (Business Data Extraction)",
      description:
        "BDE is an AI-powered document intelligence platform designed for business due diligence and acquisition analysis. It processes multiple document types, connects to QuickBooks for financial data, and uses a sophisticated 5-stage scoring pipeline to evaluate companies across 8 pillars. Features include RAG-based chat, real-time WebSocket updates, multi-tenant architecture, and comprehensive acquisition recommendations with valuation guidance.",
      images: [bde1, bde2, bde3, bde4, bde5, bde6],
      checklist: [
        "Multi-format document processing (PDF, DOCX, XLSX, PPTX, audio, images)",
        "Azure OpenAI integration (GPT-4o-mini, Embeddings, Whisper)",
        "5-stage BDE scoring pipeline with 8 evaluation pillars",
        "QuickBooks OAuth integration for financial data sync",
        "RAG-powered chat with semantic search (pgvector)",
        "Real-time WebSocket progress tracking via Redis pub/sub",
        "Multi-tenant architecture with RBAC",
        "Azure Functions for async document processing",
        "Deterministic scoring algorithm with evidence traceability",
        "Automated acquisition recommendations with valuation range"
      ],
      features: [
        "Upload and process PDF, Word, Excel, PowerPoint, images, and audio files",
        "AI-powered document chunking with embedding generation",
        "RAG chat interface with source citations",
        "QuickBooks data synchronization and ingestion",
        "8-pillar company evaluation (Financial, GTM, Customer, Product, Ops, Leadership, Ecosystem, Service/Software)",
        "Red/Yellow/Green flag detection with severity ratings",
        "Overall BDE score (0-100) with valuation multiple guidance",
        "Executive acquisition recommendation with 100-day plan",
        "Real-time scoring progress via WebSocket",
        "Multi-tenant isolation with role-based access control",
        "Customizable prompt templates",
        "Complete audit trail with evidence chunk linking"
      ],
      technologies: [
        "React 19",
        "TypeScript",
        "Vite",
        "FastAPI",
        "Python",
        "PostgreSQL",
        "pgvector",
        "SQLModel",
        "Azure OpenAI (GPT-4o-mini, Embeddings, Whisper)",
        "Azure Blob Storage",
        "Azure Queue Storage",
        "Azure Functions",
        "Redis",
        "WebSockets",
        "Azure AD (MSAL)",
        "QuickBooks API",
        "Alembic"
      ]
    },
    {
      id: 7,
      title: "Ovie AI Platform",
      description:
        "Ovie is an AI-powered business intelligence platform that combines a conversational assistant, proactive daily reports via Microsoft Teams, and multi-connector data integration (GA4, GSC, CrUX, Azure DevOps). Built on LangGraph for intelligent routing, it acts as an Optimizely specialist and co-pilot across analytics, SEO, performance, and DevOps — guiding teams through five-level troubleshooting, evidence gathering, correlation analysis, and ticket creation with full multi-tenant isolation and GDPR-compliant infrastructure.",
      images: [ovie1, ovie2, ovie3, ovie4, ovie5],
      checklist: [
        "LangGraph-based intelligent routing and multi-node orchestration",
        "Conversational AI assistant with topic management and back-references",
        "Proactive daily reports delivered via Microsoft Teams",
        "Multi-connector integration (GA4, GSC, CrUX, Azure DevOps)",
        "Dual-corpus RAG retrieval with pgvector semantic search",
        "Five-level troubleshooting pipeline with evidence correlation",
        "Three-gate validation architecture (static, single-turn, multi-turn)",
        "Multi-tenant architecture with organization-scoped RBAC",
        "DLP, audit logging, and GDPR-compliant data residency (EU-West)",
        "LangSmith observability for traces, evaluations, and experiments"
      ],
      features: [
        "Conversational assistant with natural-language intent classification",
        "Proactive Teams reports with daily and weekly highlights",
        "Optimizely expert mode with direct admin guidance",
        "Co-pilot mode for analytics, SEO, performance, and DevOps",
        "Automated incident response workflow with ticket creation",
        "Evidence-based troubleshooting with root-cause correlation",
        "Dynamic prompt assembly based on configured connectors",
        "Conversation memory with topic boundary detection",
        "Date-range clarification for ambiguous time comparisons",
        "Data validation with holiday detection and anomaly flagging",
        "Admin dashboard for connectors, users, and organization config",
        "Real-time chat with streaming responses and tool execution traces"
      ],
      technologies: [
        "Next.js 15",
        "React 19",
        "TypeScript",
        "Tailwind CSS",
        "FastAPI",
        "Python",
        "LangGraph",
        "LangChain",
        "PostgreSQL",
        "pgvector",
        "Redis",
        "Vertex AI (Gemini 2.0 Flash)",
        "Google Cloud Run",
        "Google Cloud SQL",
        "Alembic",
        "Microsoft Teams API",
        "Azure DevOps API",
        "Google Analytics 4 API",
        "Google Search Console API",
        "Chrome UX Report API",
        "LangSmith"
      ]
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
    const resumeUrl = 'https://rxresu.me/umairashfaq2015/muhammad-umair-senior-software-engineer';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Muhammad_Umair_Senior_Software_Engineer_Resume.pdf';
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
              <h2 className="hero-subtitle">Full Stack Senior Software Engineer</h2>
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
                I'm a passionate Senior Software Engineer with 3+ years of hands-on experience in building scalable,
                AI-powered applications across both product and service-based industries.
                I specialize in end-to-end development using technologies like Python (FastAPI), Golang,
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
                  <span className="stat-number">7+</span>
                  <span className="stat-label">Projects Completed</span>
                </div>
                <div className="stat">
                  <span className="stat-number">3.0+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="stat">
                  <span className="stat-number">15+</span>
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
                <h3 className="experience-title">Software Consultant</h3>
                <span className="experience-company">10 Pearls (Service-Based Company)</span>
                <span className="experience-duration">May 2026 - Present</span>
              </div>
              <div className="experience-content">
                <h4 className="experience-category">Backend Development (Golang Microservices)</h4>
                <ul className="experience-details">
                  <li>Architected an OpenAPI-first Go microservice (Gin, Bun ORM, PostgreSQL) with 45 REST endpoints across 7 domains, using oapi-codegen to generate type-safe server stubs, request/response types, and a Go client SDK consumed by downstream services</li>
                  <li>Built a vendor-integration pipeline with webhook callbacks (GoTranscript), JSON-schema validation, transcript transformation, and a polling background worker that streams files to Google Cloud Storage and syncs records across services</li>
                  <li>Designed a versioned, JSONB-backed scoring system over 14 domain models, managed via incremental SQL migrations and tuned PostgreSQL connection pooling for service-to-service workloads</li>
                  <li>Implemented comprehensive test coverage with 88 unit tests running against a real PostgreSQL database, plus schema-validation fixtures covering valid and invalid transcript payloads</li>
                </ul>

                <h4 className="experience-category">Key Technologies</h4>
                <div className="experience-technologies">
                  <span className="tech-tag">Golang</span>
                  <span className="tech-tag">Gin</span>
                  <span className="tech-tag">Bun ORM</span>
                  <span className="tech-tag">PostgreSQL</span>
                  <span className="tech-tag">oapi-codegen</span>
                  <span className="tech-tag">OpenAPI</span>
                  <span className="tech-tag">Google Cloud Storage</span>
                  <span className="tech-tag">JSONB</span>
                  <span className="tech-tag">Microservices</span>
                </div>
              </div>
            </div>

            <div className="experience-item">
              <div className="experience-header">
                <h3 className="experience-title">Software Engineer</h3>
                <span className="experience-company">Kcube.ai (Service-Based Company)</span>
                <span className="experience-duration">January 2025 - Present</span>
              </div>
              <div className="experience-content">
                <h4 className="experience-category">AI & Full Stack Development</h4>
                <ul className="experience-details">
                  <li>Built AI-powered solutions for global clients using LLM integrations, RAG pipelines, LangChain, LangGraph workflow orchestration, and multi-stage scoring pipelines with deterministic evaluation algorithms</li>
                  <li>Developed full-stack applications with React, React Native, FastAPI, and PostgreSQL with PGVector for semantic search, multi-tenant architecture, and real-time WebSocket communication</li>
                  <li>Integrated OpenAI APIs (GPT-4o, Embeddings, Whisper) for intelligent automation, interviews, content curation, document analysis, metric extraction, and acquisition recommendations</li>
                  <li>Implemented Azure services (B2C, AD, Functions, AI Search, Blob Storage, Queue Storage) for authentication, SSO, event-driven architecture, and async document processing</li>
                  <li>Built payment systems with Stripe, voice/SMS with Twilio/Vapi, QuickBooks financial data integration, and various third-party API integrations</li>
                </ul>

                <h4 className="experience-category">Key Technologies</h4>
                <div className="experience-technologies">
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">React Native</span>
                  <span className="tech-tag">FastAPI</span>
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">PostgreSQL</span>
                  <span className="tech-tag">PGVector</span>
                  <span className="tech-tag">LangChain</span>
                  <span className="tech-tag">LangGraph</span>
                  <span className="tech-tag">OpenAI (GPT-4o, Embeddings, Whisper)</span>
                  <span className="tech-tag">Azure</span>
                  <span className="tech-tag">Stripe</span>
                  <span className="tech-tag">Twilio</span>
                  <span className="tech-tag">Vapi</span>
                  <span className="tech-tag">WebSockets</span>
                </div>
              </div>
            </div>

            <div className="experience-item">
              <div className="experience-header">
                <h3 className="experience-title">Software Engineer I</h3>
                <span className="experience-company">Mslm (Product-Based Company)</span>
                <span className="experience-duration">August 2023 - December 2024</span>
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
                  <li>Implemented comprehensive audit log functionality across multiple Mslm products for accountability and compliance</li>
                  <li>Developed robust notification system to enhance user engagement and real-time communication</li>
                  <li>Developed RESTful APIs ensuring high performance, low latency, and handling of edge cases for robustness</li>
                </ul>

                <h4 className="experience-category">Full Stack Development (HRMS System)</h4>
                <ul className="experience-details">
                  <li>Built HRMS system from scratch as part of a collaborative team effort</li>
                  <li>Designed and implemented attendance module schema ensuring data integrity and efficient querying</li>
                  <li>Developed filtration system for the entire Mslm platform</li>
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
                    {(project.liveLink || project.githubLink) && (
                      <div className="project-links">
                        {project.liveLink && (
                          <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
                            <ExternalLink size={16} />
                            Live Demo
                          </a>
                        )}
                        {project.githubLink && (
                          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                            <Github size={16} />
                            Code
                          </a>
                        )}
                      </div>
                    )}
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
              {(selectedProject.liveLink || selectedProject.githubLink) && (
                <div className="project-links">
                  {selectedProject.liveLink && (
                    <a href={selectedProject.liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                  {selectedProject.githubLink && (
                    <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                      <Github size={16} />
                      View Code
                    </a>
                  )}
                </div>
              )}
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
          <p>&copy; 2026 Muhammad Umair. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
};

export default Portfolio;