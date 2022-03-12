@extends('layouts.head')
@section('title')

@endsection
@section('content')

@auth
@endauth
<div>
<TenantList />
</div>
@endsection
