@extends('layouts.head')
@section('title')
<title>moove - landlord sign tenancy</title>
@endsection
@section('content')
<div>
    <SigningComponent/>
    
    @if(session()->has('success'))
    <div class="alert alert-success">
        {{ session()->get('success') }}
    </div>
@endif
</div>
@endsection