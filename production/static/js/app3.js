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

