const timelineData = [
  {
    text: "Lulus dari Sekolah Dasar SD Negeri 2 Brangkal",
    date: "Tahun Angkatan 2015/2016",
    category: {
      tag: "Sekolah Dasar",
      color: "#FF0000",
    },
    link: {
      url: "https://maps.app.goo.gl/xt61fnLWu4vsqbxX9",
      text: "Selengkapnya Tentang SDN 2 Brangkal",
    },
  },
  {
    text: "Lulus dari Sekolah Menengah Pertama SMP Negeri 1 Wedi",
    date: "Tahun Angkatan 2019/2020",
    category: {
      tag: "Sekolah Menengah",
      color: "#003366",
    },
    link: {
      url: "https://smpn1wedi.sch.id/",
      text: "Selengkapnya tentang SMP Negeri 1 Wedi",
    },
  },
  {
    text: "Lulus Dari Sekolah Menenengah Kejuruan SMK Negeri 1 ROTA Bayat bidang studi Multimedia",
    date: "Tahun Angkatan 2022/2023",
    category: {
      tag: "Sekolah Kejuruan",
      color: "#1DA1F2",
    },
    link: {
      url: "https://smkn1-rotabayat.sch.id",
      text: "Lihat Lebih lengkap tentang SMKN 1 ROTA Bayat",
    },
  },
  {
    text: "Mulai Mempelajari lebih mendalam tentang pengembangan web mulai dari html, css, javascript",
    date: "2023",
    category: {
      tag: "",
      color: "",
    },
    link: {
      url: "http://localhost:3000/project",
      text: "Lihat beberapa project saya",
    },
  },
  {
    text: "Diterima di perusahaan Pembuatan Web, Velocity Developer",
    date: "2023",
    category: {
      tag: "Purna Sekolah",
      color: "#018f69",
    },
    link: {
      url: "https://velocitydeveloper.com",
      text: "Lebih lengkap tentang Velocity Developer",
    },
  },
];

const TimelineItem = ({ data }) => (
  <div className="timeline-item">
    <div className="timeline-item-content">
      <span className="tag" style={{ background: data.category.color }}>
        {data.category.tag}
      </span>
      <time>{data.date}</time>
      <p>{data.text}</p>
      {data.link && (
        <a href={data.link.url} target="_blank" rel="noopener noreferrer">
          {data.link.text}
        </a>
      )}
      <span className="circle" />
    </div>
  </div>
);

const Timeline = () =>
  timelineData.length > 0 && (
    <div className="timeline-container">
      {timelineData.map((data, idx) => (
        <TimelineItem data={data} key={idx} />
      ))}
    </div>
  );

export default Timeline;
