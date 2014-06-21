/** @jsx React.DOM */

Topbar = React.createClass({
  render: function() {
    // TODO: change userName to User.userName in the future when we add in User
    // TODO: add in League object (or something like that)
    // TODO: add drop down for leagues
    return (
      <div className="top-bar pure-menu pure-menu-open pure-menu-horizontal pure-menu-fixed">
          <a className="pure-menu-heading" href="">{this.props.leagueName}</a>

          <ul>
              <li><a href="#">My Leagues</a></li>
              <li><a href="#">{this.props.userName}</a></li>
          </ul>
      </div>
    );
  }
});
