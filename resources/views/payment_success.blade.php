@extends("layout.master")

@section("title", "Payment Success")

@section("content")
<h1>Sorry! You are scammed!!!</h1>
<a href="/">Click here</a> to recover your money.
@endsection

@section("script")

<script>
    localStorage.removeItem("products");
    localStorage.removeItem("items");
</script>

@endsection