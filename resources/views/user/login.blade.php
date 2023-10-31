@extends("layout.master")

@section("title", "User Login")

@section("content")
<div class="container d-flex justify-content-end" style="margin-top: 90px;">
    <section class="d-flex col-md-5 h-100 nav-fix align-items-center justify-content-center" style="z-index: -1; background-color: #15b5d6;">
        <img class="w-75" style="max-width: 100%; height: auto;" src="{{asset('imgs/users_on_top2.png')}}" alt="error">
    </section>
    <section class="col-md-7 ps-5 sans">
        <form action="/user/login" method="post" class="border rounded p-5">
            <h3><span class="text-bluen">Login</span> to your account</h3>

            @if(\App\Classes\Session::has("success"))
                {{\App\Classes\Session::flash("success")}}
                {{\App\Classes\Session::remove("success")}}
            @endif
            @if(\App\Classes\Session::has("error"))
                {{\App\Classes\Session::errorFlash("error")}}
                {{\App\Classes\Session::remove("error")}}
            @endif

            <input type="hidden" name="token" value="{{\App\Classes\CSRFToken::_token()}}">

            <label for="email" class="form-label mt-3">Email</label>
            <input type="email" name="email" id="email" class="form-control">

            <label for="password" class="form-label mt-3">Password</label>
            <input type="password" name="password" id="password" class="form-control">

            <div class="d-flex justify-content-between mt-3">
                <div>
                    <p>Don't have an account? Register <a href="/user/register" class="text-bluen">here</a>.</p>
                </div>
            </div>

            <div class="d-flex justify-content-end">
                <button class="btn btn-cancel" type="submit" name="cancel">Cancel</button>
                <button class="btn btn-bluen ms-1" type="submit" name="submit">Login</button>
            </div>
        </form>
    </section>
</div>
@endsection