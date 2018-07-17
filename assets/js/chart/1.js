var responses = 228;

var themeColor = ['#2f7ed8', '#0d233a', '#8bbc21', '#910000', '#1aadce',
'#492970', '#f28f43', '#77a1e5', '#c42525', '#a6c96a'];
var redBlueColor = ['blue','red'];

var agreeLabel = ['No opinion','Strongly disagree','Disagree','Neutral','Agree','Strongly agree']

var createSeries= function(label, data) {
  series = [];
  for(let i=0; i<data.length; i++) {
    series[i] = [label[i], data[i]]
  }
  return series;
};

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

var yAxis = function(max=undefined) {
  return {
    min: 0,
    title: { text: 'Responses' },
    max :max
  }
}

var config = [
  // question 1
  {
    type: 'bar',
    question: 'Which of the roles best describe your main activities within the Linux (distributions or kernel) or BSD?',
    data: [
      ['Project Manager/Project Leader', 41],
      ['Core contributor', 52],
      ['Casual contributor', 129],
      ['User', 5],
      ['administrator, integrator', 1],
      ['Tester', 1],
      ['I use it for my own computing/donate to projects who develop my distro.',1],
      ['Third party software developer',1],
      ['Independent open source developer', 1]
    ]
  },
  // question2
  {
    type: 'pie',
    question: 'Are you a fan of GitHub?',
    data: [
      { name: 'Yes', y: 142 }, 
      { name: 'No',  y: 84 }
    ]
  },
  // question3
  {
    type: 'column',
    question: 'GitHub appeals to you as it grants access to over 27 million users in this community.',
    data: [47,15,18,36,57,46],
  },
  // question 4 
  {
    type: 'column',
    question: 'GitHub has a set of useful functions (e.g., GitHub Page, Project Management) that every developer will benefit.',
    data: [15,10,23,44,74,53]
  },
  // question 5
  {
    type: 'column',
    question: 'GitHub does not implement my preferred functions or is missing other functions that I need as a developer.',
    data: [53,58,39,32,22,15],
    max :60
  },
  // question 6
  {
    type: 'column',
    question: 'The GitHub platform is superior compared to similar platforms.',
    data: [30,48,50,44,30,17],
    max :60
  }
]

$(function() {
  $(document).ready(function() {
    Highcharts.setOptions({
      colors: themeColor
    });

    var chart11 = new Highcharts.Chart('1-1', {
      chart: { type: config[0].type },
      title: { text: config[0].question },
      xAxis: xAxis,
      yAxis: yAxis(),
      legend: { enabled: false },
      tooltip: { pointFormat: '{point.y}' },
      series: [{
          name: 'Population',
          data: config[0].data,
          dataLabels: {
              enabled: true,
              // rotation: -90,
              color: '#FFFFFF',
              align: 'right',
              formatter: function() {
                  var percent =  100*config[0].data[this.x][1]/responses;
                  return config[0].data[this.x][1] + '  (' + Highcharts.numberFormat(percent, 1) + '%)'
              },
              style: style
          }
      }]
    });

    Highcharts.setOptions({
      colors: redBlueColor
    });

    var chart12 = new Highcharts.Chart('1-2', {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: config[1].type
      },
      title: { text: config[1].question },
      tooltip: { pointFormat: '{point.y} ({point.percentage:.1f}%)</b>'},
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}: {point.y}</b> ({point.percentage:.1f} %)',
          }
        }
      },
      series: [{
        name: 'Brands',
        colorByPoint: true,
        data: config[1].data
      }]
    });

    Highcharts.setOptions({
      colors: themeColor
    });
    var chart13 = new Highcharts.Chart('1-3', {
      chart: { type: 'column' },
      title: { text: config[2].question },
      xAxis: xAxis,
      yAxis: yAxis(),
      legend: {
        enabled: false
      },
      tooltip: {
        pointFormat: '{point.y}</b>'
      },
      series: [{
        name: 'Population',
        data: createSeries(agreeLabel, config[2].data),
        dataLabels: {
          enabled: true,
          color: '#FFFFFF',
          formatter: function(){
            var pcnt = (this.y / responses) * 100;
            return this.y + ' ('+ Highcharts.numberFormat(pcnt,1) + ')%';
    
          },
          y: 10, // 10 pixels down from the top
          style: style
        }
      }]
    });

    var chart14 = new Highcharts.Chart('1-4', {
      chart: { type: 'column' },
      title: { text: config[3].question },
      xAxis: xAxis,
      yAxis: yAxis(),
      legend: {
        enabled: false
      },
      tooltip: {
        pointFormat: '{point.y}</b>'
      },
      series: [{
        name: 'Population',
        data: createSeries(agreeLabel, config[3].data),
        dataLabels: {
          enabled: true,
          color: '#FFFFFF',
          formatter: function(){
            var pcnt = (this.y / responses) * 100;
            return this.y + ' ('+ Highcharts.numberFormat(pcnt,1) + ')%';
    
          },
          y: 10, // 10 pixels down from the top
          style: style
        }
      }]
    });

    var chart15 = new Highcharts.Chart('1-5', {
      chart: { type: config[4].type },
      title: { text: config[4].question },
      xAxis: xAxis,
      yAxis: yAxis(config[4].max),
      legend: {
        enabled: false
      },
      tooltip: {
        pointFormat: '{point.y}</b>'
      },
      series: [{
        name: 'Population',
        data: createSeries(agreeLabel, config[4].data),
        dataLabels: {
          enabled: true,
          color: '#FFFFFF',
          formatter: function(){
            var pcnt = (this.y / responses) * 100;
            return this.y + ' ('+ Highcharts.numberFormat(pcnt,1) + ')%';
    
          },
          y: 10, // 10 pixels down from the top
          style: style
        }
      }]
    });

    var chart16 = new Highcharts.Chart('1-6', {
      chart: { type: config[5].type },
      title: { text: config[5].question },
      xAxis: xAxis,
      yAxis: yAxis(config[5].max),
      legend: {
        enabled: false
      },
      tooltip: {
        pointFormat: '{point.y}</b>'
      },
      series: [{
        name: 'Population',
        data: createSeries(agreeLabel, config[5].data),
        dataLabels: {
          enabled: true,
          color: '#FFFFFF',
          formatter: function(){
            var pcnt = (this.y / responses) * 100;
            return this.y + ' ('+ Highcharts.numberFormat(pcnt,1) + ')%';
    
          },
          y: 10, // 10 pixels down from the top
          style: style
        }
      }]
    });

  });
});