@extends('layouts.head')
@section('title')
<title>moove - login</title>
@endsection('title')
@section('content')
<!-- Component by Harrishash
    https://tailwindcomponents.com/component/free-tailwind-css-sign-in-component
-->
<div class="h-screen bg-gradient-to-tl from-yellow-200 to-indigo-900 w-full py-16 px-4">
        <form action="{{route('login')}}" method="post">
            @csrf
            <div class="flex flex-col items-center justify-center">
                <div class="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-16">
                    @if(session('status'))
                        <div class="bg-red-500 p-2 rounded-lg mb-6 text-white text-center">{{session('status')}}</div>
                    @endif
                    <p tabindex="0" class="focus:outline-none text-2xl font-extrabold leading-6 text-gray-800">Login to your account</p>
                    <p tabindex="0" class="focus:outline-none text-sm mt-4 font-medium leading-none text-gray-500">Don't have an account? <a href="{{route('register')}}" class="hover:text-gray-500 focus:text-gray-500 focus:outline-none focus:underline hover:underline text-sm font-medium leading-none  text-gray-800 cursor-pointer"> Sign up here</a></p>
                    <div class="w-full flex items-center justify-between py-5">
                        <!-- SSO/OAuth could go here? -->
                    </div>
                    <div>
                        <label for="email" class="text-sm font-medium leading-none text-gray-800">
                                    Email
                                </label>
                        <input aria-labelledby="email" name="email" value="{{old('email')}}" type="email" class="@error('email') border-red-500 @enderror bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" />
                        @error('email')
                        <div class="text-red-500 mt-2 text-sm">
                            {{$message}}
                        </div>
                        @enderror
                    </div>
                    <div>
                        <label for="password" class="text-sm font-medium leading-none text-gray-800">
                                    Password
                                </label>
                        <div class="">
                            <input id="password" name="password" type="password" class="@error('password') border-red-500 @enderror bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" />
                            @error('password')
                            <div class="text-red-500 mt-2 text-sm">
                                {{$message}}
                            </div>
                            @enderror
                        </div>
                    </div>
                    <div class="mb-4 mt-4">
                    <input type="checkbox" name="remember" id="remember" class="mr-2">
                    <label for="remember">Remember me</label>
                </div>
                    <div class="mt-8">
                        <button role="button" type="submit" class="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full">Login</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
@endsection