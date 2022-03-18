@extends('layouts.head')
@section('title')
<title>moove - get-video</title>
@endsection('title')
@section('content')

<div>
<video width="320" height="240" controls>
        <source src="{{ route('/get-video', $video->video)  }}" type="video/mp4">
        Your browser does not support the video tag.
</video>

</div>

@endsection