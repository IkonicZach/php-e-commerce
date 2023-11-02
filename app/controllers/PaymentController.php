<?php

namespace App\Controllers;

use App\Classes\Request;
use Stripe\Charge;
use Stripe\Customer;

class PaymentController extends BaseController
{
    public function stripePayment()
    {
        $post = Request::get("post");
        $token = $post->stripeToken;
        $email = $post->stripeEmail;

        $customer = Customer::create([
            "email" => $email,
            "source" => $token
        ]);

        $charge = Charge::create([
            "customer" => $customer->id,
            "amount" => 100,
            "currency" => "usd"
        ]);

        $status = $charge->status;
        $index = new IndexController();
        $con = $index->saveItemstoDatabase($status, json_encode($charge));

        if ($con) {
            view("payment_success");
        } else {
            view("cart");
        }
    }
}
