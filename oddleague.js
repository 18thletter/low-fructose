if (Meteor.isClient) {
  Meteor.startup(function () {
    Deps.autorun(function() {
      React.renderComponent(
        React.DOM.h1(null, 'Hello, world!'),
        document.body
      );
    });
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
