Routes = {};

Router.map(function() {
  var self = this;
  Routes.home = self.route('Landing', {path: '/'});
  Routes.register = self.route('Register', {path: '/register'});
});
