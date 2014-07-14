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
// Generated by CoffeeScript 1.7.1
(function() {
  var entryAccountButtonsHelpers;

  entryAccountButtonsHelpers = {
    profileUrl: function() {
      if (!AccountsEntry.settings.profileRoute) {
        return false;
      }
      return AccountsEntry.settings.profileRoute;
    },
    wrapLinksLi: function() {
      if (AccountsEntry.settings.wrapLinks) {
        return Template.wrapLinks;
      } else {
        return Template.noWrapLinks;
      }
    },
    wrapLinks: function() {
      return AccountsEntry.settings.wrapLinks;
    },
    beforeSignIn: function() {
      return AccountsEntry.settings.beforeSignIn;
    },
    beforeSignUp: function() {
      return AccountsEntry.settings.beforeSignUp;
    },
    beforeSignOut: function() {
      return AccountsEntry.settings.beforeSignOut;
    },
    beforeSignedInAs: function() {
      return AccountsEntry.settings.beforeSignedInAs;
    },
    entrySignUp: function() {
      return AccountsEntry.settings.entrySignUp;
    },
    profile: function() {
      return Meteor.user().profile;
    }
  };

  Template.entryAccountButtons.helpers(entryAccountButtonsHelpers);

  Template.entryAccountButtons.helpers({
    signedInTemplate: function() {
      if (AccountsEntry.settings.signedInTemplate) {
        Template[AccountsEntry.settings.signedInTemplate].helpers(entryAccountButtonsHelpers);
        return Template[AccountsEntry.settings.signedInTemplate];
      } else {
        return Template.entrySignedIn;
      }
    }
  });

  Template.entrySignedIn.helpers(entryAccountButtonsHelpers);

}).call(this);