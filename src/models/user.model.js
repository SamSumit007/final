
const mongoose = require("mongoose");

const bcrypt = require("bcrypt")

const userSchema = new mongoose.Schema({
    firstname : {type : String, required : true},
    lastName: {type : String, required : false},
    age:{type : Number, required : false},
    email: {type : String, required : true, unique:true},
    password: { type: String, required: true },
   
},
{

    timestamps: true,

});

const User = mongoose.model("user", userSchema); // user => users
module.exports = User;