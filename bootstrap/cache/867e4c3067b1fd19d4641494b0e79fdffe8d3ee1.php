<?php $__env->startSection("title", "User register"); ?>

<?php $__env->startSection("content"); ?>
<div class="container d-flex justify-content-end" style="margin-top: 80px;">
    <section class="d-flex col-md-4 h-100 nav-fix align-items-center justify-content-center" style="z-index: -1; background-color: #15b5d6;">
        <img class="w-75" style="max-width: 100%; height: auto;" src="<?php echo e(asset('imgs/users_on_top2.png')); ?>" alt="error">
    </section>
    <section class="col-md-8 ps-5 sans">
        <form action="/user/register" method="post" class="border rounded px-5 py-4">
            <input type="hidden" name="token" value="<?php echo e(\App\Classes\CSRFToken::_token()); ?>">
            
            <h3>Create a <span class="text-bluen">new</span> account</h3>

            <?php if(\App\Classes\Session::has("error")): ?>
                <?php echo e(\App\Classes\Session::errorFlash("error")); ?>

                <?php echo e(\App\Classes\Session::remove("error")); ?>

            <?php endif; ?>

            <label for="username" class="form-label mt-3">Username</label>
            <input type="text" id="username" class="form-control" name="name" required>

            <label for="email" class="form-label mt-3">Email</label>
            <input type="email" id="email" class="form-control" name="email" required>

            <div class="row justify-content-between">
                <div class="col-md-6">
                    <label for="password" class="form-label mt-3">Password</label>
                    <input type="password" id="password" class="form-control" name="password" required>
                </div>
                <div class="col-md-6">
                    <label for="confirm_password" class="form-label mt-3">Confirm Password</label>
                    <input type="password" id="confirm_password" class="form-control" name="confirm_password" required>
                </div>
            </div>

            <input type="checkbox" class="mt-3" name="checkbox">
            I agree to the <a href="" class="text-bluen">terms and conditions</a>.


            <div class="text-center mt-3">
                <p>Already have an account?<a href="/user/login" class="text-bluen"> Login</a></p>
            </div>

            <div class="d-flex justify-content-end">
                <button class="btn btn-cancel" type="submit" name="cancel">Cancel</button>
                <button class="btn btn-bluen ms-1" type="submit" name="submit">Register</button>
            </div>
        </form>
    </section>
</div>
<?php $__env->stopSection(); ?>
<?php echo $__env->make("layout.master", array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>