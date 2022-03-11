@extends('layouts.head')
@section('title')
<h1>Tenant List</h1>
@endsection
@section('content')

@auth
@endauth
<div>
<TenantList />
</div>
@endsection
