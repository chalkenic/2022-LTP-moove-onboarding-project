@extends('layouts.head')
@section('title')
<title>moove - convert users</title>
@endsection
@section('content')
<h2 class="flex justify-center font-medium leading-tight text-4xl mt-0 mb-2">
    User Conversion
</h2>
<div class="flex justify-center ">
    <p>
        Enter an email address below. If it belongs to a moove account
        that doesn't have an open application, it will be converted to a
        moove admin account when you click convert.
    </p>
</div>
<div class="flex justify-center">
    <form action={{ route('admin.convert-user') }} method="POST" class="mt-4">
        @csrf
        @method('PUT')
        <label for="email">Email address</label>
        <input type="email" required value="{{old('email')}}" name="email" class="@error('email') border-red-500 @enderror bg-gray-100 border-2" />
        @error('email')
        <div class="text-red-500 mt-2 text-sm">
            {{$message}}
        </div>
        @enderror
        <div class="mt-4 flex justify-center">
            <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded font-medium">Convert</button>
        </div>
    </form>
</div>
@if(isset($success))
    <div class="justify-center  mt-4 flex">
        <div class="bg-green-500 w-fit p-4 rounded-lg mb-6 text-white text-center">
            {{ $success }}
        </div>
    </div>
@endif
@endsection
