@extends('layouts.head')
@section('title')
<title>moove - view application</title>
@endsection
@section('content')
<div>
    
    <h1>View My Application</h1>
    <TenancyApplicationProgress rowData={['1', "David Billus", "Application Approved", "20/2/2022"], ['2', "Ben Harries", "Application Approved", "08/2/2022"]}/>
</div>
@endsection