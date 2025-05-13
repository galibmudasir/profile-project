import Accordion from "react-bootstrap/Accordion";
import ImagePersonal from "../../../assets/image/image-personal.jpg";
import Ratio from "react-bootstrap/Ratio";

const AccordionKanan = [
  {
    title: "Tempat dan tanggal lahir",
    content:
      "Saya lahir di kota Klaten, Jawa Tengah, pada 14 September 2005. Kota kecil yang penuh dengan kehangatan dan keindahan alam ini menjadi tempat awal perjalanan hidup saya. Dari sinilah, saya mulai mengenal dunia, belajar, dan mengejar mimpi-mimpi yang membawa saya ke dunia teknologi yang kini saya tekuni.",
  },
  {
    title: "Hobi dan Minat",
    content:
      "Saya punya hobi olahraga, dan salah satu yang paling seru buat saya adalah futsal! Rasanya nggak ada yang lebih menyenangkan daripada kumpul bareng teman-teman di lapangan. Selain itu, saya juga sangat tertarik pada dunia web development. Bagi saya, merancang dan mengembangkan sebuah website itu seperti membangun sesuatu dari nol, menantang tapi juga seru banget! Kombinasi hobi yang aktif dan minat yang kreatif ini benar-benar bikin hari-hari saya lebih berwarna.",
  },
  {
    title: "Fakta Unik Tentang Saya",
    content:
      "Saya punya beberapa fakta unik nih! Pertama, saya penggemar berat orek tempe—rasanya yang khas benar-benar bikin nagih. Kalau soal film, saya nggak pernah bosan nonton seri Harry Potter, dunia sihirnya selalu bikin saya terpukau. Suatu saat nanti, saya pengen banget traveling ke Swiss atau Jepang; dua negara ini punya pemandangan dan budaya yang luar biasa. Oh iya, ada satu hal lucu juga—saya gampang banget cegukan kalau makan makanan pedas.",
  },
  {
    title: "Nilai atau Prinsip Hidup",
    content:
      "Prinsip hidup saya simpel tapi penting: Lakukan apa yang bisa kamu lakukan hari ini, kalau tidak, besok kamu harus kerja dua kali lebih keras. Prinsip ini mengingatkan saya untuk selalu bergerak maju dan memanfaatkan waktu sebaik mungkin. Dengan begitu, saya bisa menjaga ritme dan nggak merasa kewalahan di kemudian hari. Buat saya, disiplin kecil sehari-hari ini justru jadi fondasi buat mencapai hal-hal besar ke depannya.",
  },
];

const AccordionKiri = [
  {
    title: "Gaya Belajar atau Bekerja",
    content:
      "Gaya belajar saya cenderung tenang dan mandiri. Saya lebih suka menyerap materi dengan waktu dan cara saya sendiri. Kalau ada hal yang belum jelas, baru deh saya mulai bertanya. Dalam bekerja pun, saya merasa paling produktif ketika bisa fokus pada job desk saya sendiri. Dengan begitu, saya bisa lebih maksimal dan teliti dalam setiap tugas yang saya kerjakan.",
  },
  {
    title: "Inspirasi dan Motivasi",
    content:
      "Inspirasi saya adalah Lionel Messi. Dia adalah contoh nyata dari seorang yang tetap rendah hati meskipun dikenal sebagai salah satu pesepakbola terbaik di dunia. Bagi saya, sikap rendah hatinya justru menambah kekuatan dalam pencapaiannya. Saya ingin bisa seperti dia—tetap membumi, bekerja keras, dan fokus mencapai tujuan tanpa kehilangan jati diri.",
  },
  {
    title: "Cita-Cita atau Mimpi Besar",
    content:
      "Cita-cita terbesar saya adalah mencapai financial freedom, di mana saya nggak perlu khawatir saat butuh uang dan bisa menjalani hidup dengan lebih bebas. Saya percaya bahwa dunia teknologi punya banyak peluang untuk mewujudkan impian ini, dan itulah yang mendorong saya untuk mendalaminya. Dengan terus belajar dan berkembang di bidang ini, saya berharap langkah-langkah saya bisa membawa saya semakin dekat pada tujuan besar ini.",
  },
  {
    title: "Quotes Favorit",
    content:
      'Quotes favorit saya datang dari Mykhailo Mudryk, pesepakbola Chelsea dan timnas Ukraina: "Jam manusia selalu terburu-buru, namun jam Tuhan selalu tepat waktu." Kalimat ini mengingatkan saya untuk selalu bersabar dan percaya pada proses. Terkadang, kita merasa harus cepat mencapai sesuatu, tetapi ada hikmah dalam setiap langkah yang diatur oleh waktu yang tepat. Bagi saya, quotes ini memberikan ketenangan sekaligus motivasi untuk terus berusaha tanpa kehilangan keyakinan.',
  },
];

const PersonalSection = () => {
  return (
    <section className="riwayat-section">
      <div className="section-content-fixed mb-5">
        <h2 className="text-center mb-4">Lebih Dekat dengan Saya</h2>
        <div className="text-center mb-5">
          Selamat datang di bagian yang lebih personal dari saya. Di sini, saya
          ingin berbagi lebih banyak tentang siapa saya di luar dunia teknologi
          dan pemrograman. Mulai dari hobi, minat, hingga hal-hal yang saya
          sukai dalam kehidupan sehari-hari, setiap bagian ini memberikan
          gambaran tentang apa yang menginspirasi dan membentuk diri saya.
        </div>
        <div className="row">
          <div className="col-md-4 pe-md-0">
            <Accordion>
              {AccordionKanan.map((AccorKanan, index) => (
                <>
                  <Accordion.Item key={"accorkanan" + index} eventKey={index}>
                    <Accordion.Header>{AccorKanan.title}</Accordion.Header>
                    <Accordion.Body>{AccorKanan.content}</Accordion.Body>
                  </Accordion.Item>
                </>
              ))}
            </Accordion>
          </div>
          <div className="col-md-4 px-3">
            <img src={ImagePersonal} className="w-100 rounded personal-image" />
          </div>
          <div className="col-md-4 ps-md-0">
            <Accordion>
              {AccordionKiri.map((AccorKiri, index) => (
                <>
                  <Accordion.Item key={index} eventKey={index}>
                    <Accordion.Header>{AccorKiri.title}</Accordion.Header>
                    <Accordion.Body>{AccorKiri.content}</Accordion.Body>
                  </Accordion.Item>
                </>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalSection;
