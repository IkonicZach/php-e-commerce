<?php

namespace App\Classes;

class Redirect{
    public static function to($page){
        header("location: $page");
    }

    public static function back(){
        $uri = $_SERVER["REQUEST_URI"];
        header("location: $uri");
    }
}