@extends('layouts.head')
@section('title')
<title>moove - tenant home</title>
@endsection
@section('content')
<div>
    @if($hasStartedApplication && $applicationStatus == 0)
        Continue your application process. <a href={{route('tenant.application')}}>Click here</a>
    @elseif(!$hasStartedApplication)
        Begin your application process. <a href={{route('tenant.start-application')}}>Click here</a>
    @endif

    @if($applicationStatus == 1)
        Great news! Your application has been approved and you are ready to get mooving!
    @elseif($applicationStatus == 2)
        Unfortunately, your application was denied.
    @endif
</div>
    <form method="POST" class="inline" action="{{route('logout')}}">
        @csrf
        <button class="bg-red-500 rounded text-white p-2">Logout</button>
    </form>
</div>
@endsection
