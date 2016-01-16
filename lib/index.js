'use strict';

// MODULES //

var gammaln = require( 'math-gammaln' );


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
	if ( x < 0 || y < 0 ) {
		return NaN;
	}
	if ( x === 0 || y === 0 ) {
		return Number.POSITIVE_INFINITY;
	}
	return gammaln( x ) + gammaln( y ) - gammaln( x + y );
} // end FUNCTION betaln()


// EXPORTS //

module.exports = betaln;
