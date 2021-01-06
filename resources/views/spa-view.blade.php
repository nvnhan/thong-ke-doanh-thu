<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" type="image/ico" href="{{ asset('favicon.ico') }}"/>
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Loading... | TIENVE.NET</title>
    <!-- Styles -->
    <link href="{{ asset('css/antd.mod.min.css') }}" rel="stylesheet">
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>

<body>
    <div id="app">
        <div class="loading-wrapper">
            <div class="loading-content">
                <img src="{{ asset('images/intro.png') }}" />
                <div class="ant-spin ant-spin-lg ant-spin-spinning">
                    <span class="ant-spin-dot ant-spin-dot-spin">
                        <i class="ant-spin-dot-item"></i>
                        <i class="ant-spin-dot-item"></i>
                        <i class="ant-spin-dot-item"></i>
                        <i class="ant-spin-dot-item"></i>
                    </span>
                </div>
                <div class="loading-text">Đang tải ứng dụng!</div>
            </div>
        </div>
    </div>
    <script src="{{ asset('js/app.js') }}"></script>
</body>

</html>