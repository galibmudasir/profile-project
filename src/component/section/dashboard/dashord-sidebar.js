import { useState, useEffect } from "react";
import ProfileImage from "../../../assets/image/profile.png";
import { ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const DashboardSidebar = () => {
  const navigate = useNavigate();

  const { users, setsUser } = useState(null);

  // fetching datauser
  useEffect(() => {
    const fetchDashboard = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login"); // Redirect ke login jika tidak ada token
        return;
      }

      try {
        const response = await fetch("http://localhost:5000/api/dashboard", {
          method: "GET",
          headers: { Authorization: token },
        });

        if (response.ok) {
          const data = await response.json();
          setsUser(data.user); // Simpan data user
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchDashboard();
  }, []);

  // handle logout
  const handleLogout = () => {
    localStorage.removeItem("token"); // Hapus token dari localStorage
    navigate("/login"); // Arahkan kembali ke halaman login
  };
  return (
    <>
      <div className="px-3 py-5">
        <div className="text-center">
          <img
            src={ProfileImage}
            width={75}
            height={75}
            className="profile-image mb-3"
          />
          <p className="fw-bold">
            {users ? (
              <span>Selamat datang, {users.username}!</span>
            ) : (
              <span>Loading...</span>
            )}
          </p>
        </div>
      </div>
      <div className="sidebar-right-menu">
        <ListGroup variant="flush" className="bg-transparent">
          <ListGroup.Item className="py-3">Dashboard</ListGroup.Item>
          <ListGroup.Item className="py-3">Blog</ListGroup.Item>
          <ListGroup.Item className="py-3">Project</ListGroup.Item>
          <ListGroup.Item className="py-3">User</ListGroup.Item>
          <ListGroup.Item className="py-3 logout-button" onClick={handleLogout}>
            Logout
          </ListGroup.Item>
        </ListGroup>
      </div>
    </>
  );
};

export default DashboardSidebar;
