@extends("layout.master")

@section('title', 'Search results')

@section('content')
    <h2>Search Results</h2>
    @if ($products->isEmpty())
        <p>No products found.</p>
    @else
        <ul>
            @foreach ($products as $product)
                <li>{{ $product->name }} - {{ $product->price }}</li>
            @endforeach
        </ul>
    @endif
@endsection