@extends('layouts.head')
@section('title')
<title>moove - tenant home</title>
@endsection
@section('content')
<div>
    This page shows a tenant's existing application. They can add files.
</div>

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
                                    Put a button here
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