if (Meteor.isServer) {
  Meteor.startup(function () {
    Meteor.methods({
      // this is just a helper function. remove it later
      getPlayerStats: function() {
        this.unblock();
        return WorldCup.getPlayerStats();
      }
    });
    // update world cup stats every day at 3am
    var now = new Date();
    var milliTil3 = new Date(
      now.getFullYear(), now.getMonth(), now.getDate(), 3, 0, 0, 0
    ) - now;
    if (milliTil3 < 0) {
      // if it's past 3, set for tomorrow
      milliTil3 += 24 * 3600 * 1000;
    }
    Meteor.setTimeout(function() {
      WorldCup.updateStats();
      Meteor.setInterval(function() {
        WorldCup.updateStats();
      },
      // every 24 hrs
      24 * 3600 * 1000);
    },
    milliTil3);
  });
}
