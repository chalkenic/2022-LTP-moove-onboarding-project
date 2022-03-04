@extends('layouts.head')
@section('title')
<title>moove - landlord properties</title>
@endsection
@section('content')
<div>


    <div>
    <span> PROPERTIES PAGE</span>

</div>
    <form method="POST" class="inline" action="{{route('logout')}}">
        @csrf
        <button class="bg-red-500 rounded text-white p-2">Logout</button>
    </form>
</div>
@endsection