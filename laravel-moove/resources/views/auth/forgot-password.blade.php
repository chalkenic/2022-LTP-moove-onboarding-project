@extends('layouts.head')
@section('title')
<title>moove - forgot password</title>
@endsection('title')
@section('content')
<div class="h-screen bg-gradient-to-tl from-yellow-200 to-indigo-900 w-full py-16 px-4">
        <form action="{{route('password.email')}}" method="post">
            @csrf
            <div class="flex flex-col items-center justify-center">
                <div class="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-16">
                    @if(session('status'))
                        <div class="bg-red-500 p-2 rounded-lg mb-6 text-white text-center">{{session('status')}}</div>
                    @endif
                    <p tabindex="0" class="focus:outline-none text-2xl font-extrabold leading-6 text-gray-800">Forgotten Password</p>
                    <p tabindex="0" class="mb-6 focus:outline-none text-sm mt-4 font-medium leading-none text-gray-500">Forgotten your password? Don't worry. We'll send you an email with instructions on how to reset it.</p>
                    <div>
                        <label for="email" class="text-sm font-medium leading-none text-gray-800">
                                    Email
                                </label>
                        <input aria-labelledby="email" name="email" value="{{old('email')}}" type="email" class="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" />
                    </div>
                    <div class="mb-4 mt-4">
                </div>
                    <div class="mt-8">
                        <button role="button" type="submit" class="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full">Reset Password</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
@endsection