@extends('layouts.head')
@section('title')
<title>moove - Get Video</title>
@endsection
@section('content')
<div>
<h2 class="flex justify-center font-medium leading-tight text-4xl mt-0 mb-2">
    Get Video
</h2>
</div>
<div class="flex justify-center ">
    <p>
        Please enter the title of the video you would like to view
    </p>
</div>
<div>
<form action={{ route('get-video') }} method="POST">
        @csrf
        <Label for="title">Video Title: </Label>
        <input type="title" name="titleInput" class="border-black-500 bg-gray-100 border-2"/>
        <button type="submit" name="download" required class="bg-blue-500 text-white px-4 py-2 rounded font-medium">Download</button>
        
</form>
</div>
@endsection