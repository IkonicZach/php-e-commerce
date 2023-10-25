<style>
    .navbar {
        background-color: #15b2d5 !important;
    }
</style>
@extends("layout.master")

@section("title", "Product edit page")

@section("content")
<div class="d-flex justify-content-end container" style="margin-top: 40px;">
    <section class="d-flex col-md-5 h-100 nav-fix align-items-center" style="z-index: -1;">
        <img class="w-100" style="max-width: 100%; height: auto; padding: 7vw;" src="{{asset('imgs/Sale.jpg')}}" alt="error">
    </section>
    <section class="col-md-7 py-5">
        @include("layout.horizontal_sidebar")
        <!--  Form start -->
        <form action="/admin/product/{{$product->id}}/edit" method="post" class="container px-5 py-3 border d-inline-block" enctype="multipart/form-data" autocomplete="off">
            @include("layout.report_messages")
            <h2 class="sans">Edit <span class="sans text-bluen">product</span></h2>
            <div class="form-group">
                <div class="row">
                    <div class="col-md-6">
                        <label for="name" class="sans mt-3">Product Name</label>
                        <input type="text" id="name" class="form-control sans" name="name" placeholder="Enter product name" value="{{$product->name}}">
                    </div>
                    <div class="col-md-6">
                        <label for="price" class="sans mt-3">Price(<span class="sans text-bluen">$</span>)</label>
                        <input type="number" step="any" id="price" class="form-control sans" name="price" placeholder="Enter price" value="{{$product->price}}">
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6">
                        <label for="cat_id" class="sans mt-3">Category Name</label>
                        <select class="form-select" name="cat_id" id="cat_id">
                            @foreach($cats as $cat)
                            <option value="{{$cat->id}}" <?php echo $cat->id == $product->cat_id? "selected": "" ?>>{{$cat->name}}</option>
                            @endforeach
                        </select>
                    </div>
                    <div class="col-md-6">
                        <label for="sub_cat_id" class="sans mt-3">Sub-category Name</label>
                        <select class="form-select" name="sub_cat_id" id="sub_cat_id">
                            @foreach($subcats as $cat)
                            <option value="{{$cat->id}}" <?php echo $cat->id == $product->sub_cat_id? "selected": "" ?>>{{$cat->name}}</option>
                            @endforeach
                        </select>
                    </div>
                </div>

                <div>
                    <label for="file" class="sans mt-3">Upload an image</label>
                    <input class="form-control sans" type="file" id="file" name="file" multiple>
                </div>

                <input type="hidden" name="old_img" id="old_img" value="{{$product->image}}">

                <div class="input-group mt-3">
                    <span class="input-group-text sans">Description</span>
                    <textarea class="form-control" name="description" id="description" aria-label="With textarea">{{$product->description}}</textarea>
                </div>

                <input type="hidden" name="token" value="{{\App\Classes\CSRFToken::_token()}}">

                <div class="d-flex justify-content-end mt-3">
                    <button class="btn btn-cancel sans" style="margin-right: 5px;" type="reset" name="submit">Reset</button>
                    <button class="btn btn-bluen sans" type="submit" name="submit">Confirm changes</button>
                </div>

            </div>
        </form>
        <!-- Form ends -->
    </section>
</div>
@endsection