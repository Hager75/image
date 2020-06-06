<?php

namespace App\Http\Controllers\API\event;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\EventResource;
use Yajra\DataTables\DataTables ; 
use Illuminate\Support\Facades\File; 
use App\Event;
use App\User;
use App\Category;

class EventController extends Controller
{
    public function index()
    {
        // return EventResource::collection(
        //    Event::all()
          //    Event::paginate(5)
        //  );
        return Event::all();
    }

    public function store(Request $request) {
        $request['user_id']= 1;
        $request['category_id']=1;
        $event=Event::create($request->all());
        return $event ;   
    }    
    public function show($id)
    {
    return new EventResource(
        Event::find($id)
    );

   } 
   public function edit()
   { 
  $request=request();
  $event_id=$request->event;
  $event= Event::find($event_id); 
  return $event;
    }
    public function update(Request $request, $id)
 {

 $event= Event::findOrFail($id); 
  $event->update($request->all());
   return $event->fresh();
}

public function destroy($id)
   { 
   
    $event= Event::find($id); 
if(!$event){
    return json_encode(array("ERROR"=>"faild to delete this event"));
 }
 else{
    $event->delete(); 
    return json_encode(array("msg"=>"this event deleted sussecfully"));
}
   
    }
}
