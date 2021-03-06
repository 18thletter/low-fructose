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
var AccountsEntry;

AccountsEntry = {
  settings: {
    wrapLinks: true,
    homeRoute: '/',
    dashboardRoute: '/dashboard',
    passwordSignupFields: 'EMAIL_ONLY',
    emailToLower: true,
    usernameToLower: false,
    entrySignUp: '/sign-up',
    extraSignUpFields: [],
    showOtherLoginServices: true
  },
  isStringEmail: function(email) {
    var emailPattern;
    emailPattern = /^([\w.-]+)@([\w.-]+)\.([a-zA-Z.]{2,6})$/i;
    if (email.match(emailPattern)) {
      return true;
    } else {
      return false;
    }
  },
  config: function(appConfig) {
    var signUpRoute;
    this.settings = _.extend(this.settings, appConfig);
    T9n.defaultLanguage = "en";
    if (appConfig.language) {
      T9n.language = appConfig.language;
    }
    if (appConfig.signUpTemplate) {
      signUpRoute = Router.routes['entrySignUp'];
      return signUpRoute.options.template = appConfig.signUpTemplate;
    }
  },
  signInRequired: function(router, pause, extraCondition) {
    if (extraCondition == null) {
      extraCondition = true;
    }
    if (!Meteor.loggingIn()) {
      if (!(Meteor.user() && extraCondition)) {
        Session.set('fromWhere', router.path);
        Router.go('/sign-in');
        Session.set('entryError', t9n('error.signInRequired'));
        return pause.call();
      }
    }
  }
};

this.AccountsEntry = AccountsEntry;

this.T9NHelper = (function() {
  function T9NHelper() {}

  T9NHelper.translate = function(code) {
    return T9n.get(code, "error.accounts");
  };

  T9NHelper.accountsError = function(err) {
    return Session.set('entryError', err.reason);
  };

  return T9NHelper;

})();
