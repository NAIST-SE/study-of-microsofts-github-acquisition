Highcharts.chart('container', {
	chart: {
			plotBackgroundColor: null,
			plotBorderWidth: null,
			plotShadow: false,
			type: 'pie'
	},
	title: {
			text: 'Browser market shares in January, 2018'
	},
	tooltip: {
			pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
	},
	plotOptions: {
			pie: {
					allowPointSelect: true,
					cursor: 'pointer',
					dataLabels: {
							enabled: true,
							format: '<b>{point.name}</b>: {point.percentage:.1f} %',
							style: {
									color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
							}
					}
			}
	},
	series: [{
			name: 'Brands',
			colorByPoint: true,
			data: [{name: 'Yes', y: 133}, {name: 'No', y: 75},
			]
	}]
});