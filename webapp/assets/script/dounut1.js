'use strict';



var options = {
  labels: ["JavaScript", "CSS", "PHP", "HTML", "Laravel", "SQL", "SHELL", "情報システム基礎知識(その他)"],
  series: [30, 20, 10, 5, 5, 20, 20, 10],
  chart: {
  type: 'donut',
  height: 500,
},

legend: {
  position: 'bottom',
  fontSize: '15px',
  horizontalAlign: 'left',
},

responsive: [{
  breakpoint: 480,
  options: {
    chart: {
      width: 200
    },
    legend: {
      position: 'bottom',
      horizontalAlign: 'left',
    }
  }
}]
};

var chart = new ApexCharts(document.querySelector("#dounut1"), options);
chart.render();
