// last updated 9/03/18 with 2014 fuel poverty data
// Richard Kingston
var treeData = {
    plugins: ["checkbox", "themes", "state", "search", "wholerow"],
    core: {
        themes: {
            variant: "stripes",
            variant: "small"
        },
        search: {
            show_only_matches: true,
            fuzzy: false,
            search_leaves_only: true
        },
        data: [{
            id: "f",
            text: "Flooding",
            children: [{
                id: "n-1",
                text: "Neighbourhood Flood Vulnerability Index (NFVI)",
                children: [{
                    id: "n-1a",
                    text: "Neighbourhood Flood Vulnerability Index",
                    icon: "assets/img/map16_pink.png"
                }, {
                    id: "n-1-1",
                    text: "Susceptibility",
                    children: [{
                        id: "n-1-1a",
                        text: "Susceptibility",
                        icon: "assets/img/map16_pink.png"
                    }, {
                        id: "n-1-1-1",
                        text: "Age",
                        children: [{
                            id: "n-1-1-1a",
                            text: "Vulnerability due to age",
                            icon: "assets/img/map16_pink.png"
                        }, {
                            id: "n-1-1-1-1",
                            text: "Young children (% people under 5 years)",
                            icon: "assets/img/map16.png"
                        }, {
                            id: "n-1-1-1-2",
                            text: "Older people (% people over 75 years)",
                            icon: "assets/img/map16.png"
                        }]
                    }, {
                        id: "n-1-1-2",
                        text: "Health",
                        children: [{
                            id: "n-1-1-2a",
                            text: "Vulnerability due to health",
                            icon: "assets/img/map16_pink.png"
                        }, {
                            id: "n-1-1-2-1",
                            text: "Disability / people in ill-health (% people whose day-to-day activities are limited)",
                            icon: "assets/img/map16.png"
                        }, {
                            id: "n-1-1-2-2",
                            text: "% households with at least one person with long term limiting illness",
                            icon: "assets/img/map16.png"
                        }]
                    }]
                }, {
                    id: "n-1-2",
                    text: "Inability to prepare",
                    children: [{
                        id: "n-1-2a",
                        text: "Inability to prepare",
                        icon: "assets/img/map16_pink.png"
                    }, {
                        id: "n-1-2-1",
                        text: "Income ",
                        children: [{
                            id: "n-1-2-1a",
                            text: "Vulnerability due to income",
                            icon: "assets/img/map16_pink.png"
                        }, {
                            id: "n-1-2-1-1",
                            text: "% Unemployed",
                            icon: "assets/img/map16.png"
                        }, {
                            id: "n-1-2-1-2",
                            text: "Long-term unemployed (% who are LTU or who have never worked)",
                            icon: "assets/img/map16.png"
                        }, {
                            id: "n-1-2-1-3",
                            text: "Low income occupations (% in routine or semi- routine occupations)",
                            icon: "assets/img/map16.png"
                        }, {
                            id: "n-1-2-1-4",
                            text: "Households with dependent children and no adults in employment (%)",
                            icon: "assets/img/map16.png"
                        }, {
                            id: "n-1-2-1-5",
                            text: "Income deprivation index",
                            icon: "assets/img/map16_pink.png"
                        }]
                    }, {
                        id: "n-1-2-2",
                        text: "Information use",
                        children: [{
                            id: "n-1-2-2a",
                            text: "Vulnerability due to issues of information use",
                            icon: "assets/img/map16_pink.png"
                        }, {
                            id: "n-1-2-2-1",
                            text: "Recent arrivals to UK (% people with <1 yr residency coming from outside UK)",
                            icon: "assets/img/map16.png"
                        }, {
                            id: "n-1-2-2-2",
                            text: "Level of proficiency in English (%)",
                            icon: "assets/img/map16.png"
                        }]
                    }, {
                        id: "n-1-2-3",
                        text: "Local knowledge",
                        children: [{
                            id: "n-1-2-3a",
                            text: "Vulnerability due to lack of local knowledge",
                            icon: "assets/img/map16_pink.png"
                        }, {
                            id: "n-1-2-3-1",
                            text: "New migrants from outside local area (%)",
                            icon: "assets/img/map16.png"
                        }]
                    }, {
                        id: "n-1-2-4",
                        text: "Property tenure",
                        children: [{
                            id: "n-1-2-4a",
                            text: "Vulnerability due to property tenure",
                            icon: "assets/img/map16_pink.png"
                        }, {
                            id: "n-1-2-4-1",
                            text: "Private renters (% Households)",
                            icon: "assets/img/map16.png"
                        }, {
                            id: "n-1-2-4-2",
                            text: "Social renters (% Households renting from Social or Council landlords)",
                            icon: "assets/img/map16.png"
                        }]
                        // }]
                    }]
                }, {
                    id: "n-1-3",
                    text: "Inability to respond",
                    children: [{
                        id: "n-1-3a",
                        text: "Inability to respond",
                        icon: "assets/img/map16_pink.png"
                    }, {
                        id: "n-1-3-1",
                        text: "Income ",
                        children: [{
                            id: "n-1-3-1a",
                            text: "Vulnerability due to income",
                            icon: "assets/img/map16_pink.png"
                        }, {
                            id: "n-1-3-1-1",
                            text: "% Unemployed",
                            icon: "assets/img/map16.png"
                        }, {
                            id: "n-1-3-1-2",
                            text: "Long-term unemployed (% who are LTU or who have never worked)",
                            icon: "assets/img/map16.png"
                        }, {
                            id: "n-1-3-1-3",
                            text: "Low income occupations (% in routine or semi- routine occupations)",
                            icon: "assets/img/map16.png"
                        }, {
                            id: "n-1-3-1-4",
                            text: "Households with dependent children and no adults in employment (%)",
                            icon: "assets/img/map16.png"
                        }, {
                            id: "n-1-3-1-5",
                            text: "Income deprivation index",
                            icon: "assets/img/map16_pink.png"
                        }]
                    }, {
                        id: "n-1-3-2",
                        text: "Information use",
                        children: [{
                            id: "n-1-3-2a",
                            text: "Vulnerability due to issues of information use",
                            icon: "assets/img/map16_pink.png"
                        }, {
                            id: "n-1-3-2-1",
                            text: "Recent arrivals to UK (% people with <1 yr residency coming from outside UK)",
                            icon: "assets/img/map16.png"
                        }, {
                            id: "n-1-3-2-2",
                            text: "Level of proficiency in English (%)",
                            icon: "assets/img/map16.png"
                        }]
                    }, {
                        id: "n-1-3-3",
                        text: "Local knowledge",
                        children: [{
                            id: "n-1-3-3a",
                            text: "Vulnerability due to lack of local knowledge",
                            icon: "assets/img/map16_pink.png"
                        }, {
                            id: "n-1-3-3-1",
                            text: "New migrants from outside local area (%)",
                            icon: "assets/img/map16.png"
                        }]
                    }, {
                        id: "n-1-3-4",
                        text: "Physical mobility",
                        children: [{
                            id: "n-1-3-4a",
                            text: "Vulnerability due to lack of physical mobility",
                            icon: "assets/img/map16_pink.png"
                        }, {
                            id: "n-1-3-4-1",
                            text: "High levels of disability (% of population who are disabled)",
                            icon: "assets/img/map16.png"
                        }, {
                            id: "n-1-3-4-2",
                            text: "% people living in medical and care establishments",
                            icon: "assets/img/map16.png"
                        }, {
                            id: "n-1-3-4-3",
                            text: "Lack of private transport (% households with no car or van)",
                            icon: "assets/img/map16.png"
                        }]
                    }, {
                        id: "n-1-3-5",
                        text: "Crime",
                        children: [{
                            id: "n-1-3-5a",
                            text: "Vulnerability due to crime",
                            icon: "assets/img/map16_pink.png"
                        }, {
                            id: "n-1-3-5-1",
                            text: "Crime index (IMD)",
                            icon: "assets/img/map16.png"
                        }]
                    }]
                }, {
                    id: "n-1-4",
                    text: "Inability to recover",
                    children: [{
                        id: "n-1-4a",
                        text: "Inability to recover",
                        icon: "assets/img/map16_pink.png"
                    }, {
                        id: "n-1-4-1",
                        text: "Income",
                        children: [{
                            id: "n-1-4-1a",
                            text: "Vulnerability due to income",
                            icon: "assets/img/map16_pink.png"
                        }, {
                            id: "n-1-4-1-1",
                            text: "% Unemployed",
                            icon: "assets/img/map16.png"
                        }, {
                            id: "n-1-4-1-2",
                            text: "Long-term unemployed (% who are LTU or who have never worked)",
                            icon: "assets/img/map16.png"
                        }, {
                            id: "n-1-4-1-3",
                            text: "Low income occupations (% in routine or semi- routine occupations)",
                            icon: "assets/img/map16.png"
                        }, {
                            id: "n-1-4-1-4",
                            text: "Households with dependent children and no adults in employment (%)",
                            icon: "assets/img/map16.png"
                        }, {
                            id: "n-1-4-1-5",
                            text: "Income deprivation index",
                            icon: "assets/img/map16_pink.png"
                        }]
                    }, {
                        id: "n-1-4-2",
                        text: "Information use",
                        children: [{
                            id: "n-1-4-2a",
                            text: "Vulnerability due to issues of information use",
                            icon: "assets/img/map16_pink.png"
                        }, {
                            id: "n-1-4-2-1",
                            text: "Recent arrivals to UK (% people with <1 yr residency coming from outside UK)",
                            icon: "assets/img/map16.png"
                        }, {
                            id: "n-1-4-2-2",
                            text: "Level of proficiency in English (%)",
                            icon: "assets/img/map16.png"
                        }]
                    }, {
                        id: "n-1-4-3",
                        text: "Physical mobility",
                        children: [{
                            id: "n-1-4-3a",
                            text: "Vulnerability due to physical mobility",
                            icon: "assets/img/map16_pink.png"
                        }, {
                            id: "n-1-4-3-1",
                            text: "High levels of disability (% of population who are disabled)",
                            icon: "assets/img/map16.png"
                        }, {
                            id: "n-1-4-3-2",
                            text: "% people living in medical and care establishments",
                            icon: "assets/img/map16.png"
                        }, {
                            id: "n-1-4-3-3",
                            text: "Lack of private transport (% households with no car or van)",
                            icon: "assets/img/map16.png"
                        }]
                    }]
                }, {
                    id: "n-1-5",
                    text: "Community support",
                    children: [{
                        id: "n-1-5a",
                        text: "Lack of community support",
                        icon: "assets/img/map16_pink.png"
                    }, {
                        id: "n-1-5-1",
                        text: "Housing characteristics",
                        children: [{
                            id: "n-1-5-1a",
                            text: "Vulnerability due to housing characteristics",
                            icon: "assets/img/map16_pink.png"
                        }, {
                            id: "n-1-5-1-1",
                            text: "% caravan or other mobile or temporary structures in all households",
                            icon: "assets/img/map16.png"
                        }]
                    }, {
                        id: "n-1-5-2",
                        text: "Direct flood experience",
                        children: [{
                            id: "n-1-5-2-1",
                            text: "Number of properties within historical flood boundary",
                            icon: "assets/img/map16_pink.png"
                        }]
                    }, {
                        id: "n-1-5-3",
                        text: "Service availability",
                        children: [{
                            id: "n-1-5-3a",
                            text: "Vulnerability due to exposure of services to flooding",
                            icon: "assets/img/map16_pink.png"
                        }, {
                            id: "n-1-5-3-1",
                            text: "% of emergency services exposed to flooding",
                            icon: "assets/img/map16.png"
                        }, {
                            id: "n-1-5-3-2",
                            text: "% no. of care homes exposed to flooding",
                            icon: "assets/img/map16.png"
                        }, {
                            id: "n-1-5-3-3",
                            text: "% no. of GP surgeries exposed to flooding",
                            icon: "assets/img/map16.png"
                        }, {
                            id: "n-1-5-3-4",
                            text: "% no. of schools exposed to flooding",
                            icon: "assets/img/map16.png"
                        }]
                    }, {
                        id: "n-1-5-4",
                        text: "Social networks",
                        children: [{
                            id: "n-1-5-4a",
                            text: "Vulnerability due to lack of social networks",
                            icon: "assets/img/map16_pink.png"
                        }, {
                            id: "n-1-5-4-1",
                            text: "% single-pensioner households",
                            icon: "assets/img/map16.png"
                        }, {
                            id: "n-1-5-4-2",
                            text: "% lone-parent households with dependent children",
                            icon: "assets/img/map16.png"
                        }, {
                            id: "n-1-5-4-3",
                            text: "% children of primary school age (4-11) in the population",
                            icon: "assets/img/map16.png"
                        }]
                    }]
                }]
            }, {
                id: "n-2",
                text: "Social Flood Risk Index (SFRI)",
                children: [{
                    id: "n-2-1",
                    text: "River & Coastal",
                    children: [{
                        id: "n-2-1-1",
                        text: "Group",
                        children: [{
                            id: "n-2-1-1-1",
                            text: "Present Day",
                            icon: "assets/img/map16.png"
                        }, {
                            id: "n-2-1-1-2",
                            text: "Future 2050s 2 degrees scenario",
                            icon: "assets/img/map16.png"
                        }, {
                            id: "n-2-1-1-3",
                            text: "Future 2050s 4 degrees scenario",
                            icon: "assets/img/map16.png"
                        }]
                    }, {
                        id: "n-2-1-2",
                        text: "Individual",
                        children: [{
                            id: "n-2-1-2-1",
                            text: "Present Day",
                            icon: "assets/img/map16.png"
                        }, {
                            id: "n-2-1-2-2",
                            text: "Future 2050s 2 degrees scenario",
                            icon: "assets/img/map16.png"
                        }, {
                            id: "n-2-1-2-3",
                            text: "Future 2050s 4 degrees scenario",
                            icon: "assets/img/map16.png"
                        }]
                    }]
                }, {
                    id: "n-2-2",
                    text: "Surface water",
                    children: [{
                        id: "n-2-2-1",
                        text: "Group",
                        children: [{
                            id: "n-2-2-1-1",
                            text: "Present Day",
                            icon: "assets/img/map16.png"
                        }, {
                            id: "n-2-2-1-2",
                            text: "Future 2050s 2 degrees scenario",
                            icon: "assets/img/map16.png"
                        }, {
                            id: "n-2-2-1-3",
                            text: "Future 2050s 4 degrees scenario",
                            icon: "assets/img/map16.png"
                        }]
                    }, {
                        id: "n-2-2-2",
                        text: "Individual",
                        children: [{
                            id: "n-2-2-2-1",
                            text: "Present Day",
                            icon: "assets/img/map16.png"
                        }, {
                            id: "n-2-2-2-2",
                            text: "Future 2050s 2 degrees scenario",
                            icon: "assets/img/map16.png"
                        }, {
                            id: "n-2-2-2-3",
                            text: "Future 2050s 4 degrees scenario",
                            icon: "assets/img/map16.png"
                        }]
                    }]
                }]
            }]
        }, {
            id: "n-3",
            text:
                "Government Agency Flood Maps",
            children:
                [{
                    id: "n-3a",
                    text: "Environment Agency",
                    children: [{
                        id: "n-3a-01",
                        text: "Flood Alert Areas",
                        icon: "assets/img/map16.png"
                    }, {
                        id: "n-3a-02",
                        text: "Areas Benefiting from Flood Defences",
                        icon: "assets/img/map16.png"
                    }, {
                        id: "n-3a-03",
                        text: "Flood Storage Areas",
                        icon: "assets/img/map16.png"
                    }, {
                        id: "n-3a-04",
                        text: "Flood Zone 2",
                        icon: "assets/img/map16.png"
                    }, {
                        id: "n-3a-05",
                        text: "Flood Zone 3",
                        icon: "assets/img/map16.png"
                    }, {
                        id: "n-3a-06",
                        text: "Spatial Flood Defences",
                        icon: "assets/img/map16.png"
                    }, /*{
                        id: "n-3a-07",
                        text: "Flood Risk Areas",
                        icon: "assets/img/map16.png"
                    },*/ {
                        id: "n-3a-08",
                        text: "Flood Warning Areas",
                        icon: "assets/img/map16.png"
                    }, {
                        id: "n-3a-09",
                        text: "Historic Flood Map",
                        icon: "assets/img/map16.png"
                    }, /*{
                        id: "n-3a-10",
                        text: "Recorded Flood Outlines",
                        icon: "assets/img/map16.png"
                    }, */{
                        id: "n-3a-11",
                        text: "Risk of Flooding from Rivers and Sea",
                        icon: "assets/img/map16.png"
                    }, {
                        id: "n-3a-12",
                        text: "Saltmarsh Extents",
                        icon: "assets/img/map16.png"
                    }]
                }, {
                    id: "n-3b",
                    text: "SEPA - maps not available",
                    /*children: [{
                        id: "n-3b-01",
                        text: "SEPA does not provide access",
                        icon: "assets/img/map16.png"
                    }, {
                        id: "n-3b-02",
                        text: "Surface Water Flooding",
                        icon: "assets/img/map16.png"
                    }, {
                        id: "n-3b-03",
                        text: "Coastal Flooding",
                        icon: "assets/img/map16.png"
                    }, {
                        id: "n-3b-04",
                        text: "Potentially Vulnerable Areas",
                        icon: "assets/img/map16.png"
                    }]*/
                }, {
                    id: "n-3c",
                    text: "Natural Resources Wales",
                    children: [{
                        id: "n-3c-01",
                        text: "Flood Alert Areas",
                        icon: "assets/img/map16.png"
                    }, {
                        id: "n-3c-02",
                        text: "Areas Benefiting from Flood Defences",
                        icon: "assets/img/map16.png"
                    }, {
                        id: "n-3c-03",
                        text: "Flood Storage Areas",
                        icon: "assets/img/map16.png"
                    }, {
                        id: "n-3c-04",
                        text: "Flood Zone 2",
                        icon: "assets/img/map16.png"
                    }, {
                        id: "n-3c-05",
                        text: "Flood Zone 3",
                        icon: "assets/img/map16.png"
                    }, {
                        id: "n-3c-06",
                        text: "Spatial Flood Defences",
                        icon: "assets/img/map16.png"
                    }, {
                        id: "n-3c-07",
                        text: "Flood Risk Areas",
                        icon: "assets/img/map16.png"
                    }, {
                        id: "n-3c-08",
                        text: "Flood Warning Areas",
                        icon: "assets/img/map16.png"
                    }, {
                        id: "n-3c-09",
                        text: "Historic Flood Map",
                        icon: "assets/img/map16.png"
                    }, /*{
                        id: "n-3c-10",
                        text: "Recorded Flood Outlines",
                        icon: "assets/img/map16.png"
                    },*/ {
                        id: "n-3c-11",
                        text: "Risk of Flooding from Rivers and Sea",
                        icon: "assets/img/map16.png"
                    }, {
                        id: "n-3c-12",
                        text: "Saltmarsh Extents",
                        icon: "assets/img/map16.png"
                    }]
                }]
        }, {
            id: "n-4",
            text:
                "Heat",
            children:
                [{
                    id: "n-04",
                    text:
                        "Heat disadvantage (2011)",
                    children:
                        [{
                            id: "n-04-01",
                            text: "Population weighted vulnerability",
                            children: [{
                                id: "n-04-01-01",
                                text: "Population weighted vulnerability and mean summer maximum temperature 2050s",
                                children: [{
                                    id: "n-04-01-01-01",
                                    text: "Medium emissions scenario",
                                    children: [{
                                        id: "n-04-01-01-01-01",
                                        text: "Low estimate (10th percentile)",
                                        icon: "assets/img/map16.png"
                                    }, {
                                        id: "n-04-01-01-01-02",
                                        text: "Central estimate (50th percentile) RECOMMENDED",
                                        icon: "assets/img/map16.png"
                                    }, {
                                        id: "n-04-01-01-01-03",
                                        text: "High estimate (90th percentile)",
                                        icon: "assets/img/map16.png"
                                    }]
                                }, {
                                    id: "n-04-01-01-02",
                                    text: "Low  emissions scenario",
                                    children: [{
                                        id: "n-04-01-01-02-01",
                                        text: "Low estimate (10th percentile)",
                                        icon: "assets/img/map16.png"
                                    }, {
                                        id: "n-04-01-01-02-02",
                                        text: "Central estimate (50th percentile)",
                                        icon: "assets/img/map16.png"
                                    }, {
                                        id: "n-04-01-01-02-03",
                                        text: "High estimate (90th percentile)",
                                        icon: "assets/img/map16.png"
                                    }]
                                }, {
                                    id: "n-04-01-01-03",
                                    text: "High emissions scenario",
                                    children: [{
                                        id: "n-04-01-01-03-01",
                                        text: "Low estimate (10th percentile)",
                                        icon: "assets/img/map16.png"
                                    }, {
                                        id: "n-04-01-01-03-02",
                                        text: "Central estimate (50th percentile)",
                                        icon: "assets/img/map16.png"
                                    }, {
                                        id: "n-04-01-01-03-03",
                                        text: "High estimate (90th percentile)",
                                        icon: "assets/img/map16.png"
                                    }]
                                }]
                            }, {
                                id: "n-04-01-02",
                                text: "Population weighted vulnerability and change in mean summer maximum temperature baseline to 2050s",
                                children: [{
                                    id: "n-04-01-02-01",
                                    text: "Medium emissions scenario",
                                    children: [{
                                        id: "n-04-01-02-01-01",
                                        text: "Low estimate (10th percentile)",
                                        icon: "assets/img/map16.png"
                                    }, {
                                        id: "n-04-01-02-01-02",
                                        text: "Central estimate (50th percentile) RECOMMENDED",
                                        icon: "assets/img/map16.png"
                                    }, {
                                        id: "n-04-01-02-01-03",
                                        text: "High estimate (90th percentile)",
                                        icon: "assets/img/map16.png"
                                    }]
                                }, {
                                    id: "n-04-01-02-02",
                                    text: "Low  emissions scenario",
                                    children: [{
                                        id: "n-04-01-02-02-01",
                                        text: "Low estimate (10th percentile)",
                                        icon: "assets/img/map16.png"
                                    }, {
                                        id: "n-04-01-02-02-02",
                                        text: "Central estimate (50th percentile)",
                                        icon: "assets/img/map16.png"
                                    }, {
                                        id: "n-04-01-02-02-03",
                                        text: "High estimate (90th percentile)",
                                        icon: "assets/img/map16.png"
                                    }]
                                }, {
                                    id: "n-04-01-02-03",
                                    text: "High emissions scenario",
                                    children: [{
                                        id: "n-04-01-02-03-01",
                                        text: "Low estimate (10th percentile)",
                                        icon: "assets/img/map16.png"
                                    }, {
                                        id: "n-04-01-02-03-02",
                                        text: "Central estimate (50th percentile)",
                                        icon: "assets/img/map16.png"
                                    }, {
                                        id: "n-04-01-02-03-03",
                                        text: "High estimate (90th percentile)",
                                        icon: "assets/img/map16.png"
                                    }]
                                }]
                            }, {
                                id: "n-04-01-03",
                                text: "Population weighted vulnerability and change in the temperature of the warmest day baseline to 2050s",
                                children: [{
                                    id: "n-04-01-03-01",
                                    text: "Medium emissions scenario",
                                    children: [{
                                        id: "n-04-01-03-01-01",
                                        text: "Low estimate (10th percentile)",
                                        icon: "assets/img/map16.png"
                                    }, {
                                        id: "n-04-01-03-01-02",
                                        text: "Central estimate (50th percentile) RECOMMENDED",
                                        icon: "assets/img/map16.png"
                                    }, {
                                        id: "n-04-01-03-01-03",
                                        text: "High estimate (90th percentile)",
                                        icon: "assets/img/map16.png"
                                    }]
                                }, {
                                    id: "n-04-01-03-02",
                                    text: "Low emissions scenario",
                                    children: [{
                                        id: "n-04-01-03-02-01",
                                        text: "Low estimate (10th percentile)",
                                        icon: "assets/img/map16.png"
                                    }, {
                                        id: "n-04-01-03-02-02",
                                        text: "Central estimate (50th percentile)",
                                        icon: "assets/img/map16.png"
                                    }, {
                                        id: "n-04-01-03-02-03",
                                        text: "High estimate (90th percentile)",
                                        icon: "assets/img/map16.png"
                                    }]
                                }, {
                                    id: "n-04-01-04-03",
                                    text: "High emissions scenario",
                                    children: [{
                                        id: "n-04-01-04-03-01",
                                        text: "Low estimate (10th percentile)",
                                        icon: "assets/img/map16.png"
                                    }, {
                                        id: "n-04-01-04-03-02",
                                        text: "Central estimate (50th percentile)",
                                        icon: "assets/img/map16.png"
                                    }, {
                                        id: "n-04-01-04-03-03",
                                        text: "High estimate (90th percentile)",
                                        icon: "assets/img/map16.png"
                                    }]
                                }]
                            }, {
                                id: "n-04-01-05",
                                text: "Population weighted vulnerability and change in the temperature of the warmest night baseline to 2050s",
                                children: [{
                                    id: "n-04-01-05-01",
                                    text: "Medium emissions scenario",
                                    children: [{
                                        id: "n-04-01-05-01-01",
                                        text: "Low estimate (10th percentile)",
                                        icon: "assets/img/map16.png"
                                    }, {
                                        id: "n-04-01-05-01-02",
                                        text: "Central estimate (50th percentile) RECOMMENDED",
                                        icon: "assets/img/map16.png"
                                    }, {
                                        id: "n-04-01-05-01-03",
                                        text: "High estimate (90th percentile)",
                                        icon: "assets/img/map16.png"
                                    }]
                                }, {
                                    id: "n-04-01-05-02",
                                    text: "Low emissions scenario",
                                    children: [{
                                        id: "n-04-01-05-02-01",
                                        text: "Low estimate (10th percentile)",
                                        icon: "assets/img/map16.png"
                                    }, {
                                        id: "n-04-01-05-02-02",
                                        text: "Central estimate (50th percentile)",
                                        icon: "assets/img/map16.png"
                                    }, {
                                        id: "n-04-01-05-02-03",
                                        text: "High estimate (90th percentile)",
                                        icon: "assets/img/map16.png"
                                    }]
                                }, {
                                    id: "n-04-01-05-03",
                                    text: "High emissions scenario",
                                    children: [{
                                        id: "n-04-01-05-03-01",
                                        text: "Low estimate (10th percentile)",
                                        icon: "assets/img/map16.png"
                                    }, {
                                        id: "n-04-01-05-03-02",
                                        text: "Central estimate (50th percentile)",
                                        icon: "assets/img/map16.png"
                                    }, {
                                        id: "n-04-01-05-03-03",
                                        text: "High estimate (90th percentile)",
                                        icon: "assets/img/map16.png"
                                    }]
                                }]
                            }]
                        }, {
                            id: "n-04-02",
                            text: "Average vulnerability",
                            children: [{
                                id: "n-04-02-01",
                                text: "Average vulnerability and mean summer maximum temperature 2050s",
                                children: [{
                                    id: "n-04-02-01-01",
                                    text: " Medium emissions scenario",
                                    children: [{
                                        id: "n-04-02-01-01-01",
                                        text: "Low estimate (10th percentile)",
                                        icon: "assets/img/map16.png"
                                    }, {
                                        id: "n-04-02-01-01-02",
                                        text: "Central estimate (50th percentile) RECOMMENDED",
                                        icon: "assets/img/map16.png"
                                    }, {
                                        id: "n-04-02-01-01-03",
                                        text: "High estimate (90th percentile)",
                                        icon: "assets/img/map16.png"
                                    }]
                                }, {
                                    id: "n-04-02-01-02",
                                    text: "Low  emissions scenario",
                                    children: [{
                                        id: "n-04-02-01-02-01",
                                        text: " Low estimate (10th percentile)",
                                        icon: "assets/img/map16.png"
                                    }, {
                                        id: "n-04-02-01-02-02",
                                        text: "Central estimate (50th percentile)",
                                        icon: "assets/img/map16.png"
                                    }, {
                                        id: "n-04-02-01-02-03",
                                        text: "High estimate (90th percentile)",
                                        icon: "assets/img/map16.png"
                                    }]
                                }, {
                                    id: "n-04-02-01-03",
                                    text: "High emissions scenario",
                                    children: [{
                                        id: "n-04-02-01-03-01",
                                        text: "Low estimate (10th percentile)",
                                        icon: "assets/img/map16.png"
                                    }, {
                                        id: "n-04-02-01-03-02",
                                        text: "Central estimate (50th percentile)",
                                        icon: "assets/img/map16.png"
                                    }, {
                                        id: "n-04-02-01-03-03",
                                        text: "High estimate (90th percentile)",
                                        icon: "assets/img/map16.png"
                                    }]
                                }]
                            }, {
                                id: "n-04-02-02",
                                text: "Average vulnerability  and change in mean summer maximum temperature baseline to 2050s",
                                children: [{
                                    id: "n-04-02-02-01",
                                    text: "Medium emissions scenario",
                                    children: [{
                                        id: "n-04-02-02-01-01",
                                        text: "Low estimate (10th percentile)",
                                        icon: "assets/img/map16.png"
                                    }, {
                                        id: "n-04-02-02-01-02",
                                        text: "Central estimate (50th percentile) RECOMMENDED",
                                        icon: "assets/img/map16.png"
                                    }, {
                                        id: "n-04-02-02-01-03",
                                        text: "High estimate (90th percentile)",
                                        icon: "assets/img/map16.png"
                                    }]
                                }, {
                                    id: "n-04-02-02-02",
                                    text: "Low emissions scenario",
                                    children: [{
                                        id: "n-04-02-02-02-01",
                                        text: "Low estimate (10th percentile)",
                                        icon: "assets/img/map16.png"
                                    }, {
                                        id: "n-04-02-02-02-02",
                                        text: "Central estimate (50th percentile)",
                                        icon: "assets/img/map16.png"
                                    }, {
                                        id: "n-04-02-02-02-03",
                                        text: "High estimate (90th percentile)",
                                        icon: "assets/img/map16.png"
                                    }]
                                }, {
                                    id: "n-04-02-02-03",
                                    text: "High emissions scenario",
                                    children: [{
                                        id: "n-04-02-02-03-01",
                                        text: "Low estimate (10th percentile)",
                                        icon: "assets/img/map16.png"
                                    }, {
                                        id: "n-04-02-02-03-02",
                                        text: "Central estimate (50th percentile)",
                                        icon: "assets/img/map16.png"
                                    }, {
                                        id: "n-04-02-02-03-03",
                                        text: "High estimate (90th percentile)",
                                        icon: "assets/img/map16.png"
                                    }]
                                }]
                            }, {
                                id: "n-04-02-03",
                                text: "Average vulnerability and change in the temperature of the warmest day baseline to 2050s",
                                children: [{
                                    id: "n-04-02-03-01",
                                    text: "Medium emissions scenario",
                                    children: [{
                                        id: "n-04-02-03-01-01",
                                        text: "Low estimate (10th percentile)",
                                        icon: "assets/img/map16.png"
                                    }, {
                                        id: "n-04-02-03-01-02",
                                        text: "Central estimate (50th percentile) RECOMMENDED",
                                        icon: "assets/img/map16.png"
                                    }, {
                                        id: "n-04-02-03-01-03",
                                        text: "High estimate (90th percentile)",
                                        icon: "assets/img/map16.png"
                                    }]
                                }, {
                                    id: "n-04-02-03-02",
                                    text: "Low emissions scenario",
                                    children: [{
                                        id: "n-04-02-03-02-01",
                                        text: "Low estimate (10th percentile)",
                                        icon: "assets/img/map16.png"
                                    }, {
                                        id: "n-04-02-03-02-02",
                                        text: "Central estimate (50th percentile)",
                                        icon: "assets/img/map16.png"
                                    }, {
                                        id: "n-04-02-03-02-03",
                                        text: "High estimate (90th percentile)",
                                        icon: "assets/img/map16.png"
                                    }]
                                }, {
                                    id: "n-04-02-03-03",
                                    text: "High emissions scenario",
                                    children: [{
                                        id: "n-04-02-03-03-01",
                                        text: "Low estimate (10th percentile)",
                                        icon: "assets/img/map16.png"
                                    }, {
                                        id: "n-04-02-03-03-02",
                                        text: "Central estimate (50th percentile)",
                                        icon: "assets/img/map16.png"
                                    }, {
                                        id: "n-04-02-03-03-03",
                                        text: "High estimate (90th percentile)",
                                        icon: "assets/img/map16.png"
                                    }]
                                }]
                            }, {
                                id: "n-04-02-04",
                                text: "Average vulnerability and change in the temperature of the warmest night baseline to 2050s",
                                children: [{
                                    id: "n-04-02-04-01",
                                    text: "Medium emissions scenario",
                                    children: [{
                                        id: "n-04-02-04-01-01",
                                        text: "Low estimate (10th percentile)",
                                        icon: "assets/img/map16.png"
                                    }, {
                                        id: "n-04-02-04-01-02",
                                        text: "Central estimate (50th percentile) RECOMMENDED",
                                        icon: "assets/img/map16.png"
                                    }, {
                                        id: "n-04-02-04-01-03",
                                        text: "High estimate (90th percentile)",
                                        icon: "assets/img/map16.png"
                                    }]
                                }, {
                                    id: "n-04-02-04-02",
                                    text: "Low  emissions scenario",
                                    children: [{
                                        id: "n-04-02-04-02-01",
                                        text: "Low estimate (10th percentile)",
                                        icon: "assets/img/map16.png"
                                    }, {
                                        id: "n-04-02-04-02-02",
                                        text: "Central estimate (50th percentile)",
                                        icon: "assets/img/map16.png"
                                    }, {
                                        id: "n-04-02-04-02-03",
                                        text: "High estimate (90th percentile)",
                                        icon: "assets/img/map16.png"
                                    }]
                                }, {
                                    id: "n-04-02-04-03",
                                    text: "High emissions scenario",
                                    children: [{
                                        id: "n-04-02-04-03-01",
                                        text: "Low estimate (10th percentile)",
                                        icon: "assets/img/map16.png"
                                    }, {
                                        id: "n-04-02-04-03-02",
                                        text: "Central estimate (50th percentile)",
                                        icon: "assets/img/map16.png"
                                    }, {
                                        id: "n-04-02-04-03-03",
                                        text: "High estimate (90th percentile)",
                                        icon: "assets/img/map16.png"
                                    }]
                                }]
                            }]
                        }]
                }
                    ,
                    {
                        id: "n-05",
                        text:
                            "Heat exposure (2011)",
                        children:
                            [{
                                id: "n-05-01",
                                text: "Mean summer maximum temperature 2050s ",
                                children: [{
                                    id: "n-05-01-01",
                                    text: "Medium emissions scenario",
                                    children: [{
                                        id: "n-05-01-01-01",
                                        text: "Low estimate (10th percentile)",
                                        icon: "assets/img/map16.png"
                                    }, {
                                        id: "n-05-01-01-02",
                                        text: "Central estimate (50th percentile) ",
                                        icon: "assets/img/map16.png"
                                    }, {
                                        id: "n-05-01-01-03",
                                        text: "High estimate (90th percentile)",
                                        icon: "assets/img/map16.png"
                                    }]
                                }, {
                                    id: "n-05-01-02",
                                    text: "Low emissions scenario",
                                    children: [{
                                        id: "n-05-01-02-01",
                                        text: "Low estimate (10th percentile)",
                                        icon: "assets/img/map16.png"
                                    }, {
                                        id: "n-05-01-02-02",
                                        text: "Central estimate (50th percentile)",
                                        icon: "assets/img/map16.png"
                                    }, {
                                        id: "n-05-01-02-03",
                                        text: "High estimate (90th percentile)",
                                        icon: "assets/img/map16.png"
                                    }]
                                }, {
                                    id: "n-05-01-03",
                                    text: "High emissions scenario",
                                    children: [{
                                        id: "n-05-01-03-01",
                                        text: "Low estimate (10th percentile)",
                                        icon: "assets/img/map16.png"
                                    }, {
                                        id: "n-05-01-03-02",
                                        text: "Central estimate (50th percentile)",
                                        icon: "assets/img/map16.png"
                                    }, {
                                        id: "n-05-01-03-03",
                                        text: "High estimate (90th percentile)",
                                        icon: "assets/img/map16.png"
                                    }]
                                }]
                            }, {
                                id: "n-05-02",
                                text: "Change in mean summer maximum temperature baseline to 2050s",
                                children: [{
                                    id: "n-05-02-01",
                                    text: "Medium emissions scenario",
                                    children: [{
                                        id: "n-05-02-01-01",
                                        text: "Low estimate (10th percentile)",
                                        icon: "assets/img/map16.png"
                                    }, {
                                        id: "n-05-02-01-02",
                                        text: "Central estimate (50th percentile) ",
                                        icon: "assets/img/map16.png"
                                    }, {
                                        id: "n-05-02-01-03",
                                        text: "High estimate (90th percentile)",
                                        icon: "assets/img/map16.png"
                                    }]
                                }, {
                                    id: "n-05-02-02",
                                    text: "Low emissions scenario",
                                    children: [{
                                        id: "n-05-02-02-01",
                                        text: "Low estimate (10th percentile)",
                                        icon: "assets/img/map16.png"
                                    }, {
                                        id: "n-05-02-02-02",
                                        text: "Central estimate (50th percentile)",
                                        icon: "assets/img/map16.png"
                                    }, {
                                        id: "n-05-02-02-03",
                                        text: "High estimate (90th percentile)",
                                        icon: "assets/img/map16.png"
                                    }]
                                }, {
                                    id: "n-05-02-03",
                                    text: "High emissions scenario",
                                    children: [{
                                        id: "n-05-02-03-01",
                                        text: "Low estimate (10th percentile)",
                                        icon: "assets/img/map16.png"
                                    }, {
                                        id: "n-05-02-03-02",
                                        text: "Central estimate (50th percentile)",
                                        icon: "assets/img/map16.png"
                                    }, {
                                        id: "n-05-02-03-03",
                                        text: "High estimate (90th percentile)",
                                        icon: "assets/img/map16.png"
                                    }]
                                }]
                            }, {
                                id: "n-05-03",
                                text: "Change in the temperature of the warmest day baseline to 2050s",
                                children: [{
                                    id: "n-05-03-01",
                                    text: "Medium emissions scenario",
                                    children: [{
                                        id: "n-05-03-01-01",
                                        text: "Low estimate (10th percentile)",
                                        icon: "assets/img/map16.png"
                                    }, {
                                        id: "n-05-03-01-02",
                                        text: "Central estimate (50th percentile) ",
                                        icon: "assets/img/map16.png"
                                    }, {
                                        id: "n-05-03-01-03",
                                        text: "High estimate (90th percentile)",
                                        icon: "assets/img/map16.png"
                                    }]
                                }, {
                                    id: "n-05-03-02",
                                    text: "Low  emissions scenario",
                                    children: [{
                                        id: "n-05-03-02-01",
                                        text: "Low estimate (10th percentile)",
                                        icon: "assets/img/map16.png"
                                    }, {
                                        id: "n-05-03-02-02",
                                        text: "Central estimate (50th percentile)",
                                        icon: "assets/img/map16.png"
                                    }, {
                                        id: "n-05-03-02-03",
                                        text: "High estimate (90th percentile)",
                                        icon: "assets/img/map16.png"
                                    }]
                                }, {
                                    id: "n-05-03-03",
                                    text: "High emissions scenario",
                                    children: [{
                                        id: "n-05-03-03-01",
                                        text: "Low estimate (10th percentile)",
                                        icon: "assets/img/map16.png"
                                    }, {
                                        id: "n-05-03-03-02",
                                        text: "Central estimate (50th percentile)",
                                        icon: "assets/img/map16.png"
                                    }, {
                                        id: "n-05-03-03-03",
                                        text: "High estimate (90th percentile)",
                                        icon: "assets/img/map16.png"
                                    }]
                                }]
                            }, {
                                id: "n-05-04",
                                text: "Change in temperature of the warmest night baseline to 2050s",
                                children: [{
                                    id: "n-05-04-01",
                                    text: "Medium emissions scenario",
                                    children: [{
                                        id: "n-05-04-01-01",
                                        text: "Low estimate (10th percentile)",
                                        icon: "assets/img/map16.png"
                                    }, {
                                        id: "n-05-04-01-02",
                                        text: "Central estimate (50th percentile) ",
                                        icon: "assets/img/map16.png"
                                    }, {
                                        id: "n-05-04-01-03",
                                        text: "High estimate (90th percentile)",
                                        icon: "assets/img/map16.png"
                                    }]
                                }, {
                                    id: "n-05-04-02",
                                    text: "Low emissions scenario",
                                    children: [{
                                        id: "n-05-04-02-01",
                                        text: "Low estimate (10th percentile)",
                                        icon: "assets/img/map16.png"
                                    }, {
                                        id: "n-05-04-02-02",
                                        text: "Central estimate (50th percentile)",
                                        icon: "assets/img/map16.png"
                                    }, {
                                        id: "n-05-04-02-03",
                                        text: "High estimate (90th percentile)",
                                        icon: "assets/img/map16.png"
                                    }]
                                }, {
                                    id: "n-05-04-03",
                                    text: "High emissions scenario",
                                    children: [{
                                        id: "n-05-04-03-01",
                                        text: "Low estimate (10th percentile)",
                                        icon: "assets/img/map16.png"
                                    }, {
                                        id: "n-05-04-03-02",
                                        text: "Central estimate (50th percentile)",
                                        icon: "assets/img/map16.png"
                                    }, {
                                        id: "n-05-04-03-03",
                                        text: "High estimate (90th percentile)",
                                        icon: "assets/img/map16.png"
                                    }]
                                }]
                            }]
                    }, {
                    id: "n-06",
                    text: "Heat socio-spatial vulnerability (2011)",
                    children: [{
                        id: "n-06-01-index",
                        text: "Social Heat Vulnerability Index",
                        icon: "assets/img/map16_pink.png"
                    }, {
                        id: "n-06-01",
                        text: "Sensitivity",
                        children: [{
                            id: "n-06-01-Sensitivity-index",
                            text: "Sensitivity index",
                            icon: "assets/img/map16_pink.png"
                        }, {
                            id: "n-06-01-01",
                            text: "Age",
                            children: [{
                                id: "n-06-01-01-01",
                                text: "Older people (% people over 75 years)",
                                icon: "assets/img/map16.png"
                            }, {
                                id: "n-06-01-01-03",
                                text: "Young children (% people under 5 years)",
                                icon: "assets/img/map16.png"
                            }]
                        }, {
                            id: "n-06-01-02",
                            text: "Health",
                            children: [{
                                id: "n-06-01-02-01",
                                text: "People in ill-health (% people whose day-to-day activities are limited)",
                                icon: "assets/img/map16.png"
                            }, {
                                id: "n-06-01-02-02",
                                text: "Households containing at least one person in ill-health (%)",
                                icon: "assets/img/map16.png"
                            }]
                        }]
                    }, {
                        id: "n-06-02",
                        text: "Enhanced Exposure",
                        children: [{
                            id: "n-06-02-Enhanced-Exposure-index",
                            text: "Enhanced exposure to heat index",
                            icon: "assets/img/map16_pink.png"
                        }, {
                            id: "n-06-02-01",
                            text: "Physical Environment",
                            children: [{
                                id: "n-06-02-01-01",
                                text: "Built up area (% not greenspace)",
                                icon: "assets/img/map16.png"
                            }, {
                                id: "n-06-02-01-02",
                                text: "Lack of domestic gardens (area of building/domestic gardens)",
                                icon: "assets/img/map16.png"
                            }]
                        }, {
                            id: "n-06-02-02",
                            text: "Physical Geography",
                            children: [{
                                id: "n-06-02-02-01",
                                text: "Built up area (% area not blue space)",
                                icon: "assets/img/map16.png"
                            }, {
                                id: "n-06-02-02-02",
                                text: "Distance to coast",
                                icon: "assets/img/map16.png"
                            }, {
                                id: "n-06-02-02-03",
                                text: "Elevation",
                                icon: "assets/img/map16.png"
                            }]
                        }, {
                            id: "n-06-02-03",
                            text: "Housing Characteristics",
                            children: [{
                                id: "n-06-02-03-02",
                                text: "High rise homes (% households with lowest floor 5th floor or above)",
                                icon: "assets/img/map16.png"
                            }]
                        }]
                    }, {
                        id: "n-06-03",
                        text: "Ability to Prepare",
                        children: [{
                            id: "n-06-03-Ability-to-Prepare-index",
                            text: "Inability to Prepare index",
                            icon: "assets/img/map16_pink.png"
                        }, {
                            id: "n-06-03-01",
                            text: "Income",
                            children: [{
                                id: "n-06-03-01-01",
                                text: "Unemployment (% working population unemployed)",
                                icon: "assets/img/map16.png"
                            }, {
                                id: "n-06-03-01-02",
                                text: "Low income occupations (% in routine or semi-routine occupations)",
                                icon: "assets/img/map16.png"
                            }, {
                                id: "n-06-03-01-03",
                                text: "Long-term unemployed (% who are LTU or who have never worked)",
                                icon: "assets/img/map16.png"
                            }, {
                                id: "n-06-03-01-04",
                                text: "Households with dependent children and no adults in employment (%)",
                                icon: "assets/img/map16.png"
                            }, {
                                id: "n-06-03-01-05",
                                text: "Weekly household income estimate (&pound;)",
                                icon: "assets/img/map16.png"
                            }, {
                                id: "n-06-03-01-06",
                                text: "All pensioner households (%)",
                                icon: "assets/img/map16.png"
                            }]
                        }, {
                            id: "n-06-03-02",
                            text: "Tenure",
                            children: [{
                                id: "n-06-03-02-01",
                                text: "Social renters (% Households renting from social or Council landlords)",
                                icon: "assets/img/map16.png"
                            }, {
                                id: "n-06-03-02-02",
                                text: "Private renters (% Households)",
                                icon: "assets/img/map16.png"
                            }]
                        }, {
                            id: "n-06-03-03",
                            text: "Information Use (Language)",
                            children: [{
                                id: "n-06-03-03-01",
                                text: "Born outside UK/Ireland (%)",
                                icon: "assets/img/map16.png"
                            }, {
                                id: "n-06-03-03-02",
                                text: "Recent arrivals to UK (% arrived in UK less than a year ago)",
                                icon: "assets/img/map16.png"
                            }]
                        }]
                    }, {
                        id: "n-06-04",
                        text: "Ability to Respond",
                        children: [{
                            id: "n-06-04-Ability-to-Respond-index",
                            text: "Inability to Respond index",
                            icon: "assets/img/map16_pink.png"
                        }, {
                            id: "n-06-04-01",
                            text: "Income",
                            children: [{
                                id: "n-06-04-01-01",
                                text: "Unemployment (% working population unemployed)",
                                icon: "assets/img/map16.png"
                            }, {
                                id: "n-06-04-01-02",
                                text: "Low income occupations (% in routine or semi-routine occupations)",
                                icon: "assets/img/map16.png"
                            }, {
                                id: "n-06-04-01-03",
                                text: "Long-term unemployed (% who are LTU or who have never worked)",
                                icon: "assets/img/map16.png"
                            }, {
                                id: "n-06-04-01-04",
                                text: "Households with dependent children and no adults in employment (%)",
                                icon: "assets/img/map16.png"
                            }, {
                                id: "n-06-04-01-05",
                                text: "Weekly household income estimate (&pound;)",
                                icon: "assets/img/map16.png"
                            }, {
                                id: "n-06-04-01-06",
                                text: "All pensioner households (%)",
                                icon: "assets/img/map16.png"
                            }]
                        }, {
                            id: "n-06-04-02",
                            text: "Information Use (Language)",
                            children: [{
                                id: "n-06-04-02-01",
                                text: "Born outside UK/Ireland (%)",
                                icon: "assets/img/map16.png"
                            }, {
                                id: "n-06-04-02-02",
                                text: "Recent arrivals to UK (% arrived in UK less than a year ago)",
                                icon: "assets/img/map16.png"
                            }]
                        }, {
                            id: "n-06-04-03",
                            text: "Social Networks",
                            children: [{
                                id: "n-06-04-03-01",
                                text: "Single pensioner households (%)",
                                icon: "assets/img/map16.png"
                            }, {
                                id: "n-06-04-03-02",
                                text: "Lone parents with dependent children (% households)",
                                icon: "assets/img/map16.png"
                            }, {
                                id: "n-06-04-03-03",
                                text: "Lack of carers (% people not providing unpaid care)",
                                icon: "assets/img/map16.png"
                            }]
                        }, {
                            id: "n-06-04-04",
                            text: "Mobility",
                            children: [{
                                id: "n-06-04-04-01",
                                text: "Disability (% people whose day-to-day activities are limited a lot)",
                                icon: "assets/img/map16.png"
                            }, {
                                id: "n-06-04-04-02",
                                text: "Lack of private transport (% households with no car or van)",
                                icon: "assets/img/map16.png"
                            }]
                        }, {
                            id: "n-06-04-05",
                            text: "Crime",
                            children: [{
                                id: "n-06-04-05-01",
                                text: "Index of Multiple Deprivation crime score",
                                icon: "assets/img/map16_pink.png"
                            }]
                        }, {
                            id: "n-06-04-06",
                            text: "General Accessibility",
                            children: [{
                                id: "n-06-04-06-01",
                                text: "Low road density (% area not road)",
                                icon: "assets/img/map16.png"
                            }]
                        }, {
                            id: "n-06-04-07",
                            text: "General infrastructure",
                            children: [{
                                id: "n-06-04-07-01",
                                text: "Density of retail units",
                                icon: "assets/img/map16.png"
                            }, {
                                id: "n-06-04-07-02",
                                text: "% change in the number of enterprises",
                                icon: "assets/img/map16.png"
                            }]
                        }]
                    }, {
                        id: "n-06-05",
                        text: "Ability to Recover",
                        children: [{
                            id: "n-06-05-Ability-to-Recover-index",
                            text: "Inability to Recover index",
                            icon: "assets/img/map16_pink.png"
                        }, {
                            id: "n-06-05-01",
                            text: "Information Use (Language)",
                            children: [{
                                id: "n-06-05-01-01",
                                text: "Born outside UK/Ireland (%)",
                                icon: "assets/img/map16.png"
                            }, {
                                id: "n-06-05-01-02",
                                text: "Recent arrivals to UK (% arrived in UK less than a year ago)",
                                icon: "assets/img/map16.png"
                            }]
                        }, {
                            id: "n-06-05-02",
                            text: "Social Networks",
                            children: [{
                                id: "n-06-05-02-01",
                                text: "Single pensioner households (%)",
                                icon: "assets/img/map16.png"
                            }, {
                                id: "n-06-05-02-02",
                                text: "Lone parents with dependent children (% households)",
                                icon: "assets/img/map16.png"
                            }, {
                                id: "n-06-05-02-03",
                                text: "Lack of carers (% people not providing unpaid care)",
                                icon: "assets/img/map16.png"
                            }]
                        }, {
                            id: "n-06-05-03",
                            text: "Mobility",
                            children: [{
                                id: "n-06-05-03-01",
                                text: "Disability (% people whose day-to-day activities are limited a lot)",
                                icon: "assets/img/map16.png"
                            }, {
                                id: "n-06-05-03-02",
                                text: "Lack of private transport (% households with no car or van)",
                                icon: "assets/img/map16.png"
                            }, {
                                id: "n-06-05-03-03",
                                text: "Working away from home (% not working at home)",
                                icon: "assets/img/map16.png"
                            }]
                        }, {
                            id: "n-06-05-04",
                            text: "Service Areas",
                            children: [{
                                id: "n-06-05-04-01",
                                text: "Travel time to nearest GP by walk/public transport",
                                icon: "assets/img/map16.png"
                            }, {
                                id: "n-06-05-04-02",
                                text: "% of at risk population (no car) outside of 15 minutes by walk/public transport to nearest GP",
                                icon: "assets/img/map16.png"
                            }, {
                                id: "n-06-05-04-03",
                                text: "Number of GPs within 15 minutes by walk/public transport",
                                icon: "assets/img/map16.png"
                            }, {
                                id: "n-06-05-04-04",
                                text: "Number of GPs within 15 minutes by car",
                                icon: "assets/img/map16.png"
                            }, {
                                id: "n-06-05-04-05",
                                text: "Travel time to nearest hospital by walk/public transport",
                                icon: "assets/img/map16.png"
                            }, {
                                id: "n-06-05-04-06",
                                text: "Travel time to nearest hospital by car",
                                icon: "assets/img/map16.png"
                            }, {
                                id: "n-06-05-04-07",
                                text: "% of at risk population outside of 30 minutes by walk/PT to nearest hospital",
                                icon: "assets/img/map16.png"
                            }, {
                                id: "n-06-05-04-08",
                                text: "Number of hospitals within 30 minutes by walk/public transport",
                                icon: "assets/img/map16.png"
                            }, {
                                id: "n-06-05-04-09",
                                text: "Number of hospitals within 30 minutes by car",
                                icon: "assets/img/map16.png"
                            }]
                        }]
                    }]
                }]
        }, {
            id: "n-07",
            text:
                "Fuel poverty",
            children:
                [{
                    id: "n-07-01",
                    text: "2012",
                    children: [{
                        id: "n-07-01-01",
                        text: "LA Low Income High Cost definition",
                        icon: "assets/img/map16.png"
                    }, {
                        id: "n-07-01-02",
                        text: "LA 10% definition",
                        icon: "assets/img/map16.png"
                    }, {
                        id: "n-07-01-03",
                        text: "LSOA Low Income High Cost definition",
                        icon: "assets/img/map16.png"
                    }, {
                        id: "n-07-01-04",
                        text: "LSOA 10% definition",
                        icon: "assets/img/map16.png"
                    }]
                }, {
                    id: "n-07-02",
                    text: "2014",
                    children: [{
                        id: "n-07-02-01",
                        text: "LA Low Income High Cost definition",
                        icon: "assets/img/map16.png"
                    }, {
                        id: "n-07-02-02",
                        text: "LSOA Low Income High Cost definition",
                        icon: "assets/img/map16.png"
                    }]
                    // insert next year of fuel poverty maps here
                }]
        }, {
            id: "n-13",
            text:
                "Administrative boundaries",
            children:
                [{
                    id: "n-13-01a",
                    text: "English Regions (Dec 2016)",
                    icon: "assets/img/map16.png"
                }, {
                    id: "n-13-01b",
                    text: "Scottish Parliamentary Regions (May 2016)",
                    icon: "assets/img/map16.png"
                }, {
                    id: "n-13-01c",
                    text: "National Assembly Wales Constituencies (Dec 2016)",
                    icon: "assets/img/map16.png"
                }, {
                    id: "n-13-02",
                    text: "Districts and Unitaries (Dec 2016)", //Counties and Unitaries
                    icon: "assets/img/map16.png"
                }, {
                    id: "n-13-03",
                    text: "Wards (Dec 2016)",
                    icon: "assets/img/map16.png"
                }, {
                    id: "n-13-04",
                    text: "Built-up areas England & Wales (Dec 2011)",
                    icon: "assets/img/map16.png"
                }, {
                    id: "n-13-05",
                    text: "Middle Super Output Areas England & Wales (Dec 2011)",
                    icon: "assets/img/map16.png"
                }, {
                    id: "n-13-06",
                    text: "Data Zones Scotland (2011)",//"Middle Super Output Area change 2001-11",
                    icon: "assets/img/map16.png"
                }, {
                    id: "n-13-07",
                    text: "Parliamentary constituencies (Dec 2016)",
                    icon: "assets/img/map16.png"
                }]
        }]
    }
};

