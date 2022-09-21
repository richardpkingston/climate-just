/** Climate Just, University of Manchester
 Last updated: 21/09/2022
 By: Richard Kingston
 **/
/*
wms legends from GeoServer
*/
//var ukcp18_legend = 'https://nhs.tellus-toolkit.com/geoserver/ukcp18/wms?';
var cj18_legend = 'https://maps.tellus-toolkit.com/geoserver/cj18/wms?';
var EA_legend = 'https://environment.data.gov.uk/spatialdata/';
var admin_legend = 'https://maps.tellus-toolkit.com/geoserver/admin/wms?';

var legend = L.control.htmllegend({
    position: 'bottomright', //position: {container: 'sidebar-left', position: 'left'},
    legends: [{
        name: 'Neighbourhood Flood Vulnerability Index', layer: nfvi, elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=nfvi>'
        }]
    }, {
        name: 'Susceptibility', layer: susceptibility, elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=susceptibility>'
        }]
    }, {
        name: 'Age', layer: age, elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=age>'
        }]
    }, {
        name: 'Under 5', layer: under5, elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=under5>'
        }]
    }, {
        name: 'Over 75', layer: over75, elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=over75>'
        }]
    }, {
        name: 'Disability / people in ill-health (% people whose day-to-day activities are limited)', layer: dis_illHealth, elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=ill-d2d&STYLE=ill-d2d>'
        }]

    }, {
        name: 'Vulnerability due to health', layer: ill_health, elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=ill-health>'
        }]
    }, {
        name: 'Disability (% people whose day-to-day activities are limited a lot)', layer: ill_d2dHeat, elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=ill-d2d&STYLE=ill-d2d>'
        }]
    }, {
        name: '% households with at least one person with long term limiting illness', layer: llti, elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=llti>'
        }]
    }, {
        name: 'Inability to prepare', layer: f_prepare, elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=flood_prepare>'
        }]
    }, {
        name: 'Vulnerability due to income', layer: income, elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=income>'
        }]
    }, {
        name: '% unemployed', layer: unemployed, elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=unemployment>'
        }]
    }, {
        name: '% long-term unemployed', layer: LTunemployed, elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=LTunemp>'
        }]
    }, {
        name: 'Low income occupations (% in routine or semi- routine occupations)', layer: lowIncome, elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=lowincome>'
        }]
    }, {
        name: 'Households with dependent children and no adults in employment (%)', layer: depChildUnemp, elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=depChild>'
        }]
    }, {
        name: 'Income deprivation index', layer: incomeDepIndex, elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=incomeDepIndex>'
        }]
    }, {
        name: 'Vulnerability due to issues of information use', layer: info, elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=information>'
        }]
    }, {
        name: 'Recent arrivals to UK (% people with <1 yr residency coming from outside UK)', layer: arrivalsUK, elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=arrivalsUK>'
        }]
    }, {
        name: 'Level of proficiency in English (%)', layer: engLanguage, elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=language>'
        }]
    }, {
        name: 'Vulnerability due to lack of local knowledge', layer: localKnowledge, elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=localKnowledge>'
        }]
    }, {
        name: 'New migrants from outside local area (%)', layer: migrants, elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=migrants>'
        }]
    }, {
        name: 'Vulnerability due to property tenure', layer: propTenure, elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=propTenure>'
        }]
    }, {
        name: 'Private renters (% Households)', layer: privRent, elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=privRent>'
        }]
    }, {
        name: 'Social renters (% Households renting from Social or Council landlords)', layer: socialRent, elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=socialRent>'
        }]
    }, {
        name: 'Inability to respond', layer: nfviRespond, elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=nfvi_respond>'
        }]
    }, {
        name: 'Vulnerability due to lack of physical mobility', layer: mobility, elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=mobility>'
        }]
    }, {
        name: 'High levels of disability (% of population who are disabled)', layer: disability, elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=disability>'
        }]
    }, {
        name: '% people living in medical and care establishments', layer: medCare, elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=medCare>'
        }]
    }, {
        name: 'Lack of private transport (% households with no car or van)', layer: transport, elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=transport>'
        }]
    }, {
        name: 'Vulnerability due to crime', layer: crimeIndex, elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=crimeIndex>'
        }]
    }, {
        name: 'Crime index (IMD)', layer: crimeIMD, elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=crimeIMD>'
        }]
    }, {
        name: 'Inability to recover', layer: nfviRecover, elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=nfvi_recover>'
        }]
    }, {
        name: 'Inability to recover', layer: nfviCommunity, elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=nfvi_community>'
        }]
    }, {
        name: 'Vulnerability due to housing characteristics', layer: housing, elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=housing_vuln>'
        }]
    }, {
        name: '% caravan or other mobile or temporary structures in all households', layer: caravan, elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=caravan>'
        }]
    }, {
        name: 'Number of properties within historical flood boundary', layer: directFlood, elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=direct_flood>'
        }]
    }, {
        name: 'Number of properties within historical flood boundary', layer: serviceFlood, elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=direct_flood>'
        }]
    }, {
        name: '% of emergency services exposed to flooding', layer: emergServices, elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=emergServices>'
        }]
    }, {
        name: '% no. of care homes exposed to flooding', layer: careHomes, elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=careHomes>'
        }]
    }, {
        name: '% no. of GP surgeries exposed to flooding', layer: gpFlood, elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=gpFlood>'
        }]
    }, {
        name: '% no. of schools exposed to flooding', layer: schoolFlood, elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=schoolFlood>'
        }]
    }, {
        name: 'Vulnerability due to lack of social networks', layer: socialNet, elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=socialNet>'
        }]
    }, {
        name: '% single-pensioner households', layer: pensioner, elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=pensioner&STYLE=pensioner>'
        }]
    }, {
        name: '% single-pensioner households', layer: singlePen, elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=FINAL_SSVI_FLOOD_HEAT_04022014&STYLE=singlePen>'
        }]
    }, {
        name: '% lone-parent households with dependent children', layer: loneParentFlood, elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=UK_New_CJ_Flood_Data_JOIN&STYLE=loneParent>'
        }]
    }, {
        name: '% lone-parent households with dependent children', layer: loneParent, elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=UK_New_CJ_Flood_Data_JOIN&STYLE=loneParent>'
        }]
    }, {
        name: '% children of primary school age (4-11) in the population', layer: age4_11, elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=age4-11>'
        }]
    }, {
        name: 'Working away from home (% not working at home)', layer: workAway, elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=FINAL_SSVI_FLOOD_HEAT_04022014&STYLE=workAway>'
        }]
    }, {
        name: 'Travel time to nearest GP by walk/public transport', layer: ttGP, elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=FINAL_SSVI_FLOOD_HEAT_04022014&STYLE=ttGP>'
        }]
    }, {
        name: '% of at risk population (no car) outside of 15 minutes by walk/public transport to nearest GP', layer: min15GP, elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=FINAL_SSVI_FLOOD_HEAT_04022014&STYLE=min15GP>'
        }]
    }, {
        name: 'Number of GPs within 15 minutes by walk/public transport', layer: less15GP, elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=FINAL_SSVI_FLOOD_HEAT_04022014&STYLE=less15GP>'
        }]
    }, {
        name: 'Number of GPs within 15 minutes by car', layer: less15GPcar, elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=FINAL_SSVI_FLOOD_HEAT_04022014&STYLE=less15GPcar>'
        }]
    }, {
        name: 'Travel time to nearest hospital by walk/public transport', layer: walkHosp, elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=FINAL_SSVI_FLOOD_HEAT_04022014&STYLE=walkHosp>'
        }]
    }, {
        name: 'Travel time to nearest hospital by car', layer: carHosp, elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=FINAL_SSVI_FLOOD_HEAT_04022014&STYLE=carHosp>'
        }]
    }, {
        name: '% of at risk population outside of 30 minutes by walk/PT to nearest hospital', layer: risk30WalkHosp, elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=FINAL_SSVI_FLOOD_HEAT_04022014&STYLE=risk30WalkHosp>'
        }]
    }, {
        name: 'Number of hospitals within 30 minutes by walk/public transport', layer: less30minHospWalk, elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=FINAL_SSVI_FLOOD_HEAT_04022014&STYLE=less30minHospWalk>'
        }]
    }, {
        name: 'Number of hospitals within 30 minutes by car', layer: less30minHospCar, elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=FINAL_SSVI_FLOOD_HEAT_04022014&STYLE=less30minHospCar>'
        }]
    }, {
        name: 'River & Coastal -> Group -> Present Day', layer: SFRIpresDayG, elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=SFRIpresDayG>'
        }]
    }, {
        name: 'River & Coastal -> Group -> Future 2050s 2&degC scenario', layer: SFRI2050_2degG, elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=SFRI2050_2degG>'
        }]
    }, {
        name: 'River & Coastal -> Group -> Future 2050s 4&degC scenario', layer: SFRI2050_4degG, elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=SFRI2050_4degG>'
        }]
    }, {
        name: 'River & Coastal -> Individual -> Present Day', layer: SFRIpresDayI, elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=SFRIpresDayI>'
        }]
    }, {
        name: 'River & Coastal -> Individual -> Future 2050s 2&degC scenario', layer: SFRI2050_2degI, elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=SFRI2050_2degI>'
        }]
    }, {
        name: 'River & Coastal -> Individual -> Future 2050s 4&degC scenario', layer: SFRI2050_4degI, elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=SFRI2050_4degI>'
        }]
    }, {
        name: 'Surface water -> Group -> Present Day', layer: SFRIpresDayG_SW, elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=SFRIpresDayG_SW>'
        }]
    }, {
        name: 'Surface water -> Group -> Future 2050s 2&degC scenario', layer: SFRI2050_2degG_SW, elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=SFRI2050_2degG_SW>'
        }]
    }, {
        name: 'Surface water -> Group -> Future 2050s 4&degC scenario', layer: SFRI2050_4degG_SW, elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=SFRI2050_4degG_SW>'
        }]
    }, {
        name: 'Surface water -> Individual -> Present Day', layer: SFRIpresDayI_SW, elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=SFRIpresDayI_SW>'
        }]
    }, {
        name: 'Surface water -> Individual -> Future 2050s 2&degC scenario', layer: SFRI2050_2degI_SW, elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=SFRI2050_2degI_SW>'
        }]
    }, {
        name: 'Surface water -> Individual -> Future 2050s 4&degC scenario', layer: SFRI2050_4degI_SW, elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=SFRI2050_4degI_SW>'
        }]
    }, {
        // heat maps
        name: 'Population weighted vulnerability and mean summer maximum temperature 2050s -> Medium emissions scenario =>  Low estimate (10th percentile)',
        layer: RWHZZ_CV7,
        elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=heat_disadvantage_2011_21012014&style=heat_RWHZZ_CV7>'
        }]
    }, {
        name: 'Population weighted vulnerability and mean summer maximum temperature 2050s -> Medium emissions scenario =>  Central estimate (50th percentile)',
        layer: RWHZZ_CV8,
        elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=heat_disadvantage_2011_21012014&style=heat_RWHZZ_CV8>'
        }]
    }, {
        name: 'Population weighted vulnerability and mean summer maximum temperature 2050s -> Medium emissions scenario =>  High estimate (90th percentile)',
        layer: RWHZZ_CV9,
        elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=heat_disadvantage_2011_21012014&style=heat_RWHZZ_CV9>'
        }]
    }, {
        name: 'Population weighted vulnerability and mean summer maximum temperature 2050s -> Low emissions scenario =>  Low estimate (10th percentile)',
        layer: RWHZZ_CV4,
        elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=heat_disadvantage_2011_21012014&style=heat_RWHZZ_CV4>'
        }]
    }, {
        name: 'Population weighted vulnerability and mean summer maximum temperature 2050s -> Low emissions scenario =>  Central estimate (50th percentile)',
        layer: RWHZZ_CV5,
        elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=heat_disadvantage_2011_21012014&style=heat_RWHZZ_CV5>'
        }]
    }, {
        name: 'Population weighted vulnerability and mean summer maximum temperature 2050s -> Low emissions scenario =>  High estimate (90th percentile)',
        layer: RWHZZ_CV6,
        elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=heat_disadvantage_2011_21012014&style=heat_RWHZZ_CV6>'
        }]
    }, {
        name: 'Population weighted vulnerability and mean summer maximum temperature 2050s -> High emissions scenario =>  Low estimate (10th percentile)',
        layer: RWHZZ_CV1,
        elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=heat_disadvantage_2011_21012014&style=heat_RWHZZ_CV1>'
        }]
    }, {
        name: 'Population weighted vulnerability and mean summer maximum temperature 2050s -> High emissions scenario =>  Central estimate (50th percentile)',
        layer: RWHZZ_CV2,
        elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=heat_disadvantage_2011_21012014&style=heat_RWHZZ_CV2>'
        }]
    }, {
        name: 'Population weighted vulnerability and mean summer maximum temperature 2050s -> High emissions scenario =>  High estimate (50th percentile)',
        layer: RWHZZ_CV3,
        elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=heat_disadvantage_2011_21012014&style=heat_RWHZZ_CV3>'
        }]
    }, {
        name: 'Population weighted vulnerability and change in mean summer maximum temperature baseline to 2050s -> Medium emissions scenario =>  Low' + ' estimate (10th percentile)',
        layer: RWHZZ_CV16,
        elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=heat_disadvantage_2011_21012014&style=heat_RWHZZ_CV16>'
        }]
    }, {
        name: 'Population weighted vulnerability and change in mean summer maximum temperature baseline to 2050s -> Medium emissions scenario =>  Central' + ' estimate (50th percentile)',
        layer: RWHZZ_CV17,
        elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=heat_disadvantage_2011_21012014&style=heat_RWHZZ_CV17>'
        }]
    }, {
        name: 'Population weighted vulnerability and change in mean summer maximum temperature baseline to 2050s -> Medium emissions scenario =>  High' + ' estimate (90th percentile)',
        layer: RWHZZ_CV18,
        elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=heat_disadvantage_2011_21012014&style=heat_RWHZZ_CV18>'
        }]
    }, {
        name: 'Population weighted vulnerability and change in mean summer maximum temperature baseline to 2050s -> Low emissions scenario =>  Low' + ' estimate (10th percentile)',
        layer: RWHZZ_CV13,
        elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=heat_disadvantage_2011_21012014&style=heat_RWHZZ_CV13>'
        }]
    }, {
        name: 'Population weighted vulnerability and change in mean summer maximum temperature baseline to 2050s -> Low emissions scenario =>  Central' + ' estimate (50th percentile)',
        layer: RWHZZ_CV14,
        elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=heat_disadvantage_2011_21012014&style=heat_RWHZZ_CV14>'
        }]
    }, {
        name: 'Population weighted vulnerability and change in mean summer maximum temperature baseline to 2050s -> Low emissions scenario =>  High' + ' estimate (90th percentile)',
        layer: RWHZZ_CV15,
        elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=heat_disadvantage_2011_21012014&style=heat_RWHZZ_CV15>'
        }]
    }, {
        name: 'Population weighted vulnerability and change in mean summer maximum temperature baseline to 2050s -> High emissions scenario =>  Low' + ' estimate (10th percentile)',
        layer: RWHZZ_CV10,
        elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=heat_disadvantage_2011_21012014&style=heat_RWHZZ_CV10>'
        }]
    }, {
        name: 'Population weighted vulnerability and change in mean summer maximum temperature baseline to 2050s -> High emissions scenario =>  Central' + ' estimate (50th percentile)',
        layer: RWHZZ_CV11,
        elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=heat_disadvantage_2011_21012014&style=heat_RWHZZ_CV11>'
        }]
    }, {
        name: 'Population weighted vulnerability and change in mean summer maximum temperature baseline to 2050s -> High emissions scenario =>  High' + ' estimate (90th percentile)',
        layer: RWHZZ_CV12,
        elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=heat_disadvantage_2011_21012014&style=heat_RWHZZ_CV12>'
        }]
    }, {
        name: 'Population weighted vulnerability and change in the temperature of the warmest day baseline to 2050s -> Medium emissions scenario =>  Low' + ' estimate (10th percentile)',
        layer: RWHZZ_CV25,
        elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=heat_disadvantage_2011_21012014&style=heat_RWHZZ_CV25>'
        }]
    }, {
        name: 'Population weighted vulnerability and change in the temperature of the warmest day baseline to 2050s -> Medium emissions scenario =>  Central' + ' estimate (50th percentile)',
        layer: RWHZZ_CV26,
        elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=heat_disadvantage_2011_21012014&style=heat_RWHZZ_CV26>'
        }]
    }, {
        name: 'Population weighted vulnerability and change in the temperature of the warmest day baseline to 2050s -> Medium emissions scenario =>  High' + ' estimate (90th percentile)',
        layer: RWHZZ_CV27,
        elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=heat_disadvantage_2011_21012014&style=heat_RWHZZ_CV27>'
        }]
    }, {
        name: 'Population weighted vulnerability and change in the temperature of the warmest day baseline to 2050s -> Low emissions scenario =>  Low' + ' estimate (10th percentile)',
        layer: RWHZZ_CV22,
        elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=heat_disadvantage_2011_21012014&style=heat_RWHZZ_CV22>'
        }]
    }, {
        name: 'Population weighted vulnerability and change in the temperature of the warmest day baseline to 2050s -> Low emissions scenario =>  Central' + ' estimate (50th percentile)',
        layer: ZRWHZZ_CV2,
        elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=heat_disadvantage_2011_21012014&style=heat_ZRWHZZ_CV2>'
        }]
    }, {
        name: 'Population weighted vulnerability and change in the temperature of the warmest day baseline to 2050s -> Low emissions scenario =>  High' + ' estimate (90th percentile)',
        layer: RWHZZ_CV24,
        elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=heat_disadvantage_2011_21012014&style=heat_RWHZZ_CV24>'
        }]
    }, {
        name: 'Population weighted vulnerability and change in the temperature of the warmest day baseline to 2050s -> High emissions scenario =>  Low' + ' estimate (10th percentile)',
        layer: RWHZZ_CV19,
        elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=heat_disadvantage_2011_21012014&style=heat_RWHZZ_CV19>'
        }]
    }, {
        name: 'Population weighted vulnerability and change in the temperature of the warmest day baseline to 2050s -> High emissions scenario =>  Central' + ' estimate (50th percentile)',
        layer: RWHZZ_CV20,
        elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=heat_disadvantage_2011_21012014&style=heat_RWHZZ_CV20>'
        }]
    }, {
        name: 'Population weighted vulnerability and change in the temperature of the warmest day baseline to 2050s -> High emissions scenario =>  High' + ' estimate (90th percentile)',
        layer: RWHZZ_CV21,
        elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=heat_disadvantage_2011_21012014&style=heat_RWHZZ_CV21>'
        }]
    }, {
        name: 'Population weighted vulnerability and change in the temperature of the warmest night baseline to 2050s -> Medium emissions scenario =>  Low' + ' estimate (10th percentile)',
        layer: RWHZZ_CV34,
        elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=heat_disadvantage_2011_21012014&style=heat_RWHZZ_CV34>'
        }]
    }, {
        name: 'Population weighted vulnerability and change in the temperature of the warmest night baseline to 2050s -> Medium emissions scenario =>  Central' + ' estimate (50th percentile)',
        layer: RWHZZ_CV35,
        elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=heat_disadvantage_2011_21012014&style=heat_RWHZZ_CV35>'
        }]
    }, {
        name: 'Population weighted vulnerability and change in the temperature of the warmest night baseline to 2050s -> Medium emissions scenario =>  High' + ' estimate (90th percentile)',
        layer: RWHZZ_CV36,
        elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=heat_disadvantage_2011_21012014&style=heat_RWHZZ_CV36>'
        }]
    }, {
        name: 'Population weighted vulnerability and change in the temperature of the warmest night baseline to 2050s -> Low emissions scenario =>  Low' + ' estimate (10th percentile)',
        layer: RWHZZ_CV31,
        elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=heat_disadvantage_2011_21012014&style=heat_RWHZZ_CV31>'
        }]
    }, {
        name: 'Population weighted vulnerability and change in the temperature of the warmest night baseline to 2050s -> Low emissions scenario =>  Central' + ' estimate (50th percentile)',
        layer: RWHZZ_CV32,
        elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=heat_disadvantage_2011_21012014&style=heat_RWHZZ_CV32>'
        }]
    }, {
        name: 'Population weighted vulnerability and change in the temperature of the warmest night baseline to 2050s -> Low emissions scenario =>  High' + ' estimate (90th percentile)',
        layer: RWHZZ_CV33,
        elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=heat_disadvantage_2011_21012014&style=heat_RWHZZ_CV33>'
        }]
    }, {
        name: 'Population weighted vulnerability and change in the temperature of the warmest night baseline to 2050s -> High emissions scenario =>  Low' + ' estimate (10th percentile)',
        layer: RWHZZ_CV28,
        elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=heat_disadvantage_2011_21012014&style=heat_RWHZZ_CV28>'
        }]
    }, {
        name: 'Population weighted vulnerability and change in the temperature of the warmest night baseline to 2050s -> High emissions scenario =>  Central' + ' estimate (50th percentile)',
        layer: RWHZZ_CV29,
        elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=heat_disadvantage_2011_21012014&style=heat_RWHZZ_CV29>'
        }]
    }, {
        name: 'Population weighted vulnerability and change in the temperature of the warmest night baseline to 2050s -> High emissions scenario =>  High' + ' estimate (90th percentile)',
        layer: RWHZZ_CV30,
        elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=heat_disadvantage_2011_21012014&style=heat_RWHZZ_CV30>'
        }]
    }, {
        name: 'Average vulnerability and mean summer maximum temperature 2050s -> Medium emissions scenario =>  Low estimate (10th percentile)',
        layer: R_HZZ_CV7,
        elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=heat_disadvantage_2011_21012014&style=heat_R_HZZ_CV7>'
        }]
    }, {
        name: 'Average vulnerability and mean summer maximum temperature 2050s -> Medium emissions scenario =>  Central estimate (50th percentile)',
        layer: R_HZZ_CV8,
        elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=heat_disadvantage_2011_2101201&style=heat_R_HZZ_CV8>'
        }]
    }, {
        name: 'Average vulnerability and mean summer maximum temperature 2050s -> Medium emissions scenario =>  High estimate (90th percentile)',
        layer: R_HZZ_CV9,
        elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=heat_disadvantage_2011_21012014&style=heat_R_HZZ_CV9>'
        }]
    }, {
        name: 'Average vulnerability and mean summer maximum temperature 2050s -> Low emissions scenario =>  Low estimate (10th percentile)',
        layer: R_HZZ_CV4,
        elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=heat_disadvantage_2011_21012014&style=heat_R_HZZ_CV4>'
        }]
    }, {
        name: 'Average vulnerability and mean summer maximum temperature 2050s -> Low emissions scenario =>  Central estimate (50th percentile)',
        layer: R_HZZ_CV5,
        elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=heat_disadvantage_2011_21012014&style=heat_R_HZZ_CV5>'
        }]
    }, {
        name: 'Average vulnerability and mean summer maximum temperature 2050s -> Low emissions scenario =>  High estimate (90th percentile)',
        layer: R_HZZ_CV6,
        elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=heat_disadvantage_2011_21012014&style=heat_R_HZZ_CV6>'
        }]
    }, {
        name: 'Average vulnerability and mean summer maximum temperature 2050s -> High emissions scenario =>  Low estimate (10th percentile)',
        layer: R_HZZ_CV1,
        elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=heat_disadvantage_2011_21012014&style=heat_R_HZZ_CV1>'
        }]
    }, {
        name: 'Average vulnerability and mean summer maximum temperature 2050s -> High emissions scenario =>  Central estimate (50th percentile)',
        layer: R_HZZ_CV2,
        elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=heat_disadvantage_2011_21012014&style=heat_R_HZZ_CV2>'
        }]
    }, {
        name: 'Average vulnerability and mean summer maximum temperature 2050s -> High emissions scenario =>  High estimate (90th percentile)',
        layer: R_HZZ_CV3,
        elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=heat_disadvantage_2011_21012014&style=heat_R_HZZ_CV3>'
        }]
    }, {
        name: 'Average vulnerability and mean summer maximum temperature baseline to 2050s -> Medium emissions scenario =>  Low estimate (10th percentile)',
        layer: R_HZZ_CV16,
        elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=heat_disadvantage_2011_21012014&style=heat_R_HZZ_CV16>'
        }]
    }, {
        name: 'Average vulnerability and mean summer maximum temperature baseline to 2050s -> Medium emissions scenario =>  Central estimate (50th percentile)',
        layer: R_HZZ_CV17,
        elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=heat_disadvantage_2011_21012014&style=heat_R_HZZ_CV17>'
        }]
    }, {
        name: 'Average vulnerability and mean summer maximum temperature baseline to 2050s -> Medium emissions scenario =>  High estimate (90th percentile)',
        layer: R_HZZ_CV18,
        elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=heat_disadvantage_2011_21012014&style=heat_R_HZZ_CV18>'
        }]
    }, {
        name: 'Average vulnerability and mean summer maximum temperature baseline to 2050s -> Low emissions scenario =>  Low estimate (10th percentile)',
        layer: R_HZZ_CV13,
        elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=heat_disadvantage_2011_21012014&style=heat_R_HZZ_CV13>'
        }]
    }, {
        name: 'Average vulnerability and mean summer maximum temperature baseline to 2050s -> Low emissions scenario =>  Central estimate (50th percentile)',
        layer: R_HZZ_CV14,
        elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=heat_disadvantage_2011_21012014&style=heat_R_HZZ_CV14>'
        }]
    }, {
        name: 'Average vulnerability and mean summer maximum temperature baseline to 2050s -> Low emissions scenario =>  High estimate (90th percentile)',
        layer: R_HZZ_CV15,
        elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=heat_disadvantage_2011_21012014&style=heat_R_HZZ_CV15>'
        }]
    }, {
        name: 'Average vulnerability and mean summer maximum temperature baseline to 2050s -> High emissions scenario =>  Low estimate (10th percentile)',
        layer: R_HZZ_CV10,
        elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=heat_disadvantage_2011_21012014&style=heat_R_HZZ_CV10>'
        }]
    }, {
        name: 'Average vulnerability and mean summer maximum temperature baseline to 2050s -> High emissions scenario =>  Central estimate (50th percentile)',
        layer: R_HZZ_CV11,
        elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=heat_disadvantage_2011_21012014&style=heat_R_HZZ_CV11>'
        }]
    }, {
        name: 'Average vulnerability and mean summer maximum temperature baseline to 2050s -> High emissions scenario =>  High estimate (90th percentile)',
        layer: R_HZZ_CV12,
        elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=heat_disadvantage_2011_21012014&style=heat_R_HZZ_CV12>'
        }]
    }, {
        name: 'Average vulnerability and change in the temperature of the warmest day baseline to 2050s -> Medium emissions scenario =>  Low estimate' + ' (10th percentile)',
        layer: R_HZZ_CV25,
        elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=heat_disadvantage_2011_21012014&style=heat_R_HZZ_CV25>'
        }]
    }, {
        name: 'Average vulnerability and change in the temperature of the warmest day baseline to 2050s -> Medium emissions scenario =>  Central estimate (50th percentile)',
        layer: R_HZZ_CV26,
        elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=heat_disadvantage_2011_21012014&style=heat_R_HZZ_CV26>'
        }]
    }, {
        name: 'Average vulnerability and change in the temperature of the warmest day baseline to 2050s -> Medium emissions scenario =>  High estimate (90th percentile)',
        layer: R_HZZ_CV27,
        elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=heat_disadvantage_2011_21012014&style=heat_R_HZZ_CV27>'
        }]
    }, {
        name: 'Average vulnerability and change in the temperature of the warmest day baseline to 2050s -> Low emissions scenario =>  Low estimate' + ' (10th percentile)',
        layer: R_HZZ_CV22,
        elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=heat_disadvantage_2011_21012014&style=heat_R_HZZ_CV22>'
        }]
    }, {
        name: 'Average vulnerability and change in the temperature of the warmest day baseline to 2050s -> Low emissions scenario =>  Central estimate (50th percentile)',
        layer: R_HZZ_CV23,
        elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=heat_disadvantage_2011_21012014&style=heat_R_HZZ_CV23>'
        }]
    }, {
        name: 'Average vulnerability and change in the temperature of the warmest day baseline to 2050s -> Low emissions scenario =>  High estimate (90th percentile)',
        layer: R_HZZ_CV24,
        elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=heat_disadvantage_2011_21012014&style=heat_R_HZZ_CV24>'
        }]
    }, {
        name: 'Average vulnerability and change in the temperature of the warmest day baseline to 2050s -> High emissions scenario =>  Low estimate' + ' (10th percentile)',
        layer: R_HZZ_CV19,
        elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=heat_disadvantage_2011_21012014&style=heat_R_HZZ_CV19>'
        }]
    }, {
        name: 'Average vulnerability and change in the temperature of the warmest day baseline to 2050s -> High emissions scenario =>  Central estimate (50th percentile)',
        layer: R_HZZ_CV20,
        elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=heat_disadvantage_2011_21012014&style=heat_R_HZZ_CV20>'
        }]
    }, {
        name: 'Average vulnerability and change in the temperature of the warmest day baseline to 2050s -> High emissions scenario =>  High estimate (90th percentile)',
        layer: R_HZZ_CV21,
        elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=heat_disadvantage_2011_21012014&style=heat_R_HZZ_CV21>'
        }]
    }, {
        name: 'Average vulnerability and change in the temperature of the warmest night baseline to 2050s -> Medium emissions scenario =>  Low estimate (10th percentile)',
        layer: R_HZZ_CV34,
        elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=heat_disadvantage_2011_21012014&style=heat_R_HZZ_CV34>'
        }]
    }, {
        name: 'Average vulnerability and change in the temperature of the warmest night baseline to 2050s -> Medium emissions scenario =>  Central estimate (50th percentile)',
        layer: R_HZZ_CV35,
        elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=heat_disadvantage_2011_21012014&style=heat_R_HZZ_CV35>'
        }]
    }, {
        name: 'Average vulnerability and change in the temperature of the warmest night baseline to 2050s -> Medium emissions scenario =>  High estimate (90th percentile)',
        layer: R_HZZ_CV36,
        elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=heat_disadvantage_2011_21012014&style=heat_R_HZZ_CV36>'
        }]
    }, {
        name: 'Average vulnerability and change in the temperature of the warmest night baseline to 2050s -> Low emissions scenario =>  Low estimate' + ' (10th percentile)',
        layer: R_HZZ_CV31,
        elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=heat_disadvantage_2011_21012014&style=heat_R_HZZ_CV31>'
        }]
    }, {
        name: 'Average vulnerability and change in the temperature of the warmest night baseline to 2050s -> Low emissions scenario =>  Central estimate (50th percentile)',
        layer: R_HZZ_CV32,
        elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=heat_disadvantage_2011_21012014&style=heat_R_HZZ_CV32>'
        }]
    }, {
        name: 'Average vulnerability and change in the temperature of the warmest night baseline to 2050s -> Low emissions scenario =>  High estimate (90th percentile)',
        layer: R_HZZ_CV33,
        elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=heat_disadvantage_2011_21012014&style=heat_R_HZZ_CV33>'
        }]
    }, {
        name: 'Average vulnerability and change in the temperature of the warmest night baseline to 2050s -> High emissions scenario =>  Low estimate' + ' (10th percentile)',
        layer: R_HZZ_CV28,
        elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=heat_disadvantage_2011_21012014&style=heat_R_HZZ_CV28>'
        }]
    }, {
        name: 'Average vulnerability and change in the temperature of the warmest night baseline to 2050s -> High emissions scenario =>  Central estimate (50th percentile)',
        layer: R_HZZ_CV29,
        elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=heat_disadvantage_2011_21012014&style=heat_R_HZZ_CV29>'
        }]
    }, {
        name: 'Average vulnerability and change in the temperature of the warmest night baseline to 2050s -> High emissions scenario =>  High estimate (90th percentile)',
        layer: R_HZZ_CV30,
        elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=heat_disadvantage_2011_21012014&style=heat_R_HZZ_CV30>'
        }]
    }, {
        // Heat exposure 2011 All_2011_heat_data_zscores
        name: 'Mean summer maximum temperature 2050s ->  Medium emissions scenario =>  Low estimate (10th percentile)', layer: AbsM10Day, elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=All_2011_heat_data_zscores&style=AbsM10Day>'
        }]
    }, {
        name: 'Mean summer maximum temperature 2050s ->  Medium emissions scenario =>  Central estimate (50th percentile)', layer: AbsM50Day, elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=All_2011_heat_data_zscores&style=AbsM50Day>'
        }]
    }, {
        name: 'Mean summer maximum temperature 2050s ->  Medium emissions scenario =>  High estimate (90th percentile)', layer: AbsM90Day, elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=All_2011_heat_data_zscores&style=AbsM90Day>'
        }]
    }, {
        name: 'Mean summer maximum temperature 2050s ->  Low emissions scenario =>  Low estimate (10th percentile)', layer: AbsL10Day, elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=All_2011_heat_data_zscores&style=AbsL10Day>'
        }]
    }, {
        name: 'Mean summer maximum temperature 2050s ->  Low emissions scenario =>  Central estimate (50th percentile)', layer: AbsL50Day, elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=All_2011_heat_data_zscores&style=AbsL50Day>'
        }]
    }, {
        name: 'Mean summer maximum temperature 2050s ->  Low emissions scenario =>  High estimate (90th percentile)', layer: AbsL90Day, elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=All_2011_heat_data_zscores&style=AbsL90Day>'
        }]
    }, {
        name: 'Mean summer maximum temperature 2050s ->  High emissions scenario =>  Low estimate (10th percentile)', layer: AbsH10Day, elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=All_2011_heat_data_zscores&style=AbsH10Day>'
        }]
    }, {
        name: 'Mean summer maximum temperature 2050s ->  High emissions scenario =>  Central estimate (50th percentile)', layer: AbsH50Day, elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=All_2011_heat_data_zscores&style=AbsH50Day>'
        }]
    }, {
        name: 'Mean summer maximum temperature 2050s ->  High emissions scenario =>  High estimate (90th percentile)', layer: AbsH90Day, elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=All_2011_heat_data_zscores&style=AbsH90Day>'
        }]
    }, {
        name: 'Change in mean summer maximum temperature baseline to 2050s -> Medium emissions scenario -> Low estimate (10th percentile)',
        layer: ChM10Day,
        elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=All_2011_heat_data_zscores&style=ChM10Day>'
        }]
    }, {
        name: 'Change in mean summer maximum temperature baseline to 2050s -> Medium emissions scenario -> Central estimate (50th percentile)',
        layer: ChM50Day,
        elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=All_2011_heat_data_zscores&style=ChM50Day>'
        }]
    }, {
        name: 'Change in mean summer maximum temperature baseline to 2050s -> Medium emissions scenario -> High estimate (90th percentile)',
        layer: ChM90Day,
        elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=All_2011_heat_data_zscores&style=ChM90Day>'
        }]
    }, {
        name: 'Change in mean summer maximum temperature baseline to 2050s -> Low emissions scenario -> Low estimate (10th percentile)', layer: ChL10Day, elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=All_2011_heat_data_zscores&style=ChL10Day>'
        }]
    }, {
        name: 'Change in mean summer maximum temperature baseline to 2050s -> Low emissions scenario -> Central estimate (50th percentile)',
        layer: ChL50Day,
        elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=All_2011_heat_data_zscores&style=ChL50Day>'
        }]
    }, {
        name: 'Change in mean summer maximum temperature baseline to 2050s -> Low emissions scenario -> High estimate (90th percentile)',
        layer: ChL90Day,
        elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=All_2011_heat_data_zscores&style=ChL90Day>'
        }]
    }, {
        name: 'Change in mean summer maximum temperature baseline to 2050s -> High emissions scenario -> Low estimate (10th percentile)',
        layer: ChH10Day,
        elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=All_2011_heat_data_zscores&style=ChH10Day>'
        }]
    }, {
        name: 'Change in mean summer maximum temperature baseline to 2050s -> High emissions scenario -> Cental estimate (50th percentile)',
        layer: ChH50Day,
        elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=All_2011_heat_data_zscores&style=ChH50Day>'
        }]
    }, {
        name: 'Change in mean summer maximum temperature baseline to 2050s -> high emissions scenario -> High estimate (90th percentile)',
        layer: ChH90Day,
        elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=All_2011_heat_data_zscores&style=ChH90Day>'
        }]
    }, {
        name: 'Change in the temperature of the warmest day baseline to 2050s -> Medium emissions scenario -> Low estimate (10th percentile)',
        layer: ChM10WD,
        elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=All_2011_heat_data_zscores&style=ChM10WD>'
        }]
    }, {
        name: 'Change in the temperature of the warmest day baseline to 2050s -> Medium emissions scenario -> Cental estimate (50th percentile)',
        layer: ChM50WD,
        elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=All_2011_heat_data_zscores&style=ChM50WD>'
        }]
    }, {
        name: 'Change in the temperature of the warmest day baseline to 2050s -> Medium emissions scenario -> High estimate (90th percentile)',
        layer: ChM90WD,
        elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=All_2011_heat_data_zscores&style=ChM90WD>'
        }]
    }, {
        name: 'Change in the temperature of the warmest day baseline to 2050s -> Low emissions scenario -> Low estimate (10th percentile)',
        layer: ChL10WD,
        elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=All_2011_heat_data_zscores&style=ChL10WD>'
        }]
    }, {
        name: 'Change in the temperature of the warmest day baseline to 2050s -> Low emissions scenario -> Cental estimate (50th percentile)',
        layer: ChL50WD,
        elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=All_2011_heat_data_zscores&style=ChL50WD>'
        }]
    }, {
        name: 'Change in the temperature of the warmest day baseline to 2050s -> Low emissions scenario -> High estimate (90th percentile)',
        layer: ChL90WD,
        elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=All_2011_heat_data_zscores&style=ChL90WD>'
        }]
    }, {
        name: 'Change in the temperature of the warmest day baseline to 2050s -> High emissions scenario -> Low estimate (10th percentile)',
        layer: ChH10WD,
        elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=All_2011_heat_data_zscores&style=ChH10WD>'
        }]
    }, {
        name: 'Change in the temperature of the warmest day baseline to 2050s -> High emissions scenario -> Cental estimate (50th percentile)',
        layer: ChH50WD,
        elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=All_2011_heat_data_zscores&style=ChH50WD>'
        }]
    }, {
        name: 'Change in the temperature of the warmest day baseline to 2050s -> High emissions scenario -> High estimate (90th percentile)',
        layer: ChH90WD,
        elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=All_2011_heat_data_zscores&style=ChH90WD>'
        }]
    }, {
        name: 'Change in temperature of the warmest night baseline to 2050s -> Medium emissions scenario -> Low estimate (10th percentile)',
        layer: ChM10WN,
        elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=All_2011_heat_data_zscores&style=ChM10WN>'
        }]
    }, {
        name: 'Change in temperature of the warmest night baseline to 2050s -> Medium emissions scenario -> Cental estimate (50th percentile)',
        layer: ChM50WN,
        elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=All_2011_heat_data_zscores&style=ChM50WN>'
        }]
    }, {
        name: 'Change in temperature of the warmest night baseline to 2050s -> Medium emissions scenario -> High estimate (90th percentile)',
        layer: ChM90WN,
        elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=All_2011_heat_data_zscores&style=ChM90WN>'
        }]
    }, {
        name: 'Change in temperature of the warmest night baseline to 2050s -> Low emissions scenario -> Low estimate (10th percentile)', layer: ChL10WN, elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=All_2011_heat_data_zscores&style=ChL10WN>'
        }]
    }, {
        name: 'Change in temperature of the warmest night baseline to 2050s -> Low emissions scenario -> Cental estimate (50th percentile)',
        layer: ChL50WN,
        elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=All_2011_heat_data_zscores&style=ChL50WN>'
        }]
    }, {
        name: 'Change in temperature of the warmest night baseline to 2050s -> Low emissions scenario -> High estimate (90th percentile)',
        layer: ChL90WN,
        elements: [{
            html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=All_2011_heat_data_zscores&style=ChL90WN>'
        }]
    },

        {
            name: 'Change in temperature of the warmest night baseline to 2050s -> High emissions scenario -> Low estimate (10th percentile)',
            layer: ChH10WN,
            elements: [{
                html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=All_2011_heat_data_zscores&style=ChH10WN>'
            }]
        }, {
            name: 'Change in temperature of the warmest night baseline to 2050s -> High emissions scenario -> Cental estimate (50th percentile)',
            layer: ChH50WN,
            elements: [{
                html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=All_2011_heat_data_zscores&style=ChH50WN>'
            }]
        }, {
            name: 'Change in temperature of the warmest night baseline to 2050s -> High emissions scenario -> High estimate (90th percentile)',
            layer: ChH90WN,
            elements: [{
                html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=All_2011_heat_data_zscores&style=ChH90WN>'
            }]
        }, {
            //Heat socio-spatial maps
            name: 'Social Heat Vulnerability Index', layer: ZH_VULN_IN, elements: [{
                html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=FINAL_SSVI_FLOOD_HEAT_04022014&style=SSVI-flood-heat>'
            }]
        }, {
            name: 'Sensitivity Index', layer: SENS_IND, elements: [{
                html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=FINAL_SSVI_FLOOD_HEAT_04022014&style=SENS_IND>'
            }]
        }, {
            name: 'Enhanced exposure to heat index', layer: exposureHeat, elements: [{
                html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=FINAL_SSVI_FLOOD_HEAT_04022014&style=ZH_EXP_IND>'
            }]
        }, {
            name: 'Built up area (% not greenspace)', layer: builtup, elements: [{
                html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=FINAL_SSVI_FLOOD_HEAT_04022014&style=built-up>'
            }]
        }, {
            name: 'Lack of domestic gardens (area of building/domestic gardens)', layer: nogarden, elements: [{
                html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=FINAL_SSVI_FLOOD_HEAT_04022014&style=no-garden>'
            }]
        }, {
            name: 'Built up area (% area not blue space)', layer: notBlue, elements: [{
                html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=FINAL_SSVI_FLOOD_HEAT_04022014&style=not-Blue>'
            }]
        }, {
            name: 'Distance to coast (km)', layer: coast, elements: [{
                html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=FINAL_SSVI_FLOOD_HEAT_04022014&style=coast>'
            }]
        }, {
            name: 'Elevation (m)', layer: elevation, elements: [{
                html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=FINAL_SSVI_FLOOD_HEAT_04022014&style=elevation>'
            }]
        }, {
            name: 'High rise homes (% households with lowest floor 5th floor or above)', layer: highRise, elements: [{
                html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=FINAL_SSVI_FLOOD_HEAT_04022014&style=highRise>'
            }]
        }, {
            name: 'Inability to Prepare index', layer: AbilityToPrepareIndex, elements: [{
                html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=FINAL_SSVI_FLOOD_HEAT_04022014&style=ZH_PREP_IN>'
            }]
        }, {
            name: '% unemployed', layer: unemployedHeat, elements: [{
                html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=UK_New_CJ_Flood_Data_JOIN&style=unemployedHeat>'
            }]
        }, {
            name: 'Low income occupations (% in routine or semi-routine occupations)', layer: lowIncomeOcc, elements: [{
                html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=UK_New_CJ_Flood_Data_JOIN&style=lowIncomeOcc>'
            }]
        }, {
            name: 'Long-term unemployed (% who are LTU or who have never worked)', layer: LTunemployment, elements: [{
                html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=UK_New_CJ_Flood_Data_JOIN&style=LTunemp>'
            }]
        }, {
            name: 'Households with dependent children and no adults in employment (%)', layer: depChildUnempHeat, elements: [{
                html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=UK_New_CJ_Flood_Data_JOIN&style=depChildUnemp>'
            }]
        }, {
            name: 'Weekly household income estimate (&pound;)', layer: income_weekly, elements: [{
                html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=FINAL_SSVI_FLOOD_HEAT_04022014&style=income_weekly>'
            }]
        }, {
            name: 'All pensioner households (%)', layer: pensionerHH, elements: [{
                html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=UK_New_CJ_Flood_Data_JOIN&style=pensionerHH>'
            }]
        }, {
            name: 'Social renters (% Households renting from social or Council landlords)', layer: socRent, elements: [{
                html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=UK_New_CJ_Flood_Data_JOIN&style=socRent>'
            }]
        }, {
            name: 'Private renters (% Households)', layer: priRent, elements: [{
                html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=UK_New_CJ_Flood_Data_JOIN&style=priRentt1>'
            }]
        }, {
            name: 'Born outside UK/Ireland (%)', layer: outsideUK, elements: [{
                html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=FINAL_SSVI_FLOOD_HEAT_04022014&style=outsideUK>'
            }]
        }, {
            name: 'Recent arrivals to UK (% arrived in UK less than a year ago)', layer: arrivalsUKheat, elements: [{
                html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=UK_New_CJ_Flood_Data_JOIN&style=arrivalsUKHeat>'
            }]
        }, {
            name: 'Inability to Respond index', layer: AbilityRespondIndexHeat, elements: [{
                html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=FINAL_SSVI_FLOOD_HEAT_04022014&style=ZF_RESP_IN>'
            }]
        }, {
            name: 'Lack of carers (% people not providing unpaid care)', layer: noCarer, elements: [{
                html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=FINAL_SSVI_FLOOD_HEAT_04022014&style=noCarer>'
            }]
        }, {
            name: 'Lack of private transport (% households with no car or van)', layer: noCar, elements: [{
                html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=UK_New_CJ_Flood_Data_JOIN&style=noCar>'
            }]
        }, {
            name: 'Low road density (% area not road)', layer: roadDensity, elements: [{
                html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=FINAL_SSVI_FLOOD_HEAT_04022014&style=roadDensity>'
            }]
        }, {
            name: 'Density of retail units (Number of enterprises divided by the area of MSOA)', layer: retailDensity, elements: [{
                html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=FINAL_SSVI_FLOOD_HEAT_04022014&style=retailDensity>'
            }]
        }, {
            name: '% change in the number of enterprises', layer: enterprises, elements: [{
                html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=FINAL_SSVI_FLOOD_HEAT_04022014&style=enterprises>'
            }]
        }, {
            name: 'Inability to Recover index', layer: ZF_REC_IND, elements: [{
                html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=FINAL_SSVI_FLOOD_HEAT_04022014&style=ZF_REC_IND>'
            }]
        },


        {
            // fuel poverty maps
            name: '% LA fuel poverty 2012', layer: LA_FP_2012, elements: [{
                html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=LA_FP_2012>'
            }]
        }, {
            name: '% LA fuel poverty 2012 - 10% definition', layer: LA_FP_2012_10pc, elements: [{
                html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=LA_FP_2012_10pc>'
            }]
        }, {
            name: '% LSOA fuel poverty 2012', layer: LSOA_FP_2012, elements: [{
                html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=LSOA_2012>'
            }]
        }, {
            name: '% LSOA fuel poverty 2012 - 10% definition', layer: LSOA_FP_2012_10pc, elements: [{
                html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=LSOA_2012_10pc>'
            }]
        }, {
            name: '% LA fuel poverty 2014', layer: LA_FP_2014, elements: [{
                html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=LA_FP_2014>'
            }]
        }, {
            name: '% LSOA fuel poverty 2014', layer: LSOA_FP_2014, elements: [{
                html: '<img src=' + cj18_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=LSOA_FP_2014>'
            }]
        }, {
            // EA maps
            name: 'EA Flood Alert Areas', layer: flood_alert, elements: [{
                html: '<img src=' + EA_legend + 'flood-alert-areas/wms?request=GetLegendGraphic&version=1.3.0&format=image/png&layer=Flood_Alert_Areas&style=default>'
            }]
        }, {
            name: 'EA Flood Risk Areas', layer: flood_risk, elements: [{
                html: '<img src=' + EA_legend + 'flood-risk-areas/wms?request=GetLegendGraphic&amp;version=1.3.0&amp;format=image/png&amp;layer=Flood_Risk_Areas&amp;style=default>'
            }]
        }, {
            name: 'EA Areas Benefiting from Defences', layer: flood_benefit, elements: [{
                html: '<img src=' + EA_legend + 'flood-map-for-planning-rivers-and-sea-areas-benefiting-from-defences/wms?request=GetLegendGraphic&amp;version=1.3.0&amp;format=image/png&amp;layer=Flood_Map_for_Planning_Rivers_and_Sea_Areas_Benefiting_from_Flood_Defences&amp;style=default>'
            }]
        }, {
            name: 'EA Flood Zone 2', layer: flood_zone2, elements: [{
                html: '<img src=' + EA_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=Flood_Map_for_Planning_Rivers_and_Sea_Flood_Zone_2>'
            }]
        }, {
            name: 'EA Flood Zone 3', layer: flood_zone3, elements: [{
                html: '<img src=' + EA_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=Flood_Map_for_Planning_Rivers_and_Sea_Flood_Zone_3>'
            }]
        }, {
            name: 'EA Recorded Flood Outlines', layer: recordedFlood, elements: [{
                html: '<img src=' + EA_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=Recorded_Flood_Outlines>'
            }]
        }, {
            name: 'EA Risk of Flooding from Rivers and Sea', layer: Risk_of_Flooding_from_Rivers_and_Sea, elements: [{
                html: '<img src=' + EA_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=Risk_of_Flooding_from_Rivers_and_Sea>'
            }]
        }, {
            name: 'EA Saltmarsh extents', layer: saltmarsh, elements: [{
                html: '<img src=' + EA_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=Saltmarsh_Extents_and_Zonation>'
            }]
        }, {
            // Wales
            name: 'NRW Flood Defences', layer: NRW_FLOODMAP_FLOOD_DEFENCES, elements: [{
                html: '<img src=https://lle.gov.wales/services/wms/nrw?service=WMS&request=GetLegendGraphic&format=image/png&width=20&height=20&layer=inspire-nrw:NRW_FLOODMAP_FLOOD_DEFENCES>'
            }]
        }, {
            name: 'NRW Areas Benefiting from Flood Defences', layer: NRW_AREA_BENEFITING_FROM_FLOOD_DEFENCE, elements: [{
                html: '<img src=https://lle.gov.wales/services/wms/nrw?service=WMS&request=GetLegendGraphic&format=image/png&width=20&height=20&layer=inspire-nrw:NRW_AREA_BENEFITING_FROM_FLOOD_DEFENCE>'
            }]
        }, {
            name: 'UK Wards', layer: wards, elements: [{
                html: '<img src=' + admin_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=wards_2021>'
            }]
        }, {
            name: 'UK LAs', layer: UK_districts, elements: [{
                html: '<img src=' + admin_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=LAD_2019_UK_BGC>'
            }]
        }, {
            name: 'Urban areas - England & Wales', layer: urban, elements: [{
                html: '<img src=' + admin_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=Built-up_Areas_(December_2011)_Boundaries_V2>'
            }]
        }, {
            name: 'Urban areas - Scotland', layer: scot_urban, elements: [{
                html: '<img src=' + admin_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=Settlements2016_MHW>'
            }]
        }, {
            name: 'Parliamentary constituencies', layer: westminster, elements: [{
                html: '<img src=' + admin_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=westminster>'
            }]
        } /*, { // SEPA 2080 flood maps
                name: 'River flooding<br>extent 2080',
                layer: riverExt2080,
                elements: [{
                    html: '<img src=' + nhs_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=river_water_extent_2080>'
                }]
            }, {
                name: 'River flooding<br>depth 2080',
                layer: riverDepth2080,
                elements: [{
                    html: '<img src=' + nhs_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=river_water_depth_2080>'
                }]
            }, {
                name: 'Coastal flooding<br>extent 2080',
                layer: coastalExt2080,
                elements: [{
                    html: '<img src=' + nhs_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=E200cc_Coastal_v1_2>'
                }]
            }, {
                name: 'Coastal flooding<br>depth 2080',
                layer: coastalDepth2080,
                elements: [{
                    html: '<img src=' + nhs_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=D200cc_Coastal_v1_2>'
                }]
            }, {
                name: 'Coastal erosion 2050',
                layer: cErosion_2050,
                elements: [{
                    html: '<img src=' + nhs_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=NCCA_FUTURE_LOOK_2050_PUBLIC>'
                }]
            }, {
                name: 'Mean High Water<br>Springs 1890',
                layer: cErosion_1890,
                elements: [{
                    html: '<img src=' + nhs_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=NCCA_SCOTLAND_MHWS_1890>'
                }]
            }, {
                name: 'Mean High Water<br>Springs 1970',
                layer: cErosion_1970,
                elements: [{
                    html: '<img src=' + nhs_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=NCCA_SCOTLAND_MHWS_1970>'
                }]
            }, {
                name: 'Mean High Water<br>Springs modern',
                layer: cErosion_modern,
                elements: [{
                    html: '<img src=' + nhs_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=NCCA_SCOTLAND_MHWS_MODERN>'
                }]
            }, {
                name: 'Landslides',
                layer: landslides,
                elements: [{
                    html: '<img src=https://map.bgs.ac.uk/arcgis/services/GeoIndex_Onshore/hazards/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Landslides>'
                }]
            }, {
                name: 'Defence scheme',
                layer: fps,
                elements: [{
                    html: '<img src=' + nhs_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=SFDAD_FPS_No_v1_2>'
                }]
            }, {
                name: 'Floodgate',
                layer: floodgate,
                elements: [{
                    html: '<img src=' + nhs_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=SFDAD_Floodgate_v1_2>'
                }]
            }, {
                name: 'Pump',
                layer: pump,
                elements: [{
                    html: '<img src=' + nhs_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=SFDAD_Pump_v1_2>'
                }]
            }, {
                name: 'Embankment',
                layer: embankment,
                elements: [{
                    html: '<img src=' + nhs_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=SFDAD_Embankment_v1_2>'
                }]
            }, {
                name: 'Wall',
                layer: wall,
                elements: [{
                    html: '<img src=' + nhs_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=SFDAD_Wall_v1_2>'
                }]
            }, {
                name: 'Culvert',
                layer: culvert,
                elements: [{
                    html: '<img src=' + nhs_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=SFDAD_Culvert_v1_2>'
                }]
            }, {
                name: 'Storage area',
                layer: storage,
                elements: [{
                    html: '<img src=' + nhs_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=SFDAD_StorageArea_v1_2>'
                }]
            }, {
                name: 'Channel Improvement',
                layer: channelImprove,
                elements: [{
                    html: '<img src=' + nhs_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=SFDAD_ChannelImprovement_v1_2>'
                }]
            }, {
                name: 'Area of benefit',
                layer: defenceBenefit,
                elements: [{
                    html: '<img src=' + nhs_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=SFDAD_AreaOfBenefit_v1_2>'
                }]
            }, {
                name: 'Observed flood events',
                layer: observedFlood,
                elements: [{
                    html: '<img src=' + nhs_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=OFE>'
                }]
            }, {
                name: 'Rainfall 2080<br>Spring<br><small>(% change)</small>',
                layer: rain_spr_10,
                elements: [{
                    html: '<img src=' + nhs_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=rain_spring_10>'
                }]
            }, {
                name: 'Rainfall 2080<br>Spring<br><small>(% change)</small>',
                layer: rain_spr_50,
                elements: [{
                    html: '<img src=' + nhs_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=rain_spring_10>'
                }]
            }, {
                name: 'Rainfall 2080<br>Spring<br><small>(% change)</small>',
                layer: rain_spr_90,
                elements: [{
                    html: '<img src=' + nhs_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=rain_spring_10>'
                }]
            }, {
                name: 'Rainfall 2080<br>Summer<br><small>(% change)</small>',
                layer: rain_sum_10,
                elements: [{
                    html: '<img src=' + nhs_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=rain_spring_10>'
                }]
            }, {
                name: 'Rainfall 2080<br>Summer<br><small>(% change)</small>',
                layer: rain_sum_50,
                elements: [{
                    html: '<img src=' + nhs_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=rain_spring_10>'
                }]
            }, {
                name: 'Rainfall 2080<br>Summer<br><small>(% change)</small>',
                layer: rain_sum_90,
                elements: [{
                    html: '<img src=' + nhs_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=rain_spring_10>'
                }]
            }, {
                name: 'Rainfall 2080<br>Autumn<br><small>(% change)</small>',
                layer: rain_aut_10,
                elements: [{
                    html: '<img src=' + nhs_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=rain_spring_10>'
                }]
            }, {
                name: 'Rainfall 2080<br>Autumn<br><small>(% change)</small>',
                layer: rain_aut_50,
                elements: [{
                    html: '<img src=' + nhs_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=rain_spring_10>'
                }]
            }, {
                name: 'Rainfall 2080<br>Autumn<br><small>(% change)</small>',
                layer: rain_aut_90,
                elements: [{
                    html: '<img src=' + nhs_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=rain_spring_10>'
                }]
            }, {
                name: 'Rainfall 2080<br>Winter<br><small>(% change)</small>',
                layer: rain_win_10,
                elements: [{
                    html: '<img src=' + nhs_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=rain_spring_10>'
                }]
            }, {
                name: 'Rainfall 2080<br>Winter<br><small>(% change)</small>',
                layer: rain_win_50,
                elements: [{
                    html: '<img src=' + nhs_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=rain_spring_10>'
                }]
            }, {
                name: 'Rainfall 2080<br>Winter<br><small>(% change)</small>',
                layer: rain_win_90,
                elements: [{
                    html: '<img src=' + nhs_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=rain_spring_10>'
                }]
            }, {
                name: 'Air temperature 2080<br>Spring<br><small>(&deg;C change)</small>',
                layer: air_spr_10,
                elements: [{
                    html: '<img src=' + nhs_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=air_spring_10>'
                }]
            }, {
                name: 'Air temperature 2080<br>Spring<br><small>(&deg;C change)</small>',
                layer: air_spr_50,
                elements: [{
                    html: '<img src=' + nhs_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=air_spring_10>'
                }]
            }, {
                name: 'Air temperature 2080<br>Spring<br><small>(&deg;C change)</small>',
                layer: air_spr_90,
                elements: [{
                    html: '<img src=' + nhs_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=air_spring_10>'
                }]
            }, {
                name: 'Air temperature 2080<br>Summer<br><small>(&deg;C change)</small>',
                layer: air_sum_10,
                elements: [{
                    html: '<img src=' + nhs_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=air_spring_10>'
                }]
            }, {
                name: 'Air temperature 2080<br>Summer<br><small>(&deg;C change)</small>',
                layer: air_sum_50,
                elements: [{
                    html: '<img src=' + nhs_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=air_spring_10>'
                }]
            }, {
                name: 'Air temperature 2080<br>Summer<br><small>(&deg;C change)</small>',
                layer: air_sum_90,
                elements: [{
                    html: '<img src=' + nhs_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=air_spring_10>'
                }]
            }, {
                name: 'Air temperature 2080<br>Autumn<br><small>(&deg;C change)</small>',
                layer: air_aut_10,
                elements: [{
                    html: '<img src=' + nhs_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=air_spring_10>'
                }]
            }, {
                name: 'Air temperature 2080<br>Autumn<br><small>(&deg;C change)</small>',
                layer: air_aut_50,
                elements: [{
                    html: '<img src=' + nhs_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=air_spring_10>'
                }]
            }, {
                name: 'Air temperature 2080<br>Autumn<br><small>(&deg;C change)</small>',
                layer: air_aut_90,
                elements: [{
                    html: '<img src=' + nhs_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=air_spring_10>'
                }]
            }, {
                name: 'Air temperature 2080<br>Winter<br><small>(&deg;C change)</small>',
                layer: air_win_10,
                elements: [{
                    html: '<img src=' + nhs_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=air_spring_10>'
                }]
            }, {
                name: 'Air temperature 2080<br>Winter<br><small>(&deg;C change)</small>',
                layer: air_win_50,
                elements: [{
                    html: '<img src=' + nhs_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=air_spring_10>'
                }]
            }, {
                name: 'Air temperature 2080<br>Winter<br><small>(&deg;C change)</small>',
                layer: air_win_90,
                elements: [{
                    html: '<img src=' + nhs_legend + 'REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=air_spring_10>'
                }]
            }*/], collapseSimple: true, detectStretched: false, visibleIcon: 'leaflet-html-legend-icon-eye', hiddenIcon: 'leaflet-html-legend-icon-eye-slash'
});

map.addControl(legend);

htmlObject = legend.getContainer();
a = document.getElementById('key')

function setParent(el, newParent) {
    newParent.append(el);
}

setParent(htmlObject, a);
