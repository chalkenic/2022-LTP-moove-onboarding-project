@extends('layouts.head')
@section('title')
<title>moove - tenant home</title>
@endsection
@section('content')
<div>
    This page shows a tenant's existing application. They can add files.
</div>
<div>
    {{$currentFiles}}
</div>
<div class="max-w-sm mx-auto py-8">
    <form action="/" method="post" enctype="multipart/form-data">
        <input type="file" name="image" id="image">
        <button class="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 p-4" type="submit">Upload</button>
    </form>
</div>
@endsection