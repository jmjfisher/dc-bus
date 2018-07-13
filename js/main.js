// using d3 for convenience, and storing a selected elements
var Container = d3.select('#scroll');
var Graphic = Container.select('.scroll__graphic');
var Chart = Graphic.select('.chart');
var Text = Container.select('.scroll__text');
var Step = Text.selectAll('.step');

// initialize the scrollama
var scroller = scrollama();

function handleResize() {
	// 1. update height of step elements for breathing room between steps
	var stepHeight = Math.floor(window.innerHeight * 0.75);
	Step.style('height', stepHeight + 'px');

	// 2. update height of graphic element
	var bodyWidth = d3.select('body').node().offsetWidth;

	Graphic
		.style('height', window.innerHeight + 'px');

	// 3. update width of chart by subtracting from text width
	var chartMargin = 32;
	var textWidth = Text.node().offsetWidth;
	var chartWidth = Graphic.node().offsetWidth - textWidth - chartMargin;
	// make the height 1/2 of viewport
	var chartHeight = Math.floor(window.innerHeight / 2);

	Chart
		.style('width', chartWidth + 'px')
		.style('height', chartHeight + 'px');

	// 4. tell scrollama to update new element dimensions
	scroller.resize();
}

function handleStepEnter(response) {
	// response = { element, direction, index }

	// fade in current step
	Step.classed('is-active', function (d, i) {
		return i === response.index;
	})

	// update graphic based on step here
	var stepData = Step.attr('data-step')
}

function handleContainerEnter(response) {
	// response = { direction }

	// sticky the graphic
	Graphic.classed('is-fixed', true);
	Graphic.classed('is-bottom', false);
}

function handleContainerExit(response) {
	// response = { direction }

	// un-sticky the graphic, and pin to top/bottom of container
	Graphic.classed('is-fixed', false);
	Graphic.classed('is-bottom', response.direction === 'down');
}

//function to init charts
function initCharts(){

    $('.chart').load('img/main_chart.svg');
    
	// 1. call a resize on load to update width/height/position of elements
	handleResize();

	// 2. setup the scrollama instance
	// 3. bind scrollama event handlers (this can be chained like below)
	scroller
		.setup({
			container: '#scroll', // our outermost scrollytelling element
			graphic: '.scroll__graphic', // the graphic
			text: '.scroll__text', // the step container
			step: '.scroll__text .step', // the step elements
			offset: 0.5, // set the trigger to be 1/2 way down screen
			debug: true, // display the trigger offset for testing
		})
		.onStepEnter(handleStepEnter)
		.onContainerEnter(handleContainerEnter)
		.onContainerExit(handleContainerExit);

	// setup resize event
	window.addEventListener('resize', handleResize);
    
    d3.queue()
        .defer(d3.csv, "data/dc_pop.csv") //load attributes from csv
        .defer(d3.csv, "data/dc_car_regi.csv") //load attributes from csv
        .defer(d3.csv, "data/fares.csv") //load attributes from csv
        .defer(d3.csv, "data/ridership.csv") //load attributes from csv
        .defer(d3.csv, "data/transport_work.csv") //load attributes from csv
        .await(callback);
    
    function callback(error,popCSV,regiCSV,faresCSV,rideCSV,transportCSV){
        
        var popDataDict = [];
        for (var i=0; i < popCSV.length; i++) {
            popDataDict.push({
                year: popCSV[i]["YEAR"],
                pop: popCSV[i]["POP"]
            });
        };
        console.log(popDataDict)
        
        var regDataDict = [];
        for (var i=0; i < regiCSV.length; i++) {
            regDataDict.push({
                year: regiCSV[i]["YEAR"],
                regs: regiCSV[i]["REGS"]
            });
        };
        console.log(regDataDict)
        
        var fareDataDict = [];
        for (var i=0; i < faresCSV.length; i++) {
            fareDataDict.push({
                date: faresCSV[i]["DATE"],
                fare: faresCSV[i]["FARE"],
                pcc: faresCSV[i]["PCC"]
            });
        };
        console.log(fareDataDict)
        
        var rideDataDict = [];
        for (var i=0; i < rideCSV.length; i++) {
            rideDataDict.push({
                year: rideCSV[i]["YEAR"],
                rides: rideCSV[i]["RIDE"]
            });
        };
        console.log(rideDataDict)
        
        var transportDataDict = [];
        for (var i=0; i < transportCSV.length; i++) {
            transportDataDict.push({
                year: transportCSV[i]["YEAR"],
                tot: transportCSV[i]["TOT"],
                drive: transportCSV[i]["DRIVE"],
                cp: transportCSV[i]["CP"],
                pub: transportCSV[i]["PUB"],
                walk: transportCSV[i]["WALK"],
                other: transportCSV[i]["OTHER"],
                wah: transportCSV[i]["WAH"]
            });
        };
        console.log(transportDataDict)
        
        $('#ridership-17').mouseover(function(){
            alert("testing");
        })
        
        /*
            .on("mouseover", highlight)
            .on("mouseout", dehighlight)
            .on("mousemove", moveLabel);
        */
        
    };// end callback
    
};//end initCharts

