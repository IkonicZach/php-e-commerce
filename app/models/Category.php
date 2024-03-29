<?php

namespace App\Models;

use Illuminate\Database\Capsule\Manager as Capsule;
use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class Category extends Model
{
    protected $fillable = ["name", "slug"];

    public function genPaginate($limit)
    {
        $categories = [];
        $table = $this->getTable();
        $cats = Capsule::select("SELECT * FROM $table ORDER BY id DESC" . $limit);
        foreach ($cats as $cat) {
            $date = new Carbon($cat->created_at);
            array_push($categories, [
                "id" => $cat->id,
                "name" => $cat->name,
                "slug" => $cat->slug,
                "created_at" => $date->toFormattedDateString()
            ]);
        }
        return $categories;
    }

    public function products()
    {
        return $this->hasMany(Product::class);
    }

}
