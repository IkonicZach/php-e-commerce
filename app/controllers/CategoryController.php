<?php

namespace App\Controllers;

use App\Classes\CSRFToken;
use App\Classes\Request;
use App\Classes\Session;
use App\Classes\Redirect;
use App\Classes\UploadFile;
use App\Controllers\BaseController;

class CategoryController extends BaseController
{
    public function index()
    {
        view("admin/category/create");
    }
    public function store()
    {
        $post = Request::get("post");
        if (CSRFToken::checkToken($post->token)) {
            // Session::flash("sus_message","Token confirmed");
            // Redirect::back();
            beautify(Request::get("file"));
            echo "<hr>";
            $upload = new UploadFile();
            $upload->move(Request::get("file"));
        } else {
            Session::flash("err_message", "Token blank!!");
            Redirect::back();
        }
    }
}
