import { Github, Linkedin, Twitter, Facebook, Mail, Phone, MapPin } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/crystalmaith", label: "GitHub", target: "_blank" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/maithili-sharma-306575240/", label: "LinkedIn", target: "_blank" },
  { icon: Twitter, href: "https://twitter.com/maithilisharma", label: "Twitter", target: "_blank" },
  { icon: Facebook, href: "https://www.facebook.com/maithili.sharma.12345", label: "Facebook", target: "_blank" },
];

const FooterSection = () => {
  return (
    <footer id="contact" className="relative section-padding bg-navy text-primary-foreground before:absolute before:inset-0 before:bg-navy before:-left-[100vw] before:w-[200vw]">
      <div className="relative container mx-auto">
        <div className="max-w-5xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 mb-16">
            {/* Left Column - Branding */}
            <div className="space-y-6">
              <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-wide">
                Let's Work Together
              </h2>
              <p className="font-sans text-lg font-light text-primary-foreground/70 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, 
                or opportunities to be part of your visions.
              </p>
              
              {/* Social Icons */}
              <div className="flex gap-4 pt-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      className="w-10 h-10 flex items-center justify-center rounded-full border border-primary-foreground/20 text-primary-foreground/70 hover:bg-primary-foreground hover:text-navy transition-all duration-300"
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Right Column - Contact Info */}
            <div className="space-y-6">
              <h3 className="font-serif text-xl font-medium tracking-wide text-primary-foreground/90">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                <a
                  href="mailto:maithili230503@gmail.com"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center group-hover:bg-teal transition-colors duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-sans text-xs uppercase tracking-wider text-primary-foreground/50">
                      Email
                    </span>
                    <span className="font-sans text-primary-foreground/90 group-hover:text-primary-foreground transition-colors">
                      maithili230503@gmail.com
                    </span>
                  </div>
                </a>

                <a
                  href="tel:+919665599329"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center group-hover:bg-teal transition-colors duration-300">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-sans text-xs uppercase tracking-wider text-primary-foreground/50">
                      Phone
                    </span>
                    <span className="font-sans text-primary-foreground/90 group-hover:text-primary-foreground transition-colors">
                      +91 9665599329
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-sans text-xs uppercase tracking-wider text-primary-foreground/50">
                      Location
                    </span>
                    <span className="font-sans text-primary-foreground/90">
                      Pune, Maharashtra, India
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-primary-foreground/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Logo / Name */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal flex items-center justify-center">
                  <span className="font-serif text-lg text-primary-foreground font-semibold">M</span>
                </div>
                <span className="font-serif text-xl tracking-wide">Maithili Sharma</span>
              </div>

              {/* Copyright */}
              <p className="font-sans text-sm text-primary-foreground/50">
                © {new Date().getFullYear()} All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;