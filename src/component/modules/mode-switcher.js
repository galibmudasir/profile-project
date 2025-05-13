import React, { useEffect, useState } from "react";

const storageKey = "theme-preference";

const ModeSwitcher = ({ model }) => {
  // Mendapatkan preferensi warna dari local storage atau dari preferensi sistem
  const getColorPreference = () => {
    const storedTheme = localStorage.getItem(storageKey);
    if (storedTheme) return storedTheme;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };

  const [theme, setTheme] = useState(getColorPreference());

  // Menerapkan tema ke elemen
  const reflectPreference = () => {
    document.firstElementChild.setAttribute("data-bs-theme", theme);
  };

  // Mengatur tema ketika komponen dimuat
  useEffect(() => {
    reflectPreference();
  }, [theme]);

  // Mengubah tema saat tombol diklik
  const onClick = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem(storageKey, newTheme); // Simpan tema baru
    reflectPreference(); // Panggil fungsi ini untuk menerapkan tema baru
  };

  // Sinkronisasi dengan perubahan sistem
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = ({ matches }) => {
      setTheme(matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return (
    <button
      onClick={onClick}
      className="theme-toggle btn"
      id="theme-toggle"
      title="Toggles light & dark"
      aria-label="auto"
      aria-live="polite"
    >
      <svg
        className="sun-and-moon"
        aria-hidden="true"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <mask className="moon" id={`moon-mask-${model}`}>
          <rect x="0" y="0" width="100%" height="100%" fill="white" />
          <circle cx="24" cy="10" r="6" fill="black" />
        </mask>
        <circle
          className="sun"
          cx="12"
          cy="12"
          r="6"
          mask={`url(#moon-mask-${model})`}
          fill="currentColor"
        />
        <g className="sun-beams" stroke="currentColor">
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </g>
      </svg>
    </button>
  );
};

export default ModeSwitcher;
