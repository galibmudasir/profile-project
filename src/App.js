import "./assets/styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css"; // import bootstrap
import "@dotlottie/player-component"; // Mengimpor dotlottie player
import { Routes, Route } from "react-router-dom";
import GlobalAnimationHandler from "./assets/styles/animation";

import { useLocation } from "react-router-dom";

import ScrollToTop from "./services/scrolltop";

//pages
import Homepage from "./pages/homepage";
import SingleBlog from "./pages/single-blog";
import EmptyPage from "./pages/404";
import TentangPage from "./pages/tentang";
import PortofolioPage from "./pages/portofolio";
import ContactPage from "./pages/kontak";
import BlogPage from "./pages/blogpage";
import LoginPage from "./pages/login";
import DashboardPage from "./pages/dashboard";
import AddBlog from "./pages/dashboardpage/add-blog";
import EditBlog from "./pages/dashboardpage/edit-blog";

//service
import DashboardValidation from "./component/section/dashboard/dashboardvalidation";

import { AnimatePresence, motion } from "framer-motion";

function App() {
  const location = useLocation(); // Dapatkan lokasi saat ini

  return (
    <AnimatePresence mode="wait">
      <ScrollToTop />
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageWrapper>
              <Homepage />
            </PageWrapper>
          }
        />
        <Route
          path="/tentang"
          element={
            <PageWrapper>
              <TentangPage />
            </PageWrapper>
          }
        />
        <Route
          path="/portofolio"
          element={
            <PageWrapper>
              <PortofolioPage />
            </PageWrapper>
          }
        />
        <Route
          path="/blog"
          element={
            <PageWrapper>
              <BlogPage />
            </PageWrapper>
          }
        />
        <Route
          path="/kontak"
          element={
            <PageWrapper>
              <ContactPage />
            </PageWrapper>
          }
        />
        <Route
          path="/login"
          element={
            <PageWrapper>
              <LoginPage />
            </PageWrapper>
          }
        />
        <Route path="/dashboard" element={<DashboardValidation />}>
          <Route
            index
            element={
              <PageWrapper>
                <DashboardPage />
              </PageWrapper>
            }
          />
          <Route
            path="blog/add"
            element={
              <PageWrapper>
                <AddBlog />
              </PageWrapper>
            }
          />
          <Route
            path="blog/edit/:blogId"
            element={
              <PageWrapper>
                <EditBlog />
              </PageWrapper>
            }
          />
        </Route>

        <Route
          path="*"
          element={
            <PageWrapper>
              <EmptyPage />
            </PageWrapper>
          }
        />

        <Route
          path="/blog/:slug"
          element={
            <PageWrapper>
              <SingleBlog />
            </PageWrapper>
          }
        />
      </Routes>
      {/* </Router> */}
    </AnimatePresence>
  );
}

export default App;

const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};
