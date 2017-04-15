// subscriberlist.page.js
"use strict";
var Page = require('./page')
class SubscriberListPage extends Page {
    get subscribersmenu()  { return browser.element('#left-panel > nav > ul > li:nth-child(2) > a > span > span'); }
    get subscriberslistmenu() { return browser.element('#left-panel > nav > ul > li.open > ul > li > a > span > span'); }
	get pageheader()    {return browser.element('#content > div > div.col-xs-12.col-sm-7.col-md-7.col-lg-4.big-breadcrumbs > h1');}
	
    
    open() {
        super.open('login');
    }
    
    submit() {
        this.form.submitForm();
    }
    
}
module.exports = new SubscriberListPage();