<div class="container-fluid nav-fix p-0" style="z-index: 1;">
    <nav class="navbar navbar-expand-lg w-100">
        <div class="container d-flex justify-content-between">
            <div class="left d-inline-flex">
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
                            <a class="nav-link sans text-white" onclick="goToCartPage()">Cart<span class="noti-red" id="cart_count">0</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link sans text-white" href="/admin">Admin Panel</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="right d-inline-flex">
                <form class="d-inline-flex m-0" role="search">
                    <input class="form-control sans me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-bluen mt-0" type="submit"><i class="fa fa-search"></i></button>
                </form>
            </div>
        </div>
    </nav>
</div>