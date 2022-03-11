<!--?php
session_start();
require_once 'register/class.user.php';
$user_home = new USER();

if (!$user_home->is_logged_in()) {
    $user_home->redirect('register/index.php');
}

$stmt = $user_home->runQuery("SELECT * FROM tbl_users WHERE userID=:uid");
$stmt->execute(array(":uid" => $_SESSION['userSession']));
$row = $stmt->fetch(PDO::FETCH_ASSOC);
?-->
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no"/>
    <meta name="description"
          content="The Spatial Tool for Climate Just, a Joesph Rowntree Foundation Funded project: developed by Richard Kingston, SPA-lab, The University of Manchester"/>
    <meta name="keywords" content="climate change, adaptation, map tool, GIS, spatial planning"/>
    <meta name="Author" content="Richard Kingston"/>
    <title>The Spatial Tool for Climate Just - assessing the geography of England's vulnerability to climate
        change</title>
    <!-- Bootstrap -->
    <!--link href="register/bootstrap/css/bootstrap.min.css" rel="stylesheet" media="screen">
    <link href="register/bootstrap/css/bootstrap-responsive.min.css" rel="stylesheet" media="screen">
    <link href="register/assets/styles.css" rel="stylesheet" media="screen"-->
    <!-- heat maps menu css -->
    <!--link rel="stylesheet" href="mdb/css/mdb.lite.min.css"/-->
    <link rel="stylesheet" href="https://labs.os.uk/public/os-api-branding/v0.2.0/os-api-branding.css"/>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"/>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900"/>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/9d2649a44b.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="css/jquery-ui-1.10.3.custom.min.css"/>
    <link rel="stylesheet" href="css/cj_pink.css"/>
    <link rel="stylesheet" href="css/info.css"/>
    <!-- OS mapping and Leaflet styles -->
    <link rel="stylesheet" href="https://labs.os.uk/public/os-api-branding/v0.2.0/os-api-branding.css"/>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
          crossorigin=""/>
    <link rel='stylesheet' href='css/leaflet.fullscreen.css'/>
    <link rel="stylesheet" href="css/leaflet-sidebar.css"/>
    <link rel="stylesheet" href="css/L.Control.ZoomBox.css"/>
    <link rel="stylesheet" href="css/L.Control.HtmlLegend.css"/>
    <link rel="stylesheet" href="css/Leaflet.NavBar.css"/>
    <link rel="stylesheet" href="css/Control.Geocoder.css"/>
    <link rel="stylesheet" href="css/Control.Loading.css"/>
    <link rel="stylesheet" href="css/iconLayers.css"/>
    <link rel="stylesheet" href="css/styledLayerControl.css"/>
    <link rel="stylesheet" href="css/L.Control.Layers.Tree.css"/>
    <link rel="stylesheet" href="css/leaflet.label.css"/>
    <link rel="stylesheet" href="css/printMap.css"/>
    <link rel="stylesheet" href="css/utils.css"/>
    <link rel="stylesheet" href="info17/info.css"/>
    <!--script type="text/javascript" src="js/choropleth/vue.min.js"></script-->
    <style>
        .dropdown-submenu {
            position: relative;
        }

        .dropdown-submenu .dropdown-menu {
            top: 0;
            left: 100%;
            margin-top: -1px;
        }
    </style>
