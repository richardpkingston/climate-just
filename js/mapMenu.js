/** Climate Just, University of Manchester
 Last updated: 17/08/2022
 By: Richard Kingston
 **/
/* Flood maps */
var floodMaps = [{
    label: ' Neighbourhood Flood Vulnerability Index <a href="javascript:void(0);" data-href="info17/nfvi.html" class="openPopup"><i class="fas fa-info-circle"></i></a>',
    collapsed: false,
    radioGroup: 'single',
    layer: nfvi
}, {
    label: ' Susceptibility <a href="javascript:void(0);" data-href="info17/nfvi.html" class="openPopup"><i class="fas fa-info-circle"></i></a>',
    collapsed: true,
    children: [{
        label: ' Susceptibility',
        radioGroup: 'single',
        layer: susceptibility
    }, {
        label: ' Age',
        children: [{
            label: ' Vulnerability due to age',
            radioGroup: 'single',
            layer: age
        }, {
            label: ' Young children (% people under 5 years) <a href="javascript:void(0);" data-href="info17/age_05.html" class="openPopup"><i class="fas' +
                ' fa-info-circle"></i></a>',
            radioGroup: 'single',
            layer: under5
        }, {
            label: ' Older people (% people over 75 years) <a href="javascript:void(0);" data-href="info17/age_75.html" class="openPopup"><i class="fas' +
                ' fa-info-circle"></i></a>',
            radioGroup: 'single',
            layer: over75
        }]
    }, {
        label: ' Health',
        children: [{
            label: ' Vulnerability due to health',
            layer: ill_health,
            radioGroup: 'single'
        }, {
            label: ' Disability / people in ill-health (% people whose day-to-day activities are limited) <a href="javascript:void(0);"' +
                ' data-href="info17/healthH1.html" class="openPopup"><i class="fas fa-info-circle"></i></a>',
            layer: dis_illHealth,
            radioGroup: 'single'
        }, {
            label: ' % households with at least one person with long term limiting illness <a href="javascript:void(0);"' +
                ' data-href="info17/healthH2.html" class="openPopup"><i class="fas fa-info-circle"></i></a>',
            layer: llti,
            radioGroup: 'single'
        }]
    }]
}, {
    label: ' Inability to prepare <a href="javascript:void(0);" data-href="info17/nfvi.html" class="openPopup"><i class="fas fa-info-circle"></i></a>',
    collapsed: true,
    children: [{
        label: ' Inability to prepare',
        radioGroup: 'single',
        layer: f_prepare
    }, {
        label: ' Income <a href="javascript:void(0);" data-href="info17/income_i1_5.html" class="openPopup"><i class="fas fa-info-circle"></i></a>',
        children: [{
            label: ' Vulnerability due to income',
            radioGroup: 'single',
            layer: income
        }, {
            label: ' % Unemployed <a href="javascript:void(0);" data-href="info17/AT0_1_AT1_1_AT2_1.html" class="openPopup"><i class="fas fa-info-circle"></i></a>',
            radioGroup: 'single',
            layer: unemployed
        }, {
            label: ' Long-term unemployed (% who are LTU or who have never worked) <a href="javascript:void(0);" data-href="info17/AT0_3_AT1_3_AT2_3.html" class="openPopup"><i class="fas fa-info-circle"></i></a>',
            radioGroup: 'single',
            layer: LTunemployed
        }, {
            label: ' Low income occupations (% in routine or semi- routine occupations) <a href="javascript:void(0);" data-href="info17/AT0_2_AT1_2_AT2_2.html" class="openPopup"><i class="fas fa-info-circle"></i></a>',
            radioGroup: 'single',
            layer: lowIncome
        }, {
            label: ' Households with dependent children and no adults in employment (%) <a href="javascript:void(0);" data-href="info17/AT0_4_AT1_4_AT2_4.html" class="openPopup"><i class="fas fa-info-circle"></i></a>',
            radioGroup: 'single',
            layer: depChildUnemp
        }, {
            label: ' Income deprivation index',
            radioGroup: 'single',
            layer: incomeDepIndex
        }]
    }, {
        label: ' Information use <a href="javascript:void(0);" data-href="info17/information_use_F1_2.html" class="openPopup"><i class="fas fa-info-circle"></i></a>',
        children: [{
            label: ' Vulnerability due to issues of information use',
            radioGroup: 'single',
            layer: info
        }, {
            label: ' Recent arrivals to UK (% people with <1 yr residency coming from outside UK) <a href="javascript:void(0);" data-href="info17/AT0_26_AT1_39_AT2_53.html" class="openPopup"><i class="fas fa-info-circle"></i></a>',
            radioGroup: 'single',
            layer: arrivalsUK
        }, {
            label: ' Level of proficiency in English (%)',
            radioGroup: 'single',
            layer: engLanguage
        }]
    }, {
        label: ' Local knowledge <a href="javascript:void(0);" data-href="info17/local_knowledge_K1.html" class="openPopup"><i class="fas fa-info-circle"></i></a>',
        children: [{
            label: ' Vulnerability due to lack of local knowledge',
            radioGroup: 'single',
            layer: localKnowledge
        }, {
            label: ' New migrants from outside local area (%)',
            radioGroup: 'single',
            layer: migrants
        }]
    }, {
        label: 'Property tenure <a href="javascript:void(0);" data-href="info17/tenure_T1_T2.html" class="openPopup"><i class="fas fa-info-circle"></i></a>',
        children: [{
            label: ' Vulnerability due to property tenure',
            radioGroup: 'single',
            layer: propTenure
        }, {
            label: ' Private renters (% Households) <a href="javascript:void(0);" data-href="info17/AT0_12.html" class="openPopup"><i class="fas' +
                ' fa-info-circle"></i></a>',
            radioGroup: 'single',
            layer: privRent
        }, {
            label: ' Social renters (% Households renting from Social or Council landlords) <a href="javascript:void(0);" data-href="info17/AT0_11.html" class="openPopup"><i class="fas fa-info-circle"></i></a>',
            radioGroup: 'single',
            layer: socialRent
        }]
    }]
}, {
    label: ' Inability to respond <a href="javascript:void(0);" data-href="info17/nfvi.html" class="openPopup"><i class="fas fa-info-circle"></i></a>',
    collapsed: true,
    children: [{
        label: ' Inability to respond',
        radioGroup: 'single',
        layer: nfviRespond
    }, {
        label: ' Income <a href="javascript:void(0);" data-href="info17/income_i1_5.html" class="openPopup"><i class="fas fa-info-circle"></i></a>',
        children: [{
            label: ' Vulnerability due to income',
            radioGroup: 'single',
            layer: income
        }, {
            label: ' % Unemployed <a href="javascript:void(0);" data-href="info17/AT0_1_AT1_1_AT2_1.html" class="openPopup"><i class="fas fa-info-circle"></i></a>',
            radioGroup: 'single',
            layer: unemployed
        }, {
            label: ' Long-term unemployed (% who are LTU or who have never worked) <a href="javascript:void(0);" data-href="info17/AT0_3_AT1_3_AT2_3.html" class="openPopup"><i class="fas fa-info-circle"></i></a>',
            radioGroup: 'single',
            layer: LTunemployed
        }, {
            label: ' Low income occupations (% in routine or semi- routine occupations) <a href="javascript:void(0);" data-href="info17/AT0_2_AT1_2_AT2_2.html" class="openPopup"><i class="fas fa-info-circle"></i></a>',
            radioGroup: 'single',
            layer: lowIncome
        }, {
            label: ' Households with dependent children and no adults in employment (%) <a href="javascript:void(0);" data-href="info17/AT0_4_AT1_4_AT2_4.html" class="openPopup"><i class="fas fa-info-circle"></i></a>',
            radioGroup: 'single',
            layer: depChildUnemp
        }, {
            label: ' Income deprivation index',
            radioGroup: 'single',
            layer: incomeDepIndex
        }]
    }, {
        label: 'Information use <a href="javascript:void(0);" data-href="info17/information_use_F1_2.html" class="openPopup"><i class="fas fa-info-circle"></i></a>',
        children: [{
            label: ' Vulnerability due to issues of information use',
            radioGroup: 'single',
            layer: info
        }, {
            label: ' Recent arrivals to UK (% people with <1 yr residency coming from outside UK) <a href="javascript:void(0);" data-href="info17/AT0_26_AT1_39_AT2_53.html" class="openPopup"><i class="fas fa-info-circle"></i></a>',
            radioGroup: 'single',
            layer: arrivalsUK
        }, {
            label: ' Level of proficiency in English (%)',
            radioGroup: 'single',
            layer: engLanguage
        }]
    }, {
        label: 'Local knowledge <a href="javascript:void(0);" data-href="info17/local_knowledge_K1.html" class="openPopup"><i class="fas fa-info-circle"></i></a>',
        children: [{
            label: ' Vulnerability due to lack of local knowledge',
            radioGroup: 'single',
            layer: localKnowledge
        }, {
            label: ' New migrants from outside local area (%)',
            radioGroup: 'single',
            layer: migrants
        }]
    }, {
        label: ' Physical mobility <a href="javascript:void(0);" data-href="info17/physical_mobility.html" class="openPopup"><i class="fas fa-info-circle"></i></a>',
        children: [{
            label: ' Vulnerability due to lack of physical mobility',
            radioGroup: 'single',
            layer: mobility
        }, {
            label: ' High levels of disability (% of population who are disabled)',
            radioGroup: 'single',
            layer: disability
        }, {
            label: ' % people living in medical and care establishments',
            radioGroup: 'single',
            layer: medCare
        }, {
            label: ' Lack of private transport (% households with no car or van) <a href="javascript:void(0);" data-href="info17/AT1_30_AT2_25.html" class="openPopup"><i class="fas fa-info-circle"></i></a>',
            radioGroup: 'single',
            layer: transport
        }]
    }, {
        label: ' Crime <a href="javascript:void(0);" data-href="info17/crimeC1.html" class="openPopup"><i class="fas fa-info-circle"></i></a>',
        children: [{
            label: ' Vulnerability due to crime',
            radioGroup: 'single',
            layer: crimeIndex
        }, {
            label: ' Crime index (IMD) <a href="javascript:void(0);" data-href="info17/AT1_33.html" class="openPopup"><i class="fas fa-info-circle"></i></a>',
            radioGroup: 'single',
            layer: crimeIMD
        }]
    }]
}, {
    label: ' Inability to recover <a href="javascript:void(0);" data-href="info17/nfvi.html" class="openPopup"><i class="fas fa-info-circle"></i></a>',
    collapsed: true,
    children: [{
        label: ' Inability to recover',
        radioGroup: 'single',
        layer: nfviRecover
    }, {
        label: ' Income <a href="javascript:void(0);" data-href="info17/income_i1_5.html" class="openPopup"><i class="fas fa-info-circle"></i></a>',
        children: [{
            label: ' Vulnerability due to income',
            radioGroup: 'single',
            layer: income
        }, {
            label: ' % Unemployed <a href="javascript:void(0);" data-href="info17/AT0_1_AT1_1_AT2_1.html" class="openPopup"><i class="fas fa-info-circle"></i></a>',
            radioGroup: 'single',
            layer: unemployed
        }, {
            label: ' Long-term unemployed (% who are LTU or who have never worked) <a href="javascript:void(0);" data-href="info17/AT0_3_AT1_3_AT2_3.html" class="openPopup"><i class="fas fa-info-circle"></i></a>',
            radioGroup: 'single',
            layer: LTunemployed
        }, {
            label: ' Low income occupations (% in routine or semi- routine occupations) <a href="javascript:void(0);" data-href="info17/AT0_2_AT1_2_AT2_2.html" class="openPopup"><i class="fas fa-info-circle"></i></a>',
            radioGroup: 'single',
            layer: lowIncome
        }, {
            label: ' Households with dependent children and no adults in employment (%) <a href="javascript:void(0);" data-href="info17/AT0_4_AT1_4_AT2_4.html" class="openPopup"><i class="fas fa-info-circle"></i></a>',
            radioGroup: 'single',
            layer: depChildUnemp
        }, {
            label: ' Income deprivation index',
            radioGroup: 'single',
            layer: incomeDepIndex
        }]
    }, {
        label: ' Information use <a href="javascript:void(0);" data-href="info17/information_use_F1_2.html" class="openPopup"><i class="fas fa-info-circle"></i></a>',
        children: [{
            label: ' Vulnerability due to issues of information use',
            radioGroup: 'single',
            layer: info
        }, {
            label: ' Recent arrivals to UK (% people with <1 yr residency coming from outside UK) <a href="javascript:void(0);" data-href="info17/AT0_26_AT1_39_AT2_53.html" class="openPopup"><i class="fas fa-info-circle"></i></a>',
            radioGroup: 'single',
            layer: arrivalsUK
        }, {
            label: ' Level of proficiency in English (%)',
            radioGroup: 'single',
            layer: engLanguage
        }]
    }, {
        label: ' Physical mobility <a href="javascript:void(0);" data-href="info17/physical_mobility.html" class="openPopup"><i class="fas fa-info-circle"></i></a>',
        children: [{
            label: ' Vulnerability due to lack of physical mobility',
            radioGroup: 'single',
            layer: mobility
        }, {
            label: ' High levels of disability (% of population who are disabled)',
            radioGroup: 'single',
            layer: disability
        }, {
            label: ' % people living in medical and care establishments',
            radioGroup: 'single',
            layer: medCare
        }, {
            label: ' Lack of private transport (% households with no car or van) <a href="javascript:void(0);" data-href="info17/AT1_30_AT2_25.html" class="openPopup"><i class="fas fa-info-circle"></i></a>',
            radioGroup: 'single',
            layer: transport
        }]
    }]
}, {
    label: ' Community support <a href="javascript:void(0);" data-href="info17/nfvi.html" class="openPopup"><i class="fas fa-info-circle"></i></a>',
    collapsed: true,
    children: [{
        label: ' Lack of community support',
        radioGroup: 'single',
        layer: nfviCommunity
    }, {
        label: ' Housing characteristics',
        children: [{
            label: ' Vulnerability due to housing characteristics',
            radioGroup: 'single',
            layer: housing
        }, {
            label: ' % caravan or other mobile or temporary structures in all households <a href="javascript:void(0);" data-href="info17/caravanL1.html" class="openPopup"><i class="fas fa-info-circle"></i></a>',
            radioGroup: 'single',
            layer: caravan
        }]
    }, {
        label: ' Direct flood experience <a href="javascript:void(0);" data-href="info17/direct-flood_E1.html" class="openPopup"><i class="fas fa-info-circle"></i></a>',
        children: [{
            label: ' Number of properties within historical flood boundary',
            radioGroup: 'single',
            layer: directFlood
        }]
    }, {
        label: ' Service availability <a href="javascript:void(0);" data-href="info17/service_availability.html" class="openPopup"><i class="fas fa-info-circle"></i></a>',
        children: [{
            label: ' Vulnerability due to exposure of services to flooding',
            radioGroup: 'single',
            layer: serviceFlood
        }, {
            label: ' % of emergency services exposed to flooding',
            radioGroup: 'single',
            layer: emergServices
        }, {
            label: ' % no. of care homes exposed to flooding',
            radioGroup: 'single',
            layer: careHomes
        }, {
            label: ' % no. of GP surgeries exposed to flooding',
            radioGroup: 'single',
            layer: gpFlood
        }, {
            label: ' % no. of schools exposed to flooding',
            radioGroup: 'single',
            layer: schoolFlood
        }]
    }, {
        label: ' Social networks <a href="javascript:void(0);" data-href="info17/social_networks.html" class="openPopup"><i class="fas fa-info-circle"></i></a>',
        children: [{
            label: ' Vulnerability due to lack of social networks',
            radioGroup: 'single',
            layer: socialNet
        }, {
            layer: pensioner,
            label: ' % single-pensioner households <a href="javascript:void(0);" data-href="info17/AT1_23_AT2_18.html" class="openPopup"><i class="fas fa-info-circle"></i></a>',
            radioGroup: 'single'
        }, {
            layer: loneParentFlood,
            label: ' % lone-parent households with dependent children <a href="javascript:void(0);" data-href="info17/AT1_26_AT2_21.html" class="openPopup"><i class="fas fa-info-circle"></i></a>',
            radioGroup: 'single'
        }, {
            label: ' % children of primary school age (4-11) in the population',
            radioGroup: 'single',
            layer: age4_11
        }]
    }]
}, {
    label: ' Social Flood Risk Index <a href="javascript:void(0);" data-href="info17/sfri.html" class="openPopup"><i class="fas fa-info-circle"></i></a>',
    collapsed: false
}, {
    label: ' River &amp; Coastal',
    collapsed: true,
    children: [{
        label: ' Group',
        children: [{
            label: ' Present day',
            radioGroup: 'single',
            layer: SFRIpresDayG
        }, {
            label: ' Future 2050s 2&deg;C scenario',
            radioGroup: 'single',
            layer: SFRI2050_2degG
        }, {
            label: ' Future 2050s 4&deg;C scenario',
            radioGroup: 'single',
            layer: SFRI2050_4degG
        }]
    }, {
        label: ' Individual',
        children: [{
            label: ' Present day',
            radioGroup: 'single',
            layer: SFRIpresDayI
        }, {
            label: ' Future 2050s 2&deg;C scenario',
            radioGroup: 'single',
            layer: SFRI2050_2degI
        }, {
            label: ' Future 2050s 4&deg;C scenario',
            radioGroup: 'single',
            layer: SFRI2050_4degI
        }]
    }]
}, {
    label: ' Surface water',
    collapsed: true,
    children: [{
        label: ' Group',
        children: [{
            label: ' Present day',
            radioGroup: 'single',
            layer: SFRIpresDayG_SW
        }, {
            label: ' Future 2050s 2&deg;C scenario',
            radioGroup: 'single',
            layer: SFRI2050_2degG_SW
        }, {
            label: ' Future 2050s 4&deg;C scenario',
            radioGroup: 'single',
            layer: SFRI2050_4degG_SW
        }]
    }, {
        label: ' Individual',
        children: [{
            label: ' Present day',
            radioGroup: 'single',
            layer: SFRIpresDayI_SW
        }, {
            label: ' Future 2050s 2&deg;C scenario',
            radioGroup: 'single',
            layer: SFRI2050_2degI_SW
        }, {
            label: ' Future 2050s 4&deg;C scenario',
            radioGroup: 'single',
            layer: SFRI2050_4degI_SW
        }]
    }]
}];

