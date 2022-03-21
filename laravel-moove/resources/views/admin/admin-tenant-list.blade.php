@extends('layouts.head')
@section('title')
    <title>moove - tenant list</title>
@endsection
@section('content')
    <div>
        <div>
            <table>
                <thead>
                <th>Name</th>
                <th>Email</th>
                </thead>
                <tbody>
                @foreach($tenants as $tenant)
                    <tr>
                        <td>{{ $tenant->name }}</td>
                        <td>{{ $tenant->email }}</td>
                    </tr>
                @endforeach
                </tbody>
            </table>
    </div>
@endsection
