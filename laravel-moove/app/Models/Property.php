<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Property extends Model
{
    use HasFactory;

    protected $fillable = [
            'user_id',
            'name',
            'location',
            'status',
            'verified',
            'moove_url',
            'image',
    ];

    public function tenancies() {
        return $this->hasMany(Tenancy::class);
    }
}
