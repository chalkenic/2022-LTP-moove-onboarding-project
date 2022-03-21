<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    @yield('title')
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <script src="{{ asset('js/app.js') }}" defer></script>
    <script>var csrf_token = '<?php echo csrf_token(); ?>'; </script>
</head>
<body>
    @auth
    <div>
    <NavBar text="{{auth()->user()->role}}"/>
    </div>
    @endauth
    <div class="h-screen bg-gradient-to-tl from-yellow-200 to-indigo-900 w-full py-16 px-4">
        <div class="flex justify-center">
            <div class="w-8/12 bg-white p-6 rounded-lg">
            @yield('content')
            </div>
        </div>
    </div>
    @include('footer')
</body>
</html>