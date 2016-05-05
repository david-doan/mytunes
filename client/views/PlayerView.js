// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',

  initialize: function() {
    this.model.on('ended', function(e){
      console.log('PlayerView detected \'ended\'');
      console.log('PlayerView $el is ', e);
    }, this);

    // random code to find event
    this.model.on('ended', function(e){
      console.log('PlayerView Collection is ', e);
    }, this);
  
  },








  events: {
    'ended' : function(e){
      // 'this' is the 'view' of the triggered DOM
      this.model.ended();
    }
  },

  setSong: function(song) {
    this.model = song;
    this.render();
  },

  render: function() {
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});
