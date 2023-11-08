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

<div id="carouselExampleAutoplaying" class="carousel slide container" data-bs-ride="carousel" style="margin-top: 90px">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
        <h2 class="header">New Products</h2>
        <div class="row rounder border g-0">
            <?php 
            $count = App\Models\Product::all()->count();
            list($prods, $pages) = paginate(3, $count, new App\Models\Product());
            $carouselProducts = json_decode(json_encode($prods));
            foreach ($carouselProducts as $product) : ?>
            <div class="col-md-4 grid-items border p-4">
                <div class="grid-items-image" style="background-image: url('<?php echo $product->image?>'); background-size: contain !important; background-repeat: no-repeat;">
                </div>
                <div class="d-flex justify-content-between align-items-center border-bottom py-2">
                    <b>
                        <p class="sans m-0"><?php echo $product->name?></p>
                    </b>
                    <p class="m-0" style="font-family: Baumans;">$<?php echo $product->price?></p>
                </div>
                <div class="d-flex justify-content-evenly mt-3">
                    <small>
                        <a href="/product/{{$product->id}}/details" class="parent">
                            <i class="fa fa-angles-right text-warning p-2 border border-warning rounded-circle"> <span class="sans hidden">View details</span></i>
                        </a>
                    </small>
                    <small>
                        <a class="parent">
                            <i <i onclick="addToCart('{{$product->id}}')" class="fa fa-cart-plus text-danger p-2 border border-danger rounded-circle"> <span class="sans hidden">Add to cart</span></i>
                        </a>
                    </small>
                    <small>
                        <a class="parent">
                            <i class="fa-solid fa-money-check-dollar text-bluen p-2 border-bluen rounded-circle"> <span class="sans hidden">Buy now</span></i>
                        </a>
                    </small>
                </div>
            </div>
            <?php endforeach; ?>
        </div>
    </div>

    <div class="carousel-item" data-bs-interval="10000">
        <h2 class="header">Popular items</h2>
        <div class="row rounder border g-0 ">
            @foreach ($pops as $pop)
                <div class="col-md-4 grid-items border p-4">
                    <div class="grid-items-image" style="background-image: url('{{$pop->image}}'); background-size: contain !important; background-repeat: no-repeat;">
                    </div>
                    <div class="d-flex justify-content-between align-items-center border-bottom py-2">
                        <b>
                            <p class="sans m-0">{{$pop->name}}</p>
                        </b>
                        <p class="m-0" style="font-family: Baumans;">${{$pop->price}}</p>
                    </div>
                    <div class="d-flex justify-content-evenly mt-3">
                        <small>
                            <a class="parent">
                                <i class="fa fa-angles-right text-warning p-2 border border-warning rounded-circle"> <span class="sans hidden">View details</span></i>
                            </a>
                        </small>
                        <small>
                            <a class="parent">
                                <i onclick="addToCart('{{$product->id}}')" class="fa fa-cart-plus text-danger p-2 border border-danger rounded-circle"> <span class="sans hidden">Add to cart</span></i>
                            </a>
                        </small>
                        <small>
                            <a class="parent">
                                <i class="fa-solid fa-money-check-dollar text-bluen p-2 border-bluen rounded-circle"> <span class="sans hidden">Buy now</span></i>
                            </a>
                        </small>
                    </div>
                </div>
            @endforeach
        </div>
    </div>
    
    <div class="carousel-item" data-bs-interval="10000">
        <h2 class="header">Halloween Promotions</h2>
        <div class="row rounder border g-0">
            <?php 
            $count = App\Models\Product::all()->count();
            list($prods, $pages) = paginate(3, $count, new App\Models\Product());
            $carouselProducts = json_decode(json_encode($prods));
            foreach ($carouselProducts as $product) : ?>
            <div class="col-md-4 grid-items border p-4">
                <div class="grid-items-image" style="background-image: url('<?php echo $product->image?>'); background-size: contain !important; background-repeat: no-repeat;">
                </div>
                <div class="d-flex justify-content-between align-items-center border-bottom py-2">
                    <b>
                        <p class="sans m-0"><?php echo $product->name?></p>
                    </b>
                    <div class="d-inline-flex">
                        <del class="pe-1 text-danger" style="font-family: Baumans;">$<?php echo $product->price?></del>
                        <h5 class="m-0" style="font-family: Baumans;">$<?php echo $product->price * 0.6?></h5>
                    </div>
                </div>
                <div class="d-flex justify-content-evenly mt-3">
                    <small>
                        <a class="parent">
                            <i class="fa fa-angles-right text-warning p-2 border border-warning rounded-circle"> <span class="sans hidden">View details</span></i>
                        </a>
                    </small>
                    <small>
                        <a class="parent">
                            <i onclick="addToCart('{{$product->id}}')" class="fa fa-cart-plus text-danger p-2 border border-danger rounded-circle"> <span class="sans hidden">Add to cart</span></i>
                        </a>
                    </small>
                    <small>
                        <a class="parent">
                            <i class="fa-solid fa-money-check-dollar text-bluen p-2 border-bluen rounded-circle"> <span class="sans hidden">Buy now</span></i>
                        </a>
                    </small>
                </div>
            </div>
            <?php endforeach; ?>
        </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<div class="container mt-5">
    <div class="d-flex">
        <div class="card col-md-2 p-4 border rounded">
            <div class="card-header sans">
                <h6 class="m-0"><i class="fa-solid fa-tags"></i> Browse by</h6>
            </div>
            <ul class="list-group list-group-flush">
                @foreach ($cats as $cat)
                <li class="list-group-item">
                    <a href="#{{$cat->name}}">{{$cat->name}}</a>
                </li>
                @endforeach
            </ul>
        </div>
        <section class="col-md-10">
            @include("layout.horizontal_sidebar")
            <div class="px-5 py-3">
                <div class="row g-0">
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
                    <?php use Illuminate\Database\Capsule\Manager as Capsule; ?> 
                    @foreach ($categories as $cat)  
                <div class="row my-3 g-0">
                    <h2 class="header" id="{{$cat->name}}">{{$cat->name}}</h2>
                        @foreach($cat->products->take(3) as $product)
                        <div class="col-md-4 grid-items border p-4"id="{{$cat->name}}">
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
                    @endforeach
                    <!-- @foreach($products as $product)

                    @endforeach -->
                </div>
            </div>
        </section>
    </div>
</div>
@endsection

@section('script')
<script>
    const navbarHeight = 100; // Change this value to match the height of your fixed navbar (in pixels)

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substr(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const targetPosition = targetElement.getBoundingClientRect().top;
                window.scrollBy({
                    top: targetPosition - navbarHeight,
                    behavior: 'smooth',
                });
            }
        });
    });
</script>
@endsection