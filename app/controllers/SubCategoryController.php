<?php

namespace App\Controllers;

use App\Classes\CSRFToken;
use App\Classes\Redirect;
use App\Classes\Request;
use App\Classes\Session;
use App\Classes\ValidateRequest;
use App\Models\SubCategory;

class SubCategoryController extends BaseController
{
    public function store()
    {
        $post = Request::get('post');
        if (CSRFToken::checkToken($post->token)) {
            $rules = [
                "name" => ["unique" => "sub_categories", "minLength" => "3"]
            ];
            $validator = new ValidateRequest();
            $validator->checkValid($post, $rules);
            if ($validator->hasError()) {
                header('HTTP/1.1 422 Validation Error', true, 422);
                $errors = $validator->getError();
                echo json_encode($errors);
                exit;
            } else {
                $subCat = new SubCategory();
                $subCat->name = $post->name;
                $subCat->cat_id = $post->parent_cat_id;

                if ($subCat->save()) {
                    echo "Successful";
                    exit;
                } else {
                    header('HTTP/1.1 422 Data insertion Error', true, 422);
                    echo "Insertion Error";
                    exit;
                }
            }
        } else {
            header('HTTP/1.1 422 Token Error', true, 422);
            echo "Token Error";
            exit;
        }
    }

    public function update()
    {
        $post = Request::get('post');
        if (CSRFToken::checkToken($post->token)) {
            $rules = [
                "name" => ["unique" => "sub_categories", "minLength" => "3"]
            ];
            $validator = new ValidateRequest();
            $validator->checkValid($post, $rules);
            if ($validator->hasError()) {
                header('HTTP/1.1 422 Validation Error', true, 422);
                $errors = $validator->getError();
                echo json_encode($errors);
                exit;
            } else {
                SubCategory::where("id", $post->id)->update(["name" => $post->name]);
                echo "Successfully updated";
            }
        } else {
            header('HTTP/1.1 422 Token Error', true, 422);
            echo "Token Error";
            exit;
        }
    }

    public function delete($id)
    {
        $con = SubCategory::destroy($id);
        if ($con) {
            Session::flash("del_success", "Sub-category deleted Successfully!");
            Redirect::to("/admin/category/create");
        } else {
            Session::flash("del_fail", "Sub-category deletion failed! Try again.");
            Redirect::to("/admin/category/create");
        }
    }
}
