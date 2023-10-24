<?php

namespace App\Controllers;

use App\Classes\CSRFToken;
use App\Classes\Request;
use App\Classes\Session;
use App\Classes\Redirect;
use App\Classes\ValidateRequest;
use App\Controllers\BaseController;
use App\Models\Category;
use App\Models\SubCategory;

class CategoryController extends BaseController
{
    public function index()
    {
        $categories = Category::all()->count();
        list($cats, $pages) = paginate(3, $categories, new Category());

        $subCategories = SubCategory::all()->count();
        list($subCats, $subPages) = paginate(3, $subCategories, new SubCategory());

        $cats = json_decode(json_encode($cats));
        $subCats = json_decode(json_encode($subCats));
        view("admin/category/create", compact("cats", "pages", "subCats", "subPages"));
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
                $subCats = SubCategory::all();
                $errors = $validator->getError();

                $categories = Category::all()->count();
                list($cats, $pages) = paginate(3, $categories, new Category());

                $subCategories = SubCategory::all()->count();
                list($subCats, $subPages) = paginate(3, $subCategories, new SubCategory());

                $cats = json_decode(json_encode($cats));
                $subCats = json_decode(json_encode($subCats));
                view("admin/category/create", compact("cats", "pages", "subCats", "subPages", "errors"));
            } else {
                $slug = slug($post->name);

                $con = Category::create([
                    "name" => $post->name,
                    "slug" => $slug
                ]);

                if ($con) {
                    $success = "Created successfully!";

                    $categories = Category::all()->count();
                    list($cats, $pages) = paginate(3, $categories, new Category());

                    $subCategories = SubCategory::all()->count();
                    list($subCats, $subPages) = paginate(3, $subCategories, new SubCategory());

                    $cats = json_decode(json_encode($cats));
                    $subCats = json_decode(json_encode($subCats));
                    view("admin/category/create", compact("cats", "subCats", "success", "pages", "subPages"));
                } else {
                    $errors = "Creation failed!";

                    $categories = Category::all()->count();
                    list($cats, $pages) = paginate(3, $categories, new Category());
                    $cats = json_decode(json_encode($cats));
                    view("admin/category/create", compact("cats", "errors", "pages"));
                }
            }
        } else {
            Redirect::back();
        }
    }

    public function delete($id)
    {
        $con = Category::destroy($id);
        if ($con) {
            Session::flash("del_success", "Category deleted Successfully!");
            Redirect::to("/admin/category/create");
        } else {
            Session::flash("del_fail", "Category deletion failed! Try again.");
            Redirect::to("/admin/category/create");
        }
    }

    public function update()
    {
        $post = Request::get("post");

        if (CSRFToken::checkToken($post->token)) {
            $rules = [
                "editName" => [
                    "required" => true,
                    "unique" => "categories",
                    "minLength" => "4"
                ]
            ];
            $validator = new ValidateRequest();
            $validator->checkValid($post, $rules);

            if ($validator->hasError()) {
                header('HTTP/1.1 422 Validation Error', true, 422);
                echo json_encode($validator->getError());
                exit;
            } else {
                Category::where("id", $post->id)->update(["name" => $post->editName]);
                echo json_encode("Updated successfully!");
                exit;
            }
        } else {
            header('HTTP/1.1 422 Token Error', true, 422);
            echo json_encode(["error" => "Invalid token"]);
            exit;
        }
    }
}
