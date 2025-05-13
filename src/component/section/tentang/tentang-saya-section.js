import { TentangKamiImage1 } from "../../../index";

const TentangSaya = () => {
  return (
    <section className="tentang-page">
      <div className="section-content-fixed">
        <h2 className="text-center mb-4">Profil Saya</h2>
        <div className="row align-items-center mb-4">
          <div className="col-md-6">
            <div className="tentang-saya-text">
              <p>
                Saya lahir di Klaten pada 14 September 2005 dan memiliki minat
                besar di dunia teknologi, khususnya web development. Saya lebih
                suka belajar dan bekerja secara mandiri untuk bisa fokus dan
                mendalami materi. Selain itu, saya penggemar futsal—biasanya
                bermain sebagai kiper—dan terinspirasi oleh sosok rendah hati
                seperti Lionel Messi. Dengan mimpi mencapai financial freedom,
                saya bertekad meraihnya melalui karier di bidang teknologi dan
                keyakinan pada proses.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="tentang-saya-image">
              <img
                src={TentangKamiImage1}
                width="800"
                className="rounded w-100"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TentangSaya;
