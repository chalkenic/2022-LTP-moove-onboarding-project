@extends('layouts.head')
@section('title')
<title>moove - tenant list</title>
@endsection
@section('content')
<div>
    {{session('status')}}
    <TenantList applicants="{{$applicants}}" />
</div>
@endsection