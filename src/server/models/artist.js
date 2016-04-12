var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArtistSchema = new Schema({
  name: String,
  movement: String,
  imgURL: String
});

var Artist = mongoose.model('artists', ArtistSchema);

Artist.find({},function(err, artists){
  console.log('Artists: ', artists);
})

module.exports = Artist;