import { ParallaxBanner } from "react-scroll-parallax";
import { BgSectionBanner } from "../../../index";
import { ParallaxProvider } from "react-scroll-parallax";

const SingleBannerSection = ({ title }) => {
  return (
    <section className="single-banner-section">
      <ParallaxProvider>
        <ParallaxBanner
          layers={[{ image: BgSectionBanner, speed: 15 }]}
          className="section-bg"
        >
          <div className="section-bg-overlay"></div>
          <div className="section-content-fixed py-5">
            <div className="text-center text-white">
              <h1 className="h2 fw-bold">{title}</h1>
            </div>
          </div>
        </ParallaxBanner>
      </ParallaxProvider>
    </section>
  );
};

export default SingleBannerSection;
