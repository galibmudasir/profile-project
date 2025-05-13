import MainContentDashboard from "./main-content/main-content-dashboard";
import MainContentBlog from "./main-content/main-content-blog";

const MainContent = () => {
  return (
    <div className="main-content-wrapper p-md-5 p-0">
      <div className="main-content-inner">
        {/* <MainContentDashboard /> */}
        <MainContentBlog />
      </div>
    </div>
  );
};

export default MainContent;
