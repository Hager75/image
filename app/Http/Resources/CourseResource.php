<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CourseResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        // return parent::toArray($request);
        return[
            'id' => $this->id,
            'name' => $this->name,
            'duration' => $this->duration,
            'start_date' => $this->start_date,
            'end_date' => $this->end_date,
            'group_limit' => $this->group_limit,
            'description' => $this->description,
            'instructor_name' => $this->instructor_name,
            'price' => $this->price,
            'user_id' => $this->user_id,
            'category_id' => $this->category_id,
        ];
    }
}
