<style>
    .col-md-10 .horizontal-list {
        border-top-left-radius: 0 !important;
    }

    .d-flex .card {
        border-top-right-radius: 0% !important;
        border-bottom-right-radius: 0% !important;
    }

    .navbar {
        background-color: #15b2d5;
    }
</style>


<?php $__env->startSection('title', 'Virtual Cart'); ?>

<?php $__env->startSection('content'); ?>

<div id="carouselExampleAutoplaying" class="carousel slide container" data-bs-ride="carousel" style="margin-top: 90px">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
        <h2 class="header">New Products</h2>
        <div class="row rounder border g-0">
            <?php 
            $count = App\Models\Product::all()->count();
            list($prods, $pages) = paginate(3, $count, new App\Models\Product());
            $carouselProducts = json_decode(json_encode($prods));
            foreach ($carouselProducts as $product) : ?>
            <div class="col-md-4 grid-items border p-4">
                <div class="grid-items-image" style="background-image: url('<?php echo $product->image?>'); background-size: contain !important; background-repeat: no-repeat;">
                </div>
                <div class="d-flex justify-content-between align-items-center border-bottom py-2">
                    <b>
                        <p class="sans m-0"><?php echo $product->name?></p>
                    </b>
                    <p class="m-0" style="font-family: Baumans;">$<?php echo $product->price?></p>
                </div>
                <div class="d-flex justify-content-evenly mt-3">
                    <small>
                        <a href="/product/<?php echo e($product->id); ?>/details" class="parent">
                            <i class="fa fa-angles-right text-warning p-2 border border-warning rounded-circle"> <span class="sans hidden">View details</span></i>
                        </a>
                    </small>
                    <small>
                        <a class="parent">
                            <i <i onclick="addToCart('<?php echo e($product->id); ?>')" class="fa fa-cart-plus text-danger p-2 border border-danger rounded-circle"> <span class="sans hidden">Add to cart</span></i>
                        </a>
                    </small>
                    <small>
                        <a class="parent">
                            <i class="fa-solid fa-money-check-dollar text-bluen p-2 border-bluen rounded-circle"> <span class="sans hidden">Buy now</span></i>
                        </a>
                    </small>
                </div>
            </div>
            <?php endforeach; ?>
        </div>
    </div>

    <div class="carousel-item" data-bs-interval="10000">
        <h2 class="header">Popular items</h2>
        <div class="row rounder border g-0 ">
            <?php $__currentLoopData = $pops; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $pop): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <div class="col-md-4 grid-items border p-4">
                    <div class="grid-items-image" style="background-image: url('<?php echo e($pop->image); ?>'); background-size: contain !important; background-repeat: no-repeat;">
                    </div>
                    <div class="d-flex justify-content-between align-items-center border-bottom py-2">
                        <b>
                            <p class="sans m-0"><?php echo e($pop->name); ?></p>
                        </b>
                        <p class="m-0" style="font-family: Baumans;">$<?php echo e($pop->price); ?></p>
                    </div>
                    <div class="d-flex justify-content-evenly mt-3">
                        <small>
                            <a class="parent">
                                <i class="fa fa-angles-right text-warning p-2 border border-warning rounded-circle"> <span class="sans hidden">View details</span></i>
                            </a>
                        </small>
                        <small>
                            <a class="parent">
                                <i onclick="addToCart('<?php echo e($product->id); ?>')" class="fa fa-cart-plus text-danger p-2 border border-danger rounded-circle"> <span class="sans hidden">Add to cart</span></i>
                            </a>
                        </small>
                        <small>
                            <a class="parent">
                                <i class="fa-solid fa-money-check-dollar text-bluen p-2 border-bluen rounded-circle"> <span class="sans hidden">Buy now</span></i>
                            </a>
                        </small>
                    </div>
                </div>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        </div>
    </div>
    
    <div class="carousel-item" data-bs-interval="10000">
        <h2 class="header">Halloween Promotions</h2>
        <div class="row rounder border g-0">
            <?php 
            $count = App\Models\Product::all()->count();
            list($prods, $pages) = paginate(3, $count, new App\Models\Product());
            $carouselProducts = json_decode(json_encode($prods));
            foreach ($carouselProducts as $product) : ?>
            <div class="col-md-4 grid-items border p-4">
                <div class="grid-items-image" style="background-image: url('<?php echo $product->image?>'); background-size: contain !important; background-repeat: no-repeat;">
                </div>
                <div class="d-flex justify-content-between align-items-center border-bottom py-2">
                    <b>
                        <p class="sans m-0"><?php echo $product->name?></p>
                    </b>
                    <div class="d-inline-flex">
                        <del class="pe-1 text-danger" style="font-family: Baumans;">$<?php echo $product->price?></del>
                        <h5 class="m-0" style="font-family: Baumans;">$<?php echo $product->price * 0.6?></h5>
                    </div>
                </div>
                <div class="d-flex justify-content-evenly mt-3">
                    <small>
                        <a class="parent">
                            <i class="fa fa-angles-right text-warning p-2 border border-warning rounded-circle"> <span class="sans hidden">View details</span></i>
                        </a>
                    </small>
                    <small>
                        <a class="parent">
                            <i onclick="addToCart('<?php echo e($product->id); ?>')" class="fa fa-cart-plus text-danger p-2 border border-danger rounded-circle"> <span class="sans hidden">Add to cart</span></i>
                        </a>
                    </small>
                    <small>
                        <a class="parent">
                            <i class="fa-solid fa-money-check-dollar text-bluen p-2 border-bluen rounded-circle"> <span class="sans hidden">Buy now</span></i>
                        </a>
                    </small>
                </div>
            </div>
            <?php endforeach; ?>
        </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<div class="container mt-5">
    <div class="d-flex">
        <div class="card col-md-2 p-4 border rounded">
            <div class="card-header sans">
                <h6 class="m-0"><i class="fa-solid fa-tags"></i> Browse by</h6>
            </div>
            <ul class="list-group list-group-flush">
                <?php $__currentLoopData = $cats; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $cat): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <li class="list-group-item">
                    <a href="#<?php echo e($cat->name); ?>"><?php echo e($cat->name); ?></a>
                </li>
                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
            </ul>
        </div>
        <section class="col-md-10">
            <?php echo $__env->make("layout.horizontal_sidebar", array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
            <div class="px-5 py-3">
                <div class="row g-0">
                    <h2 class="header">Featured <i class="fa-solid fa-award"></i></h2>
                    <?php $__currentLoopData = $featured; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $product): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                    <div class="col-md-4 grid-items border p-4">
                        <div class="grid-items-image" style="background-image: url('<?php echo e($product->image); ?>');">
                        </div>
                        <div class="d-flex justify-content-between align-items-center border-bottom py-2">
                            <b>
                                <p class="sans m-0"><?php echo e($product->name); ?></p>
                            </b>
                            <p class="m-0" style="font-family: Baumans;">$<?php echo e($product->price); ?></p>
                        </div>
                        <div class="d-flex justify-content-evenly mt-3">
                            <small>
                                <a href="/product/<?php echo e($product->id); ?>/details" class="parent">
                                    <i class="fa fa-angles-right text-warning p-2 border border-warning rounded-circle"> <span class="sans hidden">View details</span></i>
                                </a>
                            </small>
                            <small>
                                <a class="parent">
                                    <i onclick="addToCart('<?php echo e($product->id); ?>')" class="fa fa-cart-plus text-danger p-2 border border-danger rounded-circle"> <span class="sans hidden">Add to cart</span></i>
                                </a>
                            </small>
                        </div>
                    </div>
                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                </div>
            </div>

            <div class="px-5 py-3">
                    <?php use Illuminate\Database\Capsule\Manager as Capsule; ?> 
                    <?php $__currentLoopData = $categories; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $cat): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>  
                <div class="row my-3 g-0">
                    <h2 class="header" id="<?php echo e($cat->name); ?>"><?php echo e($cat->name); ?></h2>
                        <?php $__currentLoopData = $cat->products->take(3); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $product): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                        <div class="col-md-4 grid-items border p-4"id="<?php echo e($cat->name); ?>">
                            <div class="grid-items-image" style="background-image: url('<?php echo e($product->image); ?>');">
                            </div>
                            <div class="d-flex justify-content-between align-items-center border-bottom py-2">
                                <b>
                                    <p class="sans m-0"><?php echo e($product->name); ?></p>
                                </b>
                                <p class="m-0" style="font-family: Baumans;">$<?php echo e($product->price); ?></p>
                            </div>
                            <div class="d-flex justify-content-evenly mt-3">
                                <small>
                                    <a href="/product/<?php echo e($product->id); ?>/details" class="parent">
                                        <i class="fa fa-angles-right text-warning p-2 border border-warning rounded-circle"> <span class="sans hidden">View details</span></i>
                                    </a>
                                </small>
                                <small>
                                    <a class="parent">
                                        <i onclick="addToCart('<?php echo e($product->id); ?>')" class="fa fa-cart-plus text-danger p-2 border border-danger rounded-circle"> <span class="sans hidden">Add to cart</span></i>
                                    </a>
                                </small>
                            </div>
                        </div>
                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                    <!-- <?php $__currentLoopData = $products; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $product): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>

                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?> -->
                </div>
            </div>
        </section>
    </div>
</div>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('script'); ?>
<script>
    const navbarHeight = 100; // Change this value to match the height of your fixed navbar (in pixels)

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substr(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const targetPosition = targetElement.getBoundingClientRect().top;
                window.scrollBy({
                    top: targetPosition - navbarHeight,
                    behavior: 'smooth',
                });
            }
        });
    });
</script>
<?php $__env->stopSection(); ?>
<?php echo $__env->make("layout.master", array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>