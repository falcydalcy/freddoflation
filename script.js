// HERO STATS
const first = freddoData[0];
const last = freddoData[freddoData.length - 1];

document.getElementById("currentPrice").textContent = `${last.price}p`;

const increase = last.price - first.price;
const percent = Math.round((increase / first.price) * 100);

document.getElementById("priceChange").textContent = `+${percent}%`;
document.getElementById("dataCount").textContent = freddoData.length;

// CHART
const ctx = document.getElementById("freddoChart");

new Chart(ctx, {
  type: "line",
  data: {
    labels: freddoData.map(d => d.year),
    datasets: [{
      label: "Price (pence)",
      data: freddoData.map(d => d.price),
      borderWidth: 3,
      tension: 0.3,
      borderColor: "#ff1493",
      backgroundColor: "rgba(255,20,147,0.15)",
      fill: true,
      pointRadius: 4
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: ctx => `${ctx.parsed.y}p`
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: value => `${value}p`
        }
      }
    }
  }
});
