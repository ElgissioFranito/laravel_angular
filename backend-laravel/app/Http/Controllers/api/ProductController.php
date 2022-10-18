<?php

namespace App\Http\Controllers\api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Product;

class ProductController extends Controller
{
    public function getProducts()
    {
        $prod = Product::all();

        return $prod;
    }

    public function getProduct($id)
    {
        $prod = Product::where('id', $id)->first();

        return $prod;
    }

    public function createProd(Request $request){
        $request->validate([
            "ref" => "required",
            "descp" => "required",
            "quantité" => "required",
            "prix" => "required",
        ]);
        $product = Product::create([
            "reference" => $request->ref,
            "description" =>  $request->descp,
            "quantite" =>  $request->quantité,
            "prix" =>  $request->prix,
        ]);

        return [
            "message" => "OK",
            "product" => $product,
        ];
    }

    public function updateProd(Request $request, $id){
        $prod = Product::find($id);
        if ($prod){

            $prod->update([
                "reference" => isset($request->ref) ? $request->ref: $prod->ref,
                "description" => isset($request->descp) ? $request->descp: $prod->descp,
                "quantite" =>   isset($request->quantité) ? $request->quantité: $prod->quantité,
                "prix" =>   isset($request->prix) ? $request->prix: $prod->prix,
            ]);

            return [
                "message" => "OK",
                "product" => $prod,
            ];
        } else {
            return [
                "message" =>"produit introuvable"
            ];
        }


    }

    public function deleteProd($id){
        $prod = Product::find($id);
        if ($prod){
            $prod->delete;

            return [
                "message" => "supprimé"
            ];
        } else {
            return [
                "message" => "produit introuvable"
            ];
        }
    }
 }
