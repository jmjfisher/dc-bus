//function to instantiate the Leaflet map
function createMap(){
    
    //var myBounds = [[41, -89.7],[43.9, -86.7]];
    
    var map = L.map('mapid', {
        maxZoom: 18,
        minZoom: 10,
        //maxBounds: myBounds,
        zoomControl:true
    }).setView([38.904167, -77.016111], 13);
   
    var streets = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1Ijoiam1qZmlzaGVyIiwiYSI6ImNqYXVlNDg3cDVhNmoyd21oZ296ZXpwdWMifQ.OGprR1AOquImP-bemM-f2g'
    }).addTo(map);
/*
    var imagery = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        id: 'mapbox.satellite',
        accessToken: 'pk.eyJ1Ijoiam1qZmlzaGVyIiwiYSI6ImNqYXVlNDg3cDVhNmoyd21oZ296ZXpwdWMifQ.OGprR1AOquImP-bemM-f2g'
    });
    
    var baseMaps = {
        "Streets": streets,
        "Imagery": imagery
    }; 
*/
    //use queue to parallelize asynchronous data loading
    d3.queue()
        .defer(d3.json, "data/blocks.topojson")
        .defer(d3.json, "data/dc.topojson")
        .defer(d3.json, "data/dc_bus_stops.topojson")
        .defer(d3.json, "data/metro_lines.topojson")
        .defer(d3.json, "data/metro_stations.topojson")
        .defer(d3.json, "data/rapid_bus.topojson")
        .defer(d3.json, "data/rapid_bus_trans.topojson")
        .await(callback);
        
    function callback (error, blocksTopo, dcTopo, busStopsTopo, linesTopo, stationsTopo, rapidTopo, brtTopo) {
        
        //grab the features from the topojsons
        var blocks = topojson.feature(blocksTopo, blocksTopo.objects.blocks).features;
        var outline = topojson.feature(dcTopo, dcTopo.objects.dc).features;
        var stops = topojson.feature(busStopsTopo, busStopsTopo.objects.dc_bus_stops).features;
        var lines = topojson.feature(linesTopo, linesTopo.objects.metro_lines).features;
        var stations = topojson.feature(stationsTopo, stationsTopo.objects.metro_stations).features;
        var rapidBus = topojson.feature(rapidTopo, rapidTopo.objects.rapid_bus).features;
        var brtBus = topojson.feature(brtTopo, brtTopo.objects.rapid_bus_trans).features;
        console.log(blocks, outline, stops, lines, stations, rapidBus, brtBus);

        //call function to add tracts information to add-able layers
        var blocksInformation = addBlocks(map, blocks);
        var blocksLayers = blocksInformation[0];
        var blocksScales = blocksInformation[1];

        //add blank blocks to begin...
        blocksLayers["None"].addTo(map);
/*     
        //call function to get CTA and building stuff on map
        var linesStationsBuildings = addOtherLayers(map, lines, stations, buildings, buffer);
        
        var groupedOverlays = {
          "Tract Data Overlays": tractLayers,
          "Reference Layers": linesStationsBuildings
        };
        
        //set options for groupedLayers control
        var options = {
            exclusiveGroups: ["Tract Data Overlays"],
            //collapsed: false
        }
        
        L.control.groupedLayers(baseMaps, groupedOverlays, options).addTo(map);
        
        //change legend on block change
        map.on('overlayadd', function(layer){
            //on layer change, update the legend
            changeLegend(layer, tractScales, map);
        })
*/
    };
/*
    var sidebar = L.control.sidebar('sidebar', {
        position: 'left'
    });

    map.addControl(sidebar);
    sidebar.show();
    sidebar.setContent('<h4 class="sidebar-title">Displacement and Gentrification Indicator Map</h4><br><p>This map allows you to visualize economic, education, housing, and population indicators that may help in the identification of areas of gentrification and/or displacement in Cook County, IL.</p><p>Hover your mouse over the <b>layers button</b> in the top right corner of the map to display and toggle between the available basemaps, census tract choropleth overlays, and reference layers. You may also click on any tract to retrieve more information about it and zoom and center the map to a tract by searching its ID.</p><p><i>How do I find a tract ID?</i> Scroll down to the corresponding dynamic parallel coordinates <b><a class="js-scroll" href="#dataarea">chart</a></b> where you can click and drag along the scales to refresh a list of tract IDs that meet the criteria of your choosing.</p><p>Learn more <b><a class= "js-scroll" href="#about">about</a></b> the data and developers.</p>');
*/
    $(".leaflet-control-container").on('mousedown dblclick pointerdown wheel', function(ev){
        L.DomEvent.stopPropagation(ev);
    });
    
}; // end of createMap

