import { Github, Linkedin, Twitter, Facebook, MapPin } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/crystalmaith", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/maithili-sharma-306575240/", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/crystalmaithh", label: "Twitter" },
  { icon: Facebook, href: "https://www.facebook.com/maithili.sharma.52/", label: "Facebook" },
];

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-beige before:absolute before:inset-0 before:bg-beige before:-left-[100vw] before:w-[200vw] before:-z-10"
    >
      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-sky-blue rounded-full blur-3xl opacity-40 animate-float" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-teal/20 rounded-full blur-2xl opacity-30" style={{ animationDelay: "2s" }} />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Social Icons - Floating Right */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={`desktop-${social.label}`}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-social opacity-0 animate-slide-in-left"
                  style={{ animationDelay: `${800 + index * 100}ms` }}
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>

          {/* Main Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full text-muted-foreground opacity-0 animate-fade-up" style={{ animationDelay: "200ms" }}>
              <MapPin className="w-4 h-4" />
              <span className="font-sans text-sm tracking-wide">Pune, India</span>
            </div>

            <h1 className="heading-display opacity-0 animate-fade-up" style={{ animationDelay: "400ms" }}>
              Maithili Sharma
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground font-sans font-normal opacity-0 animate-fade-up mt-2" style={{ animationDelay: "450ms" }}>
              AI Engineer
            </h2>

            <p className="body-text max-w-2xl mx-auto opacity-0 animate-fade-up" style={{ animationDelay: "600ms" }}>
              A tech enthusiast focused on intelligent systems, data-driven solutions, and modern web experiences. 
              I enjoy building products where clean design meets thoughtful engineering and real-world impact.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-4 opacity-0 animate-fade-up" style={{ animationDelay: "800ms" }}>
              <a href="#projects" className="btn-primary">
                View Projects
              </a>
              <a href="#contact" className="btn-outline">
                Get in Touch
              </a>
            </div>

            {/* Mobile Social Icons */}
            <div className="flex justify-center gap-4 md:hidden pt-6 opacity-0 animate-fade-up" style={{ animationDelay: "1000ms" }}>
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={`mobile-${social.label}`}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-social"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: "1200ms" }}>
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;