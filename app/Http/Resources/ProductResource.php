<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
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
            "name"=>$this->name,
            "description"=>$this->description,
            "image"=>$this->image,
            "price"=>$this->price,
            "quantity"=>$this->quantity,
            "is_new"=>$this->is_new,
            "user_id"=>$this->user_id,
            "category_id"=> $this->category_id
        ];
    }
}
