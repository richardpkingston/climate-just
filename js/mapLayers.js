/** Climate Just, University of Manchester
 Last updated: 17/08/2022
 By: Richard Kingston
 **/

// spatial data layers from GeoServer
// var url_ukcp18 = 'https://maps.tellus-toolkit.com/geoserver/ukcp18/wcs?';
// var url_nhs = 'https://maps.tellus-toolkit.com/geoserver/gwc/service/wms?';
var cj_server = 'https://maps.tellus-toolkit.com/geoserver/cj18/wms?';
var admin_server = 'https://maps.tellus-toolkit.com/geoserver/admin/wms?';
var EA_server = 'https://environment.data.gov.uk/spatialdata/';

// NFVI maps
var nfvi = L.tileLayer.wms(cj_server, {
    layers: 'cj18:nfvi',
    tiled: true,
    format: 'image/png',
    transparent: true
});

var susceptibility = L.tileLayer.wms(cj_server, {
    layers: 'cj18:susceptibility',
    tiled: true,
    format: 'image/png',
    transparent: true
});

var age = L.tileLayer.wms(cj_server, {
    layers: 'cj18:age',
    tiled: true,
    format: 'image/png',
    transparent: true
});

var under5 = L.tileLayer.wms(cj_server, {
    layers: 'cj18:under5',
    tiled: true,
    format: 'image/png',
    transparent: true
});

var under5Heat = L.tileLayer.wms(cj_server, {
    layers: 'cj18:under5',
    tiled: true,
    format: 'image/png',
    transparent: true
});

var over75 = L.tileLayer.wms(cj_server, {
    layers: 'cj18:over75',
    tiled: true,
    format: 'image/png',
    transparent: true
});

var over75Heat = L.tileLayer.wms(cj_server, {
    layers: 'cj18:over75',
    tiled: true,
    format: 'image/png',
    transparent: true
});

var ill_health = L.tileLayer.wms(cj_server, {
    layers: 'cj18:ill-health',
    tiled: true,
    format: 'image/png',
    transparent: true,
});

var dis_illHealth = L.tileLayer.wms(cj_server, {
    layers: 'cj18:ill-d2d', //UK_New_CJ_Flood_Data_JOIN',
    tiled: true,
    format: 'image/png',
    transparent: true,
    styles: 'ill-d2d'
});

var ill_d2dHeat = L.tileLayer.wms(cj_server, {
    layers: 'cj18:ill-d2d',
    tiled: true,
    format: 'image/png',
    transparent: true,
    styles: 'ill-d2d'
});

var llti = L.tileLayer.wms(cj_server, {
    layers: 'cj18:llti',
    tiled: true,
    format: 'image/png',
    transparent: true
});

var lltiHeat = L.tileLayer.wms(cj_server, {
    layers: 'cj18:llti',
    tiled: true,
    format: 'image/png',
    transparent: true
});

var f_prepare = L.tileLayer.wms(cj_server, {
    layers: 'cj18:flood_prepare',
    tiled: true,
    format: 'image/png',
    transparent: true
});

var income = L.tileLayer.wms(cj_server, {
    layers: 'cj18:income',
    tiled: true,
    format: 'image/png',
    transparent: true
});

var unemployed = L.tileLayer.wms(cj_server, {
    layers: 'cj18:unemployment',
    tiled: true,
    format: 'image/png',
    transparent: true
});

var LTunemployed = L.tileLayer.wms(cj_server, {
    layers: 'cj18:LTunemp',
    tiled: true,
    format: 'image/png',
    transparent: true
});

var lowIncome = L.tileLayer.wms(cj_server, {
    layers: 'cj18:lowincome',
    tiled: true,
    format: 'image/png',
    transparent: true
});

var depChildUnemp = L.tileLayer.wms(cj_server, {
    layers: 'cj18:depChild',
    tiled: true,
    format: 'image/png',
    transparent: true
});

var incomeDepIndex = L.tileLayer.wms(cj_server, {
    layers: 'cj18:incomeDepIndex',
    tiled: true,
    format: 'image/png',
    transparent: true
});

var info = L.tileLayer.wms(cj_server, {
    layers: 'cj18:information',
    tiled: true,
    format: 'image/png',
    transparent: true
});

var arrivalsUK = L.tileLayer.wms(cj_server, {
    layers: 'cj18:arrivalsUK',
    tiled: true,
    format: 'image/png',
    transparent: true
});

var engLanguage = L.tileLayer.wms(cj_server, {
    layers: 'cj18:language',
    tiles: true,
    format: 'image/png',
    transparent: true
});

var localKnowledge = L.tileLayer.wms(cj_server, {
    layers: 'cj18:localKnowledge',
    tiles: true,
    format: 'image/png',
    transparent: true
});

var migrants = L.tileLayer.wms(cj_server, {
    layers: 'cj18:migrants',
    tiles: true,
    format: 'image/png',
    transparent: true
});

var propTenure = L.tileLayer.wms(cj_server, {
    layers: 'cj18:propTenure',
    tiles: true,
    format: 'image/png',
    transparent: true
});

var privRent = L.tileLayer.wms(cj_server, {
    layers: 'cj18:privRent',
    tiles: true,
    format: 'image/png',
    transparent: true
});

var socialRent = L.tileLayer.wms(cj_server, {
    layers: 'cj18:socialRent',
    tiles: true,
    format: 'image/png',
    transparent: true
});

var nfviRespond = L.tileLayer.wms(cj_server, {
    layers: 'cj18:nfvi_respond',
    tiles: true,
    format: 'image/png',
    transparent: true
});

var mobility = L.tileLayer.wms(cj_server, {
    layers: 'cj18:mobility',
    tiles: true,
    format: 'image/png',
    transparent: true
});

var disability = L.tileLayer.wms(cj_server, {
    layers: 'cj18:disability',
    tiles: true,
    format: 'image/png',
    transparent: true
});

var medCare = L.tileLayer.wms(cj_server, {
    layers: 'cj18:medCare',
    tiles: true,
    format: 'image/png',
    transparent: true
});

var transport = L.tileLayer.wms(cj_server, {
    layers: 'cj18:transport',
    tiles: true,
    format: 'image/png',
    transparent: true
});

var crimeIndex = L.tileLayer.wms(cj_server, {
    layers: 'cj18:crimeIndex',
    tiles: true,
    format: 'image/png',
    transparent: true
});