var layerData = [
        {
            id: "n-1a",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "nfvi",
            description: "Neighbourhood Flood Vulnerability Index"
        }, {
            id: "n-1-1a",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "susceptibility",
            description: "Susceptibility"
        }, {
            id: "n-1-1-1a",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "age",
            description: "Vulnerability due to age"
        }, {
            id: "n-1-1-1-1",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "under5",
            description: "Young children (% people under 5 years)"
        }, {
            id: "n-1-1-1-2",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "over75",
            description: "Older people (% people over 75 years)"
        }, {
            id: "n-1-1-2a",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "health",
            description: "Vulnerability due to health"
        }, {
            id: "n-1-1-2-1",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "illHealth",
            description: "Disability / people in ill- health (% people whose day- to-day activities are limited)"
        }, {
            id: "n-1-1-2-2",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "llti",
            description: "% households with at least one person with long term limiting illness"
        }, {
            id: "n-1-2a",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "prepare",
            description: "Inability to prepare"
        }, {
            id: "n-1-2-1a",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "income",
            description: "Vulnerability due to income"
        }, {
            id: "n-1-2-1-1",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "unemployment",
            description: "% Unemployed"
        }, {
            id: "n-1-2-1-2",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "LT-unemployment",
            description: "Long-term unemployed (% who are LTU or who have never worked)"
        }, {
            id: "n-1-2-1-3",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "lowIncome",
            description: "Low income occupations (% in routine or semi- routine occupations)"
        }, {
            id: "n-1-2-1-4",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "depChildUnemp",
            description: "Households with dependent children and no adults in employment (%)"
        }, {
            id: "n-1-2-1-5",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "noIncome",
            description: "Income deprivation index"
        }, {
            id: "n-1-2-2a",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "infoUse",
            description: "Vulnerability due to issues of information use"
        }, {
            id: "n-1-2-2-1",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "arrivalsUK",
            description: "Recent arrivals to UK (% people with <1 yr residency coming from outside UK)"
        }, {
            id: "n-1-2-2-2",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "profEnglish",
            description: "Level of proficiency in English (%)"
        }, {
            id: "n-1-2-3a",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "local_knowledge",
            description: "Vulnerability due to lack of local knowledge"
        }, {
            id: "n-1-2-3-1",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "migrants",
            description: "New migrants from outside local area (%)"
        }, {
            id: "n-1-2-4a",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "tenure",
            description: "Vulnerability due to property tenure"
        }, {
            id: "n-1-2-4-1",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "priRent",
            description: "Private renters (% Households)"
        }, {
            id: "n-1-2-4-2",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "socRent",
            description: "Social renters (% Households renting from Social or Council landlords)"
        }, {
            id: "n-1-3a",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "nvfi_respond",
            description: "Inability to respond"
        }, {
            id: "n-1-3-1a",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "income",
            description: "Vulnerability due to income"
        }, {
            id: "n-1-3-1-1",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "unemployment",
            description: "% Unemployed"
        }, {
            id: "n-1-3-1-2",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "LT-unemployment",
            description: "Long-term unemployed (% who are LTU or who have never worked)"
        }, {
            id: "n-1-3-1-3",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "lowIncome",
            description: "Low income occupations (% in routine or semi- routine occupations)"
        }, {
            id: "n-1-3-1-4",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "depChildUnemp",
            description: "Households with dependent children and no adults in employment (%)"
        }, {
            id: "n-1-3-1-5",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "noIncome",
            description: "Income deprivation index"
        }, {
            id: "n-1-3-2a",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "infoUse",
            description: "Vulnerability due to issues of information use"
        }, {
            id: "n-1-3-2-1",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "arrivalsUK",
            description: "Recent arrivals to UK (% people with <1 yr residency coming from outside UK)"
        }, {
            id: "n-1-3-2-2",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "profEnglish",
            description: "Level of proficiency in English (%)"
        }, {
            id: "n-1-3-3a",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "local_knowledge",
            description: "Vulnerability due to lack of local knowledge"
        }, {
            id: "n-1-3-3-1",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "migrants",
            description: "New migrants from outside local area (%)"
        }, {
            id: "n-1-3-4a",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "mobility",
            description: "Vulnerability due to lack of physical mobility"
        }, {
            id: "n-1-3-4-1",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "disability",
            description: "High levels of disability (% of population who are disabled)"
        }, {
            id: "n-1-3-4-2",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "medCare",
            description: "% people living in medical and care establishments"
        }, {
            id: "n-1-3-4-3",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "noCar",
            description: "Lack of private transport (% households with no car or van)"
        }, {
            id: "n-1-3-5a",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "crimeVulnerability",
            description: "Vulnerability due to crime"
        }, {
            id: "n-1-3-5-1",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "crimeIMD",
            description: "Crime index (IMD)"
        }, {
            id: "n-1-4a",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "nfvi_recover",
            description: "Inability to recover"
        }, {
            id: "n-1-4-1a",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "income",
            description: "Vulnerability due to income"
        }, {
            id: "n-1-4-1-1",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "unemployment",
            description: "% Unemployed"
        }, {
            id: "n-1-4-1-2",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "LT-unemployment",
            description: "Long-term unemployed (% who are LTU or who have never worked)"
        }, {
            id: "n-1-4-1-3",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "lowIncome",
            description: "Low income occupations (% in routine or semi- routine occupations)"
        }, {
            id: "n-1-4-1-4",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "depChildUnemp",
            description: "Households with dependent children and no adults in employment (%)"
        }, {
            id: "n-1-4-1-5",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "noIncome",
            description: "Income deprivation index"
        }, {
            id: "n-1-4-2a",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "infoUse",
            description: "Vulnerability due to issues of information use"
        }, {
            id: "n-1-4-2-1",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "arrivalsUK",
            description: "Recent arrivals to UK (% people with <1 yr residency coming from outside UK)"
        }, {
            id: "n-1-4-2-2",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "profEnglish",
            description: "Level of proficiency in English (%)"
        }, {
            id: "n-1-4-3a",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "mobility",
            description: "Vulnerability due to physical mobility"
        }, {
            id: "n-1-4-3-1",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "migrants",
            description: "High levels of disability (% of population who are disabled)"
        }, {
            id: "n-1-4-3-2",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "disability",
            description: "% people living in medical and care establishments"
        }, {
            id: "n-1-4-3-3",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "noCar",
            description: "Lack of private transport (% households with no car or van)"
        }, {
            id: "n-1-5a",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "nfvi_commu",
            description: "Lack of community support"
        }, {
            id: "n-1-5-1a",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "housing_ch",
            description: "Vulnerability due to housing Characteristics"
        }, {
            id: "n-1-5-1-1",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "caravan",
            description: "% caravan or other mobile or temporary structures in all households"
        }, {
            id: "n-1-5-2-1",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "direct_flood",
            description: "Number of properties within historical flood boundary (standardised)"
        }, {
            id: "n-1-5-3a",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "service_availability",
            description: "Vulnerability due to exposure of services to flooding"
        }, {
            id: "n-1-5-3-1",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "emergServ",
            description: "% of emergency services exposed to flooding"
        }, {
            id: "n-1-5-3-2",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "careHomes",
            description: "% no. of care homes exposed to flooding"
        }, {
            id: "n-1-5-3-3",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "surgery",
            description: "% no. of GP surgeries exposed to flooding"
        }, {
            id: "n-1-5-3-4",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "schools",
            description: "% no. of schools exposed to flooding"
        }, {
            id: "n-1-5-4a",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "socal_network",
            description: "Vulnerability due to lack of social networks"
        }, {
            id: "n-1-5-4-1",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "pensioner",
            description: "% single-pensioner households"
        }, {
            id: "n-1-5-4-2",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "lone-parent",
            description: "% lone-parent households with dependent children"
        }, {
            id: "n-1-5-4-3",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "primaryAge",
            description: "% children of primary school age (4-11) in the population"
        }, {
            id: "n-2-1-1-1",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "fc_g_present",
            description: "River & Coastal -> Group -> Present Day"
        }, {
            id: "n-2-1-1-2",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "fc_g_50_2",
            description: "River & Coastal -> Group -> Future 2050s 2 degrees scenario"
        }, {
            id: "n-2-1-1-3",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "fc_g_50_4",
            description: "River & Coastal -> Group -> Future 2050s 4 degrees scenario"
        }, {
            id: "n-2-1-2-1",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "fc_i_present",
            description: "River & Coastal -> Individual -> Present Day"
        }, {
            id: "n-2-1-2-2",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "fc_i_50_2",
            description: "River & Coastal -> Individual -> Future 2050s 2 degrees scenario"
        }, {
            id: "n-2-1-2-3",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "fc_i_50_4",
            description: "River & Coastal -> Individual -> Future 2050s 4 degrees scenario"
        }, {
            id: "n-2-2-1-1",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "sw_g_present",
            description: "Surface water -> Group -> Present Day"
        }, {
            id: "n-2-2-1-2",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "sw_g_50_2",
            description: "Surface water -> Group -> Future 2050s 2 degrees scenario"
        }, {
            id: "n-2-2-1-3",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "sw_g_50_4",
            description: "Surface water -> Group -> Future 2050s 4 degrees scenario"
        }, {
            id: "n-2-2-2-1",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "sw_i_present",
            description: "Surface water -> Individual -> Present Day"
        }, {
            id: "n-2-2-2-2",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "sw_i_50_2",
            description: "Surface water -> Individual -> Future 2050s 2 degrees scenario"
        }, {
            id: "n-2-2-2-3",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "sw_i_50_4",
            description: "Surface water -> Individual -> Future 2050s 4 degrees scenario"
        },
        /* end of NFVI
         * start of heat maps */
        {
            id: "n-04-01-01-01-01",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-04-01-01-01-01",
            description: "Low estimate (10th percentile)"
        }, {
            id: "n-04-01-01-01-02",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-04-01-01-01-02",
            description: "Central estimate (50th percentile) RECOMMENDED"
        }, {
            id: "n-04-01-01-01-03",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-04-01-01-01-03",
            description: "High estimate (90th percentile)"
        }, {
            id: "n-04-01-01-02-01",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-04-01-01-02-01",
            description: "Low estimate (10th percentile)"
        }, {
            id: "n-04-01-01-02-02",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-04-01-01-02-02",
            description: "Central estimate (50th percentile)"
        }, {
            id: "n-04-01-01-02-03",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-04-01-01-02-03",
            description: "High estimate (90th percentile)"
        }, {
            id: "n-04-01-01-03-01",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-04-01-01-03-01",
            description: "Low estimate (10th percentile)"
        }, {
            id: "n-04-01-01-03-02",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-04-01-01-03-02",
            description: "Central estimate (50th percentile)"
        }, {
            id: "n-04-01-01-03-03",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-04-01-01-03-03",
            description: "High estimate (90th percentile)"
        }, {
            id: "n-04-01-02-01-01",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-04-01-02-01-01",
            description: "Low estimate (10th percentile)"
        }, {
            id: "n-04-01-02-01-02",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-04-01-02-01-02",
            description: "Central estimate (50th percentile) RECOMMENDED"
        }, {
            id: "n-04-01-02-01-03",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-04-01-02-01-03",
            description: "High estimate (90th percentile)"
        }, {
            id: "n-04-01-02-02-01",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-04-01-02-02-01",
            description: "Low estimate (10th percentile)"
        }, {
            id: "n-04-01-02-02-02",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-04-01-02-02-02",
            description: "Central estimate (50th percentile)"
        }, {
            id: "n-04-01-02-02-03",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-04-01-02-02-03",
            description: "High estimate (90th percentile)"
        }, {
            id: "n-04-01-02-03-01",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-04-01-02-03-01",
            description: "Low estimate (10th percentile)"
        }, {
            id: "n-04-01-02-03-02",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-04-01-02-03-02",
            description: "Central estimate (50th percentile)"
        }, {
            id: "n-04-01-02-03-03",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-04-01-02-03-03",
            description: "High estimate (90th percentile)"
        }, {
            id: "n-04-01-03-01-01",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-04-01-03-01-01",
            description: "Low estimate (10th percentile)"
        }, {
            id: "n-04-01-03-01-02",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-04-01-03-01-02",
            description: "Central estimate (50th percentile) RECOMMENDED"
        }, {
            id: "n-04-01-03-01-03",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-04-01-03-01-03",
            description: "High estimate (90th percentile)"
        }, {
            id: "n-04-01-03-02-01",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-04-01-03-02-01",
            description: "Low estimate (10th percentile)"
        }, {
            id: "n-04-01-03-02-02",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-04-01-03-02-02",
            description: "Central estimate (50th percentile)"
        }, {
            id: "n-04-01-03-02-03",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-04-01-03-02-03",
            description: "High estimate (90th percentile)"
        }, {
            id: "n-04-01-04-03-01",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-04-01-04-03-01",
            description: "Low estimate (10th percentile)"
        }, {
            id: "n-04-01-04-03-02",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-04-01-04-03-02",
            description: "Central estimate (50th percentile)"
        }, {
            id: "n-04-01-04-03-03",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-04-01-04-03-03",
            description: "High estimate (90th percentile)"
        }, {
            id: "n-04-01-05-01-01",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-04-01-05-01-01",
            description: "Low estimate (10th percentile)"
        }, {
            id: "n-04-01-05-01-02",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-04-01-05-01-02",
            description: "Central estimate (50th percentile) RECOMMENDED"
        }, {
            id: "n-04-01-05-01-03",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-04-01-05-01-03",
            description: "High estimate (90th percentile)"
        }, {
            id: "n-04-01-05-02-01",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-04-01-05-02-01",
            description: "Low estimate (10th percentile)"
        }, {
            id: "n-04-01-05-02-02",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-04-01-05-02-02",
            description: "Central estimate (50th percentile)"
        }, {
            id: "n-04-01-05-02-03",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-04-01-05-02-03",
            description: "High estimate (90th percentile)"
        }, {
            id: "n-04-01-05-03-01",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-04-01-05-03-01",
            description: "Low estimate (10th percentile)"
        }, {
            id: "n-04-01-05-03-02",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-04-01-05-03-02",
            description: "Central estimate (50th percentile) RECOMMENDED"
        }, {
            id: "n-04-01-05-03-03",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-04-01-05-03-03",
            description: "High estimate (90th percentile)"
        }, {
            id: "n-04-02-01-01-01",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-04-02-01-01-01",
            description: "Low estimate (10th percentile)"
        }, {
            id: "n-04-02-01-01-02",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-04-02-01-01-02",
            description: "Central estimate (50th percentile) RECOMMENDED"
        }, {
            id: "n-04-02-01-01-03",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-04-02-01-01-03",
            description: "High estimate (90th percentile)"
        }, {
            id: "n-04-02-01-02-01",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-04-02-01-02-01",
            description: "Low estimate (10th percentile)"
        }, {
            id: "n-04-02-01-02-02",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-04-02-01-02-02",
            description: "Central estimate (50th percentile)"
        }, {
            id: "n-04-02-01-02-03",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-04-02-01-02-03",
            description: "High estimate (90th percentile)"
        }, {
            id: "n-04-02-01-03-01",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-04-02-01-03-01",
            description: "Low estimate (10th percentile)"
        }, {
            id: "n-04-02-01-03-02",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-04-02-01-03-02",
            description: "Central estimate (50th percentile)"
        }, {
            id: "n-04-02-01-03-03",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-04-02-01-03-03",
            description: "High estimate (90th percentile)"
        }, {
            id: "n-04-02-02-01-01",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-04-02-02-01-01",
            description: "Low estimate (10th percentile)"
        }, {
            id: "n-04-02-02-01-02",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-04-02-02-01-02",
            description: "Central estimate (50th percentile) RECOMMENDED"
        }, {
            id: "n-04-02-02-01-03",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-04-02-02-01-03",
            description: "High estimate (90th percentile)"
        }, {
            id: "n-04-02-02-02-01",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-04-02-02-02-01",
            description: "Low estimate (10th percentile)"
        }, {
            id: "n-04-02-02-02-02",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-04-02-02-02-02",
            description: "Central estimate (50th percentile)"
        }, {
            id: "n-04-02-02-02-03",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-04-02-02-02-03",
            description: "High estimate (90th percentile)"
        }, {
            id: "n-04-02-02-03-01",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-04-02-02-03-01",
            description: "Low estimate (10th percentile)"
        }, {
            id: "n-04-02-02-03-02",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-04-02-02-03-02",
            description: "Central estimate (50th percentile)"
        }, {
            id: "n-04-02-02-03-03",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-04-02-02-03-03",
            description: "High estimate (90th percentile)"
        }, {
            id: "n-04-02-03-01-01",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-04-02-03-01-01",
            description: "Low estimate (10th percentile)"
        }, {
            id: "n-04-02-03-01-02",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-04-02-03-01-02",
            description: "Central estimate (50th percentile) RECOMMENDED"
        }, {
            id: "n-04-02-03-01-03",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-04-02-03-01-03",
            description: "High estimate (90th percentile)"
        }, {
            id: "n-04-02-03-02-01",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-04-02-03-02-01",
            description: "Low estimate (10th percentile)"
        }, {
            id: "n-04-02-03-02-02",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-04-02-03-02-02",
            description: "Central estimate (50th percentile)"
        }, {
            id: "n-04-02-03-02-03",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-04-02-03-02-03",
            description: "High estimate (90th percentile)"
        }, {
            id: "n-04-02-03-03-01",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-04-02-03-03-01",
            description: "Low estimate (10th percentile)"
        }, {
            id: "n-04-02-03-03-02",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-04-02-03-03-02",
            description: "Central estimate (50th percentile)"
        }, {
            id: "n-04-02-03-03-03",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-04-02-03-03-03",
            description: "High estimate (90th percentile)"
        }, {
            id: "n-04-02-04-01-01",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-04-02-04-01-01",
            description: "Low estimate (10th percentile)"
        }, {
            id: "n-04-02-04-01-02",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-04-02-04-01-02",
            description: "Central estimate (50th percentile) RECOMMENDED"
        }, {
            id: "n-04-02-04-01-03",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-04-02-04-01-03",
            description: "High estimate (90th percentile)"
        }, {
            id: "n-04-02-04-02-01",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-04-02-04-02-01",
            description: "Low estimate (10th percentile)"
        }, {
            id: "n-04-02-04-02-02",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-04-02-04-02-02",
            description: "Central estimate (50th percentile)"
        }, {
            id: "n-04-02-04-02-03",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-04-02-04-02-03",
            description: "High estimate (90th percentile)"
        }, {
            id: "n-04-02-04-03-01",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-04-02-04-03-01",
            description: "Low estimate (10th percentile)"
        }, {
            id: "n-04-02-04-03-02",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-04-02-04-03-02",
            description: "Central estimate (50th percentile)"
        }, {
            id: "n-04-02-04-03-03",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-04-02-04-03-03",
            description: "High estimate (90th percentile)"
        }, {
            id: "n-05-5",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-05-5",
            description: "Heat exposure index"
        }, {
            id: "n-05-01-01-01",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-05-01-01-01",
            description: "Low estimate (10th percentile) &#8451;"
        }, {
            id: "n-05-01-01-02",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-05-01-01-02",
            description: "Central estimate (50th percentile &#8451;)"
        }, {
            id: "n-05-01-01-03",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-05-01-01-03",
            description: "High estimate (90th percentile) &#8451;"
        }, {
            id: "n-05-01-02-01",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-05-01-02-01",
            description: "Low estimate (10th percentile) &#8451;"
        }, {
            id: "n-05-01-02-02",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-05-01-02-02",
            description: "Central estimate (50th percentile) &#8451;"
        }, {
            id: "n-05-01-02-03",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-05-01-02-03",
            description: "High estimate (90th percentile) &#8451;"
        }, {
            id: "n-05-01-03-01",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-05-01-03-01",
            description: "Low estimate (10th percentile) &#8451;"
        }, {
            id: "n-05-01-03-02",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-05-01-03-02",
            description: "Central estimate (50th percentile) &#8451;"
        }, {
            id: "n-05-01-03-03",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-05-01-03-03",
            description: "High estimate (90th percentile) &#8451;"
        }, {
            id: "n-05-02-01-01",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-05-02-01-01",
            description: "Low estimate (10th percentile) % change"
        }, {
            id: "n-05-02-01-02",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-05-02-01-02",
            description: "Central estimate (50th percentile) % change"
        }, {
            id: "n-05-02-01-03",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-05-02-01-03",
            description: "High estimate (90th percentile) % change"
        }, {
            id: "n-05-02-02-01",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-05-02-02-01",
            description: "Low estimate (10th percentile) % change"
        }, {
            id: "n-05-02-02-02",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-05-02-02-02",
            description: "Central estimate (50th percentile) % change"
        }, {
            id: "n-05-02-02-03",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-05-02-02-03",
            description: "High estimate (90th percentile) % change"
        }, {
            id: "n-05-02-03-01",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-05-02-03-01",
            description: "Low estimate (10th percentile) % change"
        }, {
            id: "n-05-02-03-02",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-05-02-03-02",
            description: "Central estimate (50th percentile) % change"
        }, {
            id: "n-05-02-03-03",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-05-02-03-03",
            description: "High estimate (90th percentile) % change"
        }, {
            id: "n-05-03-01-01",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-05-03-01-01",
            description: "Low estimate (10th percentile) % change"
        }, {
            id: "n-05-03-01-02",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-05-03-01-02",
            description: "Central estimate (50th percentile) "
        }, {
            id: "n-05-03-01-03",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-05-03-01-03",
            description: "High estimate (90th percentile) % change"
        }, {
            id: "n-05-03-02-01",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-05-03-02-01",
            description: "Low estimate (10th percentile) % change"
        }, {
            id: "n-05-03-02-02",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-05-03-02-02",
            description: "Central estimate (50th percentile) % change"
        }, {
            id: "n-05-03-02-03",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-05-03-02-03",
            description: "High estimate (90th percentile) % change"
        }, {
            id: "n-05-03-03-01",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-05-03-03-01",
            description: "Low estimate (10th percentile) % change"
        }, {
            id: "n-05-03-03-02",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-05-03-03-02",
            description: "Central estimate (50th percentile) % change"
        }, {
            id: "n-05-03-03-03",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-05-03-03-03",
            description: "High estimate (90th percentile) % change"
        }, {
            id: "n-05-04-01-01",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-05-04-01-01",
            description: "Low estimate (10th percentile) % change"
        }, {
            id: "n-05-04-01-02",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-05-04-01-02",
            description: "Central estimate (50th percentile) "
        }, {
            id: "n-05-04-01-03",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-05-04-01-03",
            description: "High estimate (90th percentile) % change"
        }, {
            id: "n-05-04-02-01",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-05-04-02-01",
            description: "Low estimate (10th percentile) % change"
        }, {
            id: "n-05-04-02-02",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-05-04-02-02",
            description: "Central estimate (50th percentile) % change"
        }, {
            id: "n-05-04-02-03",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-05-04-02-03",
            description: "High estimate (90th percentile) % change"
        }, {
            id: "n-05-04-03-01",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-05-04-03-01",
            description: "Low estimate (10th percentile) % change"
        }, {
            id: "n-05-04-03-02",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-05-04-03-02",
            description: "Central estimate (50th percentile) % change"
        }, {
            id: "n-05-04-03-03",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-05-04-03-03",
            description: "High estimate (90th percentile) % change"
        }, {
            id: "n-06-01-index",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-06-01-index",
            description: "Social Heat Vulnerability Index"
        }, {
            id: "n-06-01-Sensitivity-index",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-06-01-Sensitivity-index",
            description: "Sensitivity Index"
        }, {
            id: "n-06-01-01-01",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "over75",
            description: "Older people (% people over 75 years)"
        }, {
            id: "n-06-01-01-03",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "under5",
            description: "Young children (% people under 5 years)"
        }, {
            id: "n-06-01-02-01",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "llti",
            description: "People in ill-health (% people whose day-to-day activities are limited)"
        }, {
            id: "n-06-01-02-02",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "onellti",
            description: "Households containing at least one person in ill-health (%)"
        }, {
            id: "n-06-02-Enhanced-Exposure-index",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "exposureHeat",
            description: "Enhanced Exposure to Heat Index"
        }, {
            id: "n-06-02-01-01",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "builtup",
            description: "Built up area (% not greenspace)"
        }, {
            id: "n-06-02-01-02",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "nogarden",
            description: "Lack of domestic gardens (area of building/domestic gardens)"
        }, {
            id: "n-06-02-02-01",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "notBlue",
            description: "Built up area (% area not blue space)"
        }, {
            id: "n-06-02-02-02",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "coast",
            description: "Distance to coast"
        }, {
            id: "n-06-02-02-03",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "elevation",
            description: "Elevation"
        }, {
            id: "n-06-02-03-02",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "highRise",
            description: "High rise homes (% households with lowest floor 5th floor or above)"
        }, {
            id: "n-06-03-Ability-to-Prepare-index",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-06-03-Ability-to-Prepare-index",
            description: "Inability to Prepare index"
        }, {
            id: "n-06-03-01-01",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "unemployment",
            description: "Unemployment (% working population unemployed)"
        }, {
            id: "n-06-03-01-02",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "lowIncome",
            description: "Low income occupations (% in routine or semi-routine occupations)"
        }, {
            id: "n-06-03-01-03",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "LT-unemployment",
            description: "Long-term unemployed (% who are LTU or who have never worked)"
        }, {
            id: "n-06-03-01-04",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "depChildUnemp",
            description: "Households with dependent children and no adults in employment (%)"
        }, {
            id: "n-06-03-01-05",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "income_weekly",
            description: "Weekly household income estimate (&pound;)"
        }, {
            id: "n-06-03-01-06",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "pensioner",
            description: "All pensioner households (%)"
        }, {
            id: "n-06-03-02-01",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "socRent",
            description: "Social renters (% Households renting from social or Council landlords)"
        }, {
            id: "n-06-03-02-02",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "priRent",
            description: "Private renters (% Households)"
        }, {
            id: "n-06-03-03-01",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "outsideUK",
            description: "Born outside UK/Ireland (%)"
        }, {
            id: "n-06-03-03-02",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "recentUK",
            description: "Recent arrivals to UK (% arrived in UK less than a year ago)"
        }, {
            id: "n-06-04-Ability-to-Respond-index",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-06-04-Ability-to-Respond-index",
            description: "Inability to Respond index"
        }, {
            id: "n-06-04-01-01",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "unemployment",
            description: "Unemployment (% working population unemployed)"
        }, {
            id: "n-06-04-01-02",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "lowIncome",
            description: "Low income occupations (% in routine or semi-routine occupations)"
        }, {
            id: "n-06-04-01-03",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "LT-unemployment",
            description: "Long-term unemployed (% who are LTU or who have never worked)"
        }, {
            id: "n-06-04-01-04",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "depChildUnemp",
            description: "Households with dependent children and no adults in employment (%)"
        }, {
            id: "n-06-04-01-05",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "income_weekly",
            description: "Weekly household income estimate (&pound;)"
        }, {
            id: "n-06-04-01-06",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "pensioner",
            description: "All pensioner households (%)"
        }, {
            id: "n-06-04-02-01",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "outsideUK",
            description: "Born outside UK/Ireland (%)"
        }, {
            id: "n-06-04-02-02",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "recentUK",
            description: "Recent arrivals to UK (% arrived in UK less than a year ago)"
        }, {
            id: "n-06-04-03-01",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "singlePen",
            description: "Single pensioner households (%)"
        }, {
            id: "n-06-04-03-02",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "lone-parent",
            description: "Lone parents with dependent children (% households)"
        }, {
            id: "n-06-04-03-03",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "noCarer",
            description: "Lack of carers (% people not providing unpaid care)"
        }, {
            id: "n-06-04-04-01",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "disability",
            description: "Disability (% people whose day-to-day activities are limited a lot)"
        }, {
            id: "n-06-04-04-02",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "noCar",
            description: "Lack of private transport (% households with no car or van)"
        }, {
            id: "n-06-04-05-01",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "IMD",
            description: "Index of Multiple Deprivation crime score"
        }, {
            id: "n-06-04-06-01",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "roadDensity",
            description: "Low road density (% area not road)"
        }, {
            id: "n-06-04-07-01",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "retailDensity",
            description: "Density of retail units (count / km2)"
        }, {
            id: "n-06-04-07-02",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "enterprises",
            description: "% change in the number of enterprises"
        }, {
            id: "n-06-05-Ability-to-Recover-index",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "n-06-05-Ability-to-Recover-index",
            description: "Inability to Recover index"
        }, {
            id: "n-06-05-01-01",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "outsideUK",
            description: "Born outside UK/Ireland (%)"
        }, {
            id: "n-06-05-01-02",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "recentUK",
            description: "Recent arrivals to UK (% arrived in UK less than a year ago)"
        }, {
            id: "n-06-05-02-01",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "singlePen",
            description: "Single pensioner households (%)"
        }, {
            id: "n-06-05-02-02",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "lone-parent",
            description: "Lone parents with dependent children (% households)"
        }, {
            id: "n-06-05-02-03",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "noCarer",
            description: "Lack of carers (% people not providing unpaid care)"
        }, {
            id: "n-06-05-03-01",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "disability",
            description: "Disability (% people whose day-to-day activities are limited a lot)"
        }, {
            id: "n-06-05-03-02",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "noCar",
            description: "Lack of private transport (% households with no car or van)"
        }, {
            id: "n-06-05-03-03",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "workAway",
            description: "Working away from home (% not working at home)"
        }, {
            id: "n-06-05-04-01",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "ttGP",
            description: "Travel time to nearest GP by walk/public transport (minutes)"
        }, {
            id: "n-06-05-04-02",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "min15GP",
            description: "% of at risk population (no car) outside of 15 minutes by walk/public transport to nearest GP"
        }, {
            id: "n-06-05-04-03",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "less15GP",
            description: "Number of GPs within 15 minutes by walk/public transport"
        }, {
            id: "n-06-05-04-04",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "less15GPcar",
            description: "Number of GPs within 15 minutes by car"
        }, {
            id: "n-06-05-04-05",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "walkHosp",
            description: "Travel time to nearest hospital by walk/public transport"
        }, {
            id: "n-06-05-04-06",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "carHosp",
            description: "Travel time to nearest hospital by car"
        }, {
            id: "n-06-05-04-07",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "risk30WalkHosp",
            description: "% of at risk population outside of 30 minutes by walk/PT to nearest hospital"
        }, {
            id: "n-06-05-04-08",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "less30minHospWalk",
            description: "Number of hospitals within 30 minutes by walk/public transport"
        }, {
            id: "n-06-05-04-09",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "less30minHospCar",
            description: "Number of hospitals within 30 minutes by car"
        }, {
            id: "n-07-01-01",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "LIHC_LA",
            description: "LA Low Income High Cost definition, 2012"
        }, {
            id: "n-07-01-02",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "fuel_pov_LA_10",
            description: "LA 10% definition, 2012"
        }, {
            id: "n-07-01-03",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "LIHC_LSOA",
            description: "LSOA Low Income High Cost definition, 2012"
        }, {
            id: "n-07-01-04",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "fuel_pov_LSOA_10",
            description: "LSOA 10% definition, 2012"
        }, {
            id: "n-07-02-01",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "LIHC_LA_2014",
            description: "LA Low Income High Cost definition, 2014"
        }, {
            id: "n-07-02-02",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "LIHC_LSOA_2014",
            description: "LSOA Low Income High Cost definition, 2014"
        }, {
            id: "n-3a-01",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "eainspire2011-wms-eaieaew00020008",
            description: "Flood Alert Areas"
        }, {
            id: "n-3a-02",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "eainspire2011-wms-nat_areasbenefit_inspire",
            description: "Areas Benefiting from Flood Defences"
        }, {
            id: "n-3a-03",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "eainspire2011-wms-nat_fsa_inspire",
            description: "Flood Storage Areas"
        }, {
            id: "n-3a-04",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "eainspire2011-wms-nat_floodzone2_inspire",
            description: "Flood Zone 2"
        }, {
            id: "n-3a-05",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "eainspire2011-wms-nat_floodzone3_inspire",
            description: "Flood Zone 3"
        }, {
            id: "n-3a-06",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "eainspire2011-wms-nat_defences_inspire",
            description: "Spatial Flood Defences"
        }, {
            id: "n-3a-07",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "ea-wms-eaieaew00020043",
            description: "Flood Risk Areas"
        }, {
            id: "n-3a-08",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "eainspire2011-wms-flood_warning_areas_010k_inspire",
            description: "Flood Warning Areas"
        }, {
            id: "n-3a-09",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "eainspire2011-wms-nat_hfm_inspire",
            description: "Historic Flood Map"
        }, {
            id: "n-3a-10",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "eainspire2011-wms-eaieaew00020010",
            description: "Recorded Flood Outlines"
        }, {
            id: "n-3a-11",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "eainspire2011-wms-RoFRS_02",
            description: "Risk of Flooding from Rivers and Sea"
        }, {
            id: "n-3a-12",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "eainspire2011-wms-sm_extent_data3_1_inspire",
            description: "Saltmarsh Extents"
        }, {
            // Natural Resources Wales
            id: "n-3c-01",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "NRW_FLOOD_WATCH_AREAS",
            description: "Flood Alert Areas"
        }, {
            id: "n-3c-02",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "NRW_FLOODMAP_AREAS_BENEFIT_DEFENCE",
            description: "Areas Benefiting from Flood Defences"
        }, {
            id: "n-3c-03",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "NRW_FLOODMAP_FLOOD_STORAGE",
            description: "Flood Storage Areas"
        }, {
            id: "n-3c-04",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "NRW_FLOODMAP_FLOOD_ZONE_2",
            description: "Flood Zone 2"
        }, {
            id: "n-3c-05",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "NRW_FLOODMAP_FLOOD_ZONE_3",
            description: "Flood Zone 3"
        }, {
            id: "n-3c-06",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "NRW_FLOODMAP_FLOOD_DEFENCES",
            description: "Spatial Flood Defences"
        }, {
            id: "n-3c-07",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "NRW_FLOOD_RISK_AREAS",
            description: "Flood Risk Areas"
        }, {
            id: "n-3c-08",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "NRW_FLOOD_WARNING",
            description: "Flood Warning Areas"
        }, {
            id: "n-3c-09",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "NRW_HISTORIC_FLOODMAP",
            description: "Historic Flood Map"
        }, {
            id: "n-3c-10",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "",
            description: "Recorded Flood Outlines"
        }, {
            id: "n-3c-11",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "NRW_RISK_FLOODING_RIVER_SEA",
            description: "Risk of Flooding from Rivers and Sea"
        }, {
            id: "n-3c-12",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "NRW_SALTMARSH_EXTENTS",
            description: "Saltmarsh Extents"

            // Scottish Environment Protection Agency
        }, {
            id: "n-3b-01",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "SEPA_River_Flooding",
            description: "River Flooding"

            // Natural Resources Wales


        }, {
            id: "n-13-01a",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "englishRegion",
            description: "English Regions (Dec 2016)"
        }, {
            id: "n-13-01b",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "ScotRegion",
            description: "Scottish Parliamentary Regions (May 2016)"
        }, {
            id: "n-13-01c",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "WalesRegion",
            description: "National Assembly Wales Constituencies (Dec 2016)"
        }, {
            id: "n-13-02",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "district", //counties
            description: "Districts and Unitaries" //Counties and Unitaries
        }, {
            id: "n-13-03",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "wards",
            description: "Wards"
        }, {
            id: "n-13-04",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "urban",
            description: "Built-up areas (England & Wales Dec 2011)"
        }, {
            id: "n-13-05",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "msoa",
            description: "Middle Super Output Areas (England & Wales Dec 2011)"
        }, {
            id: "n-13-06",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "dzScot",
            description: "Data Zones Scotland (2011)"
        }, {
            id: "n-13-07",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "constituencies",
            description: "Parliamentary constituencies 2011"
        }, {
            id: "n-14-1",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "fc_i_present",
            description: "River & Coastal -> Individual -> Present Day"
        }, {
            id: "n-14-2",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "fc_i_present-opt2",
            description: "River & Coastal -> Individual -> Present Day"
        }, {
            id: "n-14-3",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "fc_i_present-opt3",
            description: "River & Coastal -> Individual -> Present Day -> Social Flood Risk Index"
        }, {
            id: "n-14-4",
            mapFile: "cj_q18.map",
            isVisible: false,
            osUrl: "",
            legendGraphicUrl: "",
            wmsLayer: null,
            mapFileLayerName: "fc_i_present-opt4",
            description: "River & Coastal -> Individual -> Present Day"
        }
    ]
