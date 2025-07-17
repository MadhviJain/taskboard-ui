// Chart
const ctx = document.getElementById("taskChart").getContext("2d");
const taskChart = new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: ["Completed", "Pending"],
    datasets: [{
      label: "Tasks",
      data: [2, 3],
      backgroundColor: ["#26a69a", "#e0e0e0"],
      borderWidth: 0
    }]
  },
  options: {
    cutout: "70%",
    plugins: {
      legend: {
        position: 'bottom'
      }
    }
  }
});

// Theme Toggle
function toggleTheme() {
  document.body.classList.toggle("dark-mode");
}
