const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username:{type: 'string', required: true},
    email:{type: 'string', required: true,unique: true},
    password:{type: 'string', required: true},
    age:{type: 'string'},
    isAdmin:{type: 'boolean',default: false},
    profilepicture:{type: 'string', default:" "}
},{timestamps:true})

module.exports = mongoose.model('User',userSchema);