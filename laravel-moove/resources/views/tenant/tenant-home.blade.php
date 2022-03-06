@extends('layouts.head')
@section('title')
<title>moove - tenant home</title>
@endsection
@section('content')
<div>
    Logic to determine whether an application has been started or not.
    Link to start or continue an application... <a href="{{route('tenant.application')}}">link</a>
</div>
    <form method="POST" class="inline" action="{{route('logout')}}">
        @csrf
        <button class="bg-red-500 rounded text-white p-2">Logout</button>
    </form>
</div>
@endsection