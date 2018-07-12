$(function () {
	var chart;
	$(document).ready(function () {

		var container_chartCorrectiveAction = new Highcharts.Chart({
			chart: {
				renderTo: 'container_chartCorrectiveAction',

				type: 'bar',
				height: 195

			},
			title: {
				text: 'Corrective Action'
			},
			subtitle: {
				text: 'Sub-ATA () / ATA (20)'
			},
			xAxis: {
				categories: ['No Defects Found-Fastener-Loose / Displaced'],
				title: {
					text: 'Action'
				},
				labels: {
					style: {
						width: '12000px'
					}
				}
			},
			yAxis: {
				min: 0,
				title: {
					text: 'Count',
					align: 'high'
				},
				labels: {
					overflow: 'justify'
				}
			},
			tooltip: {
				formatter: function () {
					return '' + this.series.name + ': ' + this.y + ' Count';
				}
			},
			plotOptions: {
				bar: {
					dataLabels: {
						enabled: true
					}
				},
				series: {
					pointWidth: 10,
					groupPadding: .05,
					shadow: true
				}
			},
			legend: {
				layout: 'horizontal',
				align: 'center',
				verticalAlign: 'bottom',
				floating: false,
				borderWidth: 1,
				backgroundColor: '#FFFFFF',
				shadow: true,
				labelFormatter: function () {
					return '<div class="' + this.name + '-arrow"></div><span style="font-family: \'Advent Pro\', sans-serif; font-size:12px">' + this.name + '</span><br/><span style="font-size:10px; color:#ababaa">   Total: ' + this.options.total + '</span>';
				}
			},
			credits: {
				enabled: false
			},
			exporting: {
				enabled: true
			},
			series: [{
				name: 'Heavy',
				total: '0',
				data: [null]
			}, {
				name: 'Intermediate',
				total: '0',
				data: [null]
			}, {
				name: 'Line',
				total: '0',
				data: [null]
			}, {
				name: 'Lite',
				total: '1',
				data: [1]
			}]
		});


		var container_chartAtaFleetAvg = new Highcharts.Chart({
			chart: {
				renderTo: 'container_chartAtaFleetAvg',

				type: 'bar',
				height: 185

			},
			title: {
				text: 'Fleet Average'
			},
			subtitle: {
				text: 'ATA (20)'
			},
			xAxis: {
				categories: ['Fleet Average'],
				title: {
					text: ''
				},
				labels: {
					style: {
						width: '12000px'
					}
				}
			},
			yAxis: {
				min: 0,
				title: {
					text: 'Average',
					align: 'high'
				},
				labels: {
					overflow: 'justify'
				}
			},
			tooltip: {
				formatter: function () {
					return '' + this.series.name + ': ' + this.y + ' Average';
				}
			},
			plotOptions: {
				bar: {
					dataLabels: {
						enabled: true
					}
				},
				series: {
					pointWidth: 10,
					groupPadding: .05,
					shadow: true
				}
			},
			legend: {
				layout: 'horizontal',
				align: 'center',
				verticalAlign: 'bottom',
				floating: false,
				borderWidth: 1,
				backgroundColor: '#FFFFFF',
				shadow: true,
				labelFormatter: function () {
					return '<div class="' + this.name + '-arrow"></div><span style="font-family: \'Advent Pro\', sans-serif; font-size:12px">' + this.name + '</span><br/><span style="font-size:10px; color:#ababaa">   Total: ' + this.options.total + '</span>';
				}
			},
			credits: {
				enabled: false
			},
			exporting: {
				enabled: true
			},
			series: [{
				name: 'Intermediate',
				total: '0.35',
				data: [0.35]
			}, {
				name: 'Lite',
				total: '0.3',
				data: [0.30]
			}, {
				name: 'Heavy',
				total: '0.1',
				data: [0.10]
			}]
		});


		var container_chartSubAtaFleetAvg = new Highcharts.Chart({
			chart: {
				renderTo: 'container_chartSubAtaFleetAvg',

				type: 'bar',
				height: 175

			},
			title: {
				text: 'Fleet Average'
			},
			subtitle: {
				text: 'Sub-ATA () / ATA (20)'
			},
			xAxis: {
				categories: ['Fleet Average'],
				title: {
					text: ''
				},
				labels: {
					style: {
						width: '12000px'
					}
				}
			},
			yAxis: {
				min: 0,
				title: {
					text: 'Average',
					align: 'high'
				},
				labels: {
					overflow: 'justify'
				}
			},
			tooltip: {
				formatter: function () {
					return '' + this.series.name + ': ' + this.y + ' Average';
				}
			},
			plotOptions: {
				bar: {
					dataLabels: {
						enabled: true
					}
				},
				series: {
					pointWidth: 10,
					groupPadding: .05,
					shadow: true
				}
			},
			legend: {
				layout: 'horizontal',
				align: 'center',
				verticalAlign: 'bottom',
				floating: false,
				borderWidth: 1,
				backgroundColor: '#FFFFFF',
				shadow: true,
				labelFormatter: function () {
					return '<div class="' + this.name + '-arrow"></div><span style="font-family: \'Advent Pro\', sans-serif; font-size:12px">' + this.name + '</span><br/><span style="font-size:10px; color:#ababaa">   Total: ' + this.options.total + '</span>';
				}
			},
			credits: {
				enabled: false
			},
			exporting: {
				enabled: true
			},
			series: [{
				name: 'Heavy',
				total: '0.1',
				data: [0.10]
			}, {
				name: 'Lite',
				total: '0.05',
				data: [0.05]
			}]
		});



		var container_chartAtaFlightDelay = new Highcharts.Chart({
			chart: {
				renderTo: 'container_chartAtaFlightDelay',
				zoomType: 'xy'
			},
			title: {
				text: 'Flight Delays'
			},
			subtitle: {
				text: 'ATA (20)'
			},
			xAxis: [{
				categories: []

			}],
			yAxis: [{
					labels: {
						formatter: function () {
							return this.value + ' Mins';
						},
						style: {
							color: '#89A54E',
							width: '5000px',
						}
					},
					title: {
						text: 'Minutes',
						style: {
							color: '#89A54E'
						}
					}
				},
				{
					title: {
						text: 'Delays',
						style: {
							color: '#4572A7'
						}
					},
					labels: {
						formatter: function () {
							return this.value + ' Delays';
						},
						style: {
							color: '#4572A7'
						}
					},
					opposite: true
				}
			],
			tooltip: {
				formatter: function () {
					return '' + this.x + ': ' + this.y + (this.series.name == 'Minutes' ? ' Minutes' : ' Delays');
				}
			},
			legend: {
				layout: 'horizontal',
				align: 'center',
				verticalAlign: 'bottom',
				floating: false,
				borderWidth: 1,
				backgroundColor: '#FFFFFF',
				shadow: true
			},
			credits: {
				enabled: false
			},
			exporting: {
				enabled: true
			},
			series: [{
				name: 'Delays',
				color: '#4572A7',
				type: 'column',
				yAxis: 1,
				data: []
			}, {
				name: 'Minutes',
				color: '#89A54E',
				type: 'spline',
				data: []
			}]
		});


		var container_chartSubAtaFlightDelay = new Highcharts.Chart({
			chart: {
				renderTo: 'container_chartSubAtaFlightDelay',
				zoomType: 'xy'
			},
			title: {
				text: 'Flight Delays'
			},
			subtitle: {
				text: 'Sub-ATA () / ATA (20)'
			},
			xAxis: [{
				categories: []

			}],
			yAxis: [{
					labels: {
						formatter: function () {
							return this.value + ' Mins';
						},
						style: {
							color: '#89A54E',
							width: '5000px',
						}
					},
					title: {
						text: 'Minutes',
						style: {
							color: '#89A54E'
						}
					}
				},
				{
					title: {
						text: 'Delays',
						style: {
							color: '#4572A7'
						}
					},
					labels: {
						formatter: function () {
							return this.value + ' Delays';
						},
						style: {
							color: '#4572A7'
						}
					},
					opposite: true
				}
			],
			tooltip: {
				formatter: function () {
					return '' + this.x + ': ' + this.y + (this.series.name == 'Minutes' ? ' Minutes' : ' Delays');
				}
			},
			legend: {
				layout: 'horizontal',
				align: 'center',
				verticalAlign: 'bottom',
				floating: false,
				borderWidth: 1,
				backgroundColor: '#FFFFFF',
				shadow: true
			},
			credits: {
				enabled: false
			},
			exporting: {
				enabled: true
			},
			series: [{
				name: 'Delays',
				color: '#4572A7',
				type: 'column',
				yAxis: 1,
				data: []
			}, {
				name: 'Minutes',
				color: '#89A54E',
				type: 'spline',
				data: []
			}]
		});

		var container_chartFreqAtaTailNum = new Highcharts.Chart({
			chart: {
				renderTo: 'container_chartFreqAtaTailNum',

				type: 'bar',
				height: 275

			},
			title: {
				text: 'Frequency by Tail Number'
			},
			subtitle: {
				text: 'ATA (20)'
			},
			xAxis: {
				categories: ['213', '442', '792'],
				title: {
					text: 'Tail Number'
				},
				labels: {
					style: {
						width: '12000px'
					}
				}
			},
			yAxis: {
				min: 0,
				title: {
					text: 'Count',
					align: 'high'
				},
				labels: {
					overflow: 'justify'
				}
			},
			tooltip: {
				formatter: function () {
					return '' + this.series.name + ': ' + this.y + ' Count';
				}
			},
			plotOptions: {
				bar: {
					dataLabels: {
						enabled: true
					}
				},
				series: {
					pointWidth: 10,
					groupPadding: .05,
					shadow: true
				}
			},
			legend: {
				layout: 'horizontal',
				align: 'center',
				verticalAlign: 'bottom',
				floating: false,
				borderWidth: 1,
				backgroundColor: '#FFFFFF',
				shadow: true,
				labelFormatter: function () {
					return '<div class="' + this.name + '-arrow"></div><span style="font-family: \'Advent Pro\', sans-serif; font-size:12px">' + this.name + '</span><br/><span style="font-size:10px; color:#ababaa">   Total: ' + this.options.total + '</span>';
				}
			},
			credits: {
				enabled: false
			},
			exporting: {
				enabled: true
			},
			series: [{
				name: 'Heavy',
				total: '2',
				data: [null, null, 2]
			}, {
				name: 'Intermediate',
				total: '7',
				data: [null, 3, 4]
			}, {
				name: 'Line',
				total: '0',
				data: [null, null, null]
			}, {
				name: 'Lite',
				total: '6',
				data: [2, 2, 2]
			}]
		});


		var container_chartSubAtaDelayCode = new Highcharts.Chart({
			chart: {
				renderTo: 'container_chartSubAtaDelayCode',

				type: 'bar',
				height: 155

			},
			title: {
				text: 'Frequency By Delay Code'
			},
			subtitle: {
				text: 'Sub-ATA () / ATA (20)'
			},
			xAxis: {
				categories: [],
				title: {
					text: 'Delay Code'
				},
				labels: {
					style: {
						width: '12000px'
					}
				}
			},
			yAxis: {
				min: 0,
				title: {
					text: 'Minutes',
					align: 'high'
				},
				labels: {
					overflow: 'justify'
				}
			},
			tooltip: {
				formatter: function () {
					return '' + this.series.name + ': ' + this.y + ' Minutes';
				}
			},
			plotOptions: {
				bar: {
					dataLabels: {
						enabled: true
					}
				},
				series: {
					pointWidth: 10,
					groupPadding: .05,
					shadow: true
				}
			},
			legend: {
				layout: 'horizontal',
				align: 'center',
				verticalAlign: 'bottom',
				floating: false,
				borderWidth: 1,
				backgroundColor: '#FFFFFF',
				shadow: true,
				labelFormatter: function () {
					return '<div class="' + this.name + '-arrow"></div><span style="font-family: \'Advent Pro\', sans-serif; font-size:12px">' + this.name + '</span><br/><span style="font-size:10px; color:#ababaa">   Total: ' + this.options.total + '</span>';
				}
			},
			credits: {
				enabled: false
			},
			exporting: {
				enabled: true
			},
			series: []
		});


		var container_chartAtaDelayCode = new Highcharts.Chart({
			chart: {
				renderTo: 'container_chartAtaDelayCode',

				type: 'bar',
				height: 155

			},
			title: {
				text: 'Frequency By Delay Code'
			},
			subtitle: {
				text: 'ATA (20)'
			},
			xAxis: {
				categories: [],
				title: {
					text: 'Delay Code'
				},
				labels: {
					style: {
						width: '12000px'
					}
				}
			},
			yAxis: {
				min: 0,
				title: {
					text: 'Minutes',
					align: 'high'
				},
				labels: {
					overflow: 'justify'
				}
			},
			tooltip: {
				formatter: function () {
					return '' + this.series.name + ': ' + this.y + ' Minutes';
				}
			},
			plotOptions: {
				bar: {
					dataLabels: {
						enabled: true
					}
				},
				series: {
					pointWidth: 10,
					groupPadding: .05,
					shadow: true
				}
			},
			legend: {
				layout: 'horizontal',
				align: 'center',
				verticalAlign: 'bottom',
				floating: false,
				borderWidth: 1,
				backgroundColor: '#FFFFFF',
				shadow: true,
				labelFormatter: function () {
					return '<div class="' + this.name + '-arrow"></div><span style="font-family: \'Advent Pro\', sans-serif; font-size:12px">' + this.name + '</span><br/><span style="font-size:10px; color:#ababaa">   Total: ' + this.options.total + '</span>';
				}
			},
			credits: {
				enabled: false
			},
			exporting: {
				enabled: true
			},
			series: []
		});


		var container_chartSubAtaLocation = new Highcharts.Chart({
			chart: {
				renderTo: 'container_chartSubAtaLocation',

				type: 'bar',
				height: 235

			},
			title: {
				text: 'Frequency By Location'
			},
			subtitle: {
				text: 'Sub-ATA () / ATA (20)'
			},
			xAxis: {
				categories: ['PAE', 'STL'],
				title: {
					text: 'Location'
				},
				labels: {
					style: {
						width: '12000px'
					}
				}
			},
			yAxis: {
				min: 0,
				title: {
					text: 'Count',
					align: 'high'
				},
				labels: {
					overflow: 'justify'
				}
			},
			tooltip: {
				formatter: function () {
					return '' + this.series.name + ': ' + this.y + ' Count';
				}
			},
			plotOptions: {
				bar: {
					dataLabels: {
						enabled: true
					}
				},
				series: {
					pointWidth: 10,
					groupPadding: .05,
					shadow: true
				}
			},
			legend: {
				layout: 'horizontal',
				align: 'center',
				verticalAlign: 'bottom',
				floating: false,
				borderWidth: 1,
				backgroundColor: '#FFFFFF',
				shadow: true,
				labelFormatter: function () {
					return '<div class="' + this.name + '-arrow"></div><span style="font-family: \'Advent Pro\', sans-serif; font-size:12px">' + this.name + '</span><br/><span style="font-size:10px; color:#ababaa">   Total: ' + this.options.total + '</span>';
				}
			},
			credits: {
				enabled: false
			},
			exporting: {
				enabled: true
			},
			series: [{
				name: 'Heavy',
				total: '2',
				data: [2, null]
			}, {
				name: 'Intermediate',
				total: '0',
				data: [null, null]
			}, {
				name: 'Line',
				total: '0',
				data: [null, null]
			}, {
				name: 'Lite',
				total: '1',
				data: [null, 1]
			}]
		});


		var container_chartAtaLocation = new Highcharts.Chart({
			chart: {
				renderTo: 'container_chartAtaLocation',

				type: 'bar',
				height: 395

			},
			title: {
				text: 'Frequency By Location'
			},
			subtitle: {
				text: 'ATA (20)'
			},
			xAxis: {
				categories: ['HOU', 'ISP', 'MDW', 'PAE', 'PHX', 'STL'],
				title: {
					text: 'Location'
				},
				labels: {
					style: {
						width: '12000px'
					}
				}
			},
			yAxis: {
				min: 0,
				title: {
					text: 'Count',
					align: 'high'
				},
				labels: {
					overflow: 'justify'
				}
			},
			tooltip: {
				formatter: function () {
					return '' + this.series.name + ': ' + this.y + ' Count';
				}
			},
			plotOptions: {
				bar: {
					dataLabels: {
						enabled: true
					}
				},
				series: {
					pointWidth: 10,
					groupPadding: .05,
					shadow: true
				}
			},
			legend: {
				layout: 'horizontal',
				align: 'center',
				verticalAlign: 'bottom',
				floating: false,
				borderWidth: 1,
				backgroundColor: '#FFFFFF',
				shadow: true,
				labelFormatter: function () {
					return '<div class="' + this.name + '-arrow"></div><span style="font-family: \'Advent Pro\', sans-serif; font-size:12px">' + this.name + '</span><br/><span style="font-size:10px; color:#ababaa">   Total: ' + this.options.total + '</span>';
				}
			},
			credits: {
				enabled: false
			},
			exporting: {
				enabled: true
			},
			series: [{
				name: 'Heavy',
				total: '2',
				data: [null, null, null, 2, null, null]
			}, {
				name: 'Intermediate',
				total: '7',
				data: [3, null, 2, null, 2, null]
			}, {
				name: 'Line',
				total: '0',
				data: [null, null, null, null, null, null]
			}, {
				name: 'Lite',
				total: '4',
				data: [null, 1, 1, null, null, 2]
			}]
		});


		var container_chartAtaFreqBySubAta = new Highcharts.Chart({
			chart: {
				renderTo: 'container_chartAtaFreqBySubAta',

				type: 'bar',
				height: 315

			},
			title: {
				text: 'Frequency By Sub ATA'
			},
			subtitle: {
				text: 'ATA (20)'
			},
			xAxis: {
				categories: ['DOCUMENTATION (No. 5)', 'REPAIR AND REPLACEMENT (No. 10)', 'INSPECTION / CHECK (No. 20)', 'SPECIFICATIONS AND MATERIALS (No. 30)'],
				title: {
					text: 'Sub ATA'
				},
				labels: {
					style: {
						width: '12000px'
					}
				}
			},
			yAxis: {
				min: 0,
				title: {
					text: 'Count',
					align: 'high'
				},
				labels: {
					overflow: 'justify'
				}
			},
			tooltip: {
				formatter: function () {
					return '' + this.series.name + ': ' + this.y + ' Count';
				}
			},
			plotOptions: {
				bar: {
					dataLabels: {
						enabled: true
					}
				},
				series: {
					pointWidth: 10,
					groupPadding: .05,
					shadow: true
				}
			},
			legend: {
				layout: 'horizontal',
				align: 'center',
				verticalAlign: 'bottom',
				floating: false,
				borderWidth: 1,
				backgroundColor: '#FFFFFF',
				shadow: true,
				labelFormatter: function () {
					return '<div class="' + this.name + '-arrow"></div><span style="font-family: \'Advent Pro\', sans-serif; font-size:12px">' + this.name + '</span><br/><span style="font-size:10px; color:#ababaa">   Total: ' + this.options.total + '</span>';
				}
			},
			credits: {
				enabled: false
			},
			exporting: {
				enabled: true
			},
			series: [{
				name: 'Heavy',
				total: '2',
				data: [null, null, 2, null]
			}, {
				name: 'Intermediate',
				total: '3',
				data: [null, null, null, 3]
			}, {
				name: 'Line',
				total: '0',
				data: [null, null, null, null]
			}, {
				name: 'Lite',
				total: '6',
				data: [2, 3, 1, null]
			}]
		});


		var container_chartFreqSubAtaTailNum = new Highcharts.Chart({
			chart: {
				renderTo: 'container_chartFreqSubAtaTailNum',

				type: 'bar',
				height: 235

			},
			title: {
				text: 'Frequency by Tail Number'
			},
			subtitle: {
				text: 'Sub-ATA () / ATA (20)'
			},
			xAxis: {
				categories: ['442', '792'],
				title: {
					text: 'Tail Number'
				},
				labels: {
					style: {
						width: '12000px'
					}
				}
			},
			yAxis: {
				min: 0,
				title: {
					text: 'Count',
					align: 'high'
				},
				labels: {
					overflow: 'justify'
				}
			},
			tooltip: {
				formatter: function () {
					return '' + this.series.name + ': ' + this.y + ' Count';
				}
			},
			plotOptions: {
				bar: {
					dataLabels: {
						enabled: true
					}
				},
				series: {
					pointWidth: 10,
					groupPadding: .05,
					shadow: true
				}
			},
			legend: {
				layout: 'horizontal',
				align: 'center',
				verticalAlign: 'bottom',
				floating: false,
				borderWidth: 1,
				backgroundColor: '#FFFFFF',
				shadow: true,
				labelFormatter: function () {
					return '<div class="' + this.name + '-arrow"></div><span style="font-family: \'Advent Pro\', sans-serif; font-size:12px">' + this.name + '</span><br/><span style="font-size:10px; color:#ababaa">   Total: ' + this.options.total + '</span>';
				}
			},
			credits: {
				enabled: false
			},
			exporting: {
				enabled: true
			},
			series: [{
				name: 'Heavy',
				total: '2',
				data: [null, 2]
			}, {
				name: 'Intermediate',
				total: '0',
				data: [null, null]
			}, {
				name: 'Line',
				total: '0',
				data: [null, null]
			}, {
				name: 'Lite',
				total: '1',
				data: [1, null]
			}]
		});


		var container_chartGroupSubAtaByConfiguration = new Highcharts.Chart({
			chart: {
				renderTo: 'container_chartGroupSubAtaByConfiguration',

				type: 'bar',
				height: 155

			},
			title: {
				text: 'Group by Configuration'
			},
			subtitle: {
				text: 'Sub-ATA () / ATA (20)'
			},
			xAxis: {
				categories: [],
				title: {
					text: 'Configuration'
				},
				labels: {
					style: {
						width: '12000px'
					}
				}
			},
			yAxis: {
				min: 0,
				title: {
					text: 'Average',
					align: 'high'
				},
				labels: {
					overflow: 'justify'
				}
			},
			tooltip: {
				formatter: function () {
					return '' + this.series.name + ': ' + this.y + ' Average';
				}
			},
			plotOptions: {
				bar: {
					dataLabels: {
						enabled: true
					}
				},
				series: {
					pointWidth: 10,
					groupPadding: .05,
					shadow: true
				}
			},
			legend: {
				layout: 'horizontal',
				align: 'center',
				verticalAlign: 'bottom',
				floating: false,
				borderWidth: 1,
				backgroundColor: '#FFFFFF',
				shadow: true,
				labelFormatter: function () {
					return '<div class="' + this.name + '-arrow"></div><span style="font-family: \'Advent Pro\', sans-serif; font-size:12px">' + this.name + '</span><br/><span style="font-size:10px; color:#ababaa">   Total: ' + this.options.total + '</span>';
				}
			},
			credits: {
				enabled: false
			},
			exporting: {
				enabled: true
			},
			series: [{
				name: 'Heavy',
				total: '0',
				data: []
			}, {
				name: 'Intermediate',
				total: '0',
				data: []
			}, {
				name: 'Line',
				total: '0',
				data: []
			}, {
				name: 'Lite',
				total: '0',
				data: []
			}]
		});


		var container_chartGroupByConfiguration = new Highcharts.Chart({
			chart: {
				renderTo: 'container_chartGroupByConfiguration',

				type: 'bar',
				height: 155

			},
			title: {
				text: 'Group by Configuration'
			},
			subtitle: {
				text: 'ATA (20)'
			},
			xAxis: {
				categories: [],
				title: {
					text: 'Configuration'
				},
				labels: {
					style: {
						width: '12000px'
					}
				}
			},
			yAxis: {
				min: 0,
				title: {
					text: 'Average',
					align: 'high'
				},
				labels: {
					overflow: 'justify'
				}
			},
			tooltip: {
				formatter: function () {
					return '' + this.series.name + ': ' + this.y + ' Average';
				}
			},
			plotOptions: {
				bar: {
					dataLabels: {
						enabled: true
					}
				},
				series: {
					pointWidth: 10,
					groupPadding: .05,
					shadow: true
				}
			},
			legend: {
				layout: 'horizontal',
				align: 'center',
				verticalAlign: 'bottom',
				floating: false,
				borderWidth: 1,
				backgroundColor: '#FFFFFF',
				shadow: true,
				labelFormatter: function () {
					return '<div class="' + this.name + '-arrow"></div><span style="font-family: \'Advent Pro\', sans-serif; font-size:12px">' + this.name + '</span><br/><span style="font-size:10px; color:#ababaa">   Total: ' + this.options.total + '</span>';
				}
			},
			credits: {
				enabled: false
			},
			exporting: {
				enabled: true
			},
			series: [{
				name: 'Heavy',
				total: '0',
				data: []
			}, {
				name: 'Intermediate',
				total: '0',
				data: []
			}, {
				name: 'Line',
				total: '0',
				data: []
			}, {
				name: 'Lite',
				total: '0',
				data: []
			}]
		});


		var container_chartGroupSubAtaByFlightHours = new Highcharts.Chart({
			chart: {
				renderTo: 'container_chartGroupSubAtaByFlightHours',

				type: 'bar',
				height: 195

			},
			title: {
				text: 'Group by Flight Hours'
			},
			subtitle: {
				text: 'Sub-ATA () / ATA (20)'
			},
			xAxis: {
				categories: ['2'],
				title: {
					text: 'Group'
				},
				labels: {
					style: {
						width: '12000px'
					}
				}
			},
			yAxis: {
				min: 0,
				title: {
					text: 'Average',
					align: 'high'
				},
				labels: {
					overflow: 'justify'
				}
			},
			tooltip: {
				formatter: function () {
					return '' + this.series.name + ': ' + this.y + ' Average';
				}
			},
			plotOptions: {
				bar: {
					dataLabels: {
						enabled: true
					}
				},
				series: {
					pointWidth: 10,
					groupPadding: .05,
					shadow: true
				}
			},
			legend: {
				layout: 'horizontal',
				align: 'center',
				verticalAlign: 'bottom',
				floating: false,
				borderWidth: 1,
				backgroundColor: '#FFFFFF',
				shadow: true,
				labelFormatter: function () {
					return '<div class="' + this.name + '-arrow"></div><span style="font-family: \'Advent Pro\', sans-serif; font-size:12px">' + this.name + '</span><br/><span style="font-size:10px; color:#ababaa">   Total: ' + this.options.total + '</span>';
				}
			},
			credits: {
				enabled: false
			},
			exporting: {
				enabled: true
			},
			series: [{
				name: 'Heavy',
				total: '1',
				data: [1.00]
			}, {
				name: 'Intermediate',
				total: '0',
				data: [null]
			}, {
				name: 'Line',
				total: '0',
				data: [null]
			}, {
				name: 'Lite',
				total: '0.5',
				data: [0.50]
			}]
		});


		var container_chartGroupByFlightHours = new Highcharts.Chart({
			chart: {
				renderTo: 'container_chartGroupByFlightHours',

				type: 'bar',
				height: 235

			},
			title: {
				text: 'Group by Flight Hours'
			},
			subtitle: {
				text: 'ATA (20)'
			},
			xAxis: {
				categories: ['1', '2'],
				title: {
					text: 'Group'
				},
				labels: {
					style: {
						width: '12000px'
					}
				}
			},
			yAxis: {
				min: 0,
				title: {
					text: 'Average',
					align: 'high'
				},
				labels: {
					overflow: 'justify'
				}
			},
			tooltip: {
				formatter: function () {
					return '' + this.series.name + ': ' + this.y + ' Average';
				}
			},
			plotOptions: {
				bar: {
					dataLabels: {
						enabled: true
					}
				},
				series: {
					pointWidth: 10,
					groupPadding: .05,
					shadow: true
				}
			},
			legend: {
				layout: 'horizontal',
				align: 'center',
				verticalAlign: 'bottom',
				floating: false,
				borderWidth: 1,
				backgroundColor: '#FFFFFF',
				shadow: true,
				labelFormatter: function () {
					return '<div class="' + this.name + '-arrow"></div><span style="font-family: \'Advent Pro\', sans-serif; font-size:12px">' + this.name + '</span><br/><span style="font-size:10px; color:#ababaa">   Total: ' + this.options.total + '</span>';
				}
			},
			credits: {
				enabled: false
			},
			exporting: {
				enabled: true
			},
			series: [{
				name: 'Heavy',
				total: '1',
				data: [null, 1.00]
			}, {
				name: 'Intermediate',
				total: '3.5',
				data: [null, 3.50]
			}, {
				name: 'Line',
				total: '0',
				data: [null, null]
			}, {
				name: 'Lite',
				total: '4',
				data: [2.00, 2.00]
			}]
		});


		var container_chartGroupSubAtaByHub = new Highcharts.Chart({
			chart: {
				renderTo: 'container_chartGroupSubAtaByHub',

				type: 'bar',
				height: 155

			},
			title: {
				text: 'Group by HUB'
			},
			subtitle: {
				text: 'Sub-ATA () / ATA (20)'
			},
			xAxis: {
				categories: [],
				title: {
					text: 'Hub'
				},
				labels: {
					style: {
						width: '12000px'
					}
				}
			},
			yAxis: {
				min: 0,
				title: {
					text: 'Average',
					align: 'high'
				},
				labels: {
					overflow: 'justify'
				}
			},
			tooltip: {
				formatter: function () {
					return '' + this.series.name + ': ' + this.y + ' Average';
				}
			},
			plotOptions: {
				bar: {
					dataLabels: {
						enabled: true
					}
				},
				series: {
					pointWidth: 10,
					groupPadding: .05,
					shadow: true
				}
			},
			legend: {
				layout: 'horizontal',
				align: 'center',
				verticalAlign: 'bottom',
				floating: false,
				borderWidth: 1,
				backgroundColor: '#FFFFFF',
				shadow: true,
				labelFormatter: function () {
					return '<div class="' + this.name + '-arrow"></div><span style="font-family: \'Advent Pro\', sans-serif; font-size:12px">' + this.name + '</span><br/><span style="font-size:10px; color:#ababaa">   Total: ' + this.options.total + '</span>';
				}
			},
			credits: {
				enabled: false
			},
			exporting: {
				enabled: true
			},
			series: [{
				name: 'Heavy',
				total: '0',
				data: []
			}, {
				name: 'Intermediate',
				total: '0',
				data: []
			}, {
				name: 'Line',
				total: '0',
				data: []
			}, {
				name: 'Lite',
				total: '0',
				data: []
			}]
		});


		var container_chartGroupByHub = new Highcharts.Chart({
			chart: {
				renderTo: 'container_chartGroupByHub',

				type: 'bar',
				height: 155

			},
			title: {
				text: 'Group by Hub'
			},
			subtitle: {
				text: 'ATA (20)'
			},
			xAxis: {
				categories: [],
				title: {
					text: 'Hub'
				},
				labels: {
					style: {
						width: '12000px'
					}
				}
			},
			yAxis: {
				min: 0,
				title: {
					text: 'Average',
					align: 'high'
				},
				labels: {
					overflow: 'justify'
				}
			},
			tooltip: {
				formatter: function () {
					return '' + this.series.name + ': ' + this.y + ' Average';
				}
			},
			plotOptions: {
				bar: {
					dataLabels: {
						enabled: true
					}
				},
				series: {
					pointWidth: 10,
					groupPadding: .05,
					shadow: true
				}
			},
			legend: {
				layout: 'horizontal',
				align: 'center',
				verticalAlign: 'bottom',
				floating: false,
				borderWidth: 1,
				backgroundColor: '#FFFFFF',
				shadow: true,
				labelFormatter: function () {
					return '<div class="' + this.name + '-arrow"></div><span style="font-family: \'Advent Pro\', sans-serif; font-size:12px">' + this.name + '</span><br/><span style="font-size:10px; color:#ababaa">   Total: ' + this.options.total + '</span>';
				}
			},
			credits: {
				enabled: false
			},
			exporting: {
				enabled: true
			},
			series: [{
				name: 'Heavy',
				total: '0',
				data: []
			}, {
				name: 'Intermediate',
				total: '0',
				data: []
			}, {
				name: 'Line',
				total: '0',
				data: []
			}, {
				name: 'Lite',
				total: '0',
				data: []
			}]
		});


		var container_chartSeason = new Highcharts.Chart({
			chart: {
				renderTo: 'container_chartSeason',

				type: 'bar',
				height: 235

			},
			title: {
				text: 'Season'
			},
			subtitle: {
				text: 'Sub-ATA () / ATA (20)'
			},
			xAxis: {
				categories: ['Fall', 'Summer'],
				title: {
					text: 'Season'
				},
				labels: {
					style: {
						width: '12000px'
					}
				}
			},
			yAxis: {
				min: 0,
				title: {
					text: 'Percentage',
					align: 'high'
				},
				labels: {
					overflow: 'justify'
				}
			},
			tooltip: {
				formatter: function () {
					return '' + this.series.name + ': ' + this.y + ' Percentage';
				}
			},
			plotOptions: {
				bar: {
					dataLabels: {
						enabled: true
					}
				},
				series: {
					pointWidth: 10,
					groupPadding: .05,
					shadow: true
				}
			},
			legend: {
				layout: 'horizontal',
				align: 'center',
				verticalAlign: 'bottom',
				floating: false,
				borderWidth: 1,
				backgroundColor: '#FFFFFF',
				shadow: true,
				labelFormatter: function () {
					return '<div class="' + this.name + '-arrow"></div><span style="font-family: \'Advent Pro\', sans-serif; font-size:12px">' + this.name + '</span><br/><span style="font-size:10px; color:#ababaa">   Total: ' + this.options.total + '</span>';
				}
			},
			credits: {
				enabled: false
			},
			exporting: {
				enabled: true
			},
			series: [{
				name: 'Heavy',
				total: '100',
				data: [100, null]
			}, {
				name: 'Intermediate',
				total: '0',
				data: [null, null]
			}, {
				name: 'Line',
				total: '0',
				data: [null, null]
			}, {
				name: 'Lite',
				total: '50',
				data: [null, 50]
			}]
		});


		var container_chartSeasonByMonth = new Highcharts.Chart({
			chart: {
				renderTo: 'container_chartSeasonByMonth',

				type: 'bar',
				height: 235

			},
			title: {
				text: 'Season By Month'
			},
			subtitle: {
				text: 'Sub-ATA () / ATA (20)'
			},
			xAxis: {
				categories: ['8', '11'],
				title: {
					text: 'Month'
				},
				labels: {
					style: {
						width: '12000px'
					}
				}
			},
			yAxis: {
				min: 0,
				title: {
					text: 'Percentage',
					align: 'high'
				},
				labels: {
					overflow: 'justify'
				}
			},
			tooltip: {
				formatter: function () {
					return '' + this.series.name + ': ' + this.y + ' Percentage';
				}
			},
			plotOptions: {
				bar: {
					dataLabels: {
						enabled: true
					}
				},
				series: {
					pointWidth: 10,
					groupPadding: .05,
					shadow: true
				}
			},
			legend: {
				layout: 'horizontal',
				align: 'center',
				verticalAlign: 'bottom',
				floating: false,
				borderWidth: 1,
				backgroundColor: '#FFFFFF',
				shadow: true,
				labelFormatter: function () {
					return '<div class="' + this.name + '-arrow"></div><span style="font-family: \'Advent Pro\', sans-serif; font-size:12px">' + this.name + '</span><br/><span style="font-size:10px; color:#ababaa">   Total: ' + this.options.total + '</span>';
				}
			},
			credits: {
				enabled: false
			},
			exporting: {
				enabled: true
			},
			series: [{
				name: 'Heavy',
				total: '100',
				data: [null, 100]
			}, {
				name: 'Intermediate',
				total: '0',
				data: [null, null]
			}, {
				name: 'Line',
				total: '0',
				data: [null, null]
			}, {
				name: 'Lite',
				total: '50',
				data: [50, null]
			}]
		});
	});
});