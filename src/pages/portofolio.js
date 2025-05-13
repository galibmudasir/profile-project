import Header from "../component/header";
import Footer from "../component/footer";
import PortofolioSectionPage from "../component/section/portofolio/portofolio-section";
import SingleBannerSection from "../component/section/homepage/single-banner-section";

const PortofolioPage = () => {
  return (
    <>
      <Header />
      <SingleBannerSection title={"Portofolio"} />
      <PortofolioSectionPage />
      <Footer />
    </>
  );
};

export default PortofolioPage;
