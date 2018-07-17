// Highcharts.setOptions({
// 	colors: ['#FF0000','#0000FF']
// });

var chart12 = new Highcharts.chart('1-2', {
	chart: {
		plotBackgroundColor: null,
		plotBorderWidth: null,
		plotShadow: false,
		type: 'pie'
	},
	title: {
		text: 'Are you a fan of GitHub?'
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
				format: '<b>{point.name}</b>: {point.y} ({point.percentage:.1f}%)',
				// style: {
				// 		color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
				// }
			}
		}
	},
	series: [{
		name: 'Brands',
		colorByPoint: true,
		data: [{
			name: 'Yes',
			y: 133
		}, {
			name: 'No',
			y: 75
		}]
	}]
});