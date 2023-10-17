<?php
namespace App\Classes;

class Request
{
    public static function all($isArray = false)
    {
        $result = [];

        if (count($_GET) > 0) {
            $result['get'] = $_GET;
        }
        if (count($_POST) > 0) {
            $result['post'] = $_POST;
        }
        $result['file'] = $_FILES;

        return json_decode(json_encode($result), $isArray);
    }

    public static function get($key)
    {
        return self::all()->$key;
    }

    public static function has($key)
    {
        return array_key_exists($key, self::all(true)) ? true : false;
    }

    public static function old($key, $value)
    {
        return isset(self::all()->$key->$value) ? self::all()->$key->$value : "";
    }

    public static function refresh()
    {
        $_POST = [];
        $_GET = [];
        $_FILES = [];
    }
}
