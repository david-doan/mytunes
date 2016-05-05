describe('SongQueueView', function() {
  var view, fakeSongs;

  beforeEach(function() {
    fakeSongs = new SongQueue([
      {
        artist: 'data',
        url: '/test/testsong.mp3',
        title: 'test song'
      },
      {
        artist: 'data',
        url: '/test/testsong2.mp3',
        title: 'test song 2'
      },
      {
        artist: 'data',
        url: '/test/testsong3.mp3',
        title: 'test song 3'
      },
    ]);
  });

  it('creates SongQueueEntryViews for each queued song & renders them', function() {
    sinon.spy(SongQueueEntryView.prototype, 'render');
    view = new SongQueueView({collection: fakeSongs});
    view.render();
    expect(SongQueueEntryView.prototype.render).to.have.been.called;
  });

  it('renders when add or remove event fires from the song queue collection', function() {
    sinon.spy(SongQueueView.prototype, 'render');
    view = new SongQueueView({collection: fakeSongs});
    view.collection.add({
      artist: 'data',
      url: '/test/testsong4.mp3',
      title: 'test song 4'
    });
    view.collection.pop();
    expect(view.render).to.have.been.called;
  });

  it('removes SongQueueEntryViews for each song closed', function() {
    view = new SongQueueView({collection: fakeSongs});
    var song1 = view.collection.at(1);
    view.collection.at(1).close();
    expect(view.collection.at(1)).to.not.equal(song1);
  });


});