var crimeIMD = L.tileLayer.wms(cj_server, {
    layers: 'cj18:crimeIMD',
    tiles: true,
    format: 'image/png',
    transparent: true
});

var crimeIMDHeat = L.tileLayer.wms(cj_server, {
    layers: 'cj18:crimeIMD',
    tiles: true,
    format: 'image/png',
    transparent: true
});

var nfviRecover = L.tileLayer.wms(cj_server, {
    layers: 'cj18:nfvi_recover',
    tiles: true,
    format: 'image/png',
    transparent: true
});

var nfviCommunity = L.tileLayer.wms(cj_server, {
    layers: 'cj18:nfvi_community',
    tiles: true,
    format: 'image/png',
    transparent: true
});

var housing = L.tileLayer.wms(cj_server, {
    layers: 'cj18:housing_vuln',
    tiles: true,
    format: 'image/png',
    transparent: true
});

var caravan = L.tileLayer.wms(cj_server, {
    layers: 'cj18:caravan',
    tiles: true,
    format: 'image/png',
    transparent: true
});

var directFlood = L.tileLayer.wms(cj_server, {
    layers: 'cj18:direct_flood',
    tiles: true,
    format: 'image/png',
    transparent: true
});

var serviceFlood = L.tileLayer.wms(cj_server, {
    layers: 'cj18:serviceFlood',
    tiles: true,
    format: 'image/png',
    transparent: true
});

var emergServices = L.tileLayer.wms(cj_server, {
    layers: 'cj18:emergServices',
    tiles: true,
    format: 'image/png',
    transparent: true
});

var careHomes = L.tileLayer.wms(cj_server, {
    layers: 'cj18:careHomes',
    tiles: true,
    format: 'image/png',
    transparent: true
});

var gpFlood = L.tileLayer.wms(cj_server, {
    layers: 'cj18:gpFlood',
    tiles: true,
    format: 'image/png',
    transparent: true
});

var schoolFlood = L.tileLayer.wms(cj_server, {
    layers: 'cj18:schoolFlood',
    tiles: true,
    format: 'image/png',
    transparent: true
});

var socialNet = L.tileLayer.wms(cj_server, {
    layers: 'cj18:socialNet',
    tiles: true,
    format: 'image/png',
    transparent: true
});

var pensioner = L.tileLayer.wms(cj_server, {
    layers: 'cj18:pensioner',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'pensioner'
});

var loneParentFlood = L.tileLayer.wms(cj_server, {
    layers: 'UK_New_CJ_Flood_Data_JOIN',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'loneParent'
});

var loneParent = L.tileLayer.wms(cj_server, {
    layers: 'UK_New_CJ_Flood_Data_JOIN',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'loneParent'
});

var age4_11 = L.tileLayer.wms(cj_server, {
    layers: 'cj18:age4-11',
    tiles: true,
    format: 'image/png',
    transparent: true
});

var SFRIpresDayG = L.tileLayer.wms(cj_server, {
    layers: 'cj18:SFRIpresDayG',
    tiles: true,
    format: 'image/png',
    transparent: true
});

var SFRI2050_2degG = L.tileLayer.wms(cj_server, {
    layers: 'cj18:SFRI2050_2degG',
    tiles: true,
    format: 'image/png',
    transparent: true
});

var SFRI2050_4degG = L.tileLayer.wms(cj_server, {
    layers: 'cj18:SFRI2050_4degG',
    tiles: true,
    format: 'image/png',
    transparent: true
});

var SFRIpresDayI = L.tileLayer.wms(cj_server, {
    layers: 'cj18:SFRIpresDayI',
    tiles: true,
    format: 'image/png',
    transparent: true
});

var SFRI2050_2degI = L.tileLayer.wms(cj_server, {
    layers: 'cj18:SFRI2050_2degI',
    tiles: true,
    format: 'image/png',
    transparent: true
});

var SFRI2050_4degI = L.tileLayer.wms(cj_server, {
    layers: 'cj18:SFRI2050_4degI',
    tiles: true,
    format: 'image/png',
    transparent: true
});

var SFRIpresDayG_SW = L.tileLayer.wms(cj_server, {
    layers: 'cj18:SFRIpresDayG_SW',
    tiles: true,
    format: 'image/png',
    transparent: true
});

var SFRI2050_2degG_SW = L.tileLayer.wms(cj_server, {
    layers: 'cj18:SFRI2050_2degG_SW',
    tiles: true,
    format: 'image/png',
    transparent: true
});

var SFRI2050_4degG_SW = L.tileLayer.wms(cj_server, {
    layers: 'cj18:SFRI2050_4degG_SW',
    tiles: true,
    format: 'image/png',
    transparent: true
});

var SFRIpresDayI_SW = L.tileLayer.wms(cj_server, {
    layers: 'cj18:SFRIpresDayI_SW',
    tiles: true,
    format: 'image/png',
    transparent: true
});

var SFRI2050_2degI_SW = L.tileLayer.wms(cj_server, {
    layers: 'cj18:SFRI2050_2degI_SW',
    tiles: true,
    format: 'image/png',
    transparent: true
});

var SFRI2050_4degI_SW = L.tileLayer.wms(cj_server, {
    layers: 'cj18:SFRI2050_4degI_SW',
    tiles: true,
    format: 'image/png',
    transparent: true
});

// Heat maps
var RWHZZ_CV7 = L.tileLayer.wms(cj_server, {
    layers: 'cj18:heat_disadvantage_2011_21012014',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'heat_RWHZZ_CV7'
});

var RWHZZ_CV8 = L.tileLayer.wms(cj_server, {
    layers: 'cj18:heat_disadvantage_2011_21012014',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'heat_RWHZZ_CV8'
});

var RWHZZ_CV9 = L.tileLayer.wms(cj_server, {
    layers: 'cj18:heat_disadvantage_2011_21012014',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'heat_RWHZZ_CV9'
});

var RWHZZ_CV4 = L.tileLayer.wms(cj_server, {
    layers: 'cj18:heat_disadvantage_2011_21012014',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'heat_RWHZZ_CV4'
});

var RWHZZ_CV5 = L.tileLayer.wms(cj_server, {
    layers: 'cj18:heat_disadvantage_2011_21012014',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'heat_RWHZZ_CV5'
});

var RWHZZ_CV6 = L.tileLayer.wms(cj_server, {
    layers: 'cj18:heat_disadvantage_2011_21012014',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'heat_RWHZZ_CV6'
});

