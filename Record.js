var Record = function(artist, title, price){
  this.artist = artist;
  this.title = title;
  this.price = price;
};

Record.prototype = {
  print: function(){
    // return "Artist: " + this.artist; + "Title: " + this.title; + "Price: " + this.price;
  }
}

module.exports = Record;