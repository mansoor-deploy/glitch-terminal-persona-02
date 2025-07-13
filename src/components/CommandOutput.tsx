import React, { useState } from "react";
import {
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

interface CommandOutputProps {
  command: string;
  output: string;
  timestamp: string;
}

const CommandOutput: React.FC<CommandOutputProps> = ({
  command,
  output,
  timestamp,
}) => {
  const [expandedProjects, setExpandedProjects] = useState<number[]>([]);

  const toggleProject = (index: number) => {
    setExpandedProjects((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const renderOutput = () => {
    const lowerCommand = command.toLowerCase().trim();

    switch (lowerCommand) {
      case "help":
        return (
          <div className="space-y-2">
            <div className="text-secondary">Available commands:</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1 text-sm">
              <div>
                <span className="text-accent">help</span> - Show this help
                message
              </div>
              <div>
                <span className="text-accent">clear</span> - Clear the terminal
              </div>
              <div>
                <span className="text-accent">whoami</span> - Display user
                information
              </div>
              <div>
                <span className="text-accent">ls</span> - List directory
                contents
              </div>
              <div>
                <span className="text-accent">ls skills</span> - List technical
                skills
              </div>
              <div>
                <span className="text-accent">ls projects</span> - List projects
              </div>
              <div>
                <span className="text-accent">cat about</span> - Display about
                information
              </div>
              <div>
                <span className="text-accent">cat experience</span> - Display
                work experience information
              </div>
              <div>
                <span className="text-accent">cat education</span> - Display
                education information
              </div>
               
              <div>
                <span className="text-accent">cat contact</span> - Display
                contact information
              </div>
              <div>
                <span className="text-accent">cd skills</span> - Navigate to
                skills section
              </div>
              <div>
                <span className="text-accent">cd projects</span> - Navigate to
                projects section
              </div>
              <div>
                <span className="text-accent">cd contact</span> - Navigate to
                contact section
              </div>
              <div>
                <span className="text-accent">cd about</span> - Navigate to
                about section
              </div>
            </div>
          </div>
        );

        case "cat resume":
          case  "resume.pdf" :case  "cd resume":

      return (
        <div className="space-y-3">
          <div className="text-primary neon-text text-lg">📄 Mansoor_Ahmed_Resume.pdf</div>
          <a
            href="https://drive.google.com/file/d/15dGYvZwN2i7QuuSnUN3XN_rlHX5Vl4oz/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-primary hover:text-accent transition-colors text-sm underline"
          >
            <ExternalLink size={14} />
            <span>Open / Download Resume</span>
          </a>
        </div>
      );
    

      case "whoami":
        return (
          <div className="space-y-2">
            <div className="text-primary neon-text">Mansoor Ahmed</div>
            <div className="text-secondary">
              Full Stack Developer | Associate Research Engineer
            </div>
            <div className="text-muted-foreground">
              Crafting secure, real-time digital solutions at scale
            </div>
          </div>
        );
           case "cd education":
            case "cat education":
      case "ls education":
        return (
          <div className="space-y-4">
            <div className="text-primary neon-text text-lg">
              📁 Navigated to: /education
            </div>
            <div className="space-y-2 text-sm md:text-base">
              <div className="font-semibold text-primary">
                B.E. Computer Science & Engineering
              </div>
              <div className="text-secondary">
                Dayananda Sagar Academy of Technology & Management, Bengaluru
              </div>
              <div className="text-muted-foreground">
                Aug 2020 – May 2024  |  CGPA 9.5/10
              </div>
            </div>
          </div>
        );

      /* -------------------------- EXPERIENCE ------------------------- */
      case "cd experience":
        case "cat experience":
      case "ls experience":
        return (
          <div className="space-y-4">
            <div className="text-primary neon-text text-lg">
              📁 Navigated to: /experience
            </div>
            <div className="space-y-2 text-sm md:text-base">
              <div className="font-semibold text-primary">
                Associate Software Engineer – Full‑Stack
              </div>
              {
                <>
             <div className="text-secondary">Havells India Ltd - R&D  |  Jul 2024 – Present</div>
 <a
                    href=" https://www.linkedin.com/company/havells-india-ltd"
                    className="flex items-center space-x-2 text-secondary hover:text-primary transition-colors"
                    target="_blank"
                  >
                    <Linkedin size={16} />
                    <span>Havells India Limited</span>
                  </a>
                  </>
            
             /* <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>
                  Designed and optimized NestJS + MongoDB APIs for IoT solar dashboards,
                  cutting latency by 72% through caching and data‑model redesign.
                </li>
                <li>
                  Built responsive Angular dashboards with lazy loading and Apache ECharts visualizations
                  for real‑time telemetry across distributed edge devices.
                </li>
                <li>
                  Containerised services with Docker and orchestrated deployments on Azure AKS,
                  enabling seamless scaling and blue‑green releases.
                </li>
               </ul*/ }
            </div>



             <div className="space-y-2 text-sm md:text-base">
              <div className="font-semibold text-primary">
                Web Developer - Trainee
              </div>
              {<>
             <div className="text-secondary">Wise Work |  March 2023 – Jan 2024</div>
             <a
                    href="https://www.linkedin.com/company/ww-in"
                    className="flex items-center space-x-2 text-secondary hover:text-primary transition-colors"
                    target="_blank"
                  >
                    <Linkedin size={16} />
                    <span>Wise work</span>
                  </a>
             </>
             /* <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>
                  Designed and optimized NestJS + MongoDB APIs for IoT solar dashboards,
                  cutting latency by 72% through caching and data‑model redesign.
                </li>
                <li>
                  Built responsive Angular dashboards with lazy loading and Apache ECharts visualizations
                  for real‑time telemetry across distributed edge devices.
                </li>
                <li>
                  Containerised services with Docker and orchestrated deployments on Azure AKS,
                  enabling seamless scaling and blue‑green releases.
                </li>
               </ul*/ }
            </div>
          </div>
        );

      case "ls":
        return (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="text-accent cursor-pointer hover:text-primary">
              about/
            </div>
            <div className="text-accent cursor-pointer hover:text-primary">
              skills/
            </div>
            <div className="text-accent cursor-pointer hover:text-primary">
              projects/
            </div>
            <div className="text-accent cursor-pointer hover:text-primary">
              contact/
            </div>
             <div className="text-accent cursor-pointer hover:text-primary">
              experience/
            </div>
             <div className="text-accent cursor-pointer hover:text-primary">
              education/
            </div>
            <div className="text-secondary">resume.pdf</div>
            {/* <div className="text-secondary">readme.md</div> */}
          </div>
        );

      case "cd contact":
      case "cat contact":
        return (
          <div className="space-y-4">
            <div className="text-primary neon-text text-lg">
              📁 Navigated to: /contact
            </div>
            <div className="text-secondary">Contact Information:</div>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="text-accent" size={16} />
                <a
                  href="mailto:mansoorahmedz991@gmail.com"
                  className="text-secondary hover:text-primary transition-colors"
                >
                  mansoorahmedz991@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-accent" size={16} />
                <span className="text-secondary">+91 95384 74018</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="text-accent" size={16} />
                <span className="text-secondary">Bengaluru, India</span>
              </div>
              <div className="pt-2 space-y-2">
                <div className="text-muted-foreground text-sm">
                  Social Links:
                </div>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/mansoor-colb"
                    className="flex items-center space-x-2 text-secondary hover:text-primary transition-colors"
                    target="_blank"
                  >
                    <Github size={16} />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://linkedin.com/in/mansoor-ahmed-li"
                    className="flex items-center space-x-2 text-secondary hover:text-primary transition-colors"
                    target="_blank"
                  >
                    <Linkedin size={16} />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        );

      case "cd about":
      case "cat about":
        return (
          <div className="space-y-4 max-w-3xl">
            <div className="text-primary neon-text text-lg">
              📁 Navigated to: /about
            </div>
            <div className="text-primary neon-text text-lg">
              About Mansoor Ahmed
            </div>
            <div className="space-y-3 text-sm md:text-base">
              <p>
                I’m a dedicated full-stack developer with a strong foundation in
                building scalable, real-time applications — particularly within
                industrial IoT and cloud-native ecosystems.
              </p>
              <p>
                My core expertise lies in Angular, NestJS, Node.js, MongoDB,
                Redis, and Docker — enabling me to craft modular, secure, and
                high-performance solutions tailored for production-grade
                infrastructure.
              </p>
              <p>
                While my focus remains full-stack engineering, I also stay
                updated on the latest in AI/ML and contribute to open-source
                tools, constantly seeking ways to improve developer efficiency
                and system robustness. Do have a look at my open source projects.
              </p>
             
            </div>
          </div>
        );

      case "cd skills":
      case "ls skills":
        return (
          <div className="space-y-4">
            <div className="text-primary neon-text text-lg">
              📁 Navigated to: /skills
            </div>
            <div>
              <div className="text-secondary mb-2">Languages:</div>
              <div className="flex flex-wrap gap-2">
                {["Javascript", "TypeScript", "Java", "SQL"].map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 bg-primary/10 text-primary rounded text-sm border border-primary/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <div className="text-secondary mb-2">Frontend:</div>
              <div className="flex flex-wrap gap-2">
                {["Angular", "React", "Bootstrap"].map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 bg-primary/10 text-primary rounded text-sm border border-primary/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <div className="text-secondary mb-2">DataBase</div>
              <div className="flex flex-wrap gap-2">
                {["MongoDB", "SQL", "Redis"].map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 bg-secondary/10 text-secondary rounded text-sm border border-secondary/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <div className="text-secondary mb-2">Backend</div>
              <div className="flex flex-wrap gap-2">
                {["Node.js", "NestJS"].map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 bg-accent/10 text-accent rounded text-sm border border-accent/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <div className="text-secondary mb-2">Cloud & DevOps:</div>
              <div className="flex flex-wrap gap-2">
                {["Docker", "Azure", "AWS", "CI/CD", "Git"].map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 bg-destructive/10 text-destructive rounded text-sm border border-destructive/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );

      case "cd projects":
      case "ls projects":
        return (
          <div className="space-y-4">
            <div className="text-primary neon-text text-lg">
              📁 Navigated to: /projects
            </div>
            <div className="text-secondary mb-2">Highlighted Projects:</div>
            <div className="space-y-3">
              {[
                {
                  name: "Event Assistant Platform - Largest Tech Summit (Art Of Living)",
                  description: ` Developed and deployed a full-stack event management platform with dynamic registration, QR-based attendance, feedback, and secure check-ins—automating 90% of manual event tracking workflows. 
                     \n Improved real-time participant status tracking and verification, enhancing user experience and reducing entry delays by 70%. 
                    \n Hosted on AWS EC2 (Linux), ensuring scalable and high-availability deployment for peak-time event operations`,
                  tech: [
                    "Node.js",
                    "jQuery",
                    "MongoDB",
                    "QR Utils",
                    "Bootstrap",
                    "AWS",
                  ],
                  // github: "https://github.com/mansoor-colb/event-assistant",
                },
                {
                  name: "Telegram AI Bot",
                  description: ` Engineered a multi-feature Telegram bot for students integrating academic scores, attendance, library books status, live news articles , study 
resources, GPT support, and real-time BMTC bus tracking. 
                 \n Streamlined access to 10+ disparate services into a single interactive bot interface, improving academic information accessibility and reducing navigation 
time by 85%. 
\n Deployed using AWS Lambda and EC2, providing seamless service to 200+ students.`,
                  tech: ["Node.js", "Telegram API", "REST"],
                  // github: "https://github.com/mansoorahmedz/telegram-ai-bot",
                },
                {
  name: "Namma Yatri Telegram Bot",
  description:
    `A Telegram-based auto ride booking assistant built for Namma Yatri, eliminating the need for a native app.\nEnables users to book rides, perform quick bookings without location input, save frequent routes, track current rides, and contact support—all within Telegram.\nBuilt using Node.js and MongoDB with seamless Telegram Bot API integration.\n🏆 Won a ₹5,000 state-level prize for this innovative idea in public transit accessibility.`,
  tech: ["Node.js", "Telegram Bot API", "MongoDB", "Express"],
  // github: "https://github.com/mansoorahmedz/namma-yatri-bot", // replace with actual link if needed
  demo: null
}
,
                {
                  name: "PraniCure",
                  description: `Progressive Web App (PWA) designed to assist both stray animals and domestic pets through streamlined NGO and vet communication.
    \n Enables users to instantly alert NGOs about injured strays, ensuring timely on-ground intervention.
    \n Facilitates pet owners in connecting with qualified doctors remotely, offering home-based veterinary support.
    \n Built using Node.js with seamless request handling and PWA features for mobile responsiveness.`,
                  tech: [
                    "Node.js",
                    "Express",
                    "PWA",
                    "HTML",
                    "CSS",
                    "JavaScript",
                  ],
                  github: "https://github.com/mansoor-colb/PraniCure", // Replace with actual link if available
                },
                {
  name: "AI Chest X-ray Classifier",
  description:
    `An AI-powered diagnostic tool that classifies chest X-ray images into COVID-19, Pneumonia, Lung Opacity, or Normal cases.
    \n Built using deep learning (TensorFlow/Keras) with Grad-CAM to visualize affected regions in X-rays.
    \n Users can upload X-rays, receive real-time predictions, and download medical reports as PDFs.
    \n Includes model performance graphs, confidence scores, and narration toggle for accessibility.`,
  tech: ["TensorFlow", "Flask", "FPDF", "HTML", "CSS", "JavaScript", "Matplotlib"],
  github: "https://github.com/mansoor-colb/lung_cancer_ai_detection", // replace with your actual repo if different
  demo: null
},
                {
  name: "User Identity Management",
  description:
    `A full-fledged identity management system enabling agencies to register users and issue secure digital ID cards with embedded QR codes.
    \n Users receive a digital identity card (like Aadhaar) via email upon registration, containing secure, structured information.
    \n Admin agencies can edit, manage, and query user data efficiently using a DBMS-driven approach.
    \n Integrated QR scanning feature allows instant access to user details, streamlining identification workflows and tracking family groups.`,
  tech: ["Node.js", "Express", "QR Code", "MySQL", "HTML", "CSS", "JavaScript"],
  github: "https://github.com/mansoor-colb/User-Identity-Management", // replace with actual repo if needed
  demo: null
},
{
  name: "Mood‑Based AI Assistant - (pvt)",
  description:
    `Multi‑modal desktop assistant that detects user mood via webcam (DeepFace) and adapts online/offline behaviour.\nDetects dominant emotion, fetches Gemini‑powered activity ideas when online, or plays local mood‑based music when offline.\nOffers interactive options—wave‑style breathing exercise or mini‑game—for negative moods.\nAdjusts screen brightness, narrates events, and displays suggestions/quotes in a Tkinter text editor running in its own thread.`,
  tech: ["Python", "OpenCV", "DeepFace", "Gemini API", "Tkinter", "PyGame", "Spotipy"],
  github: "https://github.com/mansoor-colb/Emotion-Assistant", // replace if different
  demo: null
}
,
{
  name: "Cyber Chat",
  description:
    `A secure, end-to-end encrypted messaging web app with robust encryption and privacy measures.\nMessages and images are encrypted using AES and shared securely using RSA, with full sender–receiver metadata stored in SQLite.\nChat history can be retrieved and decrypted using user-specific keys; QR-based 2FA is used for extra-sensitive content.\nBuilt using Node.js and deployed with Microsoft Azure Function Apps for scalable backend execution.`,
  tech: ["Node.js", "SQLite", "Azure Functions", "JavaScript", "HTML", "CSS", "Crypto"],
  github: "https://github.com/mansoor-colb/CyberChat", // replace with your actual repo if different
  demo: null
}
,

                {
                  name: "Dynamic Resume Builder",
                  description: `Built a real-time resume builder where users can create and update resumes dynamically, with instant reflection via a persistent URL. 
                    \n Eliminating multiple exports after each update and just reflecting changes with same URL. 
                    \n Implemented with MySQL (RDBMS) using efficient CRUD operations and a responsive front-end for easy cross-device access and editing. `,
                  tech: ["PHP", "MySQL", "HTML", "CSS", "jQuery"],
                  github: "https://github.com/mansoor-colb/Dynamic-Resume-Builder",
                },

              ].map((project, index) => (
                <div
                  key={index}
                  className="border border-primary/20 rounded bg-card/50 p-4"
                >
                  <div className="text-primary font-semibold mb-1">
                    {project.name}
                  </div>
                  <div className="text-secondary text-sm mb-1 whitespace-pre-line">
                    {project.description}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 bg-muted/30 text-muted-foreground rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.github}
                    className="flex items-center space-x-1 text-primary hover:text-accent transition-colors text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={14} />
                    <span>View Code</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        if (command.startsWith("echo ")) {
          return <div className="text-primary">{command.slice(5)}</div>;
        }
        return (
          <div className="text-destructive">Command not found: {command}</div>
        );
    }
  };

  return (
    <div className="mb-6 fade-in-up">
      <div className="flex items-center space-x-2 mb-2 text-sm">
        <span className="text-muted-foreground">[{timestamp}]</span>
        <span className="text-secondary">mansoor@portfolio:~$</span>
        <span className="text-primary">{command}</span>
      </div>
      <div className="ml-4 pl-4 border-l border-primary/20">
        {renderOutput()}
      </div>
    </div>
  );
};

export default CommandOutput;
