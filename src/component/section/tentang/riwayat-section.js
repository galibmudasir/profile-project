import Timeline from "../../modules/riwayat-timeline";

const RiwayatSection = () => {
  return (
    <section className="riwayat-section">
      <div className="section-content-fixed">
        <h2 className="text-center mb-4">Riwayat Pendidikan</h2>
        <div className="text-center">
          Berikut adalah riwayat pendidikan saya yang telah membentuk dasar
          pengetahuan dan keterampilan yang saya miliki saat ini. Melalui
          pendidikan yang saya jalani, saya telah membangun pondasi yang kuat
          untuk terus berkembang dan berkontribusi di bidang pengembangan web
          dan teknologi.
        </div>
        <Timeline />
      </div>
    </section>
  );
};
export default RiwayatSection;
