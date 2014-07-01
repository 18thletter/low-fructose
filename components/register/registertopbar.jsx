/** @jsx React.DOM */

RegisterTopBar = React.createClass({
  render: function() {
    return (
      <header className="navigation">
        <div className="menu-wrapper">
          <Logo />
          <p className="navigation-menu-button" id="js-mobile-menu">MENU</p>
        </div>
      </header>
    );
  }
});
