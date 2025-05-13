const ContentBlog1 = () => {
  return (
    <article>
      <p>
        <strong>Bootstrap</strong> adalah salah satu framework front-end yang
        paling populer, digunakan untuk mempercepat proses desain web dengan
        memberikan komponen-komponen yang siap pakai. Dalam blog ini, saya akan
        berbagi panduan praktis tentang cara membuat website yang responsif
        menggunakan Bootstrap, serta manfaat utamanya.
      </p>

      <h2>Mengapa Bootstrap?</h2>
      <p>
        Bootstrap membantu pengembang untuk membuat website yang responsif
        dengan cepat, tanpa harus menulis banyak kode CSS dari awal. Framework
        ini menyediakan grid system yang fleksibel, berbagai komponen UI, dan
        responsivitas bawaan yang membuat website tampak baik di berbagai ukuran
        layar, dari desktop hingga mobile.
      </p>

      <h2>Langkah-Langkah Praktis Membuat Website Responsif</h2>

      <h3>1. Memahami Grid System Bootstrap</h3>
      <p>
        Grid system Bootstrap menggunakan sistem <strong>12 kolom</strong>,
        memungkinkan Anda untuk membagi halaman menjadi beberapa bagian sesuai
        kebutuhan. Misalnya, Anda bisa membuat tata letak yang terdiri dari 3
        kolom pada desktop dan menyusunnya secara vertikal pada perangkat
        mobile.
      </p>
      <pre>
        <code>
          &lt;div class="container"&gt; &lt;div class="row"&gt; &lt;div
          class="col-lg-4 col-md-6"&gt;Konten 1&lt;/div&gt; &lt;div
          class="col-lg-4 col-md-6"&gt;Konten 2&lt;/div&gt; &lt;div
          class="col-lg-4 col-md-12"&gt;Konten 3&lt;/div&gt; &lt;/div&gt;
          &lt;/div&gt;
        </code>
      </pre>

      <h3>2. Menggunakan Komponen Siap Pakai</h3>
      <p>
        Bootstrap menyediakan berbagai komponen yang bisa langsung digunakan,
        seperti <strong>navbar</strong>, <strong>buttons</strong>,{" "}
        <strong>form</strong>, dan <strong>carousel</strong>. Ini mempercepat
        pembuatan tampilan antarmuka tanpa perlu mengembangkan semuanya dari
        awal.
      </p>
      <pre>
        <code>
          &lt;button type="button" class="btn btn-primary"&gt;Button
          Bootstrap&lt;/button&gt;
        </code>
      </pre>

      <h3>3. Optimasi Responsivitas</h3>
      <p>
        Salah satu kekuatan utama Bootstrap adalah kemampuannya untuk secara
        otomatis menyesuaikan tampilan situs pada berbagai ukuran layar. Dengan
        sedikit penyesuaian pada grid system dan class CSS khusus seperti{" "}
        <code>col-md-</code>, <code>col-lg-</code>, Anda bisa memastikan website
        Anda terlihat baik di semua perangkat.
      </p>

      <h3>4. Studi Kasus: Menerapkan Bootstrap di Project 1</h3>
      <p>
        Dalam salah satu proyek saya, <strong>Project 1</strong>, saya
        menggunakan Bootstrap untuk memastikan tampilan web tetap responsif di
        berbagai ukuran layar. Grid system dan komponen siap pakai seperti form
        dan navigasi membantu saya mempercepat pengembangan antarmuka tanpa
        mengorbankan desain.
      </p>
    </article>
  );
};

export default ContentBlog1;
