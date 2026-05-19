import {
  ArrowRight,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  Database,
  Download,
  ExternalLink,
  Github,
  Globe2,
  Mail,
  Server,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

const profile = {
  name: "Omar Rasheed",
  title: "Python Automation & Backend Developer",
  subtitle:
    "FastAPI • AI Integrations • Databases • Web Scraping • n8n • Docker • PostgreSQL",
  summary:
    "I build backend systems, automation pipelines, API integrations, database workflows, and AI-powered tools for freelance clients, remote teams, and production-focused businesses. I aim to deliver reliable, well-tested, maintainable solutions on time, with clear communication from requirement gathering to development, testing, delivery, and support. I also have hands-on experience with Hetzner VPS deployment, Docker-based services, Caddy reverse proxy setup, domain routing, server logs, and deployment troubleshooting.",
  email: "Pythondev958@gmail.com",
  github: "https://github.com/pythondev958",
  linkedin: "https://www.linkedin.com/in/omar-rasheed-4a9858213/",
};

const featuredProjects = [
  {
    title: "AI-Powered Medical Call Analysis System",
    badge: "AI Backend",
    description:
      "Designed and worked on an AI-powered transcript intelligence system for call analysis, using local LLM workflows, structured insight extraction, sentiment classification, and asynchronous background processing.",
    impact:
      "Focused on reducing manual transcript review, improving analysis reliability, and strengthening backend processing flow.",
    stack: ["Python", "Ollama", "LangChain", "Celery", "Redis", "MongoDB", "SQL"],
    links: [],
  },
  {
    title: "Logistics Load Management Automation System",
    badge: "Automation",
    description:
      "Built and supported automation workflows for logistics load management using Selenium-based browser automation, n8n orchestration, backend APIs, and cloud deployment practices.",
    impact:
      "Automated repetitive operational workflows and improved processing reliability for logistics tasks.",
    stack: ["Selenium", "n8n", "FastAPI", "Xano", "APIs", "Hetzner"],
    links: [],
  },
  {
    title: "Realtime Video Object Detection",
    badge: "Computer Vision",
    description:
      "Built a real-time multi-object detection system using YOLO and OpenCV to process live video streams and prerecorded videos for dynamic object detection.",
    impact:
      "Demonstrates applied machine learning, computer vision, Python scripting, and real-time processing fundamentals.",
    stack: ["Python", "OpenCV", "YOLO", "Machine Learning"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/pythondev958/Realtime_Video_Object_Detection",
      },
    ],
  },
  {
    title: "Audio Processing Backend Debug Lab",
    badge: "Upcoming Lab",
    description:
      "A safe backend demo inspired by production audio-call processing architecture: ZIP intake, MongoDB job queue, watcher.py runner, Celery/Redis stages, fake transcription, analysis, upload flow, statuses, and Postman testing.",
    impact:
      "Designed to demonstrate backend debugging, queue-based processing, batch logic, domain prioritization, and production-style system thinking without exposing private company code.",
    stack: ["FastAPI", "Celery", "Redis", "MongoDB", "Ollama", "Postman"],
    links: [],
  },
];

const professionalProjects = [
  {
    title: "Hetzner VPS Deployment & Troubleshooting",
    description:
      "Worked on deploying and troubleshooting backend/frontend services on Hetzner VPS, including Docker-based services, Caddy reverse proxy configuration, domain routing, container networking, server logs, and production availability checks.",
    stack: ["Hetzner", "Docker", "Caddy", "Linux", "Reverse Proxy", "DNS", "Logs"],
  },
  {
    title: "Database & ETL Workflows",
    description:
      "Worked on SQL Server, Oracle, PostgreSQL and Snowflake-related data workflows, ETL scripts, replication support, indexing strategies, and reporting pipelines.",
    stack: ["SQL Server", "Oracle", "PostgreSQL", "Snowflake", "ETL", "Power BI"],
  },
  {
    title: "FastAPI Webhook Automation",
    description:
      "Engineered backend automation pipelines for eCommerce synchronization, inventory/order processing, status tracking, and error handling.",
    stack: ["FastAPI", "Python", "Webhooks", "REST APIs", "Automation"],
  },
  {
    title: "Selenium & n8n Workflow Automation",
    description:
      "Created browser automation and workflow orchestration solutions to reduce manual work and connect APIs, data flows, and operational tasks.",
    stack: ["Selenium", "n8n", "Python", "Web Scraping", "API Integration"],
  },
  {
    title: "SQL Performance & Reporting",
    description:
      "Improved database query performance using indexing, optimized SQL, replication monitoring, automated jobs, and Power BI dashboards.",
    stack: ["T-SQL", "PL/SQL", "Indexing", "Replication", "Power BI"],
  },
];

