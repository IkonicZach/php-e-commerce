@extends("layout.master")

@section("title", "Product edit page")

@section("content")
<div class="container" style="margin-top: 90px;">
    <div class="d-flex">
        <div class="col-md-4">
            @include("layout.admin_sidebar")
        </div>
        <div class="col-md-8">
            <h1>this is content of edit page</h1>
        </div>
    </div>
</div>
@endsection