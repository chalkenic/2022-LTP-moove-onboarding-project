@extends('layouts.head')
@section('title')
<title>moove - contracts</title>
@endsection
@section('content')
<div>
    @if(isset($contract))
    <ContractShow property="{{$property}}" contract = "{{$contract}}" details="{{$details}}" landlord="{{$landlord}}" />
    @else
    <ContractCreate property="{{$property}}" landlord="{{$landlord}}" />
    @endif
</div>
@endsection