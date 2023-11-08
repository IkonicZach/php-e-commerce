<?php

namespace App\Controllers;

use App\Classes\Auth;
use App\Classes\CSRFToken;
use App\Classes\Request;
use App\Classes\Session;
use App\Models\Category;
use App\Models\Order;
use App\Models\OrderDetails;
use App\Models\Payment;
use App\Models\Product;
use Illuminate\Database\Capsule\Manager as Capsule;


class IndexController extends BaseController
{
    public function show()
    {
        $count = Product::all()->count();
        $cats = Category::all();
        $featured = Product::where("featured", 1)->get();
        $pops = Product::where("popular", 1)->get();
        $categories = Category::with("products")->get();

        list($prods, $pages) = paginate(9, $count, new Product());
        $products = json_decode(json_encode($prods));
        view("home", compact("featured", "cats", "products", "pages", "pops", "categories"));
    }
    
    public function productsByCategory($category_id) 
    {
        $category = Category::findOrFail($category_id);
        $productsByCat = $category->products()->take(3)->get();
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
    }

    public function showCart()
    {
        view('cart');
    }

    public function saveItemstoDatabase($status = "Pending", $extraData = "")
    {
        $items = Session::get("cart_item");
        $order_number = uniqid();
        $total = 0;

        foreach ($items as $item) {
            $total += $item->price * $item->qty;
            $orderDetail = new OrderDetails();

            $orderDetail->user_id = Auth::user()->id;
            $orderDetail->product_id = $item->id;
            $orderDetail->unit_price = $item->price;
            $orderDetail->status = $status;
            $orderDetail->quantity = $item->qty;
            $orderDetail->total = $item->price * $item->qty;
            $orderDetail->order_no = $order_number;
            $orderDetail->save();
        }

        $order = new Order();
        $order->user_id = Auth::user()->id;
        $order->order_no = $order_number;
        $order->order_extra = $extraData;
        $order->save();

        $payment = new Payment();
        $payment->user_id = Auth::user()->id;
        $payment->amount = $total;
        $payment->status = $status;
        $payment->order_no = $order_number;
        if ($payment->save()) {
            return true;
        } else {
            return false;
        }
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
            Session::replace("cart_item", $post->items);
            echo "Success";
            exit;
        } else {
            echo "Token is invalid";
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
