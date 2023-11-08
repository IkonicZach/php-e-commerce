<style>
    .container-fluid {
        background-color: #15b2d5 !important;
    }
    body {
        background-color: #b5e6f5 !important;
    }
    img {
        box
    }
</style>
@extends('layout.master')

@section('title','Admin Home')

@section('content')

@include('layout.action_wheel')
    <img src="{{asset('imgs/comming.jpg')}}" class="shadow-lg" style="display: block;margin-left: auto;margin-right: auto;width: 50%;">
@endsection