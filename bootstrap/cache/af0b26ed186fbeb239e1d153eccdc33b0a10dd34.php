<?php $__env->startSection('title', 'Category Create'); ?>

<?php $__env->startSection('content'); ?>
<div class="d-flex justify-content-end" style="margin-top: 40px;">
    <section class="d-flex w-50 h-100 nav-fix bg-bluen align-items-center" style="z-index: -1;">
        <img class="w-100" style="max-width: 100%; height: auto;" src="https://staticeurobiz.europeanchamber.com.cn/wp-content/uploads/2019/02/China’s-New-E-commerce-Law-Good-or-Bad-News-for-Business-01.png" alt="error">
    </section>
    <section class="w-50 p-5">
        <?php echo $__env->make("layout.horizontal_sidebar", array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
        <!--  Form start -->
        <form action="<?php URL_ROOT . '/admin/category/create' ?>" method="post" class="container px-5 py-3 border d-inline-block" enctype="multipart/form-data">
            <?php echo $__env->make("layout.report_messages", array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
            <h2 class="sans">Create a <span class="sans text-bluen">category</span></h2>
            <div class="form-group">
                <label for="name" class="sans mt-3">Category Name</label>
                <input type="text" id="name" class="form-control sans mb-3" name="name" placeholder="Enter category name">

                <input type="hidden" name="token" value="<?php echo e(\App\Classes\CSRFToken::_token()); ?>">

                <button class="btn btn-bluen float-end sans" type="submit" name="submit">Create</button>
            </div>
        </form>
        <!-- Form ends -->

        <!-- Categories Section Starts  -->
        <div class="list-group border px-5 py-3 my-3">
            <h3 class="sans">Categories</h3>
            <?php $__currentLoopData = $cats; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $cat): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
            <div class="d-flex py-2 align-items-center justify-content-between">
                <a href="/admin/category/all" class="sans"><?php echo e($cat->name); ?></a>
                <span>
                    <small>
                        <a href="#" class="parent">
                            <i onclick="showSubCatModal('<?php echo e($cat->name); ?>', '<?php echo e($cat->id); ?>')" class="fa fa-plus text-bluen p-2 border-bluen rounded-circle"><span class="hidden">Sub-categories</span></i>
                        </a>
                    </small>
                    <small>
                        <a href="#" class="parent">
                            <i onclick="fun('<?php echo e($cat->name); ?>', '<?php echo e($cat->id); ?>')" class="fa fa-edit text-warning p-2 border border-warning rounded-circle"><span class="hidden">Edit</span></i>
                        </a>
                    </small>
                    <small>
                        <a href="/admin/category/<?php echo e($cat->id); ?>/delete" class="parent">
                            <i class="fa fa-minus-circle text-danger p-2 border border-danger rounded-circle"><span class="hidden">Delete</span></i>
                        </a>
                    </small>
                </span>
            </div>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
            <?php echo $pages; ?>

        </div>
        <!-- Categories Section Ends  -->

        <!-- Sub Categories Section Starts  -->
        <div class="list-group border px-5 py-3 my-3">
            <h3 class="sans">Sub-categories</h3>
            <?php $__currentLoopData = $subCats; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $cat): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
            <div class="d-flex py-2 align-items-center justify-content-between">
                <a href="/admin/category/all" class="sans"><?php echo e($cat->name); ?></a>
                <span>
                    <small>
                        <a href="#" class="parent">
                            <i onclick="fun('<?php echo e($cat->name); ?>', '<?php echo e($cat->id); ?>')" class="fa fa-edit text-warning p-2 border border-warning rounded-circle"><span class="hidden">Edit</span></i>
                        </a>
                    </small>
                    <small>
                        <a href="/admin/category/<?php echo e($cat->id); ?>/delete" class="parent">
                            <i class="fa fa-minus-circle text-danger p-2 border border-danger rounded-circle"><span class="hidden">Delete</span></i>
                        </a>
                    </small>
                </span>
            </div>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
            <?php echo $subPages; ?>

        </div>
        <!-- Sub Categories Section Ends  -->
    </section>
</div>

<!-- Edit Model Starts -->
<div class="modal fade" id="CatEditModel" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content p-3">
            <div class="modal-header">
                <h4 class="modal-title sans" id="exampleModalLabel">Edit <span class="sans text-bluen">category</span></h4>
                <button type="button" class="close sans" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body sans">
                <!-- Edit form starts here -->
                <form class="container px-5 py-3 table-bordered rounded-bottom d-inline-block">
                    <div class="form-group">
                        <label for="editName" class="sans mt-3">Category name</label>
                        <input type="text" id="editName" class="form-control sans mb-3" placeholder="Enter category name">

                        <input type="hidden" name="editToken" id="editToken" value="<?php echo e(\App\Classes\CSRFToken::_token()); ?>">
                        <input type="hidden" name="editId" id="editId">

                        <button onclick="startEdit(event)" class="btn btn-bluen float-end sans" type="submit" name="submit">Confirm changes</button>
                    </div>
                </form>
                <!-- Edit form ends here -->
            </div>
        </div>
    </div>
</div>
<!-- Edit Model ends -->

