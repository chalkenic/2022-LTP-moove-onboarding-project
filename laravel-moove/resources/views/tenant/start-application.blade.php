@extends('layouts.head')
@section('title')
<title>moove - tenant home</title>
@endsection
@section('content')
<div>
    Start an application!
</div>
<div>
    Any data collection fields go here, pushing the button below creates the Application and ties it to the tenant, before redirecting to the 'show' view where supporting files can be uploaded.
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