Template.Landing.helpers({
  'click #registerButton': function(event) {
    event.preventDefault();
    return Router.go('/signUp');
  }
});
