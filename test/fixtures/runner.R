options( digits = 16 );
library( jsonlite );

a = seq( 0.05, 100, 0.05 )
b = seq( 0.05, 100, 0.05 )
y = lbeta( a, b )

cat( y, sep = ",\n" )

write( toJSON( a, digits = 16, auto_unbox = TRUE ), "./test/fixtures/arg1.json" )
write( toJSON( b, digits = 16, auto_unbox = TRUE ), "./test/fixtures/arg2.json" )
write( toJSON( y, digits = 16, auto_unbox = TRUE ), "./test/fixtures/expected.json" )
