/**  @jsx React.DOM */

if (Meteor.isClient) {
  Meteor.startup(function() {

    var sidebarItems = [
      "menu option 1",
      "menu option 2",
      "menu option 3",
      "menu option 4",
    ];

    var teams = [
      {rank: 1, name: "the soccer pros", wins: 5, losses: 0},
      {rank: 2, name: "i love fantasy sports", wins: 4, losses: 1},
      {rank: 3, name: "want more cowbell!", wins: 3, losses: 2},
      {rank: 4, name: "game blouses", wins: 2, losses: 3},
      {rank: 5, name: "soccer sucks!", wins: 1, losses: 4},
      {rank: 6, name: "what the hell is soccer", wins: 0, losses: 5}
    ];

    React.renderComponent(
      <div>
        <Topbar leagueName="League Name" userName="User Name" />
        <Sidebar items={sidebarItems} />
        <Standings teams={teams} />
      </div>,
      document.body
    );
  });

  // for testing purposes
  //Meteor.call("getPlayerStats", function(error, result) {
    //console.log(result.data);
  //});
}

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