var RWHZZ_CV1 = L.tileLayer.wms(cj_server, {
    layers: 'cj18:heat_disadvantage_2011_21012014',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'heat_RWHZZ_CV1'
});

var RWHZZ_CV2 = L.tileLayer.wms(cj_server, {
    layers: 'cj18:heat_disadvantage_2011_21012014',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'heat_RWHZZ_CV2'
});

var RWHZZ_CV3 = L.tileLayer.wms(cj_server, {
    layers: 'cj18:heat_disadvantage_2011_21012014',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'heat_RWHZZ_CV3'
});

var RWHZZ_CV16 = L.tileLayer.wms(cj_server, {
    layers: 'cj18:heat_disadvantage_2011_21012014',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'heat_RWHZZ_CV16'
});

var RWHZZ_CV17 = L.tileLayer.wms(cj_server, {
    layers: 'cj18:heat_disadvantage_2011_21012014',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'heat_RWHZZ_CV17'
});

var RWHZZ_CV18 = L.tileLayer.wms(cj_server, {
    layers: 'cj18:heat_disadvantage_2011_21012014',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'heat_RWHZZ_CV18'
});

var RWHZZ_CV13 = L.tileLayer.wms(cj_server, {
    layers: 'cj18:heat_disadvantage_2011_21012014',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'heat_RWHZZ_CV13'
});

var RWHZZ_CV14 = L.tileLayer.wms(cj_server, {
    layers: 'cj18:heat_disadvantage_2011_21012014',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'heat_RWHZZ_CV14'
});

var RWHZZ_CV15 = L.tileLayer.wms(cj_server, {
    layers: 'cj18:heat_disadvantage_2011_21012014',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'heat_RWHZZ_CV15'
});

var RWHZZ_CV10 = L.tileLayer.wms(cj_server, {
    layers: 'cj18:heat_disadvantage_2011_21012014',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'heat_RWHZZ_CV10'
});

var RWHZZ_CV11 = L.tileLayer.wms(cj_server, {
    layers: 'cj18:heat_disadvantage_2011_21012014',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'heat_RWHZZ_CV11'
});

var RWHZZ_CV12 = L.tileLayer.wms(cj_server, {
    layers: 'cj18:heat_disadvantage_2011_21012014',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'heat_RWHZZ_CV12'
});

var RWHZZ_CV25 = L.tileLayer.wms(cj_server, {
    layers: 'cj18:heat_disadvantage_2011_21012014',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'heat_RWHZZ_CV25'
});

var RWHZZ_CV26 = L.tileLayer.wms(cj_server, {
    layers: 'cj18:heat_disadvantage_2011_21012014',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'heat_RWHZZ_CV26'
});

var RWHZZ_CV27 = L.tileLayer.wms(cj_server, {
    layers: 'cj18:heat_disadvantage_2011_21012014',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'heat_RWHZZ_CV27'
});

var RWHZZ_CV22 = L.tileLayer.wms(cj_server, {
    layers: 'cj18:heat_disadvantage_2011_21012014',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'heat_RWHZZ_CV22'
});

var ZRWHZZ_CV2 = L.tileLayer.wms(cj_server, {
    layers: 'cj18:heat_disadvantage_2011_21012014',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'heat_ZRWHZZ_CV2'
});

var RWHZZ_CV24 = L.tileLayer.wms(cj_server, {
    layers: 'cj18:heat_disadvantage_2011_21012014',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'heat_RWHZZ_CV24'
});

var RWHZZ_CV19 = L.tileLayer.wms(cj_server, {
    layers: 'cj18:heat_disadvantage_2011_21012014',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'heat_RWHZZ_CV19'
});

var RWHZZ_CV20 = L.tileLayer.wms(cj_server, {
    layers: 'cj18:heat_disadvantage_2011_21012014',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'heat_RWHZZ_CV20'
});

var RWHZZ_CV21 = L.tileLayer.wms(cj_server, {
    layers: 'cj18:heat_disadvantage_2011_21012014',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'heat_RWHZZ_CV21'
});

var RWHZZ_CV34 = L.tileLayer.wms(cj_server, {
    layers: 'cj18:heat_disadvantage_2011_21012014',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'heat_RWHZZ_CV34'
});

var RWHZZ_CV35 = L.tileLayer.wms(cj_server, {
    layers: 'cj18:heat_disadvantage_2011_21012014',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'heat_RWHZZ_CV35'
});

var RWHZZ_CV36 = L.tileLayer.wms(cj_server, {
    layers: 'cj18:heat_disadvantage_2011_21012014',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'heat_RWHZZ_CV36'
});

var RWHZZ_CV31 = L.tileLayer.wms(cj_server, {
    layers: 'cj18:heat_disadvantage_2011_21012014',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'heat_RWHZZ_CV31'
});

var RWHZZ_CV32 = L.tileLayer.wms(cj_server, {
    layers: 'cj18:heat_disadvantage_2011_21012014',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'heat_RWHZZ_CV32'
});

var RWHZZ_CV33 = L.tileLayer.wms(cj_server, {
    layers: 'cj18:heat_disadvantage_2011_21012014',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'heat_RWHZZ_CV33'
});

var RWHZZ_CV28 = L.tileLayer.wms(cj_server, {
    layers: 'cj18:heat_disadvantage_2011_21012014',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'heat_RWHZZ_CV28'
});

var RWHZZ_CV29 = L.tileLayer.wms(cj_server, {
    layers: 'cj18:heat_disadvantage_2011_21012014',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'heat_RWHZZ_CV29'
});

var RWHZZ_CV30 = L.tileLayer.wms(cj_server, {
    layers: 'cj18:heat_disadvantage_2011_21012014',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'heat_RWHZZ_CV30'
});

var R_HZZ_CV7 = L.tileLayer.wms(cj_server, {
    layers: 'cj18:heat_disadvantage_2011_21012014',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'heat_R_HZZ_CV7'
});

var R_HZZ_CV8 = L.tileLayer.wms(cj_server, {
    layers: 'cj18:heat_disadvantage_2011_21012014',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'heat_R_HZZ_CV8'
});

var R_HZZ_CV9 = L.tileLayer.wms(cj_server, {
    layers: 'cj18:heat_disadvantage_2011_21012014',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'heat_R_HZZ_CV9'
});

var R_HZZ_CV4 = L.tileLayer.wms(cj_server, {
    layers: 'cj18:heat_disadvantage_2011_21012014',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'heat_R_HZZ_CV4'
});

