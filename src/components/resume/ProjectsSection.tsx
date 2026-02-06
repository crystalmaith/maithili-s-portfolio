import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Finance AI Assistant",
    description:
      "An AI-powered personal finance assistant that helps users analyze expenses, track investments, understand financial documents, and make smarter money decisions using intelligent insights.",
    tech: ["React", "TypeScript", "Node.js", "Python", "OpenAI API", "MongoDB"],
    bgColor: "bg-card",
    projectUrl: "https://rupeeai.vercel.app/login"
  },
  {
    id: 2,
    title: "Medical Chatbot using RAG",
    description:
      "A retrieval-augmented medical chatbot that provides accurate, context-aware answers by combining large language models with trusted medical knowledge sources.",
    tech: ["Next.js", "TypeScript", "Python", "LangChain", "Vector DB", "PostgreSQL"],
    bgColor: "bg-secondary",
    projectUrl: "https://github.com/crystalmaith/Medical-Health-chatbot-Strictly-RAG-"
  },
  {
    id: 3,
    title: "Volatility Trading AI Assistant",
    description:
      "An AI-driven trading assistant that forecasts market volatility, analyzes sectoral risk, and supports data-backed trading decisions using quantitative and statistical models.",
    tech: ["Python", "Pandas", "NumPy", "MGARCH", "Machine Learning", "Streamlit"],
    bgColor: "bg-card",
    projectUrl: "https://github.com/crystalmaith/volatility-aware-trading-assistant"
  },
  {
    id: 4,
    title: "Dungeons & Dragons — AI Dungeon Master",
    description:
      "An interactive D&D game where an AI-powered Dungeon Master dynamically generates storylines, characters, and outcomes using agent-based reasoning.",
    tech: ["React", "LangChain", "LangGraph", "OpenAI API", "Firebase"],
    bgColor: "bg-secondary",
    projectUrl: "#"
  },
  {
    id: 5,
    title: "Retirement Planner using SIP",
    description:
      "A financial planning tool that helps users estimate retirement savings using SIP calculations, future value modeling, and personalized investment strategies.",
    tech: ["React", "JavaScript", "Financial Modeling", "Chart.js", "Tailwind CSS"],
    bgColor: "bg-card",
    projectUrl: "https://retirement-planner-nff4m6faawkmqtyqotngrp.streamlit.app/"
  },
  {
    id: 6,
    title: "AI-Powered SDLC Assistant",
    description:
      "An intelligent SDLC assistant that reviews repositories, identifies risks, scores projects using the 12-factor framework, and provides AI-generated improvement insights.",
    tech: ["Python", "Streamlit", "LLMs", "LangGraph", "GitHub API"],
    bgColor: "bg-secondary",
    projectUrl: "https://ai-sdlc-scribe.vercel.app/"
  },
  {
    id: 7,
    title: "Bake n' Cake Webpage",
    description:
      "A dreamy, vintage-themed bakery website showcasing products, galleries, and customer outcomes with a delightful visual-first experience.",
    tech: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "Figma"],
    bgColor: "bg-card",
    projectUrl: "https://bake-n-cake.vercel.app/"
  },
  {
  id: 8,
  title: "Maithili's Home Bakery",
  description:
    "A personal recipe management web app built for organizing, saving, and adding homemade baking recipes, with a warm, bakery-inspired UI designed for personal use.",
  tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Firebase"],
  bgColor: "bg-secondary",
   projectUrl: "https://maithilis-sweet-kitchen.vercel.app/"
},

  {
    id: 9,
    title: "The Daily Bugle",
    description:
      "A modern news web app that aggregates real-time headlines, analyzes sentiment, and delivers AI-powered summaries across multiple categories.",
    tech: ["Next.js", "TypeScript", "News APIs", "NLP", "OpenAI API"],
    bgColor: "bg-card",
    projectUrl: "https://github.com/crystalmaith/Maithilis-Daily-Bugle"
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative section-padding bg-card before:absolute before:inset-0 before:bg-card before:-left-[100vw] before:w-[200vw]">
      <div className="relative container mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block font-sans text-sm uppercase tracking-[0.2em] text-accent mb-4">
              Portfolio
            </span>
            <h2 className="heading-section">Featured Projects</h2>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <article
                key={project.id}
                className={`group card-elegant ${project.bgColor} p-8 flex flex-col opacity-0 animate-fade-up`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Project Number */}
                <span className="font-serif text-5xl font-light text-border mb-6">
                  0{project.id}
                </span>

                {/* Content */}
                <div className="flex-1 space-y-4">
                  <h3 className="heading-card group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="body-text text-sm">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-6 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-sans uppercase tracking-wider bg-secondary text-muted-foreground rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Link */}
                {project.projectUrl && (
                  <div className="mt-4 pt-4 border-t border-border/20">
                    <a
                      href={project.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-sans text-accent hover:underline group"
                    >
                      View Project
                      <ArrowUpRight className="ml-1 w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
