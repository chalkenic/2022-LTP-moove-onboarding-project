@extends('layouts.head')
@section('title')
<title>moove - all properties</title>
@endsection
@section('content')
<div>
<AdminProperties  properties="{{$properties}}" tenancies="{{$tenancies}}"/>
</div>
@endsection