var LoginPage = require('../pageobjects/login.page');
var SubListPage = require('../pageobjects/subscriberlist.page');
var expect = require('chai').expect //this should be in some configuration file

module.exports = function given() {
  this.Given(/^I open UBO webapp$/, function() {
 
       SubListPage.open();
			
	
  }); 
  
  this.Given('I login with username "$un" and password "$pwd"', function(login, password) {
    
	  
	  LoginPage.username.waitForExist();
	  LoginPage.username.setValue(login);
	  LoginPage.passwordf.setValue(password);
	  LoginPage.logbutton.click();
	
  });

  
  this.When('I navigate to subscriber list', function() {
    		
	SubListPage.subscribersmenu.waitForExist();
	SubListPage.subscribersmenu.waitForVisible();
	SubListPage.subscribersmenu.click();
		
	  
	SubListPage.subscriberslistmenu.waitForExist();
	SubListPage.subscriberslistmenu.waitForVisible();
	SubListPage.subscriberslistmenu.click();
	
  });

  this.Then('I see subscriber list', function() {
	  
   			
		

			SubListPage.Sublist_ribbon.waitForExist();
			SubListPage.Sublist_ribbon.waitForVisible();
			expect(SubListPage.Sublist_ribbon.getText()).to.eql('Subscribers List');
	

		
		
		
  });
  
  this.Then('I see "$btn" button', function(btn_name) {
	  
   			
		

			SubListPage.btn_PaidUp.waitForExist();
			
			
			SubListPage.btn_PaidUp.isVisible();
			
			expect(SubListPage.btn_PaidUp.getText()).to.eql('Paid Up');
				
		
		
		
		
  });
  
  
};