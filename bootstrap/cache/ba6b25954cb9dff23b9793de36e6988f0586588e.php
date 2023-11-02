<style>
    .navbar {
        background-color: #15b2d5;
    }
</style>


<?php $__env->startSection('title', 'Virtual Cart'); ?>

<?php $__env->startSection('content'); ?>
<input type="hidden" name="" id="token" value="<?php echo e(\App\Classes\CSRFToken::_token()); ?>">
<div class="container" style="margin-top: 90px;">
    <div class="border sans">
        <div class="d-flex bg-bluen align-items-center w-100 justify-content-between p-3">
            <div class="d-flex align-items-center">
                <h3 class="m-0 text-white">Your cart</h3>
                <i class="fa fa-cart-shopping text-white"></i>
            </div>
            <div>
                <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">View Receipt</button>

                <div class="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Your receipt</h5>
                        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <p>Try scrolling the rest of the page to see this option in action.</p>
                    </div>
                </div>
            </div>
            <i></i>
        </div>
        <div class="row g-0 fw-bold text-center">
            <div class="col-md-2 border p-2">Products</div>
            <div class="col-md-4 border p-2">Details</div>
            <div class="col-md-1 border p-2">Price</div>
            <div class="col-md-2 border p-2">Quantity</div>
            <div class="col-md-1 border p-2">Total</div>
            <div class="col-md-2 border p-2">Action</div>
        </div>

        <div id="tablebody"></div>
        <div class="row border-top g-0 align-items-center">
            <div class="col-md-7"></div>
            <div class="col-md-2 p-3" style="opacity: 0;">h</div>
            <div class="col-md-1"></div>
            <div class="col-md-2 text-center">
                <?php if(\App\Classes\Auth::check()): ?>
                <a class="btn-bluen p-2" id="checkOutBtn" onclick="payOut()">Checkout</a>
                <form action="/payment/stripe" id="stripeForm" method="post" style="display: none;">
                    <script src="https://checkout.stripe.com/checkout.js" class="stripe-button" data-key="<?php echo e(\App\Classes\Session::get('publishable_key')); ?>" 
                    data-name="Virtuat Cart" 
                    data-email="<?php echo e(\App\Classes\Auth::user()->email); ?>"
                    data-description="Get unlimited access!" 
                    data-image="<?php echo e(asset('imgs/vp.png')); ?>"
                    data-amount="5000" 
                    data-locale="auto"></script>
                </form>
                <?php else: ?>
                <a href="/user/login" class="btn-bluen p-2">Checkout</a>
                <?php endif; ?>
            </div>
        </div>
        <!-- <button type="button" class="btn btn-primary" id="liveToastBtn">Show live toast</button>

        <div class="toast-container position-fixed bottom-0 end-0 p-3">
            <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
                <div class="toast-header">
                    <img src="..." class="rounded me-2" alt="...">
                    <strong class="me-auto">Bootstrap</strong>
                    <small>11 mins ago</small>
                    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
                <div class="toast-body">
                    Hello, world! This is a toast message.
                </div>
            </div>
        </div> -->

    </div>
</div>

<?php $__env->stopSection(); ?>

