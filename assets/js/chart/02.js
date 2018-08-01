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

var createPieLabel = function(label, data) {
  series = []
  for (let i=0; i<data.length; i++) {
    series[i] = {name: label[i], y:data[i]};
  }
  return series;
}

var config = {
  // question2-1
  '2-1': {
    type: 'column',
    data: [44,79,54,41,15,8],
    question: 'Which do you think the acquisition will be beneficial or detrimental to any of the projects that you contribute towards?',
    max: 80,
    label: benefitLabel
  },
  '2-2': {
    type: 'column',
    data: [24,119,58,21,5,12],
    question: 'Do you agree that the acquisition will trigger even more expansion of Free and Open Source contributors in GitHub?',
    label: agreeLabel,
    max: 150
  },
  '2-3': {
    type: 'column',
    data: [32,85,48,30,28,18],
    question: 'Do you agree that the acquisition will bring improvements in the reliability and services of GitHub platform?',
    label: agreeLabel,
    max: 100
  },
}

$(function() {
  $(document).ready(function() {
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
    var chart23 = new Highcharts.Chart('2-3', {
      chart: { type: config['2-3'].type },
      title: { text: config['2-3'].question },
      xAxis: xAxis,
      yAxis: yAxis(config['2-3'].max),
      legend: {
        enabled: false
      },
      tooltip: {
        pointFormat: '{point.y}</b>'
      },
      series: [{
        name: 'Population',
        data: createSeries(config['2-3'].label, config['2-3'].data),
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