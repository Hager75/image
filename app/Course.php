<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    protected $fillable = [
        'name',
        'duration',
        'start_date',
        'end_date',
        'group_limit',
        'description',
        'instructor_name',
        'price',
        'user_id',
        'category_id',
       ];


    public function user()
    {
        return $this->belongsTo('App\User');
    }

    public function category()
    {
        return $this->belongsTo('App\Category');
    }
}
