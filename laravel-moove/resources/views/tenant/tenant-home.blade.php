@extends('layouts.head')
@section('title')
<title>moove - tenant home</title>
@endsection
@section('content')
<div>
    @if($hasStartedApplication)
    Continue your application process. <a href={{route('tenant.application')}}>Click here</a>
    @else
    Begin your application process. <a href={{route('tenant.start-application')}}>Click here</a>
    @endif
</div>
    <form method="POST" class="inline" action="{{route('logout')}}">
        @csrf
        <button class="bg-red-500 rounded text-white p-2">Logout</button>
    </form>
</div>
@endsection
