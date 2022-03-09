@extends(layouts.head)
<div>
    Admin Tenant List Page

    <form method="POST" class="inline" action="{{route('logout')}}">
        <button class="bg-red-500 rounded text-white p-2">Logout</button>
    </form>
</div>