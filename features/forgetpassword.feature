Feature:forget password functionality

  Background:
    Given I am on the forget password page

  Scenario:verify forget password page elements
    When I enter a valid email address "xyz@gmail.com"
    And I click on the submit button
    Then I should see a confirmation message "An e-mail has been sent to you which explains how to reset your password."
