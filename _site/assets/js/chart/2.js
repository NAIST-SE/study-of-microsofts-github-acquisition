var responses = 219;

var themeColor = ['#2f7ed8', '#0d233a', '#8bbc21', '#910000', '#1aadce',
'#492970', '#f28f43', '#77a1e5', '#c42525', '#a6c96a'];
var redBlueColor = ['#0000FF','#FF0000','#00FF00'];

var agreeLabel = ['No opinion','Strongly disagree','Disagree','Neutral','Agree','Strongly agree'];

var benefitLabel = ['No opinion','Very detrimental','Detrimental','Neutral','Beneficial','Very beneficial'];

var createSeries= function(label, data) {
  series = [];
  for(let i=0; i<data.length; i++) {
    series[i] = [label[i], data[i]]
  }
  return series;
};

var createPieLabel = function(label, data) {
  series = []
  for (let i=0; i<data.length; i++) {
    series[i] = {name: label[i], y:data[i]};
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
    type: 'column',
    data: [43,73,51,39,14,8],
    question: 'Which do you think the acquisition will be beneficial or detrimental to any of the projects that you contribute towards?',
    max: 80
  },
  // question 2
  {
    type: 'column',
    data: [22,107,57,18,5,10],
    question: 'Do you agree that the acquisition will trigger even more expansion of Free and Open Source contributors in GitHub?',
    max: 125
  },
  // question 3
  {
    type: 'column',
    data: [29,76,44,29,26,15],
    question: 'Do you agree that the acquisition will bring improvements in the reliability and services of GitHub platform?',
    max: 80
  },
  // question 4
  {
    type: 'column',
    data: [124,68,27],
    question: 'Which statement best describes your current situation with any of your contributed projects?',
    label: [ 'The projects that I contribute to the most is currently using GitHub (currently using GitHub)',
    'One of the projects that have made contributions has already left GitHub (used before but not now)',
    'All projects that I contribute to have never used GitHub (none of the above)'
    ]
  }

]
$(function() {
  $(document).ready(function() {
    Highcharts.setOptions({
      colors: themeColor
    });

    var chart21 = new Highcharts.Chart('2-1', {
      chart: { type: config[0].type },
      title: { text: config[0].question },
      xAxis: xAxis,
      yAxis: yAxis(config[0].max),
      legend: {
        enabled: false
      },
      tooltip: {
        pointFormat: '{point.y}</b>'
      },
      series: [{
        name: 'Population',
        data: createSeries(benefitLabel, config[0].data),
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
      chart: { type: config[1].type },
      title: { text: config[1].question },
      xAxis: xAxis,
      yAxis: yAxis(config[1].max),
      legend: {
        enabled: false
      },
      tooltip: {
        pointFormat: '{point.y}</b>'
      },
      series: [{
        name: 'Population',
        data: createSeries(agreeLabel, config[1].data),
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
      chart: { type: config[2].type },
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

    Highcharts.setOptions({
      colors: redBlueColor
    });
    Highcharts.chart('2-4', {
      chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
      },
      title: {
          text: config[3].question
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
          data: createPieLabel(config[3].label, config[3].data)
      }]
    });
  });
});