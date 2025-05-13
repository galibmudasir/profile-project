const ContentBlog3 = () => {
  return (
    <article>
      <p>
        <strong>React</strong> adalah salah satu library JavaScript paling
        populer untuk pengembangan front-end saat ini. Saya saat ini sedang
        mempelajari React dan ingin berbagi beberapa tips yang saya temukan
        bermanfaat bagi pemula.
      </p>

      <h2>1. Mengapa React?</h2>
      <p>
        React populer karena pendekatannya yang berbasis komponen. Ini
        memungkinkan pengembang membangun aplikasi yang dapat di-maintain dan
        di-scale dengan lebih mudah. Komponen yang reusable memungkinkan Anda
        menggunakan kembali kode yang sama di berbagai bagian aplikasi.
      </p>

      <h2>2. Konsep Dasar React</h2>
      <p>
        Sebelum Anda mendalami React, penting untuk memahami beberapa konsep
        dasar:
      </p>

      <ul>
        <li>
          <strong>Komponen</strong>: Semua hal di React berbasis komponen. Anda
          bisa membuat komponen kecil yang modular dan reusable untuk membangun
          bagian-bagian aplikasi.
        </li>
        <pre>
          <code>{`function MyComponent() {
      return <h1>Hello, World!</h1>;
  }`}</code>
        </pre>

        <li>
          <strong>State dan Props</strong>: <strong>State</strong> memungkinkan
          Anda mengontrol data dinamis dalam komponen, sementara{" "}
          <strong>props</strong> digunakan untuk mengoper data antar komponen.
        </li>
        <pre>
          <code>{`function Greeting(props) {
      return <h1>Hello, {props.name}!</h1>;
  }`}</code>
        </pre>
      </ul>

      <h2>3. Memanfaatkan Hooks</h2>
      <p>
        Salah satu fitur penting dalam React adalah <strong>hooks</strong>, yang
        memungkinkan Anda menggunakan state dan fitur React lainnya tanpa harus
        menulis class. <strong>useState</strong> dan <strong>useEffect</strong>{" "}
        adalah dua hooks yang paling sering digunakan untuk mengelola state dan
        efek samping.
      </p>
      <pre>
        <code>{`import React, { useState } from 'react';
  
  function Counter() {
      const [count, setCount] = useState(0);
  
      return (
          <div>
              <p>You clicked {count} times</p>
              <button onClick={() => setCount(count + 1)}>Click me</button>
          </div>
      );
  }`}</code>
      </pre>

      <h2>4. Tantangan Belajar React</h2>
      <p>
        Belajar React bisa menjadi tantangan bagi pemula, terutama jika Anda
        belum familiar dengan konsep seperti JSX atau state management. Namun,
        dengan praktik yang konsisten dan pemahaman mendalam, React akan menjadi
        alat yang sangat powerful dalam pengembangan web.
      </p>
    </article>
  );
};

export default ContentBlog3;
