@extends('layouts.head')
@section('title')
<title>Admin Tenant Application</title>
@endsection
@section('content')
    <div>
        <div>
            <table>
                <thead>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
                </thead>
                <tbody>
                @foreach($tenants as $tenant)
                    <tr>
                        <td>{{ $tenant->name }}</td>
                        <td>{{ $tenant->email }}</td>
                        <td><a href="/admin-tenant-application/{{ $tenant->id }}">Application</a></td>
                    </tr>
                @endforeach
                </tbody>
            </table>
    </div>
@endsection
