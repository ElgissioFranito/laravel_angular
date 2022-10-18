<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    public $table = "products";
    public $fillable = [
        "reference",
        "description",
        "quantite",
        "prix"];

}
