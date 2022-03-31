@extends('layouts.head')
@section('title')
<title>moove - landlord properties</title>
@endsection
@section('content')
<div>

<TenantProperty property="{{$property}}" tenants="{{$tenants}}" contract="{{$contract}}"/>

</div>
@endsection