</head>
<body>
<div id="sidebar-left" class="leaflet-sidebar collapsed">
    <!-- nav tabs -->
    <div class="leaflet-sidebar-tabs">
        <!-- top aligned tabs -->
        <ul role="tablist">
            <li><a href="#intro" role="tab" title="Introduction"><i class="fas fa-info-circle"></i></a></li>
            <li><a href="#mapping" role="tab" title="Maps"><i class="fas fa-map-marked-alt"></i></a></li>
            <li><a href="#help" role="tab" title="Help"><i class="far fa-question-circle"></i></a></li>
            <li><a href="#about" role="tab" title="About"><i class="fas fa-file-alt"></i></a></li>
            <li><a href="#download" role="tab" title="Data"><i class="fas fa-download"></i></a></li>
            <li><a href="#copyright" role="tab" title="Copyright"><i class="far fa-copyright"></i></a></li>
        </ul>
    </div>
    <!-- panel content -->
    <div class="leaflet-sidebar-content">
        <div class="leaflet-sidebar-pane" id="intro">
            <h1 class="leaflet-sidebar-header">Introduction <span class="leaflet-sidebar-close"><i
                            class="fa fa-caret-left"></i></span></h1>
            <p class="lead pt-3">The Climate Just Map Tool shows the geography of vulnerability to climate change at
                a
                neighbourhood scale. Its purpose is to support local planning and responses to a changing climate.
                The
                Tool includes the latest flood vulnerability and disadvantage data for the UK in addition to
                existing
                heat data for England.</p>
            <p class="lead"></p>
            <p class="lead">Use the symbols to the left of this panel for the following:
            <p class="lead"><i class="fas fa-map-marked-alt"></i> choose what to map</p>
            <p class="lead"><i class="far fa-question-circle"></i> help</p>
            <p class="lead"><i class="fas fa-file-alt"></i> about</p>
            <p class="lead"><i class="fas fa-download"></i> data download</p>
            <p class="lead"><i class="far fa-copyright"></i> copyright information</p>
        </div>
        <div class="leaflet-sidebar-pane" id="mapping">
            <h1 class="leaflet-sidebar-header">Maps
                <!--button type="button" class="btn btn-dark btn-sm"
                        onClick="window.open(location,'_blank'); return false;">
                    <small>open in new tab</small></button-->
                <span class="leaflet-sidebar-close"><i class="fa fa-caret-left"></i></span>
            </h1>
            <!--p class="lead">Choose a map by navigating the tree menu. Click on the <i class="far fa-plus-square"></i> or
                <i class="far fa-minus-square"></i> symbol to expand or collapse the tree menu. Display a map by
                selecting this <i class="far fa-check-square"></i> next to the relevant map name.</p>
            <p>Download a <a href="info17/CJ-map-menu_2018.pdf" target="_blank" id="textLink">printable version <span
                            class="glyphicon glyphicon-new-window"></span></a> of the map layers available in the tool.
                There's also a <a href="info17/CJ-infosheets-combined-2018_all.pdf" target="_blank" id="textLink">printable
                    version <span class="glyphicon glyphicon-new-window"></span></a> of the full set of information
                sheets.</p-->
            <h4>Current technical issues</h4>
            <p class="text-danger">PLEASE NOTE: Due to a technical upgrade to the underlying base mapping all maps in
                the 'Heat' section are still not
                fully working. We've also disabled the registration system for the time being.</p>
            <p>You can remove all the map layers here: <img src="css/images/removeMap.png" height="20px"
                                                            alt="Remove map layers" title="Remove map layers"
                                                            onclick="Clear();"></p>
            <!--input type="search" onkeyup="searchTree()" placeholder="Search for map layer..." title="Type in a map layer"-->
            <div id="mapTabs" class="container">
                <ul class="nav nav-tabs" id="savedTab">
                    <li class="nav-item"><a href="#flood" class="nav-link active" data-toggle="tab">Flooding</a></li>
                    <li class="nav-item"><a href="#heat" class="nav-link" data-toggle="tab">Heat</a></li>
                    <li class="nav-item"><a href="#fuel" class="nav-link" data-toggle="tab">Fuel Poverty</a></li>
                    <li class="nav-item"><a href="#agency" class="nav-link" data-toggle="tab">Government agency maps</a></li>
                    <li class="nav-item"><a href="#admin" class="nav-link" data-toggle="tab">Admin</a></li>
                </ul>
                <div class="tab-content clearfix">
                    <div class="tab-pane active" id="flood">
                        <div id="custom-map-controls-1"></div>
                    </div>
                    <div class="tab-pane" id="heat">
                        <div id="custom-map-controls-2"></div>
                    </div>
                    <div class="tab-pane" id="fuel">
                        <div id="custom-map-controls-3"></div>
                    </div>
                    <div class="tab-pane" id="agency">
                        <div id="custom-map-controls-4"></div>
                    </div>
                    <div class="tab-pane" id="admin">
                        <p>These maps show administrative boundaries.</p>
                        <div id="custom-map-controls-5"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="leaflet-sidebar-pane" id="help">
            <h1 class="leaflet-sidebar-header">Help <span class="leaflet-sidebar-close"><i
                            class="fa fa-caret-left"></i></span>
            </h1>
            <div class="accordion" id="accordionHelp">
                <div class="card">
                    <div class="card-header" id="headingOne">
                        <h2 class="mb-0">
                            <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse"
                                    data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Understanding the maps
                            </button>
                        </h2>
                    </div>
                    <div id="collapseOne" class="collapse" aria-labelledby="headingOne"
                         data-parent="#accordionHelp">
                        <div class="card-body">
                            <p>The Climate Just Map Tool shows which places may be most disadvantaged through
                                climate
                                impacts. It aims to raise awareness about how <a
                                        href="https://www.climatejust.org.uk/glossary/S" target="_blank"
                                        id="textLink">social vulnerability</a> combined with <a
                                        href="https://www.climatejust.org.uk/glossary/E" target="_blank"
                                        id="textLink">exposure</a> to hazards, like flooding and heat,
                                may lead to uneven impacts in different neighbourhoods, causing <a
                                        href="https://www.climatejust.org.uk/glossary/C" target="_blank"
                                        id="textLink">climate disadvantage</a>. The maps can be used alongside other
                                local knowledge to identify where actions may be needed. There are maps on:</p>
                            <ul>
                                <li>Flooding (river/coastal flooding &amp; surface water flooding)</li>
                                <li>Heat</li>
                                <li>Fuel poverty.</li>
                            </ul>
                            <p>All of these can help to inform local planning and responses to support vulnerable
                                people
                                and places.</p>
                            <p>The guidance presented here focuses on the flood and heat maps.</p>
                            <p>Read our brief <a
                                        href="https://www.climatejust.org.uk/where-are-most-disadvantaged-communities-relation-climate-impacts-and-extreme-weather-events-0"
                                        target="_blank" id="textLink">overview</a> to understand the key issues
                                associated with climate disadvantage due to flooding and heat.</p>
                            <p>Read the <a
                                        href="https://www.climatejust.org.uk/messages/depth-which-places-are-disadvantaged"
                                        target="_blank" id="textLink">in depth section</a> for the reasons for
                                mapping
                                climate disadvantage, the concepts and indicators, the national picture and what can
                                be
                                done about it.</p>
                            <p>Before using the tool, look at the <a
                                        href="https://www.climatejust.org.uk/messages/benefits-and-drawbacks-maps"
                                        target="_blank" id="textLink">benefits and drawbacks</a> associated with the
                                maps.</p>
                            <p>To understand how to interpret the maps, drawing on examples from different local
                                authorities, see the <a
                                        href="https://www.climatejust.org.uk/messages/user-guide-map-tool"
                                        target="_blank" id="textLink">user guide</a>.</p>
                            <p>To create your own maps using additional data, please refer to our <a
                                        href="https://www.climatejust.org.uk/resources/technical-guidance"
                                        target="_blank" id="textLink">technical guide</a>.</p>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header" id="headingTwo">
                        <h2 class="mb-0">
                            <button class="btn btn-link btn-block text-left collapsed" type="button"
                                    data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false"
                                    aria-controls="collapseTwo">
                                Interpreting the maps at the local scale
                            </button>
                        </h2>
                    </div>
                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo"
                         data-parent="#accordionHelp">
                        <div class="card-body">
                            <p>Have a look at the <a href="/messages/user-guide-map-tool" target="_blank"
                                                     id="textLink">user
                                    guide</a> [pdf download] to interpreting the maps for examples of local flood
                                and
                                heat maps. This should help you to understand and interpret your local picture.</p>
                            <p>Examine the maps of your local area. Are there areas of extreme flood or heat
                                disadvantage?</p>
                            <p>Examine the drivers of this – is it about high exposure, high vulnerability or both?
                                Which indicators make the area most vulnerable?</p>
                            <p>What does this suggest about the vulnerable groups and areas which you need to
                                target in order to build resilience?</p>
                            <p>A downloadable spreadsheet of area values to assist you with this task can be found
                                via the Data download tab. Local authority summaries will be available soon.</p>
                            <p>What do the maps suggest about issues to be tackled? Who else needs to be involved?
                                Use the evidence on our <a href="https://www.climatejust.org.uk/" target="_blank"
                                                           id="textLink">website</a> to help you consider issues for
                                different vulnerable groups and how to develop local resilience.</p>
                            <p>Evaluate your local area profiles. To what extent do you agree with these? What is
                                missing and what might be supplemented with local datasets? Can finer scale
                                representations be generated for some indicators? Check back on the map <a
                                        href="https://www.climatejust.org.uk/messages/benefits-and-drawbacks-maps"
                                        target="_blank" id="textLink">benefits and limitations</a> to help with this
                                task.</p>
                            <p>Work with partners to develop responses.</p>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header" id="headingThree">
                        <h2 class="mb-0">
                            <button class="btn btn-link btn-block text-left collapsed" type="button"
                                    data-toggle="collapse" data-target="#collapseThree" aria-expanded="false"
                                    aria-controls="collapseThree">
                                Using the maps
                            </button>
                        </h2>
                    </div>
                    <div id="collapseThree" class="collapse" aria-labelledby="headingThree"
                         data-parent="#accordionHelp">
                        <div class="card-body">
                            <p>How you use the maps will depend on your task, for example, concerns over specific
                                groups, such as older people, or issues, such as the built environment.</p>
                            <p>Identify the issue of concern. If interested in flooding or heat, it is useful to
                                begin
                                by reviewing the maps of flood or heat disadvantage.</p>
                            <p>Remind yourself about the <a
                                        href="https://www.climatejust.org.uk/which-places-are-disadvantaged"
                                        target="_blank" id="textLink">key concepts</a>, or look at more
                                <a href="https://www.climatejust.org.uk/messages/depth-which-places-are-disadvantaged"
                                   target="_blank" id="textLink">detailed guidance</a> to understand which places
                                are
                                climate disadvantaged.</p>
                            <p>Select a place of interest using the displaying maps guidance. Look at the drivers of
                                disadvantage in that area by examining social vulnerability maps for the same
                                topic.</p>
                            <p>Understand the related drivers of social vulnerability by building up a picture of
                                the
                                drivers of concern. This can be supporting by looking at the individual maps under
                                the
                                headings of:</p>
                            <ul>
                                <li>Characteristics of social flood vulnerability, i.e. susceptibility, ability to
                                    prepare, ability to respond, ability to recover and community support, followed
                                    by
                                    the compound indicators and their supporting variables.
                                </li>
                                <li>Dimensions and indicators of social vulnerability heat, including:</li>
                                <ul>
                                    <li>Sensitivity for personal factors</li>
                                    <li>Enhanced exposure for built environment factors</li>
                                    <li>Ability to prepare/ respond or recover for factors linked to people’s
                                        adaptive
                                        capacity.
                                    </li>
                                </ul>
                            </ul>
                            <p>Use the maps to build up a local profile of the issues as a basis for identifying and
                                discussing potential local responses with relevant stakeholders.</p>
                            <p>Consider both the profiles of local areas and potential issues for action. Which
                                areas or
                                issues are priorities? How does this relate to existing local knowledge? How can the
                                maps be used alongside local knowledge to inform action?</p>
                            <p>Work with partners to develop a list of actions which can be taken now and longer
                                term.
                                See our <a href="https://www.climatejust.org.uk/what-actions-support-resilience"
                                           target="_blank" id="textLink">adaptation planning section</a> for further
                                advice.</p>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header" id="headingFour">
                        <h2 class="mb-0">
                            <button class="btn btn-link btn-block text-left collapsed" type="button"
                                    data-toggle="collapse" data-target="#collapseFour" aria-expanded="false"
                                    aria-controls="collapseFour">
                                Map navigation
                            </button>
                        </h2>
                    </div>
                    <div id="collapseFour" class="collapse" aria-labelledby="headingFour"
                         data-parent="#accordionHelp">
                        <div class="card-body">
                            <p>Select the 'Maps' icon [ <i class="fas fa-map-marked-alt"></i> ] above and choose a
                                map
                                by clicking on the tree menu. You can display a map layer by selecting the square
                                check-box.</p>
                            <p>You can drag, or pan, the map around by holding the mouse button down. There are
                                several
                                navigation buttons on the left side of the map and you have four choices of base
                                map: OS
                                'outdoor', 'light' or 'roads' and Esri's satellite layer.</p>
                            <table class="table plain">
                                <tr>
                                    <td class="middle"><img src="css/images/fullscreen2.png"></td>
                                    <td class="middle">View the map in full screen mode.</td>
                                </tr>
                                <tr>
                                    <td class="middle"><img src="css/images/zoom.png"></td>
                                    <td class="middle">Zoom in or out from national to local levels, or use your
                                        mouse
                                        wheel.
                                    </td>
                                </tr>
                                <tr>
                                    <td class="middle"><img src="css/images/throbber.gif"></td>
                                    <td class="middle">This only appears when a map layer is loading. It disappears
                                        when
                                        the layer has finished loading.
                                    </td>
                                </tr>
                                <tr>
                                    <td class="middle"><img src="css/images/zoomBox.png"></td>
                                    <td class="middle">Zoom to box, or hold down the shift key and draw a box on the
                                        map.
                                    </td>
                                </tr>
                                <tr>
                                    <td class="middle"><img src="css/images/home_14.png"></td>
                                    <td class="middle">Reset to full map</td>
                                </tr>
                                <tr>
                                    <td class="middle"><img src="css/images/arrow-right_14.png"></td>
                                    <td class="middle">Go forward</td>
                                </tr>
                                <tr>
                                    <td class="middle"><img src="css/images/arrow-left_14.png"></td>
                                    <td class="middle">Go back</td>
                                </tr>
                                <tr>
                                    <td class="middle"><img src="css/images/search-icon.png"></td>
                                    <td class="middle">Search for a place name or postcode.</td>
                                </tr>
                                <tr>
                                    <td class="middle"><img src="css/images/printer.png"></td>
                                    <td class="middle">Create a report</td>
                                </tr>
                            </table>
                            <p>Once a map layer is turned on you can alter the 'transparency' level to see the
                                different
                                layers on top of each other. The slider alters the transparency level from 0-100%
                                and
                                the 'eye' in the top-right toggles the layer visibility on/off.</p>
                            <img src="imgs/layerTrans.png" class="border" title="layer transparency"
                                 alt="layer transparency">
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header" id="headingFive">
                        <h2 class="mb-0">
                            <button class="btn btn-link btn-block text-left collapsed" type="button"
                                    data-toggle="collapse" data-target="#collapseFive" aria-expanded="false"
                                    aria-controls="collapseFive">
                                Map query
                            </button>
                        </h2>
                    </div>
                    <div id="collapseFive" class="collapse" aria-labelledby="headingFive"
                         data-parent="#accordionHelp">
                        <div class="card-body">
                            <p>A single click will force a popup window to appear with the exact data value for that
                                polygon or grid square.</p>
                            <p>Only a few layers can be overlaid. The administrative boundaries can be overlaid
                                alongside any maps. If looking at the flood maps, you can add any of the Environment
                                Agency layers alongside other flood maps.</p>
                            <p>To print the maps along with a report of your query use the print button on the
                                map.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="leaflet-sidebar-pane" id="about">
            <h1 class="leaflet-sidebar-header">About<span class="leaflet-sidebar-close"><i
                            class="fa fa-caret-left"></i></span>
            </h1>
            <p class="lead pt-3">Climate Just Map Tool includes maps on:</p>
            <ul>
                <li>Flooding (river/coastal and surface water)</li>
                <li>Heat</li>
                <li>Fuel poverty.</li>
            </ul>
            <p class="info">Revised flooding data for the UK are based on work carried out by Sayers and
                Partners LLP for the Joseph Rowntree Foundation. The Neighbourhood Flood Vulnerability
                Index (NFVI) and Social Flood Risk Index (SFRI) are part of a wider piece of research
                reported in Sayers, P.B., Horritt, M., Penning Rowsell, E., and Fieth, J. (2017).
                Present and future flood vulnerability, risk and disadvantage: A UK scale assessment.
                The measures are explained elsewhere in the resource. See the copyright section for
                important information about usage restrictions and
                required acknowledgements for the data on this site.</p>
            <p class="info">The heat analysis for England is based on an assessment of social
                vulnerability in 2011 carried out by the University of Manchester. This has been
                combined with national datasets on exposure to flooding, using Environment Agency data,
                and exposure to heat, using UKCP09 data.</p>
            <p class="info">The work was led by Sarah Lindley at the University of Manchester and funded
                by the <a href="https://www.jrf.org.uk/" target="_blank" id="textLink">Joseph Rowntree
                    Foundation</a> (JRF), with support from the <a
                        href="https://www.gov.uk/government/organisations/environment-agency"
                        target="_blank" id="textLink">Environment Agency</a>.</p>
            <p class="info">The work uses a methodology developed by Sarah Lindley and John O’Neill and
                published in a JRF report, Lindley, S. J., O'Neill, J., Kandeh, J., Lawson, N.,
                Christian, R. and O'Neill., M (2011) <a
                        href="https://www.jrf.org.uk/publications/climate-change-justice-and-vulnerability"
                        target="_blank" id="textLink">Climate change, justice and vulnerability</a>,
                Joseph Rowntree Foundation.</p>
            <p class="info">All map data themes for 2011 were developed by Aleksandra Kazmierczak,
                assisted by Caitlin Robinson, both at the University of Manchester.</p>
            <p class="info">The fuel poverty maps presented here are based on statistics from the <a
                        href="https://www.gov.uk/government/collections/fuel-poverty-statistics"
                        target="_blank" id="textLink">Department of Energy and Climate Change</a>. They
                cover both the new low income high cost definition of fuel poverty and 10% definition.
                These maps have been produced by the <a href="https://www.cse.org.uk/" target="_blank"
                                                        id="textLink">Centre for Sustainable Energy</a>.
            </p>
            <p class="info">The Climate Just Map Tool itself has been developed by Richard Kingston. It
                is based on research developed as part of the Interreg funded <a
                        href="https://www.ppgis.manchester.ac.uk/grabs/" target="_blank" id="textLink">GRaBS
                    project</a> which ran from 2008-11.</p>
            <p class="info">We also gratefully acknowledge all data providers and stakeholders who
                provided valuable feedback at various workshops. Particular thanks to members of the
                Project Advisory Group who have supported the development of Climate Just.</p>
            <p class="info">We would particularly like the acknowledge the EA, SEPA and Natural
                Resources Wales who provide data under the 'Government Agency Flood Maps' section of
                this site under OGL.</p>
            <p class="info">Further details about the purpose of the map tool can be found in the
                'Intro' section.</p>
            <p class="info">Further details about its developers can be found on the <a
                        href="https://www.ppgis.manchester.ac.uk/" target="_blank" id="textLink">PPGIS
                    site</a>.</p>
        </div>
        <div class="leaflet-sidebar-pane" id="download">
            <h1 class="leaflet-sidebar-header">Data download <span class="leaflet-sidebar-close"><i
                            class="fa fa-caret-left"></i></span></h1>
            <p class="lead pt-3">The data that powers the maps is available for download in Excel format or as a
                shapefile.</p>
            <hr>
            <strong>Shapefile format</strong>
            <p class="info">If you have your own GIS software such as ArcGIS, MapInfo or the free <a
                        href="https://www.qgis.org" target="_blank" id="textLink">QGIS software <span
                            class="glyphicon glyphicon-new-window"></span></a> you can view and analyse
                the following shapefiles yourself</p>
            <ul>
                <li>Neighbourhood Flood Vulnerability Index (NFVI) and Social Flood Risk Index (SFRI) data [<a
                            href="http://maps.humanities.manchester.ac.uk/cj/2018/CJ2017_NFVI_SRFI_Full_Dataset_AUGUST_2018.zip"
                            target="_blank" id="textLink">281 mbs</a>] <font color="red">Revised August 2018 for
                        improved SFRI mapping (see Excel notes)</font></li>
                <li>Neighbourhood Flood Vulnerability Index (NFVI) and Social Flood Risk Index (SFRI)
                    data [<a
                            href="http://maps.humanities.manchester.ac.uk/cj/2014/CJ2017_NFVI_SRFI_Full_Dataset.zip"
                            target="_blank" id="textLink">281 mbs</a>]
                </li>
                <li>Socio-spatial climate vulnerability indicators [<a
                            href="http://maps.humanities.manchester.ac.uk/cj/2014/England_MSOA_Raw_Indicators.zip"
                            target="_blank" id="textLink">46.8 mbs</a>]
                </li>
                <li>Socio-spatial climate vulnerability indices [<a
                            href="http://maps.humanities.manchester.ac.uk/cj/2014/England_MSOA_Raw_Indicators_SSVI.zip"
                            target="_blank" id="textLink">11.2 mbs</a>]
                </li>
            </ul>
            <p class="info">If you do not have your own copy of the administrative boundaries you can
                download them from ONS's <a href="https://geoportal.statistics.gov.uk/" target="_blank"
                                            id="textLink">Open Geography Portal <span
                            class="glyphicon glyphicon-new-window"></span></a>.</p>
            <hr/>
            <strong>Excel Format</strong>
            <p class="info">The attribute data is also available in individual Excel files</p>
            <ul>
                <li>Neighbourhood Flood Vulnerability Index (NFVI) and Social Flood Risk Index (SFRI) data [<a
                            href="http://maps.humanities.manchester.ac.uk/cj/2018/Climate_Just_2017_Master_Excel_Sheet_NFVI_and_SFRI_August2018.zip"
                            target="_blank" id="textLink">35.8 mbs</a>] <font color="red">Revised August 2018 for
                        improved SFRI mapping (see Excel notes)</font></li>
                <li>Neighbourhood Flood Vulnerability Index (NFVI) and Social Flood Risk Index (SFRI)
                    data [<a
                            href="http://maps.humanities.manchester.ac.uk/cj/2018/Climate_Just_2017_Master_Excel_Sheet_NFVI_and_SFRI_March2018.xlsx"
                            target="_blank" id="textLink">27.3 mbs</a>]
                </li>
                <li>LA summaries vulnerability disadvantage - available soon.
                </li>
                <li>Socio-spatial climate vulnerability indicators [<a
                            href="http://maps.humanities.manchester.ac.uk/cj/2014/SSVI_indicators_2011_Dec2014.xlsx"
                            target="_blank" id="textLink">8.61 mbs</a>]
                </li>
                <li>Socio-spatial climate vulnerability indices [<a
                            href="http://maps.humanities.manchester.ac.uk/cj/2014/SSVI_indices_2011_Dec2014.xlsx"
                            target="_blank" id="textLink">0.9 mbs</a>]
                </li>
            </ul>
            <p class="info">When using this data we highly recommend that you refer to our <a
                        href="https://www.climatejust.org.uk/resources/technical-guidance"
                        target="_blank"
                        id="textLink">technical guide</a>. It explains how to create your own maps,
                using
                data from this Climate Just website and map tool, in your own GIS system.</p>
            <hr/>
        </div>
        <div class="leaflet-sidebar-pane" id="copyright">
            <h1 class="leaflet-sidebar-header">Copyright<span class="leaflet-sidebar-close"><i
                            class="fa fa-caret-left"></i></span></h1>
            <p class="lead pt-3">The Climate Just tool contains public sector information licensed under the
                Open Government Licence</p>
            <p class="info">Full details can be found here: <a
                        href="https://data.gov.uk/terms-and-conditions/" target="_blank" id="textLink">http://data.gov.uk/terms-and-conditions/
                    <span class="glyphicon glyphicon-new-window"></span></a></p>
            <p class="info"> Contains derived data from the Office for National Statistics licensed
                under the Open Government Licence.<br/>
                <a href="http://www.ons.gov.uk/ons/site-information/information/creative-commons-license/"
                   target="_blank" id="textLink">&copy; Crown copyright and database right 2012 <span
                            class="glyphicon glyphicon-new-window"></span></a></p>
            <p class="info"> Contains Ordnance Survey data<br/>
                <a href="http://www.ordnancesurvey.co.uk/business-and-government/licensing/using-creating-data-with-os-products/os-opendata.html"
                   target="_blank" id="textLink">&copy; Crown copyright and database right 2012 <span
                            class="glyphicon glyphicon-new-window"></span></a></p>
            <hr>
            <p class="info"><strong>The Neighbourhood Flood Vulnerability Index (NFVI) and Social Flood
                    Risk Index (SFRI)</strong></p>
            <p class="info">This data remain the IPR of Sayers and Partners LLP but are provided free of
                charge for non-commercial use within the Climate Just website.</p>
            <p class="info">This excludes commercial use of the data (selling or reselling the data
                directly or within derived products, or for paid research or consultancy).</p>
            <p class="info">The origin and IPR of the data (specifically the NFVI and SFRI) should be
                clearly acknowledged as from Sayers and Partners <a
                        href="http://www.sayersandpartners.co.uk/flood-disadvantage.html"
                        target="_blank">'Sayers, P.B., Horritt, M., Penning Rowsell, E., and Fieth, J.
                    (2017). Present and future flood vulnerability, risk and disadvantage: A UK scale
                    assessment. A report for the Joseph Rowntree Foundation published by Sayers and
                    Partners LLP.'</a></p>
            <div align="center"><img src="imgs/sayers_500.png" width="250" alt="Sayers and Partners"/></div>
            <hr>
            <p class="info"><strong>The socio-spatial heat vulnerability Index and heat disadvantage
                    data</strong></p>
            <p class="info">These data remain the IPR of the University of Manchester but are provided
                free of charge for non-commercial use within the Climate Just website and via the
                associated download.</p>
            <p class="info">This excludes commercial use of the data (selling or reselling the data
                directly or within derived products, or for paid research or consultancy).</p>
            <p class="info">The origin and IPR of the data should be clearly acknowledged as from
                Lindley, S. J., O’Neill, J., Kandeh, J., Lawson, N., Christian, R. & O’Neill M. (2011)
                "Climate change, justice and vulnerability", Joseph Rowntree Foundation Report, York <a
                        href="http://www.jrf.org.uk/publications/climate-change-justice-and-vulnerability"
                        target="_blank">http://www.jrf.org.uk/publications/climate-change-justice-and-vulnerability</a>.
            </p>
            <p class="info">Further data acknowledgements should be made according to item 2 above.
                Furthermore, the heat disadvantage data are derived from UKCP09 data and any use should
                also carry the acknowledgement below.</p>
            <p class="info">Data Acknowledgement: UKCP09 &copy; Crown Copyright 2009. The UK Climate
                Projections (UKCP09) have been made available by the Department for Environment, Food
                and Rural Affairs (Defra) and the Department of Energy and Climate Change (DECC) under
                licence from the Met Office, UKCIP, British Atmospheric Data Centre, Newcastle
                University, University of East Anglia, Environment Agency, Tyndall Centre and Proudman
                Oceanographic Laboratory. These organisations give no warranties, express or implied, as
                to the accuracy of the UKCP09 and do not accept any
                liability for loss or damage, which may arise from reliance upon the UKCP09 and any use
                of the UKCP09 is undertaken entirely at the users risk.</p>
            <p class="info">The supply of data in no way implies or leads to an expectation of support
                in the use of these data. No updates or modifications will necessarily be made
                available. The University of Manchester does not make any warranty as to the accuracy of
                these data and will accept no liability for any inaccuracies in the dataset. There is no
                liability accepted by the University of Manchester in relation to any issues or
                liabilities that may subsequent arise from use of the data for any purpose. A list of
                caveats and limitations is available via the ClimateJust
                map portal.</p>
            <hr>
            <p class="info"> Designed and developed by<br/>
                <a href="http://www.ppgis.manchester.ac.uk/" target="_blank" id="textLink"
                   title="The University of Manchester">The University of Manchester <span
                            class="glyphicon glyphicon-new-window"></span></a> with the </p>
            <div align="center"><img src="imgs/TellUs-logo-new.png" width="250" alt="The TellUs Toolkit"/></div>
        </div>
    </div>
