<style>
    .container-fluid {
        background-color: #15b2d5 !important;
    }
</style>


<?php $__env->startSection('title','Admin Home'); ?>

<?php $__env->startSection('content'); ?>

<?php echo $__env->make('layout.action_wheel', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>

<?php $__env->stopSection(); ?>
<?php echo $__env->make('layout.master', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>