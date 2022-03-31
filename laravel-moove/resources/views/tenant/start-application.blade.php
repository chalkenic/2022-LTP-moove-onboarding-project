@extends('layouts.head')
@section('title')
<title>moove - tenant home</title>
@endsection
@section('content')
<h1 class="font-medium leading-tight text-3xl mt-0 mb-2">
    {{ auth()->user()->name }}'s application
</h1>
<div>
    We need to get some information from you before you can rent with us.
    Start your application by clicking below. Afterwards we'll need you
    to upload some supporting evidence for your application. Don't worry -
    it's all completely secure, and your documents won't be shared with
    anyone outside of moove.
</div>
<div>
    <form action="{{route('tenant.start-application')}}" method="post">
        @csrf
        <div class="mt-8 mx-auto">
            <button role="button" type="submit" class="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 p-4 w-full">Start Application</button>
        </div>
    </form>
</div>
@endsection