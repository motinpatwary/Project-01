const express = require( 'express' );
const router = require( './src/route/api' );
const app = express();
const bodyParser = require( 'body-parser' );
const rateLimit = require( 'express-rate-limit' );
const mongoSanitize = require( 'express-mongo-sanitize' );
const helmet = require( 'helmet' );
const hpp = require( 'hpp' );
const cors = require( 'cors' );
const mongoose = require( 'mongoose' );


// Security
app.use( cors() );
app.use( helmet() );
app.use( mongoSanitize() );
app.use( hpp() );
app.use( express.json( { limit: '50mb'} ) );
app.use( express.urlencoded( { extended: true , limit: '50mb' } ) );


// JSON Parser
app.use( bodyParser.json() );


// Rate Limiting
const limiter = rateLimit( { windowMS: 15 * 60 * 1000 , max: 3000 } );
app.use( limiter );


// Database Connection
let URI = 'mongodb+srv://<username>:<ASH2010053M>@cluster0.fnfasof.mongodb.net/taskmanager'
let OPTIN = { user: 'motinPatwary' , pass: 'ASH2010053M' , autoIndex: true };

mongoose
    .connect( URI , OPTIN)
        .then( ( res ) => 
        {
            console.log( 'mongoDB Successfully connected' );
        })
        .catch( ( err ) => 
        {
            console.log( err );
        })


app.use( '/api/v1' , router );

app.use( ' * ' , ( req , res ) => 
{
    res.status( 404 ).json( { status: 'Fail' , data: 'Not Found' } );
})

module.exports = app;