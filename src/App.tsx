import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkillsSection";
import EducationSection from "./components/EducationSection";
import StagesSection from "./components/StagesSection";
import ProjectsSection from "./components/ProjectsSection";
import NewsSection from "./components/NewsSection";
import ContactSection from "./components/ContactSection";
import { skills } from "./data/skills";
import { projects } from "./data/projects";
import { stages } from "./data/stages";
import { news } from "./data/news";

function App() {
  return (
    <div className="min-h-screen text-white">
      <Header />
      <HeroSection />
      <SkillsSection skills={skills} />
      <EducationSection />
      <StagesSection stages={stages} />
      <ProjectsSection projects={projects} />
      <NewsSection news={news} />
      <ContactSection />
    </div>
  );
}

export default App;
