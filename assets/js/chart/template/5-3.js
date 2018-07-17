var responses = 26;
var series = [['Yes, I contribute to other open source projects or have personal projects on GitHub.', 17],
['No, I have never contributed to projects hosted on GitHub.', 9]]


Highcharts.setOptions({
	colors: ['#0000FF','#FF0000','#00FF00']
});
Highcharts.chart('container', {
	chart: {
			plotBackgroundColor: null,
			plotBorderWidth: null,
			plotShadow: false,
			type: 'pie'
	},
	title: {
			text: 'Apart from Linux and BSD contributions, have you had personal experiences with the GitHub Platform?'
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
							// style: {
							// 		color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
							// }
					}
			}
	},
	series: [{
			name: 'Brands',
			colorByPoint: true,
			data: [
				{name: 'Yes, I contribute to other open source projects or have personal projects on GitHub.', y: 17},
				{name: 'No, I have never contributed to projects hosted on GitHub.', y: 9},
		    ]
	}]
});