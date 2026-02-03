Feature: Login Functionality

  Scenario Outline: User Login with valid credentials
    Given I am on the login page
    When user enters with right  username and password
    And I click on the Login button
    Then user should be redirected to secure page
    And I should see success message
    And the Logout button should be displayed


Scenario: User Login with invalid username
 # Given I am on the login page
  When user enters wrong username and password
  And I click on the Login button
  Then user should see an flash error message for invalid username
  And I should remain on the login page
  

  Scenario: Login with invalid password
  #Given I am on the secure page
  When I enter username right username and wrong password
  And I click on the Login button
  Then user should see an flash error message for invalid password
  And I should remain on the login page