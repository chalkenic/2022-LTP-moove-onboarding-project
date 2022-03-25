@extends('layouts.head')
@section('title')
<title>moove - tenant list</title>
@endsection
@section('content')
<div>
    <ContractCreate property="{{$property}}" landlord="{{$landlord}}" />
</div>
@endsection