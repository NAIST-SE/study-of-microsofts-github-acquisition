var responses = 241;

var themeColor = ['#2f7ed8', '#0d233a', '#8bbc21', '#910000', '#1aadce',
'#492970', '#f28f43', '#77a1e5', '#c42525', '#a6c96a'];
var redBlueColor = ['#0000FF','#FF0000','#00FF00'];

var agreeLabel = ['No opinion','Strongly disagree','Disagree','Neutral','Agree','Strongly agree']
var benefitLabel = ['No opinion','Very detrimental','Detrimental','Neutral','Beneficial','Very beneficial'];

var createSeries= function(label, data) {
  var series = [];
  for(var i = 0; i<data.length; i++) {
    series[i] = [label[i], data[i]]
  }
  return series;
};

var style = {
    fontSize: '16px',
    fontFamily: 'Helvetica'
};

var xAxis = {
  type: 'category',
  labels: {
    // rotation: -45,
    style: style
    }
  }

var yAxis = function(max=undefined) {
  return {
    min: 0,
    title: { text: 'Responses' },
    max :max
  }
}

var dataLabels = {
  enabled: true,
  color: '#FFFFFF',
  formatter: function(){
    var pcnt = (this.y / responses) * 100;
    return this.y + ' ('+ Highcharts.numberFormat(pcnt,1) + ')%';
  },
  y: 10, // 10 pixels down from the top
  style: style
}

var createPieLabel = function(label, data) {
  series = []
  for (let i=0; i<data.length; i++) {
    series[i] = {name: label[i], y:data[i]};
  }
  return series;
}

var config = {
  // question 1-1
  '1-2': {
    type: 'pie',
    question: 'Are you a fan of GitHub?',
    data: [
      { name: 'Yes', y: 150 }, 
      { name: 'No',  y: 89 }
    ]
  },
  '1-3': {
    type: 'column',
    data: [49,17,22,42,61,50],
    question: 'GitHub appeals to you as it grants access to over 27 million users in this community.',
    label: agreeLabel,
    max: 80
  },
  '1-4': {
    type: 'column',
    data: [16,13,23,49,82,58],
    question: 'GitHub has a set of useful functions (e.g., GitHub Page, Project Management) that every developer will benefit.',
    label: agreeLabel,
  },
  '1-5': {
    type: 'column',
    data: [56,63,45,36,24,17],
    question: 'GitHub does not implement my preferred functions or is missing other functions that I need as a developer.',
    label: agreeLabel,
  },
  '1-6': {
    type: 'column',
    data: [36,53,53,48,33,18],
    question: 'The GitHub platform is superior compared to similar platforms.',
    label: agreeLabel,
  },

}

$(function() {
  $(document).ready(function() {
    Highcharts.setOptions({
      colors: themeColor
    });

    Highcharts.setOptions({
      colors: redBlueColor
    });

    var chart12 = new Highcharts.Chart('1-2', {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: config['1-2'].type
      },
      title: { text: config['1-2'].question },
      tooltip: { pointFormat: '{point.y} ({point.percentage:.1f}%)</b>'},
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}: {point.y}</b> ({point.percentage:.1f} %)',
            style: style
          },
        }
      },
      series: [{
        name: 'Brands',
        colorByPoint: true,
        data: config['1-2'].data
      }]
    });

    Highcharts.setOptions({
      colors: themeColor
    });

    var chart13 = new Highcharts.Chart('1-3', {
      chart: { type: config['1-3'].type },
      title: { text: config['1-3'].question },
      xAxis: xAxis,
      yAxis: yAxis(config['1-3'].max),
      legend: {
        enabled: false
      },
      tooltip: {
        pointFormat: '{point.y}</b>'
      },
      series: [{
        name: 'Population',
        data: createSeries(config['1-3'].label, config['1-3'].data),
        dataLabels: dataLabels
      }]
    });

    var chart14 = new Highcharts.Chart('1-4', {
      chart: { type: config['1-4'].type },
      title: { text: config['1-4'].question },
      xAxis: xAxis,
      yAxis: yAxis(config['1-4'].max),
      legend: {
        enabled: false
      },
      tooltip: {
        pointFormat: '{point.y}</b>'
      },
      series: [{
        name: 'Population',
        data: createSeries(config['1-4'].label, config['1-4'].data),
        dataLabels: dataLabels
      }]
    });

    var chart15 = new Highcharts.Chart('1-5', {
      chart: { type: config['1-5'].type },
      title: { text: config['1-5'].question },
      xAxis: xAxis,
      yAxis: yAxis(config['1-5'].max),
      legend: {
        enabled: false
      },
      tooltip: {
        pointFormat: '{point.y}</b>'
      },
      series: [{
        name: 'Population',
        data: createSeries(config['1-5'].label, config['1-5'].data),
        dataLabels: dataLabels
      }]
    });

    var chart16 = new Highcharts.Chart('1-6', {
      chart: { type: config['1-6'].type },
      title: { text: config['1-6'].question },
      xAxis: xAxis,
      yAxis: yAxis(config['1-6'].max),
      legend: {
        enabled: false
      },
      tooltip: {
        pointFormat: '{point.y}</b>'
      },
      series: [{
        name: 'Population',
        data: createSeries(config['1-6'].label, config['1-6'].data),
        dataLabels: dataLabels
      }]
    });

  });
});