var R_HZZ_CV5 = L.tileLayer.wms(cj_server, {
    layers: 'cj18:heat_disadvantage_2011_21012014',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'heat_R_HZZ_CV5'
});

var R_HZZ_CV6 = L.tileLayer.wms(cj_server, {
    layers: 'cj18:heat_disadvantage_2011_21012014',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'heat_R_HZZ_CV6'
});

var R_HZZ_CV1 = L.tileLayer.wms(cj_server, {
    layers: 'cj18:heat_disadvantage_2011_21012014',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'heat_R_HZZ_CV1'
});

var R_HZZ_CV2 = L.tileLayer.wms(cj_server, {
    layers: 'cj18:heat_disadvantage_2011_21012014',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'heat_R_HZZ_CV2'
});

var R_HZZ_CV3 = L.tileLayer.wms(cj_server, {
    layers: 'cj18:heat_disadvantage_2011_21012014',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'heat_R_HZZ_CV3'
});

var R_HZZ_CV16 = L.tileLayer.wms(cj_server, {
    layers: 'cj18:heat_disadvantage_2011_21012014',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'heat_R_HZZ_CV16'
});

var R_HZZ_CV17 = L.tileLayer.wms(cj_server, {
    layers: 'cj18:heat_disadvantage_2011_21012014',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'heat_R_HZZ_CV17'
});

var R_HZZ_CV18 = L.tileLayer.wms(cj_server, {
    layers: 'cj18:heat_disadvantage_2011_21012014',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'heat_R_HZZ_CV18'
});

var R_HZZ_CV13 = L.tileLayer.wms(cj_server, {
    layers: 'cj18:heat_disadvantage_2011_21012014',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'heat_R_HZZ_CV13'
});

var R_HZZ_CV14 = L.tileLayer.wms(cj_server, {
    layers: 'cj18:heat_disadvantage_2011_21012014',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'heat_R_HZZ_CV14'
});

var R_HZZ_CV15 = L.tileLayer.wms(cj_server, {
    layers: 'cj18:heat_disadvantage_2011_21012014',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'heat_R_HZZ_CV15'
});

var R_HZZ_CV10 = L.tileLayer.wms(cj_server, {
    layers: 'cj18:heat_disadvantage_2011_21012014',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'heat_R_HZZ_CV10'
});

var R_HZZ_CV11 = L.tileLayer.wms(cj_server, {
    layers: 'cj18:heat_disadvantage_2011_21012014',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'heat_R_HZZ_CV11'
});

var R_HZZ_CV12 = L.tileLayer.wms(cj_server, {
    layers: 'cj18:heat_disadvantage_2011_21012014',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'heat_R_HZZ_CV12'
});

var R_HZZ_CV25 = L.tileLayer.wms(cj_server, {
    layers: 'cj18:heat_disadvantage_2011_21012014',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'heat_R_HZZ_CV25'
});

var R_HZZ_CV26 = L.tileLayer.wms(cj_server, {
    layers: 'cj18:heat_disadvantage_2011_21012014',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'heat_R_HZZ_CV26'
});

var R_HZZ_CV27 = L.tileLayer.wms(cj_server, {
    layers: 'cj18:heat_disadvantage_2011_21012014',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'heat_R_HZZ_CV27'
});

var R_HZZ_CV22 = L.tileLayer.wms(cj_server, {
    layers: 'cj18:heat_disadvantage_2011_21012014',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'heat_R_HZZ_CV22'
});

var R_HZZ_CV23 = L.tileLayer.wms(cj_server, {
    layers: 'cj18:heat_disadvantage_2011_21012014',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'heat_R_HZZ_CV23'
});

var R_HZZ_CV24 = L.tileLayer.wms(cj_server, {
    layers: 'cj18:heat_disadvantage_2011_21012014',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'heat_R_HZZ_CV24'
});

var R_HZZ_CV19 = L.tileLayer.wms(cj_server, {
    layers: 'cj18:heat_disadvantage_2011_21012014',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'heat_R_HZZ_CV19'
});

var R_HZZ_CV20 = L.tileLayer.wms(cj_server, {
    layers: 'cj18:heat_disadvantage_2011_21012014',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'heat_R_HZZ_CV20'
});

var R_HZZ_CV21 = L.tileLayer.wms(cj_server, {
    layers: 'cj18:heat_disadvantage_2011_21012014',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'heat_R_HZZ_CV21'
});

var R_HZZ_CV34 = L.tileLayer.wms(cj_server, {
    layers: 'cj18:heat_disadvantage_2011_21012014',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'heat_R_HZZ_CV34'
});

var R_HZZ_CV35 = L.tileLayer.wms(cj_server, {
    layers: 'cj18:heat_disadvantage_2011_21012014',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'heat_R_HZZ_CV35'
});

var R_HZZ_CV36 = L.tileLayer.wms(cj_server, {
    layers: 'cj18:heat_disadvantage_2011_21012014',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'heat_R_HZZ_CV36'
});

var R_HZZ_CV31 = L.tileLayer.wms(cj_server, {
    layers: 'cj18:heat_disadvantage_2011_21012014',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'heat_R_HZZ_CV31'
});

var R_HZZ_CV32 = L.tileLayer.wms(cj_server, {
    layers: 'cj18:heat_disadvantage_2011_21012014',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'heat_R_HZZ_CV32'
});

var R_HZZ_CV33 = L.tileLayer.wms(cj_server, {
    layers: 'cj18:heat_disadvantage_2011_21012014',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'heat_R_HZZ_CV33'
});

var R_HZZ_CV28 = L.tileLayer.wms(cj_server, {
    layers: 'cj18:heat_disadvantage_2011_21012014',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'heat_R_HZZ_CV28'
});

var R_HZZ_CV29 = L.tileLayer.wms(cj_server, {
    layers: 'cj18:heat_disadvantage_2011_21012014',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'heat_R_HZZ_CV29'
});

var R_HZZ_CV30 = L.tileLayer.wms(cj_server, {
    layers: 'cj18:heat_disadvantage_2011_21012014',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'heat_R_HZZ_CV30'
});

// Heat exposure 2011 All_2011_heat_data_zscores
var AbsM10Day = L.tileLayer.wms(cj_server, {
    layers: 'All_2011_heat_data_zscores',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'AbsM10Day'
})

var AbsM50Day = L.tileLayer.wms(cj_server, {
    layers: 'All_2011_heat_data_zscores',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'AbsM50Day'
})

