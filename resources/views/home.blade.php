<style>
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
                <h5 class="m-0">Browse by</h5>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">
                    <a href="#">A category</a>
                </li>
            </ul>
        </div>
        <section class="col-md-10">
            @include("layout.horizontal_sidebar")
            <div class="px-5 py-3">
                <h2>All products</h2>
                <div class="row">
                    @foreach($products as $product)
                    <div class="col-md-4 grid-items border p-4">
                        <div class="grid-items-image" style="background-image: url('{{$product->image}}');">
                            <p class="grid-items-number sans" style="width: 35px; height: 35px; padding: 0.35rem;">{{$product->id}}</p>
                        </div>
                        <div class="d-flex justify-content-between mt-3">
                            <b>
                                <p class="sans m-0">{{$product->name}}</p>
                            </b>
                            <p class="sans m-0">${{$product->price}}</p>
                        </div>
                        <div class="d-flex justify-content-between mt-3">
                            <small><a href="/admin/product/id/edit"><i onclick="" class="fa fa-angles-right text-warning p-2 border border-warning rounded"> <span class="sans fw-normal">View</span></i></a></small>
                            <small><a href="/admin/product/id/delete"><i class="fa fa-cart-plus text-danger p-2 border border-danger rounded"> <span class="sans fw-normal">Add</span></i></a></small>
                        </div>
                    </div>
                    @endforeach
                </div>
            </div>
        </section>
    </div>
</div>
@endsection