import { Header, Footer, SingleBannerSection } from "../../index";
import AddBlogSection from "../../component/section/dashboard/blog/add-blog-section";

const AddBlog = () => {
  return (
    <>
      <Header />
      <SingleBannerSection title={"Tambah Blog"} />
      <section className="add-blog-section">
        <div className="section-content-fixed">
          <AddBlogSection />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AddBlog;
