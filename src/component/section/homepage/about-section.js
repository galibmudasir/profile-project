import {
  ProgramerAnimation,
  ReactAnimation,
  WordpressAnimation,
} from "../../../index";
import AnimatedDiv from "../../../assets/styles/animation";

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="section-content-fixed">
        <div className="about-section-content text-center">
          <AnimatedDiv animation="fade-up">
            <h5 className="text-primary">Tentang</h5>
            <h1 className="fw-bold mb-3">Tentang Saya</h1>
          </AnimatedDiv>

          <AnimatedDiv
            animation="fade-up"
            className="tentang-content px-md-5 px-0"
          >
            <p>
              Saya, Ibni Galib Mudasir, lulusan SMK Negeri 1 ROTA Bayat dengan
              nilai baik yaitu 82, memiliki keahlian dalam berbagai bahasa
              pemrograman seperti HTML, CSS, JavaScript, dan PHP. Selain itu,
              saya juga menguasai beberapa library penting seperti jQuery,
              Bootstrap, dan Tailwind (pemula), serta sedang dalam proses
              mempelajari React untuk memperdalam kemampuan pengembangan
              aplikasi modern.
            </p>
            <p>
              Selama 1 tahun pengalaman bekerja sebagai WordPress Developer,
              saya telah memperoleh pemahaman mendalam tentang ekosistem
              WordPress, mulai dari pengembangan tema dan plugin hingga optimasi
              performa situs. Pengalaman ini telah membantu saya mengasah
              kemampuan teknis dan kreatif dalam menciptakan solusi berbasis web
              yang inovatif dan sesuai kebutuhan klien. Saya terus belajar dan
              mengembangkan diri untuk selalu selangkah lebih maju dalam dunia
              teknologi yang terus berkembang.
            </p>
          </AnimatedDiv>
        </div>
      </div>
      <div className="dotlottie-programer">
        <dotlottie-player
          autoplay
          loop
          src={ProgramerAnimation}
          style={{ width: "180px", height: "180px" }}
        ></dotlottie-player>
      </div>
      <div className="dotlottie-react">
        <dotlottie-player
          autoplay
          loop
          src={ReactAnimation}
          style={{ width: "100px", height: "100px" }}
        ></dotlottie-player>
      </div>
      <div className="dotlottie-wordpress">
        <dotlottie-player
          autoplay
          loop
          src={WordpressAnimation}
          style={{ width: "100px", height: "100px" }}
        ></dotlottie-player>
      </div>
    </section>
  );
};
export default AboutSection;
