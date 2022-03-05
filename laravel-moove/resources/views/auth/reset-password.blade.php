@extends('layouts.head')
@section('title')
<title>moove - reset password</title>
@endsection('title')
@section('content')
<div class="h-screen bg-gradient-to-tl from-yellow-200 to-indigo-900 w-full py-16 px-4">
    <form action="{{route('password.update')}}" method="post">
        @csrf
        <div class="flex flex-col items-center justify-center">
            <div class="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-16">
                <p tabindex="0" class="mb-6 focus:outline-none text-2xl font-extrabold leading-6 text-gray-800">Reset your password</p>
                <div>
                    <label for="email" class="text-sm font-medium leading-none text-gray-800">
                                Your email
                            </label>
                    <input aria-labelledby="email" name="email" value="{{old('email')}}" type="email" class=" @error('email') border-red-500 @enderror bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" />
                    @error('email')
                    <div class="text-red-500 mt-2 text-sm">
                        {{$message}}
                    </div>
                    @enderror
                </div>
                <div>
                    <label for="password" class="text-sm font-medium leading-none text-gray-800">
                                New password
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
                                New password again
                            </label>
                    <div class="">
                        <input id="password_confirmation" name="password_confirmation" type="password" class="@error('password') border-red-500 @enderror bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" />
                    </div>
                </div>
                <div class="mt-8">
                    <button role="button" type="submit" class="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full">Reset Password</button>
                </div>
                <input name="token" type="hidden" value={{$token}} />
            </div>
        </div>
    </form>
</div>
@endsection