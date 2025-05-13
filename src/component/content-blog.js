const ContentBlogs = ({ title, image, content }) => {
  return (
    <>
      <div className="blog-content-wrapper">
        <div className="image-wrapper text-center">
          <img
            src={image}
            alt={title}
            className="blog-thumbnail mb-3 mx-auto"
          />
        </div>
        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </>
  );
};

export default ContentBlogs;
