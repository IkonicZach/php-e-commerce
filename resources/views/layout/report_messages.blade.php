@if(isset($errors))
@foreach($errors as $error)
<div class="alert alert-danger alert-dismissible fade show sans" role="alert">
    {{$error}} <i class="fa fa-check-circle text-danger"></i>
</div>
@endforeach
@endif

@if(isset($success))
<div class="alert alert-success alert-dismissible fade show sans" role="alert">
    {{$success}} <i class="fa fa-check-circle text-success"></i>
</div>
@endif