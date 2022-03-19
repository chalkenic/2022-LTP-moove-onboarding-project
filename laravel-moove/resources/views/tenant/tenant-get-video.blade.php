@extends('layouts.head')
@section('title')
<title>moove - Get Video</title>
@endsection
@section('content')
<div>
<h2 class="flex justify-center font-medium leading-tight text-4xl mt-0 mb-2">
    User Conversion
</h2>
</div>
<div class="flex justify-center ">
    <p>
        Enter an email address below. If it belongs to a moove account
        that doesn't have an open application, it will be converted to a
        moove admin account when you click convert.
    </p>
</div>
<!-- <div>
<form action={{ route('/get-video/{title}') }} method="POST" class="mt-4">
        @csrf
</div> -->
@endsection