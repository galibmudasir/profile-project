import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const RenderBlogs = ({ data, message, onDelete }) => {
  if (data && data.length > 0) {
    return (
      <Table striped>
        <thead>
          <tr>
            <th>No</th>
            <th>Judul</th>
            <th>Author</th>
            <th>Tanggal Publish</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.title}</td>
                <td>{item.author}</td>
                <td>{item.date}</td>
                <td>
                  <div className="d-flex gap-2">
                    <Link
                      to={"/dashboard/blog/edit/" + item.id}
                      className="btn btn-info btn-sm"
                    >
                      <i className="fa fa-pencil"></i>
                    </Link>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => {
                        if (
                          window.confirm(
                            "Are you sure you want to delete this blog? "
                          )
                        ) {
                          onDelete(item.id);
                        }
                      }}
                    >
                      <i className="fa fa-trash"></i>
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  } else {
    return <div className="alert alert-warning">{message}</div>;
  }
};

const MainContentBlog = () => {
  const [error, setError] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/data-blog/all");
        if (response.ok) {
          const data = await response.json();
          setData(data.payload.datas); // Asumsi payload sudah ada
        } else {
          throw new Error("data gagal diambil");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false); // Pastikan setLoading(false) dijalankan
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/data-blog/delete/${id}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        setData((prevData) => prevData.filter((item) => item.id !== id));
        alert("Blog deleted successfully.");
      } else {
        throw new Error("Failed to delete the blog.");
      }
      console.log(response);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="main-content-blog">
      <h4 className="text-center">ini adalah main content Blog</h4>
      <Link to="/dashboard/blog/add" className="btn btn-sm btn-info mb-3">
        <i className="fa fa-plus me-2"></i> Tambahkan blog
      </Link>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div className="alert alert-danger">{error}</div>
      ) : (
        <RenderBlogs
          data={data}
          message="No blogs available"
          onDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default MainContentBlog;
