import React, { useState } from "react";

// import icon
import IconHtml from "../../assets/image/icon-html.png";
import IconCss from "../../assets/image/icon-css.png";
import IconJs from "../../assets/image/icon-js.png";
import IconBootstrap from "../../assets/image/icon-bootstrap.png";
import IconPhp from "../../assets/image/icon-php.png";
import IconReact from "../../assets/image/icon-react.png";
import IconWordpress from "../../assets/image/icon-wordpress.png";

//import dotlottie animation
import ReactAnimation from "../../assets/animation/react-animation.lottie";
import WordpressAnimation from "../../assets/animation/wordpress-animation.lottie";
import HtmlAnimation from "../../assets/animation/html-animation.lottie";
import CssAnimation from "../../assets/animation/css-animation.lottie";
import JsAnimation from "../../assets/animation/js-animation.lottie";

import { DotLottiePlayer } from "@dotlottie/react-player";

// tab content
const tabContent = [
  {
    name: "html",
    title: "Html",
    content:
      "<b>HTML (HyperText Markup Language)</b> adalah bahasa markup standar yang digunakan untuk membuat struktur dan konten halaman web.Dengan pemahaman yang baik tentang HTML, saya dapat merancang elemen-elemen dasar situs, seperti header, paragraf, gambar, tautan, dan formulir. Keahlian ini memungkinkan saya untuk menciptakan struktur yang jelas dan terorganisir, memastikan pengalaman pengguna yang baik serta memudahkan integrasi dengan CSS dan JavaScript untuk pengembangan web yang lebih dinamis.",
    icontype: "dotlottie",
    iconsrc: HtmlAnimation,
  },
  {
    name: "css",
    title: "Css",
    content:
      "<b>CSS (Cascading Style Sheets)</b> adalah bahasa yang digunakan untuk mendesain tampilan dan tata letak halaman web. Dengan CSS, saya dapat mengontrol visual elemen seperti warna, font, margin, padding, dan posisi. Pemahaman saya tentang CSS memungkinkan saya menciptakan tampilan yang responsif dan menarik, serta memastikan kompatibilitas dengan berbagai perangkat dan ukuran layar.",
    icontype: "dotlottie",
    iconsrc: CssAnimation,
  },
  {
    name: "javascript",
    title: "Javascript",
    content:
      "<b>JavaScript</b> adalah bahasa pemrograman yang memungkinkan pengembangan fitur interaktif pada halaman web. Saya menggunakan JavaScript untuk menangani fungsi-fungsi dinamis seperti manipulasi DOM, validasi form, dan pembuatan animasi. Dengan JavaScript, saya mampu meningkatkan pengalaman pengguna melalui fitur-fitur yang responsif dan interaktif.",
    icontype: "dotlottie",
    iconsrc: JsAnimation,
  },
  {
    name: "php",
    title: "Php",
    content:
      "<b>PHP</b> adalah bahasa pemrograman server-side yang digunakan untuk mengelola dan memproses data pada situs web dinamis. Saya menggunakan PHP untuk membangun backend yang efisien, seperti penanganan form, pengelolaan database, dan pemrosesan logika aplikasi. Keahlian saya dalam PHP memungkinkan saya mengembangkan aplikasi web yang kuat dan terhubung dengan basis data.",
    icontype: "image",
    iconsrc: IconPhp,
  },
  {
    name: "bootstrap",
    title: "Bootstrap",
    content:
      "<b>Bootstrap</b> adalah framework front-end yang memudahkan pembuatan tampilan web yang responsif dan modern. Dengan Bootstrap, saya mampu mempercepat pengembangan tampilan halaman dengan menggunakan komponen siap pakai seperti grid system, tombol, form, dan navigasi. Saya menguasai penggunaan komponen Bootstrap untuk menciptakan desain yang bersih dan responsif dengan lebih cepat dan efisien.",
    icontype: "image",
    iconsrc: IconBootstrap,
  },
  {
    name: "react",
    title: "React",
    content:
      "<b>React</b> adalah library JavaScript untuk membangun antarmuka pengguna (UI) yang dinamis dan efisien. Saat ini, saya sedang mempelajari React dan fokus pada pengembangan komponen-komponen reusable serta state management untuk membuat aplikasi yang interaktif dan scalable. React membantu saya untuk membangun aplikasi web modern dengan performa tinggi.",
    icontype: "dotlottie",
    iconsrc: ReactAnimation,
  },
  {
    name: "wordpress",
    title: "Wordpress",
    content:
      "<b>WordPress</b> adalah platform CMS (Content Management System) yang populer untuk pengembangan situs web. Dengan pengalaman satu tahun sebagai WordPress Developer, saya memiliki pemahaman mendalam tentang pembuatan dan kustomisasi tema, pengembangan plugin, serta optimasi performa situs. Keahlian saya memungkinkan saya untuk membuat situs web yang fungsional, mudah dikelola, dan sesuai kebutuhan pengguna.",
    icontype: "dotlottie",
    iconsrc: WordpressAnimation,
  },
];