var AbsM90Day = L.tileLayer.wms(cj_server, {
    layers: 'All_2011_heat_data_zscores',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'AbsM90Day'
})

var AbsL10Day = L.tileLayer.wms(cj_server, {
    layers: 'All_2011_heat_data_zscores',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'AbsL10Day'
})

var AbsL50Day = L.tileLayer.wms(cj_server, {
    layers: 'All_2011_heat_data_zscores',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'AbsL50Day'
})

var AbsL90Day = L.tileLayer.wms(cj_server, {
    layers: 'All_2011_heat_data_zscores',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'AbsL90Day'
})

var AbsH10Day = L.tileLayer.wms(cj_server, {
    layers: 'All_2011_heat_data_zscores',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'AbsH10Day'
})

var AbsH50Day = L.tileLayer.wms(cj_server, {
    layers: 'All_2011_heat_data_zscores',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'AbsH50Day'
})

var AbsH90Day = L.tileLayer.wms(cj_server, {
    layers: 'All_2011_heat_data_zscores',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'AbsH90Day'
})

var ChM10Day = L.tileLayer.wms(cj_server, {
    layers: 'All_2011_heat_data_zscores',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'ChM10Day'
})

var ChM50Day = L.tileLayer.wms(cj_server, {
    layers: 'All_2011_heat_data_zscores',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'ChM50Day'
})

var ChM90Day = L.tileLayer.wms(cj_server, {
    layers: 'All_2011_heat_data_zscores',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'ChM90Day'
})

var ChL10Day = L.tileLayer.wms(cj_server, {
    layers: 'All_2011_heat_data_zscores',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'ChL10Day'
})

var ChL50Day = L.tileLayer.wms(cj_server, {
    layers: 'All_2011_heat_data_zscores',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'ChL50Day'
})

var ChL90Day = L.tileLayer.wms(cj_server, {
    layers: 'All_2011_heat_data_zscores',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'ChL90Day'
})

var ChH10Day = L.tileLayer.wms(cj_server, {
    layers: 'All_2011_heat_data_zscores',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'ChH10Day'
})

var ChH50Day = L.tileLayer.wms(cj_server, {
    layers: 'All_2011_heat_data_zscores',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'ChH50Day'
})

var ChH90Day = L.tileLayer.wms(cj_server, {
    layers: 'All_2011_heat_data_zscores',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'ChH90Day'
})

var ChM10WD = L.tileLayer.wms(cj_server, {
    layers: 'All_2011_heat_data_zscores',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'ChM10WD'
})

var ChM50WD = L.tileLayer.wms(cj_server, {
    layers: 'All_2011_heat_data_zscores',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'ChM50WD'
})

var ChM90WD = L.tileLayer.wms(cj_server, {
    layers: 'All_2011_heat_data_zscores',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'ChM90WD'
})

var ChL10WD = L.tileLayer.wms(cj_server, {
    layers: 'All_2011_heat_data_zscores',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'ChL10WD'
})

var ChL50WD = L.tileLayer.wms(cj_server, {
    layers: 'All_2011_heat_data_zscores',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'ChL50WD'
})

var ChL90WD = L.tileLayer.wms(cj_server, {
    layers: 'All_2011_heat_data_zscores',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'ChL90WD'
})

var ChH10WD = L.tileLayer.wms(cj_server, {
    layers: 'All_2011_heat_data_zscores',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'ChH10WD'
})

var ChH50WD = L.tileLayer.wms(cj_server, {
    layers: 'All_2011_heat_data_zscores',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'ChH50WD'
})

var ChH90WD = L.tileLayer.wms(cj_server, {
    layers: 'All_2011_heat_data_zscores',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'ChH90WD'
})

var ChM10WN = L.tileLayer.wms(cj_server, {
    layers: 'All_2011_heat_data_zscores',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'ChM10WN'
})

var ChM50WN = L.tileLayer.wms(cj_server, {
    layers: 'All_2011_heat_data_zscores',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'ChM50WN'
})

var ChM90WN = L.tileLayer.wms(cj_server, {
    layers: 'All_2011_heat_data_zscores',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'ChM90WN'
})

var ChL10WN = L.tileLayer.wms(cj_server, {
    layers: 'All_2011_heat_data_zscores',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'ChL10WN'
})

var ChL50WN = L.tileLayer.wms(cj_server, {
    layers: 'All_2011_heat_data_zscores',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'ChL50WN'
})

var ChL90WN = L.tileLayer.wms(cj_server, {
    layers: 'All_2011_heat_data_zscores',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'ChL90WN'
})

var ChH10WN = L.tileLayer.wms(cj_server, {
    layers: 'All_2011_heat_data_zscores',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'ChH10WN'
})

var ChH50WN = L.tileLayer.wms(cj_server, {
    layers: 'All_2011_heat_data_zscores',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'ChH50WN'
})

var ChH90WN = L.tileLayer.wms(cj_server, {
    layers: 'All_2011_heat_data_zscores',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'ChH90WN'
})

// FINAL_SSVI_FLOOD_HEAT_04022014 maps
var ZH_VULN_IN = L.tileLayer.wms(cj_server, {
    layers: 'cj18:FINAL_SSVI_FLOOD_HEAT_04022014',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'SSVI-flood-heat'
})

var SENS_IND = L.tileLayer.wms(cj_server, {
    layers: 'FINAL_SSVI_FLOOD_HEAT_04022014',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'SENS_IND'
})

// Exposure heat indexes
var exposureHeat = L.tileLayer.wms(cj_server, {
    layers: 'FINAL_SSVI_FLOOD_HEAT_04022014',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'ZH_EXP_IND'
})

var builtup = L.tileLayer.wms(cj_server, {
    layers: 'FINAL_SSVI_FLOOD_HEAT_04022014',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'built-up'
})

var nogarden = L.tileLayer.wms(cj_server, {
    layers: 'FINAL_SSVI_FLOOD_HEAT_04022014',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'no-garden'
})

var notBlue = L.tileLayer.wms(cj_server, {
    layers: 'FINAL_SSVI_FLOOD_HEAT_04022014',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'not-Blue'
})

var coast = L.tileLayer.wms(cj_server, {
    layers: 'FINAL_SSVI_FLOOD_HEAT_04022014',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'coast'
})

var elevation = L.tileLayer.wms(cj_server, {
    layers: 'FINAL_SSVI_FLOOD_HEAT_04022014',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'elevation'
})

