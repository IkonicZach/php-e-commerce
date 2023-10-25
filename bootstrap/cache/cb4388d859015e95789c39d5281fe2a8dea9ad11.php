<style>
    .navbar {
        background-color: #15b2d5;
    }
</style>


<?php $__env->startSection('title', 'Virtual Cart'); ?>

<?php $__env->startSection('content'); ?>
    <h1 style="margin-top: 90px;">HIHI This is home</h1>
<?php $__env->stopSection(); ?>
<?php echo $__env->make("layout.master", array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>