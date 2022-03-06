@extends('layouts.head')
@section('title')
<title>moove - landlord properties</title>
@endsection
@section('content')
<div>

@auth
@endauth
<LandlordProperties />
</div>
@endsection