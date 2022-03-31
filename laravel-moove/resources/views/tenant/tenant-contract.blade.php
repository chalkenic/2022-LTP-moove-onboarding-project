@extends('layouts.head')
@section('title')
<title>moove - your property contract</title>
@endsection
@section('content')
<div>
    @if(isset($data))
        <TenantContractView data="{{$data}}" />
    @endif
</div>
@endsection