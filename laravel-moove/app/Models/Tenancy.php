<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tenancy extends Model
{
    use HasFactory;

    protected $fillable = [
        'is_active'
    ];


    public function property() {
        return $this->hasOne(Property::class);
    }


    public function users() {
        return $this->hasMany(User::class);
    }
}