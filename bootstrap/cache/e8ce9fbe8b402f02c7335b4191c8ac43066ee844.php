<?php $__env->startSection('content'); ?>

<h1>This is admin home</h1>

<?php $__env->stopSection(); ?>
<?php echo $__env->make('title', 'Admin Home', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
<?php echo $__env->make('layout.master', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>