/** Climate Just, University of Manchester
 Last updated: 27/08/2021
 By: Richard Kingston
 **/

// OS key
var apiKey = '46go7NDT06s4VAsKiCKQnKwShKEK33xg';
var serviceUrl = 'https://api.os.uk/maps/raster/v1/zxy';

// Retrieve document's body & create new spinner.
var body = document.getElementsByTagName('body')[0];
var spinner = new Spinner({
    lines: 13, // The number of lines to draw.
    length: 15, // The length of each line.
    width: 15, // The line thickness.
    radius: 50, // The radius of the inner circle.
    corners: 1, // Corner roundness (0..1).
    rotate: 0, // The rotation offset.
    direction: 1, // 1: clockwise, -1: counterclockwise.
    color: '#df006d', // #rgb or #rrggbb or array of colors.
    speed: 0.5, // Rounds per second.
    trail: 50, // Afterglow percentage.
    shadow: false, // Whether to render a shadow.
    hwaccel: false, // Whether to use hardware acceleration.
    className: 'spinner', // The CSS class to assign to the spinner.
    zIndex: 2e9, // The z-index (defaults to 2000000000).
    top: '50%', // Top position relative to parent.
    left: '50%' // Left position relative to parent.
});

var url = "https://maps.tellus-toolkit.com/geoserver/wms",
    geojson,
    map = L.map("map", {
        srs: 27700, //3857,
        worldCopyJump: false,
        center: [55, -4],
        zoomSnap: 0.25,
        zoom: 7,
        minZoom: 5,
        maxZoom: 16,
        updateWhenZooming: false,
        attributionControl: false,
        loadingControl: true,
        fullscreenControl: true
    });
// restrict map panning to areas around Hull
/*var southWest = L.latLng(50, -15),
    northEast = L.latLng(63, 5);
var bounds = L.latLngBounds(southWest, northEast);
map.setMaxBounds(bounds);
map.on('drag', function () {
    map.panInsideBounds(bounds, {animate: true});
});*/

var iconLayersControl = new L.Control.IconLayers(
    [{
        title: 'OS Light',
        icon: 'imgs/os-light.png',
        layer: L.tileLayer(serviceUrl + '/Light_3857/{z}/{x}/{y}.png?key=' + apiKey, {
            format: 'image/png',
            maxZoom: 16,
            opacity: 0.4
        })
    }, {
        title: 'OS Outdoor',
        icon: 'imgs/os-outdoor.png',
        layer: L.tileLayer(serviceUrl + '/Outdoor_3857/{z}/{x}/{y}.png?key=' + apiKey, {
            format: 'image/png',
            maxZoom: 16,
            opacity: 0.4
        })
    }, {
        title: 'OS Road',
        icon: 'imgs/os-road.png',
        layer: L.tileLayer(serviceUrl + '/Road_3857/{z}/{x}/{y}.png?key=' + apiKey, {
            format: 'image/png',
            maxZoom: 16,
            opacity: 0.4
        })
    }, {
        title: 'Esri satellite',
        icon: 'imgs/esri_satellite.png',
        layer: L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
            attribution: 'Tiles &copy; Esri &mdash; Source: USGS, Esri, TANA, DeLorme, and NPS',
            maxZoom: 13
        })
    }
    ], {
        position: 'bottomleft',
        expand: 'horzontal',
        maxLayersInRow: 5
    }
);

iconLayersControl.addTo(map);

// Base layers are loaded via the above controller rather than in the layers list.
var baseLayers = null;

// wms layers from Geoserver can be found in mapLayers.js
// Map menu overlays can be found in mapMenu.js

// Zoom to user drawn box
var zoomCtrlOpts = {
    modal: false,
    title: "Zoom to a box",
    //addToZoomControl: true
};

var zoomCtrl = L.control.zoomBox(zoomCtrlOpts);
map.addControl(zoomCtrl);

var options = {
    /*container_width: "300px",
    container_maxHeight: "770px",
    group_maxHeight: "200px",
    overflow: false,
    exclusive: false,
    expanded: true,
    collapsed: false,
    group_togglers: {
        show: true,
        labelAll: 'group on',
        labelNone: 'group off',
    },*/
    namedToggle: true,
    selectorBack: false,
    closedSymbol: '&#8862; &#x1f5c0;',
    openedSymbol: '&#8863; &#x1f5c1;',
    collapseAll: 'Collapse all',
    expandAll: 'Expand all',
    collapsed: false
};
// create the map layer tree menu
var layerControl1 = L.control.layers.tree(null, floodMaps, options);
var layerControl2 = L.control.layers.tree(null, heatMaps, options);
var layerControl3 = L.control.layers.tree(null, fuelMaps, options);
var layerControl4 = L.control.layers.tree(null, agencyMaps, options);
var layerControl5 = L.control.layers.tree(null, adminMaps, options);
//var layerControl5 = L.control.groupedLayers(null, ukcp18_exclusive, group_options);

/*function searchTree(overlaysFlooding) {
    let count = 0;
    let tierCount = 0;
    let isGroup = false;

    overlaysFlooding.filters.forEach(filter => {
        if (filter.filters) {
            tierCount = this.searchTree(filter);
        }

        if (filter.value) {
            filter.isExpanded = true;
        }
    });

    return count;
}*/

// Reset map to initial zoom, plus forward and back button
L.control.navbar().addTo(map);

////////////////////////////////////////////////////////////////
// Handle click on map with a wms query popup
map.on('click', function (e) {
    var wmsLayerset = new Set([]); //UK_districts
    map.eachLayer(function (layer) {
        if (layer.wmsParams)
            wmsLayerset.add(layer);
    });
    var wmsLayersCount = wmsLayerset.size;
    if (wmsLayersCount > 0) {
        // Start spinner.
        spinner.spin(body);
    }

    var fullfilledRequestsCount = 0;
    var popupContent = '<div id="report"><b class="attributeText">You have queried a location with the following details:</b><br><p class="attributeText">';
    // [item name="HBName"]
    //hb = 'It is in ' + properties['name'] + ' health board. ';
    var allFeatureCount = 0;
    var wmsLayers = Array.from(wmsLayerset);
    qlayer = cloneLayer(wmsLayers[0]);
    if (!qlayer.wmsParams['CQL_FILTER']) {
        qlayer.wmsParams['CQL_FILTER'] = 'INCLUDE';
    }

    for (var i = 1; i < wmsLayersCount; i++) {
        var wmsLayer = wmsLayers[i];
        console.log("processing " + wmsLayer.wmsParams['layers']);
        qlayer.wmsParams['layers'] += ',' + wmsLayer.wmsParams['layers'];
        if (wmsLayer.wmsParams['CQL_FILTER']) {
            qlayer.wmsParams['CQL_FILTER'] += ';' + wmsLayer.wmsParams['CQL_FILTER'];
        } else {
            qlayer.wmsParams['CQL_FILTER'] += ';INCLUDE';
        }
    }
    // Send 'GetFeatureInfo' requests.
    var wmsLayer = qlayer;
    wmsLayer.getFeatureInfo({
        map: map,
        latlng: e.latlng,
        featureCount: 100,
        CQL_FILTER: qlayer.wmsParams['CQL_FILTER'],
        done: function (featuresCollection, xhr) {
            var result = createMarkingWhenDone(this, featuresCollection);
            popupContent += result.popupContent;
            allFeatureCount += result.allFeatureCount;
            // place a circle on the map where a report is created
            var marker;
            map.on('click', function (e) {
                if (marker) { // check to see if a marker already exists
                    map.removeLayer(marker); // if so remove it
                }
                // set size etc. of circle marker
                marker = new L.CircleMarker(e.latlng, {
                    radius: 14,
                    color: 'darkred',
                    fillOpacity: 0,
                    weight: 1.75
                }).addTo(map);
                // centre on the map click
                map.setView(marker.getLatLng());
            });
        },
        fail: function (errorThrown, xhr) {
            console.log("failed  " + errorThrown);
            popupContent += createMarkingWhenError(this, errorThrown);
        },
        always: function () {
            fullfilledRequestsCount++;
            // Stop spinner.
            //if (fullfilledRequestsCount === wmsLayersCount) {
            var finalPopupContent = createFinalMarking(wmsLayersCount, allFeatureCount, popupContent);

            spinner.stop();
            // uncomment if you want the map click info to appear on the map rather than in a footer.
            /*new L.Popup({
                minWidth: 300,
                maxWidth: 450,
                maxHeight: 400,
                autoClose: true,
                closeOnClick: true
            })
                .setLatLng(e.latlng)
                .setContent(finalPopupContent)
                .openOn(map)*/

            // place map 'popup' info in a footer below map rather than on the map itself
            document.getElementById('map-info-footer').innerHTML = finalPopupContent;
            //}
        }
    });
});

