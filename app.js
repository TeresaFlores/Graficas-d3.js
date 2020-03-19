
let data = d3.json("./datos.json", function(data) {
     console.log(data);

     let width= 300;
     let height=300;
     let radius= Math.min(width, height) / 2;

     let color= d3.scaleOrdinal()
     .range(["#FFBF00", "#F7FE2E", "#C8FE2E","#64FE2E", "#2EFE9A"]);

     let arc = d3.arc()
     .outerRadius(radius -15)
     .innerRadius(120);

     let labelArc= d3.arc()
     .outerRadius(radius -50)
     .innerRadius(radius -50);

     let pie= d3.pie()
     .sort(null)
     .value(function(d) {
          return d.dato;
     }) ;

     
     let svg= d3.select("#chart-1").append("svg")
     .attr("width", width)
     .attr("height",height)
     .append("g")
     .attr("transform","translate( " + width / 2  + " , " + height / 2 + ")");
     
     let g = svg.selectAll(".arc")
     .data(pie(data))
     .enter().append("g")
     .attr("class","arc");

     g.append("path")
          .attr("d",arc)
          .style("fill", function(d){
               return color(d.data.dato); 
               
          });

     // g.append("text")
     //      .attr("transform", function(d) {
     //           return " translate ( " + labelArc.centroid (d) + ") "; 
     //      })
     //      .attr("dy", "0.35em")
     //      .text(function(d){
     //           return d.data.dato;
     //      });

});

// //__________________________________________________________________________
 
let dataDos = d3.json("./datos.json", function(data) {
     console.log(data);

     let width= 300;
     let height=300;
     let radius= Math.min(width, height) / 2;

     let color= d3.scaleOrdinal()
     .range(["#00BFFF", "#0080FF", "#4000FF","#8000FF", "#BF00FF"]);

     let arc = d3.arc()
     .outerRadius(radius -15)
     .innerRadius(120);

     let labelArc= d3.arc()
     .outerRadius(radius -50)
     .innerRadius(radius -50);

     let pie= d3.pie()
     .sort(null)
     .value(function(d) {
          return d.asistencia;
     }) ;

     
     let svg= d3.select("#chart-2").append("svg")
     .attr("width", width)
     .attr("height",height)
     .append("g")
     .attr("transform","translate( " + width / 2  + " , " + height / 2 + ")");
     
     let g = svg.selectAll(".arc")
     .data(pie(data))
     .enter().append("g")
     .attr("class","arc");

     g.append("path")
          .attr("d",arc)
          .style("fill", function(d){
               return color(d.data.asistencia); 
               
          });

     // g.append("text")
     //      .attr("transform", function(d) {
     //           return " translate ( " + labelArc.centroid (d) + ") "; 
     //      })
     //      .attr("dy", "0.35em")
     //      .text(function(d){
     //           return d.data.asistencia;
     //      });

});

//________________________________

let dataTres = d3.json("./datos.json", function(data) {
     console.log(data);

     let width= 300;
     let height=300;
     let radius= Math.min(width, height) / 2;

     let color= d3.scaleOrdinal()
     .range(["#00FF80", "#00FFBF", "#00FFFF","#00BFFF", "#0080FF"]);

     let arc = d3.arc()
     .outerRadius(radius -15)
     .innerRadius(120);

     let labelArc= d3.arc()
     .outerRadius(radius -50)
     .innerRadius(radius -50);

     let pie= d3.pie()
     .sort(null)
     .value(function(d) {
          return d.taquilla;
     }) ;

     
     let svg= d3.select("#chart-3").append("svg")
     .attr("width", width)
     .attr("height",height)
     .append("g")
     .attr("transform","translate( " + width / 2  + " , " + height / 2 + ")");
     
     let g = svg.selectAll(".arc")
     .data(pie(data))
     .enter().append("g")
     .attr("class","arc");

     g.append("path")
          .attr("d",arc)
          .style("fill", function(d){
               return color(d.data.taquilla); 
               
          });

     // g.append("text")
     //      .attr("transform", function(d) {
     //           return " translate ( " + labelArc.centroid (d) + ") "; 
     //      })
     //      .attr("dy", "0.35em")
     //      .text(function(d){
     //           return d.data.taquilla;
     //      });

});