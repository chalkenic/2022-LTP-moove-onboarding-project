@extends('layouts.head')
@section('content')
    <a href="{{route('register')}}" class="rounded-lg font-mono container text-white p-8 flex mx-auto bg-gray-500"><p>Blade element says: {{$message}}</p></a>
    <div class="rounded-lg font-mono container text-white p-8 flex mx-auto mt-4 bg-gray-500"><TestComponent text="And I am a react component!" /></div>
@endsection