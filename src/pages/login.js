import { Header } from "../index";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogout = () => {
    localStorage.removeItem("token"); // Hapus token dari localStorage
    navigate("/login"); // Arahkan kembali ke halaman login
  };

  useEffect(() => {
    const fetchloggedin = async () => {
      const token = localStorage.getItem("token");

      try {
        const response = await fetch("http://localhost:5000/api/dashboard", {
          method: "GET",
          headers: { Authorization: token },
        });

        if (response.ok) {
          const data = await response.json();
          setUser(data.user); // Simpan data user
        } else {
          setUser("null"); // Redirect ke login jika token tidak valid
        }
      } catch (error) {
        setUser("null");
      }
    };

    fetchloggedin();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    try {
      const response = await fetch("http://localhost:5000/api/datauser/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(data.message); // Display success message
        localStorage.setItem("token", data.token); // Simpan token
        setTimeout(() => {
          navigate("/dashboard");
        }, 500);
      } else {
        setError(data.message); // Display error message
      }
    } catch (error) {
      setError("Something went wrong. Please try again later.");
    }
  };
  return (
    <>
      <Header />
      <section className="login-page">
        <div className="section-bg-overlay"></div>
        <div className="login-section-wrapper">
          <h3 className="text-center">Login</h3>
          {user === "null" && (
            <div className="my-3">
              <Form onSubmit={handleSubmit}>
                <Form.Floating className="mb-3" controlId="formBasicText">
                  <Form.Control
                    name="username"
                    type="text"
                    placeholder="Enter username"
                    value={formData.username}
                    onChange={handleChange}
                  />
                  <Form.Label>Username</Form.Label>
                </Form.Floating>

                <Form.Floating className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  <Form.Label>Password</Form.Label>
                </Form.Floating>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check
                    name="remember"
                    type="checkbox"
                    label="Remember me"
                    value={formData.remember_me}
                  />
                </Form.Group>
                <Button className="w-100" variant="primary" type="submit">
                  Submit
                </Button>
                {error && (
                  <div className="alert alert-danger mt-2">{error}</div>
                )}
                {success && (
                  <div className="alert alert-success mt-2">{success}</div>
                )}
              </Form>
            </div>
          )}
          {user !== "null" && (
            <div className="mb-3 text-center">
              <p className="mb-3">
                Anda sudah login dengan username {user.username}
              </p>
              <div className="d-md-flex gap-3 justify-content-center">
                <Link
                  to="/dashboard"
                  className="btn btn-primary d-block mb-3 mb-md-0"
                >
                  Kembali ke dashboard
                </Link>
                <Button
                  variant="danger"
                  className="d-block button-logout"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default LoginPage;