// source:http://leafletjs.com/examples/choropleth/
function changeLegend(layer,tractScales,map){
    //lol, MTA is NYC
    var MTA = ['CTA "L" Routes','CTA "L" Stations','CTA Stations 1-Mile Buffer','New Buildings Since 2010']
    var expressed = layer.name;
    
    //if adding MTA layer, don't mess with legend - the rest is housed in this IF statement
    if (MTA.includes(expressed) == false & expressed != 'Gentrification Index' & expressed != 'None'){
        
        //get rid of previous legend
        var oldLegend = $('.legend');
        if (oldLegend !== null){
            oldLegend.remove();
        }
        
        //set up (new) legend
        var domain = (tractScales[expressed].domain())
        var max = Math.max.apply(null, domain);
        var min = Math.min.apply(null, domain);
        var colors = tractScales[expressed].range();
        var quantiles = tractScales[expressed].quantiles();
        quantiles.unshift(min);
        quantiles.push(max);

        var legend = L.control({position: 'bottomleft'});

        legend.onAdd = function(map){

            var div = L.DomUtil.create('div', 'info legend')
            var labels = [];

            div.innerHTML += '<p><b>' + expressed + '</b></p>'

            // loop through our density intervals and generate a label with a colored square for each interval
            for (var i = 0; i < quantiles.length-1; i++) {
                div.innerHTML +=
                    '<i style="background:' + colors[i] + '"></i> ' +
                    quantiles[i].toFixed(0) + '%' + (String(quantiles[i + 1]) ? ' <b>-</b> ' + quantiles[i + 1].toFixed(0) + '%<br>' : '% +');
            };
            return div;
        };
        legend.addTo(map);
    } else if (MTA.includes(expressed) == false & expressed == 'Gentrification Index') {
        //get rid of previous legend
        var oldLegend = $('.legend');
        if (oldLegend !== null){
            oldLegend.remove();
        }
        
        //set up (new) legend
        var domain = (tractScales[expressed].domain())
        var max = Math.max.apply(null, domain);
        var min = Math.min.apply(null, domain);
        var colors = tractScales[expressed].range();
        var quantiles = tractScales[expressed].quantiles();
        quantiles.unshift(min);
        quantiles.push(max);

        var legend = L.control({position: 'bottomleft'});

        legend.onAdd = function(map){

            var div = L.DomUtil.create('div', 'info legend')
            var labels = [];

            div.innerHTML += '<p><b>' + expressed + '</b></p>'

            // loop through our density intervals and generate a label with a colored square for each interval
            for (var i = 0; i < quantiles.length-1; i++) {
                div.innerHTML +=
                    '<i style="background:' + colors[i] + '"></i> ' +
                    quantiles[i].toFixed(3) + (String(quantiles[i + 1]) ? ' <b>-</b> ' + quantiles[i + 1].toFixed(3) + '<br>' : ' +');
            };
            return div;
        };
        legend.addTo(map);
    } else if (MTA.includes(expressed) == false & expressed == 'None'){
        //get rid of previous legend
        var oldLegend = $('.legend');
        if (oldLegend !== null){
            oldLegend.remove();
        }
    }
}; // end of changeLegend

function addOtherLayers(map,lines,stations,buildings,buffer){
    
    var layerDict = {
        'New Buildings Since 2010': null,
        'CTA "L" Routes': null,
        'CTA "L" Stations': null,
        'CTA Stations 1-Mile Buffer': null
    };
    
    var routes = L.geoJSON(lines,{
        style: function(feature){return routeStyle(feature)}
    }).addTo(map);
    
    var stationMarkerOptions = {
        radius: 4,
        fillColor: "white",
        color: "#000",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
    };
    
    var stationPoints = L.geoJSON(stations, {
        pointToLayer: function (feature, latlng) {
            return L.circleMarker(latlng, stationMarkerOptions);
        },
        onEachFeature: stationName
    }).addTo(map);
    
    var buildingMarkerOptions = {
        radius: 2,
        fillColor: "purple",
        color: 'purple',
        weight: .5,
        opacity: .9,
        fillOpacity: .8
    };
    
    var buildingPoints = L.geoJSON(buildings, {
        pointToLayer: function (feature, latlng) {
            return L.circleMarker(latlng, buildingMarkerOptions);
        },
        onEachFeature: buildingInfo
    });
    
    var bufferOptions = {
        fillColor: "#2F4F4F",
        dashArray: "5, 5",
        color: "#000",
        weight: 2,
        opacity: 1,
        fillOpacity: 0.15
    };
    
    var bufferPoly = L.geoJSON(buffer,{
        style: bufferOptions});
    
    layerDict['CTA "L" Routes'] = routes;
    layerDict['CTA "L" Stations'] = stationPoints;
    layerDict['CTA Stations 1-Mile Buffer'] = bufferPoly;
    layerDict['New Buildings Since 2010'] = buildingPoints
    
    return layerDict;
}; // end of  addOtherLayers;

