<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use App\Models\User;

class AuthenticateController extends Controller
{
    //
    public function authenticate(Request$request){
        //apply validation
        $validator=Validator::make($request->all(),[
            'email'=>'required|email',
            'password'=>'required',
        ]);
        if($validator->fails()){
            return response()->json([
                'status'=>false,
                'error'=>$validator->errors(),

            ]);
        }else{
            $credentials=[
                'email' =>$request->email,
                'password'=>$request->password,
            ];
            if(Auth::attempt($credentials)){
                $user=User::find(Auth::user()->id);
                $token=$user->createToken('token')->plainTextToken;
                return response()->json([
                    'status'=>true,
                    'message'=>'Login successful',
                    'token'=>$token,
                    'id'=> Auth::user()->id,
                ]);
            }else{
                return response()->json([
                    'status'=>false,
                    'message'=>'Invalid credentials',
                ]);
            }
        }
    }
    public function logout(Request $request){
        $user=User::find(Auth::user()->id);
        $user->tokens->each->delete();
        return response()->json([
            'status'=>false,
            'message'=>'Logout successful',
        ]);

    }

}
