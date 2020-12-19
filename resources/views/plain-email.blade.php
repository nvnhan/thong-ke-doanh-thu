<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{config('app.name') }}</title>
</head>

<body>
    <h2>Các vé sắp đến lịch bay</h2>
    <ul>
        @foreach ($datve as $item)
        <li>{{$item}}</li>
        @endforeach
    </ul>
    <p><i>Chú ý kiểm tra các vé hiện tại, nhớ nhắc nhở khách hàng bay đúng thời gian.</i></p>
</body>

</html>
