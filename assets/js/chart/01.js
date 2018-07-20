var responses = 236;

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

var createPieLabel = function(label, data) {
  series = []
  for (let i=0; i<data.length; i++) {
    series[i] = {name: label[i], y:data[i]};
  }
  return series;
}

var config = {
  // question 1-1
  '1-1': {
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
  // question1-2
  '1-2': {
    type: 'pie',
    question: 'Are you a fan of GitHub?',
    data: [
      { name: 'Yes', y: 148 }, 
      { name: 'No',  y: 88 }
    ]
  },
  // question2-1
  '2-1': {
    type: 'column',
    data: [43,777,53,41,14,8],
    question: 'Which do you think the acquisition will be beneficial or detrimental to any of the projects that you contribute towards?',
    max: 80,
    label: benefitLabel
  },
  '2-2': {
    type: 'column',
    data: [24,116,58,21,5,12],
    question: 'Do you agree that the acquisition will trigger even more expansion of Free and Open Source contributors in GitHub?',
    label: agreeLabel,
    max: 150
  },
  // question 2-4
  '2-4': {
    type: 'pie',
    data: [132,74,30],
    question: 'Which statement best describes your current situation with any of your contributed projects?',
    label: [ 'The projects that I contribute to the most is currently using GitHub (currently using GitHub)',
    'One of the projects that have made contributions has already left GitHub (used before but not now)',
    'All projects that I contribute to have never used GitHub (none of the above)'
    ]
  }
}

$(function() {
  $(document).ready(function() {
    Highcharts.setOptions({
      colors: themeColor
    });

    var chart11 = new Highcharts.Chart('1-1', {
      chart: { type: config['1-1'].type },
      title: { text: config['1-1'].question },
      xAxis: xAxis,
      yAxis: yAxis(),
      legend: { enabled: false },
      tooltip: { pointFormat: '{point.y}' },
      series: [{
          name: 'Population',
          data: config['1-1'].data,
          dataLabels: {
              enabled: true,
              // rotation: -90,
              color: '#FFFFFF',
              align: 'right',
              formatter: function() {
                  var percent =  100*config['1-1'].data[this.x][1]/responses;
                  return config['1-1'].data[this.x][1] + '  (' + Highcharts.numberFormat(percent, 1) + '%)'
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
          }
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

    var chart21 = new Highcharts.Chart('2-1', {
      chart: { type: config['2-1'].type },
      title: { text: config['2-1'].question },
      xAxis: xAxis,
      yAxis: yAxis(config['2-1'].max),
      legend: {
        enabled: false
      },
      tooltip: {
        pointFormat: '{point.y}</b>'
      },
      series: [{
        name: 'Population',
        data: createSeries(config['2-1'].label, config['2-1'].data),
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

    var chart22 = new Highcharts.Chart('2-2', {
      chart: { type: config['2-2'].type },
      title: { text: config['2-2'].question },
      xAxis: xAxis,
      yAxis: yAxis(config['2-2'].max),
      legend: {
        enabled: false
      },
      tooltip: {
        pointFormat: '{point.y}</b>'
      },
      series: [{
        name: 'Population',
        data: createSeries(config['2-2'].label, config['2-2'].data),
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