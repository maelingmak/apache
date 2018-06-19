function donut() {
/* data route */
//    var url = "/ip";
//    Plotly.d3.json(url, function (error, data) {
//        console.log(data);
  
var data2 = [{
 values: [16, 15, 6, 5, 42],
 labels: ['US', 'China', 'Russian Federation','India', 'Rest of World' ],
 domain: {
   x: [0, .48]
 },
 name: "Top ten IP's",
 hoverinfo: 'label+percent+name',
 hole: .4,
 type: 'pie'
},{
 values: [27, 25, 8, 3, 25],
 labels: ['US', 'China', 'Russian Federation', 'India', 'Rest of World' ],
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
     text: 'Get',
     x: 0.17,
     y: 0.5
   },
    {
      showarrow: false,
     text: 'yyy',
     x: 0.17,
     y: 0.5
   },
   {
     font: {
       size: 20
     },
     showarrow: false,
     text: 'mmm',
     x: 0.82,
     y: 0.5
   }
 ],
 height: 600,
 width: 600
};


       Plotly.newPlot('erik_donut', data2, layout);
//    });
}
donut();

