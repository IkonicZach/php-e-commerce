<?php

namespace App\Classes;

use Illuminate\Database\Capsule\Manager as Capsule;

class ValidateRequest
{
    private $errors = [];
    private $err_messages = [
        "unique" => "':attribute' field must be unique!",
        "required" => "You must fill this ':attribute' field!",
        "minLength" => "Two few characters in ':attribute' field. Needed at least :policy characters!",
        "maxLength" => "Two many characters in ':attribute' field. Can't be more than :policy characters!",
        "email" => "Must be an email!",
        "string" => "Must be string!",
        "number" => "Must be numbers!",
        "mixed" => "Contain unvalid characters!",
    ];

    public function checkValid($data, $policy)
    {
        foreach ($data as $column => $value) {
            if (in_array($column, array_keys($policy))) {
                $this->doValid([
                    "column" => $column,
                    "value" => $value,
                    "policies" => $policy[$column]
                ]);
            }
        }
    }

    public function doValid($data)
    {
        $column = $data["column"];
        foreach ($data["policies"] as $rule => $policy) {
            $valid = call_user_func_array([self::class, $rule], [$column, $data["value"], $policy]);
            if (!$valid) {
                $this->setError(
                    str_replace(
                        [":attribute", ":policy"], 
                        [$column, $policy],
                        $this->err_messages[$rule]
                    ),
                    $column
                );
            }
        }
    }
    public function unique($column, $value, $policy)
    {
        if ($value != null && !empty(trim($value))) {
            return !Capsule::table($policy)->where($column, $value)->exists();
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
            return preg_match("/^[A-Za-z ]+$/", $value);
        }
    }

    public function number($column, $value, $policy)
    {
        if ($value != null && !empty(trim($value))) {
            return preg_match("/^[0-9\.]+$/", $value);
        }
    }

    public function mixed($column, $value, $policy)
    {
        if ($value != null && !empty(trim($value))) {
            return preg_match("/^[A-Za-z0-9 \.$@]+$/", $value);
        }
    }

    public function setError($error, $key = null)
    {
        if ($key) {
            $this->errors[$key] = $error;
        } else {
            $this->errors[] = $error;
        }
    }

    public function hasError()
    {
        return count($this->errors) > 0 ? true : false;
    }

    public function getError()
    {
        return $this->errors;
    }
}
