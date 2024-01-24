<!doctype html>
<html lang="en" data-layout="vertical" data-topbar="light" data-sidebar="dark" data-sidebar-size="lg" data-sidebar-image="none">

<head>

    <meta charset="utf-8" />
    <title>ServicEngine Admin Template</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href={{ url("assets/images/favicon.ico") }}>
    <link href={{ url("assets/libs/jsvectormap/css/jsvectormap.min.css") }} rel="stylesheet" type="text/css" />
    <link href={{ url("assets/libs/swiper/swiper-bundle.min.css") }} rel="stylesheet" type="text/css" />
    <script src={{ url("assets/js/layout.js") }}></script>
    <link href={{ url("assets/css/bootstrap.min.css") }} rel="stylesheet" type="text/css" />
    <link href={{ url("assets/css/icons.min.css") }} rel="stylesheet" type="text/css" />
    <link href={{ url("assets/css/app.min.css") }} rel="stylesheet" type="text/css" />
    <link href={{ url("assets/css/custom.min.css") }} rel="stylesheet" type="text/css" />

</head>

<body>


    <div id="app">

    </div>

    

    <script src={{ url("assets/libs/bootstrap/js/bootstrap.bundle.min.js") }}></script>
    <script src={{ url("assets/libs/simplebar/simplebar.min.js") }}></script>
    <script src={{ url("assets/libs/node-waves/waves.min.js") }}></script>
    <script src={{ url("assets/libs/feather-icons/feather.min.js") }}></script>
    <script src={{ url("assets/js/pages/plugins/lord-icon-2.1.0.js") }}></script>
    <script src={{ url("assets/js/plugins.js") }}></script>
    <script src={{ url("assets/libs/apexcharts/apexcharts.min.js") }}></script>
    <script src={{ url("assets/libs/jsvectormap/js/jsvectormap.min.js") }}></script>
    <script src={{ url("assets/libs/jsvectormap/maps/world-merc.js") }}></script>
    <script src={{ url("assets/libs/swiper/swiper-bundle.min.js") }}></script>
    <script src={{ url("assets/js/pages/dashboard-ecommerce.init.js") }}></script>
    <script src={{url("assets/js/app.js")}}></script>


    @viteReactRefresh
    @vite('resources/js/app.js')

</body>

</html>