//function to instantiate the Leaflet map
function createMap(){
    
    //var myBounds = [[41, -89.7],[43.9, -86.7]];
    
    var map = L.map('mapid', {
        maxZoom: 18,
        minZoom: 10,
        //maxBounds: myBounds,
        zoomControl:true
    }).setView([38.908, -77.034915], 12);
   
    var streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoiam1qZmlzaGVyIiwiYSI6ImNqYXVlNDg3cDVhNmoyd21oZ296ZXpwdWMifQ.OGprR1AOquImP-bemM-f2g').addTo(map);

    var imagery = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoiam1qZmlzaGVyIiwiYSI6ImNqYXVlNDg3cDVhNmoyd21oZ296ZXpwdWMifQ.OGprR1AOquImP-bemM-f2g');
    
    var baseMaps = {
        "Default": streets,
        "Imagery": imagery
    }; 

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
    
        //call function to get everything else available
        var allOtherLayers = addOtherLayers(map, outline, lines, stations, rapidBus, brtBus);

        var groupedOverlays = {
          "Block Overlays": blocksLayers,
          "Reference Layers": allOtherLayers
        };
        
        //set options for groupedLayers control
        var options = {
            exclusiveGroups: ["Block Overlays"],
            //collapsed: false
        }
        
        L.control.groupedLayers(baseMaps, groupedOverlays, options).addTo(map);
/*
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

function addOtherLayers(map, outline, lines, stations, rapidBus, brtBus){
    
    var layerDict = {
        'DC Outline': null,
        'Metrorail Lines': null,
        'Metrorail Stations': null,
        '2030 Rapid Bus': null,
        '2030 Bus Rapid Transit': null
    };
    
    var rapidStyle = {
        "color": 'purple',
        "weight": 2.5,
        "opacity": .8
    };
    
    var rapidRoutes = L.geoJSON(rapidBus,{
        style: rapidStyle
    });
    
    var brtStyle = {
        "color": 'green',
        "weight": 2.5,
        "opacity": .8
    };
    
    var brtRoutes = L.geoJSON(brtBus,{
        style: brtStyle
    });
    
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
    
    var outlineOptions = {
        color: "#000",
        weight: 3.5,
        opacity: 0.8,
        fillOpacity: 0
    };
    
    var outlinePoly = L.geoJSON(outline,{
        style: outlineOptions}).addTo(map);
    
    layerDict['DC Outline'] = outlinePoly;
    layerDict['Metrorail Lines'] = routes;
    layerDict['Metrorail Stations'] = stationPoints;
    layerDict['2030 Rapid Bus'] = rapidRoutes;
    layerDict['2030 Bus Rapid Transit'] = brtRoutes;
    
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
    
    var popupContent = feature.properties['NAME'];
    
    layer.bindTooltip(popupContent, {
        offset: [0,-7],
        direction: 'top',
        className: 'popupStation'});
} // end of  stationNAME

function routeStyle(feature){
    
    var routeColor = feature.properties['NAME'];
    
    if (routeColor === 'red'){
        var color = 'red' 
    }else if(routeColor ==='blue'){
        var color = 'blue'
    }else if(routeColor ==='green'){
        var color = 'green'
    }else if(routeColor ==='orange'){
        var color = 'orange'
    }else if(routeColor ==='silver'){
        var color = 'grey'
    }else{
        var color = 'yellow'
    };
    
    //define style
    var myStyle = {
        "color": color,
        "weight": 2.5,
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
        "weight": 1,
        "opacity": 0.75,
        "color": '#FFF'
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
                        "className": String(feature.properties['GEOID'])
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
}; // end of addBlocks

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
        "weight": 1,
        "opacity": 0.75,
        "color": '#FFF',
        "className": String(feature.properties['GEOID'])
    };
    return myStyle;
}; // end of  setStyle

function makeColorScale(expressed,tracts){
    
    //var colorClasses = ['#f6eff7','#bdc9e1','#67a9cf','#1c9099','#016c59'];//blue
    var colorClasses = ['#feebe2','#fbb4b9','#f768a1','#c51b8a','#7a0177'];//purple

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


//$(document).ready(createMap);
$(document).ready(initCharts);