import { Form } from "react-bootstrap";
import { Editor } from "@tinymce/tinymce-react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const AddBlogSection = () => {
  const navigate = useNavigate();

  const { blogId } = useParams();
  console.log(blogId);

  const [imagePreview, setImagePreview] = useState(null);
  const [content, setContent] = useState("");

  const [blogData, setBlogdata] = useState({
    title: "",
    content: "",
    excerpt: "",
    keyword: "",
    thumbnail: "",
    status: "",
    date: "",
  });

  const [erorr, setErorr] = useState("");
  const [success, setSuccess] = useState("");

  const handleImageChange = (event) => {
    if (!event || !event.target || !event.target.files) return; // Mencegah error
    const file = event.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmitBlog = async (e) => {
    e.preventDefault();
    setErorr("");
    setSuccess("");

    const formData = new FormData();
    formData.append("title", blogData.title);
    formData.append("content", blogData.content);
    formData.append("excerpt", blogData.excerpt);
    formData.append("keyword", blogData.keyword);
    formData.append("status", blogData.status);
    formData.append("date", blogData.date);
    formData.append("thumbnail", blogData.thumbnail); // Tambahkan file gambar

    console.log(formData);

    try {
      const response = await fetch("http://localhost:5000/api/data-blog/add", {
        method: "POST",
        body: formData, // Kirim FormData, bukan JSON
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(data.message); // Tampilkan pesan sukses
        setTimeout(() => {
          navigate("/dashboard");
        }, 2000);
      } else {
        setErorr(data.message); // Tampilkan pesan error
      }
    } catch (error) {
      setErorr("Something went wrong. Please try again later.");
    }
  };

  const handleChange = (e) => {
    setBlogdata({
      ...blogData,
      [e.target.name]: e.target.value,
      ["content"]: content,
    });
  };

  const handluUploadThumbnail = (e) => {
    setBlogdata({ ...blogData, ["thumbnail"]: e.target.files[0] });
  };

  return (
    <div className="add-blog-content">
      <Form onSubmit={handleSubmitBlog}>
        {success && <div className="alert alert-success">{success}</div>}
        {erorr && <div className="alert alert-danger">{erorr}</div>}

        <div className="row">
          <div className="col-12 mb-4">
            <Form.Group className="mb-3">
              <Form.Label className="h3">Judul</Form.Label>
              <Form.Control
                type="text"
                placeholder="Masukkan Judul"
                name="title"
                onChange={handleChange}
              />
            </Form.Group>
          </div>
          <div className="col-md-8">
            <Form.Group className="mb-3 h4">
              <Editor
                name="content"
                onEditorChange={(newValue) => setContent(newValue)}
                apiKey="4uhudb375xkahatvjk6ts901rs6vp6gcsmaiywjtnzlss33g"
                init={{
                  plugins: [
                    // Core editing features
                    "anchor",
                    "autolink",
                    "charmap",
                    "codesample",
                    "emoticons",
                    "image",
                    "link",
                    "lists",
                    "media",
                    "searchreplace",
                    "table",
                    "visualblocks",
                    "wordcount",
                  ],
                  toolbar:
                    "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
                  tinycomments_mode: "embedded",
                  tinycomments_author: "Author name",
                  mergetags_list: [
                    { value: "First.Name", title: "First Name" },
                    { value: "Email", title: "Email" },
                  ],
                  ai_request: (request, respondWith) =>
                    respondWith.string(() =>
                      Promise.reject("See docs to implement AI Assistant")
                    ),
                }}
                initialValue=""
              />
            </Form.Group>
            <div className="my-3 rounded shadow p-3">
              <div className="mb-4">
                <Form.Group>
                  <Form.Label className="mb-3 h5">Excerpt Deskripsi</Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="Deskripsi"
                    name="excerpt"
                    onChange={handleChange}
                    style={{ height: "100px" }}
                  />
                </Form.Group>
              </div>
              <div className="mb-4">
                <Form.Group>
                  <Form.Label className="mb-3 h5">Keyword</Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="Keyword"
                    name="keyword"
                    style={{ height: "70px" }}
                    onChange={handleChange}
                  />
                </Form.Group>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="sidebar-wrapper px-2">
              <div className="blog-thumbnail mb-4 shadow rounded p-3">
                <Form.Group>
                  <Form.Label className="mb-3 h5">Thumbnail</Form.Label>

                  {/* Kotak Upload */}
                  <div
                    className="upload-box"
                    style={{
                      width: "250px",
                      height: "250px",
                      border: "2px dashed #ddd",
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      overflow: "hidden",
                      background: "#f8f9fa",
                      cursor: "pointer",
                      position: "relative",
                    }}
                    onClick={() => document.getElementById("fileInput").click()}
                  >
                    {imagePreview ? (
                      <img
                        src={imagePreview}
                        alt="Thumbnail Preview"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          borderRadius: "12px",
                        }}
                      />
                    ) : (
                      <>
                        <div className="m-2">
                          <i className="fa fa-upload text-dark"></i>
                        </div>
                        <div className="text-center text-dark">
                          Upload image
                        </div>
                      </>
                    )}
                  </div>

                  {/* Input File */}
                  <Form.Control
                    id="fileInput"
                    type="file"
                    name="thumbnail"
                    // onChange={handleImageChange}
                    onChange={(event) => {
                      handleImageChange(event);
                      handluUploadThumbnail(event);
                    }}
                    style={{ display: "none" }}
                  />
                </Form.Group>
              </div>
              <div className="blog-status mb-4 shadow rounded p-3">
                <Form.Group className="mb-3">
                  <Form.Label className="mb-3 h5">Status</Form.Label>
                  <Form.Select name="status" onChange={handleChange}>
                    <option value="pending">Pending</option>
                    <option value="publish">Publish</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Label className="mb-3 h5">Tanggal Upload</Form.Label>
                  <Form.Control
                    type="date"
                    name="date"
                    onChange={handleChange}
                  ></Form.Control>
                </Form.Group>
                <div className="text-center">
                  <button type="subbmit" className="btn btn-primary">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default AddBlogSection;
