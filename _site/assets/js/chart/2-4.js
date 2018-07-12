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
			text: 'Which statement best describes your current situation with any of your contributed projects?'
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
				{name: 'The projects that I contribute to the most is currently using GitHub (currently using GitHub)', y: 121},
				{name: 'One of the projects that have made contributions has already left GitHub (used before but not now)', y: 67},
				{name: 'All projects that I contribute to have never used GitHub (none of the above)', y: 24}]
	}]
});