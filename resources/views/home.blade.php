<style>
    .col-md-10 .horizontal-list {
        border-top-left-radius: 0 !important;
    }

    .d-flex .card {
        border-top-right-radius: 0% !important;
        border-bottom-right-radius: 0% !important;
    }

    .navbar {
        background-color: #15b2d5;
    }
</style>
@extends("layout.master")

@section('title', 'Virtual Cart')

@section('content')
<div class="container" style="margin-top: 90px;">
    <div class="d-flex">
        <div class="card col-md-2 p-4 border rounded">
            <div class="card-header sans">
                <h6 class="m-0"><i class="fa-solid fa-tags"></i> Browse by</h6>
            </div>
            <ul class="list-group list-group-flush">
                @foreach ($cats as $cat)
                <li class="list-group-item">
                    <a href="#">{{$cat->name}}</a>
                </li>
                @endforeach
            </ul>
        </div>
        <section class="col-md-10">
            @include("layout.horizontal_sidebar")
            <div class="px-5 py-3">
                <div class="row">
                    <h2 class="header">Featured <i class="fa-solid fa-award"></i></h2>
                    @foreach($featured as $product)
                    <div class="col-md-4 grid-items border p-4">
                        <div class="grid-items-image" style="background-image: url('{{$product->image}}');">
                        </div>
                        <div class="d-flex justify-content-between align-items-center border-bottom py-2">
                            <b>
                                <p class="sans m-0">{{$product->name}}</p>
                            </b>
                            <p class="m-0" style="font-family: Baumans;">${{$product->price}}</p>
                        </div>
                        <div class="d-flex justify-content-evenly mt-3">
                            <small>
                                <a href="/product/{{$product->id}}/details" class="parent">
                                    <i class="fa fa-angles-right text-warning p-2 border border-warning rounded-circle"> <span class="sans hidden">View details</span></i>
                                </a>
                            </small>
                            <small>
                                <a class="parent">
                                    <i onclick="addToCart('{{$product->id}}')" class="fa fa-cart-plus text-danger p-2 border border-danger rounded-circle"> <span class="sans hidden">Add to cart</span></i>
                                </a>
                            </small>
                        </div>
                    </div>
                    @endforeach
                </div>
            </div>

            <div class="px-5 py-3">
                <div class="row">
                    <h2 class="header">All</h2>
                    @foreach($products as $product)
                    <div class="col-md-4 grid-items border p-4">
                        <div class="grid-items-image" style="background-image: url('{{$product->image}}');">
                        </div>
                        <div class="d-flex justify-content-between align-items-center border-bottom py-2">
                            <b>
                                <p class="sans m-0">{{$product->name}}</p>
                            </b>
                            <p class="m-0" style="font-family: Baumans;">${{$product->price}}</p>
                        </div>
                        <div class="d-flex justify-content-evenly mt-3">
                            <small>
                                <a href="/product/{{$product->id}}/details" class="parent">
                                    <i class="fa fa-angles-right text-warning p-2 border border-warning rounded-circle"> <span class="sans hidden">View details</span></i>
                                </a>
                            </small>
                            <small>
                                <a class="parent">
                                    <i onclick="addToCart('{{$product->id}}')" class="fa fa-cart-plus text-danger p-2 border border-danger rounded-circle"> <span class="sans hidden">Add to cart</span></i>
                                </a>
                            </small>
                        </div>
                    </div>
                    @endforeach
                </div>
                {!! $pages !!}
            </div>
        </section>
    </div>
</div>
@endsection