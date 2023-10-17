<?php $__env->startSection('title', 'Category Create'); ?>

<?php $__env->startSection('content'); ?>
<div class="d-flex align-items-center" style="height: 627px;">
    <img class="w-50 h-100" src="https://staticeurobiz.europeanchamber.com.cn/wp-content/uploads/2019/02/China’s-New-E-commerce-Law-Good-or-Bad-News-for-Business-01.png" alt="error">
    <section class="w-50 p-5">
        <?php if(\App\Classes\Session::has("err_message")): ?>
        <?php echo e(\App\Classes\Session::flash("err_message")); ?>

        <?php else: ?>
        <?php echo e(\App\Classes\Session::flash("sus_message")); ?>

        <?php endif; ?>
        <form action="<?php URL_ROOT . '/admin/category/create' ?>" method="post" class="container p-5 table-bordered rounded" enctype="multipart/form-data">
            <h2 class="sans">Create a <span class="sans text-bluen">category</span></h2>
            <div class="form-group">
                <label for="name" class="sans">Name</label>
                <input type="text" id="name" class="form-control sans mb-3" name="name" placeholder="Enter category name">

                <input type="hidden" name="token" value="<?php echo e(\App\Classes\CSRFToken::_token()); ?>">

                <label for="file" class="sans">Upload a file</label>
                <input type="file" class="form-control sans" id="file" name="file">

                <button class="btn btn-bluen sans" type="submit" name="submit">Create</button>
            </div>
        </form>
    </section>
</div>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('layout.master', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>