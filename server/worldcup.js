var Players = new Meteor.Collection("players");
var Teams = new Meteor.Collection("teams");
var Clubs = new Meteor.Collection("clubs");
var Matches = new Meteor.Collection("matches");
var PlayerSeasonStats = new Meteor.Collection("playerSeasonStats");

// For updating and the World Cup stats in the database.
// Update from API call. Includes players, teams, and matches
WorldCup = {
  kimonoAPIkey: "da9ae03d1f22eeee1d359b0db1fb2851",
  worldcupAPIurl: "http://worldcup.kimonolabs.com/api/",

  // for daily updating of stats:
  // only player stats, team stats, and match stats need to be updated
  updateStats: function() {
    WorldCup.updatePlayerStats();
    WorldCup.updateTeamStats();
    WorldCup.updateMatchStats();
  },

  // for running once, to initially populate the database with data
  populateData: function() {
    WorldCup.updatePlayerStats();
    WorldCup.updateTeamStats();
    WorldCup.updateClubStats();
    WorldCup.updateMatchStats();
    WorldCup.updatePlayerSeasonStats();
  },

  updatePlayerStats: function() {
    console.log("Updating player stats...\n")

    var stats = WorldCup.getPlayerStats();
    if (!(stats.data && stats.data.length)) {
      throw "No data returned from API call.";
    }

    for (i = 0; i < stats.data.length; i++) {
      var player = stats.data[i];
      if (player.firstName && player.lastName && player.birthDate) {
        Players.upsert(
          {firstName: player.firstName, lastName: player.lastName, birthDate: player.birthDate},
          player
        );
        console.log("Updated player: " + player.firstName + " " + player.lastName + "\n");
      }
    }
  },

  getPlayerStats: function() {
    // grab all the players, including their clubs and teams
    return Meteor.http.get(
      WorldCup.worldcupAPIurl + "players?" +
      "apikey=" + WorldCup.kimonoAPIkey +
      "&includes=team,club&limit=1000"
    );
  },

  updateTeamStats: function() {
    console.log("Updating team stats...\n");

    var stats = WorldCup.getTeamStats();
    if (!(stats.data && stats.data.length)) {
      throw "No data returned from API call.";
    }

    for (i = 0; i < stats.data.length; i++) {
      var team = stats.data[i];
      if (team.name) {
        Teams.upsert(
          {name: team.name},
          team
        );
        console.log("Updated team: " + team.name + "\n");
      }
    }
  },

  getTeamStats: function() {
    // grab all the teams
    return Meteor.http.get(
      WorldCup.worldcupAPIurl + "teams?" +
      "apikey=" + WorldCup.kimonoAPIkey +
      "&limit=1000"
    );
  },

  updateClubStats: function() {
    console.log("Updating club stats...\n");

    var stats = WorldCup.getClubStats();
    if (!(stats.data && stats.data.length)) {
      throw "No data returned from API call.";
    }

    for (i = 0; i < stats.data.length; i++) {
      var club = stats.data[i];
      if (club.name) {
        Clubs.upsert(
          {name: club.name},
          club
        );
        console.log("Updated club: " + club.name + "\n");
      }
    }
  },

  getClubStats: function() {
    // grab all the clubs
    return Meteor.http.get(
      WorldCup.worldcupAPIurl + "clubs?" +
      "apikey=" + WorldCup.kimonoAPIkey +
      "&limit=1000"
    );
  },

  updateMatchStats: function() {
    console.log("Updating match stats...\n");

    var stats = WorldCup.getMatchStats();
    if (!(stats.data && stats.data.length)) {
      throw "No data returned from API call.";
    }

    for (i = 0; i < stats.data.length; i++) {
      var match = stats.data[i];
      if (match.venue && match.startTime) {
        Matches.upsert(
          {venue: match.venue, startTime: match.startTime},
          match
        );
        console.log("Updated match: " + match.startTime + " at " + match.venue + "\n");
      }
    }
  },

  getMatchStats: function() {
    // grab all the clubs
    return Meteor.http.get(
      WorldCup.worldcupAPIurl + "matches?" +
      "apikey=" + WorldCup.kimonoAPIkey +
      "&limit=1000"
    );
  },

  updatePlayerSeasonStats: function() {
    console.log("Updating player season stats...\n");

    var stats = WorldCup.getPlayerSeasonStats();
    if (!(stats.data && stats.data.length)) {
      throw "No data returned from API call.";
    }

    for (i = 0; i < stats.data.length; i++) {
      var playerSeason = stats.data[i];
      if (playerSeason.playerId) {
        PlayerSeasonStats.upsert(
          {playerId: playerSeason.playerId},
          playerSeason
        );
        console.log("Updated player season stats for: " + playerSeason.playerId + "\n");
      }
    }
  },

  getPlayerSeasonStats: function() {
    // grab all the clubs
    return Meteor.http.get(
      WorldCup.worldcupAPIurl + "player_season_stats?" +
      "apikey=" + WorldCup.kimonoAPIkey +
      "&includes=player,club&limit=1000"
    );
  },
}
