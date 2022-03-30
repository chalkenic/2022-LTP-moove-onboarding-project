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
    <div class="m-4 bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
        <div class="flex">
           <div class="py-1 pr-2">
              <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="check-circle" class="w-7 h-7" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                 <path fill="currentColor" d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"></path>
              </svg>
           </div>
           <div>
              <p class="font-bold">Great news!</p>
              <p class="text-sm">Your application has been approved and you are ready to get mooving!</p>
              <a class="hover:underline" href="#">Call to action</a>
           </div>
        </div>
      </div>
    @elseif($applicationStatus == 2)
    <div class="m-4 bg-red-100 border-t-4 border-gray-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
        <div class="flex">
           <div class="py-1 pr-2">
              <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="comment-alt" class="w-7 h-7" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                 <path fill="currentColor" d="M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 7.1 5.8 12 12 12 2.4 0 4.9-.7 7.1-2.4L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm16 352c0 8.8-7.2 16-16 16H288l-12.8 9.6L208 428v-60H64c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16h384c8.8 0 16 7.2 16 16v288z"></path>
               </svg>
           </div>
           <div>
              <p class="font-bold">Sorry!</p>
              <p class="text-sm">Your application was not successful. Click below to see what we need from you.</p>
              <a class="hover:underline" href="#">Call to action</a>
           </div>
        </div>
      </div>
    @endif
</div>

@endsection
