<?php $__env->startSection("title", "Payment Success"); ?>

<?php $__env->startSection("content"); ?>
<h1>Sorry! You are scammed!!!</h1>
<a href="/">Click here</a> to recover your money.
<?php $__env->stopSection(); ?>

<?php $__env->startSection("script"); ?>

<script>
    localStorage.removeItem("products");
    localStorage.removeItem("items");
</script>

<?php $__env->stopSection(); ?>
<?php echo $__env->make("layout.master", array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>