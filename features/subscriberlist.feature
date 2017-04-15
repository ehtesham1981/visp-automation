@SubList
Feature: Subscriber list

  Background: 
			Given I open UBO webapp
			And I login with username "dreamteam9" and password "str0ngP@ss9"

  Scenario: As a user, I can navigate to subscriber list
			When I navigate to subscriber list
			Then I see subscriber list 	