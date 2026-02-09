Feature: OTP Verification
Scenario: User receives OTP and verifies it successfully
    Given the user is on the otp-login page
    When user enters "practice@expandtesting.com" in the email field
    And clicks on the button
    When user enters the received OTP code in the OTP field
    And clicks on the button
   Then user should be redirected to secure page
    And I should see success message
    And the Logout button should be displayed