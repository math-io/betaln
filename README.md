betaln
===
[![NPM version][npm-image]][npm-url] [![Build Status][build-image]][build-url] [![Coverage Status][coverage-image]][coverage-url] [![Dependencies][dependencies-image]][dependencies-url]

> Natural logarithm of the [Beta function][beta-function].

This function evaluates the natural logarithm of the [Beta function][beta-function], which can be represented as follows:

<div class="equation" align="center" data-raw-text="\ln \operatorname{Beta}(x,y)= \ln \Gamma(x) + \ln \Gamma(y) - \ln \Gamma(x+y)" data-equation="eq:betaln_function">
	<img src="https://cdn.rawgit.com/math-io/betaln/0d5d2e629892e3957f32ffc865263fbe3ba019ec/docs/img/eqn.svg" alt="Natural logarithm of the beta function.">
	<br>
</div>

In here, `Γ` denotes the [Gamma function][gamma-function].

## Installation

``` bash
$ npm install math-betaln
```


## Usage

``` javascript
var betaln = require( 'math-betaln' );
```


#### betaln( x, y )

Evaluates the natural logarithm of the [Beta function][beta-function].

``` javascript
var val = betaln( 0, 0 );
// returns +Infinity

val = betaln( 0.001, 0.001 );
// returns ~7.601

val = betaln( -1, 2 );
// return NaN

val = betaln( 2, 1 );
// returns ~-1.099

val = betaln( 4, 1 );
// returns ~-1.386
```


## Examples

``` javascript
var betaln = require( 'math-betaln' );

for ( var x = 0; x < 5; x++ ) {
	for ( var y = 5; y > 0; y-- ) {
		console.log( 'x: %d, \t y: %d, \t f(x,y): %d', x, y, betaln( x, y ) );
	}
}

```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


---
## Tests

### Unit

This repository uses [tape][tape] for unit tests. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul][istanbul] as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


### Browser Support

This repository uses [Testling][testling] for browser testing. To run the tests in a (headless) local web browser, execute the following command in the top-level application directory:

``` bash
$ make test-browsers
```

To view the tests in a local web browser,

``` bash
$ make view-browser-tests
```

<!-- [![browser support][browsers-image]][browsers-url] -->


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2016. The [Compute.io][compute-io] Authors.


[npm-image]: http://img.shields.io/npm/v/math-betaln.svg
[npm-url]: https://npmjs.org/package/math-betaln

[build-image]: http://img.shields.io/travis/math-io/betaln/master.svg
[build-url]: https://travis-ci.org/math-io/betaln

[coverage-image]: https://img.shields.io/codecov/c/github/math-io/betaln/master.svg
[coverage-url]: https://codecov.io/github/math-io/betaln?branch=master

[dependencies-image]: http://img.shields.io/david/math-io/betaln.svg
[dependencies-url]: https://david-dm.org/math-io/betaln

[dev-dependencies-image]: http://img.shields.io/david/dev/math-io/betaln.svg
[dev-dependencies-url]: https://david-dm.org/dev/math-io/betaln

[github-issues-image]: http://img.shields.io/github/issues/math-io/betaln.svg
[github-issues-url]: https://github.com/math-io/betaln/issues

[tape]: https://github.com/substack/tape
[istanbul]: https://github.com/gotwarlost/istanbul
[testling]: https://ci.testling.com

[beta-function]: http://en.wikipedia.org/wiki/Beta_function
[compute-io]: https://github.com/compute-io/
[gamma-function]: https://en.wikipedia.org/wiki/Gamma_function
