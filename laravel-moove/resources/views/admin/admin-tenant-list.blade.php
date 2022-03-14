@extends('layouts.head')
@section('title')
<title>Admin Tenant Application</title>
@endsection
@section('content')
<div>
    <TenantList applicants="{{$applicants}}" />
</div>
@endsection