// Helper methods.
function createMarkingWhenDone(_this, _featuresCollection) {
    var features = _featuresCollection.features;
    var featuresCount = features.length;
    var _popupContent = '';

    // Layer info.
    if (featuresCount > 0) {
        // flood indicators
        var nfvi = [];
        var susceptibility = [];
        var age = [];
        var under5 = [];
        var over75 = [];
        var ill_health = [];
        var ill_d2d = [];
        var llti = [];
        var f_prepare = [];
        var income = [];
        var unemp = [];
        var LTunemp = [];
        var lowIncome = [];
        var depChildUnemp = [];
        var incomeDepIndex = [];
        var info = [];
        var arrivalsUK = [];
        var engLang = [];
        var localKnow = [];
        var migrants = [];
        var propTenure = [];
        var privRent = [];
        var socialRent = [];
        var nfviRespond = [];
        var mobility = [];
        var disability = [];
        var medCare = [];
        var transport = [];
        var crimeIndex = [];
        var crimeIMD = [];
        var nfviRecover = [];
        var nfviCommunity = [];
        var housing = [];
        var caravan = [];
        var directFlood = [];
        var serviceFlood = [];
        var emergServices = [];
        var careHomes = [];
        var gpFlood = [];
        var schoolFlood = [];
        var socialNet = [];
        var pensioner = [];
        var loneParent = [];
        var age4_11 = [];
        var SFRIpresDayG = [];
        var SFRI2050_2degG = [];
        var SFRI2050_4degG = [];
        var SFRIpresDayI = [];
        var SFRI2050_2degI = [];
        var SFRI2050_4degI = [];
        var SFRIpresDayG_SW = [];
        var SFRI2050_2degG_SW = [];
        var SFRI2050_4degG_SW = [];
        var SFRIpresDayI_SW = [];
        var SFRI2050_2degI_SW = [];
        var SFRI2050_4degI_SW = [];
        // Heat maps
        //var heat_disadvantage_2011_21012014 = [];
        /*var RWHZZ_CV7 = []
        var R_HZZ_CV1 = [];
        var R_HZZ_CV2 = [];
        var R_HZZ_CV3 = [];
        var R_HZZ_CV4 = [];
        var R_HZZ_CV5 = [];
        var R_HZZ_CV6 = [];
        var R_HZZ_CV7 = [];
        var R_HZZ_CV8 = [];
        var R_HZZ_CV9 = [];
        var R_HZZ_CV10 = [];
        var R_HZZ_CV11 = [];
        var R_HZZ_CV12 = [];
        var R_HZZ_CV13 = [];
        var R_HZZ_CV14 = [];
        var R_HZZ_CV15 = [];
        var R_HZZ_CV16 = [];
        var R_HZZ_CV17 = [];
        var R_HZZ_CV18 = [];
        var R_HZZ_CV19 = [];
        var R_HZZ_CV20 = [];
        var R_HZZ_CV21 = [];
        var R_HZZ_CV22 = [];
        var R_HZZ_CV23 = [];
        var R_HZZ_CV24 = [];
        var R_HZZ_CV25 = [];
        var R_HZZ_CV26 = [];
        var R_HZZ_CV27 = [];
        var R_HZZ_CV28 = [];
        var R_HZZ_CV29 = [];
        var R_HZZ_CV30 = [];
        var R_HZZ_CV31 = [];
        var R_HZZ_CV32 = [];
        var R_HZZ_CV33 = [];
        var R_HZZ_CV34 = [];
        var R_HZZ_CV35 = [];
        var R_HZZ_CV36 = [];*/
        var RWHZZ_CV1 = [];
        var RWHZZ_CV2 = [];
        var RWHZZ_CV3 = [];
        /*var RWHZZ_CV4 = [];
        var RWHZZ_CV5 = [];
        var RWHZZ_CV6 = [];
        var RWHZZ_CV7 = []
        var RWHZZ_CV8 = [];
        var RWHZZ_CV9 = [];
        var RWHZZ_CV10 = [];
        var RWHZZ_CV11 = [];
        var RWHZZ_CV12 = [];
        var RWHZZ_CV13 = [];
        var RWHZZ_CV14 = [];
        var RWHZZ_CV15 = [];
        var RWHZZ_CV16 = [];
        var RWHZZ_CV17 = [];
        var RWHZZ_CV18 = [];
        var RWHZZ_CV19 = [];
        var RWHZZ_CV20 = [];
        var RWHZZ_CV21 = [];
        var RWHZZ_CV22 = [];
        var ZRWHZZ_CV2 = [];
        var RWHZZ_CV24 = [];
        var RWHZZ_CV25 = [];
        var RWHZZ_CV26 = [];
        var RWHZZ_CV27 = [];
        var RWHZZ_CV28 = [];
        var RWHZZ_CV29 = [];
        var RWHZZ_CV30 = [];
        var RWHZZ_CV31 = [];
        var RWHZZ_CV32 = [];
        var RWHZZ_CV33 = [];
        var RWHZZ_CV34 = [];
        var RWHZZ_CV35 = [];
        var RWHZZ_CV36 = [];*/

        var ZH_VULN_IN = [];
        var SENS_IND = [];

        // fuel poverty maps
        var LA_FP_2012 = [];
        var LA_FP_2012_10pc = [];
        var LSOA_FP_2012 = [];
        var LSOA_FP_2012_10pc = [];
        var LA_FP_2014 = [];
        var LSOA_FP_2014 = [];

        // EA flood maps
        var flood_alert = [];
        var flood_risk = [];
        var flood_benefit = [];
        var flood_zone2 = [];
        var flood_zone3 = [];
        var recordedFlood = [];
        var Risk_of_Flooding_from_Rivers_and_Sea = [];
        var saltmarsh = [];

        // admin maps
        var wards = [];
        var dist = [];
        var urbanEW = [];
        var urbanScot = [];
        var westminster = [];


        for (var j = 0; j < featuresCount; j++) {
            var feature = features[j];
            var featureNumber = j + 1;
            var properties = feature.properties;
            var propertiesNames = Object.keys(properties) || [];
            var index = feature['id'].lastIndexOf('.');
            if (index < 0) {
                continue;
            }
            var content = feature['id'].substring(0, index)
            feature['content'] = content;

            // Standard text inserted in relation to different flood maps for river, surface  and coastal flooding extent and depth
            // extent
            var sepaPreTextE = 'The flooding extent estimated by SEPA’s broad scale mapping suggests a <b>';
            var sepaPostTextE = ' The flood extent is an indication of communities that may experience problems with flooding and potential areas that are likely to flood. SEPA advises that the mapping is indicative and of a strategic nature and should not be used to determine the potential for flooding to individual properties.';
            // depth
            var sepaPreTextD = 'The flooding depth estimated by SEPA provides an indication of the potential depth of flood water. The depth here is <b>';
            var sepaPostTextD = ' Even shallow floodwater can be dangerous and can impact you and your property. Areas where there is not currently sufficient information to show the depth of floodwater are coloured grey.';
            // surface
            var sepaPreTextS = 'Surface water flooding occurs when intense rainfall overwhelms drainage systems. There is a <b>';
            var sepaPostTextS = ' The surface water flood map is of a strategic nature to support flood risk management planning at a community level. It is not appropriate for property level assessment. ';
            // velocity
            var sepaPreTextV = 'Velocity indicates the speed of flood water and the direction in which it is travelling within Potentially Vulnerable Areas (PVAs). The river velocity here is <b>';
            var sepaPostTextV = 'The velocity direction is available only within the river flood maps. It is sampled at a 150m resolution therefore cannot be used to identify detailed flow pathways. The velocity displayed on the river flood map shows the general speed and direction of flood water over a set distance at the scale limitations set by the published flood maps.';
            // infra
            var sepaInfra = 'The flooding of infrastructure such as transport, community services and utilities has economic impacts. It can also affect the operation of, and access to and from NHS sites.';

            // Object info.
            switch (feature['content']) {
                // case must be the same as the Geoserver map layer name
                case 'wards_2021':
                    wards.push(' This location is within ' + properties['WD21NM'] + ' ward.');
                    break;
                case 'LAD_2019_UK_BGC':
                    dist.push(' This location is within ' + properties['LAD19NM'] + ' district.');
                    break;
                case 'Built-up_Areas_(December_2011)_Boundaries_V2':
                    urbanEW.push(' This location is within ' + properties['bua11nm'] + ' built-up urban area.');
                    break;
                case 'Settlements2016_MHW':
                    urbanScot.push(' This location is within ' + properties['name'] + ' built-up urban area.');
                    break;
                case 'westminster':
                    westminster.push(' This location is within ' + properties['NAME'] + ' parliamentary constituencies.');
                    break;

                // flooding maps
                case 'nfvi':
                    nfvi.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['nfvi_index'] + '</b> in the <b>Neighbourhood Flood Vulnerability Index</b> map.');
                    break;
                case 'susceptibility':
                    susceptibility.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['nfvi_susc'] + '</b> in the <b>Susceptibility</b> map.');
                    break;
                case 'age':
                    age.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['age2'] + '</b> in the <b>Vulnerability due to Age</b> map.');
                    break;
                case 'under5':
                    under5.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['under5'] + '%</b> in the <b>Young children (% people under 5 years)</b> map.');
                    break;
                case 'over75':
                    over75.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['over75'] + '%</b> in the <b>Older people (% people over 75 years)</b> map.');
                    break;
                case 'ill-health':
                    ill_health.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['ill_health'] + '</b> in the <b>Vulnerability due to health</b> map.');
                    break;
                case 'ill-d2d':
                    ill_d2d.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['illd2d'] + '</b> in the <b>Disability / people in ill- health (% people whose day-to-day activities are limited</b> map.');
                    break;
                case 'llti':
                    llti.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['llti'] + '</b> in the <b>% households with at least one person with long term limiting illness</b> map.');
                    break;
                case 'flood_prepare':
                    f_prepare.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['nfvi_prep'] + '</b> in the <b>Inability to prepare for flooding</b> map.');
                    break
                case 'income':
                    income.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['incom'] + '</b> in the <b>Vulnerability due to income</b> map.');
                    break
                case 'unemployment':
                    unemp.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['unemp'] + '%</b> in the <b>Unemployed</b> map.');
                    break
                case 'LTunemp':
                    LTunemp.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['LTunemp'] + '%</b> in the <b>Unemployed</b> map.');
                    break
                case 'lowincome':
                    lowIncome.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['lowIncome'] + '%</b> in the <b>Unemployed</b> map.');
                    break
                case 'depChild':
                    depChildUnemp.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['depChild'] + '%</b> in the <b>Households with dependent children and no adults in employment</b> map.');
                    break
                case 'incomeDepIndex':
                    incomeDepIndex.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['incDepInd'] + '</b> in the <b>Income deprivation index</b> map.');
                    break
                case 'information':
                    info.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['info'] + '</b> in the <b>Vulnerability due to issues of information use index</b> map.');
                    break
                case 'arrivalsUK':
                    arrivalsUK.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['arrivalsUK'] + '%</b> in the <b>Recent arrivals to UK (% people with <1 yr residency coming from outside UK)</b> map.');
                    break
                case 'language':
                    engLang.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['engLang'] + '%</b> in the <b>Level of proficiency in English (%)</b> map.');
                    break
                case 'localKnowledge':
                    localKnow.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['localKnow'] + '</b> in the <b>Vulnerability due to lack of local knowledge index</b> map.');
                    break
                case 'migrants':
                    migrants.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['migrants'] + '%</b> in the <b>New migrants from outside local area (%)</b> map.');
                    break
                case 'propTenure':
                    propTenure.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['tenure'] + '</b> in the <b>Vulnerability due to property tenure index</b> map.');
                    break
                case 'privRent':
                    privRent.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['privRent'] + '%</b> in the <b>Private renters (%)</b> map.');
                    break
                case 'socialRent':
                    socialRent.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['socialRent'] + '%</b> in the <b>Social renters (% Households renting from Social or Council landlords)</b> map.');
                    break
                case 'nfvi_respond':
                    nfviRespond.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['respond'] + '</b> in the <b>Inability to respond index</b> map.');
                    break
                case 'mobility':
                    mobility.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['physMobil'] + '</b> in the <b>Vulnerability due to lack of physical mobility index</b> map.');
                    break
                case 'disability':
                    disability.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['disabled'] + '%</b> in the <b>High levels of disability (% of population who are disabled)</b> map.');
                    break
                case 'medCare':
                    medCare.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['medCare'] + '%</b> in the <b>High levels of disability (% of population who are disabled)</b> map.');
                    break
                case 'transport':
                    transport.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['noCar'] + '%</b> in the <b>Lack of private transport (% households with no car or van)</b> map.');
                    break
                case 'crimeIndex':
                    crimeIndex.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['crimeIndex'] + '</b> in the <b>Vulnerability due to crime index</b> map.');
                    break
                case 'crimeIMD':
                    crimeIMD.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['crimeIMD'] + '</b> in the <b>Crime (IMD) index</b> map.');
                    break
                case 'nfvi_recover':
                    nfviRecover.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['recover'] + '</b> in the <b>Inability to recover index</b> map.');
                    break
                case 'nfvi_community':
                    nfviCommunity.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['nfvi_comm'] + '</b> in the <b>Lack of community support index</b> map.');
                    break
                case 'housing_vuln':
                    housing.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['housingCha'] + '</b> in the <b>Vulnerability due to housing characteristics index</b> map.');
                    break
                case 'caravan':
                    caravan.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['caravan'] + '%</b> in the <b>% caravan or other mobile or temporary structures in all households</b> map.');
                    break
                case 'direct_flood':
                    directFlood.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['flood'] + '</b> in the <b>Number of properties within historical flood boundary</b> map.');
                    break
                case 'serviceFlood':
                    serviceFlood.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['serv_flood'] + '</b> in the <b>Vulnerability due to exposure of services to flooding</b> map.');
                    break
                case 'emergServices':
                    emergServices.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['emergServ'] + '%</b> in the <b>emergency services exposed to flooding</b> map.');
                    break
                case 'careHomes':
                    careHomes.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['careHome'] + '%</b> in the <b>number of care homes exposed to flooding</b> map.');
                    break
                case 'gpFlood':
                    gpFlood.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['gpFlood'] + '%</b> in the <b>number of GP surgeries exposed to flooding</b> map.');
                    break
                case 'schoolFlood':
                    schoolFlood.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['eduFlood'] + '%</b> in the <b>number of schools exposed to flooding</b> map.');
                    break
                case 'socialNet':
                    socialNet.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['social'] + '</b> in the <b>Vulnerability due to lack of social networks</b> map.');
                    break
                case 'pensioner':
                    pensioner.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['pensioner'] + '%</b> in the <b>single-pensioner households</b> map.');
                    break
                case 'loneParent':
                    loneParent.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['loneParent'] + '%</b> in the <b>single-pensioner households</b> map.');
                    break
                case 'age4-11':
                    age4_11.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['age4_11'] + '%</b> in the <b>single-pensioner households</b> map.');
                    break
                case 'SFRIpresDayG':
                    SFRIpresDayG.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['present_da'] + '</b> in the <b>Social Flood Risk, river and coastal, group present day Index</b> map.');
                    break
                case 'SFRI2050_2degG':
                    SFRI2050_2degG.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['future_205'] + '</b> in the <b>Social Flood Risk, river and coastal, group future 2050s 2&deg;C scenario Index</b> map.');
                    break
                case 'SFRI2050_4degG':
                    SFRI2050_4degG.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['future_207'] + '</b> in the <b>Social Flood Risk, river and coastal, group future 2050s 4&deg;C scenario Index</b> map.');
                    break
                case 'SFRIpresDayI':
                    SFRIpresDayI.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['present_1x'] + '</b> in the <b>Social Flood Risk, river and coastal, individual present day Index</b> map.');
                    break
                case 'SFRI2050_2degI':
                    SFRI2050_2degI.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['future_213'] + '</b> in the <b>Social Flood Risk, river and coastal, individual future 2050s 2&deg;C scenario Index</b> map.');
                    break
                case 'SFRI2050_4degI':
                    SFRI2050_4degI.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['future_214'] + '</b> in the <b>Social Flood Risk, river and coastal, individual future 2050s 4&deg;C scenario Index</b> map.');
                    break
                case 'SFRIpresDayG_SW':
                    SFRIpresDayG_SW.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['present__2'] + '</b> in the <b>Social Flood Risk, surface water, group present day Index</b> map.');
                    break
                case 'SFRI2050_2degG_SW':
                    SFRI2050_2degG_SW.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['future_209'] + '</b> in the <b>Social Flood Risk, surface water, group future 2050s 2&deg;C scenario Index</b> map.');
                    break
                case 'SFRI2050_4degG_SW':
                    SFRI2050_4degG_SW.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['future_211'] + '</b> in the <b>Social Flood Risk, surface water, group future 2050s 4&deg;C scenario Index</b> map.');
                    break
                case 'SFRIpresDayI_SW':
                    SFRIpresDayI_SW.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['present_3x'] + '</b> in' +
                        ' the <b>Social Flood Risk, surface water, individual present day Index</b> map.');
                    break
                case 'SFRI2050_2degI_SW':
                    SFRI2050_2degI_SW.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['future_215'] + '</b> in the <b>Social Flood Risk, surface water, individual future 2050s 2&deg;C scenario Index</b> map.');
                    break
                case 'SFRI2050_4degI_SW':
                    SFRI2050_4degI_SW.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['future_216'] + '</b> in the <b>Social Flood Risk, surface water, individual future 2050s 4&deg;C scenario Index</b> map.');
                    break
                // Heat maps
                case 'RWHZZ_CV1':
                    RWHZZ_CV1.push(' This location (census zone ' + properties['name'] + ') has a value of CV1<b>' + properties['RWHZZ_CV1'] + '</b> in the' +
                        ' <b>Heat disadvantage (2011) - average vulnerability</b> map.');
                    break
                case 'RWHZZ_CV2':
                    RWHZZ_CV2.push(' This location (census zone ' + properties['name'] + ') has a value of CV2<b>' + properties['R_HZZ_CV2'] + '</b> in the' +
                        ' <b>Heat disadvantage (2011) - average vulnerability</b> map.');
                    break
                case 'RWHZZ_CV3':
                    RWHZZ_CV3.push(' This location (census zone ' + properties['name'] + ') has a value of CV3<b>' + properties['R_HZZ_CV3'] + '</b> in the' +
                        ' <b>Heat disadvantage (2011) - average vulnerability</b> map.');
                    break
                /*case 'heat_disadvantage_2011_21012014':
                    R_HZZ_CV4.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['R_HZZ_CV4'] + '</b> in the <b>Heat disadvantage (2011) - average vulnerability</b> map.');
                    break
                case 'heat_disadvantage_2011_21012014':
                    R_HZZ_CV5.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['R_HZZ_CV5'] + '</b> in the <b>Heat disadvantage (2011) - average vulnerability</b> map.');
                    break
                case 'heat_disadvantage_2011_21012014':
                    R_HZZ_CV6.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['R_HZZ_CV6'] + '</b> in the <b>Heat disadvantage (2011) - average vulnerability</b> map.');
                    break
                case 'heat_disadvantage_2011_21012014':
                    R_HZZ_CV7.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['R_HZZ_CV7'] + '</b> in the <b>Heat disadvantage (2011) - average vulnerability</b> map.');
                    break
                case 'heat_disadvantage_2011_21012014':
                    R_HZZ_CV8.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['R_HZZ_CV8'] + '</b> in the <b>Heat disadvantage (2011) - average vulnerability</b> map.');
                    break
                case 'heat_disadvantage_2011_21012014':
                    R_HZZ_CV9.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['R_HZZ_CV9'] + '</b> in the <b>Heat disadvantage (2011) - average vulnerability</b> map.');
                    break
                case 'heat_disadvantage_2011_21012014':
                    R_HZZ_CV10.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['R_HZZ_CV10'] + '</b> in the <b>Heat disadvantage (2011) - average vulnerability</b> map.');
                    break
                case 'heat_disadvantage_2011_21012014':
                    R_HZZ_CV11.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['R_HZZ_CV11'] + '</b> in the <b>Heat disadvantage (2011) - average vulnerability</b> map.');
                    break
                case 'heat_disadvantage_2011_21012014':
                    R_HZZ_CV12.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['R_HZZ_CV12'] + '</b> in the <b>Heat disadvantage (2011) - average vulnerability</b> map.');
                    break
                case 'heat_disadvantage_2011_21012014':
                    R_HZZ_CV13.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['R_HZZ_CV13'] + '</b> in the <b>Heat disadvantage (2011) - average vulnerability</b> map.');
                    break
                case 'heat_disadvantage_2011_21012014':
                    R_HZZ_CV14.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['R_HZZ_CV14'] + '</b> in the <b>Heat disadvantage (2011) - average vulnerability</b> map.');
                    break
                case 'heat_disadvantage_2011_21012014':
                    R_HZZ_CV15.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['R_HZZ_CV15'] + '</b> in the <b>Heat disadvantage (2011) - average vulnerability</b> map.');
                    break
                case 'heat_disadvantage_2011_21012014':
                    R_HZZ_CV16.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['R_HZZ_CV16'] + '</b> in the <b>Heat disadvantage (2011) - average vulnerability</b> map.');
                    break
                case 'heat_disadvantage_2011_21012014':
                    R_HZZ_CV17.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['R_HZZ_CV17'] + '</b> in the <b>Heat disadvantage (2011) - average vulnerability</b> map.');
                    break
                case 'heat_disadvantage_2011_21012014':
                    R_HZZ_CV18.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['R_HZZ_CV18'] + '</b> in the <b>Heat disadvantage (2011) - average vulnerability</b> map.');
                    break
                case 'heat_disadvantage_2011_21012014':
                    R_HZZ_CV19.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['R_HZZ_CV19'] + '</b> in the <b>Heat disadvantage (2011) - average vulnerability</b> map.');
                    break
                case 'heat_disadvantage_2011_21012014':
                    R_HZZ_CV20.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['R_HZZ_CV20'] + '</b> in the <b>Heat disadvantage (2011) - average vulnerability</b> map.');
                    break
                case 'heat_disadvantage_2011_21012014':
                    R_HZZ_CV21.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['R_HZZ_CV21'] + '</b> in the <b>Heat disadvantage (2011) - average vulnerability</b> map.');
                    break
                case 'heat_disadvantage_2011_21012014':
                    R_HZZ_CV22.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['R_HZZ_CV22'] + '</b> in the <b>Heat disadvantage (2011) - average vulnerability</b> map.');
                    break
                case 'heat_disadvantage_2011_21012014':
                    R_HZZ_CV23.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['R_HZZ_CV23'] + '</b> in the <b>Heat disadvantage (2011) - average vulnerability</b> map.');
                    break
                case 'heat_disadvantage_2011_21012014':
                    R_HZZ_CV24.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['R_HZZ_CV24'] + '</b> in the <b>Heat disadvantage (2011) - average vulnerability</b> map.');
                    break
                case 'heat_disadvantage_2011_21012014':
                    R_HZZ_CV25.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['R_HZZ_CV25'] + '</b> in the <b>Heat disadvantage (2011) - average vulnerability</b> map.');
                    break
                case 'heat_disadvantage_2011_21012014':
                    R_HZZ_CV26.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['R_HZZ_CV26'] + '</b> in the <b>Heat disadvantage (2011) - average vulnerability</b> map.');
                    break
                case 'heat_disadvantage_2011_21012014':
                    R_HZZ_CV27.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['R_HZZ_CV27'] + '</b> in the <b>Heat disadvantage (2011) - average vulnerability</b> map.');
                    break
                case 'heat_disadvantage_2011_21012014':
                    R_HZZ_CV28.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['R_HZZ_CV28'] + '</b> in the <b>Heat disadvantage (2011) - average vulnerability</b> map.');
                    break
                case 'heat_disadvantage_2011_21012014':
                    R_HZZ_CV29.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['R_HZZ_CV29'] + '</b> in the <b>Heat disadvantage (2011) - average vulnerability</b> map.');
                    break
                case 'heat_disadvantage_2011_21012014':
                    R_HZZ_CV30.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['R_HZZ_CV30'] + '</b> in the <b>Heat disadvantage (2011) - average vulnerability</b> map.');
                    break
                case 'heat_disadvantage_2011_21012014':
                    R_HZZ_CV31.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['R_HZZ_CV31'] + '</b> in the <b>Heat disadvantage (2011) - average vulnerability</b> map.');
                    break
                case 'heat_disadvantage_2011_21012014':
                    R_HZZ_CV32.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['R_HZZ_CV32'] + '</b> in the <b>Heat disadvantage (2011) - average vulnerability</b> map.');
                    break
                case 'heat_disadvantage_2011_21012014':
                    R_HZZ_CV33.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['R_HZZ_CV33'] + '</b> in the <b>Heat disadvantage (2011) - average vulnerability</b> map.');
                    break
                case 'heat_disadvantage_2011_21012014':
                    R_HZZ_CV34.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['R_HZZ_CV34'] + '</b> in the <b>Heat disadvantage (2011) - average vulnerability</b> map.');
                    break
                case 'heat_disadvantage_2011_21012014':
                    R_HZZ_CV35.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['R_HZZ_CV35'] + '</b> in the <b>Heat disadvantage (2011) - average vulnerability</b> map.');
                    break
                case 'heat_disadvantage_2011_21012014':
                    R_HZZ_CV36.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['R_HZZ_CV36'] + '</b> in the <b>	Heat disadvantage (2011) - average vulnerability</b> map.');
                    break
                /*case ' RWHZZ_CV1	: 	RWHZZ_CV1	.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['
                	RWHZZ_CV1	'] + '</b> in the <b>	Heat disadvantage (2011) - population weighted vulnerability	</b> map.');	break
                case '	RWHZZ_CV2	: 	RWHZZ_CV2	.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['	RWHZZ_CV2	'] + '</b> in the <b>	Heat disadvantage (2011) - population weighted vulnerability	</b> map.');	break
                case '	RWHZZ_CV3	: 	RWHZZ_CV3	.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['	RWHZZ_CV3	'] + '</b> in the <b>	Heat disadvantage (2011) - population weighted vulnerability	</b> map.');	break
                case '	RWHZZ_CV4	: 	RWHZZ_CV4	.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['	RWHZZ_CV4	'] + '</b> in the <b>	Heat disadvantage (2011) - population weighted vulnerability	</b> map.');	break
                case '	RWHZZ_CV5	: 	RWHZZ_CV5	.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['	RWHZZ_CV5	'] + '</b> in the <b>	Heat disadvantage (2011) - population weighted vulnerability	</b> map.');	break
                case '	RWHZZ_CV6	: 	RWHZZ_CV6	.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['	RWHZZ_CV6	'] + '</b> in the <b>	Heat disadvantage (2011) - population weighted vulnerability	</b> map.');	break
                case '	RWHZZ_CV7	: 	RWHZZ_CV7	.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['	RWHZZ_CV7	'] + '</b> in the <b>	Heat disadvantage (2011) - population weighted vulnerability	</b> map.');	break
                case '	RWHZZ_CV8	: 	RWHZZ_CV8	.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['	RWHZZ_CV8	'] + '</b> in the <b>	Heat disadvantage (2011) - population weighted vulnerability	</b> map.');	break
                case '	RWHZZ_CV9	: 	RWHZZ_CV9	.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['	RWHZZ_CV9	'] + '</b> in the <b>	Heat disadvantage (2011) - population weighted vulnerability	</b> map.');	break
                case '	RWHZZ_CV10	: 	RWHZZ_CV10	.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['	RWHZZ_CV10	'] + '</b> in the <b>	Heat disadvantage (2011) - population weighted vulnerability	</b> map.');	break
                case '	RWHZZ_CV11	: 	RWHZZ_CV11	.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['	RWHZZ_CV11	'] + '</b> in the <b>	Heat disadvantage (2011) - population weighted vulnerability	</b> map.');	break
                case '	RWHZZ_CV12	: 	RWHZZ_CV12	.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['	RWHZZ_CV12	'] + '</b> in the <b>	Heat disadvantage (2011) - population weighted vulnerability	</b> map.');	break
                case '	RWHZZ_CV13	: 	RWHZZ_CV13	.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['	RWHZZ_CV13	'] + '</b> in the <b>	Heat disadvantage (2011) - population weighted vulnerability	</b> map.');	break
                case '	RWHZZ_CV14	: 	RWHZZ_CV14	.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['	RWHZZ_CV14	'] + '</b> in the <b>	Heat disadvantage (2011) - population weighted vulnerability	</b> map.');	break
                case '	RWHZZ_CV15	: 	RWHZZ_CV15	.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['	RWHZZ_CV15	'] + '</b> in the <b>	Heat disadvantage (2011) - population weighted vulnerability	</b> map.');	break
                case '	RWHZZ_CV16	: 	RWHZZ_CV16	.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['	RWHZZ_CV16	'] + '</b> in the <b>	Heat disadvantage (2011) - population weighted vulnerability	</b> map.');	break
                case '	RWHZZ_CV17	: 	RWHZZ_CV17	.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['	RWHZZ_CV17	'] + '</b> in the <b>	Heat disadvantage (2011) - population weighted vulnerability	</b> map.');	break
                case '	RWHZZ_CV18	: 	RWHZZ_CV18	.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['	RWHZZ_CV18	'] + '</b> in the <b>	Heat disadvantage (2011) - population weighted vulnerability	</b> map.');	break
                case '	RWHZZ_CV19	: 	RWHZZ_CV19	.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['	RWHZZ_CV19	'] + '</b> in the <b>	Heat disadvantage (2011) - population weighted vulnerability	</b> map.');	break
                case '	RWHZZ_CV20	: 	RWHZZ_CV20	.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['	RWHZZ_CV20	'] + '</b> in the <b>	Heat disadvantage (2011) - population weighted vulnerability	</b> map.');	break
                case '	RWHZZ_CV21	: 	RWHZZ_CV21	.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['	RWHZZ_CV21	'] + '</b> in the <b>	Heat disadvantage (2011) - population weighted vulnerability	</b> map.');	break
                case '	RWHZZ_CV22	: 	RWHZZ_CV22	.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['	RWHZZ_CV22	'] + '</b> in the <b>	Heat disadvantage (2011) - population weighted vulnerability	</b> map.');	break
                case '	ZRWHZZ_CV2	: 	ZRWHZZ_CV2	.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['	ZRWHZZ_CV2	'] + '</b> in the <b>	Heat disadvantage (2011) - population weighted vulnerability	</b> map.');	break
                case '	RWHZZ_CV24	: 	RWHZZ_CV24	.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['	RWHZZ_CV24	'] + '</b> in the <b>	Heat disadvantage (2011) - population weighted vulnerability	</b> map.');	break
                case '	RWHZZ_CV25	: 	RWHZZ_CV25	.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['	RWHZZ_CV25	'] + '</b> in the <b>	Heat disadvantage (2011) - population weighted vulnerability	</b> map.');	break
                case '	RWHZZ_CV26	: 	RWHZZ_CV26	.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['	RWHZZ_CV26	'] + '</b> in the <b>	Heat disadvantage (2011) - population weighted vulnerability	</b> map.');	break
                case '	RWHZZ_CV27	: 	RWHZZ_CV27	.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['	RWHZZ_CV27	'] + '</b> in the <b>	Heat disadvantage (2011) - population weighted vulnerability	</b> map.');	break
                case '	RWHZZ_CV28	: 	RWHZZ_CV28	.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['	RWHZZ_CV28	'] + '</b> in the <b>	Heat disadvantage (2011) - population weighted vulnerability	</b> map.');	break
                case '	RWHZZ_CV29	: 	RWHZZ_CV29	.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['	RWHZZ_CV29	'] + '</b> in the <b>	Heat disadvantage (2011) - population weighted vulnerability	</b> map.');	break
                case '	RWHZZ_CV30	: 	RWHZZ_CV30	.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['	RWHZZ_CV30	'] + '</b> in the <b>	Heat disadvantage (2011) - population weighted vulnerability	</b> map.');	break
                case '	RWHZZ_CV31	: 	RWHZZ_CV31	.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['	RWHZZ_CV31	'] + '</b> in the <b>	Heat disadvantage (2011) - population weighted vulnerability	</b> map.');	break
                case '	RWHZZ_CV32	: 	RWHZZ_CV32	.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['	RWHZZ_CV32	'] + '</b> in the <b>	Heat disadvantage (2011) - population weighted vulnerability	</b> map.');	break
                case '	RWHZZ_CV33	: 	RWHZZ_CV33	.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['	RWHZZ_CV33	'] + '</b> in the <b>	Heat disadvantage (2011) - population weighted vulnerability	</b> map.');	break
                case '	RWHZZ_CV34	: 	RWHZZ_CV34	.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['	RWHZZ_CV34	'] + '</b> in the <b>	Heat disadvantage (2011) - population weighted vulnerability	</b> map.');	break
                case '	RWHZZ_CV35	: 	RWHZZ_CV35	.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['	RWHZZ_CV35	'] + '</b> in the <b>	Heat disadvantage (2011) - population weighted vulnerability	</b> map.');	break
                case '	RWHZZ_CV36	: 	RWHZZ_CV36	.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['	RWHZZ_CV36	'] + '</b> in the <b>	Heat disadvantage (2011) - population weighted vulnerability	</b> map.');	break
                    */
                case 'FINAL_SSVI_FLOOD_HEAT_04022014':
                    ZH_VULN_IN.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['ZH_VULN_IN'].toFixed(2) + '</b> in the' +
                        ' <b>Heat socio-spatial vulnerability (2011)</b> map.');
                    break;
                case 'FINAL_SSVI_FLOOD_HEAT_04022014':
                    SENS_IND.push(' This location (census zone ' + properties['name'] + ') has a value of <b>' + properties['SENS_IND'].toFixed(2) + '</b> in the' +
                        ' <b>Heat socio-spatial vulnerability (2011)</b> map.');
                    break;
                // Fuel povery maps
                case 'LA_FP_2012':
                    LA_FP_2012.push(' This location (' + properties['LA_Name'] + ') has a <b>LA fuel poverty (2012)</b> value of <b>' + properties['households'] + '%</b>.');
                    break;
                case 'LA_FP_2012_10pc':
                    LA_FP_2012_10pc.push(' This location (' + properties['LA_Name'] + ') has a <b>LA fuel poverty (2012)</b> value of <b>' + properties['households'] + '%</b>. In this case members of a household are fuel poor if \'they are required to spend more than 10% of their income to maintain an adequate standard of warmth\' (DECC, 2014, p.8.)');
                    break;
                case 'LSOA_2012':
                    LSOA_FP_2012.push(' This location (' + properties['LSOA11NM'] + ') has a <b>LSOA fuel poverty (2012)</b> value of <b>' + properties['households'] + '%</b>.');
                    break;
                case 'LSOA_2012_10pc':
                    LSOA_FP_2012_10pc.push(' This location (' + properties['LSOA_Name'] + ') has a <b>LA fuel poverty (2012)</b> value of <b>' + properties['households'] + '%</b>. In this case members of a household are fuel poor if \'they are required to spend more than 10% of their income to maintain an adequate standard of warmth\' (DECC, 2014, p.8.)');
                    break;
                case 'LA_FP_2014':
                    LA_FP_2014.push(' This location (' + properties['LA_Name'] + ') has a <b>LA fuel poverty (2014)</b> value of <b>' + properties['households'] + '%</b>.');
                    break;
                case 'LSOA_FP_2014':
                    LSOA_FP_2014.push(' This location (' + properties['LSOA_Name'] + ') has a <b>LSOA fuel poverty (2014)</b> value of <b>' + properties['households'] + '%</b>.');
                    break;

                // EA flood maps
                case 'Flood_Alert_Areas':
                    flood_alert.push(' This flood alert area is <b>' + properties['ta_name'] + '</b> including, <b>' + properties['descrip'] + '</b>.');
                    break
                case 'Flood_Risk_Areas':
                    flood_risk.push(' This flood risk area is <b>' + properties['fra_name'] + '</b>. The source of flooding here is <b>' +
                        properties['flood_sour'] + '</b>.');
                    break
                case 'Areas_Benefiting_from_Flood_Defences':
                    flood_benefit.push(' This area has benefited from flood defences. ');
                    break
                case 'Flood_Map_for_Planning_Rivers_and_Sea_Flood_Zone_2':
                    flood_zone2.push(' This is flood zone 2, the type of flooding is <b>' + properties['type'] + '</b>. ');
                    break
                case 'Flood_Map_for_Planning_Rivers_and_Sea_Flood_Zone_3':
                    flood_zone3.push(' This is flood zone 3, the type of flooding is <b>' + properties['type'] + '</b>. ');
                    break
                case 'Recorded_Flood_Outlines':
                    recordedFlood.push(' This is the extent of the recorded flood. The source of this flood was <b>' + properties['flood_src'] + '</b>, it was caused by <b>' + properties['flood_caus'] + '</b>. ');
                    break
                case 'Risk_of_Flooding_from_Rivers_and_Sea':
                    Risk_of_Flooding_from_Rivers_and_Sea.push(' The risk of flooding from rivers and sea is <b>' + properties['prob_4band'] + '</b> at this location. ');
                    break
                case 'Saltmarsh_Extents_and_Zonation':
                    saltmarsh.push(' This salt marsh is <b>' + properties['classific'] + '</b>. ');
                    break

                default:
                    _popupContent += '<b>You queried the </b>';
                    _popupContent += '<span>' + feature['content'] + ' (Layer\'s property count: ' + propertiesNames.length + ')</span><br>';
                    for (var q = 0; q < propertiesNames.length; q++) {
                        var propertiesName = propertiesNames[q];
                        var number = q + 1;
                        // Object properties.
                        _popupContent += number + ') ' + propertiesName;
                        _popupContent += ': ' + properties[propertiesName] + '.</span><br>';
                    }
            }
        }
        // Admin maps
        for (i = 0, len = wards.length; i < len; i++) {
            _popupContent += wards[i];
        }
        for (i = 0, len = dist.length; i < len; i++) {
            _popupContent += dist[i];
        }
        for (i = 0, len = urbanEW.length; i < len; i++) {
            _popupContent += urbanEW[i];
        }
        for (i = 0, len = urbanScot.length; i < len; i++) {
            _popupContent += urbanScot[i];
        }
        for (i = 0, len = westminster.length; i < len; i++) {
            _popupContent += westminster[i];
        }
        // flood maps
        for (i = 0, len = nfvi.length; i < len; i++) {
            _popupContent += nfvi[i];
        }
        for (i = 0, len = susceptibility.length; i < len; i++) {
            _popupContent += susceptibility[i];
        }
        for (i = 0, len = age.length; i < len; i++) {
            _popupContent += age[i];
        }
        for (i = 0, len = under5.length; i < len; i++) {
            _popupContent += under5[i];
        }
        for (i = 0, len = over75.length; i < len; i++) {
            _popupContent += over75[i];
        }
        for (i = 0, len = ill_health.length; i < len; i++) {
            _popupContent += ill_health[i];
        }
        for (i = 0, len = ill_d2d.length; i < len; i++) {
            _popupContent += ill_d2d[i];
        }
        for (i = 0, len = llti.length; i < len; i++) {
            _popupContent += llti[i];
        }
        for (i = 0, len = f_prepare.length; i < len; i++) {
            _popupContent += f_prepare[i];
        }
        for (i = 0, len = income.length; i < len; i++) {
            _popupContent += income[i];
        }
        for (i = 0, len = unemp.length; i < len; i++) {
            _popupContent += unemp[i];
        }
        for (i = 0, len = LTunemp.length; i < len; i++) {
            _popupContent += LTunemp[i];
        }
        for (i = 0, len = lowIncome.length; i < len; i++) {
            _popupContent += lowIncome[i];
        }
        for (i = 0, len = depChildUnemp.length; i < len; i++) {
            _popupContent += depChildUnemp[i];
        }
        for (i = 0, len = incomeDepIndex.length; i < len; i++) {
            _popupContent += incomeDepIndex[i];
        }
        for (i = 0, len = info.length; i < len; i++) {
            _popupContent += info[i];
        }
        for (i = 0, len = arrivalsUK.length; i < len; i++) {
            _popupContent += arrivalsUK[i];
        }
        for (i = 0, len = engLang.length; i < len; i++) {
            _popupContent += engLang[i];
        }
        for (i = 0, len = localKnow.length; i < len; i++) {
            _popupContent += localKnow[i];
        }
        for (i = 0, len = migrants.length; i < len; i++) {
            _popupContent += migrants[i];
        }
        for (i = 0, len = propTenure.length; i < len; i++) {
            _popupContent += propTenure[i];
        }
        for (i = 0, len = privRent.length; i < len; i++) {
            _popupContent += privRent[i];
        }
        for (i = 0, len = socialRent.length; i < len; i++) {
            _popupContent += socialRent[i];
        }
        for (i = 0, len = nfviRespond.length; i < len; i++) {
            _popupContent += nfviRespond[i];
        }
        for (i = 0, len = mobility.length; i < len; i++) {
            _popupContent += mobility[i];
        }
        for (i = 0, len = disability.length; i < len; i++) {
            _popupContent += disability[i];
        }
        for (i = 0, len = medCare.length; i < len; i++) {
            _popupContent += medCare[i];
        }
        for (i = 0, len = transport.length; i < len; i++) {
            _popupContent += transport[i];
        }
        for (i = 0, len = crimeIndex.length; i < len; i++) {
            _popupContent += crimeIndex[i];
        }
        for (i = 0, len = crimeIMD.length; i < len; i++) {
            _popupContent += crimeIMD[i];
        }
        for (i = 0, len = nfviRecover.length; i < len; i++) {
            _popupContent += nfviRecover[i];
        }
        for (i = 0, len = nfviCommunity.length; i < len; i++) {
            _popupContent += nfviCommunity[i];
        }
        for (i = 0, len = housing.length; i < len; i++) {
            _popupContent += housing[i];
        }
        for (i = 0, len = caravan.length; i < len; i++) {
            _popupContent += caravan[i];
        }
        for (i = 0, len = directFlood.length; i < len; i++) {
            _popupContent += directFlood[i];
        }
        for (i = 0, len = serviceFlood.length; i < len; i++) {
            _popupContent += serviceFlood[i];
        }
        for (i = 0, len = emergServices.length; i < len; i++) {
            _popupContent += emergServices[i];
        }
        for (i = 0, len = careHomes.length; i < len; i++) {
            _popupContent += careHomes[i];
        }
        for (i = 0, len = gpFlood.length; i < len; i++) {
            _popupContent += gpFlood[i];
        }
        for (i = 0, len = schoolFlood.length; i < len; i++) {
            _popupContent += schoolFlood[i];
        }
        for (i = 0, len = socialNet.length; i < len; i++) {
            _popupContent += socialNet[i];
        }
        for (i = 0, len = pensioner.length; i < len; i++) {
            _popupContent += pensioner[i];
        }
        for (i = 0, len = loneParent.length; i < len; i++) {
            _popupContent += loneParent[i];
        }
        for (i = 0, len = age4_11.length; i < len; i++) {
            _popupContent += age4_11[i];
        }
        for (i = 0, len = SFRIpresDayG.length; i < len; i++) {
            _popupContent += SFRIpresDayG[i];
        }
        for (i = 0, len = SFRI2050_2degG.length; i < len; i++) {
            _popupContent += SFRI2050_2degG[i];
        }
        for (i = 0, len = SFRI2050_4degG.length; i < len; i++) {
            _popupContent += SFRI2050_4degG[i];
        }
        for (i = 0, len = SFRIpresDayI.length; i < len; i++) {
            _popupContent += SFRIpresDayI[i];
        }
        for (i = 0, len = SFRI2050_2degI.length; i < len; i++) {
            _popupContent += SFRI2050_2degI[i];
        }
        for (i = 0, len = SFRI2050_4degI.length; i < len; i++) {
            _popupContent += SFRI2050_4degI[i];
        }
        for (i = 0, len = SFRIpresDayG_SW.length; i < len; i++) {
            _popupContent += SFRIpresDayG_SW[i];
        }
        for (i = 0, len = SFRI2050_2degG_SW.length; i < len; i++) {
            _popupContent += SFRI2050_2degG_SW[i];
        }
        for (i = 0, len = SFRI2050_4degG_SW.length; i < len; i++) {
            _popupContent += SFRI2050_4degG_SW[i];
        }
        for (i = 0, len = SFRIpresDayI_SW.length; i < len; i++) {
            _popupContent += SFRIpresDayI_SW[i];
        }
        for (i = 0, len = SFRI2050_2degI_SW.length; i < len; i++) {
            _popupContent += SFRI2050_2degI_SW[i];
        }
        for (i = 0, len = SFRI2050_4degI_SW.length; i < len; i++) {
            _popupContent += SFRI2050_4degI_SW[i];
        }
        // Heat maps
        for (i = 0, len = RWHZZ_CV1.length; i < len; i++) {
            _popupContent += RWHZZ_CV1[i];
        }
        for (i = 0, len = RWHZZ_CV2.length; i < len; i++) {
            _popupContent += RWHZZ_CV2[i];
        }
        for (i = 0, len = RWHZZ_CV3.length; i < len; i++) {
            _popupContent += RWHZZ_CV3[i];
        }
        /*for (i = 0, len = R_HZZ_CV1.length; i < len; i++) {
            _popupContent += R_HZZ_CV1[i];
        }
        for (i = 0, len = R_HZZ_CV2.length; i < len; i++) {
            _popupContent += R_HZZ_CV2[i];
        }
        for (i = 0, len = R_HZZ_CV3.length; i < len; i++) {
            _popupContent += R_HZZ_CV3[i];
        }
        for (i = 0, len = R_HZZ_CV4.length; i < len; i++) {
            _popupContent += R_HZZ_CV4[i];
        }
        for (i = 0, len = R_HZZ_CV5.length; i < len; i++) {
            _popupContent += R_HZZ_CV5[i];
        }
        for (i = 0, len = R_HZZ_CV6.length; i < len; i++) {
            _popupContent += R_HZZ_CV6[i];
        }
        for (i = 0, len = R_HZZ_CV7.length; i < len; i++) {
            _popupContent += R_HZZ_CV7[i];
        }
        for (i = 0, len = R_HZZ_CV8.length; i < len; i++) {
            _popupContent += R_HZZ_CV8[i];
        }
        for (i = 0, len = R_HZZ_CV9.length; i < len; i++) {
            _popupContent += R_HZZ_CV9[i];
        }
        for (i = 0, len = R_HZZ_CV10.length; i < len; i++) {
            _popupContent += R_HZZ_CV10[i];
        }
        for (i = 0, len = R_HZZ_CV11.length; i < len; i++) {
            _popupContent += R_HZZ_CV11[i];
        }
        for (i = 0, len = R_HZZ_CV12.length; i < len; i++) {
            _popupContent += R_HZZ_CV12[i];
        }
        for (i = 0, len = R_HZZ_CV13.length; i < len; i++) {
            _popupContent += R_HZZ_CV13[i];
        }
        for (i = 0, len = R_HZZ_CV14.length; i < len; i++) {
            _popupContent += R_HZZ_CV14[i];
        }
        for (i = 0, len = R_HZZ_CV15.length; i < len; i++) {
            _popupContent += R_HZZ_CV15[i];
        }
        for (i = 0, len = R_HZZ_CV16.length; i < len; i++) {
            _popupContent += R_HZZ_CV16[i];
        }
        for (i = 0, len = R_HZZ_CV17.length; i < len; i++) {
            _popupContent += R_HZZ_CV17[i];
        }
        for (i = 0, len = R_HZZ_CV18.length; i < len; i++) {
            _popupContent += R_HZZ_CV18[i];
        }
        for (i = 0, len = R_HZZ_CV19.length; i < len; i++) {
            _popupContent += R_HZZ_CV19[i];
        }
        for (i = 0, len = R_HZZ_CV20.length; i < len; i++) {
            _popupContent += R_HZZ_CV20[i];
        }
        for (i = 0, len = R_HZZ_CV21.length; i < len; i++) {
            _popupContent += R_HZZ_CV21[i];
        }
        for (i = 0, len = R_HZZ_CV22.length; i < len; i++) {
            _popupContent += R_HZZ_CV22[i];
        }
        for (i = 0, len = R_HZZ_CV23.length; i < len; i++) {
            _popupContent += R_HZZ_CV23[i];
        }
        for (i = 0, len = R_HZZ_CV24.length; i < len; i++) {
            _popupContent += R_HZZ_CV24[i];
        }
        for (i = 0, len = R_HZZ_CV25.length; i < len; i++) {
            _popupContent += R_HZZ_CV25[i];
        }
        for (i = 0, len = R_HZZ_CV26.length; i < len; i++) {
            _popupContent += R_HZZ_CV26[i];
        }
        for (i = 0, len = R_HZZ_CV27.length; i < len; i++) {
            _popupContent += R_HZZ_CV27[i];
        }
        for (i = 0, len = R_HZZ_CV28.length; i < len; i++) {
            _popupContent += R_HZZ_CV28[i];
        }
        for (i = 0, len = R_HZZ_CV29.length; i < len; i++) {
            _popupContent += R_HZZ_CV29[i];
        }
        for (i = 0, len = R_HZZ_CV30.length; i < len; i++) {
            _popupContent += R_HZZ_CV30[i];
        }
        for (i = 0, len = R_HZZ_CV31.length; i < len; i++) {
            _popupContent += R_HZZ_CV31[i];
        }
        for (i = 0, len = R_HZZ_CV32.length; i < len; i++) {
            _popupContent += R_HZZ_CV32[i];
        }
        for (i = 0, len = R_HZZ_CV33.length; i < len; i++) {
            _popupContent += R_HZZ_CV33[i];
        }
        for (i = 0, len = R_HZZ_CV34.length; i < len; i++) {
            _popupContent += R_HZZ_CV34[i];
        }
        for (i = 0, len = R_HZZ_CV35.length; i < len; i++) {
            _popupContent += R_HZZ_CV35[i];
        }
        for (i = 0, len = R_HZZ_CV36.length; i < len; i++) {
            _popupContent += R_HZZ_CV36[i];
        }*/
        for (i=0, len = ZH_VULN_IN.length; i < len; i++) {
            _popupContent += ZH_VULN_IN[i];
        }
        for (i=0, len = SENS_IND.length; i < len; i++) {
            _popupContent += SENS_IND[i];
        }
        //fuel poverty maps
        for (i = 0, len = LA_FP_2012.length; i < len; i++) {
            _popupContent += LA_FP_2012[i];
        }
        for (i = 0, len = LA_FP_2012_10pc.length; i < len; i++) {
            _popupContent += LA_FP_2012_10pc[i];
        }
        for (i = 0, len = LSOA_FP_2012.length; i < len; i++) {
            _popupContent += LSOA_FP_2012[i];
        }
        for (i = 0, len = LSOA_FP_2012_10pc.length; i < len; i++) {
            _popupContent += LSOA_FP_2012_10pc[i];
        }
        for (i = 0, len = LA_FP_2014.length; i < len; i++) {
            _popupContent += LA_FP_2014[i];
        }
        for (i = 0, len = LSOA_FP_2014.length; i < len; i++) {
            _popupContent += LSOA_FP_2014[i];
        }

        // EA maps
        for (i = 0, len = flood_alert.length; i < len; i++) {
            _popupContent += flood_alert[i];
        }
        for (i = 0, len = flood_risk.length; i < len; i++) {
            _popupContent += flood_risk[i];
        }
        for (i = 0, len = flood_benefit.length; i < len; i++) {
            _popupContent += flood_benefit[i];
        }
        for (i = 0, len = flood_zone2.length; i < len; i++) {
            _popupContent += flood_zone2[i];
        }
        for (i = 0, len = flood_zone3.length; i < len; i++) {
            _popupContent += flood_zone3[i];
        }
        for (i = 0, len = recordedFlood.length; i < len; i++) {
            _popupContent += recordedFlood[i];
        }
        for (i = 0, len = Risk_of_Flooding_from_Rivers_and_Sea.length; i < len; i++) {
            _popupContent += Risk_of_Flooding_from_Rivers_and_Sea[i];
        }
        for (i = 0, len = saltmarsh.length; i < len; i++) {
            _popupContent += saltmarsh[i];
        }
    }

    var result = {};
    result.allFeatureCount = featuresCount;
    result.popupContent = _popupContent;
    return result;
}

