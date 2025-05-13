import { IconSambutan1, BgSectionBanner } from "../../../index";
import { ParallaxBanner } from "react-scroll-parallax";
import { motion } from "framer-motion";
import AnimatedDiv from "../../../assets/styles/animation";

const BannerSection = () => {
  return (
    <section className="banner-section">
      <ParallaxBanner
        layers={[{ image: BgSectionBanner, speed: 15 }]}
        className="section-bg"
      >
        <div className="section-bg-overlay"></div>
        <div className="section-content-fixed">
          <div className="row align-items-center text-center text-md-start">
            <motion.div
              animate={{ x: 0, opacity: 1 }}
              initial={{ x: -100, opacity: 0 }}
              transition={{ duration: 2 }}
              className="col-md-6 mt-2 mt-md-0"
            >
              <h1 className="h2 fw-bold">Personal Site Galib Mudasir</h1>
              <div className="ucapan-section-content">
                <b>Selamat datang di Persoanl Web pribadi saya.</b>
                <br /> web ini merupakan perjalanan eksplorasi kreatif dan
                pengembangan diri, di mana saya menggabungkan pengetahuan,
                pengalaman, serta inovasi untuk menciptakan karya-karya yang
                bermakna. Melalui platform ini, saya berharap bisa membagikan
                proses pemikiran, ide, dan solusi yang saya kembangkan untuk
                menghadapi berbagai tantangan dalam bidang yang saya minati.
              </div>
            </motion.div>
            <AnimatedDiv
              animation="fade-right"
              className="col-md-6 text-center"
              g-animation="fade-up"
            >
              <img
                src={IconSambutan1}
                alt="Icon Sambutan"
                className="icon-sambutan"
              />
            </AnimatedDiv>
          </div>
        </div>
      </ParallaxBanner>
    </section>
  );
};
export default BannerSection;