;
// Mapping info sheets
var infoLinks = [{
    // Neighbourhood Flood Vulnerability Index (NFVI)
    treeNode: "n-1a",
    infoRef: "nfvi.html"
}, {
    treeNode: "n-1-1a",
    infoRef: "nfvi.html"
}, {
    treeNode: "n-1-2a",
    infoRef: "nfvi.html"
}, {
    treeNode: "n-1-3a",
    infoRef: "nfvi.html"
}, {
    treeNode: "n-1-4a",
    infoRef: "nfvi.html"
}, {
    treeNode: "n-1-5a",
    infoRef: "nfvi.html"
}, {
    treeNode: "n-1-1-1-1",
    infoRef: "age_05.html"
}, {
    treeNode: "n-1-1-1-2",
    infoRef: "age_75.html"
}, {
    treeNode: "n-1-1-2-1",
    infoRef: "healthH1.html"
}, {
    treeNode: "n-1-1-2-2",
    infoRef: "healthH2.html"
}, /*{
    treeNode: "n-1-2-1a",
    infoRef: "income_i1_5.html"
},*/ {
    treeNode: "n-1-2-1-1",
    infoRef: "income_i1_5.html"
}, {
    treeNode: "n-1-2-1-2",
    infoRef: "income_i1_5.html"
}, {
    treeNode: "n-1-2-1-3",
    infoRef: "income_i1_5.html"
}, {
    treeNode: "n-1-2-1-4",
    infoRef: "income_i1_5.html"
}, {
    treeNode: "n-1-2-1-5",
    infoRef: "income_i1_5.html"
}, {
    treeNode: "n-1-2-4a",
    infoRef: "tenure_T1_T2.html"
}, {
    treeNode: "n-1-2-4-1",
    infoRef: "tenure_T1_T2.html"
}, {
    treeNode: "n-1-2-4-2",
    infoRef: "tenure_T1_T2.html"
}, {
    treeNode: "n-1-2-2a",
    infoRef: "information_use_F1_2.html"
}, {
    treeNode: "n-1-2-2-1",
    infoRef: "information_use_F1_2.html"
}, {
    treeNode: "n-1-2-2-2",
    infoRef: "information_use_F1_2.html"
},/* {
    treeNode: "n-1-3-1a",
    infoRef: "income_i1_5.html"
},*/ {
    treeNode: "n-1-3-1-1",
    infoRef: "income_i1_5.html"
}, {
    treeNode: "n-1-3-1-2",
    infoRef: "income_i1_5.html"
}, {
    treeNode: "n-1-3-1-3",
    infoRef: "income_i1_5.html"
}, {
    treeNode: "n-1-3-1-4",
    infoRef: "income_i1_5.html"
}, {
    treeNode: "n-1-3-1-5",
    infoRef: "income_i1_5.html"
}, {
    treeNode: "n-1-3-2a",
    infoRef: "information_use_F1_2.html"
}, {
    treeNode: "n-1-3-2-1",
    infoRef: "information_use_F1_2.html"
}, {
    treeNode: "n-1-3-2-2",
    infoRef: "information_use_F1_2.html"
}, {
    treeNode: "n-1-2-3a",
    infoRef: "local_knowledge_K1.html"
}, {
    treeNode: "n-1-2-3-1",
    infoRef: "local_knowledge_K1.html"
}, {
    treeNode: "n-1-3-3a",
    infoRef: "local_knowledge_K1.html"
}, {
    treeNode: "n-1-3-3-1",
    infoRef: "local_knowledge_K1.html"
}, {
    treeNode: "n-1-3-4a",
    infoRef: "physical_mobility.html"
}, {
    treeNode: "n-1-3-4-1",
    infoRef: "physical_mobility.html"
}, {
    treeNode: "n-1-3-4-2",
    infoRef: "physical_mobility.html"
}, {
    treeNode: "n-1-3-4-3",
    infoRef: "physical_mobility.html"
}, {
    treeNode: "n-1-3-5a",
    infoRef: "crimeC1.html"
}, {
    treeNode: "n-1-3-5-1",
    infoRef: "crimeC1.html"
}, /*{
    treeNode: "n-1-4-1a",
    infoRef: "income_i1_5.html"
},*/ {
    treeNode: "n-1-4-1-1",
    infoRef: "income_i1_5.html"
}, {
    treeNode: "n-1-4-1-2",
    infoRef: "income_i1_5.html"
}, {
    treeNode: "n-1-4-1-3",
    infoRef: "income_i1_5.html"
}, {
    treeNode: "n-1-4-1-4",
    infoRef: "income_i1_5.html"
}, {
    treeNode: "n-1-4-1-5",
    infoRef: "income_i1_5.html"
}, {
    treeNode: "n-1-4-2a",
    infoRef: "information_use_F1_2.html"
}, {
    treeNode: "n-1-4-2-1",
    infoRef: "information_use_F1_2.html"
}, {
    treeNode: "n-1-4-2-2",
    infoRef: "information_use_F1_2.html"
}, {
    treeNode: "n-1-4-3a",
    infoRef: "physical_mobility.html"
}, {
    treeNode: "n-1-4-3-1",
    infoRef: "physical_mobility.html"
}, {
    treeNode: "n-1-4-3-2",
    infoRef: "physical_mobility.html"
}, {
    treeNode: "n-1-4-3-3",
    infoRef: "physical_mobility.html"
}, {
    treeNode: "n-1-5-1a",
    infoRef: "caravanL1.html"
}, {
    treeNode: "n-1-5-1-1",
    infoRef: "caravanL1.html"
}, {
    treeNode: "n-1-5-2-1",
    infoRef: "direct-flood_E1.html"
}, {
    treeNode: "n-1-5-3a",
    infoRef: "service_availability.html"
}, {
    treeNode: "n-1-5-3-1",
    infoRef: "service_availability.html"
}, {
    treeNode: "n-1-5-3-2",
    infoRef: "service_availability.html"
}, {
    treeNode: "n-1-5-3-3",
    infoRef: "service_availability.html"
}, {
    treeNode: "n-1-5-3-4",
    infoRef: "service_availability.html"
}, {
    treeNode: "n-1-5-4a",
    infoRef: "social_networks.html"
}, {
    treeNode: "n-1-5-4-1",
    infoRef: "social_networks.html"
}, {
    treeNode: "n-1-5-4-2",
    infoRef: "social_networks.html"
}, {
    treeNode: "n-1-5-4-3",
    infoRef: "social_networks.html"
}, {
    // Social Flood Risk Index (SFRI)
    treeNode: "n-2",
    infoRef: "sfri.html"
}, {
    treeNode: "n-02-01",
    infoRef: "sheet4.html"
}, {
    treeNode: "n-02-03",
    infoRef: "sheet5.html"
}, {
    treeNode: "n-03-01",
    infoRef: "sheet16.html"
}, {
    treeNode: "n-03-02",
    infoRef: "sheet17.html"
}, {
    treeNode: "n-03-03",
    infoRef: "sheet19.html"
}, {
    treeNode: "n-03-04",
    infoRef: "sheet21.html"
}, {
    treeNode: "n-03-05",
    infoRef: "sheet23.html"
}, {
    treeNode: "n-03-06",
    infoRef: "sheet6.html"
}, {
    // Heat disadvantage (2011) info sheets
    treeNode: "n-04",
    infoRef: "sheet7.html"
}, {
    treeNode: "n-04-01-01",
    infoRef: "sheet8.html"
}, {
    treeNode: "n-04-01-01-01-02",
    infoRef: "sheet9.html"
}, {
    // Heat exposure (2011) info sheets
    treeNode: "n-05",
    infoRef: "sheet10.html"
}, {
    treeNode: "n-05-01",
    infoRef: "sheet11.html"
}, {
    treeNode: "n-05-02",
    infoRef: "sheet12.html"
}, {
    treeNode: "n-05-03",
    infoRef: "sheet13.html"
}, {
    treeNode: "n-05-04",
    infoRef: "sheet14.html"
}, {
    // Heat socio-spatial vulnerability (2011) info sheets
    treeNode: "n-06",
    infoRef: "sheet15.html"
}, {
    treeNode: "n-06-01-index",
    infoRef: "sheet15.html"
}, {
    treeNode: "n-06-01-Sensitivity-index",
    infoRef: "sheet16.html"
}, {
    treeNode: "n-06-01",
    infoRef: "sheet16.html"
}, {
    treeNode: "n-06-02",
    infoRef: "sheet18.html"
}, {
    treeNode: "n-06-03",
    infoRef: "sheet20.html"
}, {
    treeNode: "n-06-04",
    infoRef: "sheet22.html"
}, {
    treeNode: "n-06-05",
    infoRef: "sheet24.html"
}, {
    treeNode: "n-03-03-01-01",
    infoRef: "AT0_1_AT1_1_AT2_1.html"
}, {
    treeNode: "n-03-04-01-01",
    infoRef: "AT0_1_AT1_1_AT2_1.html"
}, {
    treeNode: "n-03-05-01-01",
    infoRef: "AT0_1_AT1_1_AT2_1.html"
}, {
    treeNode: "n-06-03-01-01",
    infoRef: "AT0_1_AT1_1_AT2_1.html"
}, {
    treeNode: "n-06-04-01-01",
    infoRef: "AT0_1_AT1_1_AT2_1.html"
}, {
    treeNode: "n-03-03-01-02",
    infoRef: "AT0_2_AT1_2_AT2_2.html"
}, {
    treeNode: "n-03-04-01-02",
    infoRef: "AT0_2_AT1_2_AT2_2.html"
}, {
    treeNode: "n-03-05-01-02",
    infoRef: "AT0_2_AT1_2_AT2_2.html"
}, {
    treeNode: "n-06-03-01-02",
    infoRef: "AT0_2_AT1_2_AT2_2.html"
}, {
    treeNode: "n-06-04-01-02",
    infoRef: "AT0_2_AT1_2_AT2_2.html"
}, {
    treeNode: "n-03-03-01-03",
    infoRef: "AT0_3_AT1_3_AT2_3.html"
}, {
    treeNode: "n-03-04-01-03",
    infoRef: "AT0_3_AT1_3_AT2_3.html"
}, {
    treeNode: "n-03-05-01-03",
    infoRef: "AT0_3_AT1_3_AT2_3.html"
}, {
    treeNode: "n-06-03-01-03",
    infoRef: "AT0_3_AT1_3_AT2_3.html"
}, {
    treeNode: "n-06-04-01-03",
    infoRef: "AT0_3_AT1_3_AT2_3.html"
}, {
    treeNode: "n-03-03-01-04",
    infoRef: "AT0_4_AT1_4_AT2_4.html"
}, {
    treeNode: "n-03-04-01-04",
    infoRef: "AT0_4_AT1_4_AT2_4.html"
}, {
    treeNode: "n-03-05-01-04",
    infoRef: "AT0_4_AT1_4_AT2_4.html"
}, {
    treeNode: "n-06-03-01-04",
    infoRef: "AT0_4_AT1_4_AT2_4.html"
}, {
    treeNode: "n-06-04-01-04",
    infoRef: "AT0_4_AT1_4_AT2_4.html"
}, {
    treeNode: "n-03-03-01-05",
    infoRef: "AT0_9_AT1_9_AT2_9.html"
}, {
    treeNode: "n-03-04-01-05",
    infoRef: "AT0_9_AT1_9_AT2_9.html"
}, {
    treeNode: "n-03-05-01-05",
    infoRef: "AT0_9_AT1_9_AT2_9.html"
}, {
    treeNode: "n-06-03-01-05",
    infoRef: "AT0_9_AT1_9_AT2_9.html"
}, {
    treeNode: "n-06-04-01-05",
    infoRef: "AT0_9_AT1_9_AT2_9.html"
}, {
    treeNode: "n-03-03-01-06",
    infoRef: "AT0_10_AT1_10_AT2_10.html"
}, {
    treeNode: "n-03-04-01-06",
    infoRef: "AT0_10_AT1_10_AT2_10.html"
}, {
    treeNode: "n-03-05-01-06",
    infoRef: "AT0_10_AT1_10_AT2_10.html"
}, {
    treeNode: "n-06-03-01-06",
    infoRef: "AT0_10_AT1_10_AT2_10.html"
}, {
    treeNode: "n-06-04-01-06",
    infoRef: "AT0_10_AT1_10_AT2_10.html"
}, {
    treeNode: "n-03-03-02-01",
    infoRef: "AT0_11.html"
}, {
    treeNode: "n-06-03-02-01",
    infoRef: "AT0_11.html"
}, {
    treeNode: "n-03-03-02-02",
    infoRef: "AT0_12.html"
}, {
    treeNode: "n-06-03-02-02",
    infoRef: "AT0_12.html"
}, {
    treeNode: "n-03-03-03-01",
    infoRef: "AT0_13_AT1_13_AT2_12.html"
}, {
    treeNode: "n-03-04-02-01",
    infoRef: "AT0_13_AT1_13_AT2_12.html"
}, {
    treeNode: "n-03-05-02-01",
    infoRef: "AT0_13_AT1_13_AT2_12.html"
}, {
    treeNode: "n-06-03-03-01",
    infoRef: "AT0_13_AT1_13_AT2_12.html"
}, {
    treeNode: "n-06-04-02-01",
    infoRef: "AT0_13_AT1_13_AT2_12.html"
}, {
    treeNode: "n-06-05-01-01",
    infoRef: "AT0_13_AT1_13_AT2_12.html"
}, {
    treeNode: "n-03-03-04-01",
    infoRef: "AT0_24_AT1_20.html"
}, {
    treeNode: "n-03-04-03-01",
    infoRef: "AT0_24_AT1_20.html"
}, {
    treeNode: "n-03-03-05-01",
    infoRef: "AT0_25_AT1_21_AT2_16.html"
}, {
    treeNode: "n-03-04-04-01",
    infoRef: "AT0_25_AT1_21_AT2_16.html"
}, {
    treeNode: "n-03-05-03-01",
    infoRef: "AT0_25_AT1_21_AT2_16.html"
}, {
    treeNode: "n-03-03-03-02",
    infoRef: "AT0_26_AT1_39_AT2_53.html"
}, {
    treeNode: "n-03-04-02-02",
    infoRef: "AT0_26_AT1_39_AT2_53.html"
}, {
    treeNode: "n-03-05-02-02",
    infoRef: "AT0_26_AT1_39_AT2_53.html"
}, {
    treeNode: "n-06-03-03-02",
    infoRef: "AT0_26_AT1_39_AT2_53.html"
}, {
    treeNode: "n-06-04-02-02",
    infoRef: "AT0_26_AT1_39_AT2_53.html"
}, {
    treeNode: "n-06-05-01-02",
    infoRef: "AT0_26_AT1_39_AT2_53.html"
}, {
    treeNode: "n-03-04-05-01",
    infoRef: "AT1_23_AT2_18.html"
}, {
    treeNode: "n-03-05-04-01",
    infoRef: "AT1_23_AT2_18.html"
}, {
    treeNode: "n-06-04-03-01",
    infoRef: "AT1_23_AT2_18.html"
}, {
    treeNode: "n-06-05-02-01",
    infoRef: "AT1_23_AT2_18.html"
}, {
    treeNode: "n-03-04-05-02",
    infoRef: "AT1_26_AT2_21.html"
}, {
    treeNode: "n-03-05-04-02",
    infoRef: "AT1_26_AT2_21.html"
}, {
    treeNode: "n-06-04-03-02",
    infoRef: "AT1_26_AT2_21.html"
}, {
    treeNode: "n-06-05-02-02",
    infoRef: "AT1_26_AT2_21.html"
}, {
    treeNode: "n-03-04-05-03",
    infoRef: "AT1_28_AT2_23.html"
}, {
    treeNode: "n-03-05-04-03",
    infoRef: "AT1_28_AT2_23.html"
}, {
    treeNode: "n-06-04-03-03",
    infoRef: "AT1_28_AT2_23.html"
}, {
    treeNode: "n-06-05-02-03",
    infoRef: "AT1_28_AT2_23.html"
}, {
    treeNode: "n-03-04-06-01",
    infoRef: "AT1_29_AT2_24.html"
}, {
    treeNode: "n-03-05-05-01",
    infoRef: "AT1_29_AT2_24.html"
}, {
    treeNode: "n-06-04-04-01",
    infoRef: "AT1_29_AT2_24.html"
}, {
    treeNode: "n-06-05-03-01",
    infoRef: "AT1_29_AT2_24.html"
}, {
    treeNode: "n-03-04-06-02",
    infoRef: "AT1_30_AT2_25.html"
}, {
    treeNode: "n-03-05-05-02",
    infoRef: "AT1_30_AT2_25.html"
}, {
    treeNode: "n-06-04-04-02",
    infoRef: "AT1_30_AT2_25.html"
}, {
    treeNode: "n-06-05-03-02",
    infoRef: "AT1_30_AT2_25.html"
}, {
    treeNode: "n-03-04-07-01",
    infoRef: "AT1_33.html"
}, {
    treeNode: "n-06-04-05-01",
    infoRef: "AT1_33.html"
}, {
    treeNode: "n-03-04-08-01",
    infoRef: "AT1_35.html"
}, {
    treeNode: "n-06-04-06-01",
    infoRef: "AT1_35.html"
}, {
    treeNode: "n-06-04-07-01",
    infoRef: "AT1_36.html"
}, {
    treeNode: "n-06-04-07-02",
    infoRef: "AT1_37.html"
}, {
    treeNode: "n-03-04-06-03",
    infoRef: "AT1_40_AT2_55.html"
}, {
    treeNode: "n-03-05-05-03",
    infoRef: "AT1_40_AT2_55.html"
}, {
    treeNode: "n-06-05-03-03",
    infoRef: "AT1_40_AT2_55.html"
}, {
    treeNode: "n-06-05-04-01",
    infoRef: "AT2_27.html"
}, {
    treeNode: "n-06-05-04-02",
    infoRef: "AT2_30.html"
}, {
    treeNode: "n-06-05-04-03",
    infoRef: "AT2_32.html"
}, {
    treeNode: "n-06-05-04-04",
    infoRef: "AT2_33.html"
}, {
    treeNode: "n-06-05-04-05",
    infoRef: "AT2_38.html"
}, {
    treeNode: "n-06-05-04-06",
    infoRef: "AT2_42.html"
}, {
    treeNode: "n-06-05-04-07",
    infoRef: "AT2_39.html"
}, {
    treeNode: "n-06-05-04-08",
    infoRef: "AT2_41.html"
}, {
    treeNode: "n-06-05-04-09",
    infoRef: "AT2_42.html"
}, {
    treeNode: "n-03-05-06-01",
    infoRef: "AT2_50.html"
}, {
    treeNode: "n-03-02-01-01",
    infoRef: "E_1.html"
}, {
    treeNode: "n-06-02-Enhanced-Exposure-index",
    infoRef: "sheet18.html",/*eeh-index.html"*/
}, {
    treeNode: "n-06-02-01-01",
    infoRef: "E_1.html"
}, {
    treeNode: "n-03-02-01-02",
    infoRef: "E_2.html"
}, {
    treeNode: "n-06-02-01-02",
    infoRef: "E_2.html"
}, {
    treeNode: "n-06-02-02-01",
    infoRef: "E_3.html"
}, {
    treeNode: "n-06-02-02-02",
    infoRef: "E_4.html"
}, {
    treeNode: "n-06-02-02-03",
    infoRef: "E_6.html"
}, {
    treeNode: "n-03-02-02-01",
    infoRef: "E_9.html"
}, {
    treeNode: "n-03-02-02-02",
    infoRef: "E_10.html"
}, {
    treeNode: "n-06-02-03-02",
    infoRef: "E_11.html"
}, {
    treeNode: "n-03-01-01-03",
    infoRef: "S1.html"
}, {
    treeNode: "n-06-01-01-03",
    infoRef: "S1.html"
}, {
    treeNode: "n-03-01-01-01",
    infoRef: "S3.html"
}, {
    treeNode: "n-06-01-01-01",
    infoRef: "S3.html"
}, {
    treeNode: "n-03-01-02-01",
    infoRef: "S4.html"
}, {
    treeNode: "n-06-01-02-01",
    infoRef: "S4.html"
}, {
    treeNode: "n-03-01-02-02",
    infoRef: "S7.html"
}, {
    treeNode: "n-06-01-02-02",
    infoRef: "S7.html"
}, {
    treeNode: "n-07-01-01",
    infoRef: "FuelPovertyLA.html"
}, {
    treeNode: "n-07-01-02",
    infoRef: "FuelPovertyLA10.html"
}, {
    treeNode: "n-07-01-03",
    infoRef: "FuelPovertyLSOA.html"
}, {
    treeNode: "n-07-01-04",
    infoRef: "FuelPovertyLSOA10.html"
}, {
    treeNode: "n-07-02-01",
    infoRef: "FuelPovertyLA_2014.html"
}, {
    treeNode: "n-07-02-02",
    infoRef: "FuelPovertyLSOA_2014.html"
}, {
    treeNode: "n-3a",
    infoRef: "EA_maps.html"
}, {
    treeNode: "n-3b",
    infoRef: "SEPA_maps.html"
}, {
    treeNode: "n-3c",
    infoRef: "NRW_maps.html"
}, {
    treeNode: "n-13-06",
    infoRef: "datazone.html"
}];