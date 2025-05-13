import blogs from "../../../assets/blog/blog";
import CardBlogs from "../../modules/blog-card";
import { useParallax } from "react-scroll-parallax";
import { Link } from "react-router-dom";

import { BlogIcon1, BlogIcon2 } from "../../../index";

const BlogSection = () => {
  const iconBlog1 = useParallax({
    scaleX: [1, 0, "easeInQuad"],
  });
  const iconBlog2 = useParallax({
    scaleX: [1, 0, "easeInQuad"],
  });
  return (
    <>
      <section className="blog-section">
        <div className="section-content-fixed">
          <div className="blog-section-content text-center">
            <h5 className="text-primary">Blog</h5>
            <h1 className="fw-bold mb-3">Berbagi Pengetahuan</h1>
            <div className="sub-title-section mb-4">
              <p>
                Lewat Blog ini anda akan menemukan artikel dan tutorial yang
                membahas pengalaman serta tips seputar pemrograman dan
                pengembangan web. Tujuan saya adalah untuk membagikan wawasan
                berharga yang dapat membantu Anda dalam perjalanan belajar di
                dunia digital. Selamat membaca!
              </p>
            </div>
            <div className="blog-content mt-4">
              <div className="row">
                {blogs.map((data) => (
                  <div className="col-md-4" key={data.id}>
                    <CardBlogs
                      image={data.image}
                      title={data.title}
                      author={data.author}
                      date={data.date}
                      excerpt={data.excerpt}
                      link={data.link}
                    />
                  </div>
                ))}
              </div>
              <div className="text-center mt-5">
                <Link
                  to="/blog"
                  className="py-3 px-5 bg-primary text-white text-decoration-none rounded"
                >
                  Selengkapnya
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="icon-blog-1">
          <div className="d-inline-block" ref={iconBlog1.ref}>
            <img src={BlogIcon1} width="125" alt="blog icon" />
          </div>
        </div>
        <div className="icon-blog-2">
          <div className="d-inline-block" ref={iconBlog2.ref}>
            <img src={BlogIcon2} width="125" alt="blog icon" />
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogSection;
