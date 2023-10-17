<style>
    .container-fluid {
        background-color: #15b2d5 !important;
    }
</style>
@extends('layout.master')

@section('title','Admin Home')

@section('content')
<div class="container" style="margin-top: 90px;">
    <div class="d-flex">
        <div class="col-md-3 p-0">
            @include("layout.admin_sidebar")
        </div>
        <div class="col-md-3 p-0"></div>
    </div>
</div>
@endsection