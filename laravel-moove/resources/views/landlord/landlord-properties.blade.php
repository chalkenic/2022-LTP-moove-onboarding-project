@extends('layouts.head')
@section('title')
<title>moove - landlord properties</title>
@endsection
@section('content')
<div>

<LandlordProperties  properties="{{$properties}}"/>

</div>
@endsection