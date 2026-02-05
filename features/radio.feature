Feature: Radio Button Functionality for 5 Options

  Background:
  Given I navigate to the radio button page
  
  Scenario:verify all radio buttons are visible
      Then all radio buttons should be visible

Scenario:select your favorite color radio button
    When I select radio button "Blue"
    Then radio button "Blue" should be selected
    And only one color radio button should be selected
    When I select radio button "Red"
    Then radio button "Red" should be selected
    And only one color radio button should be selected
     When I select radio button "Yellow"
    Then radio button "Yellow" should be selected
    And only one color radio button should be selected
    When I select radio button "Black"
    Then radio button "Black" should be selected
    And only one color radio button should be selected
    When I select radio button "Green"
    Then radio button "Green" should be selected
    And only one color radio button should be selected
   
Scenario:select your favorite sports radio button
    When I select radio button "Basketball"
    Then radio button "Basketball" should be selected
    And only one sports radio button should be selected
    When I select radio button "Football"
    Then radio button "Football" should be selected
    And only one sports radio button should be selected
    When I select radio button "Tennis"
    Then radio button "Tennis" should be selected
    And only one sports radio button should be selected
    