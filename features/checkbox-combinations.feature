# Feature: Checkbox combinations validation

#   Scenario: Validate all checkbox combinations automatically
#     Given user is on "checkbox" page
#     Then all checkbox combinations should work correctly
Feature: Checkbox combinations validation
Scenario: Validate all checkbox combinations manually
    Given user is on "checkbox" page
    When deselects the option 2
    When user selects "Option 1"
    Then "Option 1" should be selected
    When user deselects "Option 1"
    Then no options should be selected
    When user selects "Option 2"
    Then "Option 2" should be selected
    When user deselects "Option 2"
    Then no options should be selected
    When user selects "Option 1" and "Option 2"
    Then both options should be selected
    When user deselects "Option 1"
    Then only "Option 2" should be selected
    When user deselects "Option 2"
    Then no options should be selected