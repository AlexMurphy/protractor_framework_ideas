'use strict';

var loginUrl = 'login';

module.exports = {

  angularHomepage: {
    loginEmail: element(by.name('email')),
    loginPassword: element(by.name('password')),
    loginBtn: element(by.buttonText('Login')),
  },

  go: function(site) {
    browser.get(loginUrl);
  },

  addTask: function(task) {
    var angular = this.angularHomepage;

    angular.loginEmail.sendKeys(task);
  },

  submitTask: function() {
    var angular = this.angularHomepage;
    angular.taskButton.click();
  },

  submitLoginCredentials: function() {
    var angular = this.angularHomepage;
    angular.loginBtn.click();
  }
};
