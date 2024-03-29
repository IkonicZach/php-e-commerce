<style>
    .navbar {
        background-color: #15b2d5 !important;
    }
</style>


<?php $__env->startSection("title", "Product create page"); ?>

<?php $__env->startSection("content"); ?>
<div class="d-flex justify-content-end container" style="margin-top: 40px;">
    <section class="d-flex col-md-5 h-100 nav-fix align-items-center" style="z-index: -1;">
        <img class="w-100" style="max-width: 100%; height: auto; padding: 7vw;" src="<?php echo e(asset('imgs/Sale.jpg')); ?>" alt="error">
    </section>
    <section class="col-md-7 py-5">
        <?php echo $__env->make("layout.horizontal_sidebar", array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
        <!--  Form start -->
        <form action="/admin/product/create" method="post" class="container px-5 py-3 border d-inline-block" enctype="multipart/form-data" autocomplete="off">
            <?php echo $__env->make("layout.report_messages", array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
            <h2 class="sans">Create a new <span class="sans text-bluen">product</span></h2>
            <div class="form-group">
                <div class="row">
                    <div class="col-md-6">
                        <label for="name" class="sans mt-3">Product Name</label>
                        <input type="text" id="name" class="form-control sans" name="name" placeholder="Enter product name">
                    </div>
                    <div class="col-md-6">
                        <label for="price" class="sans mt-3">Price(<span class="sans text-bluen">$</span>)</label>
                        <input type="number" step="any" id="price" class="form-control sans" name="price" placeholder="Enter price">
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6">
                        <label for="category_id" class="sans mt-3">Category Name</label>
                        <select class="form-select" name="category_id" id="category_id">
                            <?php $__currentLoopData = $cats; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $cat): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                            <option value="<?php echo e($cat->id); ?>"><?php echo e($cat->name); ?></option>
                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                        </select>
                    </div>
                    <div class="col-md-6">
                        <label for="sub_cat_id" class="sans mt-3">Sub-category Name</label>
                        <select class="form-select" name="sub_cat_id" id="sub_cat_id">
                            <?php $__currentLoopData = $subcats; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $cat): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                            <option value="<?php echo e($cat->id); ?>"><?php echo e($cat->name); ?></option>
                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                        </select>
                    </div>
                </div>

                <div>
                    <label for="file" class="sans mt-3">Upload an image</label>
                    <input class="form-control sans" type="file" id="file" name="file" multiple>
                </div>

                <div class="input-group mt-3">
                    <span class="input-group-text sans">Description</span>
                    <textarea class="form-control" name="description" id="description" aria-label="With textarea"></textarea>
                </div>

                <input type="hidden" name="token" value="<?php echo e(\App\Classes\CSRFToken::_token()); ?>">

                <div class="d-flex justify-content-end mt-3">
                    <button class="btn btn-cancel sans" style="margin-right: 5px;" type="reset" name="submit">Reset</button>
                    <button class="btn btn-bluen sans" type="submit" name="submit">Create</button>
                </div>

            </div>
        </form>
        <!-- Form ends -->
    </section>
</div>
<?php $__env->stopSection(); ?>
<?php echo $__env->make("layout.master", array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>