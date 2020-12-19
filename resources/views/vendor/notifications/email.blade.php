@component('mail::message')
{{-- Greeting --}}
# Cảnh báo xuất vé máy bay

{{-- Intro Lines --}}
@foreach ($introLines as $line)
<?php 
    $lines = explode('\n', $line);
?>
@foreach ($lines as $item)
{{ $item }}

@endforeach
@endforeach

Chú ý kiểm tra các vé hiện tại, nhớ xuất vé và nhắc nhở khách hàng bay đúng thời gian.

{{-- Action Button --}}
@component('mail::button', ['url' => config('app.url')])
Kiểm tra vé
@endcomponent

{{-- Outro Lines --}}
Cảm ơn đã sử dụng dịch vụ của chúng tôi!<br>
Trân trọng,<br>
{{ config('app.name') }}
@endcomponent