</div>
<!-- right-hand sidebar to place map layer legends -->
<div id="sidebar-right" class="leaflet-sidebar">
    <!-- nav tabs -->
    <div class="leaflet-sidebar-tabs">
        <!-- top aligned tabs -->
        <ul role="tablist">
            <li><a href="#legend" role="tab" title="Legend"><i class="fas fa-atlas"></i></a></li>
        </ul>
    </div>
    <!-- panel content -->
    <div class="leaflet-sidebar-content">
        <div class="leaflet-sidebar-pane print-legend" id="legend">
            <h1 class="leaflet-sidebar-header">Legend</span></h1>
            <!--small><i class="fas fa-user" aria-hidden="true"></i> Logged in: <a
                        href="#"><!--?php echo $row['userName']; ?--><!--?php echo $row['userLname'] ?></a> | <i
                            class="fas fa-sign-out-alt" aria-hidden="true"></i> <a
                            href="register/logout.php">Logout</a></small-->
        </div>
        <hr>
        <div id="key" leaflet-browser-print-content></div>
        <div style="padding-left: 5px;">
            <p class="info">Choose a map by navigating through the tree menu over on the left of browser.</p>
            <p class="info">Click on the <i class="far fa-plus-square"></i> or <i class="far fa-minus-square"></i> symbols to expand or collapse the tree menu.
            </p>
            <p class="info">Display a map by selecting either of these symbols <i class="far fa-circle"></i> or <i class="fas fa-radio"></i> or <i class="far
            fa-check-square"></i> next to the relevant map name.</p>
            <p class="info">Download a <a href="info17/CJ-map-menu_2018.pdf" target="_blank" id="textLink">printable version <span
                            class="glyphicon glyphicon-new-window"></span></a> of the map layers available in the tool.</p>
            <p class="info">There's also a <a href="info17/CJ-infosheets-combined-2018_all.pdf" target="_blank" id="textLink">printable version <span
                            class="glyphicon glyphicon-new-window"></span></a> of the full set of information sheets.</p>
        </div>
    </div>
