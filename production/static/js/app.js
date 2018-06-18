function news_countries() {
	var url = "/news_countries"
	// Plotly.d3.select('#visualization')
	// 	.append('div')
	// 	.attr('id', 'news_countries')

	Plotly.d3.json(url, function (error, response) {
		console.log("getting news countries data")
		console.log(response)
		console.log(response[0])
		var data = {
			x: response[0],
			y: response[1],
			type: 'bar',
		} 
		var layout = {
			xaxis: {
				tickangle: -45
			},
			title: "Mentions of Countries in Cyber Attack News",
		}
		Plotly.newPlot('news_countries', [data], layout)

	})

}

news_countries()