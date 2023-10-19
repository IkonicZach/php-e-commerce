@extends ('layout.master')

@section('title', 'Category Create')

@section('content')
<div class="d-flex justify-content-end align-items-center" style="height: 627px;">
    <section class="d-flex w-50 h-100 nav-fix bg-bluen align-items-center" style="z-index: -1;">
        <img class="w-100" style="max-width: 100%; height: auto;" src="https://staticeurobiz.europeanchamber.com.cn/wp-content/uploads/2019/02/China’s-New-E-commerce-Law-Good-or-Bad-News-for-Business-01.png" alt="error">
    </section>
    <section class="w-50 p-5">
        <div class="horizontal-list bg-bluen rounded-top">
            <a href="/admin/category/all" class="horizontal-list-group sans">All Categories</a>
            <a href="/admin/category/create" class="horizontal-list-group sans">Create Category</a>
        </div>
        <!--  Form start -->
        <form action="<?php URL_ROOT . '/admin/category/create' ?>" method="post" class="container px-5 py-3 table-bordered rounded-bottom d-inline-block" enctype="multipart/form-data">
            @include("layout.report_messages")
            @if(\App\Classes\Session::has("del_success"))
            {{\App\Classes\Session::flash("del_success")}}
            @endif

            @if(\App\Classes\Session::has("del_fail"))
            {{\App\Classes\Session::flash("del_fail")}}
            @endif
            <h2 class="sans">Create a <span class="sans text-bluen">category</span></h2>
            <div class="form-group">
                <label for="name" class="sans mt-3">Category Name</label>
                <input type="text" id="name" class="form-control sans mb-3" name="name" placeholder="Enter category name">

                <input type="hidden" name="token" value="{{\App\Classes\CSRFToken::_token()}}">

                <button class="btn btn-bluen float-end sans" type="submit" name="submit">Create</button>
            </div>
        </form>
        <!-- Form ends -->

        <div class="list-group table-bordered my-3">
            @foreach($cats as $cat)
            <div class="d-flex py-2 px-5 align-items-center justify-content-between">
                <a href="/admin/category/all" class="sans">{{$cat->name}}</a>
                <span>
                    <small><a href="#"><i onclick="fun('{{$cat->name}}', '{{$cat->id}}')" class="fa fa-edit text-warning p-2 border border-warning rounded-circle"></i></a></small>
                    <small><a href="/admin/category/{{$cat->id}}/delete"><i class="fa fa-minus-circle text-danger p-2 border border-danger rounded-circle"></i></a></small>
                </span>
            </div>
            @endforeach
        </div>
        {!! $pages !!}
    </section>
</div>

<!-- Model Starts -->

<div class="modal fade" id="CatEditModel" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content p-3">
            <div class="modal-header">
                <h4 class="modal-title sans" id="exampleModalLabel">Edit <span class="sans text-bluen">category</span></h4>
                <button type="button" class="close sans" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body sans">
                <!-- Edit form starts here -->
                <form class="container px-5 py-3 table-bordered rounded-bottom d-inline-block" enctype="multipart/form-data">
                    @include("layout.report_messages")
                    @if(\App\Classes\Session::has("del_success"))
                    {{\App\Classes\Session::flash("del_success")}}
                    @endif

                    @if(\App\Classes\Session::has("del_fail"))
                    {{\App\Classes\Session::flash("del_fail")}}
                    @endif
                    <div class="form-group">
                        <label for="editName" class="sans mt-3">Category name</label>
                        <input type="text" id="editName" class="form-control sans mb-3" name="editName" placeholder="Enter category name">

                        <input type="hidden" name="editToken" value="{{\App\Classes\CSRFToken::_token()}}">
                        <input type="hidden" name="editId">

                        <button onclick="startEdit()" class="btn btn-bluen float-end sans" type="submit" name="submit">Confirm changes</button>
                    </div>
                </form>
                <!-- Edit form ends here -->
            </div>
        </div>
    </div>
</div>
<!-- Model ends -->
@endsection

@section('script')

<script>
    function fun(name, id) {
        $("#editName").val(name);
        $("#editId").val(id);
        $("#CatEditModel").modal("show");
    }

    function startEdit(e) {
        e.preventDefault();
        $name = $("#editName").val();
        $token = $("#editToken").val();
        $id = $("#editId").val();

        console.log("Category name: " + $name + "<br>Token: " + $token + "<br>Id: " + $id);
        
    }
</script>

@endsection