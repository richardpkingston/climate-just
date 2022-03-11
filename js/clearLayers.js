/**
 * Function in a button to clear UKCP18 layers and also remove radio button selection
 */
function Clear() {
    var ele = document.getElementsByName("leaflet-exclusive-group-layer-0");
    for (var i = 0; i < ele.length; i++)
        ele[i].checked = false;
    map.removeLayer(rain_spr_10);
    map.removeLayer(rain_sum_10);
    map.removeLayer(rain_aut_10);
    map.removeLayer(rain_win_10);
    map.removeLayer(rain_spr_50);
    map.removeLayer(rain_sum_50);
    map.removeLayer(rain_aut_50);
    map.removeLayer(rain_win_50);
    map.removeLayer(rain_spr_90);
    map.removeLayer(rain_sum_90);
    map.removeLayer(rain_aut_90);
    map.removeLayer(rain_win_90);
    map.removeLayer(air_spr_10);
    map.removeLayer(air_sum_10);
    map.removeLayer(air_aut_10);
    map.removeLayer(air_win_10);
    map.removeLayer(air_spr_50);
    map.removeLayer(air_sum_50);
    map.removeLayer(air_aut_50);
    map.removeLayer(air_win_50);
    map.removeLayer(air_spr_90);
    map.removeLayer(air_sum_90);
    map.removeLayer(air_aut_90);
    map.removeLayer(air_win_90);
}