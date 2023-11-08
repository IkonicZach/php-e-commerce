<?php

use Illuminate\Contracts\Routing; 
use Illuminate\Support\Facades\Route;
//ADMIN ROUTE
$router->map("GET", "/admin" , "App\Controllers\AdminController@index", "Admin Home");

// Category Routes Starts
$router->map("GET", "/admin/category/create", "App\Controllers\CategoryController@index", "Category Home");

$router->map("POST", "/admin/category/create", "App\Controllers\CategoryController@store", "Category Store");

$router->map("GET", "/admin/category/[i:id]/delete", "App\Controllers\CategoryController@delete", "Category Delete");

$router->map("POST", "/admin/category/update", "App\Controllers\CategoryController@update", "Category Update");
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

$router->map("GET", "/admin/product/[i:id]/edit", "App\Controllers\ProductController@edit", "Product Edit");

$router->map("POST", "/admin/product/[i:id]/edit", "App\Controllers\ProductController@update", "Product Update");

$router->map("GET", "/admin/product/[i:id]/delete", "App\Controllers\ProductController@delete", "Product Delete");

// $router->map("GET", "/search", "App\Controllers\ProductController@search", "Search Route");

// Route::get('/products/search', [ProductController::class, 'search'])->name('products.search');

// Products Routes Ends