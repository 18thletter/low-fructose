Router.configure({
  notFoundTemplate: 'NotFound'
});

Router.map(function() {
  var self = this;
  self.route('Landing', {path: '/'});
  self.route(
    'SignUp', {
    path: /\/signup|\/register/,
    onBeforeAction: function() {
      Session.set('entryError', undefined);
    },
    onRun: function() {
      if (Meteor.userId()) {
        Router.go('dashboard');
      }
    }
  });

});
