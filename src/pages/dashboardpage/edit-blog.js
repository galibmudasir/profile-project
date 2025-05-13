import { Header, Footer, SingleBannerSection } from "../../index";
import EditBlogSection from "../../component/section/dashboard/blog/edit-blog-section";

const EditBlog = () => {
  return (
    <>
      <Header />
      <SingleBannerSection title={"Edit Blog"} />
      <section className="edit-blog-section">
        <div className="section-content-fixed">
          <EditBlogSection />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default EditBlog;
