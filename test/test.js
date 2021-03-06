'use strict';

// MODULES //

var tape = require( 'tape' );
var isfinite = require( 'validate.io-finite' );
var isnan = require( 'validate.io-nan' );
var abs = require( 'math-abs' );
var betaln = require( './../lib' );


// FIXTURES //

var arg1 = require( './fixtures/arg1.json' );
var arg2 = require( './fixtures/arg2.json' );
var expected = require( './fixtures/expected.json' );
var i;
var v;
for ( i = 0; i < expected.length; i++ ) {
	v = expected[ i ];
	if ( v === 'Inf' ) {
		expected[ i ] = Number.POSITIVE_INFINITY;
	}
	else if ( v === 'NaN' ) {
		expected[ i ] = NaN;
	}
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( typeof betaln === 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `NaN` if provided a `NaN`', function test( t ) {
	var val = betaln( NaN, 2 );
	t.notOk( val === val, 'returns NaN' );
	val = betaln( 2, NaN );
	t.notOk( val === val, 'returns NaN' );
	t.end();
});

tape( 'the function returns `NaN` if provided negative values', function test( t ) {
	var val = betaln( -2, 5 );
	t.notOk( val === val, 'returns NaN' );
	val = betaln( 4, -3 );
	t.notOk( val === val, 'returns NaN' );
	t.end();
});

tape( 'the function returns `+Infinity` if at least one argument is `0`', function test( t ) {
	var val = betaln( 0, 2 );
	t.ok( !isfinite( val ), 'returns +Infinity' );
	val = betaln( 1, 0 );
	t.ok( !isfinite( val ), 'returns +Infinity' );
	t.end();
});

tape( 'the function evaluates the logarithm of the beta function', function test( t ) {
	var delta;
	var tol;
	var v;
	var i;
	for ( i = 0; i < arg1.length; i++ ) {
		v =  betaln( arg1[ i ], arg2[ i ] );
		delta = abs( v - expected[ i ] );
		tol = 1e-12 * Math.max( 1, abs( v ), abs( expected[ i ] ) );
		t.ok( delta <= tol, 'within tolerance. x: ' + arg1[ i ] + '. y = ' + arg2[ i ] + '. Value: ' + v + '. Expected: ' + expected[ i ] + '. Tolerance: ' + tol + '.' );
	}
	t.end();
});
