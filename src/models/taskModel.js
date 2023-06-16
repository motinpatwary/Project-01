const mongoose = require( 'mongoose' );

const tasksSchema = mongoose.Schema(
    {
        email: { type: String },
        title: { type: String },
        description: { type: String },
        status: { type: String }
    },
    { timestamps: true , versionKey: false }
)

const tasksModel = mongoose.model( 'tasks' , tasksSchema );
module.exports = tasksModel;