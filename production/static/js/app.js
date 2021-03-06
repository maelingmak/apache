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
			marker: {
				color: ["red", "light blue", "green", "green", "green", "green", "green", "green", "green", "green"]
			},
			opacity: 0.7,
			line: {
		     	color: 'rbg(8,48,107)',
		    	width: 1.5
		    },
		    text: response[0], 
			type: 'bar',

		} 
		var layout = {
			xaxis: {
				tickangle: -45
			},
			yaxis: {
				title: "Number of Mentions"
			},
			title: "Countries in Cyber Attack News",
		}
		Plotly.newPlot('news_countries', [data], layout)

	})

}

function donut() {
/* data route */
//    var url = "/ip";
//    Plotly.d3.json(url, function (error, data) {
//        console.log(data);
  
var data2 = [{
 values: [51, 28608, 1715, 51, 233, 21,],
 labels: ['CONNECT', 'GET','HEAD', 'OPTIONS', 'POST', 'PROPFIND' ],
 domain: {
   x: [0, .48]
 },
 name: 'Methods',
 hoverinfo: 'label+percent+name',
 hole: .4,
 type: 'pie'
},{
 values: [32, 31, 27, 26, 22, 18, 18, 17, 16, 16],
 labels: ['104.217.216.170', '108.64.229.11', '104.217.216.170', '107.183.220.254', '104.217.216.170', '66.249.84.13', '66.249.84.15', '04.217.216.170', '23.239.208.54', '148.163.2.234' ],
 text: 'IP',
 textposition: 'inside',
 domain: {x: [.52, 1]},
 name: 'IP',
 hoverinfo: 'label+percent+name',
 hole: .4,
 type: 'pie'
}];

var layout = {
 title: 'Method',
 annotations: [
   {
     font: {
       size: 20
     },
     showarrow: false,
     text: '',
     x: 0.17,
     y: 0.5
   },
    {
      showarrow: false,
     text: '',
     x: 0.17,
     y: 0.5
   },
   {
     font: {
       size: 20
     },
     showarrow: false,
     text: '',
     x: 0.82,
     y: 0.5
   }
 ]
};

var DONUT = document.getElementById("erik_donut")
       Plotly.newPlot(DONUT, data2, layout);
//    });
}

donut();

news_countries();