<?php $__env->startSection('script'); ?>
<script>
    $(document).ready(function() {
        document.getElementById("liveToastBtn").onclick = function() {
            $('.toast').toast('show');
        }
    })

    function loadProduct() {
        $.ajax({
            type: "POST",
            url: "/cart",
            data: {
                "cart": getCartItems(),
                "token": $("#token").val()
            },
            success: function(result) {
                saveProducts(result);
            },
            errors: function(response) {
                console.log(response.responseText);
            },
        });
    }

    function saveProducts(result) {
        localStorage.setItem("products", result);
        let results = JSON.parse(localStorage.getItem("products"));
        showProducts(results);
    }

    function addQuantity(id) {
        var results = JSON.parse(localStorage.getItem("products"));
        results.forEach((result) => {
            if (result.id === id) {
                result.qty = result.qty + 1;
            }
        });
        saveProducts(JSON.stringify(results));
    }

    function reduceQuantity(id) {
        var results = JSON.parse(localStorage.getItem("products"));
        results.forEach((result) => {
            if (result.id === id) {
                if (result.qty > 0) {
                    result.qty = result.qty - 1;
                }
            }
        });
        saveProducts(JSON.stringify(results));
    }

    function deleteProduct(id) {
        var results = JSON.parse(localStorage.getItem("products"));
        results.forEach((result) => {
            if (result.id === id) {
                results.splice(results.indexOf(result), 1);
            }
        });
        deleteItem(id);
        saveProducts(JSON.stringify(results));
    }

    function showProducts(results) {
        var i = 1;
        var total = 0;
        var str = "";
        results.forEach((result) => {
            total += result.qty * result.price;
            str += `<div class="row g-0 cart-items">
                        <div class="col-md-2 p-2">
                            <div class="cart-items-image" style="background-image: url('${result.image}');">
                                <p class="grid-items-number sans" style="width: 35px; height: 35px; padding: 0.35rem;">${i}</p>
                            </div>
                        </div>
                        <div class="col-md-4 p-2 ">
                            <p class="sans fw-bold border-bottom pb-1 d-block">${result.name}</p>
                            <p class="sans" style="overflow: hidden;">${result.description}</p>
                        </div>
                        <div class="col-md-1 cart-items-data justify-content-evenly">
                            <span style="font-family: Baumans;">$${result.price}</span>
                        </div>
                        <div class="col-md-2 sans cart-items-data justify-content-center">
                            <div class="d-flex align-items-center border-bluen" style=" border-radius: 0.8rem;" id="quantity">
                                <a><i class="fa fa-minus border-end" onclick="reduceQuantity(${result.id})"></i></a>
                                <span class="px-2">${result.qty}</span>
                                <a><i class="fa fa-plus border-start" onclick="addQuantity(${result.id})"></i></a>
                            </div>
                        </div>
                        <div class="col-md-1 cart-items-data justify-content-evenly">${(result.qty * result.price).toFixed(2)}</div>
                        <div class="col-md-2 cart-items-data align-self-center">
                            <small>
                                <a href="/product/${result.id}/details" class="parent">
                                    <i class="fa fa-angles-right text-warning p-2 border border-warning rounded-circle"> <span class="sans hidden">View details</span></i>
                                </a>
                            </small>
                            <small>
                                <a class="parent">
                                    <i onclick="deleteProduct(${result.id})" class="fa fa-minus-circle text-danger p-2 border border-danger rounded-circle">
                                        <span class="hidden">Delete</span>
                                    </i>
                                </a>
                            </small>
                        </div>
                    <div>`;
            i++;
        });
        str += `<div class="row border-top g-0 align-items-center">
                    <div class="col-md-7">
                    </div>
                    <div class="col-md-2 text-center p-3">
                        <strong class="m-0">Grand total</strong>
                    </div>
                    <div class="col-md-1 text-center">
                        <span style="font-family: Baumans;">$${total.toFixed(2)}</span>
                    </div>
                </div>`;
        $('#tablebody').html(str);
    }

    function payOut() {
        var results = JSON.parse(localStorage.getItem("products"));
        $.ajax({
            type: "POST",
            url: "/payOut",
            data: {
                "items": results,
                "token": $("#token").val()
            },
            success: function(results) {
                console.log(results);
                $('#stripeForm').css('display', 'block');
                $('#checkOutBtn').css('display', 'none');
                // clearCart();
                // showCartItems();
                // showProducts([]);
            },
            errors: function(response) {
                console.log(response.responseText);
            }
        })
    }

    loadProduct();
</script>
<?php $__env->stopSection(); ?>
<?php echo $__env->make("layout.master", array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>