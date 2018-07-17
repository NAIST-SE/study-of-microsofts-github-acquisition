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
    data: [8,44,21,18,21,15],
    question: 'Do you think it would be a good idea to move the project away from GitHub?',
    max: 50
  },
  // question 2
  {
    type: 'column',
    data: [17,24,28,23,22,10],
    question: 'If the project will be moved away from GitHub to another platform, how much additional effort will be required to get accustomed to the new platform?',
    max: 30
  },
]
$(function() {
  $(document).ready(function() {
    Highcharts.setOptions({
      colors: themeColor
    });

    var chart31 = new Highcharts.Chart('3-1', {
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

    var chart32 = new Highcharts.Chart('3-2', {
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

   
  });
});