// tab pane
const tabPane = [
  {
    name: "html",
    image: IconHtml,
    title: "Html",
  },
  {
    name: "css",
    image: IconCss,
    title: "Css",
  },
  {
    name: "javascript",
    image: IconJs,
    title: "Javascript",
  },
  {
    name: "php",
    image: IconPhp,
    title: "Php",
  },
  {
    name: "bootstrap",
    image: IconBootstrap,
    title: "Bootstrap",
  },
  {
    name: "react",
    image: IconReact,
    title: "React",
  },
  {
    name: "wordpress",
    image: IconWordpress,
    title: "Wordpress",
  },
];

const RenderIcon = (title, type, src) => {
  if (type && type === "dotlottie") {
    return (
      <DotLottiePlayer
        autoplay
        loop
        src={src}
        style={{ width: "200px", height: "200px" }}
      />
    );
  } else {
    return <img src={src} alt={title} width="200" />;
  }
};

const SkillTabs = () => {
  // State untuk mengontrol tab aktif
  const [activeTab, setActiveTab] = useState("html");

  return (
    <>
      {/* Tab Content */}
      <div className="tab-content skill-tab-content my-5">
        {tabContent.map((tabs) => (
          <div
            className={`tab-pane ${activeTab === tabs.name ? "active" : ""}`}
            id={tabs.name}
            role="tabpanel"
            aria-labelledby={`${tabs.name}-tab`}
            key={tabs.title}
          >
            <div className="row flex-md-row flex-column-reverse">
              <div className="col-md-6 mt-5 mt-md-0">
                <div className="skill-tabs-heading">
                  <h3 className="text-start mb-3">{tabs.title}</h3>
                </div>
                <div
                  className="skill-tabs-description html-description text-start"
                  dangerouslySetInnerHTML={{ __html: tabs.content }}
                ></div>
              </div>
              <div className="col-md-6 skill-tabs-icon-wrapper">
                <div className="icon-skill-tabs p-4 rounded shadow text-center d-flex justify-content-center">
                  {RenderIcon(
                    "Icon " + tabs.title,
                    tabs.icontype,
                    tabs.iconsrc
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tab pane */}
      <div
        className="nav nav-tabs skill-tab-pane border-0"
        id="myTab"
        role="tablist"
      >
        <div className="row justify-content-center">
          {tabPane.map((data) => (
            <div className="col-md-4 col-6 p-2" key={data.name}>
              <div className="nav-item border rounded" role="presentation">
                <button
                  className={`nav-link w-100 p-3 ${
                    activeTab === data.name ? "active" : ""
                  }`}
                  id={`${data.name}-tab`}
                  onClick={() => setActiveTab(data.name)}
                  type="button"
                  role="tab"
                  aria-controls={data.name}
                  aria-selected={activeTab === data.name}
                >
                  <div className="tabs-skill-image mb-3">
                    <img
                      src={data.image}
                      width="300"
                      alt={data.title}
                      className="skill-image w-100"
                    />{" "}
                  </div>
                  <div className="tabs-skill-title">{data.title}</div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SkillTabs;
