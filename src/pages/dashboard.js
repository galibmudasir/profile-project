import { Header, Footer, SingleBannerSection } from "../index";

import DashboardSidebar from "../component/section/dashboard/dashord-sidebar";
import MainContent from "../component/section/dashboard/main-content";

const DashboardPage = () => {
  return (
    <>
      <Header />
      <SingleBannerSection title={"Dashboard"} />

      <div className="row">
        <div className="col-md-3 sidebar-dashboard pe-0">
          <DashboardSidebar />
        </div>
        <div className="col-md-9">
          <MainContent />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default DashboardPage;
