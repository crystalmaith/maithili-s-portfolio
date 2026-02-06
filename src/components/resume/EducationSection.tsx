import { Award, BookOpen } from "lucide-react";

const education = [
  {
    id: 1,
    school: "Vishwakarma University",
    years: "2022 - 2026",
    course: "Bachelor of Technology in Artificial Intelligence and Data Science",
    achievements: [
      "Interning with a FinTech company, InfinityPool",
      "8.64 CGPA",
      "Part of the GeeksForGeeks Club",
    ],
  },
  {
    id: 2,
    school: "City International School",
    years: "2019 - 2021",
    course: "Higher Secondary Education - Science",
    achievements: [
      "School Topper in Computer Science",
      "National Science Olympiad - Gold Medal",
      "Debate Team Captain",
    ],
  },
  {
    id: 3,
    school: "Bishop's Co-Ed School Undri",
    years: "2007 - 2019",
    course: "Primary & Secondary Education",
    achievements: [
      "Academic Excellence Award",
      "Best Student in Arts",
      "95% avg in Math and Computer Science",
    ],
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="relative section-padding bg-card before:absolute before:inset-0 before:bg-card before:-left-[100vw] before:w-[200vw]">
      <div className="relative container mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block font-sans text-sm uppercase tracking-[0.2em] text-accent mb-4">
              Background
            </span>
            <h2 className="heading-section">Education</h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

            {/* Education Items */}
            <div className="space-y-12">
              {education.map((item, index) => (
                <div
                  key={item.id}
                  className={`relative flex flex-col md:flex-row gap-8 opacity-0 animate-fade-up ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-accent rounded-full -translate-x-1/2 border-4 border-card z-10" />

                  {/* Content Card */}
                  <div className={`flex-1 ml-16 md:ml-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                    <div className={`card-elegant p-8 ${index % 2 === 0 ? "bg-secondary" : "bg-card"}`}>
                      {/* Year Badge */}
                      <span className="inline-flex items-center gap-2 px-3 py-1 bg-background rounded-full text-xs font-sans uppercase tracking-wider text-muted-foreground mb-4">
                        <BookOpen className="w-3 h-3" />
                        {item.years}
                      </span>

                      {/* School Name */}
                      <h3 className="heading-card mb-2">{item.school}</h3>
                      
                      {/* Course */}
                      <p className="font-sans text-accent mb-6">{item.course}</p>

                      {/* Achievements */}
                      <div className="space-y-2">
                        {item.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <Award className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                            <span className="font-sans text-sm text-muted-foreground">
                              {achievement}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
