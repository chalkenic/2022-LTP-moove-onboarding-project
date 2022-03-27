<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ContractDetail extends Model
{
    use HasFactory;

        protected $fillable = [
            'contract_id',

            'content',
            'accepted',         
    ];

    protected $optional = [
            'header',
            'title',
    ];

     public function contract() {
        return $this->hasOne(Contract::class);
    }
}
