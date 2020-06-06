<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ReviewRate extends Model
{
    public function user()
    {
        return $this->belongsTo('App\User');
    }

    public function course()
    {
        return $this->belongsTo('App\Course');
    }

    public function product()
    {
        return $this->belongsTo('App\Product');
    }
}
