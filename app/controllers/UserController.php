<?php

namespace App\Controllers;

use App\Classes\Auth;
use App\Classes\CSRFToken;
use App\Classes\Redirect;
use App\Classes\Request;
use App\Classes\Session;
use App\Classes\ValidateRequest;
use App\Models\User;

class UserController extends BaseController
{
    public function showLoginForm()
    {
        if (Auth::check()) {
            Redirect::to("/");
        } else {
            return view("user/login");
        }
    }

    public function login()
    {
        $post = Request::get("post");
        if (CSRFToken::checkToken($post->token)) {
            $user = User::where("email", $post->email)->first();
            if ($user) {
                if (password_verify($post->password, $user->password)) {
                    Session::add("user_id", $user->id);
                    Redirect::to("/");
                } else {
                    Session::flash("error", "Invalid password");
                    Redirect::to("/user/login");
                }
            } else {
                Session::errorFlash("error", "Email not found");
                Redirect::to("/user/login");
            }
        } else {
            Session::flash("error", "Invalid token");
            Redirect::to("/user/login");
        }
    }

    public function showRegisterForm()
    {
        return view("user/register");
    }

    public function register()
    {
        $post = Request::get("post");
        if (CSRFToken::checkToken($post->token)) {
            if ($post->password === $post->confirm_password) {
                $rules = [
                    "name" => ["minLength" => 4],
                    "email" => ["email" => true, "unique" => "users"],
                    "password" => ["minLength" => 6]
                ];
                $validator = new ValidateRequest();
                $validator->checkValid($post, $rules);
                if ($validator->hasError()) {
                    Session::flash("error", $validator->getError());
                    Redirect::to("/user/register");
                } else {
                    $user = new User();
                    $user->name = $post->name;
                    $user->email = $post->email;
                    $user->password = password_hash($post->password, PASSWORD_BCRYPT);

                    if (!isset($post->checkbox)) {
                        Session::flash("error", "You must agree to the terms and conditions");
                        Redirect::to("/user/register");
                    } else {
                        if ($user->save()) {
                            Session::flash("success", "Successfully registered! Please log in");
                            Redirect::to("/user/login");
                        } else {
                            Session::flash("error", "Something went wrong!");
                            Redirect::to("/user/register");
                        }
                    }
                }
            } else {
                Session::flash("error", "Passwords don't match!");
                Redirect::to("/user/register");
            }
        } else {
            Session::flash("error", "Invalid token");
            Redirect::to("/user/register");
        }
    }

    public function logout()
    {
        Session::remove("user_id");
        Redirect::to("/");
    }
}
