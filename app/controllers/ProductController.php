<?php

namespace App\Controllers;

use App\Classes\CSRFToken;
use App\Classes\Redirect;
use App\Classes\Request;
use App\Classes\Session;
use App\Classes\UploadFile;
use App\Classes\ValidateRequest;
use App\Models\Category;
use App\Models\Product;
use App\Models\SubCategory;

class ProductController extends BaseController
{
    public function index()
    {
        $products = Product::all();
        view("admin/product/home", compact("products"));
    }

    public function create()
    {
        $cats = Category::all();
        $subcats = SubCategory::all();
        view("admin/product/create", compact('cats', 'subcats'));
    }

    public function store()
    {
        $post = Request::get('post');
        $file = Request::get('file');

        if (CSRFToken::checkToken($post->token)) {
            $rules = [
                "name" => ["required" => true, "minLength" => 4, "maxLength" => 30, "unique" => "products"],
                "description" => ["required" => true, "minLength" => 10, "maxLength" => 1000, "unique" => "products"]
            ];

            $validator = new ValidateRequest();
            $validator->checkValid($post, $rules);
            if ($validator->hasError()) {
                $cats = Category::all();
                $subcats = SubCategory::all();
                $errors = $validator->getError();
                view("admin/product/create", compact("cats", "subcats", "errors"));
            } else {
                if (!empty($file->file->name)) {
                    $upload = new UploadFile();
                    if ($upload->move($file)) {
                        $path = $upload->getPath();

                        $product = new Product();
                        $product->name = $post->name;
                        $product->price = $post->price;
                        $product->cat_id = $post->cat_id;
                        $product->sub_cat_id = $post->sub_cat_id;
                        $product->description = $post->description;
                        $product->image = $path;

                        if ($product->save()) {
                            $products = Product::all();
                            Session::flash("pcs", "Product created successfully!");
                            Redirect::to("/admin/product/home", compact("products"));
                        } else {
                            $errors = "Uploading failed!";
                            $cats = Category::all();
                            $subcats = SubCategory::all();
                            view("admin/product/create", compact("cats", "subcats", "errors"));
                        }
                    } else {
                        $errors = ["Uploading failed! Please check your image size and file type!"];
                        $cats = Category::all();
                        $subcats = SubCategory::all();
                        view("admin/product/create", compact('cats', 'subcats', 'errors'));
                    }
                } else {
                    $errors = ["Please upload an image!"];
                    $cats = Category::all();
                    $subcats = SubCategory::all();
                    view("admin/product/create", compact('cats', 'subcats', 'errors'));
                }
            }
        } else {
            $errors = ["Token mismatch!"];
            $cats = Category::all();
            $subcats = SubCategory::all();
            view("admin/product/create", compact('cats', 'subcats', 'errors'));
        }
    }
}
