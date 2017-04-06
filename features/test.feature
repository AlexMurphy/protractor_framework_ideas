Feature: Running Cucumber with Protractor
    As a user of Protractor
    I should be able to use Cucumber
    In order to run my E2E tests

    Scenario: Protractor and Cucumber Test
    		Given I go to the site
        # Given I go to "https://angularjs.org/"
        When I add "kkerchhoff@yahoo.co.uk" in the task field
        And I click the login button
        # Then I should see my new task in the list