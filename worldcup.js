var PlayerStats = new Meteor.Collection("playerStats");
var TeamStats = new Meteor.Collection("TeamStats");

WorldCup = {
  kimonoAPIkey: "da9ae03d1f22eeee1d359b0db1fb2851",
  worldcupAPIurl: "http://worldcup.kimonolabs.com/api/",

  updateStats: function() {
    WorldCup.updatePlayerStats();
    WorldCup.updateTeamStats();
  },

  updatePlayerStats: function() {
    console.log("updated player stats");
  },

  updateTeamStats: function() {
    console.log("updated team stats");
  },

  getPlayerStats: function() {
    return Meteor.http.get(
      WorldCup.worldcupAPIurl + "players?" +
      "apikey=" + WorldCup.kimonoAPIkey +
      "&includes=team,club&limit=1000"
    );
  }
}
