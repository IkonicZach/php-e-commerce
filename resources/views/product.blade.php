<style>
    .navbar {
        background-color: #15b2d5;
    }

    .container .rounder {
        border-radius: 2rem !important;
    }
</style>
@extends("layout.master")

@section('title', 'Product details')

@section('content')
<div class="container" style="margin-top: 90px;">
    <div class="row rounder border g-0 shadow-lg">
        <div class="col-md-4">
            <img src="{{$product->image}}" alt="error" class="py-4" id="detail_img">
        </div>
        <div class="col-md-8 p-5 sans">
            <h3>{{$product->name}}</h3>
            <div class="d-flex align-items-center justify-content-between border-bottom pb-3">
                <h4 class="m-0 text-danger" style="font-family: Baumans;">${{$product->price}}</h4>
                <div class="d-inline-flex text-warning">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star-half"></i>
                    <small class="text-dark">(4.5) 25 reviews</small>
                </div>
            </div>
            <p class="pt-3">{{$product->description}}</p>

            <div class="d-flex" id="details_btns">
                <a class="">
                    <i onclick="addToCart('{{$product->id}}')" class="fa fa-cart-plus text-danger p-2 border border-danger"> <span>Add to cart</span></i>
                </a>
                
                <a class="">
                    <i onclick="addToCart('{{$product->id}}')" class="fa-solid fa-money-check-dollar text-bluen p-2 border-bluen"> <span>Buy now</span></i>
                </a>

                
            </div>
        </div>
    </div>
</div>
@endsection