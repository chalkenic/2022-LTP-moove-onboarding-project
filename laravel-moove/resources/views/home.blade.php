@extends('layouts.head')
@section('title')
<title>moove - home</title>
@endsection('title')
@section('content')
<div class="rounded-lg font-mono container text-white p-8 flex mx-auto mt-4 bg-gray-500">
    <ul>
        <li>
            <a href={{route('register')}}>Register</a>
        </li>
        <li>
            <a href={{route('login')}}>Login</a>
        </li>
    </ul>
</div>
@endsection
