'use strict';

var betaln = require( './../lib' );

for ( var x = 0; x < 5; x++ ) {
	for ( var y = 5; y > 0; y-- ) {
		console.log( 'x: %d, \t y: %d, \t f(x,y): %d', x, y, betaln( x, y ) );
	}
}
