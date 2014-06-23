/** @jsx React.DOM */

Standings = React.createClass({
  render: function() {
    var teams = this.props.teams.map(function(team) {
      return <TeamStanding team={team} />;
    })
    return (
      <table className="pure-table">
        <thead>
          <tr>
            <th>Ranking</th>
            <th>Team Name</th>
            <th>Wins</th>
            <th>Losses</th>
          </tr>
        </thead>
        <tbody>
          {teams}
        </tbody>
      </table>
    );
  }
});

var TeamStanding = React.createClass({
  render: function() {
    return (
      <tr>
        <td>{this.props.team.rank}</td>
        <td>{this.props.team.name}</td>
        <td>{this.props.team.wins}</td>
        <td>{this.props.team.losses}</td>
      </tr>
    );
  }
})