var agencyMaps = [{
    label: ' Government Agency flood maps',
    collapsed: false,
    children: [{
        label: ' Environment Agency <a href="javascript:void(0);" data-href="info17/EA_maps.html" class="openPopup"><i class="fas fa-info-circle"></i></a>',
        collapsed: true,
        children: [{
            label: ' Flood alert areas',
            layer: flood_alert
        }, {
            label: ' Flood risk areas',
            layer: flood_risk
        }, {
            label: ' Areas Benefiting from Flood Defences (Min Scale: 4,000,000)',
            layer: flood_benefit
        }, {
            label: ' Flood Zone 2 (Min Scale: 200,000)',
            layer: flood_zone2
        }, {
            label: ' Flood Zone 3 (Min Scale: 200,000)',
            layer: flood_zone3
        }, {
            label: ' Recorded Flood Outlines (Min Scale: 4,000,000)',
            layer: recordedFlood
        }, /*{
            label: ' Historic Flood Outlines (Min Scale: 4,000,000)',
            layer: historicFlood
        },*/ {
            label: ' Risk of Flooding from Rivers and Sea (Min Scale: 200,000)',
            layer: Risk_of_Flooding_from_Rivers_and_Sea
        }, {
            label: ' Saltmarsh Extents',
            layer: saltmarsh
        }]
    }, {
        label: ' Natural Resources Wales <a href="javascript:void(0);" data-href="info17/NRW_maps.html" class="openPopup"><i class="fas fa-info-circle"></i></a>',
        collapsed: true,
        children: [{
            label: ' Flood alert areas',
            layer: NRW_FLOOD_WATCH_AREAS
        }, {
            label: ' Flood risk areas',
            layer: NRW_FLOOD_RISK_AREAS
        }, {
            label: ' Flood defences',
            layer: NRW_FLOODMAP_FLOOD_DEFENCES
        }, {
            label: ' Areas Benefiting from Flood Defences',
            layer: NRW_AREA_BENEFITING_FROM_FLOOD_DEFENCE
        }, {
            label: ' Flood Zones 2 &amp; 3',
            layer: FloodMapforPlanningFloodZones2and3
        }, {
            label: ' Recorded Flood Extents',
            layer: NRW_HISTORIC_FLOODMAP
        }, {
            label: ' Flood Risk Assessment',
            layer: FloodRiskAssessmentWales
        }]
    }, {
        label: ' SEPA does not provide map layers. <a href="javascript:void(0);" data-href="info17/SEPA_maps.html" class="openPopup"><i class="fas fa-info-circle"></i></a>'
    }]
}];

