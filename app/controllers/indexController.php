<?php

namespace App\Controllers;

use App\Classes\Request;
use App\Classes\Session;
use App\Models\Category;
use App\Models\Product;

class IndexController extends BaseController
{
    public function show()
    {
        $count = Product::all()->count();
        $cats = Category::all();
        $featured = Product::where("featured", 1)->get();
        list($prds, $pages) = paginate(9, $count, new Product());
        $products = json_decode(json_encode($prds));
        view("home", compact("featured", "cats", "products", "pages"));
    }

    public function cart()
    {
        $post = Request::get('post');
        Session::replace("cart_item", $post->cart);
        echo "Successfully added to cart";
        exit;
    }

    public function showCart()
    {
        $items = Session::get("cart_item");

        $cartProducts = [];

        foreach ($items as $item) {
            $product = Product::where("id", $item)->first();
            array_push($cartProducts, $product);
        }

        $products = json_encode($cartProducts);
        view("cart", compact("products"));
    }
}
