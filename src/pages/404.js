import { Header, Footer } from "../index.js";
import SingleBannerSection from "../component/section/homepage/single-banner-section";

const EmptyPage = () => {
  return (
    <>
      <Header />
      <SingleBannerSection title={"Not Found"} />{" "}
      <section className="not-found-section">
        <div className="section-content-fixed">
          <h1>Halaman Tidak Ditemukan</h1>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default EmptyPage;
