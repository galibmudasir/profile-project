import { useParams } from "react-router-dom";
import { Header, Footer } from "../index.js";
import { SingleBannerSection } from "../index.js";
import { ParallaxProvider } from "react-scroll-parallax";
import React, { useEffect, useState } from "react";
import ContentBlogs from "../component/content-blog.js";
import { useNavigate } from "react-router-dom";

const createSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");
};

const RenderBlogs = (blog) => {
  if (blog) {
    return (
      <div>
        <ContentBlogs
          title={blog.title}
          image={blog.image}
          content={blog.content}
        />
      </div>
    );
  }
};

const SingleBlog = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/data-blog");
        if (!response.ok) {
          throw new Error("Data gagal diambil");
        }
        const result = await response.json();

        const dataBlog = result ? result.payload.datas : result;

        // Cari blog berdasarkan slug
        const blogData = dataBlog.find((b) => createSlug(b.title) === slug);

        if (!blogData) {
          setTimeout(() => {
            navigate("/blog");
          }, 5000);
          throw new Error("Blog tidak ditemukan");
        }

        setBlog(blogData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);
  console.log(blog);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Header />
      <ParallaxProvider>
        <SingleBannerSection title={blog.title} />
      </ParallaxProvider>
      <section className="single-blog-section">
        <div className="section-content-fixed">{RenderBlogs(blog)}</div>
      </section>
      <Footer />
    </>
  );
};

export default SingleBlog;
