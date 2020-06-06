<?php

namespace App\Http\Requests;
use Illuminate\Foundation\Http\FormRequest;
class UpdateUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */

    public function rules()
    {
        return [
            'first_name' => 'string|max:255',
            'last_name' => 'string|max:255',
            // 'email' => "required|email|max:255|unique:users,email,$this->id,id",
            'email' => "email|max:255",
            'profile'=>'image|mimes:jpeg,png',
            'mobile'=>'string|max:14',
            'national_id'=>'string|max:14',
            'password' => 'string|min:8|confirmed',
            'role'=>'between:0,2'
        ];
    }
}
