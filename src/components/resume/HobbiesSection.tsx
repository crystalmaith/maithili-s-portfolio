import { 
  Camera, 
  BookOpen, 
  Music, 
  Palette, 
  Plane, 
  Coffee,
  Gamepad2,
  Dumbbell,
  HandHeart,
  BatteryFull
} from "lucide-react";

const hobbies = [
  { icon: HandHeart, label: "Yoga" },
  { icon: BatteryFull, label: "Tennis" },
  { icon: Music, label: "Music" },
  { icon: Palette, label: "Painting" },
  { icon: Plane, label: "Travel" },
  { icon: Coffee, label: "Coffee" },
  { icon: Gamepad2, label: "Gaming" },
  { icon: Dumbbell, label: "Fitness" },
];

const HobbiesSection = () => {
  return (
    <section id="hobbies" className="relative section-padding bg-secondary before:absolute before:inset-0 before:bg-secondary before:-left-[100vw] before:w-[200vw]">
      <div className="relative container mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block font-sans text-sm uppercase tracking-[0.2em] text-accent mb-4">
              Interests
            </span>
            <h2 className="heading-section">Hobbies & Passions</h2>
            <p className="body-text mt-4 max-w-2xl mx-auto">
              Beyond work, these are the activities that inspire creativity and bring balance to life.
            </p>
          </div>

          {/* Hobbies Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {hobbies.map((hobby, index) => {
              const Icon = hobby.icon;
              return (
                <div
                  key={hobby.label}
                  className="group card-elegant bg-card p-6 md:p-8 text-center opacity-0 animate-scale-in hover:-translate-y-1"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-secondary text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300 mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-sans text-sm uppercase tracking-[0.1em] text-primary">
                    {hobby.label}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HobbiesSection;
