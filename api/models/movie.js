const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
    title:{type: 'string', required: true,unique: true},
    description:{type: 'string', required: true},
    image:{type: 'string'},
    titleimage:{type:'string'},
    smallimage:{type: 'string'},
    isSeries:{type: 'boolean'},
    profilepicture:{type: 'string', default:" "},
    trailer:{type: 'string'},
    video:{type: 'string'},
    year:{type: 'string'},
    limit:{type: 'number'},
    genre:{type: 'string'}
},
{timestamps:true})

module.exports = mongoose.model('Movie',movieSchema);