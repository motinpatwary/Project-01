const mongoose = require( 'mongoose' );

const userSchema = new mongoose.Schema(
    {
        firstName: { type: String },
        lastName: { type: String },
        email: { type: String , unique: true },
        mobile: { type: String },
        password: { type: String }
    },
    { timestamps: true , versionKey: false }
)

const userModel = mongoose.model( 'Users' , userSchema );
module.exports = userModel;