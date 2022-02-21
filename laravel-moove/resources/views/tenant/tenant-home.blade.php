<div>
    Tenant Home Page

    <form method="POST" class="inline" action="{{route('logout')}}">
        @csrf
        <button class="bg-red-500 rounded text-white p-2">Logout</button>
    </form>
</div>