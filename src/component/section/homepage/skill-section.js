import SkillTabs from "../../modules/skill-tabs";
import AnimatedDiv from "../../../assets/styles/animation";

const SkillSection = () => {
  return (
    <section className="skill-section">
      <div className="section-content-fixed">
        <div className="skill-section-content text-center">
          <AnimatedDiv animation="fade-up">
            <h5 className="text-primary">Skill</h5>
            <h1 className="fw-bold mb-3">Skill Yang Telah Saya Kuasai</h1>
          </AnimatedDiv>
          <div className="skill-content mt-4">
            <SkillTabs />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
