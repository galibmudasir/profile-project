import { useState, useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";

const DashboardValidation = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDashboard = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
        return;
      }

      try {
        const response = await fetch("http://localhost:5000/api/dashboard", {
          method: "GET",
          headers: { Authorization: token }, // Tambahkan Bearer
        });

        if (response.ok) {
          const data = await response.json();
          setUser(data.user);
        } else {
          navigate("/login");
        }
      } catch (error) {
        console.error("Error:", error);
        navigate("/login");
      }
    };

    fetchDashboard();
  }, [navigate]);

  if (!user) {
    return <p>Loading...</p>;
  }

  return <Outlet />; // Agar child routes bisa dirender
};

export default DashboardValidation;