</div>
<div id="content">
    <div id="map" class="print-map"></div>
</div>
<div id="flyTo">
    <!-- Dropdown zoom to locations menu -->
    <button class="btn btn-light btn-sm dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true"
            aria-expanded="false">Zoom to an area
    </button>
    <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu">
        <li class="dropdown-item"><a onclick="flyTo(52.8,-2.5,7, 'England')"><i class="fas fa-map-marker-alt"></i> England</a></li>
        <li class="dropdown-submenu">
            <a class="dropdown-item" tabindex="-1" href="#"><i class="fa fa-caret-right"></i> &nbsp; English 'regions'</a>
            <ul class="dropdown-menu dropdown-menu-left">
                <li class="dropdown-item"><a onclick="flyTo(53,-1,8, 'East Midlands')"><i class="fas fa-map-marker-alt"></i> East Midlands</a></li>
                <li class="dropdown-item"><a onclick="flyTo(52,-0.2,8, 'East of England')"><i class="fas fa-map-marker-alt"></i> East of England</a></li>
                <li class="dropdown-item"><a onclick="flyTo(51.5,-0.3,10, 'Greater London')"><i class="fas fa-map-marker-alt"></i> Greater London</a></li>
                <li class="dropdown-item"><a onclick="flyTo(55.2,-2.7,8, 'North East')"><i class="fas fa-map-marker-alt"></i> North East</a></li>
                <li class="dropdown-item"><a onclick="flyTo(54.2,-2.9,8, 'North West')"><i class="fas fa-map-marker-alt"></i> North West</a></li>
                <li class="dropdown-item"><a onclick="flyTo(51.5,-0.8,8, 'South East')"><i class="fas fa-map-marker-alt"></i> South East</a></li>
                <li class="dropdown-item"><a onclick="flyTo(50.7,-4.5,8, 'South West')"><i class="fas fa-map-marker-alt"></i> South West</a></li>
                <li class="dropdown-item"><a onclick="flyTo(53,-3.4,8, 'West Midlands')"><i class="fas fa-map-marker-alt"></i> West Midlands</a></li>
                <li class="dropdown-item"><a onclick="flyTo(54.2,-1.8,8, 'Yorkshire & the Humber')"><i class="fas fa-map-marker-alt"></i> Yorkshire &amp; the
                        Humber</a></li>
            </ul>
        </li>
        <li class="dropdown-divider"></li>
        <li class="dropdown-item"><a onclick="flyTo(57,-5,7, 'Scotland')"><i class="fas fa-map-marker-alt"></i> Scotland</a></li>
        <li class="dropdown-submenu">
            <a class="dropdown-item" tabindex="-1" href="#"><i class="fa fa-caret-right"></i> &nbsp; Scottish 'regions'</a>
            <ul class="dropdown-menu dropdown-menu-left">
                <li class="dropdown-item"><a onclick="flyTo(55.4,-4.9,9, 'Ayrshire &amp; Arran')"><i class="fas fa-map-marker-alt"></i> Ayrshire &amp; Arran</a>
                </li>
                <li class="dropdown-item"><a onclick="flyTo(55.5,-3.1,9, 'Borders')"><i class="fas fa-map-marker-alt"></i> Borders</a></li>
                <li class="dropdown-item"><a onclick="flyTo(55.0,-4.2,9, 'Dumfries &amp; Galloway')"><i class="fas fa-map-marker-alt"></i> Dumfries &amp;
                        Galloway</a></li>
                <li class="dropdown-item"><a onclick="flyTo(56.2,-3.3,10, 'Fife')"><i class="fas fa-map-marker-alt"></i> Fife</a></li>
                <li class="dropdown-item"><a onclick="flyTo(56.2,-4.4,9, 'Forth Valley')"><i class="fas fa-map-marker-alt"></i> Forth Valley</a></li>
                <li class="dropdown-item"><a onclick="flyTo(57.2,-3.1,9, 'Grampian')"><i class="fas fa-map-marker-alt"></i> Grampian</a></li>
                <li class="dropdown-item"><a onclick="flyTo(55.8,-4.6,10, 'Greater Glasgow &amp; Clyde')"><i class="fas fa-map-marker-alt"></i> Greater Glasgow
                        &amp; Clyde</a></li>
                <li class="dropdown-item"><a onclick="flyTo(57.0,-5.4,8, 'Highland')"><i class="fas fa-map-marker-alt"></i> Highland</a></li>
                <li class="dropdown-item"><a onclick="flyTo(55.6,-4,10, 'Lanarkshire')"><i class="fas fa-map-marker-alt"></i> Lanarkshire</a></li>
                <li class="dropdown-item"><a onclick="flyTo(55.9,-3.4,9, 'Lothian')"><i class="fas fa-map-marker-alt"></i> Lothian</a></li>
                <li class="dropdown-item"><a onclick="flyTo(59.0,-3.2,9, 'Orkney')"><i class="fas fa-map-marker-alt"></i> Orkney</a></li>
                <li class="dropdown-item"><a onclick="flyTo(60.3,-1.4,9, 'Shetland')"><i class="fas fa-map-marker-alt"></i> Shetland</a></li>
                <li class="dropdown-item"><a onclick="flyTo(56.5,-4,9, 'Tayside')"><i class="fas fa-map-marker-alt"></i> Tayside</a></li>
                <li class="dropdown-item"><a onclick="flyTo(57.9,-7,9, 'Western Isles')"><i class="fas fa-map-marker-alt"></i> Western Isles</a></li>
            </ul>
        </li>
        <li class="dropdown-divider"></li>
        <li class="dropdown-item"><a onclick="flyTo(52.35,-4,8, 'Wales')"><i class="fas fa-map-marker-alt"></i> Wales</a></li>
        <li class="dropdown-submenu">
            <a class="dropdown-item" tabindex="-1" href="#"><i class="fa fa-caret-right"></i> &nbsp; Welsh 'regions'</a>
            <ul class="dropdown-menu dropdown-menu-left">
                <li class="dropdown-item"><a onclick="flyTo(52,-4,8, 'Mid and West Wales')"><i class="fas fa-map-marker-alt"></i> Mid &amp; West Wales</a></li>
                <li class="dropdown-item"><a onclick="flyTo(53,-3.8,8, 'North Wales')"><i class="fas fa-map-marker-alt"></i> North Wales</a></li>
                <li class="dropdown-item"><a onclick="flyTo(51.6,-3.6,10, 'South Wales Central')"><i class="fas fa-map-marker-alt"></i> South Wales Central</a>
                </li>
                <li class="dropdown-item"><a onclick="flyTo(51.6,-3,10, 'South Wales East')"><i class="fas fa-map-marker-alt"></i> South Wales East</a></li>
                <li class="dropdown-item"><a onclick="flyTo(51.6,-4.1,10, 'South Wales West')"><i class="fas fa-map-marker-alt"></i> South Wales West</a></li>
            </ul>
        </li>
        <li class="dropdown-divider"></li>
        <li class="dropdown-item"><a onclick="flyTo(54,-2.54,7, 'Great Britain')"><i class="fas fa-map-marker-alt"></i> Great Britain</a></li>
    </ul>
