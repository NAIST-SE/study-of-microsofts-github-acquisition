var data = [8,4,1,0,6,7];
var dataSum = 0;
var series = []
var agreeLabel = ['No opinion','Almost no effort','Quite less effort','Neutral','Quite much effort','Much effort']
for (var i=0;i < data.length;i++) {
	dataSum += data[i];
	series[i] = [agreeLabel[i], data[i]];
}
let max = 10;
var question = 'If the distribution/kernel will be moved to GitHub, how much additional effort will be required to get accustomed to the new platform?';

Highcharts.chart('container', {
	chart: {
		type: 'column'
	},
	title: {
		text: question
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
		max: max,
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
		data: series,
		dataLabels: {
			enabled: true,
			// rotation: -90,
			color: '#FFFFFF',
			// align: 'right',
			formatter: function(){
				var pcnt = (this.y / dataSum) * 100;
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