var heatMaps = [{
    label: ' Heat disadvantage (2011) <a href="javascript:void(0);" data-href="info17/sheet7.html" class="openPopup"><i class="fas fa-info-circle"></i></a>',
    collapsed: true,
    children: [{
        label: ' Population weighted vulnerability',
        collapsed: true,
        children: [{
            label: ' Population weighted vulnerability and mean summer maximum temperature 2050s <a href="javascript:void(0);" data-href="info17/sheet8.html" class="openPopup"><i class="fas' +
                ' fa-info-circle"></i></a>',
            collapsed: true,
            children: [{
                label: ' Medium emissions scenario',
                children: [{
                    layer: RWHZZ_CV7,
                    label: ' Low estimate (10th percentile)',
                    radioGroup: 'single'
                }, {
                    layer: RWHZZ_CV8,
                    label: ' Central estimate (50th percentile) <b>RECOMMENDED</b> <a href="javascript:void(0);" data-href="info17/sheet9.html"' +
                        ' class="openPopup"><i class="fas fa-info-circle"></i></a>',
                    radioGroup: 'single'
                }, {
                    layer: RWHZZ_CV9,
                    label: ' High estimate (90th percentile)',
                    radioGroup: 'single'
                }]
            }, {
                label: ' Low emissions scenario',
                children: [{
                    layer: RWHZZ_CV4,
                    label: ' Low estimate (10th percentile)',
                    radioGroup: 'single'
                }, {
                    layer: RWHZZ_CV5,
                    label: ' Central estimate (50th percentile)',
                    radioGroup: 'single'
                }, {
                    layer: RWHZZ_CV6,
                    label: ' High estimate (90th percentile)',
                    radioGroup: 'single'
                }]
            }, {
                label: ' High emissions scenario',
                children: [{
                    layer: RWHZZ_CV1,
                    label: ' Low estimate (10th percentile)',
                    radioGroup: 'single'
                }, {
                    layer: RWHZZ_CV2,
                    label: ' Central estimate (50th percentile)',
                    radioGroup: 'single'
                }, {
                    layer: RWHZZ_CV3,
                    label: ' High estimate (90th percentile)',
                    radioGroup: 'single'
                }]
            }]
        }, {
            label: ' Population weighted vulnerability and change in mean summer maximum temperature baseline to 2050s',
            collapsed: true,
            children: [{
                label: ' Medium emissions scenario',
                children: [{
                    layer: RWHZZ_CV16,
                    label: ' Low estimate (10th percentile)',
                    radioGroup: 'single'
                }, {
                    layer: RWHZZ_CV17,
                    label: ' Central estimate (50th percentile) <b>RECOMMENDED</b>',
                    radioGroup: 'single'
                }, {
                    layer: RWHZZ_CV18,
                    label: ' High estimate (90th percentile)',
                    radioGroup: 'single'
                }]
            }, {
                label: ' Low  emissions scenario',
                children: [{
                    layer: RWHZZ_CV13,
                    label: ' Low estimate (10th percentile)',
                    radioGroup: 'single'
                }, {
                    layer: RWHZZ_CV14,
                    label: ' Central estimate (50th percentile)',
                    radioGroup: 'single'
                }, {
                    layer: RWHZZ_CV15,
                    label: ' High estimate (90th percentile)',
                    radioGroup: 'single'
                }]
            }, {
                label: ' High emissions scenario',
                children: [{
                    layer: RWHZZ_CV10,
                    label: ' Low estimate (10th percentile)',
                    radioGroup: 'single'
                }, {
                    layer: RWHZZ_CV11,
                    label: ' Central estimate (50th percentile)',
                    radioGroup: 'single'
                }, {
                    layer: RWHZZ_CV12,
                    label: ' High estimate (90th percentile)',
                    radioGroup: 'single'
                }]
            }]
        }, {
            label: ' Population weighted vulnerability and change in the temperature of the warmest day baseline to 2050s',
            collapsed: true,
            children: [{
                label: ' Medium emissions scenario',
                children: [{
                    layer: RWHZZ_CV25,
                    label: ' Low estimate (10th percentile)',
                    radioGroup: 'single'
                }, {
                    layer: RWHZZ_CV26,
                    label: ' Central estimate (50th percentile) <b>RECOMMENDED</b>',
                    radioGroup: 'single'
                }, {
                    layer: RWHZZ_CV27,
                    label: ' High estimate (90th percentile)',
                    radioGroup: 'single'
                }]
            }, {
                label: ' Low emissions scenario',
                children: [{
                    layer: RWHZZ_CV22,
                    label: ' Low estimate (10th percentile)',
                    radioGroup: 'single'
                }, {
                    layer: ZRWHZZ_CV2,
                    label: ' Central estimate (50th percentile)',
                    radioGroup: 'single'
                }, {
                    layer: RWHZZ_CV24,
                    label: ' High estimate (90th percentile)',
                    radioGroup: 'single'
                }]
            }, {
                label: ' High emissions scenario',
                children: [{
                    layer: RWHZZ_CV19,
                    label: ' Low estimate (10th percentile)',
                    radioGroup: 'single'
                }, {
                    layer: RWHZZ_CV20,
                    label: ' Central estimate (50th percentile)',
                    radioGroup: 'single'
                }, {
                    layer: RWHZZ_CV21,
                    label: ' High estimate (90th percentile)',
                    radioGroup: 'single'
                }]
            }]
        }, {
            label: ' Population weighted vulnerability and change in the temperature of the warmest night baseline to 2050s',
            collapsed: true,
            children: [{
                label: ' Medium emissions scenario',
                children: [{
                    layer: RWHZZ_CV34,
                    label: ' Low estimate (10th percentile)',
                    radioGroup: 'single'
                }, {
                    layer: RWHZZ_CV35,
                    label: ' Central estimate (50th percentile) <b>RECOMMENDED</b>',
                    radioGroup: 'single'
                }, {
                    layer: RWHZZ_CV36,
                    label: ' High estimate (90th percentile)',
                    radioGroup: 'single'
                }]
            }, {
                label: ' Low emissions scenario',
                children: [{
                    layer: RWHZZ_CV31,
                    label: ' Low estimate (10th percentile)',
                    radioGroup: 'single'
                }, {
                    layer: RWHZZ_CV32,
                    label: ' Central estimate (50th percentile)',
                    radioGroup: 'single'
                }, {
                    layer: RWHZZ_CV33,
                    label: ' High estimate (90th percentile)',
                    radioGroup: 'single'
                }]
            }, {
                label: ' High emissions scenario',
                children: [{
                    layer: RWHZZ_CV28,
                    label: ' Low estimate (10th percentile)',
                    radioGroup: 'single'
                }, {
                    layer: RWHZZ_CV29,
                    label: ' Central estimate (50th percentile)',
                    radioGroup: 'single'
                }, {
                    layer: RWHZZ_CV30,
                    label: ' High estimate (90th percentile)',
                    radioGroup: 'single'
                }]
            }]
        }]
    }, {
        label: ' Average vulnerability',
        collapsed: true,
        children: [{
            label: ' Average vulnerability and mean summer maximum temperature 2050s',
            collapsed: true,
            children: [{
                label: '  Medium emissions scenario',
                children: [{
                    layer: R_HZZ_CV7,
                    label: ' Low estimate (10th percentile)',
                    radioGroup: 'single'
                }, {
                    layer: R_HZZ_CV8,
                    label: ' Central estimate (50th percentile) <b>RECOMMENDED</b>',
                    radioGroup: 'single'
                }, {
                    layer: R_HZZ_CV9,
                    label: ' High estimate (90th percentile)',
                    radioGroup: 'single'
                }]
            }, {
                label: ' Low  emissions scenario',
                children: [{
                    layer: R_HZZ_CV4,
                    label: '  Low estimate (10th percentile)',
                    radioGroup: 'single'
                }, {
                    layer: R_HZZ_CV5,
                    label: ' Central estimate (50th percentile)',
                    radioGroup: 'single'
                }, {
                    layer: R_HZZ_CV6,
                    label: ' High estimate (90th percentile)',
                    radioGroup: 'single'
                }]
            }, {
                label: ' High emissions scenario',
                children: [{
                    layer: R_HZZ_CV1,
                    label: ' Low estimate (10th percentile)',
                    radioGroup: 'single'
                }, {
                    layer: R_HZZ_CV2,
                    label: ' Central estimate (50th percentile)',
                    radioGroup: 'single'
                }, {
                    layer: R_HZZ_CV3,
                    label: ' High estimate (90th percentile)',
                    radioGroup: 'single'
                }]
            }]
        }, {
            label: ' Average vulnerability and change in mean summer maximum temperature baseline to 2050s',
            collapsed: true,
            children: [{
                label: ' Medium emissions scenario',
                children: [{
                    layer: R_HZZ_CV16,
                    label: ' Low estimate (10th percentile)',
                    radioGroup: 'single'
                }, {
                    layer: R_HZZ_CV17,
                    label: ' Central estimate (50th percentile) <b>RECOMMENDED</b>',
                    radioGroup: 'single'
                }, {
                    layer: R_HZZ_CV18,
                    label: ' High estimate (90th percentile)',
                    radioGroup: 'single'
                }]
            }, {
                label: ' Low emissions scenario',
                children: [{
                    layer: R_HZZ_CV13,
                    label: ' Low estimate (10th percentile)',
                    radioGroup: 'single'
                }, {
                    layer: R_HZZ_CV14,
                    label: ' Central estimate (50th percentile)',
                    radioGroup: 'single'
                }, {
                    layer: R_HZZ_CV15,
                    label: ' High estimate (90th percentile)',
                    radioGroup: 'single'
                }]
            }, {
                label: ' High emissions scenario',
                children: [{
                    layer: R_HZZ_CV10,
                    label: ' Low estimate (10th percentile)',
                    radioGroup: 'single'
                }, {
                    layer: R_HZZ_CV11,
                    label: ' Central estimate (50th percentile)',
                    radioGroup: 'single'
                }, {
                    layer: R_HZZ_CV12,
                    label: ' High estimate (90th percentile)',
                    radioGroup: 'single'
                }]
            }]
        }, {
            label: ' Average vulnerability and change in the temperature of the warmest day baseline to 2050s',
            collapsed: true,
            children: [{
                label: ' Medium emissions scenario',
                children: [{
                    layer: R_HZZ_CV25,
                    label: ' Low estimate (10th percentile)',
                    radioGroup: 'single'
                }, {
                    layer: R_HZZ_CV26,
                    label: ' Central estimate (50th percentile) <b>RECOMMENDED</b>',
                    radioGroup: 'single'
                }, {
                    layer: R_HZZ_CV27,
                    label: ' High estimate (90th percentile)',
                    radioGroup: 'single'
                }]
            }, {
                label: ' Low emissions scenario',
                children: [{
                    layer: R_HZZ_CV22,
                    label: ' Low estimate (10th percentile)',
                    radioGroup: 'single'
                }, {
                    layer: R_HZZ_CV23,
                    label: ' Central estimate (50th percentile)',
                    radioGroup: 'single'
                }, {
                    layer: R_HZZ_CV24,
                    label: ' High estimate (90th percentile)',
                    radioGroup: 'single'
                }]
            }, {
                label: ' High emissions scenario',
                children: [{
                    layer: R_HZZ_CV19,
                    label: ' Low estimate (10th percentile)',
                    radioGroup: 'single'
                }, {
                    layer: R_HZZ_CV20,
                    label: ' Central estimate (50th percentile)',
                    radioGroup: 'single'
                }, {
                    layer: R_HZZ_CV21,
                    label: ' High estimate (90th percentile)',
                    radioGroup: 'single'
                }]
            }]
        }, {
            label: ' Average vulnerability and change in the temperature of the warmest night baseline to 2050s',
            collapsed: true,
            children: [{
                label: ' Medium emissions scenario',
                children: [{
                    layer: R_HZZ_CV34,
                    label: ' Low estimate (10th percentile)',
                    radioGroup: 'single'
                }, {
                    layer: R_HZZ_CV35,
                    label: ' Central estimate (50th percentile) <b>RECOMMENDED</b>',
                    radioGroup: 'single'
                }, {
                    layer: R_HZZ_CV36,
                    label: ' High estimate (90th percentile)',
                    radioGroup: 'single'
                }]
            }, {
                label: ' Low  emissions scenario',
                children: [{
                    layer: R_HZZ_CV31,
                    label: ' Low estimate (10th percentile)',
                    radioGroup: 'single'
                }, {
                    layer: R_HZZ_CV32,
                    label: ' Central estimate (50th percentile)',
                    radioGroup: 'single'
                }, {
                    layer: R_HZZ_CV33,
                    label: ' High estimate (90th percentile)',
                    radioGroup: 'single'
                }]
            }, {
                label: ' High emissions scenario',
                children: [{
                    layer: R_HZZ_CV28,
                    label: ' Low estimate (10th percentile)',
                    radioGroup: 'single'
                }, {
                    layer: R_HZZ_CV29,
                    label: ' Central estimate (50th percentile)',
                    radioGroup: 'single'
                }, {
                    layer: R_HZZ_CV30,
                    label: ' High estimate (90th percentile)',
                    radioGroup: 'single'
                }]
            }]
        }]
    }]
}, {
    label: ' Heat exposure (2011) <a href="javascript:void(0);" data-href="info17/sheet10.html" class="openPopup"><i class="fas fa-info-circle"></i></a><br>',
    collapsed: true,
    children: [{
        label: "Mean summer maximum temperature 2050s",
        children: [{
            label: "Medium emissions scenario",
            children: [{
                layer: AbsM10Day,
                label: ' Low estimate (10th percentile)',
                radioGroup: 'single'
            }, {
                layer: AbsM50Day,
                label: ' Central estimate (50th percentile)',
                radioGroup: 'single'
            }, {
                layer: AbsM90Day,
                label: ' High estimate (90th percentile)',
                radioGroup: 'single'
            }]
        }, {
            label: "Low emissions scenario",
            children: [{
                layer: AbsL10Day,
                label: "Low estimate (10th percentile)",
                radioGroup: 'single'
            }, {
                layer: AbsL50Day,
                label: "Central estimate (50th percentile)",
                radioGroup: 'single'
            }, {
                layer: AbsL90Day,
                label: "High estimate (90th percentile)",
                radioGroup: 'single'
            }]
        }, {
            label: "High emissions scenario",
            children: [{
                layer: AbsH10Day,
                label: "Low estimate (10th percentile)",
                radioGroup: 'single'
            }, {
                layer: AbsH50Day,
                label: "Central estimate (50th percentile)",
                radioGroup: 'single'
            }, {
                layer: AbsH90Day,
                label: "High estimate (90th percentile)",
                radioGroup: 'single'
            }]
        }]
    }, {
        label: "Change in mean summer maximum temperature baseline to 2050s",
        children: [{
            label: "Medium emissions scenario",
            children: [{
                layer: ChM10Day,
                label: "Low estimate (10th percentile)",
                radioGroup: 'single'
            }, {
                layer: ChM50Day,
                label: "Central estimate (50th percentile) ",
                radioGroup: 'single'
            }, {
                layer: ChM90Day,
                label: "High estimate (90th percentile)",
                radioGroup: 'single'
            }]
        }, {
            label: "Low emissions scenario",
            children: [{
                layer: ChL10Day,
                label: "Low estimate (10th percentile)",
                radioGroup: 'single'
            }, {
                layer: ChL50Day,
                label: "Central estimate (50th percentile)",
                radioGroup: 'single'
            }, {
                layer: ChL90Day,
                label: "High estimate (90th percentile)",
                radioGroup: 'single'
            }]
        }, {
            label: "High emissions scenario",
            children: [{
                layer: ChH10Day,
                label: "Low estimate (10th percentile)",
                radioGroup: 'single'
            }, {
                layer: ChH50Day,
                label: "Central estimate (50th percentile)",
                radioGroup: 'single'
            }, {
                layer: ChH90Day,
                label: "High estimate (90th percentile)",
                radioGroup: 'single'
            }]
        }]
    }, {
        label: "Change in the temperature of the warmest day baseline to 2050s",
        children: [{
            label: "Medium emissions scenario",
            children: [{
                layer: ChM10WD,
                label: "Low estimate (10th percentile)",
                radioGroup: 'single'
            }, {
                layer: ChM50WD,
                label: "Central estimate (50th percentile) ",
                radioGroup: 'single'
            }, {
                layer: ChM90WD,
                label: "High estimate (90th percentile)",
                radioGroup: 'single'
            }]
        }, {
            label: "Low  emissions scenario",
            children: [{
                layer: ChL10WD,
                label: "Low estimate (10th percentile)",
                radioGroup: 'single'
            }, {
                layer: ChL50WD,
                label: "Central estimate (50th percentile)",
                radioGroup: 'single'
            }, {
                layer: ChL90WD,
                label: "High estimate (90th percentile)",
                radioGroup: 'single'
            }]
        }, {
            label: "High emissions scenario",
            children: [{
                layer: ChH10WD,
                label: "Low estimate (10th percentile)",
                radioGroup: 'single'
            }, {
                layer: ChH50WD,
                label: "Central estimate (50th percentile)",
                radioGroup: 'single'
            }, {
                layer: ChH90WD,
                label: "High estimate (90th percentile)",
                radioGroup: 'single'
            }]
        }]
    }, {
        label: "Change in temperature of the warmest night baseline to 2050s",
        children: [{
            label: "Medium emissions scenario",
            children: [{
                layer: ChM10WN,
                label: "Low estimate (10th percentile)",
                radioGroup: 'single'
            }, {
                layer: ChM50WN,
                label: "Central estimate (50th percentile) ",
                radioGroup: 'single'
            }, {
                layer: ChM90WN,
                label: "High estimate (90th percentile)",
                radioGroup: 'single'
            }]
        }, {
            label: "Low emissions scenario",
            children: [{
                layer: ChL10WN,
                label: "Low estimate (10th percentile)",
                radioGroup: 'single'
            }, {
                layer: ChL50WN,
                label: "Central estimate (50th percentile)",
                radioGroup: 'single'
            }, {
                layer: ChL90WN,
                label: "High estimate (90th percentile)",
                radioGroup: 'single'
            }]
        }, {
            label: "High emissions scenario",
            children: [{
                layer: ChH10WN,
                label: "Low estimate (10th percentile)",
                radioGroup: 'single'
            }, {
                layer: ChH50WN,
                label: "Central estimate (50th percentile)",
                radioGroup: 'single'
            }, {
                layer: ChH90WN,
                label: "High estimate (90th percentile)",
                radioGroup: 'single'
            }]
        }]
    }]
}, {
    label: ' Heat socio-spatial vulnerability (2011) <a href="javascript:void(0);" data-href="info17/sheet15.html" class="openPopup"><i class="fas' +
        ' fa-info-circle"></i></a><br>',
    collapsed: true,
    children: [{
        layer: ZH_VULN_IN,
        label: ' Social Heat Vulnerability Index <a href="javascript:void(0);" data-href="info17/sheet15.html" class="openPopup"><i class="fas' +
            ' fa-info-circle"></i></a>',
        radioGroup: 'single'
    }, {
        label: ' Sensitivity <a href="javascript:void(0);" data-href="info17/sheet16.html" class="openPopup"><i class="fas fa-info-circle"></i></a>',
        collapsed: true,
        children: [{
            layer: SENS_IND,
            label: ' Sensitivity index',
            radioGroup: 'single'
        }, {
            label: ' Age',
            children: [{
                layer: under5Heat,
                label: ' Young children (% people under 5 years)',
                radioGroup: 'single'
            }, {
                layer: over75Heat,
                label: ' Older people (% people over 75 years)',
                radioGroup: 'single'
            }]
        }, {
            label: ' Health',
            children: [{
                layer: ill_d2dHeat,
                label: ' People in ill-health (% people whose day-to-day activities are limited)',
                radioGroup: 'single'
            }, {
                layer: lltiHeat,
                label: ' Households containing at least one person in ill-health (%)',
                radioGroup: 'single'
            }]
        }]
    }, {
        label: ' Enhanced Exposure',
        collapsed: true,
        children: [{
            layer: exposureHeat,
            label: ' Enhanced exposure to heat index',
            radioGroup: 'single'
        }]
    }, {
        label: ' Physical Environment',
        collapsed: true,
        children: [{
            layer: builtup,
            label: ' Built up area (% not greenspace)',
            radioGroup: 'single'
        }, {
            layer: nogarden,
            label: ' Lack of domestic gardens (area of building/domestic gardens)',
            radioGroup: 'single'
        }]
    }, {
        label: ' Physical Geography',
        collapsed: true,
        children: [{
            layer: notBlue,
            label: ' Built up area (% area not blue space)',
            radioGroup: 'single'
        }, {
            layer: coast,
            label: ' Distance to coast (km)',
            radioGroup: 'single'
        }, {
            layer: elevation,
            label: ' Elevation (m)',
            radioGroup: 'single'
        }]
    }, {
        label: ' Housing Characteristics',
        collapsed: true,
        children: [{
            layer: highRise,
            label: ' High rise homes (% households with lowest floor 5th floor or above)',
            radioGroup: 'single'
        }]
    }]
}, {
    label: ' Ability to Prepare',
    collapsed: true,
    children: [{
        layer: AbilityToPrepareIndex,
        label: ' Inability to Prepare index',
        radioGroup: 'single'
    }, {
        label: ' Income',
        collapsed: true,
        children: [{
            layer: unemployedHeat,
            label: ' Unemployment (% working population unemployed)',
            radioGroup: 'single'
        }, {
            layer: lowIncomeOcc,
            label: ' Low income occupations (% in routine or semi-routine occupations)',
            radioGroup: 'single'
        }, {
            layer: LTunemployment,
            label: ' Long-term unemployed (% who are LTU or who have never worked)',
            radioGroup: 'single'
        }, {
            layer: depChildUnempHeat,
            label: ' Households with dependent children and no adults in employment (%)',
            radioGroup: 'single'
        }, {
            layer: income_weekly,
            label: ' Weekly household income estimate (&pound;)',
            radioGroup: 'single'
        }, {
            layer: pensionerHH,
            label: ' All pensioner households (%)',
            radioGroup: 'single'
        }]
    }, {
        label: ' Tenure',
        collapsed: true,
        children: [{
            layer: socRent,
            label: ' Social renters (% Households renting from social or Council landlords)',
            radioGroup: 'single'
        }, {
            layer: priRent,
            label: ' Private renters (% Households)',
            radioGroup: 'single'
        }]
    }, {
        label: ' Information Use (Language)',
        collapsed: true,
        children: [{
            layer: outsideUK,
            label: ' Born outside UK/Ireland (%)',
            radioGroup: 'single'
        }, {
            layer: arrivalsUKheat,
            label: ' Recent arrivals to UK (% arrived in UK less than a year ago)',
            radioGroup: 'single'
        }]
    }]
}, {
    label: ' Ability to Respond',
    collapsed: true,
    children: [{
        layer: AbilityRespondIndexHeat,
        label: ' Inability to Respond index',
        radioGroup: 'single'
    }, {
        label: ' Income',
        collapsed: true,
        children: [{
            layer: unemployedHeat,
            label: ' Unemployment (% working population unemployed)',
            radioGroup: 'single'
        }, {
            layer: lowIncomeOcc,
            label: ' Low income occupations (% in routine or semi-routine occupations)',
            radioGroup: 'single'
        }, {
            layer: LTunemployment,
            label: ' Long-term unemployed (% who are LTU or who have never worked)',
            radioGroup: 'single'
        }, {
            layer: depChildUnempHeat,
            label: ' Households with dependent children and no adults in employment (%)',
            radioGroup: 'single'
        }, {
            layer: income_weekly,
            label: ' Weekly household income estimate (&pound;)',
            radioGroup: 'single'
        }, {
            layer: pensionerHH,
            label: ' All pensioner households (%)',
            radioGroup: 'single'
        }]
    }, {
        label: ' Information Use (Language)',
        collapsed: true,
        children: [{
            layer: outsideUK,
            label: ' Born outside UK/Ireland (%)',
            radioGroup: 'single'
        }, {
            layer: arrivalsUKheat,
            label: ' Recent arrivals to UK (% arrived in UK less than a year ago)',
            radioGroup: 'single'
        }]
    }, {
        label: ' Social Networks',
        collapsed: true,
        children: [{
            layer: singlePen,
            label: ' Single pensioner households (%)',
            radioGroup: 'single'
        }, {
            layer: loneParent,
            label: ' Lone parents with dependent children (% households)',
            radioGroup: 'single'
        }, {
            layer: noCarer,
            label: ' Lack of carers (% people not providing unpaid care)',
            radioGroup: 'single'
        }]
    }, {
        label: ' Mobility',
        collapsed: true,
        children: [{
            layer: ill_d2dHeat,
            label: ' Disability (% people whose day-to-day activities are limited a lot)',
            radioGroup: 'single'
        }, {
            layer: noCar,
            label: ' Lack of private transport (% households with no car or van)',
            radioGroup: 'single'
        }]
    }, {
        label: ' Crime',
        collapsed: true,
        children: [{
            layer: crimeIMDHeat,
            label: ' Index of Multiple Deprivation crime score',
            radioGroup: 'single'
        }]
    }, {
        label: ' General Accessibility',
        collapsed: true,
        children: [{
            layer: roadDensity,
            label: ' Low road density (% area not road)',
            radioGroup: 'single'
        }]
    }, {
        label: ' General infrastructure',
        collapsed: true,
        children: [{
            layer: retailDensity,
            label: ' Density of retail units',
            radioGroup: 'single'
        }, {
            layer: enterprises,
            label: ' % change in the number of enterprises',
            radioGroup: 'single'
        }]
    }]
}, {
    label: ' Ability to Recover',
    collapsed: true,
    children: [{
        layer: ZF_REC_IND,
        label: ' Inability to Recover index',
        radioGroup: 'single'
    }, {
        label: ' Information Use (Language)',
        collapsed: true,
        children: [{
            layer: outsideUK,
            label: ' Born outside UK/Ireland (%)',
            radioGroup: 'single'
        }, {
            layer: arrivalsUKheat,
            label: ' Recent arrivals to UK (% arrived in UK less than a year ago)',
            radioGroup: 'single'
        }]
    }, {
        label: ' Social Networks',
        collapsed: true,
        children: [{
            layer: singlePen,
            label: ' Single pensioner households (%)',
            radioGroup: 'single'
        }, {
            layer: loneParent,
            label: ' Lone parents with dependent children (% households)',
            radioGroup: 'single'
        }, {
            layer: noCarer,
            label: ' Lack of carers (% people not providing unpaid care)',
            radioGroup: 'single'
        }]
    }, {
        //layer: n_06_05_03,
        label: ' Mobility',
        collapsed: true,
        children: [{
            layer: ill_d2dHeat,
            label: ' Disability (% people whose day-to-day activities are limited a lot)',
            radioGroup: 'single'
        }, {
            layer: noCar,
            label: ' Lack of private transport (% households with no car or van)',
            radioGroup: 'single'
        }, {
            layer: workAway,
            label: ' Working away from home (% not working at home)',
            radioGroup: 'single'
        }]
    }, {
        label: ' Service Areas',
        collapsed: true,
        children: [{
            layer: ttGP,
            label: ' Travel time to nearest GP by walk/public transport',
            radioGroup: 'single'
        }, {
            layer: min15GP,
            label: ' % of at risk population (no car) outside of 15 minutes by walk/public transport to nearest GP',
            radioGroup: 'single'
        }, {
            layer: less15GP,
            label: ' Number of GPs within 15 minutes by walk/public transport',
            radioGroup: 'single'
        }, {
            layer: less15GPcar,
            label: ' Number of GPs within 15 minutes by car',
            radioGroup: 'single'
        }, {
            layer: walkHosp,
            label: ' Travel time to nearest hospital by walk/public transport',
            radioGroup: 'single'
        }, {
            layer: carHosp,
            label: ' Travel time to nearest hospital by car',
            radioGroup: 'single'
        }, {
            layer: risk30WalkHosp,
            label: ' % of at risk population outside of 30 minutes by walk/PT to nearest hospital',
            radioGroup: 'single'
        }, {
            layer: less30minHospWalk,
            label: ' Number of hospitals within 30 minutes by walk/public transport',
            radioGroup: 'single'
        }, {
            layer: less30minHospCar,
            label: ' Number of hospitals within 30 minutes by car',
            radioGroup: 'single'
        }]
    }]
}];

