var themeColor = ['#2f7ed8', '#0d233a', '#8bbc21', '#910000', '#1aadce',
  '#492970', '#f28f43', '#77a1e5', '#c42525', '#a6c96a'
];
var redBlueColor = ['#0000FF', '#FF0000', '#00FF00'];

var agreeLabel = ['No opinion', 'Strongly disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly agree'];
var benefitLabel = ['No opinion', 'Very detrimental', 'Detrimental', 'Neutral', 'Beneficial', 'Very beneficial'];
var relateLabel = ['No opinion', 'No relation', 'Less relation', 'Neutral', 'Related', 'Strongly related'];
var effortLabel = ['No opinion', 'Almost no effort', 'Less effort', 'Neutral', 'Much effort', 'Strongly much effort']
var increaseLabel = ['No opinion', 'Largely decrease', 'Decrease', 'Neutral', 'Increase', 'Largely increase']

var createSeries = function (label, data) {
  series = [];
  for (let i = 0; i < data.length; i++) {
    series[i] = [label[i], data[i]]
  }
  return series;
};

var createPieLabel = function (label, data) {
  series = []
  for (let i = 0; i < data.length; i++) {
    series[i] = {
      name: label[i],
      y: data[i]
    };
  }
  return series;
}

var style = {
  fontSize: '13px',
  fontFamily: 'Helvetica'
};

var xAxis = {
  type: 'category',
  labels: {
    // rotation: -45,
    style: style
  }
}

var yAxis = function (max = undefined) {
  return {
    min: 0,
    title: {
      text: 'Responses'
    },
    max: max
  }
}

var config = {
  '2-4': {
    type: 'pie',
    data: [132, 74, 30],
    question: 'Which statement best describes your current situation with any of your contributed projects?',
    label: ['The projects that I contribute to the most is currently using GitHub (currently using GitHub)',
      'One of the projects that have made contributions has already left GitHub (used before but not now)',
      'All projects that I contribute to have never used GitHub (none of the above)'
    ]
  },
  '3-1': {
    type: 'column',
    data: [9, 46, 21, 19, 23, 17],
    question: 'Do you think it would be a good idea to move the project away from GitHub?',
    max: 50,
    label: agreeLabel
  },
  '3-2': {
    type: 'column',
    data: [21, 25, 30, 24, 24, 11],
    question: 'If the project will be moved away from GitHub to another platform, how much additional effort will be required to get accustomed to the new platform?',
    max: 50,
    label: effortLabel
  },
  '4-1': {
    type: 'column',
    data: [10, 3, 1, 4, 13, 44],
    question: 'How much do you think this decision to move away from GitHub was related to the acquisition? If no opinion, select 0.',
    max: 50,
    label: relateLabel
  },
  '4-2': {
    type: 'column',
    data: [7, 0, 6, 5, 8, 49],
    question: 'Do you agree with the decision to move the distribution away from GitHub?',
    max: 50,
    label: agreeLabel
  },
  '4-3': {
    type: 'column',
    data: [24, 12, 5, 19, 8, 7],
    question: 'Does moving away from GitHub affects your contributions to this project? If no opinion, select 0.',
    max: 25,
    label: increaseLabel
  },
  '4-4': {
    type: 'column',
    data: [14, 27, 18, 9, 7, 0],
    question: 'How much additional effort will be required to get accustomed to the new platform?',
    max: 25,
    label: effortLabel
  },
  '5-1': {
    type: 'column',
    data: [1, 25, 3, 1, 0, 1],
    question: 'Do you think it would be a good idea to move the project to GitHub? If no opinion, select 0.',
    max: 30,
    label: agreeLabel
  },
  '5-2': {
    type: 'column',
    data: [9, 5, 2, 0, 8, 7],
    question: 'If the distribution/kernel will be moved to GitHub, how much additional effort will be required to get accustomed to the new platform?',
    max: 10,
    label: effortLabel
  },
  '5-3': {
    type: 'pie',
    data: [17, 9],
    question: 'Apart from Linux and BSD contributions, have you had personal experiences with the GitHub Platform?',
    label: ['Yes, I contribute to other open source projects or have personal projects on GitHub.',
      'No, I have never contributed to projects hosted on GitHub.'
    ]
  }
}

var dataLabels = function (chart) {
  return {
    enabled: true,
    color: '#FFFFFF',
    formatter: function () {
      var pcnt = (this.y / config[chart].data.reduce((a, b) => a + b, 0)) * 100;
      return this.y + ' (' + Highcharts.numberFormat(pcnt, 1) + ')%';

    },
    y: 10, // 10 pixels down from the top
    style: style,
    allowOverlap: true
  }
}

