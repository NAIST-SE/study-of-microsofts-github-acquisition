var responses = 45;

var themeColor = ['#2f7ed8', '#0d233a', '#8bbc21', '#910000', '#1aadce',
'#492970', '#f28f43', '#77a1e5', '#c42525', '#a6c96a'];
var redBlueColor = ['#0000FF','#FF0000','#00FF00'];

var agreeLabel = ['No opinion','Strongly disagree','Disagree','Neutral','Agree','Strongly agree'];
var benefitLabel = ['No opinion','Very detrimental','Detrimental','Neutral','Beneficial','Very beneficial'];
var yesnoLable = ['Yes', 'No']
var configPie = {
    pie: {
      dataLabels: {
          distance: -30
      }
  }
}

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
  var series = []
  for (let i=0; i<data.length; i++) {
    series[i] = {name: label[i], y:data[i]};
  }
  return series;
}

var config = {
  // project manager
  '7-2': {
    type: 'pie',
    question: 'Are you a fan of GitHub?',
    label: yesnoLable,
    data: [32,13]
  },
  // core contributor
  '13-2': {
    type: 'pie',
    question: 'Are you a fan of GitHub?',
    label: yesnoLable,
    data: [28,18]
  },
  // casual contributor
  '19-2': {
    type: 'pie',
    question: 'Are you a fan of GitHub?',
    label: yesnoLable,
    data: [80, 56]
  },
  '8-2': {
    type: 'column',
    data: [8,25,7,2,2,1],
    question: 'Do you agree that the acquisition will trigger even more expansion of Free and Open Source contributors in GitHub?',
    label: agreeLabel,
    max: 30

  },
  '8-4': {
    type: 'pie',
    data: [30,11,4],
    question: 'Which statement best describes your current situation with any of your contributed projects?',
    label: [ 'The projects that I contribute to the most is currently using GitHub (currently using GitHub)',
    'One of the projects that have made contributions has already left GitHub (used before but not now)',
    'All projects that I contribute to have never used GitHub (none of the above)'
    ]
  }
}

var pieStyle = function(chart) {
  var distance = -30;
  console.log(chart)
  console.log(config[chart].label)
  for (var i=0; i<config[chart].label.length; i++) {
    if(config[chart].label[i].length > 10)
      distance = 30;
  }
  return {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: true,
        format: '<b>{point.name}: {point.y}</b> ({point.percentage:.1f} %)',
        style: style,
        distance: distance
      }
    }
  }
}

$(function() {
  $(document).ready(function() {
    Highcharts.setOptions({
      colors: themeColor
    });


    Highcharts.setOptions({
      colors: redBlueColor
    });

    var chart72 = new Highcharts.Chart('7-2', {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: config['7-2'].type
      },
      title: { text: config['7-2'].question },
      tooltip: { pointFormat: '{point.y} ({point.percentage:.1f}%)</b>'},
      plotOptions: pieStyle('7-2'),
      series: [{
        name: 'Brands',
        colorByPoint: true,
        data: config['7-2'].data
      }]
    });


    var chart132 = new Highcharts.Chart('13-2', {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: config['13-2'].type
      },
      title: { text: config['13-2'].question },
      tooltip: { pointFormat: '{point.y} ({point.percentage:.1f}%)</b>'},
      plotOptions: pieStyle('13-2'),
      series: [{
        name: 'Brands',
        colorByPoint: true,
        data: config['13-2'].data
      }]
    });

    var chart192 = new Highcharts.Chart('19-2', {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: config['19-2'].type
      },
      title: { text: config['19-2'].question },
      tooltip: { pointFormat: '{point.y} ({point.percentage:.1f}%)</b>'},
      plotOptions: pieStyle('19-2'),
      series: [{
        name: 'Brands',
        colorByPoint: true,
        data: config['19-2'].data
      }]
    });



    Highcharts.setOptions({
      colors: themeColor
    });

    var chart82 = new Highcharts.Chart('8-2', {
      chart: { type: config['8-2'].type },
      title: { text: config['8-2'].question },
      xAxis: xAxis,
      yAxis: yAxis(config['8-2'].max),
      legend: {
        enabled: false
      },
      tooltip: {
        pointFormat: '{point.y}</b>'
      },
      series: [{
        name: 'Population',
        data: createSeries(config['8-2'].label, config['8-2'].data),
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
    var chart84 = new Highcharts.Chart('8-4', {
      chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: config['8-4'].type
      },
      title: {
          text: config['8-4'].question
      },
      tooltip: {
          pointFormat: '{point.y} ({point.percentage:.1f}%)</b>'
      },
      plotOptions: pieStyle('8-4'),
      series: [{
          name: 'Brands',
          colorByPoint: true,
          data: createPieLabel(config['8-4'].label, config['8-4'].data)
      }]
    });


  });
});