<!-- Sub Category Model Starts  -->
<div class="modal fade" id="SubCatCreateModel" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content p-3">
            <div class="modal-header">
                <h4 class="modal-title sans" id="exampleModalLabel">Create a <span class="sans text-bluen">sub-category</span></h4>
                <button type="button" class="close sans" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body sans">
                <!-- Edit form starts here -->
                <form class="container px-5 py-3 table-bordered rounded-bottom d-inline-block" enctype="multipart/form-data">
                    <div class="form-group">
                        <label for="parent_cat_name" class="sans mt-3">Parent category name</label>
                        <input type="text" id="parent_cat_name" class="form-control sans mb-3" name="editName" placeholder="Enter category name">

                        <label for="sub_cat_name" class="sans mt-3">Sub-category name</label>
                        <input type="text" id="sub_cat_name" class="form-control sans mb-3" name="subCatName" placeholder="Enter category name">

                        <input type="hidden" name="" id="parent_cat_id">
                        <input type="hidden" name="" id="sub_cat_token" value="<?php echo e(\App\Classes\CSRFToken::_token()); ?>">

                        <button onclick="createSubCat(event)" class="btn btn-bluen float-end sans" type="submit" name="submit">Create</button>
                    </div>
                </form>
                <!-- Edit form ends here -->
            </div>
        </div>
    </div>
</div>
<!-- Sub Category Model Ends  -->

<!-- Sub Edit Model Starts -->
<div class="modal fade" id="subCatEditModel" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content p-3">
            <div class="modal-header">
                <h4 class="modal-title sans" id="exampleModalLabel">Edit <span class="sans text-bluen">category</span></h4>
                <button type="button" class="close sans" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body sans">
                <!-- Edit form starts here -->
                <form class="container px-5 py-3 table-bordered rounded-bottom d-inline-block">
                    <div class="form-group">
                        <label for="editName" class="sans mt-3">Category name</label>
                        <input type="text" id="subCatEditName" class="form-control sans mb-3" placeholder="Enter sub-category name">

                        <input type="hidden" name="subCatEditToken" id="subCatEditToken" value="<?php echo e(\App\Classes\CSRFToken::_token()); ?>">
                        <input type="hidden" name="subCatEditId" id="subCatEditId">

                        <button onclick="subCatStartEdit(event)" class="btn btn-bluen float-end sans" type="submit" name="submit">Confirm changes</button>
                    </div>
                </form>
                <!-- Edit form ends here -->
            </div>
        </div>
    </div>
</div>
<!-- Sub Edit Model ends -->
<?php $__env->stopSection(); ?>

<?php $__env->startSection('script'); ?>

<script>
    function fun(name, id) {
        $("#editName").val(name);
        $("#editId").val(id);
        $("#CatEditModel").modal("show");
    }

    function startEdit(e) {
        e.preventDefault();
        name = $("#editName").val();
        token = $("#editToken").val();
        id = $("#editId").val();

        // console.log("Name: " + name + " Token: " + token + " ID: " + id);
        $("#CatEditModel").modal("hide");
        $.ajax({
            type: "POST",
            url: "/admin/category/" + id + "/update",
            data: {
                name: name,
                token: token,
                id: id
            },
            success: function(result) {
                window.location.href = "/admin/category/create";
            },
            error: function(response) {
                var str = "";
                var response = (JSON.parse(response.responseText));
                alert(response.name);
            }
        });
    }

    function showSubCatModal(name, id) {
        $("#parent_cat_name").val(name);
        $("#parent_cat_id").val(id);
        $("#SubCatCreateModel").modal("show");
    }

    function createSubCat(e) {
        e.preventDefault();
        var name = $("#sub_cat_name").val();
        var token = $("#sub_cat_token").val();
        var parent_cat_id = $("#parent_cat_id").val();
        $("#SubCatCreateModel").modal("hide");
        $.ajax({
            type: "POST",
            url: "/admin/subcategory/create",
            data: {
                name: name,
                token: token,
                parent_cat_id: parent_cat_id
            },
            success: function(result) {
                // window.location.href = "/admin/subcategory/create";
                console.log(result);
            },
            error: function(response) {
                var str = "";
                var response = (JSON.parse(response.responseText));
                alert(response.name);
            }
        });
    }

    function subCatStartEdit(e) {
        e.preventDefault();
        name = $("#subCatEditName").val();
        token = $("#subCatEditToken").val();
        id = $("#subCatEditId").val();
        $("#subCatEditModel").modal("hide");

        $.ajax({
            type: "POST",
            url: "/admin/subcategory/update",
            data: {
                name: name,
                token: token,
                id: id
            },
            success: function(result) {
                window.location.href = "/admin/category/create";
            },
            error: function(response) {
                var str = "";
                var response = (JSON.parse(response.responseText));
                alert(response.name);
            }
        });
    }

    function subCatEdit(name, id) {
        $("#subCatEditName").val(name);
        $("#subCatEditId").val(id);
        $("#subCatEditModel").modal("show");
    }
</script>

<?php $__env->stopSection(); ?>
<?php echo $__env->make('layout.master', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>