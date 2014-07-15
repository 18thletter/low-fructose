/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2013 Differential
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
AccountsEntry.entrySignInHelpers = {
  emailInputType: function() {
    if (AccountsEntry.settings.passwordSignupFields === 'EMAIL_ONLY') {
      return 'email';
    } else {
      return 'string';
    }
  },
  emailPlaceholder: function() {
    var fields;
    fields = AccountsEntry.settings.passwordSignupFields;
    if (_.contains(['USERNAME_AND_EMAIL', 'USERNAME_AND_OPTIONAL_EMAIL'], fields)) {
      return t9n("usernameOrEmail");
    } else if (fields === "USERNAME_ONLY") {
      return t9n("username");
    }
    return t9n("email");
  },
  logo: function() {
    return AccountsEntry.settings.logo;
  },
  isUsernameOnly: function() {
    return AccountsEntry.settings.passwordSignupFields === 'USERNAME_ONLY';
  }
};

AccountsEntry.entrySignInEvents = {
  'submit #signIn': function(event) {
    var email;
    event.preventDefault();
    email = $('input[name="email"]').val();
    if ((AccountsEntry.isStringEmail(email) && AccountsEntry.settings.emailToLower) || (!AccountsEntry.isStringEmail(email) && AccountsEntry.settings.usernameToLower)) {
      email = email.toLowerCase();
    }
    Session.set('email', email);
    Session.set('password', $('input[name="password"]').val());
    return Meteor.loginWithPassword(Session.get('email'), Session.get('password'), function(error) {
      Session.set('password', void 0);
      if (error) {
        return T9NHelper.accountsError(error);
      } else if (Session.get('fromWhere')) {
        Router.go(Session.get('fromWhere'));
        return Session.set('fromWhere', void 0);
      } else {
        return Router.go(AccountsEntry.settings.dashboardRoute);
      }
    });
  }
};

Template.entrySignIn.helpers(AccountsEntry.entrySignInHelpers);
Template.entrySignIn.rendered = function() {
  $('<link>', {
    href: "//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css",
    rel: "stylesheet"
  }).appendTo('head');
}

Template.entrySignIn.events(AccountsEntry.entrySignInEvents);
