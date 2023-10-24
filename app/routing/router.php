<?php

use App\Models\Category;
use App\Routing\RouteDispatcher;

$router = new AltoRouter();

// $router->setBasePath("/ecommence/public");

$router->map("GET", "/", "App\Controllers\IndexController@show", "Home Route");
//ADMIN ROUTE
$router->map("GET", "/admin" , "App\Controllers\AdminController@index", "Admin Home");

// Category Routes Starts
$router->map("GET", "/admin/category/create", "App\Controllers\CategoryController@index", "Category Home");

$router->map("POST", "/admin/category/create", "App\Controllers\CategoryController@store", "Category Store");

$router->map("GET", "/admin/category/[i:id]/delete", "App\Controllers\CategoryController@delete", "Category Delete");

$router->map("POST", "/admin/category/[i:id]/update", "App\Controllers\CategoryController@update", "Category Update");
// Category Routes Ends

// Sub-category Routes Starts
$router->map("POST", "/admin/subcategory/create", "App\Controllers\SubCategoryController@store", "Subcategory Create");

$router->map("POST", "/admin/subcategory/update", "App\Controllers\SubCategoryController@update", "Subcategory Update");

$router->map("GET", "/admin/subcategory/[i:id]/delete", "App\Controllers\SubCategoryController@delete", "Subcategory Delete");
// Sub-category Routes Ends

// Products Routes Starts
$router->map("GET", "/admin/product/home", "App\Controllers\ProductController@index", "Product Home");

$router->map("GET", "/admin/product/create", "App\Controllers\ProductController@create", "Product Create");

$router->map("POST", "/admin/product/create", "App\Controllers\ProductController@store", "Product Store");

$router->map("GET", "/admin/product/update", "App\Controllers\ProductController@create", "Product Update");

// Products Routes Ends

new RouteDispatcher($router);
