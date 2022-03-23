@extends('layouts.head')

@section('title')
<title>Tenant Upload Video</title>
@endsection
@section('content')
<div>
<hr><form method="POST" action="{{ route('tenant.tenant-upload-video') }}" enctype="multipart/form-data" >
@csrf
<div>
<h2>Please ensure the video title is in the following format: "[first name]_[last name]"</h2>
</div>
<div>

<label>Title</label>
<input type="text" name="title" placeholder="Enter Title" />
@error('title')
    <span class="text-red-500">{{$message}}</span>
@enderror
</div><div>
<label>Choose Video</label>

<input type="file"  name="video" class="@error('file') border-red-500 @enderror bg-gray-100 border-2"/>
@error('video')
    <span class="text-red-500">{{$message}}</span>
@enderror

</div><hr><button type="submit" >
Submit
</button>

</form>
</div>
<div>
<br />
<a href="{{ route('get-video') }}" >Uploaded Videos</href>

</div>
@endsection