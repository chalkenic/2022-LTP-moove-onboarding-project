<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tenancy extends Model
{
    use HasFactory;

    protected $fillable = [
        'status',
        'landlord_signature_blob'
    ];


    public function property() {
        return $this->hasOne(Property::class);
    }

        public function contract() {
        return $this->hasOne(Contract::class);
    }


    public function users() {
        return $this->hasMany(User::class);
    }
}
