@if (session('success'))
    <div class="alert alert-success">
        {{ session('success') }}
    </div>
@endif
@if (session('error'))
    <div class="alert alert-danger">
        {{ session('error') }}
    </div>
@endif
@if (count($errors) > 0)
    <div class="alert alert-danger">
        <ul class="mb-0">
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
@endif
<a href="{{$btnBack}}" class="btn btn-danger nbr btnBack waves-effect waves-light"><i class="fa fa-arrow-left"></i> {{ __('components.btnBack') }}</a>