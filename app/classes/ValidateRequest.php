<?php

namespace App\Classes;

use Illuminate\Database\Capsule\Manager as Capsule;

class ValidateRequest
{
    private $errors = [];
    private $err_messages = [
        "unique" => "Must be unique",
        "require" => "You must fill this field!",
        "minLength" => "Two few characters",
        "maxLength" => "Two many characters",
        "email" => "Must be an email",
        "string" => "Must be string",
        "mixe" => "Must be an email",
    ];

    public function unique($column, $value, $policy)
    {
        if ($value != null && !empty(trim($value))) {
            return Capsule::table($policy)->where($column, $value)->exists();
        }
    }

    public function required($column, $value, $policy)
    {
        return $value != null && !empty($value) ? true : false;
    }

    public function minLength($column, $value, $policy)
    {
        if ($value != null && !empty(trim($value))) {
            return strlen(trim($value)) >= $policy;
        }
    }

    public function maxLength($column, $value, $policy)
    {
        if ($value != null && !empty(trim($value))) {
            return strlen(trim($value)) <= $policy;
        }
    }

    public function email($column, $value, $policy)
    {
        if ($value != null && !empty(trim($value))) {
            return filter_var($value, FILTER_VALIDATE_EMAIL);
        }
        return false;
    }

    public function string($column, $value, $policy)
    {
        if ($value != null && !empty(trim($value))) {
            return preg_match("/^[A-Za-z]+$/", $value);
        }
    }

    public function mixed($column, $value, $policy)
    {
        if ($value != null && !empty(trim($value))) {
            return preg_match("/^[A-Za-z0-9 \.$@]+$/", $value);
        }
    }
}
