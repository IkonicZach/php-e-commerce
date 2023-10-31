<div class="container-fluid nav-fix p-0" style="z-index: 1;">
    <nav class="navbar navbar-expand-lg">
        <div class="container d-flex justify-content-between">
            <div class="d-inline-flex">
                <a class="navbar-brand font-weight-normal text-white" href="/">
                    <span class="sans">Virtual</span>
                    <i class="fa fa-shopping-cart logo"></i></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link sans text-white" aria-current="page" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link sans text-white" href="/cart">Cart<span class="noti-red" id="cart_count">0</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link sans text-white" href="/admin">Admin Panel</a>
                        </li>
                        <div class="dropdown">
                            <button class="nav-link user dropdown-toggle rounded" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                @if(\App\Classes\Auth::check())
                                {{\App\Classes\Auth::user()->name}}
                                @else
                                <i class="fa-solid fa-user"></i> Sign in
                                @endif
                            </button>
                            <ul class="dropdown-menu">
                                @if(\App\Classes\Auth::check())
                                <li><a class="dropdown-item" href="\user\logout">Logout</a></li>
                                @else
                                <li><a class="dropdown-item" href="\user\login">Sign in</a></li>
                                <li><a class="dropdown-item" href="\user\register">Register</a></li>
                                @endif
                            </ul>
                        </div>
                    </ul>
                </div>
            </div>
            <div class="d-inline-flex">
                <form class="d-flex m-0" role="search">
                    <input class="form-control sans me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-bluen mt-0" type="submit"><i class="fa fa-search"></i></button>
                </form>
            </div>
        </div>
    </nav>
</div>

@section('script')
@endsection