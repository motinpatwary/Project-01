const jwt = require( 'jsonwebtoken' );


module.exports = ( req , res , next ) =>
{
    let Token = req.headers[ 'token' ];
    console.log(Token)

    jwt.verify( Token , 'SecretKey123456789' , function( err , decoded ) {
        if( err ) {
            res.status( 401 ).json( { status: 'unauthorized'} );
        }
        else {
            let email = decoded['data']
            console.log(email)
            req.headers.email = email;
            next();
        }
    })
}