<?php if(isset($errors)): ?>
<?php $__currentLoopData = $errors; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $error): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
<div class="alert alert-danger sans" role="alert"><?php echo e($error); ?> <i class="fa fa-exclamation-circle text-danger" aria-hidden="true"></i></div>
<?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
<?php endif; ?>

<?php if(isset($success)): ?>
<div class="alert alert-success sans" role="alert"><?php echo e($success); ?> <i class="fa fa-check-circle text-success"></i></div>
<?php endif; ?>