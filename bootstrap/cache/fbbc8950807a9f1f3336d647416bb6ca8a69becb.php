<style>
    .container-fluid {
        background-color: #15b2d5 !important;
    }
</style>


<?php $__env->startSection('title','Admin Home'); ?>

<?php $__env->startSection('content'); ?>
<div class="container" style="margin-top: 90px;">
    <div class="d-flex">
        <div class="col-md-3 p-0">
            <?php echo $__env->make("layout.admin_sidebar", array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
        </div>
        <div class="col-md-3 p-0"></div>
    </div>
</div>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('layout.master', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>