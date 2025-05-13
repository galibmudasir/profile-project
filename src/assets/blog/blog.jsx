// content
import ContentBlog1 from "./content/blog1";
import ContentBlog2 from "./content/blog2";
import ContentBlog3 from "./content/blog3";

// image
import BlogImage1 from "../image/blog-1-image.png";
import BlogImage2 from "../image/blog-2-image.png";
import BlogImage3 from "../image/blog-3-image.png";

const createSlug = (title) => {
  return (
    "blogs/" +
    title
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "")
  );
};

const blogs = [
  {
    id: 1,
    title: "Panduan Praktis: Membuat Website Responsif dengan Bootstrap",
    author: "Galib Mudasir",
    date: "29 September 2024",
    image: BlogImage1,
    link: createSlug(
      "Panduan Praktis: Membuat Website Responsif dengan Bootstrap"
    ),
    content: ContentBlog1,
    excerpt: `Bootstrap adalah salah satu framework front-end yang
        paling populer, digunakan untuk mempercepat proses desain web dengan
        memberikan komponen-komponen yang siap pakai. Dalam blog ini, saya akan
        berbagi panduan praktis tentang cara membuat website yang responsif
        menggunakan Bootstrap, serta manfaat utamanya.`,
  },
  {
    id: 2,
    title:
      "Pengalaman Menjadi WordPress Developer: Tips dan Trik Mengoptimalkan Situs",
    author: "Ibni Galib Mudasir",
    date: "29 September 2024",
    image: BlogImage2,
    link: createSlug(
      "Pengalaman Menjadi WordPress Developer: Tips dan Trik Mengoptimalkan Situs"
    ),
    content: ContentBlog2,
    excerpt: `Sebagai seorang WordPress Developer dengan satu tahun
        pengalaman, saya telah belajar banyak tentang cara mengoptimalkan
        performa situs WordPress. Di blog ini, saya akan membagikan beberapa
        tips dan trik untuk memastikan situs WordPress Anda bekerja dengan baik
        dan berjalan lancar.`,
  },
  {
    id: 3,
    title:
      "Belajar React: Tips Menguasai Library Frontend Populer untuk Pengembangan Web Modern",
    author: "Ibni Galib Mudasir",
    date: "29 September 2024",
    image: BlogImage3,
    link: createSlug(
      "Belajar React: Tips Menguasai Library Frontend Populer untuk Pengembangan Web Modern"
    ),
    content: ContentBlog3,
    excerpt: `React adalah salah satu library JavaScript paling populer untuk pengembangan front-end saat ini. Saya saat ini sedang mempelajari React dan ingin berbagi beberapa tips yang saya temukan bermanfaat bagi pemula.`,
  },
];

const blog = async () => {
  try {
    const response = await fetch("http://localhost:5000/api/data-blog");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    // setData(result.data);
    return result.payload.datas;
  } catch (err) {
    // setError(err.message);
    console.log(err);
  }
};

export default blogs;
