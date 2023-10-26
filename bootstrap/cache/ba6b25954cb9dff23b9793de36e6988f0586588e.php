<style>
    .navbar {
        background-color: #15b2d5;
    }
</style>


<?php $__env->startSection('title', 'Virtual Cart'); ?>

<?php $__env->startSection('content'); ?>

<div class="container d-flex" style="margin-top: 90px;">
    <div class="col-md-8 border sans">
        <h3 class="px-3 py-2 m-0 bg-bluen text-white">Your cart</h3>
        <div class="row g-0 cart-items">
            <div class="col-md-2 border p-2">
                <div class="cart-items-image" style="background-image: url('https://upload.wikimedia.org/wikipedia/en/1/14/Balltze_%28Cheems%29.jpg');">
                    <p class="grid-items-number sans" style="width: 35px; height: 35px; padding: 0.35rem;">1</p>
                </div>
            </div>
            <div class="col-md-4 p-2 border">
                <h6 class="sans border-bottom pb-2">Name</h6>
                <p class="sans">Lorem ipsum, dolor sit amet consectetur adipisicing elit..</p>
            </div>
            <div class="col-md-2 border cart-items-data justify-content-evenly">
                <span style="font-family: Baumans;">$Price</span>
            </div>
            <div class="col-md-2 sans border cart-items-data justify-content-center">
                <span>Quantity</span>
                <div class="d-flex align-items-center border-bluen" style=" border-radius: 0.8rem;" id="quantity">
                    <a href=""><i class="fa fa-minus border-end"></i></a>
                    <span class="px-2">10</span>
                    <a href=""><i class="fa fa-plus border-start"></i></a>
                </div>
            </div>
            <div class="col-md-2 border cart-items-data align-self-center">
                <small>
                    <a href="" class="parent">
                        <i class="fa fa-minus-circle text-danger p-2 border border-danger rounded-circle"><span class="hidden">Delete</span></i>
                    </a>
                </small>
            </div>
        </div>
    </div>
    <div class="col-md-4 border">
        <h1>this is receipt</h1>
    </div>
</div>

<?php $__env->stopSection(); ?>
<?php echo $__env->make("layout.master", array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>