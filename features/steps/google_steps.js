module.exports = function given() {
  this.Given(/^I open google$/, function() {
 
       browser
	        .url('/');
	
	   
		
		//console.log('this should not fail');
	
  });

  
  this.When('I enter "$searchquery" in search field', function(searchparameter) {
    browser
	  .waitForExist('#lst-ib');
	browser
      .setValue('#lst-ib', searchparameter);
	  
  
	
  });

  this.When('I see the "$title" in title', function(Pagetitle) {
     var expect = require('chai').expect //this should be in some configuration file
	var title = browser.getTitle();
	console.log(title);
	expect(title).to.eql(Pagetitle);
	  
	
  });
  
};