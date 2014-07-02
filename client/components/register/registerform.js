Template.RegisterForm.events({
  'submit': function(e, t) {
    e.preventDefault();
    var email = t.find('input[type=email]').value;
    console.log(email);
  }
});
