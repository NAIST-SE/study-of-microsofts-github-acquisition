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

var config = {
  '3-1': {
    type: 'column',
    data: [8,44,21,18,21,15],
    question: 'Do you think it would be a good idea to move the project away from GitHub?',
    max: 50
  },
  '4-1': {
    type: 'column',
    data: [9,3,1,4,13,42],
    question: 'How much do you think this decision to move away from GitHub was related to the acquisition? If no opinion, select 0.',
    max: 50
  },
  '5-1': {
    type: 'column',
    data: [1,24,3,1,0,0],
    question: 'Do you think it would be a good idea to move the project to GitHub? If no opinion, select 0.',
    max: 25
  },
  '5-3': {
    type: 'pie',
    data: [19,10],
    question: 'Apart from Linux and BSD contributions, have you had personal experiences with the GitHub Platform?',
    label: [ 'Yes, I contribute to other open source projects or have personal projects on GitHub.',
    'No, I have never contributed to projects hosted on GitHub.'
    ]
  }
}

$(function() {
  $(document).ready(function() {
    Highcharts.setOptions({
      colors: themeColor
    });

    var chart31 = new Highcharts.Chart('3-1', {
      chart: { type: config['3-1'].type },
      title: { text: config['3-1'].question },
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
        data: createSeries(benefitLabel, config['3-1'].data),
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

    var chart41 = new Highcharts.Chart('4-1', {
      chart: { type: config['4-1'].type },
      title: { text: config['4-1'].question },
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
        data: createSeries(agreeLabel, config['4-1'].data),
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

    var chart51 = new Highcharts.Chart('5-1', {
      chart: { type: config['5-1'].type },
      title: { text: config['5-1'].question },
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
        data: createSeries(agreeLabel, config['5-1'].data),
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
                  enabled: true,
                  format: '<b>{point.name}</b>: {point.percentage:.1f} %',
              }
          }
      },
      series: [{
          name: 'Brands',
          colorByPoint: true,
          data: createPieLabel(config['5-3'].label, config['5-3'].data)
      }]
    });
   
  });
});