import SingleBannerSection from "../component/section/homepage/single-banner-section";
import {
  Header,
  Footer,
  TentangSaya,
  RiwayatSection,
  PersonalSection,
} from "../index";

const TentangPage = () => {
  return (
    <>
      <Header />
      <SingleBannerSection title="Tentang Saya" />
      <TentangSaya />
      <RiwayatSection />
      <PersonalSection />
      <Footer />
    </>
  );
};

export default TentangPage;