function buildingInfo(feature,layer){
    
    var year = '<b>Year</b>: ' + String(feature.properties['ISSUE_DATE']).slice(0,4);
    var cost = '<b>Cost</b>: $' + feature.properties['EST_COST'].toLocaleString('en');
    var address = '<b>Address</b>: ' + String(feature.properties['STREET_NUM']) + ' ' + String(feature.properties['STREET_DIR']) + ' ' + String(feature.properties['STREET_NAM']) + ' ' + String(feature.properties['SUFFIX']);
    var permit = '<b>Permit #</b>: ' + String(feature.properties['PERMIT_NO']);
    
    var popupContent = year + '<br>' + cost + '<br>' + address + '<br>' + permit;
    
    layer.bindTooltip(popupContent, {
        offset: [0,-7],
        direction: 'top',
        className: 'popupBuilding'});
} // end of buildingInfo

function stationName(feature,layer){
    
    var popupContent = feature.properties['LONGNAME'];
    
    layer.bindTooltip(popupContent, {
        offset: [0,-7],
        direction: 'top',
        className: 'popupStation'});
} // end of  stationNAME

function routeStyle(feature){
    
    var routeColor = feature.properties['LEGEND'];
    
    if (routeColor === 'RD'){
        var color = 'red' 
    }else if(routeColor ==='BL'){
        var color = 'blue'
    }else if(routeColor ==='BR'){
        var color = 'brown'
    }else if(routeColor ==='GR'){
        var color = 'green'
    }else if(routeColor ==='ML'){
        var color = 'black'
    }else if(routeColor ==='OR'){
        var color = 'orange'
    }else if(routeColor ==='PK'){
        var color = 'pink'
    }else if(routeColor ==='PR'){
        var color = 'purple'
    }else{
        var color = 'yellow'
    };
    
    //define style
    var myStyle = {
        "color": color,
        "weight": 3,
        "opacity": .8
    };
    return myStyle;
}; // end of  routeStyle

function addBlocks(map, tracts) { //source: http://bl.ocks.org/Caged/5779481
    
    var options = ['POP','PCI','NONE'];
    var dictKeys = ['Population','Per Capita Income','None']
    
    var altDitc = {};
    var scaleDict = {};
    var geojson;
    
    function highlightFeature(e) {
        var layer = e.target;
        layer.setStyle({
            "weight": 4,
            "opacity": 0.8,
            "color": 'aqua'
        });
        if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
            layer.bringToFront();
        }
    };

    function resetHighlight(e) {
        var layer = e.target;
        layer.setStyle({
        "weight": 0,
        "opacity": 0.5,
        "color": '#3a3a3a'
        });
        if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
            layer.bringToFront();
        }
    };
    
    function onEachFeature(feature,layer,expressed) {

        var lookUp = ['POP', 'PCI']
        var fields = ['Population: ','Per Capita Income: ']

        var popupContent = '';
        lookUp.unshift('GEOID');
        fields.unshift('Block: ');

        for (var i=0; i < lookUp.length; i++){
            var stat = String(feature.properties[lookUp[i]]);
            popupContent += '<b>'+fields[i]+'</b>';
            popupContent += stat + '<br>';
        }

        layer.bindPopup(popupContent, {
            minWidth: 50,
            closeOnClick: true,
            className: 'popup'});
        
        if (expressed !== 'NONE'){
            layer.on({
                mouseover: highlightFeature,
                mouseout: resetHighlight
            });
        };
    }; // end of onEachFeature
    
    for (var i = 0; i < options.length; i++){
        var expressed = options[i];
        var dictKey = dictKeys[i];
        var colorScale = makeColorScale(expressed,tracts);
        geojson = L.geoJson(tracts, {
            style: function(feature){
                if (expressed != 'NONE'){
                    return setStyle(feature, colorScale, expressed)
                } else {
                    var myStyle = {
                        "fillColor": '#3a3a3a',
                        "fillOpacity": 0,
                        "weight": 0,
                        "opacity": 0,
                        "color": '#3a3a3a',
                        "className": String(feature.properties['CG_GEOID'])
                    };
                    return myStyle;
                }
            },
            onEachFeature: function(feature,layer){return onEachFeature (feature,layer,expressed)}
            //http://leafletjs.com/examples/choropleth/
        })
        altDitc[dictKey] = geojson;
        scaleDict[dictKey] = colorScale;
    }
    return [altDitc, scaleDict];
}; // end of addTracts

