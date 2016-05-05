var test;
// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
  tagName: 'tr',

  initialize: function() {
    
    $(this.el).on('click','.close', this, function(eventData) {
      console.log('songqueueEntryView close button clicked!');
      console.log(eventData);
      test = eventData;
      eventData.data.model.close();
    });
    
  },

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td> \
    <td><button class=play>P</button></td>\
    <td><button class=close>X</button></td>'),

  //view renders model
  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
