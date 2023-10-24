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


<?php $__env->startSection("title", "Product home page"); ?>

<?php $__env->startSection("content"); ?>
<div class="container" style="margin-top: 90px;">
    <div>
        <div class="d-flex">
            <div class="card col-md-2 p-4 border rounded">
                <div class="card-header sans">
                    <h5 class="m-0">Browse by</h5>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                        <a href="#">A category</a>
                    </li>
                </ul>
            </div>
            <section class="col-md-10">
                <?php echo $__env->make("layout.horizontal_sidebar", array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
                <div class="px-5 py-3">
                    <h2>All products</h2>
                    <?php if(\App\Classes\Session::has("pcs")): ?>
                    <?php echo e(\App\Classes\Session::flash("pcs")); ?>

                    <?php endif; ?>
                    <div class="row">
                        <?php $__currentLoopData = $products; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $product): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                        <div class="col-md-4 grid-items border p-4">
                            <div class="grid-items-image" style="background-image: url('<?php echo e($product->image); ?>');">
                                <p class="grid-items-number sans" style="width: 35px; height: 35px; padding: 0.35rem;"><?php echo e($product->id); ?></p>
                                <!-- <small class="grid-items-category">Category</small> -->
                            </div>
                            <div class="d-flex justify-content-between mt-3">
                                <h5 class="sans m-0"><?php echo e($product->name); ?></h5>
                                <p class="sans m-0">$<?php echo e($product->price); ?></p>
                            </div>
                            <div class="d-flex justify-content-between mt-3">
                                <small><a href="#"><i onclick="" class="fa fa-edit text-warning p-2 border border-warning rounded"> <span class="sans">Edit</span></i></a></small>
                                <small><a href=""><i class="fa fa-minus-circle text-danger p-2 border border-danger rounded"> <span class="sans fw-normal">Delete</span></i></a></small>
                            </div>
                        </div>
                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                    </div>
                </div>
            </section>
        </div>
    </div>
</div>
<?php $__env->stopSection(); ?>
<?php echo $__env->make("layout.master", array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>