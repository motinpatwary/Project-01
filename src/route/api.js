const express = require( 'express' );
const router = express.Router();

const usersController = require( '../controllers/usersController' );
const authVerifyMiddleware = require( '../middlewares/authVerifyMiddleware' );


// Before login
router.post( '/registration' , usersController.registration );
router.post( '/login' , usersController.login );


// After login
router.get( '/profileDetails' , authVerifyMiddleware , usersController.profileDetails );


module.exports = router;






