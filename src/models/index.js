var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/art');

module.exports.Artist = require('./artist');
module.exports.Artwork = require('./artwork');
