/**  @jsx React.DOM */

if (Meteor.isClient) {
  Meteor.startup(function() {
    React.renderComponent(
      <Topbar leagueName="Some soccer league!" userName="Joe Schmoe"/>,
      document.body
    );
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
  });
}
