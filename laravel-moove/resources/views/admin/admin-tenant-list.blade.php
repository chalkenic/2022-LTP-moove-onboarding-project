@extends('layouts.head')
@section('title')
<title>moove - tenant list</title>
@endsection
@section('content')
<div>
    {{session('status')}}
    <TenantList applicants="{{json_encode($applicants->items())}}" />
</div>
<div class="flex justify-center text-sm mt-3">
    Showing {{ $applicants->count()}} of {{ $applicants->total() }}
</div>
<div class="flex justify-center mt-2">
    {{ $applicants->links() }}
</div>
@endsection