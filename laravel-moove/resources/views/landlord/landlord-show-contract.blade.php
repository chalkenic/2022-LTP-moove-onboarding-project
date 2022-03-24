@extends('layouts.head')
@section('title')
<title>moove - Property Contract</title>
@endsection
@section('content')
<div>
<ContractShow property="{{$property}}" contract = "{{$contract}}"></ContractShow>
</div>
@endsection