</div>

<!-- Modal for menu item info -->
<div class="modal fade" id="infoModal" role="dialog" aria-labelledby="Map layer info" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Climate Just Map layers</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <!-- modal content is inserted dynamically from map menu item selections -->
            </div>
            <div class="modal-footer">
                <small>You can drag this window around by clicking on the header.</small>
                <button type="button" class="btn btn-primary btn-sm" data-dismiss="modal">Close</button>
            </div>
        </div>

    </div>
</div>
<!-- leaflet-browser-print-pages ensures the attribute report text is placed on a 2nd page for printing -->
<div id="map-info-footer" class="print-info" leaflet-browser-print-pages>
    <h4 class="leaflet-info-header">A location report will appear here once you turn on some map layers and click on
        a specific location on the map. It's best to zoom in to a location of interest first.</h4>
</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
<script src="lib/jquery/3.5.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
        integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
        crossorigin="anonymous"></script>
<script src="https://labs.os.uk/public/os-api-branding/v0.2.0/os-api-branding.js"></script>
<script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"></script>
<!--script src="https://cdnjs.cloudflare.com/ajax/libs/proj4js/2.7.0/proj4.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/proj4leaflet/1.0.2/proj4leaflet.min.js"></script-->
<script src="lib/proj4.js"></script>
<script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
        integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
        crossorigin=""></script>
