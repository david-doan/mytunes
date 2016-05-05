// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,
  url: 'https://api.parse.com/1/classes/songs',

  initialize: function(){

    this.fetch({
      // url: 'https://api.parse.com/1/classes/songs',
      remove: false,
      type: 'GET',
      contentType: 'application/json',
      success: function (data) {
        console.log('Songs fetched.');
      },
      error: function (data) {
        console.error('Failed to fetch songs', data);
      }
    });

  },

  parse: function(response){
    return response.results;
  },

  addSongs: function(songDataArr) {
    for(var i = 0; i < songDataArr.length; i++){
      this.add(songDataArr[i]);
    }
  }

});