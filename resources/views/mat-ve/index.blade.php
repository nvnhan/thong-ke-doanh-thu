<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Mặt vé điện tử | {{config('app.name')}}</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">

    <style>
        html {
            font-size: 14px;
        }

        h1 {
            font-size: 1.6rem;
            font-weight: bold
        }

        h2 {
            font-size: 1.1rem;
            font-weight: bold;
        }

        .table .thead-light th {
            color: #495057;
            background-color: #cfffdad7;
            border-color: #cfffdad7;
        }

        .tong-tien {
            font-size: 1.4rem;
            font-weight: bold;
            color: #0ab70a;
        }

        .ma-giu-cho {
            font-size: 1.4rem;
            font-weight: bold;
            color: red;
        }

    </style>
</head>

<body>
    <div class="container">
        @section('content')
        @show

        <div class="row mb-3">
            <div class="col-md-4 mb-2">
                <img src="{{ asset('images/'.$datve['hang_bay'].'.png')}}" />
            </div>
            <div class="col-md-8">
                <p class="text-right">
                    Phòng vé: <b>{{$user->dai_ly}}</b><br>
                    Địa chỉ: <b>{{$user->dia_chi}}</b><br>
                    SĐT: <b>{{$user->sdt}}</b><br>
                </p>
            </div>
        </div>

        <div class="row mb-3">
            <div class="col">
                <h1 class="text-center">VÉ ĐIỆN TỬ XÁC NHẬN HÀNH TRÌNH</h1>
            </div>
        </div>

        <div class="row mb-3">
            <div class="col">
                <h2>1. THÔNG TIN CHUYẾN BAY:</h2>
            </div>
        </div>

        <div class="row mb-3">
            <div class="col">
                <div class="table-responsive-sm">
                    <table class="table">
                        <thead class="thead-light">
                            <tr>
                                <th scope="col">Chuyến bay</th>
                                <th scope="col">Ngày bay</th>
                                <th scope="col">Khởi hành</th>
                                <th scope="col">Điểm đến</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">{{$datve['cb_di']}}</th>
                                <td>{{$datve['ngay_gio_di']}}</td>
                                <td>{{$sb_di}}</td>
                                <td>{{$sb_di1}}</td>
                            </tr>
                            @if ($datve['cb_ve'])
                            <tr>
                                <th scope="row">{{$datve['cb_ve']}}</th>
                                <td>{{$datve['ngay_gio_ve']}}</td>
                                <td>{{$sb_ve}}</td>
                                <td>{{$sb_ve1}}</td>
                            </tr>
                            @endif
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <div class="row mb-3">
            <div class="col">
                <h2>2. THÔNG TIN HÀNH KHÁCH: Mã <span class="ma-giu-cho">{{$datve['ma_giu_cho']}}</span></h2>
            </div>
        </div>

        <div class="row mb-3">
            <div class="col">
                <div class="table-responsive-sm">
                    <table class="table">
                        <thead class="thead-light">
                            <tr>
                                <th scope="col">STT</th>
                                <th scope="col">Khách hàng</th>
                                <th scope="col">Số vé</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php $cnt = 1; ?>
                            @foreach ($dv as $item)
                            <tr>
                                <th scope="row">{{$cnt++}}</th>
                                <td>{{$item['ten_khach']}}</td>
                                <td>{{$item['so_ve']}}</td>
                            </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <div class="row mb-3">
            <div class="col">
                <h2>3. GIÁ VÉ VÀ LỆ PHÍ: Tổng cộng <span
                        class="tong-tien">{{number_format($dv->sum('tong_tien_thu_khach'), 0)}}₫</span></h2>
            </div>
        </div>
        <hr>
        <div class="row mb-3 p-2" style="background: #eeeeee51;">
            <div class="col">
                <p>
                    <b>Quý khách vui lòng mang theo giấy tờ tùy thân hợp lệ để làm thủ tục lên máy bay:</b><br>
                    Từ 14 tuổi trở lên mang CMND, hộ chiếu hoặc bằng lái xe. <br>
                    Dưới 14 tuổi mang giấy khai sinh bản gốc hoặc bản sao trích lục. <br>
                    Quý khách vui lòng ra sân bay trước ít nhất 120 phút để làm thủ tục. Quý khách vui lòng kiểm tra mọi
                    thông tin trước khi rời phòng vé. Mọi sai sót về sau phòng vé hoàn toàn không chịu trách nhiệm. <br>
                </p>
                <div class="text-center">
                    <b><i>Xin cảm ơn và chúc quý khách một chuyến bay tốt đẹp!!!</i></b>
                </div>
            </div>
        </div>
    </div>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"
        integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous">
    </script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"
        integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous">
    </script>
</body>

</html>
