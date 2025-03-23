import { TypeAnimation } from "react-type-animation";
import myPhoto from "../assets/my-photo.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent"></div>
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-12">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 title-gradient">
            Bonjour, je suis Mathieu
          </h1>
          <div className="text-xl md:text-2xl text-blue-400 mb-8">
            <span>J'aime pratiquer </span>
            <TypeAnimation
              sequence={[
                "le football",
                2000,
                "la voile",
                2000,
                "le judo",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
        </div>
        <div className="shrink-0">
          <img src={myPhoto} alt="Profile" className="profile-image" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
