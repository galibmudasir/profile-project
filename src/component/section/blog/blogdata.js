import React, { useEffect, useState } from "react";
import CardBlogs from "../../modules/blog-card";

const BlogData = () => {
  const [data, setData] = useState([]); // State untuk menyimpan data
  const [loading, setLoading] = useState(true); // State untuk loading
  const [error, setError] = useState(null); // State untuk error handling

  useEffect(() => {
    // Fungsi fetch data
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/data-blog");
        if (!response.ok) {
          throw new Error("Data gagal diambil");
        }
        const result = await response.json();
        setData(result); // Simpan data ke state
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array berarti dijalankan sekali saat komponen mount

  // Loading state
  if (loading) return <p>Loading...</p>;

  // Error state
  if (error) return <p>Error: {error}</p>;

  const dataBlogs = data.payload.datas;
  console.log(dataBlogs);
  return (
    <div>
      <div className="row">
        {dataBlogs.map((item) => (
          <div className="col-sm-4 mx-auto" key={item.id}>
            <CardBlogs
              image={"http://localhost:3000" + item.image}
              title={item.title}
              excerpt={item.excerpt}
              link={"http://localhost:3000" + item.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogData;
