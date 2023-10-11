@extends ('layout.master')

@section('title', 'Category Create')

@section('content')
<div class="d-flex align-items-center" style="height: 627px;">
    <img class="w-50 h-100" src="https://staticeurobiz.europeanchamber.com.cn/wp-content/uploads/2019/02/China’s-New-E-commerce-Law-Good-or-Bad-News-for-Business-01.png" alt="error">
    <section class="w-50 p-5">
        <form action="<?php URL_ROOT . '/admin/category' ?>" method="post" class="container p-5 table-bordered rounded">
            <h2 class="sans">Create a <span class="sans text-bluen">category</span></h2>
            <div class="form-group">
                <label for="name" class="sans">Name</label>
                <input type="text" id="name" class="form-control sans" name="name" placeholder="Enter category name">
                <button class="btn btn-bluen sans" type="submit" name="submit">Create</button>
            </div>
        </form>
    </section>
</div>
@endsection