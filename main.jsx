/**  @jsx React.DOM */

if (Meteor.isClient) {
  Meteor.startup(function() {
    React.renderComponent(
      <Sidebar />,
      document.body
    );
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
  });
}