function setStyle(feature, colorscale, expressed){
    //find the feature's fill color based on scale and make sure it's not undefined
    var check = feature.properties[expressed];
    if (check == 'UNDEF'){
        var fillColor = "#CCC"
    }else{
        var fillColor = colorscale(feature.properties[expressed]);
    }
    //define style
    var myStyle = {
        "fillColor": fillColor,
        "fillOpacity": 0.5,
        "weight": 0,
        "opacity": 0.5,
        "color": '#3a3a3a',
        "className": String(feature.properties['CG_GEOID'])
    };
    return myStyle;
}; // end of  setStyle

function makeColorScale(expressed,tracts){
    
    var twoGreenThreeRed = ['UERPCTCHG','POVPCTCHG','ORRPCTCHG'];
    var threeGreenTwoRed = ['HSPCTCHG'];
    var twoRedThreeGreen = ['PCIPCTCHG','POPPCTCHG','BLKPCTCHG','ASNPCTCHG','HSPPCTCHG'];
    var threeRedTwoGreen = ['WHTPCTCHG'];
    var oneRedFourGreen = ['ORRPCTCHG'];
    
    if (twoGreenThreeRed.includes(expressed)){
        var colorClasses = ['#74c476','#bae4b3','#fd8d3c','#f03b20','#bd0026'];
    } else if (threeGreenTwoRed.includes(expressed)) {
        var colorClasses = ['#74c476','#bae4b3','#edf8e9','#fd8d3c','#f03b20'];
    } else if (twoRedThreeGreen.includes(expressed)) {
        var colorClasses = ['#fd8d3c','#fecc5c','#74c476','#31a354','#006d2c'];
    } else if (threeRedTwoGreen.includes(expressed)) {
        var colorClasses = ['#f03b20','#fd8d3c','#fecc5c','#74c476','#31a354'];
    } else if (expressed === 'GENT_IDX'){
        var colorClasses = ['#ffffb2','#fecc5c','#fd8d3c','#f03b20','#bd0026'];
    } else {
        var colorClasses = ['#fd8d3c','#bae4b3','#74c476','#31a354','#006d2c'];
    };

    //create color scale generator
    var colorScale = d3.scaleQuantile()
        .range(colorClasses);

    //build array of all values of the expressed attribute
    var domainArray = [];
    for (var i=0; i<tracts.length; i++){
        var check = tracts[i].properties[expressed];
        if (check !== 'UNDEF') {
            var val = parseFloat(check);
            domainArray.push(val);
        }
    };
    //assign array of last 4 cluster minimums as domain
    colorScale.domain(domainArray);

    return colorScale;
}; // end of  makeColorScale

//delayed scrolling between page sections
function smoothScroll(){
  // Add smooth scrolling to all links
  $(".js-scroll").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 700, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }
  });
}; // end of smoothScroll

function scrollify(){
    $.scrollify({
        section : "#home,#maparea,#dataarea,#aboutarea",
        easing: "easeOutExpo",
        scrollSpeed: 700,
        offset : 0,
        scrollbars: true,
        standardScrollElements: "",
        setHeights: true,
        overflowScroll: true,
        updateHash: false,
        touchScroll:true,
        before:function() {},
        after:function() {},
        afterResize:function() {},
        afterRender:function() {}
    });
};

function smallBrowser(){
    d3.select('#data').append("div")
        .attr('class','small-browser')
        .html('<h4 id="mobile-message">(It looks as if your browser is too thin for this chart to function usefully. Please visit again on a tablet or computer. Thank you.)</h4>');
};

$(document).ready(createMap);
//$(document).ready(smoothScroll);
//$(document).ready(scrollify);