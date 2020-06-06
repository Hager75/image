<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class EventResource extends JsonResource
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
        "id"=>$this->id,
        "title"=>$this->title,
        "description"=>$this->description,
        "address"=>$this->address,
        "event_time"=>$this->event_time,
        "duration"=>$this->duration,
        "num_attendees"=>$this->num_attendees,
        "user_id"=>$this->user_id,
        "category_id"=> $this->category_id
    ];
    }
}
