import { useState, useEffect } from "react";
import { Home, Briefcase, User, GraduationCap, Heart, Mail, Github, Linkedin, Twitter, Facebook } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/crystalmaith", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/maithili-sharma-306575240/", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/maithilisharma", label: "Twitter" },
  { icon: Facebook, href: "https://www.facebook.com/maithili.sharma.12345", label: "Facebook" },
];

const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "projects", label: "Projects", icon: Briefcase },
  { id: "about", label: "About Me", icon: User },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "hobbies", label: "Hobbies", icon: Heart },
  { id: "contact", label: "Contact", icon: Mail },
];

const SidebarNav = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => ({
        id: item.id,
        element: document.getElementById(item.id),
      }));

      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element && section.element.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed left-0 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-1 p-4">
      <div className="bg-card/80 backdrop-blur-sm rounded-2xl shadow-soft p-3 border border-border/50">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`group flex items-center gap-3 w-full p-3 rounded-xl transition-all duration-300 ${
                isActive
                  ? "bg-accent text-accent-foreground"
                  : "text-primary/60 hover:text-accent hover:bg-secondary/50"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              <span
                className={`text-xs uppercase tracking-[0.15em] font-sans whitespace-nowrap overflow-hidden transition-all duration-300 ${
                  isActive ? "max-w-24 opacity-100" : "max-w-0 opacity-0 group-hover:max-w-24 group-hover:opacity-100"
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
      
      {/* Social Media Links */}
      <div className="bg-card/80 backdrop-blur-sm rounded-2xl shadow-soft p-3 border border-border/50 mt-4">
        <div className="flex flex-col gap-3">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                aria-label={social.label}
              >
                <Icon className="w-5 h-5" />
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default SidebarNav;