function createMarkingWhenError(_this, _errorThrown) {
    var _popupContent = '';

    // Error message.
    _popupContent += '<u><b>' + _this.options.name + ':</u></b><br>';
    _popupContent += 'Error message: \'' + _errorThrown.message + '\'<br>';
    _popupContent += '<br>'

    return _popupContent;
}

function createFinalMarking(_wmsLayersCount, _allFeatureCount, _popupContent) {
    var finalPopupContent = _popupContent + '</p><hr>' +
        '<p class="attributeText">' +
        '<strong>The Climate Just Map Tool shows which places may be most disadvantaged through climate impacts.</strong>' +
        '<p class="attributeText">It aims to raise awareness about how social vulnerability combined with exposure to hazards, like flooding and heat, ' +
        'may lead to uneven impacts in different neighbourhoods, causing climate disadvantage. The maps can be used alongside ' +
        'other local knowledge to identify where actions may be needed. There are maps on:</p>' +
        '<ul>' +
        '<li class="attributeText">Flooding (river/coastal flooding and surface water flooding)</li>' +
        '<li class="attributeText">Heat</li>' +
        '<li class="attributeText">Fuel poverty.</li>' +
        '</ul>' +
        '<p class="attributeText">All of these can help to inform local planning and responses to support vulnerable people and places.</p>' +
        '<!--b>Details about the likelihood of flooding:</b>  ' +
        'Information is available for three flooding likelihoods:' +
        '<ul class="attributeText">' +
        '    <li><b>High likelihood:</b> The area within the flood extent shown has a 10% chance of flooding in any one year. ' +
        '         A flood event with this extent is likely to occur on average once in every 10 years.' +
        '    </li>' +
        '    <li><b>Medium likelihood:</b> The area within the flood extent shown has a 0.5%  chance of flooding in any one year. ' +
        '        A flood event with this extent is likely to occur on average once in every 200 years.' +
        '    </li>' +
        '    <li><b>Low likelihood:</b> The area within the flood extent shown has a 0.1% chance of flooding in any one year. ' +
        '        A flood event with this extent is likely to occur on average once in every 1000 years.' +
        '    </li>' +
        '</ul>' +
        '<p class="attributeText">The likelihood of flooding remains the same in each year. For example, if you experience a flood one year there is the same likelihood of it happening the following year.' +
        '</p--></div>'
    return finalPopupContent;
}

