'use strict';

var options = {
  labels: ["ドットインストール", "N予備校", "POSSE課題"],
  series: [40, 20, 40],
  chart: {
  type: 'donut',
  height: 500,
},

legend: {
  position: 'bottom',
  fontSize: '15px',
  horizontalAlign: 'left',
  textAlign: 'left'
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
      textAlign: 'left',
    }
  }
}]
};

var chart = new ApexCharts(document.querySelector("#dounut2"), options);
chart.render();