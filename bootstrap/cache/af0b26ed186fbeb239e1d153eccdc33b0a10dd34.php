<?php $__env->startSection('title', 'Category Create'); ?>

<?php $__env->startSection('content'); ?>
<div class="d-flex justify-content-end" style="height: 627px;">
    <section class="d-flex w-50 h-100 nav-fix bg-bluen align-items-center" style="z-index: -1;">
        <img class="w-100" style="max-width: 100%; height: auto;" src="https://staticeurobiz.europeanchamber.com.cn/wp-content/uploads/2019/02/China’s-New-E-commerce-Law-Good-or-Bad-News-for-Business-01.png" alt="error">
    </section>
    <section class="w-50 p-5">
        <div class="horizontal-list bg-bluen rounded-top" style="margin-top: 50px !important;">
            <a href="/admin/category/all" class="horizontal-list-group sans">All Categories</a>
            <a href="/admin/category/create" class="horizontal-list-group sans">Create Category</a>
        </div>
        <!-- Form start -->
        <form action="<?php URL_ROOT . '/admin/category/create' ?>" method="post" class="container px-5 py-3 mb-3 table-bordered rounded-bottom d-inline-block" enctype="multipart/form-data">
            <?php echo $__env->make("layout.report_messages", array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
            <h2 class="sans">Create a <span class="sans text-bluen">category</span></h2>
            <div class="form-group">
                <label for="name" class="sans mt-3">Name:</label>
                <input type="text" id="name" class="form-control sans mb-3" name="name" placeholder="Enter category name">

                <input type="hidden" name="token" value="<?php echo e(\App\Classes\CSRFToken::_token()); ?>">

                <button class="btn btn-bluen float-end sans" type="submit" name="submit">Create</button>
            </div>
        </form>
        <!-- Form ends -->

        <div class="list-group">
            <?php $__currentLoopData = $cats; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $cat): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
            <div class="d-flex py-2 px-5 align-items-center justify-content-between">
                <a href="/admin/category/all" class="sans"><?php echo e($cat->name); ?></a>
                <span>
                    <small class=""><a href="#"><i class="fa fa-edit text-warning p-2 border border-warning rounded-circle"></i></a></small>
                    <small class=""><a href="#"><i class="fa fa-minus-circle text-danger p-2 border border-danger rounded-circle"></i></a></small>
                </span>
            </div>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        </div>
    </section>
</div>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('layout.master', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>