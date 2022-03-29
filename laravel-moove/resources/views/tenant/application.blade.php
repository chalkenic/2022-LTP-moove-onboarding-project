@extends('layouts.head')
@section('title')
<title>moove - tenant home</title>
@endsection
@section('content')
<h1 class="font-medium leading-tight text-3xl mt-0 mb-2">
   {{ auth()->user()->name }}'s application
</h1>

@if(session()->has('success'))
<div class="m-4 bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
   <div class="flex">
      <div class="py-1 pr-2">
         <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="check-circle" class="w-7 h-7" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="currentColor" d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"></path>
         </svg>
      </div>
      <div>
         <p class="font-bold">Success</p>
         <p class="text-sm">{{session()->get('success')}}</p>
      </div>
   </div>
 </div>
@endif
@if(session()->has('error'))
<div class="m-4 bg-red-100 border-t-4 border-gray-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
   <div class="flex">
      <div class="py-1 pr-2">
         <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="comment-alt" class="w-7 h-7" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="currentColor" d="M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 7.1 5.8 12 12 12 2.4 0 4.9-.7 7.1-2.4L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm16 352c0 8.8-7.2 16-16 16H288l-12.8 9.6L208 428v-60H64c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16h384c8.8 0 16 7.2 16 16v288z"></path>
          </svg>
      </div>
      <div>
         <p class="font-bold">Oops!</p>
         <p class="text-sm">{{session()->get('error')}}</p>
      </div>
   </div>
 </div>
@endif

<p>
   Hi, {{ auth()->user()->name }}. Use this page to upload files to support your application to rent
   with moove. We will get your application reviewed as quickly as possible - but don't worry, we'll
   drop you an email once there's an update.
</p>

<div class="max-w-sm mx-auto py-8">
    <form action="{{route('tenant.upload')}}" method="post" enctype="multipart/form-data">
        @csrf
        <input type="file" name="file" id="file">
        <button class="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 p-4" type="submit">Upload</button>
    </form>
    @error('file')
    <span class="text-red-500">{{$message}}</span>
    @enderror
</div>
@if(isset($currentFiles))
<span>You have uploaded the below files to support your application so far:</span>
<div class="">
    <section class="bg-white py-8">
        <div class="container">
           <div class="flex flex-wrap -mx-4">
              <div class="w-full px-4">
                 <div class="max-w-full overflow-x-auto">
                    <table class="table-auto w-full">
                       <thead>
                          <tr class="bg-primary text-center">
                             <th
                                class="
                                w-1/6
                                min-w-[160px]
                                text-lg
                                font-semibold
                                text-white
                                py-4
                                lg:py-7
                                px-3
                                lg:px-4
                                bg-gray-500
                                border-l border-transparent
                                "
                                >
                                Filename
                             </th>
                             <th
                                class="
                                w-1/6
                                min-w-[160px]
                                text-lg
                                font-semibold
                                text-white
                                py-4
                                lg:py-7
                                px-3
                                lg:px-4
                                bg-gray-500
                                "
                                >
                                Uploaded
                             </th>
                             <th
                                class="
                                w-1/6
                                min-w-[160px]
                                text-lg
                                font-semibold
                                text-white
                                py-4
                                lg:py-7
                                px-3
                                lg:px-4
                                bg-gray-500
                                "
                                >
                                Delete file
                             </th>
                          </tr>
                       </thead>
                       <tbody>
                           @foreach($currentFiles as $file)
                            <tr>
                                <td
                                    class="
                                    text-center text-dark
                                    font-medium
                                    text-base
                                    py-5
                                    px-2
                                    bg-[#F3F6FF]
                                    border-b border-l border-[#E8E8E8]
                                    "
                                    >
                                    {{$file->filename}}
                                </td>
                                <td
                                    class="
                                    text-center text-dark
                                    font-medium
                                    text-base
                                    py-5
                                    px-2
                                    bg-white
                                    border-b border-[#E8E8E8]
                                    "
                                    >
                                    {{$file->created_at->diffForHumans()}}
                                </td>
                                <td
                                    class="
                                    text-center text-dark
                                    font-medium
                                    text-base
                                    py-5
                                    px-2
                                    bg-[#F3F6FF]
                                    border-b border-[#E8E8E8]
                                    "
                                    >
                                    <form action="{{route('tenant.delete-file', ['file' => $file->id])}}" method="POST">
                                       @method('DELETE')
                                       @csrf
                                       <button class="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 p-4" type="submit">Delete</button>
                                    </form>
                                </td>
                          </tr>
                          @endforeach
                       </tbody>
                    </table>
                 </div>
              </div>
           </div>
        </div>
     </section>
</div>
@endif
@endsection