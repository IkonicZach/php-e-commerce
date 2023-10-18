<?php

namespace App\Controllers;

use App\Classes\CSRFToken;
use App\Classes\Request;
use App\Classes\Session;
use App\Classes\Redirect;
use App\Classes\UploadFile;
use App\Classes\ValidateRequest;
use App\Controllers\BaseController;
use App\Models\Category;

class CategoryController extends BaseController
{
    public function index()
    {
        $cats = Category::all();
        view("admin/category/create", compact("cats"));
    }
    public function store()
    {
        $post = Request::get("post");
        if (CSRFToken::checkToken($post->token)) {
            $rules = [
                "name" => ["required" => true, "minLength" => "4", "unique" => "categories"]
            ];
            $validator = new ValidateRequest();
            $validator->checkValid($post, $rules);
            if ($validator->hasError()) {
                $cats = Category::all();
                $errors = $validator->getError();
                view("admin/category/create", compact("cats", "errors"));
            } else {
                $slug = slug($post->name);

                $con = Category::create([
                    "name" => $post->name,
                    "slug" => $slug
                ]);

                if ($con){
                    $cats = Category::all();
                    $success = "Created successfully!";
                    view("admin/category/create", compact("cats", "success"));
                }
                else
                    echo "Creation failed!";
            }
        } else {
            Redirect::back();
        }
    }
}
