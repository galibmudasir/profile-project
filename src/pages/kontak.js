import SingleBannerSection from "../component/section/homepage/single-banner-section";
import { Header, Footer } from "../index";
import KontakSayaSection from "../component/section/kontak/kontak-saya-section";
const ContactPage = () => {
  return (
    <>
      <Header />
      <SingleBannerSection title="Kontak Saya" />
      <KontakSayaSection />
      <Footer />
    </>
  );
};

export default ContactPage;
