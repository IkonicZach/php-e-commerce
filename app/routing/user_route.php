<?php

// User routes starts here
$router->map("GET", "/user/login", "App\Controllers\UserController@showLoginForm", "User Show Login Form");

$router->map("POST", "/user/login", "App\Controllers\UserController@login", "User Login");

$router->map("GET", "/user/register", "App\Controllers\UserController@showRegisterForm", "User Register");

$router->map("POST", "/user/register", "App\Controllers\UserController@register", "User Register Form");

$router->map("GET", "/user/logout", "App\Controllers\UserController@logout", "User Logout");

// User routes ends here