var highRise = L.tileLayer.wms(cj_server, {
    layers: 'FINAL_SSVI_FLOOD_HEAT_04022014',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'highRise'
})

var AbilityToPrepareIndex = L.tileLayer.wms(cj_server, {
    layers: 'FINAL_SSVI_FLOOD_HEAT_04022014',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'ZH_PREP_IN'
})

var unemployedHeat = L.tileLayer.wms(cj_server, {
    layers: 'UK_New_CJ_Flood_Data_JOIN',
    tiled: true,
    format: 'image/png',
    transparent: true,
    styles: 'unemployedHeat'
});

var lowIncomeOcc = L.tileLayer.wms(cj_server, {
    layers: 'UK_New_CJ_Flood_Data_JOIN',
    tiled: true,
    format: 'image/png',
    transparent: true,
    styles: 'lowIncomeOcc'
});

var LTunemployment = L.tileLayer.wms(cj_server, {
    layers: 'UK_New_CJ_Flood_Data_JOIN',
    tiled: true,
    format: 'image/png',
    transparent: true,
    styles: 'LTunemp'
});

var depChildUnempHeat = L.tileLayer.wms(cj_server, {
    layers: 'UK_New_CJ_Flood_Data_JOIN',
    tiled: true,
    format: 'image/png',
    transparent: true,
    styles: 'depChildUnemp'
})

var income_weekly = L.tileLayer.wms(cj_server, {
    layers: 'FINAL_SSVI_FLOOD_HEAT_04022014',
    tiled: true,
    format: 'image/png',
    transparent: true,
    styles: 'income_weekly'
})

var pensionerHH = L.tileLayer.wms(cj_server, {
    layers: 'UK_New_CJ_Flood_Data_JOIN',
    tiled: true,
    format: 'image/png',
    transparent: true,
    styles: 'pensionerHH'
})

var singlePen = L.tileLayer.wms(cj_server, { //
    layers: 'FINAL_SSVI_FLOOD_HEAT_04022014',
    tiles: true,
    format: 'image/png',
    transparent: true,
    styles: 'singlePen'
});

var socRent = L.tileLayer.wms(cj_server, {
    layers: 'UK_New_CJ_Flood_Data_JOIN',
    tiled: true,
    format: 'image/png',
    transparent: true,
    styles: 'socRent'
})

var priRent = L.tileLayer.wms(cj_server, {
    layers: 'UK_New_CJ_Flood_Data_JOIN',
    tiled: true,
    format: 'image/png',
    transparent: true,
    styles: 'priRentt1'
})

var outsideUK = L.tileLayer.wms(cj_server, {
    layers: 'FINAL_SSVI_FLOOD_HEAT_04022014',
    tiled: true,
    format: 'image/png',
    transparent: true,
    styles: 'outsideUK'
})

var arrivalsUKheat = L.tileLayer.wms(cj_server, {
    layers: 'UK_New_CJ_Flood_Data_JOIN',
    tiled: true,
    format: 'image/png',
    transparent: true,
    styles: 'arrivalsUKHeat'
})

var AbilityRespondIndexHeat = L.tileLayer.wms(cj_server, {
    layers: 'FINAL_SSVI_FLOOD_HEAT_04022014',
    tiled: true,
    format: 'image/png',
    transparent: true,
    styles: 'ZF_RESP_IN'
})

var noCarer = L.tileLayer.wms(cj_server, {
    layers: 'FINAL_SSVI_FLOOD_HEAT_04022014',
    tiled: true,
    format: 'image/png',
    transparent: true,
    styles: 'noCarer'
})

var noCar = L.tileLayer.wms(cj_server, {
    layers: 'UK_New_CJ_Flood_Data_JOIN',
    tiled: true,
    format: 'image/png',
    transparent: true,
    styles: 'noCar'
})

var roadDensity = L.tileLayer.wms(cj_server, {
    layers: 'FINAL_SSVI_FLOOD_HEAT_04022014',
    tiled: true,
    format: 'image/png',
    transparent: true,
    styles: 'roadDensity'
})

var retailDensity = L.tileLayer.wms(cj_server, {
    layers: 'FINAL_SSVI_FLOOD_HEAT_04022014',
    tiled: true,
    format: 'image/png',
    transparent: true,
    styles: 'retailDensity'
})

var enterprises = L.tileLayer.wms(cj_server, {
    layers: 'FINAL_SSVI_FLOOD_HEAT_04022014',
    tiled: true,
    format: 'image/png',
    transparent: true,
    styles: 'enterprises'
})

var workAway = L.tileLayer.wms(cj_server, {
    layers: 'FINAL_SSVI_FLOOD_HEAT_04022014',
    tiled: true,
    format: 'image/png',
    transparent: true,
    styles: 'workAway'
})

var ttGP = L.tileLayer.wms(cj_server, {
    layers: 'FINAL_SSVI_FLOOD_HEAT_04022014',
    tiled: true,
    format: 'image/png',
    transparent: true,
    styles: 'ttGP'
})

var min15GP = L.tileLayer.wms(cj_server, {
    layers: 'FINAL_SSVI_FLOOD_HEAT_04022014',
    tiled: true,
    format: 'image/png',
    transparent: true,
    styles: 'min15GP'
})

var less15GP = L.tileLayer.wms(cj_server, {
    layers: 'FINAL_SSVI_FLOOD_HEAT_04022014',
    tiled: true,
    format: 'image/png',
    transparent: true,
    styles: 'less15GP'
})

var less15GPcar = L.tileLayer.wms(cj_server, {
    layers: 'FINAL_SSVI_FLOOD_HEAT_04022014',
    tiled: true,
    format: 'image/png',
    transparent: true,
    styles: 'less15GPcar'
})

var walkHosp = L.tileLayer.wms(cj_server, {
    layers: 'FINAL_SSVI_FLOOD_HEAT_04022014',
    tiled: true,
    format: 'image/png',
    transparent: true,
    styles: 'walkHosp'
})

var carHosp = L.tileLayer.wms(cj_server, {
    layers: 'FINAL_SSVI_FLOOD_HEAT_04022014',
    tiled: true,
    format: 'image/png',
    transparent: true,
    styles: 'carHosp'
})

var risk30WalkHosp = L.tileLayer.wms(cj_server, {
    layers: 'FINAL_SSVI_FLOOD_HEAT_04022014',
    tiled: true,
    format: 'image/png',
    transparent: true,
    styles: 'risk30WalkHosp'
})

