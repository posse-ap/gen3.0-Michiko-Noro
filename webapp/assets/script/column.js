'use strict';


var options = {
  series: [{
    data: [3, 4, 5, 3, 0, 0, 4, 2, 2, 8, 8, 2, 2, 1, 7, 4, 4, 3, 3, 3, 2, 2, 6, 2, 2, 1, 1, 1, 7, 8]
  }, {
  }],
  chart: {
    type: 'bar',
    height: 350,
    toolbar: {
      show: false,
    }

  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
      endingShape: 'rounded'
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: false,
    width: 2,
    colors: ['transparent']
  },
  xaxis: {
    categories: [' ','2',' ', '4',' ', '6',' ', '8',' ', '10',' ', '12',' ', '14',' ', '16',' ', '18',' ', '20',' ', '22',' ', '24',' ', '26',' ', '28',' ', '30'],
  },

  grid: {
    yaxis: {
      lines: {
        show: false
      }
    }
  },

  yaxis: {
    labels: {
      formatter: function (val) {
        return val + " h"
      }
    }
  },

  fill: {
    opacity: 1
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "$ " + val + " h"
      }

    }
  }
};

var chart = new ApexCharts(document.querySelector("#column"), options);
chart.render();