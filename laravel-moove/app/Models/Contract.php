<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contract extends Model
{
    use HasFactory;

        protected $fillable = [
            'created_at',
            'landlord_signed',
            'tenant_signed',
    ];


        public function property() {
        return $this->belongsTo(Property::class);
    }

            public function tenancy() {
        return $this->hasMany(Tenancy::class);


    }

        public function section() {
        return $this-> hasMany(ContractDetail::class);
    }
}

