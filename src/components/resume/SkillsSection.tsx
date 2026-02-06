import { useEffect, useState, useRef } from "react";

const skills = [
  { name: "React & TypeScript", level: 90, category: "Frontend" },
  { name: "Python", level: 85, category: "Backend" },
  { name: "Machine Learning", level: 80, category: "AI/ML" },
  { name: "LangChain & LLMs", level: 85, category: "AI/ML" },
  { name: "Node.js", level: 75, category: "Backend" },
  { name: "SQL & PostgreSQL", level: 80, category: "Database" },
  { name: "Tailwind CSS", level: 90, category: "Frontend" },
  { name: "Data Analysis", level: 85, category: "AI/ML" },
];

const categories = ["All", "Frontend", "Backend", "AI/ML", "Database"];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="section-padding bg-secondary"
    >
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block font-sans text-sm uppercase tracking-[0.2em] text-accent mb-4">
              Expertise
            </span>
            <h2 className="heading-section">Technical Skills</h2>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-sans uppercase tracking-wider transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-accent text-accent-foreground shadow-soft"
                    : "bg-card text-muted-foreground hover:bg-accent/20 hover:text-accent"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid gap-6">
            {filteredSkills.map((skill, index) => (
              <div
                key={skill.name}
                className="card-elegant bg-card p-6 opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-3">
                    <h3 className="font-serif text-lg font-semibold text-primary">
                      {skill.name}
                    </h3>
                    <span className="px-2 py-0.5 text-xs font-sans uppercase tracking-wider bg-secondary text-accent rounded-full">
                      {skill.category}
                    </span>
                  </div>
                  <span className="font-sans text-sm font-medium text-accent">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="relative h-3 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-accent to-accent/70 rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: isVisible ? `${skill.level}%` : "0%",
                      transitionDelay: `${index * 100}ms`,
                    }}
                  >
                    {/* Animated shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills Badges */}
          <div className="mt-12 text-center">
            <h4 className="font-serif text-lg font-semibold text-primary mb-6">
              Also Experienced With
            </h4>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Git",
                "Docker",
                "Firebase",
                "MongoDB",
                "REST APIs",
                "GraphQL",
                "Figma",
                "Streamlit",
                "NumPy",
                "Pandas",
                "OpenAI API",
                "Vector DBs",
              ].map((tech, index) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-card text-primary font-sans text-sm rounded-full border border-border/50 hover:border-accent hover:text-accent transition-all duration-300 cursor-default opacity-0 animate-fade-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
