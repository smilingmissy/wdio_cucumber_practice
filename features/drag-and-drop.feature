Feature: Drag and Drop functionality

  Scenario: Drag element A and drop on element B
    Given user is on the Drag and Drop page
    When user drags element A to element B
    Then element A should be successfully dropped into element B
