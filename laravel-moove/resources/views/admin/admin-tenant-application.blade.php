@extends('layouts.head')
@section('title')
<title>Admin Tenant List</title>
@endsection
@section('content')
<div>
<TenantApplication id={{$id}} />
</div>
@endsection