var less30minHospWalk = L.tileLayer.wms(cj_server, {
    layers: 'FINAL_SSVI_FLOOD_HEAT_04022014',
    tiled: true,
    format: 'image/png',
    transparent: true,
    styles: 'less30minHospWalk'
})

var less30minHospCar = L.tileLayer.wms(cj_server, {
    layers: 'FINAL_SSVI_FLOOD_HEAT_04022014',
    tiled: true,
    format: 'image/png',
    transparent: true,
    styles: 'less30minHospCar'
})

var ZF_REC_IND = L.tileLayer.wms(cj_server, {
    layers: 'FINAL_SSVI_FLOOD_HEAT_04022014',
    tiled: true,
    format: 'image/png',
    transparent: true,
    styles: 'ZF_REC_IND'
})


// Fuel poverty maps
var LA_FP_2012 = L.tileLayer.wms(cj_server, {
    layers: 'cj18:LA_FP_2012',
    tiles: true,
    format: 'image/png',
    transparent: true
});

var LA_FP_2012_10pc = L.tileLayer.wms(cj_server, {
    layers: 'cj18:LA_FP_2012_10pc',
    tiles: true,
    format: 'image/png',
    transparent: true
});

var LSOA_FP_2012 = L.tileLayer.wms(cj_server, {
    layers: 'cj18:LSOA_2012',
    tiles: true,
    format: 'image/png',
    transparent: true
});

var LSOA_FP_2012_10pc = L.tileLayer.wms(cj_server, {
    layers: 'cj18:LSOA_2012_10pc',
    tiles: true,
    format: 'image/png',
    transparent: true
});

var LA_FP_2014 = L.tileLayer.wms(cj_server, {
    layers: 'cj18:LA_FP_2014',
    tiles: true,
    format: 'image/png',
    transparent: true
});

var LSOA_FP_2014 = L.tileLayer.wms(cj_server, {
    layers: 'cj18:LSOA_FP_2014',
    tiles: true,
    format: 'image/png',
    transparent: true
});

// EA maps
var flood_alert = L.tileLayer.wms(EA_server + 'flood-alert-areas/wms?', {
    layers: 'Flood_Alert_Areas',
    format: 'image/png',
    srs: 'EPSG:27700',
    transparent: true
});

var flood_risk = L.tileLayer.wms(EA_server + 'flood-risk-areas/wms?', {
    layers: 'Flood_Risk_Areas',
    format: 'image/png',
    srs: 'EPSG:27700',
    transparent: true
});

var flood_benefit = L.tileLayer.wms(EA_server + 'flood-map-for-planning-rivers-and-sea-areas-benefiting-from-defences/wms?', {
    layers: 'Flood_Map_for_Planning_Rivers_and_Sea_Areas_Benefiting_from_Flood_Defences',
    format: 'image/png',
    srs: 'EPSG:27700',
    transparent: true
});

var flood_zone2 = L.tileLayer.wms(EA_server + 'flood-map-for-planning-rivers-and-sea-flood-zone-2/wms?', {
    layers: 'Flood_Map_for_Planning_Rivers_and_Sea_Flood_Zone_2',
    format: 'image/png',
    srs: 'EPSG:27700',
    transparent: true
});

var flood_zone3 = L.tileLayer.wms(EA_server + 'flood-map-for-planning-rivers-and-sea-flood-zone-3/wms?', {
    layers: 'Flood_Map_for_Planning_Rivers_and_Sea_Flood_Zone_3',
    format: 'image/png',
    srs: 'EPSG:27700',
    transparent: true
});

/*var historicFlood = L.tileLayer.wms(EA_server + 'historic-flood-map/wms?', {
    layers: 'Historic_Flood_Map',
    format: 'image/png',
    srs: 'EPSG:27700',
    transparent: true
});*/

var recordedFlood = L.tileLayer.wms(EA_server + 'recorded-flood-outlines/wms?', {
    layers: 'Recorded_Flood_Outlines',
    format: 'image/png',
    srs: 'EPSG:27700',
    transparent: true
});

var Risk_of_Flooding_from_Rivers_and_Sea = L.tileLayer.wms(EA_server + 'risk-of-flooding-from-rivers-and-sea/wms?', {
    layers: 'Risk_of_Flooding_from_Rivers_and_Sea',
    format: 'image/png',
    srs: 'EPSG:27700',
    transparent: true
});

var saltmarsh = L.tileLayer.wms(EA_server + 'saltmarsh-extents-and-zonation/wms?', {
    layers: 'Saltmarsh_Extents_and_Zonation',
    format: 'image/png',
    srs: 'EPSG:27700',
    transparent: true
});

// Natural Resources Wales
var NRW_FLOOD_WATCH_AREAS = L.tileLayer.wms('https://datamap.gov.wales/geoserver/inspire-nrw/wfs?' ,{
    layers: 'NRW_FLOOD_WATCH_AREAS',
    format: 'image/png',
    srs: 'EPSG:27700',
    transparent: true
});

var NRW_FLOOD_RISK_AREAS = L.tileLayer.wms('https://datamap.gov.wales/geoserver/inspire-nrw/wfs?' ,{
    layers: 'NRW_FLOOD_RISK_AREAS',
    format: 'image/png',
    srs: 'EPSG:27700',
    transparent: true
});

var NRW_FLOODMAP_FLOOD_DEFENCES = L.tileLayer.wms('https://datamap.gov.wales/geoserver/inspire-nrw/wfs?', {
    layers: 'NRW_SPATIAL_FLOOD_DEFENCES_WITH_ATTRIBUTES',
    format: 'image/png',
    srs: 'EPSG:27700',
    transparent: true
});

var NRW_AREA_BENEFITING_FROM_FLOOD_DEFENCE = L.tileLayer.wms('https://datamap.gov.wales/geoserver/inspire-nrw/wfs?' ,{
    layers: 'NRW_AREA_BENEFITING_FROM_FLOOD_DEFENCE',
    format: 'image/png',
    srs: 'EPSG:27700',
    transparent: true
});

var FloodMapforPlanningFloodZones2and3 = L.tileLayer.wms('https://datamap.gov.wales/geoserver/inspire-nrw/wfs?' ,{
    layers: 'FloodMapforPlanningFloodZones2and3',
    format: 'image/png',
    srs: 'EPSG:27700',
    transparent: true
});

