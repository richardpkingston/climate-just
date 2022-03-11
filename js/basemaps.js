var basemaps = {};

// OS key
var apiKey = '46go7NDT06s4VAsKiCKQnKwShKEK33xg';
var serviceUrl = 'https://api.os.uk/maps/raster/v1/zxy';

// Define the base layers to be added to the map.
basemaps['OS light'] = {
    title: 'OS Light',
    icon: '../imgs/os-light.png',
    layer: L.tileLayer(serviceUrl + '/Light_3857/{z}/{x}/{y}.png?key=' + apiKey, {
        layers: 'osopen',
        format: 'image/png',
        continuousWorld: true,
        maxZoom: 16,
        opacity: 0.4
    })
};

basemaps['OS outdoor'] = {
    title: 'OS Outdoor',
    icon: '../imgs/os-outdoor.png',
    layer: L.tileLayer(serviceUrl + '/Outdoor_3857/{z}/{x}/{y}.png?key=' + apiKey, {
        maxZoom: 16,
        opacity: 0.4
    })
};

basemaps['OS road'] = {
    title: 'OS Road',
    icon: '../imgs/os-road.png',
    layer: L.tileLayer(serviceUrl + '/Road_3857/{z}/{x}/{y}.png?key=' + apiKey, {
        maxZoom: 16,
        opacity: 0.4
    })
};

basemaps['Esri_Satellite'] = {
    title: 'Esri satellite',
    icon: '../imgs/esri_satellite.png',
    layer: L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        //http://server.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; Source: USGS, Esri, TANA, DeLorme, and NPS',
        maxZoom: 13
    })
};