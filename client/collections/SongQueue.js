// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  // listen for changes on the collection

  initialize: function() {

    this.on('add', function(){
      if(this.length === 1){
        this.playFirst();
      } 
    }, this);

    //listen for when a song ends,
    // removes first song, play next song queued up
    this.on('ended', function(){
      if(this.length > 1 ){
        this.remove( this.at(0) );
        this.playFirst();
      }
    }, this);
    
    // listens for a dequeue
    // then dequeues next song in queue
    this.on('dequeue',function(){
      this.remove( this.at(0) );
    }, this);

    //listen for an enqueue
    // enqueue the song
    // this.on('enqueue', function(){
      
    // }, this);
  },

  playFirst: function() {
    this.at(0).play();
  }  
});


