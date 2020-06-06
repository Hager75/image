<?php

namespace App\Http\Controllers\API\category;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Category;
use App\Http\Resources\CategoryResource;


class CategoryController extends Controller
{
    public function index(){
        return Category::all();
        // return CategoryResource::collection(Category::paginate(1));
        
    }

    public function show($id){
        // return Course::find($id);
        return new CategoryResource(Category::find($id)); 
    }

    public function store (Request $request){
        $category=Category::create($request->all());
        return response()->json($category, 201);
    }


    public function update(Request $request, $id){
        $category = Category::find($id);
        $category->update($request->all());
        $category->fresh();
        return response()->json($category, 200);
    }

    public function destroy(Request $request, $id){
        $category = Category::find($id);
        $del=$category->delete();
        if($del==1){
            // $success["message"] = "Deleted Successfully";
            // return $success["message"];
            return response()->json($category);
        }else{
            return "error";
        }
        
    }
}
