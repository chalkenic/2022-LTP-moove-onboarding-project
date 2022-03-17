@extends('layouts.head')

@section('title')
<title>Tenant Upload Video</title>
@endsection
@section('content')
<div>
<hr><form method="POST" action="{{ route('tenant.tenant-upload-video') }}" enctype="multipart/form-data" >
@csrf
<div >
<label>Title</label>
<input type="text" name="title" placeholder="Enter Title">
</div><div>
<label>Choose Video</label>
<input type="file"  name="video">
</div><hr><button type="submit" >Submit</button></form></div>
@endsection