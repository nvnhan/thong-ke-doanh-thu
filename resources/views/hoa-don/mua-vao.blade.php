<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Hóa đơn nhập hàng | {{config('app.name')}}</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">

    <style>
        html {
            font-size: 14px;
        }

        h1 {
            font-size: 1.4rem;
            font-weight: bold;
            background-color: #fff4ec;
            padding: 5px 10px;
            margin-bottom: 0;
        }

        p {
            margin-bottom: 0;
        }

        .table .thead-light th {
            color: #495057;
            background-color: #cfffdad7;
            border-color: #dee2e6;
            border-bottom: none;
        }
    </style>
</head>

<body>
    <div class="container-sm">
        @section('content')
        @show

        <div class="row mb-3">
            <div class="col text-center">
                <h1>{{$user->ct_ten}}</h1>
                <p>
                    Địa chỉ: {{$user->ct_dia_chi}}<br>
                    Hotline: {{$user->ct_sdt}}<br>
                    STK: {{$user->ct_mst}}<br>
                </p>
            </div>
        </div>

        <?php $ngay = new DateTime($objs[0]->ngay_thang); ?>
        <div class="row mb-3">
            <div class="col text-center">
                <h1>HÓA ĐƠN NHẬP HÀNG</h1>
                Số hóa đơn: <b>{{ str_pad($objs[0]->so_hoa_don, 4, '0', STR_PAD_LEFT) }}</b><br>
                Ngày {{ $ngay->format('d') }} tháng {{ $ngay->format('m') }} năm {{ $ngay->format('Y') }}
            </div>
        </div>

        <div class="row mb-3">
            <div class="col">
                Nhà cung cấp: <b>{{ $nha_cung_cap->mo_ta }} ({{ $nha_cung_cap->ky_hieu }})</b><br>
                SĐT: <b>{{ $nha_cung_cap->sdt }}</b><br>
                Địa chỉ: <b>{{ $nha_cung_cap->dia_chi }}</b>
            </div>
        </div>

        <div class="row mb-3">
            <div class="col">
                <div class="table-responsive-sm">
                    <table class="table table-bordered">
                        <thead class="thead-light">
                            <tr>
                                <th scope="col">STT</th>
                                <th scope="col">Tên hàng</th>
                                <th scope="col">Số lượng</th>
                                <th scope="col">Đơn giá</th>
                                <th scope="col">Thành tiền</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php $cnt = 1;
                            $sum = 0; ?>
                            @foreach ($objs as $obj)
                            <?php $sum += $obj['thanh_tien']; ?>
                            <tr>
                                <th scope="row">{{$cnt++}}</th>
                                <td>{{$obj['hang_hoa']['ten_hang']??''}}</td>
                                <td>{{$obj['so_luong']}}</td>
                                <td>{{number_format($obj['don_gia'])}}₫</td>
                                <td>{{number_format($obj['thanh_tien'])}}₫</td>
                            </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <div class="row mb-3 font-weight-bold">
            <div class="col-7 text-right">Nợ cũ:</div>
            <div class="col-5">{{ number_format($dau_ky) }}₫</div>
            <div class="col-7 text-right">Tổng tiền hàng:</div>
            <div class="col-5">{{ number_format($sum) }}₫</div>
            <div class="col-7 text-right">Tổng nợ:</div>
            <div class="col-5">{{ number_format($dau_ky + $sum) }}₫</div>
        </div>

    </div>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous">
    </script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous">
    </script>
</body>

</html>