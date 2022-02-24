<h1>User list</h1>
<table>
    <thead>
        <tr>
            <th>User ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>
        @foreach($users as $user)
            <tr>
                <td>{{$user->id}}</td>
                <td>{{$user->name}}</td>
                <td>{{$user->email}}</td>
                <td>{{$user->role}}</td>
                <td>
                    @if($user->role != "ADMIN")
                        <form method="post" action="{{route('admin.setrole', ['id' => $user->id, 'role' => 'ADMIN'])}}">
                            @csrf
                            <button type="submit">Make Admin</button>
                        </form>
                    @else
                        <form method="post" action="{{route('admin.setrole', ['id' => $user->id, 'role' => 'TENANT'])}}">
                            @csrf
                            <button type="submit">Make Tenant</button>
                        </form>
                    @endif
                </td>
            </tr>
        @endforeach
    </tbody>
</table>
