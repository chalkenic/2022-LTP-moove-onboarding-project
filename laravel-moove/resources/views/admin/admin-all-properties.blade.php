@extends('layouts.head')
@section('title')
<title>moove - all properties</title>
@endsection
@section('content')
<div>

@auth
@endauth
@csrf
<AdminProperties  properties="{{$properties}}"/>
</div>
@endsection