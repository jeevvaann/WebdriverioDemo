Feature: Profile picture Scenarios
  @smoke
  Scenario: Login to FaZeal application

    Given I am on the login page
    When I login with <username> and <password>
    Then Verify notification button is clickable
    Then Click on profile Image Button
    Then Click on Logout Button

  