$(function () {
  $(document).ready(function () {
    Highcharts.setOptions({
      colors: themeColor
    });

    var chart31 = new Highcharts.Chart('3-1', {
      chart: {
        type: config['3-1'].type
      },
      title: {
        text: config['3-1'].question
      },
      xAxis: xAxis,
      yAxis: yAxis(config['3-1'].max),
      legend: {
        enabled: false
      },
      tooltip: {
        pointFormat: '{point.y}</b>'
      },
      series: [{
        name: 'Population',
        data: createSeries(config['3-1'].label, config['3-1'].data),
        dataLabels: dataLabels('3-1')
      }]
    });

    var chart32 = new Highcharts.Chart('3-2', {
      chart: {
        type: config['3-2'].type
      },
      title: {
        text: config['3-2'].question
      },
      xAxis: xAxis,
      yAxis: yAxis(config['3-2'].max),
      legend: {
        enabled: false
      },
      tooltip: {
        pointFormat: '{point.y}</b>'
      },
      series: [{
        name: 'Population',
        data: createSeries(config['3-2'].label, config['3-2'].data),
        dataLabels: dataLabels('3-2')
      }]
    });

    var chart41 = new Highcharts.Chart('4-1', {
      chart: {
        type: config['4-1'].type
      },
      title: {
        text: config['4-1'].question
      },
      xAxis: xAxis,
      yAxis: yAxis(config['4-1'].max),
      legend: {
        enabled: false
      },
      tooltip: {
        pointFormat: '{point.y}</b>'
      },
      series: [{
        name: 'Population',
        data: createSeries(config['4-1'].label, config['4-1'].data),
        dataLabels: dataLabels('4-1')
      }]
    });

    var chart42 = new Highcharts.Chart('4-2', {
      chart: {
        type: config['4-2'].type
      },
      title: {
        text: config['4-2'].question
      },
      xAxis: xAxis,
      yAxis: yAxis(config['4-2'].max),
      legend: {
        enabled: false
      },
      tooltip: {
        pointFormat: '{point.y}</b>'
      },
      series: [{
        name: 'Population',
        data: createSeries(config['4-2'].label, config['4-2'].data),
        dataLabels: dataLabels('4-2')
      }]
    });

    var chart43 = new Highcharts.Chart('4-3', {
      chart: {
        type: config['4-3'].type
      },
      title: {
        text: config['4-3'].question
      },
      xAxis: xAxis,
      yAxis: yAxis(config['4-3'].max),
      legend: {
        enabled: false
      },
      tooltip: {
        pointFormat: '{point.y}</b>'
      },
      series: [{
        name: 'Population',
        data: createSeries(config['4-3'].label, config['4-3'].data),
        dataLabels: dataLabels('4-3')
      }]
    });

    var chart44 = new Highcharts.Chart('4-4', {
      chart: {
        type: config['4-4'].type
      },
      title: {
        text: config['4-4'].question
      },
      xAxis: xAxis,
      yAxis: yAxis(config['4-4'].max),
      legend: {
        enabled: false
      },
      tooltip: {
        pointFormat: '{point.y}</b>'
      },
      series: [{
        name: 'Population',
        data: createSeries(config['4-4'].label, config['4-4'].data),
        dataLabels: dataLabels('4-4')
      }]
    });

    var chart51 = new Highcharts.Chart('5-1', {
      chart: {
        type: config['5-1'].type
      },
      title: {
        text: config['5-1'].question
      },
      xAxis: xAxis,
      yAxis: yAxis(config['5-1'].max),
      legend: {
        enabled: false
      },
      tooltip: {
        pointFormat: '{point.y}</b>'
      },
      series: [{
        name: 'Population',
        data: createSeries(config['5-1'].label, config['5-1'].data),
        dataLabels: dataLabels('5-1'),
      }]
    });

    var chart52 = new Highcharts.Chart('5-2', {
      chart: {
        type: config['5-2'].type
      },
      title: {
        text: config['5-2'].question
      },
      xAxis: xAxis,
      yAxis: yAxis(config['5-2'].max),
      legend: {
        enabled: false
      },
      tooltip: {
        pointFormat: '{point.y}</b>'
      },
      series: [{
        name: 'Population',
        data: createSeries(config['5-2'].label, config['5-2'].data),
        dataLabels: dataLabels('5-2'),
      }]
    });

    Highcharts.setOptions({
      colors: redBlueColor
    });
    var chart53 = new Highcharts.Chart('5-3', {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: config['5-3'].type
      },
      title: {
        text: config['5-3'].question
      },
      tooltip: {
        pointFormat: '{point.y} ({point.percentage:.1f}%)</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            style: {
              fontSize: '16px',
              fontFamily: 'Helvetica'
            },
            enabled: true,
            format: '<b>{point.name}</b>: {point.y} ({point.percentage:.1f}%)',
            distance: -10,
          }
        }
      },
      series: [{
        name: 'Brands',
        colorByPoint: true,
        data: createPieLabel(config['5-3'].label, config['5-3'].data)
      }]
    });


    Highcharts.setOptions({
      colors: redBlueColor
    });

    var chart24 = new Highcharts.Chart('2-4', {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: config['2-4'].type
      },
      title: {
        text: config['2-4'].question
      },
      tooltip: {
        pointFormat: '{point.y} ({point.percentage:.1f}%)</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
            style: {
              fontSize: '16px',
              fontFamily: 'Helvetica'
            },
            distance: 0
          }
        }
      },
      series: [{
        name: 'Brands',
        colorByPoint: true,
        data: createPieLabel(config['2-4'].label, config['2-4'].data)
      }]
    });

  });
});