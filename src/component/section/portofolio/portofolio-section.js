import { ProjectCard } from "../../../index";

import ProjectImage1 from "../../../assets/image/project-1.jpg";
import ProjectImage2 from "../../../assets/image/project-2.jpg";
import ProjectImage3 from "../../../assets/image/project-3.jpg";

const ProjectList = [
  {
    Image: ProjectImage1,
    Title: "Project 1",
    Content:
      "Project 1 adalah aplikasi web yang membantu pengguna mengelola waktu secara efisien dengan fitur penjadwalan tugas dan pengingat. Dikembangkan menggunakan HTML, CSS, JavaScript, dan Bootstrap untuk tampilan responsif.",
    Link: "",
  },
  {
    Image: ProjectImage2,
    Title: "Project 2",
    Content:
      "Project 2 adalah platform berbasis web yang dirancang untuk mempermudah kolaborasi tim melalui fitur berbagi file dan komunikasi real-time. Dibuat dengan PHP, JavaScript, dan Bootstrap, platform ini memprioritaskan kemudahan penggunaan dan efisiensi.",
    Link: "",
  },
  {
    Image: ProjectImage3,
    Title: "Project 3",
    Content:
      "Project 3 adalah situs e-commerce sederhana yang memungkinkan pengguna untuk menampilkan, mencari, dan membeli produk secara online. Dibangun dengan WordPress dan kustomisasi tema, situs ini memprioritaskan tampilan yang menarik dan kemudahan navigasi.",
    Link: "",
  },
];
const PortofolioSectionPage = () => {
  return (
    <section className="tentang-page">
      <div className="section-content-fixed">
        <h2 className="text-center mb-5">Portofolio Saya</h2>
        <div className="row">
          {ProjectList.map((data, index) => (
            <div className="col-md-4" key={index}>
              <ProjectCard
                Image={data.Image}
                Title={data.Title}
                Content={data.Content}
                Link={data.Link}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortofolioSectionPage;
