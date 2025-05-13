import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";

// re-export modules agar mudah di import
export { default as Header } from "./component/header.js";
export { default as Footer } from "./component/footer.js";
export { default as Main } from "./component/main.js";

//homepage section
export { default as BannerSection } from "./component/section/homepage/banner-section.js";
export { default as AboutSection } from "./component/section/homepage/about-section.js";
export { default as ProjectSection } from "./component/section/homepage/project-section.js";
export { default as SkillSection } from "./component/section/homepage/skill-section.js";
export { default as BlogSection } from "./component/section/homepage/blog-section.js";
export { default as ContactSection } from "./component/section/homepage/contact-section.js";
export { default as SingleBannerSection } from "./component/section/homepage/single-banner-section.js";
export { default as RiwayatSection } from "./component/section/tentang/riwayat-section.js";
export { default as PersonalSection } from "./component/section/tentang/personal-section.js";

// tentang page section
export { default as TentangSaya } from "./component/section/tentang/tentang-saya-section.js";

// images
export { default as BgSectionBanner } from "./assets/image/bg-section-banner.jpg";
export { default as IconSambutan1 } from "./assets/image/icon-sambutan-home.png";
export { default as IconProject } from "./assets/image/icon-project.png";
export { default as ProjectImage1 } from "./assets/image/project-1.jpg";
export { default as ProjectImage2 } from "./assets/image/project-2.jpg";
export { default as ProjectImage3 } from "./assets/image/project-3.jpg";
export { default as IconHtml } from "./assets/image/icon-html.png";
export { default as IconCss } from "./assets/image/icon-css.png";
export { default as IconJs } from "./assets/image/icon-js.png";
export { default as IconBootstrap } from "./assets/image/icon-bootstrap.png";
export { default as IconPhp } from "./assets/image/icon-php.png";
export { default as IconReact } from "./assets/image/icon-react.png";
export { default as IconWordpress } from "./assets/image/icon-wordpress.png";
export { default as BlogIcon1 } from "./assets/image/blog-icon-1.png";
export { default as BlogIcon2 } from "./assets/image/blog-icon-2.png";
export { default as TentangKamiImage1 } from "./assets/image/tentang-kami-image.jpg";
export { default as ImagePersonal } from "./assets/image/image-personal.jpg";

// animation
export { default as ProgramerAnimation } from "./assets/animation/programer.lottie";
export { default as ReactAnimation } from "./assets/animation/react-animation.lottie";
export { default as WordpressAnimation } from "./assets/animation/wordpress-animation.lottie";
export { default as HtmlAnimation } from "./assets/animation/html-animation.lottie";
export { default as CssAnimation } from "./assets/animation/css-animation.lottie";
export { default as JsAnimation } from "./assets/animation/js-animation.lottie";

// modules
export { default as ProjectCard } from "./component/modules/project-card.js";
export { default as ModeSwitcher } from "./component/modules/mode-switcher.js";
export { default as SkillTabs } from "./component/modules/skill-tabs.js";
export { default as Callout } from "./component/modules/callout.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
