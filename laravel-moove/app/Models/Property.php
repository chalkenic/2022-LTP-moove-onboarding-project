<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Property extends Model
{
    use HasFactory;

    protected $fillable = [
            'landlord_id',
            'name',
            'location',
            'status',
            'verified',
    ];

    protected $casts = [
        'tenants' => 'array'
    ];

    public function tenancies() {
        return $this->hasMany(Tenancy::class);
    }
}
