<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# dsortins

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Sort a double-precision floating-point strided array using insertion sort.

<section class="installation">

## Installation

```bash
npm install @stdlib/blas-ext-base-dsortins
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var dsortins = require( '@stdlib/blas-ext-base-dsortins' );
```

#### dsortins( N, order, x, strideX )

Sorts a double-precision floating-point strided array using insertion sort.

```javascript
var Float64Array = require( '@stdlib/array-float64' );

var x = new Float64Array( [ 1.0, -2.0, 3.0, -4.0 ] );

dsortins( x.length, 1.0, x, 1 );
// x => <Float64Array>[ -4.0, -2.0, 1.0, 3.0 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **order**: sort order. If `order < 0.0`, the input strided array is sorted in **decreasing** order. If `order > 0.0`, the input strided array is sorted in **increasing** order. If `order == 0.0`, the input strided array is left unchanged.
-   **x**: input [`Float64Array`][@stdlib/array/float64].
-   **strideX**: stride length.

The `N` and stride parameters determine which elements in the strided array are accessed at runtime. For example, to sort every other element:

```javascript
var Float64Array = require( '@stdlib/array-float64' );

var x = new Float64Array( [ 1.0, -2.0, 3.0, -4.0 ] );

dsortins( 2, -1.0, x, 2 );
// x => <Float64Array>[ 3.0, -2.0, 1.0, -4.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

```javascript
var Float64Array = require( '@stdlib/array-float64' );

// Initial array...
var x0 = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );

// Create an offset view...
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

// Sort every other element...
dsortins( 2, -1.0, x1, 2 );
// x0 => <Float64Array>[ 1.0, 4.0, 3.0, 2.0 ]
```

#### dsortins.ndarray( N, order, x, strideX, offsetX )

Sorts a double-precision floating-point strided array using insertion sort and alternative indexing semantics.

```javascript
var Float64Array = require( '@stdlib/array-float64' );

var x = new Float64Array( [ 1.0, -2.0, 3.0, -4.0 ] );

dsortins.ndarray( x.length, 1.0, x, 1, 0 );
// x => <Float64Array>[ -4.0, -2.0, 1.0, 3.0 ]
```

The function has the following additional parameters:

-   **offsetX**: starting index.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameter supports indexing semantics based on a starting index. For example, to access only the last three elements:

```javascript
var Float64Array = require( '@stdlib/array-float64' );

var x = new Float64Array( [ 1.0, -2.0, 3.0, -4.0, 5.0, -6.0 ] );

dsortins.ndarray( 3, 1.0, x, 1, x.length-3 );
// x => <Float64Array>[ 1.0, -2.0, 3.0, -6.0, -4.0, 5.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0` or `order == 0.0`, both functions return `x` unchanged.
-   The algorithm distinguishes between `-0` and `+0`. When sorted in increasing order, `-0` is sorted before `+0`. When sorted in decreasing order, `-0` is sorted after `+0`.
-   The algorithm sorts `NaN` values to the end. When sorted in increasing order, `NaN` values are sorted last. When sorted in decreasing order, `NaN` values are sorted first.
-   The algorithm has space complexity `O(1)` and worst case time complexity `O(N^2)`.
-   The algorithm is efficient for **small** strided arrays (typically `N <= 20`) and is particularly efficient for sorting strided arrays which are already substantially sorted.
-   The algorithm is **stable**, meaning that the algorithm does **not** change the order of strided array elements which are equal or equivalent (e.g., `NaN` values).
-   The input strided array is sorted **in-place** (i.e., the input strided array is **mutated**).

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random-array-discrete-uniform' );
var dsortins = require( '@stdlib/blas-ext-base-dsortins' );

var x = discreteUniform( 10, -100, 100, {
    'dtype': 'float64'
});
console.log( x );

dsortins( x.length, -1.0, x, -1 );
console.log( x );
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/blas/ext/base/dsortins.h"
```

#### stdlib_strided_dsortins( N, order, \*X, strideX )

Sorts a double-precision floating-point strided array using insertion sort.

```c
double x[] = { 1.0, -2.0, 3.0, -4.0 };

