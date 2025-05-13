import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  LineElement,
} from "chart.js";

// Mendaftarkan elemen chart yang akan digunakan
ChartJS.register(
  CategoryScale, // Digunakan untuk sumbu kategori (x)
  LinearScale, // Digunakan untuk sumbu numerik (y)
  BarElement, // Elemen bar untuk bar chart
  Title, // Menambahkan title pada chart
  Tooltip, // Menambahkan tooltip
  Legend, // Menambahkan legenda
  ArcElement, // Elemen untuk pie dan doughnut chart
  LineElement // Elemen untuk line chart
);

const MainContentDashboard = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"], // Label sumbu X
    datasets: [
      {
        label: "Sales in 2025", // Label dataset
        data: [65, 59, 80, 81, 56, 55], // Data untuk masing-masing label
        backgroundColor: "rgba(75, 192, 192, 0.2)", // Warna bar
        borderColor: "rgba(75, 192, 192, 1)", // Warna border bar
        borderWidth: 1, // Ketebalan border
      },
    ],
  };

  const options = {
    responsive: true, // Membuat grafik responsif
    plugins: {
      title: {
        display: true,
        text: "Sales Chart", // Judul grafik
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `Value: ${tooltipItem.raw}`, // Format label tooltip
        },
      },
    },
  };

  return (
    <div>
      <h2>My Sales Chart</h2>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default MainContentDashboard;
