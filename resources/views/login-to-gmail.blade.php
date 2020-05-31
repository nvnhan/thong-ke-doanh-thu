<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Login</title>
</head>
<body>
    @if (auth()->user())
        {{ auth()->user()->id }}
    @endif
    <form action="/oauth/login" method="post">
        @csrf
        <input type="text" name="username">
        <input type="password" name="password" id="password">
        <button type="submit">Submit</button>
    </form>
</body>
</html>