const skills = [
  {
    title: "Backend & APIs",
    icon: Server,
    items: [
      "Python",
      "FastAPI",
      "Django",
      "Flask",
      "REST APIs",
      "Webhooks",
      "API Security",
    ],
  },
  {
    title: "AI & LLM Systems",
    icon: BrainCircuit,
    items: [
      "Ollama",
      "LangChain",
      "OpenAI API",
      "Prompt Engineering",
      "NLP Pipelines",
      "Transcript Analysis",
    ],
  },
  {
    title: "Automation",
    icon: Bot,
    items: [
      "Selenium",
      "n8n",
      "Web Scraping",
      "API Polling",
      "Browser Automation",
      "Workflow Orchestration",
    ],
  },
  {
    title: "Databases & ETL",
    icon: Database,
    items: [
      "PostgreSQL",
      "MongoDB",
      "SQL Server",
      "Oracle",
      "MySQL",
      "Snowflake",
      "Query Optimization",
      "ETL",
    ],
  },
  {
    title: "Workers & Pipelines",
    icon: Workflow,
    items: [
      "Celery",
      "Redis",
      "Batch Processing",
      "Queue Design",
      "Job Status Tracking",
      "Debug Logging",
    ],
  },
  {
    title: "Cloud & Deployment",
    icon: Globe2,
    items: [
      "Docker",
      "Hetzner Cloud",
      "Caddy",
      "Linux VPS",
      "Vercel",
      "GitHub",
      "Deployment Troubleshooting",
      "Reverse Proxy",
      "CI/CD Basics",
    ],
  },
];

const experience = [
  {
    role: "Freelance Backend, AI & Automation Developer",
    company: "Remote / Private Clients",
    period: "Jun 2025 – Present",
    points: [
      "Working with freelance and private clients on backend, automation, AI integration, database, and workflow-oriented projects.",
      "Focused on Python/FastAPI systems, API integrations, audio-call processing concepts, Celery/Redis pipelines, MongoDB data flows, and LLM/Ollama-based transcript analysis.",
      "Provide support across the complete delivery lifecycle: requirement gathering, solution design, implementation, testing, debugging, deployment support, documentation, and maintenance.",
    ],
  },
  {
    role: "Software Engineer – Backend & Automation",
    company: "SeQuenX AI",
    period: "Mar 2025 – May 2025",
    points: [
      "Engineered FastAPI/webhook automation pipelines for eCommerce synchronization.",
      "Built backend logic for inventory/order syncing, error handling, and status tracking.",
    ],
  },
  {
    role: "Associate Database Developer",
    company: "iENGINEERING Pvt. Ltd.",
    period: "Jun 2024 – Mar 2025",
    points: [
      "Worked on Oracle and SQL Server databases for major U.S. federal data systems.",
      "Handled data migrations, data modeling, documentation, and SQL performance work.",
    ],
  },
  {
    role: "Backend Developer",
    company: "KINS247",
    period: "May 2024",
    points: [
      "Developed Django-based backend modules for VoIP billing workflows.",
      "Built RESTful APIs to process real-time call session data and billing logic.",
    ],
  },
  {
    role: "Database Developer",
    company: "Appedology Pvt. Ltd.",
    period: "Oct 2022 – Mar 2024",
    points: [
      "Optimized SQL Server systems for U.S. healthcare and medical billing workflows.",
      "Worked on replication, SQL Server Agent jobs, ETL validation, indexing, and Power BI dashboards.",
    ],
  },
  {
    role: "Database Administrator",
    company: "DataQ Health",
    period: "Jun 2022 – Jul 2022",
    points: [
      "Worked on EMR and data ingestion workflows using Python, SQL, Snowflake and AWS S3 concepts.",
    ],
  },
  {
    role: "Freelancer",
    company: "Remote",
    period: "2021 – 2022",
    points: [
      "Built Python/Django and database-driven applications for remote clients.",
    ],
  },
];

const focusAreas = [
  "Python Backend Development",
  "AI Automation Systems",
  "API Integrations",
  "Database & ETL Engineering",
  "Web Scraping & Workflow Automation",
  "Celery/Redis Background Processing",
];

const professionalQualities = [
  "Serious and professional approach",
  "Clear communication with clients and teams",
  "Open to feedback and suggestions",
  "Requirement gathering to delivery experience",
  "Testing, debugging and maintenance mindset",
  "Focused on high-quality solutions within time",
  "Research-driven foundation in blockchain and machine learning",
  "Always learning modern technologies for better client outcomes",
];

