<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Interest extends Model
{
    public function user()
    {
        return $this->belongsToMany('App\User');
    }

    public function category()
    {
        return $this->belongsToMany('App\Category');
    }
}
