var data13 = [49,17,22,42,61,50];
var agreeLabel = ['No opinion','Strongly disagree','Disagree','Neutral','Agree','Strongly agree']

var question13 = 'GitHub appeals to you as it grants access to over 27 million users in this community.';
var series13 = [];
var data13Sum = 0;
for (var i=0;i < data13.length;i++) {
    data13Sum += data13[i]
	series13[i] = [agreeLabel[i], data13[i]]
}

Highcharts.chart('container', {
	chart: {
		type: 'column'
	},
	title: {
		text: question13
	},
	// subtitle: {
	//     text: 'Source: <a href="http://en.wikipedia.org/wiki/List_of_cities_proper_by_population">Wikipedia</a>'
	// },
	xAxis: {
		type: 'category',
		labels: {
			// rotation: -45,
			style: {
				fontSize: '13px',
				fontFamily: 'Verdana, sans-serif'
			}
		}
	},
	yAxis: {
		min: 0,
		title: {
			text: 'Responses'
		}
	},
	legend: {
		enabled: false
	},
	tooltip: {
		pointFormat: '{point.y}</b>'
	},
	series: [{
		name: 'Population',
		data: series13,
		dataLabels: {
			enabled: true,
			// rotation: -90,
			color: '#FFFFFF',
			// align: 'right',
			formatter: function(){
				var pcnt = (this.y / data13Sum) * 100;
				// return agreeLabel[this.x] + ' '+ Highcharts.numberFormat(pcnt) + '%';
				return this.y + ' ('+ Highcharts.numberFormat(pcnt,1) + ')%';

			},
			y: 10, // 10 pixels down from the top
			style: {
				fontSize: '13px',
				fontFamily: 'Verdana, sans-serif'
			}
		}
	}]
});