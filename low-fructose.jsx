/**  @jsx React.DOM */

if (Meteor.isClient) {
  Meteor.startup(function() {
    React.renderComponent(
      <Navbar />,
      document.body
    );
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
  });
}
