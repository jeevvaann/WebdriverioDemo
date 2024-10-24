Feature: Login Scenarios

  @smoke
  Scenario Outline: Login to application

    Given I am on the login page
    When I login with <username> and <password>
    Then Enter the product <product>
    Then Select the product and add kart

Examples:
      | username              |  password     | product|
      | jeevvaann@gmail.com   |  December!989 | Blouse |
   