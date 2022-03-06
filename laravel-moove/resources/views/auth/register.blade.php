@extends('layouts.auth-head')
@section('title')
<title>moove - register</title>
@endsection('title')
@section('content')
<div class="h-screen bg-gradient-to-tl from-yellow-200 to-indigo-900 w-full py-16 px-4">
    <form action="{{route('register')}}" method="post">
        @csrf
        <div class="flex flex-col items-center justify-center">
            <div class="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-16">
                <p tabindex="0" class="focus:outline-none text-2xl font-extrabold leading-6 text-gray-800">Create a moove account</p>
                <p tabindex="0" class="focus:outline-none text-sm mt-4 font-medium leading-none text-gray-500">By signing up, you agree to our <a href="#" class="hover:text-gray-500 focus:text-gray-500 focus:outline-none focus:underline hover:underline text-sm font-medium leading-none  text-gray-800 cursor-pointer">privacy policy</a>
                and <a href="#" class="hover:text-gray-500 focus:text-gray-500 focus:outline-none focus:underline hover:underline text-sm font-medium leading-none  text-gray-800 cursor-pointer">terms and conditions.</a></p>
                <div class="w-full flex items-center justify-between py-5">

                </div>
                <div>
                    <label for="name" class="text-sm font-medium leading-none text-gray-800">
                                Your name
                            </label>
                    <input aria-labelledby="name" name="name" value="{{old('name')}}" type="text" class="@error('name') border-red-500 @enderror bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" />
                    @error('name')
                    <div class="text-red-500 mt-2 text-sm">
                        {{$message}}
                    </div>
                    @enderror
                </div>
                <div>
                    <label for="email" class="text-sm font-medium leading-none text-gray-800">
                                Your email
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
                <div>
                    <label for="password_confirmation" class="text-sm font-medium leading-none text-gray-800">
                                Password again
                            </label>
                    <div class="">
                        <input id="password_confirmation" name="password_confirmation" type="password" class="@error('password') border-red-500 @enderror bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" />
                    </div>
                </div>
                <div class="mt-8">
                    <button role="button" type="submit" class="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full">Create Account</button>
                </div>
            </div>
        </div>
    </form>
</div>
@endsection