<script src="https://labs.os.uk/public/os-api-branding/v0.2.0/os-api-branding.js"
        data-prefix="Built by <a href='https://www.tellus-toolkit.com/' target='_blank'>TellUs Toolkit Ltd</a> using <a href='https://leafletjs.com/' target='_blank'>Leaflet</a> &amp; <a href='http://geoserver.org/' target='_blank'>Geoserver</a> | Contains <a href='https://data.gov.uk/terms/' target='_blank'>Open
    Government Data</a>"></script>
<script src="lib/jquery/jquery-ui-1.10.3.custom.min.js"></script>
<!-- Heat maps menu script -->
<!--script src="mdb/js/modules/treeview.js"></script-->
<!-- Leaflet plugins -->
<script src="lib/leaflet.scalefactor.min.js"></script>
<script src='lib/leaflet.fullscreen.min.js'></script>
<!-- Essential for getFeatureInfo on wms layers -->
<script src="lib/proj4leaflet.min.js"></script>
<script src="lib/cloneLayer.js"></script>
<!-- Place name search -->
<script src="lib/Control.Geocoder.js"></script>
<script src="lib/L.Control.HtmlLegend.js"></script>
<!-- Map nav controls -->
<script src="lib/L.Control.ZoomBox.min.js"></script>
<script src="lib/L.NavBar.js"></script>
<script src="lib/Control.Loading.js"></script>
<!-- Put layer controls in a sidebar-->
<script src="lib/leaflet-sidebar.min.js"></script>
<!-- WMS query -->
<script src="lib/Leaflet-WMS.js"></script>
<!-- Query map spinner -->
<script src="lib/spin.js"></script>
<!-- Map menu -->
<!--script src="lib/styledLayerControl.js"></script-->
<script src="lib/leaflet.groupedlayercontrol.js"></script>
<script src="lib/L.Control.Layers.Tree.js"></script>
<!-- Read all map layers followed by the menu list -->
<script src="js/mapLayers.js"></script>
<script src="js/mapMenu.js"></script>
<!-- heat maps -->
<!--script src="js/heat_dis_2011.js"></script>
<script src="js/heat_exp_2011.js"></script-->
<!-- Base map control -->
<script src="lib/iconLayers.js"></script>
<!-- Printing functions -->
<script src="lib/leaflet.browser.print.min.js"></script>
<!-- Main mapping functions -->
<script src="js/map.js"></script>
<script src="js/legends.js"></script>
<!--script src="js/jsonHeatConfig.js"></script-->
<script>
    <!-- Allows sub-menus on the zoom / fly to location dropdown menu -->
    $('.dropdown-submenu > a').on("click", function (e) {
        var submenu = $(this);
        $('.dropdown-submenu .dropdown-menu').removeClass('show');
        submenu.next('.dropdown-menu').addClass('show');
        e.stopPropagation();
    });

    $('.dropdown').on("hidden.bs.dropdown", function () {
        // hide any open menus when parent closes
        $('.dropdown-menu.show').removeClass('show');
    });

    // Modal for menu item pop-ups
    $(document).ready(function () {
        $('.openPopup').on('click', function () {
            var dataURL = $(this).attr('data-href');
            $('.modal-body').load(dataURL, function () {
                $('#infoModal').modal({show: true});
            });
            // Modal is draggable
            $('.modal-dialog').draggable({
                handle: ".modal-header",
                cursor: "move"
            });
        });
    });
</script>
</body>
</html>