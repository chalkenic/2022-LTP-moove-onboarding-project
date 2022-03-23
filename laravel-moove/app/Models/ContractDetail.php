<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ContractDetail extends Model
{
    use HasFactory;

        protected $fillable = [
            'section_header',
            'section_content',
    ];

     public function contract() {
        return $this->hasOne(Contract::class);
    }
}
