<style>
    .container-fluid {
        background-color: #15b2d5 !important;
    }
    body {
        background-color: #b5e6f5 !important;
    }
    img {
        box
    }
</style>


<?php $__env->startSection('title','Admin Home'); ?>

<?php $__env->startSection('content'); ?>

<?php echo $__env->make('layout.action_wheel', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
    <img src="<?php echo e(asset('imgs/comming.jpg')); ?>" class="shadow-lg" style="display: block;margin-left: auto;margin-right: auto;width: 50%;">
<?php $__env->stopSection(); ?>
<?php echo $__env->make('layout.master', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>