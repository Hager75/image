<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use App\User;
use App\Http\Requests\UpdateUserRequest;
use App\Http\Requests\StoreUserRequest;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Auth;
use  App\Http\Controllers\API\BaseController ;


class UserController extends BaseController
{
    public function index() {

        return UserResource::collection(
            User::all()
         // User::paginate(5)
         );
    }
    public function show($id) {
        return new UserResource(
            User::find($id)
        );
    }

    
 
    public function store(StoreUserRequest $request) {
        
        // $request['avatar']=Storage::disk('public')->put('images',$request->profile);
        $request['password']=Hash::make($request->password);
        // $request['password_confirmation']=Hash::make($request->password_confirmation);
        $user=User::create($request->all());
        $success['token']=$user->createToken('MyApp')->accessToken;
        $success['id']=$user->id;
        // $user->createToken($request->email)->plainTextToken;
        // return $user;
        return $success;
    }
 
    public function update(UpdateUserRequest $request, $id) {
        // User Info Before Update
            $user=User::where('id',$id)->first();
            if($user) {
                if(array_key_exists('profile',$request->all())){
                    Storage::disk('public')->delete($user->avatar);
                    $request['avatar']=Storage::disk('public')->put($this->path,$request['profile']);
                }
                $user->update($request->all());
                return $user->fresh();
            }
            return json_encode(array("ERROR"=>"ID $id NOT EXSIST"));
    }
 
 
    public function destroy($id) {
        $user=User::find($id);
        if(!$user){
             return json_encode(array("ERROR"=>"Faild To Delete This USER"));
        }
        else{
            Storage::disk('public')->delete($user->avatar);
            $user->delete(); 
            return json_encode(array("msg"=>"USER Deleted Sussecfully"));
        }
         
    } 

    public function login(Request $request)
    {
        if(Auth::attempt(['email' => $request->email, 'password' => $request->password])){ 
            $user = Auth::user(); 
            $success['token'] = $user->createToken('MyApp')->accessToken; 
            $success['id']=$user->id;
   
            return $this->sendResponse($success, 'User login successfully.');
        } 
        else{ 
            return $this->sendError('Unauthorised.', ['error'=>'Unauthorised']);
        } 
    }
    // public function generateToken(Request $request) {
    //     $request->validate([
    //         'email' => 'required|email',
    //         'password' => 'required'
    //     ]);
    //     $user = User::where('email', $request->email)->first();
    
    //     if (! $user || ! Hash::check($request->password, $user->password)) {
    //         throw ValidationException::withMessages([
    //             'email' => ['The provided credentials are incorrect.'],
    //         ]);
    //     }
    //     return $user->createToken($request->email)->plainTextToken;
    // }
     
}
