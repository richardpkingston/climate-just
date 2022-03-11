/**
 * The Spatial class is used as a static container of Spatial Information.
 */
class Spatial {

    /**
     * The initial map latitute.
     */
    //static initialLat = 54;

    /**
     * The initial map longitude.
     */
    //static initialLon = -4;

    /**
     * The initial map zoom level.
     */
    //static initialZoom = 6;

    /**
     * The maximum zoom level of the backgroundlayer which holds the maximum zoom level of them.
     */
    //static maxZoom = 18;

    /**
     * The leaflet map.
     */
    //static map = null;

    /**
     * The choropleth map layer.
     */
    static layer = null;

    /**
     * The basemap layer.
     */
    //static basemapLayer = null;

    /**
     * The constructor of the class which makes sure that the class
     * acts as a static one and can not be instantiated.
     */
    constructor() {
        if (this instanceof Spatial) {
            throw Error('Spatial class is static and cannot be instantiated.');
        }
    }

    /**
     * Initializes the map.
     */
    /*static initializeMap() {

        // Create the map and set its view.
        Spatial.map = L.map('map').setView([Spatial.initialLat, Spatial.initialLon], Spatial.initialZoom)

        // Add the basemap layer.
        Spatial.basemapLayer = L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
            maxZoom: Spatial.maxZoom,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        });
        Spatial.basemapLayer.addTo(Spatial.map);

    }*/

    /**
     * Updates the Map based on the active entry in the layers treeview.
     *
     * @param {object} selectedField - The field that has been selected in the treeview.
     */
    static updateMap(selectedField) {

        // Check if a feature layer exists on the map and remove it.
        if (Spatial.layer !== null) {
            Spatial.map.removeLayer(Spatial.layer);
        }

        // Make sure a field is selected.
        if (selectedField.length > 0) {

            let fieldName = AppData.heatExp2011Fields[selectedField[0].toString()].fieldName;

            // Create a new featurelayer and store it in the Spatial object.
            Spatial.layer = L.choropleth(AppData.heatExp2011FeatureCollection, {
                valueProperty: function (feature) {
                    return feature.properties[fieldName]
                },
                colors: ['#4375b5', '#9eaad7', '#cccccc', '#ffffbe', '#f5a27a', '#cd6666', '#a80000'], // set your own colours to match number of steps
                //scale: ['red', 'blue'], // or use the chroma.js colour scale
                steps: 7, // number of breaks or steps in range
                mode: 'q', // equidistant (e), quantile (q), logarithmic (l), and k-means (k)
                style: {
                    color: '#636363', //border color
                    weight: 1,
                    fillOpacity: 1
                },
                onEachFeature: function (feature, layer) {
                    //layer.bindPopup("Value: " + feature.properties[fieldName]);
                    // Place attribute query in to the footer div rather than a popup
                    var attribute = feature.properties[fieldName];
                    // set to 2 decimal places
                    var dp2 = attribute.toFixed(2);
                    layer.on('click', function (e) {
                        document.getElementById('map-info-footer').innerHTML = "This cell value is: " + dp2 + '&deg;C';
                    });
                    layer.bindPopup(dp2 + ' &deg;C');
                }
            });

            // Add the feature layer on the map.
            Spatial.layer.addTo(Spatial.map);

        }

    }

}//;


/**
 * ================================================================================
 *   ViewModels.
 * ================================================================================
 */

/**
 * The application ViewModel.
 *
 * @type {Vue}
 */
/*let appViewModel = new Vue({

    /!**
     * The name of the HTML component (the view) that this ViewModel
     * will attempt to be bound.
     *
     * @type {String} - The string holding the name of the HTML Component.
     *!/
    el: '#app',

    /!**
     * Indicates that the entire view would be controled by Vuetify.
     *
     * @type {Vuetify} - A new Vuetify object.
     *!/
    vuetify: new Vuetify(),

    /!**
     * The model associated with the view.
     * This is the model in the MVVM pattern.
     *
     * @return {object} - The model of the application.
     *!/
    data: {

        /!**
         * The items used to create the treeview hierarchy.
         *
         * @type {Array}
         *!/
        treeViewItems: AppData.treeViewItems,

        /!**
         * The array of the ids of the opened folders.
         *
         * @type {Array}
         *!/
        //openedFolders: [100],

        /!**
         * The selected field.
         * Since only one field would be visible, the array must have only one item
         * which holds the value of the id of the treeview item.
         *
         * @type {Array}
         *!/
        //selectedField: [101],

    },

    /!**
     * The methods that provide the functionality of the ViewModel.
     *
     * @type {Object} - The object that encapsulates all ViewModel methods.
     *!/
    methods: {

        /!**
         * Updates the Map based on the active entry in the layers treeview.
         *!/
        updateMap() {

            Spatial.updateMap(appViewModel.selectedField);

        }

    }

})*/


/**
 * ================================================================================
 *   Main Script Body.
 * ================================================================================
 */
/*
Spatial.initializeMap();

appViewModel.updateMap();
*/