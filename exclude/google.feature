Feature: Google

  Scenario: As a user, I can search on google
    Given I open google
    When I enter "BDD" in search field
    Then I see the "Google" in title
	
  