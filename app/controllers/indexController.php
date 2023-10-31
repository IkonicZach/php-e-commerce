<?php

namespace App\Controllers;

use App\Classes\CSRFToken;
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
        if (CSRFToken::checkToken($post->token)) {
            $items = $post->cart;

            $cartProducts = [];
            foreach ($items as $item) {
                $product = Product::where("id", $item)->first();
                $product->qty = 0;
                array_push($cartProducts, $product);
            }


            echo json_encode($cartProducts);

            exit;
        } else {
            echo "Error";
            exit;
        }
        // Session::replace("cart_item", $post->cart);
        // echo "Successfully added to cart";
        // exit;
    }

    public function showCart()
    {
        view('cart');
        // $items = Session::get("cart_item");
    }

    public function saveOrder($orders)
    {
        $order = serialize($orders);
        return true;
    }

    public function payOut()
    {
        $post = Request::get("post");
        if (CSRFToken::checkToken($post->token)) {
            if ($this->saveOrder($post->items)) {
                echo "Order has been paid";
                exit;
            } else {
                echo "Something went wrong";
                exit;
            }
        } else {
            echo "Something went wrong";
            exit;
        }
    }

    public function details($id)
    {
        $cats = Category::all();
        $product = Product::where("id", $id)->first();
        view("product", compact("product", "cats"));
    }
}
