<?php

use App\Routing\RouteDispatcher;

$router = new AltoRouter();

$router->setBasePath("/ecommence/public");

$router->map("GET", "/", "App\Controllers\IndexController@show", "Home Route");

$router->map("GET", "/admin/category", "App\Controllers\CategoryController@index", "Category Home");

$router->map("POST", "/admin/category", "App\Controllers\CategoryController@store", "Category Store");

new RouteDispatcher($router);
