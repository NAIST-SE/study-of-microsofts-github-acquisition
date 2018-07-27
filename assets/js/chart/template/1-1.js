var responses = 241;
var series = [
	['Project Manager/Project Leader', 46],
	['Core contributor', 63],
	['Casual contributor', 149],
	['User', 6],
	['Others', 4]
]

Highcharts.chart('1-1', {
	chart: {
		type: 'bar'
	},
	title: {
		text: 'Which of the roles best describe your main activities within the Linux (distributions or kernel) or BSD?'
	},
	// subtitle: {
	//     text: 'Source: <a href="http://en.wikipedia.org/wiki/List_of_cities_proper_by_population">Wikipedia</a>'
	// },
	xAxis: {
		type: 'category',
		labels: {
			// rotation: -45,
			style: {
				fontSize: '12px',
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
		pointFormat: '{point.y}'
	},
	series: [{
		name: 'Population',
		data: series,
		dataLabels: {
			enabled: true,
			// rotation: -90,
			color: '#FFFFFF',
			align: 'right',
			formatter: function () {
				var percent = 100 * series[this.x][1] / responses;
				return series[this.x][1] + '  (' + Highcharts.numberFormat(percent, 1) + '%)'
			},
			style: {
				fontSize: '13px',
				fontFamily: 'Helvetica',
				// textOutline: '1px'
			}
		}
	}]
});
