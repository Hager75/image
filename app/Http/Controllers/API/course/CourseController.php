<?php

namespace App\Http\Controllers\API\course;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Course;
use App\Http\Resources\CourseResource;

class CourseController extends Controller
{
    public function index(){
        return Course::all();
    }

    public function show($id){
        // return Course::find($id);
        return new CourseResource(Course::find($id)); 
    }

    public function store (Request $request){
        $request['user_id']=1;
        $request['category_id']=1;
        $course=Course::create($request->all());
        // $course=Course::create([
        //     'name' => $request->name,
        //     'duration' => $request->duration,
        //     'start_date' => $request->start_date,
        //     'end_date' => $request->end_date,
        //     'group_limit' => $request->group_limit,
        //     'description' => $request->description,
        //     'instructor_name' => $request->instructor_name,
        //     'price' => $request->price,
        //     'user_id' => 1,
        //     'category_id' => 1,
        // ]);
        return response()->json($course, 201);
    }


    public function update(Request $request, $id){
        $request['user_id'] = 1;
        $request['category_id']=1;
        $course = Course::find($id);
        $course->update($request->all());
        $course->fresh();
        return response()->json($course, 200);
    }

    public function destroy(Request $request, $id){
        $request['user_id'] = 1;
        $request['category_id']=1;
        $course = Course::find($id);
        $del=$course->delete();
        if($del==1){
            // $success["message"] = "Deleted Successfully";
            // return $success["message"];
            return response()->json($course);
        }else{
            return "error";
        }
        
    }

}
