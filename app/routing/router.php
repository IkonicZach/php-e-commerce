<?php

use App\Models\Category;
use App\Routing\RouteDispatcher;

$router = new AltoRouter();

// $router->setBasePath("/ecommence/public");

require_once "admin_route.php";

require_once "user_route.php";

// Cart route starts here
$router->map("GET", "/", "App\Controllers\IndexController@show", "Home Route");

$router->map("POST", "/cart", "App\Controllers\IndexController@cart", "Cart Route");

$router->map("GET", "/cart", "App\Controllers\IndexController@showCart", "Show Cart Route");

$router->map("POST", "/payOut", "App\Controllers\IndexController@payOut", "Payout Route");

$router->map("GET", "/product/[i:id]/details", "App\Controllers\IndexController@details", "Product details");

// Cart route ends here

new RouteDispatcher($router);
