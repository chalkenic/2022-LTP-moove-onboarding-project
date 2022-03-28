@extends('layouts.head')
@section('title')
<title>moove - tenant home</title>
@endsection
@section('content')
<div>
    <h1 class="font-medium leading-tight text-3xl mt-0 mb-2">
        Welcome to moove, {{ auth()->user()->name }}
    </h1>
    
    <p class="flex mb-1 mt-8">
        @if($hasStartedApplication && $applicationStatus == 0)
            It looks like you already have an application open. Don't worry,
            we will get it reviewed as soon as possible and you'll soon
            be on your way to mooving with us!
        @elseif(!$hasStartedApplication)
            We're glad you're here! We'll need to manually approve you to
            rent with moove before you can go any further. Click the button
            below to begin!
        @endif
    </p>
    @if($hasStartedApplication && $applicationStatus == 0)
        <p class="flex mb-1">
            Need to add documents to your application?
        </p>
    @endif
    @if($hasStartedApplication && $applicationStatus == 0)
        <a href="{{route('tenant.application')}}"><button class="bg-blue-500 hover:bg-blue-400 transition-colors rounded-[8px] px-[15px] py-[4px] text-white focus:ring-2 ring-blue-500">Let's go!</button></a>
    @elseif(!$hasStartedApplication)
        <a href="{{route('tenant.start-application')}}"><button class="bg-blue-500 hover:bg-blue-400 transition-colors rounded-[8px] px-[15px] py-[4px] text-white focus:ring-2 ring-blue-500">Let's go!</button></a>
    @endif
    @if($applicationStatus == 1)
        Great news! Your application has been approved and you are ready to get mooving!
    @elseif($applicationStatus == 2)
        Unfortunately, your application was denied.
    @endif
</div>

@endsection
