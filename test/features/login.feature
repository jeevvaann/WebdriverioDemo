Feature: Login Scenarios

  @smoke
  Scenario: Login to application

    Given I am on the login page
    When I login with <username> and <password>

Examples:
      | username              | password | 
      | jeevvaann@gmail.com   |  December!989 |
   