////////////////////////////////////////////////////////////////

// Add scale number to the map
L.control.scalefactor().addTo(map);

L.control.scale({
    options: {
        position: 'topright',
        maxWidth: 1000,
        metric: true,
        imperial: true,
        updateWhenIdle: false
    }
}).addTo(map);

// Add OS Places geocoding with leaflet-control-geocoder
var geocoder = L.Control.geocoder({
    geocoder: new L.Control.Geocoder.OSOpenNames('p8lP4RcDeHK3gljrblAKDbxktmMvkWUt'),
    defaultMarkGeocode: false,
    collapsed: true,
    placeholder: "Search for a place...",
    position: 'topleft',
    geocodingQueryParams: {
        country: 'gb-sct',
        //state: 'Greater Manchester'
    }
}).addTo(map);

// Zoom in to a specific health board from dropdown list
function flyTo(lat, lon, zoom, name) {
    map.flyTo([lat, lon], zoom);
}

// Place the map layer controls in the side-bar
$(document).ready(function () {
    var newParent1 = document.getElementById('custom-map-controls-1');
    var oldParent1 = document.getElementsByClassName("leaflet-top leaflet-right")
    map.addControl(layerControl1);

    while (oldParent1[0].childNodes.length > 0) {
        newParent1.appendChild(oldParent1[0].childNodes[0]);
    }

    var newParent2 = document.getElementById('custom-map-controls-2');
    var oldParent2 = document.getElementsByClassName("leaflet-top leaflet-right")
    map.addControl(layerControl2);

    while (oldParent2[0].childNodes.length > 0) {
        newParent2.appendChild(oldParent2[0].childNodes[0]);
    }

    var newParent3 = document.getElementById('custom-map-controls-3');
    var oldParent3 = document.getElementsByClassName("leaflet-top leaflet-right")
    map.addControl(layerControl3);

    while (oldParent3[0].childNodes.length > 0) {
        newParent3.appendChild(oldParent3[0].childNodes[0]);
    }

    var newParent4 = document.getElementById('custom-map-controls-4');
    var oldParent4 = document.getElementsByClassName("leaflet-top leaflet-right")
    map.addControl(layerControl4);

    while (oldParent4[0].childNodes.length > 0) {
        newParent4.appendChild(oldParent4[0].childNodes[0]);
    }

    var newParent5 = document.getElementById('custom-map-controls-5');
    var oldParent5 = document.getElementsByClassName("leaflet-top leaflet-right")
    map.addControl(layerControl5);

    while (oldParent5[0].childNodes.length > 0) {
        newParent5.appendChild(oldParent5[0].childNodes[0]);
    }
});

