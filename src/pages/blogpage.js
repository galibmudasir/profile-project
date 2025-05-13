import SingleBannerSection from "../component/section/homepage/single-banner-section";
import { Header, Footer } from "../index";
import BlogData from "../component/section/blog/blogdata";

const BlogPage = () => {
  return (
    <>
      <Header />
      <SingleBannerSection title={"Blog Page"} />
      <section className="blog-page-section">
        <div className="section-content-fixed">
          <div className="blog-section-content text-center">
            <div className="blog-content mt-4">
              <BlogData />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default BlogPage;