function App() {
  return (
    <main>
      <section className="hero">
        <div className="hero-bg" />

        <nav className="nav">
          <div className="brand">
            <span className="brand-mark">OR</span>
            <span>{profile.name}</span>
          </div>

          <div className="nav-links">
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="hero-content">
          <div className="hero-copy">
            <div className="eyebrow">
              <Sparkles size={16} />
  Open to full-time, freelance, remote, and contract roles in Backend Development, AI Automation, Databases, and API Integrations.
            </div>

            <p className="hero-name-label">Portfolio of</p>
            <h1 className="hero-name">{profile.name}</h1>

            <p className="subtitle">{profile.title}</p>
            <p className="tech-line">{profile.subtitle}</p>
            <p className="summary">{profile.summary}</p>

            <div className="cta-row">
              <a className="primary-btn" href="#projects">
                View Projects <ArrowRight size={18} />
              </a>

              <a className="secondary-btn" href={`mailto:${profile.email}`}>
                <Mail size={18} /> Contact Me
              </a>

              <a className="secondary-btn" href={profile.github} target="_blank" rel="noreferrer">
                <Github size={18} /> GitHub
              </a>
            </div>
          </div>

          <div className="hero-card">
            <div className="availability">
              <span className="pulse" />
              Freelance / Remote / Backend Roles
            </div>

            <h2>What I build</h2>

            <div className="focus-list">
              {focusAreas.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            <div className="hero-metrics">
              <div>
                <strong>3+</strong>
                <span>Years Experience</span>
              </div>
              <div>
                <strong>6</strong>
                <span>Core Domains</span>
              </div>
              <div>
                <strong>AI</strong>
                <span>Automation Focus</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="section-header">
          <p className="section-kicker">Professional Qualities</p>
          <h2>Reliable delivery from idea to production</h2>
          <p>
            I aim to achieve excellence by understanding client requirements clearly,
            proposing practical solutions, building carefully, testing properly, and
            supporting the solution after delivery.
          </p>
        </div>

        <div className="qualities-grid">
          {professionalQualities.map((quality) => (
            <article className="quality-card" key={quality}>
              <ShieldCheck size={20} />
              <span>{quality}</span>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="section">
        <div className="section-header">
          <p className="section-kicker">Portfolio Projects</p>
          <h2>Featured Technical Work</h2>
          <p>
            Backend, automation, AI, data engineering and production-inspired systems.
            Private personal apps are intentionally excluded from this public portfolio.
          </p>
        </div>

        <div className="project-grid">
          {featuredProjects.map((project) => (
            <article className="project-card featured" key={project.title}>
              <div className="card-top">
                <span className="badge">{project.badge}</span>
                <Code2 size={22} />
              </div>

              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p className="impact">{project.impact}</p>

              <div className="stack">
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              {project.links.length > 0 && (
                <div className="project-links">
                  {project.links.map((link) => (
                    <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                      {link.label} <ExternalLink size={15} />
                    </a>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>

        <div className="project-grid compact">
          {professionalProjects.map((project) => (
            <article className="project-card" key={project.title}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="stack">
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="section alt">
        <div className="section-header">
          <p className="section-kicker">Technical Expertise</p>
          <h2>Backend, AI, Automation & Databases</h2>
          <p>
            Skills are grouped around the kind of work I want to do: reliable APIs,
            automation pipelines, data workflows, and AI-backed backend systems.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((group) => {
            const Icon = group.icon;

            return (
              <article className="skill-card" key={group.title}>
                <div className="skill-icon">
                  <Icon size={24} />
                </div>

                <h3>{group.title}</h3>

                <div className="stack">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section id="experience" className="section">
        <div className="section-header">
          <p className="section-kicker">Experience</p>
          <h2>Professional Background</h2>
          <p>
            Experience across backend engineering, automation, databases, ETL,
            reporting, cloud deployment, AI workflows, and healthcare/federal data systems.
          </p>
        </div>

        <div className="timeline">
          {experience.map((item) => (
            <article className="timeline-item" key={`${item.role}-${item.company}`}>
              <div className="timeline-icon">
                <BriefcaseBusiness size={20} />
              </div>

              <div>
                <p className="period">{item.period}</p>
                <h3>{item.role}</h3>
                <p className="company">{item.company}</p>

                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section alt">
        <div className="security-card">
          <ShieldCheck size={34} />
          <div>
            <h2>Engineering Style</h2>
            <p>
              I prefer practical systems with clear logs, predictable status flows,
              Postman-testable APIs, safe environment variables, clean database queries,
              deployment checks, server logs, reverse proxy troubleshooting, and step-by-step debugging.
              My IT journey started with research in blockchain and machine learning for smart city
              solutions, and I continue to use modern technologies to deliver reliable, useful and
              maintainable solutions.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="contact-card">
          <p className="section-kicker">Let’s Work</p>
          <h2>Need backend, AI automation, API integration, scraping or database work?</h2>
          <p>
            I am open to freelance projects and national/remote roles for Gulf, USA and
            Europe markets, especially around Python, FastAPI, automation, AI integrations,
            ETL, data pipelines, databases, and deployment troubleshooting.
          </p>

          <div className="cta-row centered">
            <a className="primary-btn" href={`mailto:${profile.email}`}>
              <Mail size={18} /> Email Me
            </a>

            <a className="secondary-btn" href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn <ExternalLink size={16} />
            </a>

            <a className="secondary-btn" href={profile.github} target="_blank" rel="noreferrer">
              GitHub <Github size={16} />
            </a>

            <a className="secondary-btn" href="/Omar-Rasheed-Resume.pdf" download>
              Resume <Download size={16} />
            </a>
          </div>
        </div>
      </section>

      <footer>
        <p>© {new Date().getFullYear()} Omar Rasheed. Built with React, Vite and TypeScript.</p>
      </footer>
    </main>
  );
}

export default App;
