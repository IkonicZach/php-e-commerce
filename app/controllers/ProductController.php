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
        $prd = Product::all();
        list($products, $pages) = paginate(9, count($prd), new Product());
        $products = json_decode(json_encode($products));
        view("admin/product/home", compact("products", "pages"));
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
                            Session::flash("flash", "Product created successfully!");
                            Redirect::to("/admin/product/home", compact("products"));
                            exit;
                        } else {
                            $errors = "Uploading failed!";
                            $cats = Category::all();
                            $subcats = SubCategory::all();
                            view("admin/product/create", compact("cats", "subcats", "errors"));
                            exit;
                        }
                    } else {
                        $errors = ["Uploading failed! Please check your image size and file type!"];
                        $cats = Category::all();
                        $subcats = SubCategory::all();
                        view("admin/product/create", compact('cats', 'subcats', 'errors'));
                        exit;
                    }
                } else {
                    $errors = ["Please upload an image!"];
                    $cats = Category::all();
                    $subcats = SubCategory::all();
                    view("admin/product/create", compact('cats', 'subcats', 'errors'));
                    exit;
                }
            }
        } else {
            $errors = ["Token mismatch!"];
            $cats = Category::all();
            $subcats = SubCategory::all();
            view("admin/product/create", compact('cats', 'subcats', 'errors'));
            exit;
        }
    }

    public function edit($id)
    {
        $cats = Category::all();
        $subcats = SubCategory::all();
        $product = Product::where("id", $id)->first();
        view('admin/product/edit', compact('product', 'cats', 'subcats'));
    }

    public function update($id)
    {
        $post = Request::get('post');
        $file = Request::get('file');
        $fPath = "";

        if (CSRFToken::checkToken($post->token)) {
            $rules = [
                "name" => ["required" => true, "minLength" => 4, "maxLength" => 30],
                "description" => ["required" => true, "minLength" => 10, "maxLength" => 1000]
            ];
            $validator = new ValidateRequest();
            $validator->checkValid($post, $rules);

            if ($validator->hasError()) {
                Session::flash("flash_fail", "Product updating failed!");
                $cats = Category::all();
                $subcats = SubCategory::all();
                $errors = $validator->getError();
                $product = Product::where('id', $id)->first();
                view('admin/product/edit', compact('errors', 'product', 'cats', 'subcats'));
            } else {
                if (empty($file->file->name)) {
                    $fPath = $post->old_img;
                } else {
                    $upload = new UploadFile();
                    if ($upload->move($file)) {
                        $fPath = $upload->getPath();
                    } else {
                        $cats = Category::all();
                        $subcats = SubCategory::all();
                        $errors = ["fme" => "File moving failed!"];
                        $product = Product::where('id', $id)->first();
                        view('admin/product/edit', compact('errors', 'product', 'cats', 'subcats'));
                        exit;
                    }
                }

                $product = Product::where('id', $id)->first();
                $product->name = $post->name;
                $product->price = $post->price;
                $product->cat_id = $post->cat_id;
                $product->sub_cat_id = $post->sub_cat_id;
                $product->description = $post->description;
                $product->image = $fPath;

                if ($product->update()) {
                    Session::flash("flash", "Product updated successfully!");
                    Redirect::to("/admin/product/home");
                    exit;
                } else {
                    $cats = Category::all();
                    $subcats = SubCategory::all();
                    $errors = ["uf" => "Updating failed!"];
                    $product = Product::where('id', $id)->first();
                    view('admin/product/edit', compact('errors', 'product', 'cats', 'subcats'));
                    exit;
                }
            }
        } else {
            Session::flash("puf", "Product updating failed!");
            Redirect::to("/admin/product/" . $id . "/edit");
            beautify($post);
            beautify($file);
        }
    }

    public function delete($id)
    {
        $con = Product::destroy($id);
        if ($con) {
            Session::flash("flash", "Product deleted Successfully!");
            Redirect::to("/admin/product/home");
        } else {
            Session::flash("flash", "Product deletion failed! Try again.");
            Redirect::to("/admin/product/home");
        }
    }
}
