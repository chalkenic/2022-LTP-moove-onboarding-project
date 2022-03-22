@extends('layouts.head')
@section('title')
<title>moove - landlord properties</title>
@endsection
@section('content')
<div>

@auth
@endauth
@csrf
<LandlordProperties/>

</div>
@endsection