@extends('layouts.head')
@section('title')
<title>moove - tenant list</title>
@endsection
@section('content')
<div>
    {{session('status')}}
    <ContractCreation property="{{$property}}" />
</div>
@endsection