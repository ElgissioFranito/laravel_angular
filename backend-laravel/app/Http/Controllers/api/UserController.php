<?php

namespace App\Http\Controllers\api;

use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function register(Request $request)
    {
        $request->validate([
            "name" => "required",
            "email" => "required|email|unique:users",
            "password" => "required",
        ]);

        $user = User::create([
            "name" => $request->name,
            "email" =>  $request->email,
            "password" => bcrypt($request->password),
        ]);

        $token = $user->createToken('api-token')->accessToken;

        return ["user" => $user,
                "token"=> $token];

    }

    public function login(Request $request){
        $request->validate([
            "email" => "required",
            "password" => "required",
        ]);

        $user = User::where("email","=",$request->email)->first();

        if($user){
            if (Hash::check($request->password,$user->password)){

                $token = $user->createToken('api-token')->accessToken;

                return ["user" => $user,
                "token"=> $token];
            } else {
                return ["message"=> "mot de passe erroné"];
            }

        }else{
            return ["message"=> "email inexistant"];
        }
    }

    public function listuser(){
        $users = User::All();

        return [$users];
    }

    // déconnexion à l'pplication
    public function logout()
    {
        Auth::user()->token()->delete();

        return response()->json([
            "Utilisateur" => "deconnexion réussi"
        ]);
    }

}
