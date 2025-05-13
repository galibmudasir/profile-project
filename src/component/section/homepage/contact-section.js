import Callout from "../../modules/callout";

const calloutContent = [
  {
    icon: "fas fa-map-marker-alt",
    title: "Alamat",
    content:
      "<a href='https://maps.app.goo.gl/vbK57qrydwcuStCC9' target='_blank'>Bayat, Melikan, Wedi, Klaten 57461</a>",
  },
  {
    icon: "fab fa-whatsapp",
    title: "Whatsapp",
    content:
      "<a href='https://wa.me/6285848106637?text=Hallo...' target='_blank'>0858 4810 6637</a>",
  },
  {
    icon: "far fa-envelope",
    title: "Email",
    content:
      "<a href='mailto:mudasirgalib5@gmail.com' target='_blank'>mudasirgalib5@gmail.com</a>",
  },
];
const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="section-content-fixed">
        <div className="section-wrapper text-center">
          <h5 className="text-primary">Kontak</h5>
          <h1 className="fw-bold mb-3">Kontak Saya</h1>
          <div className="row mt-5">
            {calloutContent.map((callout, index) => (
              <div className="col-md-4 mb-5 mb-md-0" key={index}>
                <Callout
                  icon={callout.icon}
                  title={callout.title}
                  content={callout.content}
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-5">
            <h2>Sosial Media</h2>
            <div className="d-flex justify-content-center gap-4 mt-4">
              <a
                className="d-block icon-social-media"
                href="https://instagram.com/galibmdsr_"
                target="_blank"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                className="d-block icon-social-media"
                href="https://twitter.com/"
                target="_blank"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a
                className="d-block icon-social-media"
                href="https://id.linkedin.com/"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a
                className="d-block icon-social-media"
                href="https://youtube.com/"
                target="_blank"
              >
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
