const AboutSection = () => {
  return (
    <section id="about" className="relative section-padding bg-beige before:absolute before:inset-0 before:bg-beige before:-left-[100vw] before:w-[200vw]">
      <div className="relative container mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image Column */}
            <div className="relative opacity-0 animate-fade-up" style={{ animationDelay: "200ms" }}>
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-secondary shadow-soft relative">
                <img 
                  src="/WhatsApp Image 2025-12-07 at 3.54.27 PM.jpeg" 
                  alt="Maithili Shinde" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 border-2 border-accent/30 rounded-3xl -z-10" />
            </div>

            {/* Content Column */}
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="inline-block font-sans text-sm uppercase tracking-[0.2em] text-accent">
                  About Me
                </span>
                <h2 className="heading-section">
                  Hello, I'm Maithili
                </h2>
              </div>

              <div className="space-y-6 opacity-0 animate-fade-up" style={{ animationDelay: "400ms" }}>
                <p className="body-text">
                  I'm a creative professional based in Pune, India, with a passion for 
                  blending aesthetics with functionality. My journey in design and development 
                  has been driven by curiosity and a deep appreciation for craftsmanship.
                </p>
                <p className="body-text">
                  With experience spanning across Generative AI, Artificial Intelligence, and Software 
                  Development, I bring a holistic approach to every project. I believe in creating 
                  experiences that are not only beautiful but also meaningful and accessible.
                </p>
                <p className="body-text">
                  When I'm not designing or coding, you'll find me exploring new cuisines, 
                  reading about emerging technologies, or capturing moments through photography.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-4 opacity-0 animate-fade-up" style={{ animationDelay: "600ms" }}>
                <div className="text-center lg:text-left">
                  <span className="block font-serif text-3xl text-primary">5+</span>
                  <span className="font-sans text-sm text-muted-foreground uppercase tracking-wider">Years Exp.</span>
                </div>
                <div className="text-center lg:text-left">
                  <span className="block font-serif text-3xl text-primary">30+</span>
                  <span className="font-sans text-sm text-muted-foreground uppercase tracking-wider">Projects</span>
                </div>
                <div className="text-center lg:text-left">
                  <span className="block font-serif text-3xl text-primary">0+</span>
                  <span className="font-sans text-sm text-muted-foreground uppercase tracking-wider">Clients</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
