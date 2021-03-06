var angularPage = require('../pages/angularPage.js');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;

module.exports = function() {
	this.Given(/^I go to the site$/, function () {
		angularPage.go();
	});

	this.When(/^I add "([^"]*)" in the task field$/, function(task, callback) {
		angularPage.addTask(task);
		callback();
	});

	this.When(/^I click the login button$/, function (callback) {
		angularPage.submitLoginCredentials();
		callback();
	});


	this.When(/^I click the add button$/, function() {
		angularPage.submitTask();
	});

	this.Then(/^I should see my new task in the list$/, function(callback) {
		var todoList = angularPage.angularHomepage.todoList;
		expect(todoList.count()).to.eventually.equal(3);
		expect(todoList.get(2).getText()).to.eventually.equal('Be Awesome')
			.and.notify(callback);
	});
};