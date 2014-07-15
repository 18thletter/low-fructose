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
if (typeof Handlebars !== "undefined") {
  UI.registerHelper("signedInAs", function(date) {
    if (Meteor.user().username) {
      return Meteor.user().username;
    } else if (Meteor.user().profile && Meteor.user().profile.name) {
      return Meteor.user().profile.name;
    } else if (Meteor.user().emails && Meteor.user().emails[0]) {
      return Meteor.user().emails[0].address;
    } else {
      return "Signed In";
    }
  });
}

UI.registerHelper('accountButtons', function() {
  return Template.entryAccountButtons;
});

UI.registerHelper('capitalize', function(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
});

UI.registerHelper('signedIn', function() {
  if (Meteor.user()) {
    return true;
  }
});

UI.registerHelper('otherLoginServices', function() {
  return AccountsEntry.settings.showOtherLoginServices && Accounts.oauth && Accounts.oauth.serviceNames().length > 0;
});

UI.registerHelper('loginServices', function() {
  return Accounts.oauth.serviceNames();
});

UI.registerHelper('showSignupCode', function() {
  return AccountsEntry.settings.showSignupCode === true;
});

UI.registerHelper('passwordLoginService', function() {
  return !!Package['accounts-password'];
});

UI.registerHelper('showCreateAccountLink', function() {
  return !Accounts._options.forbidClientAccountCreation;
});
