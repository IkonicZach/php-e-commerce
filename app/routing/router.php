<?php

use App\Routing\RouteDispatcher;

$router = new AltoRouter();

// $router->setBasePath("/ecommence/public");

$router->map("GET", "/", "App\Controllers\IndexController@show", "Home Route");
//ADMIN ROUTE
$router->map("GET", "/admin" , "App\Controllers\AdminController@index", "Admin Home");

$router->map("GET", "/admin/category/create", "App\Controllers\CategoryController@index", "Category Home");

$router->map("POST", "/admin/category/create", "App\Controllers\CategoryController@store", "Category Store");

new RouteDispatcher($router);