var fuelMaps = [{
    label: ' 2012 (England)',
    collapsed: false,
    children: [{
        label: ' LA Low Income High Cost definition <a href="javascript:void(0);" data-href="info17/FuelPovertyLA.html" class="openPopup"><i class="fas fa-info-circle"></i></a>',
        radioGroup: 'single',
        layer: LA_FP_2012
    }, {
        label: ' LA 10% definition <a href="javascript:void(0);" data-href="info17/FuelPovertyLA10.html" class="openPopup"><i class="fas fa-info-circle"></i></a>',
        radioGroup: 'single',
        layer: LA_FP_2012_10pc
    }, {
        label: ' LSOA Low Income High Cost definition <a href="javascript:void(0);" data-href="info17/FuelPovertyLSOA.html" class="openPopup"><i class="fas fa-info-circle"></i></a>',
        radioGroup: 'single',
        layer: LSOA_FP_2012
    }, {
        label: ' LSOA 10% definition <a href="javascript:void(0);" data-href="info17/FuelPovertyLSOA10.html" class="openPopup"><i class="fas fa-info-circle"></i></a>',
        radioGroup: 'single',
        layer: LSOA_FP_2012_10pc
    }]
}, {
    label: ' 2014 (England)',
    collapsed: false,
    children: [{
        label: ' LA Low Income High Cost definition <a href="javascript:void(0);" data-href="info17/FuelPovertyLA_2014.html" class="openPopup"><i class="fas fa-info-circle"></i></a>',
        radioGroup: 'single',
        layer: LA_FP_2014
    }, {
        label: ' LSOA Low Income High Cost definition <a href="javascript:void(0);" data-href="info17/FuelPovertyLSOA_2014.html" class="openPopup"><i class="fas fa-info-circle"></i></a>',
        radioGroup: 'single',
        layer: LSOA_FP_2014
    }]
    // insert next year of fuel poverty maps here
}];

var adminMaps = [{
    label: ' Wards',
    layer: wards
}, {
    label: ' Districts and Unitary authorities',
    layer: UK_districts
}, {
    label: ' Built-up areas - England & Wales (2011)',
    layer: urban
}, {
    label: ' Built-up areas - Scotland (2016)',
    layer: scot_urban
}, {
    label: ' Parliamentary constituencies',
    layer: westminster
}];
