Routes = {};

RouteCore.map(function() {
  var self = this;
  //Routes.home = self.route('/', Landing);
  Routes.register = self.route('/register', Register);
});