// create the sidebar instance and add it to the map
var sidebar1 = L.control.sidebar({container: 'sidebar-left', position: 'left'})
    .addTo(map)
    // set which sidebar tab to open first
    .open('mapping');

var sidebar2 = L.control.sidebar({container: 'sidebar-right', position: 'right'})
    .addTo(map)
    // set which sidebar tab to open first
    .open('legend');

// be notified when a panel is opened
sidebar1.on('content', function (ev) {
    switch (ev.id) {
        case 'autopan':
            sidebar1.options.autopan = true;
            break;
        default:
            sidebar1.options.autopan = false;
    }
});
sidebar2.on('content', function (ev) {
    switch (ev.id) {
        case 'autopan':
            sidebar2.options.autopan = true;
            //sidebar2.hide();
            break;
        default:
            sidebar2.options.autopan = false;
    }
});

// Here we hide all controls from end image
/*map.on(L.Control.BrowserPrint.Event.PrintStart, function() {
    map._controlCorners.topleft.style.display = "none";
    map._controlCorners.topright.style.display = "none";
});*/

// Browser print
L.control.browserPrint({
    title: 'Print map report',
    documentTitle: 'Climate Just Climate Mapping Tool Map Report',
    printLayer:
        L.tileLayer(serviceUrl + '/Light_3857/{z}/{x}/{y}.png?key=' + apiKey, {
            format: 'image/png',
            attribution: '<div class="os-api-branding copyright">Built by <a href="https://www.tellus-toolkit.com/" target="_blank">TellUs Toolkit Ltd</a> using <a href="https://leafletjs.com/" target="_blank">Leaflet</a> &amp; <a href="http://geoserver.org/" target="_blank">Geoserver</a> | Contains <a href="https://data.gov.uk/terms/" target="_blank">Open Government Data</a><span>|</span>Contains OS data © Crown copyright and database rights 2021.</div>',
            minZoom: 1,
            maxZoom: 16,
            opacity: 0.4,
            ext: 'png'
        }),
    closePopupsOnPrint: false,
    printModes: [
        L.control.browserPrint.mode.landscape("Landscape", "A4"),
        /*L.control.browserPrint.mode.portrait("Portrait", "A4"),*/
        L.control.browserPrint.mode.custom("Define a rectangle"),
        /*L.control.browserPrint.mode.auto("Download PNG")*/
    ],
    manualMode: false
}).addTo(map);

// Remove all layers from the map
function Clear() {
    map.eachLayer(function (layer) {
        map.removeLayer(layer);
        // need to add the OS base map back to the canvas
        map.addLayer(L.tileLayer(serviceUrl + '/Light_3857/{z}/{x}/{y}.png?key=' + apiKey, {
            format: 'image/png',
            maxZoom: 16,
            opacity: 0.4
        }))
    })
}