stdlib_strided_dsortins( 2, -1.0, x, 1 );
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **order**: `[in] double` sort order. If `order < 0.0`, the input strided array is sorted in **decreasing** order. If `order > 0.0`, the input strided array is sorted in **increasing** order. If `order == 0.0`, the input strided array is left unchanged.
-   **X**: `[inout] double*` input array.
-   **strideX**: `[in] CBLAS_INT` stride length for `X`.

```c
stdlib_strided_dsortins( const CBLAS_INT N, const double order, double *X, const CBLAS_INT strideX );
```

<!--lint disable maximum-heading-length-->

#### stdlib_strided_dsortins_ndarray( N, order, \*X, strideX, offsetX )

<!--lint enable maximum-heading-length-->

Sorts a double-precision floating-point strided array using insertion sort and alternative indexing semantics.

```c
double x[] = { 1.0, -2.0, 3.0, -4.0 };

stdlib_strided_dsortins_ndarray( 4, 1.0, x, 1, 0 );
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **order**: `[in] double` sort order. If `order < 0.0`, the input strided array is sorted in **decreasing** order. If `order > 0.0`, the input strided array is sorted in **increasing** order. If `order == 0.0`, the input strided array is left unchanged.
-   **X**: `[inout] double*` input array.
-   **strideX**: `[in] CBLAS_INT` stride length for `X`.
-   **offsetX**: `[in] CBLAS_INT` starting index for `X`.

```c
stdlib_strided_dsortins_ndarray( const CBLAS_INT N, const double order, double *X, const CBLAS_INT strideX, const CBLAS_INT offsetX );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/blas/ext/base/dsortins.h"
#include <stdio.h>

int main( void ) {
    // Create a strided array:
    double x[] = { 1.0, -2.0, 3.0, -4.0, 5.0, -6.0, 7.0, -8.0 };

    // Specify the number of elements:
    int N = 8;

    // Specify a stride:
    int strideX = 1;

    // Sort the array:
    stdlib_strided_dsortins( N, 1.0, x, strideX );

    // Print the result:
    for ( int i = 0; i < 8; i++ ) {
        printf( "x[ %i ] = %lf\n", i, x[ i ] );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/blas-ext/base/dsort2ins`][@stdlib/blas/ext/base/dsort2ins]</span><span class="delimiter">: </span><span class="description">simultaneously sort two double-precision floating-point strided arrays based on the sort order of the first array using insertion sort.</span>
-   <span class="package-name">[`@stdlib/blas-ext/base/gsortins`][@stdlib/blas/ext/base/gsortins]</span><span class="delimiter">: </span><span class="description">sort a strided array using insertion sort.</span>
-   <span class="package-name">[`@stdlib/blas-ext/base/ssortins`][@stdlib/blas/ext/base/ssortins]</span><span class="delimiter">: </span><span class="description">sort a single-precision floating-point strided array using insertion sort.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-ext-base-dsortins.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-ext-base-dsortins

[test-image]: https://github.com/stdlib-js/blas-ext-base-dsortins/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/blas-ext-base-dsortins/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-ext-base-dsortins/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-ext-base-dsortins?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-ext-base-dsortins.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-ext-base-dsortins/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-ext-base-dsortins/tree/deno
[deno-readme]: https://github.com/stdlib-js/blas-ext-base-dsortins/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/blas-ext-base-dsortins/tree/umd
[umd-readme]: https://github.com/stdlib-js/blas-ext-base-dsortins/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/blas-ext-base-dsortins/tree/esm
[esm-readme]: https://github.com/stdlib-js/blas-ext-base-dsortins/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/blas-ext-base-dsortins/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-ext-base-dsortins/main/LICENSE

[@stdlib/array/float64]: https://github.com/stdlib-js/array-float64

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

<!-- <related-links> -->

[@stdlib/blas/ext/base/dsort2ins]: https://github.com/stdlib-js/blas-ext-base-dsort2ins

[@stdlib/blas/ext/base/gsortins]: https://github.com/stdlib-js/blas-ext-base-gsortins

[@stdlib/blas/ext/base/ssortins]: https://github.com/stdlib-js/blas-ext-base-ssortins

<!-- </related-links> -->

</section>

<!-- /.links -->
