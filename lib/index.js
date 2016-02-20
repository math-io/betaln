'use strict';

// MODULES //

var gammaln = require( 'math-gammaln' );
var PINF = require( 'const-pinf-float32' );


// BETALN //

/**
* FUNCTION: betaln( x, y )
*	Evaluates the natural logarithm of the beta function of two numeric values.
*
* @param {Number} x - input value
* @param {Number} y - second input value
* @returns {Number} function value
*/
function betaln( x , y  ) {
	// Special cases: NaN
	if ( x !== x || y !== y ) {
		return NaN;
	}
	// Special cases: negative numbers
	if ( x < 0 || y < 0 ) {
		return NaN;
	}
	// Special cases: 0
	if ( x === 0 || y === 0 ) {
		return PINF;
	}
	return gammaln( x ) + gammaln( y ) - gammaln( x + y );
} // end FUNCTION betaln()


// EXPORTS //

module.exports = betaln;
