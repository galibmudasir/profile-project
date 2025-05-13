import "../assets/styles/App.css";
import {
  BannerSection,
  AboutSection,
  ProjectSection,
  SkillSection,
  BlogSection,
  ContactSection,
} from "../index";
import { ParallaxProvider } from "react-scroll-parallax";

const Main = () => {
  return (
    <main className="site-content">
      <ParallaxProvider>
        <BannerSection />
        <AboutSection />
        <ProjectSection />
        <SkillSection />
        <BlogSection />
        <ContactSection />
      </ParallaxProvider>
    </main>
  );
};
export default Main;
