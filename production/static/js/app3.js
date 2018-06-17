

function donut() {
/* data route */
    var url = "/ip";
    Plotly.d3.json(url, function (error, response) {
        console.log(response)
        var data = response
    //  name: 'IP's,
    //  hoverinfo: 'label+percent+name',
    //  hole: .4,
    //  type: 'pie'
    //},
    //{
    //  values: [27, 11, 25, 8, 1, 3, 25],
    //  labels: ['IP' ],
    //  text: 'address',
    //  textposition: 'inside',
    //  domain: {x: [.52, 1]},
    //  name: 'IP',
    //  hoverinfo: 'label+percent+name',
    //  hole: .4,
    //  type: 'pie'
    //};

        var layout = {
          title: 'IP addresses',
          annotations: [
            {
              font: {
                size: 20
              },
              showarrow: false,
              text: 'GHG',
              x: 0.17,
              y: 0.5
            },
            {
              font: {
                size: 20
              },
              showarrow: false,
              text: 'CO2',
              x: 0.82,
              y: 0.5
            }
          ],
          height: 600,
          width: 600
        };
        Plotly.newPlot('myDiv', response, layout);
    });
}
donut();