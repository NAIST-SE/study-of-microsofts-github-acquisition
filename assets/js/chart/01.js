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
  '1-1': {
    type: 'bar',
    question: 'Which of the roles best describe your main activities within the Linux (distributions or kernel) or BSD?',
    data: [
      ['Project Manager/Project Leader', 46],
      ['Core contributor', 63],
      ['Casual contributor', 149],
      ['User', 6],
      ['Others', 4]
    ]
  },
  // question1-2
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
  // question2-1
  '2-1': {
    type: 'column',
    data: [43,77,53,41,14,8],
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
            distance: -70,
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
                  style: style
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