@if(isset($errors))
@foreach($errors as $error)
<div class="alert alert-danger alert-dismissible fade show sans" role="alert">
    {{$error}} <i class="fa fa-check-circle text-danger"></i>
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
    </button>
</div>
@endforeach
@endif

@if(isset($success))
<div class="alert alert-success alert-dismissible fade show sans" role="alert">
    {{$success}} <i class="fa fa-check-circle text-success"></i>
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
    </button>
</div>
@endif