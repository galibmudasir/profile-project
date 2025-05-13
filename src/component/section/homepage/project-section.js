import { IconProject, ProjectCard } from "../../../index";
import { ProjectImage1, ProjectImage2, ProjectImage3 } from "../../../index";
import AnimatedDiv from "../../../assets/styles/animation";

const ProjectSection = () => {
  return (
    <section className="project-section">
      <div className="section-content-fixed">
        <div className="row mb-0 mb-md-4 align-items-center flex-column-reverse flex-md-row">
          <AnimatedDiv animation="fade-left" className="col-md-6">
            <h5 className="text-primary">Project</h5>
            <h1 className="fw-bold mb-3">Project Saya</h1>
            <div className="project-content">
              Dalam perjalanan karier dan pembelajaran saya, saya telah
              mengerjakan berbagai proyek yang membantu saya mengasah
              keterampilan teknis dan kreatif. Setiap proyek mencerminkan
              dedikasi saya terhadap pengembangan solusi yang efektif,
              fungsional, dan inovatif.
            </div>
          </AnimatedDiv>
          <AnimatedDiv animation="fade-right" className="col-md-6">
            <div className="text-center">
              <img src={IconProject} width={200} alt="Icon Project" />
            </div>
          </AnimatedDiv>
        </div>
        <AnimatedDiv animation="fade-up" className="row mt-4">
          <div className="col-md-4 project-card justify-content-center mt-4">
            <ProjectCard
              Image={ProjectImage1}
              Title="Project 1"
              Content="Project 1 adalah aplikasi web yang membantu pengguna mengelola waktu secara efisien dengan fitur penjadwalan tugas dan pengingat. Dikembangkan menggunakan HTML, CSS, JavaScript, dan Bootstrap untuk tampilan responsif."
              Link=""
            />
          </div>
          <div className="col-md-4 project-card mt-4">
            <ProjectCard
              Image={ProjectImage2}
              Title="Project 2"
              Content="Project 2 adalah platform berbasis web yang dirancang untuk mempermudah kolaborasi tim melalui fitur berbagi file dan komunikasi real-time. Dibuat dengan PHP, JavaScript, dan Bootstrap, platform ini memprioritaskan kemudahan penggunaan dan efisiensi."
              Link=""
            />
          </div>
          <div className="col-md-4 project-card mt-4">
            <ProjectCard
              Image={ProjectImage3}
              Title="Project 3"
              Content="Project 3 adalah situs e-commerce sederhana yang memungkinkan pengguna untuk menampilkan, mencari, dan membeli produk secara online. Dibangun dengan WordPress dan kustomisasi tema, situs ini memprioritaskan tampilan yang menarik dan kemudahan navigasi."
              Link=""
            />
          </div>
        </AnimatedDiv>
      </div>
    </section>
  );
};

export default ProjectSection;
