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

