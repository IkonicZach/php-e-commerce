@if(isset($errors))
@foreach($errors as $error)
<div class="alert alert-danger sans" role="alert">{{$error}} <i class="fa fa-exclamation-circle text-danger" aria-hidden="true"></i></div>
@endforeach
@endif

@if(isset($success))
<div class="alert alert-success sans" role="alert">{{$success}} <i class="fa fa-check-circle text-success"></i></div>
@endif