var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArtworkSchema = new Schema({
  name: String,
  year: String,
  currentLocation: String,
  imgURL: String
});

var Artwork = mongoose.model('artworks', ArtworkSchema);

Artwork.find(function(err, artworks){
  if(err){ console.log('Error!', err);}
  console.log('Artwork: ', artworks);
})

module.exports = Artwork;