var NRW_HISTORIC_FLOODMAP = L.tileLayer.wms('https://datamap.gov.wales/geoserver/inspire-nrw/wfs?' ,{
    layers: 'NRW_HISTORIC_FLOODMAP',
    format: 'image/png',
    srs: 'EPSG:27700',
    transparent: true
});

var FloodRiskAssessmentWales= L.tileLayer.wms('https://datamap.gov.wales/geoserver/inspire-nrw/wfs?' ,{
    layers: 'FloodRiskAssessmentWales',
    format: 'image/png',
    srs: 'EPSG:27700',
    transparent: true
});

// Admin maps
var wards = L.tileLayer.wms(admin_server, {
    layers: 'admin:wards_2021',
    format: 'image/png',
    srs: 'EPSG:27700',
    transparent: true
});

var UK_districts = L.tileLayer.wms(admin_server, {
    layers: 'admin:LAD_2019_UK_BGC',
    format: 'image/png',
    srs: 'EPSG:27700',
    transparent: true
});

var urban = L.tileLayer.wms(admin_server, {
    layers: 'Built-up_Areas_(December_2011)_Boundaries_V2',
    format: 'image/png',
    srs: 'EPSG:27700',
    transparent: true
});

var scot_urban = L.tileLayer.wms(admin_server, {
    layers: 'admin:Settlements2016_MHW',
    format: 'image/png',
    srs: 'EPSG:27700',
    transparent: true
});

var westminster = L.tileLayer.wms(admin_server, {
    layers: 'admin:westminster',
    format: 'image/png',
    srs: 'EPSG:27700',
    transparent: true
});

/*
// Slope instability
landslides = L.tileLayer.wms('https://map.bgs.ac.uk/arcgis/services/GeoIndex_Onshore/hazards/MapServer/WmsServer?', {
    layers: 'Landslides',
    format: 'image/png',
    transparent: true
});
// UKCP 2018 map layers
var rain_spr_10 = L.tileLayer.wms(url_nhs, {
    layers: 'nhs:rain_spring_10',
    format: 'image/png',
    transparent: true
});
var rain_spr_50 = L.tileLayer.wms(url_nhs, {
    layers: 'nhs:rain_spring_50',
    format: 'image/png',
    transparent: true
});
var rain_spr_90 = L.tileLayer.wms(url_nhs, {
    layers: 'nhs:rain_spring_90',
    format: 'image/png',
    transparent: true
});
var rain_sum_10 = L.tileLayer.wms(url_nhs, {
    layers: 'nhs:rain_summer_10',
    format: 'image/png',
    transparent: true
});
var rain_sum_50 = L.tileLayer.wms(url_nhs, {
    layers: 'nhs:rain_summer_50',
    format: 'image/png',
    transparent: true
});
var rain_sum_90 = L.tileLayer.wms(url_nhs, {
    layers: 'nhs:rain_summer_90',
    format: 'image/png',
    transparent: true
});
var rain_aut_10 = L.tileLayer.wms(url_nhs, {
    layers: 'nhs:rain_autumn_10',
    format: 'image/png',
    transparent: true
});
var rain_aut_50 = L.tileLayer.wms(url_nhs, {
    layers: 'nhs:rain_autumn_50',
    format: 'image/png',
    transparent: true
});
var rain_aut_90 = L.tileLayer.wms(url_nhs, {
    layers: 'nhs:rain_autumn_90',
    format: 'image/png',
    transparent: true
});
var rain_win_10 = L.tileLayer.wms(url_nhs, {
    layers: 'nhs:rain_winter_10',
    format: 'image/png',
    transparent: true
});
var rain_win_50 = L.tileLayer.wms(url_nhs, {
    layers: 'nhs:rain_winter_50',
    format: 'image/png',
    transparent: true
});
var rain_win_90 = L.tileLayer.wms(url_nhs, {
    layers: 'nhs:rain_winter_90',
    format: 'image/png',
    transparent: true
});
var air_spr_10 = L.tileLayer.wms(url_nhs, {
    layers: 'nhs:air_spring_10',
    format: 'image/png',
    transparent: true
});
var air_spr_50 = L.tileLayer.wms(url_nhs, {
    layers: 'nhs:air_spring_50',
    format: 'image/png',
    transparent: true
});
var air_spr_90 = L.tileLayer.wms(url_nhs, {
    layers: 'nhs:air_spring_90',
    format: 'image/png',
    transparent: true
});
var air_sum_10 = L.tileLayer.wms(url_nhs, {
    layers: 'nhs:air_summer_10',
    format: 'image/png',
    transparent: true
});
var air_sum_50 = L.tileLayer.wms(url_nhs, {
    layers: 'nhs:air_summer_50',
    format: 'image/png',
    transparent: true
});
var air_sum_90 = L.tileLayer.wms(url_nhs, {
    layers: 'nhs:air_summer_90',
    format: 'image/png',
    transparent: true
});
var air_aut_10 = L.tileLayer.wms(url_nhs, {
    layers: 'nhs:air_autumn_10',
    format: 'image/png',
    transparent: true
});
var air_aut_50 = L.tileLayer.wms(url_nhs, {
    layers: 'nhs:air_autumn_50',
    format: 'image/png',
    transparent: true
});
var air_aut_90 = L.tileLayer.wms(url_nhs, {
    layers: 'nhs:air_autumn_90',
    format: 'image/png',
    transparent: true
});
var air_win_10 = L.tileLayer.wms(url_nhs, {
    layers: 'nhs:air_winter_10',
    format: 'image/png',
    transparent: true
});
var air_win_50 = L.tileLayer.wms(url_nhs, {
    layers: 'nhs:air_winter_50',
    format: 'image/png',
    transparent: true
});
var air_win_90 = L.tileLayer.wms(url_nhs, {
    layers: 'nhs:air_winter_90',
    format: 'image/png',
    transparent: true
});

var seaLevel_10 = L.tileLayer.wms(url_nhs, {
    layers: 'nhs:seaLevel_10',
    format: 'image/png',
    transparent: false
});

var ukcpGroup = L.layerGroup([rain_spr_10, rain_spr_50, rain_spr_90, rain_sum_10, rain_sum_50, rain_sum_90, rain_aut_10, rain_aut_50, rain_aut_90, rain_win_10, rain_win_50, rain_win_90, air_spr_10, air_spr_50, air_spr_90, air_sum_10, air_sum_50, air_sum_90, air_aut_10, air_aut_50, air_aut_90, air_win_10, air_win_50, air_win_90]);
*/
