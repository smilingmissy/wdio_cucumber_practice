Feature: User Registration

  Background:
   Given I navigate to the register page
   Then the register page should be displayed successfully

 
  Scenario: Successful Registration 
    When I enter a valid username
    And I enter a valid password
    And I confirm the password correctly
    And I click on the Register button
    Then I should be redirected to the login page
    And I should see success message "Successfully registered, you can log in now."

  Scenario: Registration with missing username
    When I leave the username field empty
    And I enter a valid password
    And I confirm the password correctly
    And I click on the Register button
    Then I should see error message "All fields are required."


  Scenario: Registration with missing password
    When I enter a valid username
    And I leave the password field empty
    And I confirm the password with any value
    And I click on the Register button
    Then I should see error message "All fields are required."

  Scenario: Registration with non-matching passwords
    When I enter a valid username
    And I enter a valid password
    And I confirm the password with a different value
    And I click on the Register button
    Then I should see error message "Passwords do not match."
