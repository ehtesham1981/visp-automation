// subscriberlist.page.js
"use strict";
var Page = require('./page')
class SubscriberListPage extends Page {
    get subscribersmenu()  { return browser.element('#left-panel > nav > ul > li:nth-child(2) > a > span > span'); }
    get subscriberslistmenu() { return browser.element('#left-panel > nav > ul > li.open > ul > li > a > span > span'); }
	get Sublist_ribbon()    {return browser.element('#ribbon > ol > li:nth-child(2)');}
	get btn_PaidUp()    {return browser.element('#tbl-subscribers_wrapper > div.dt-toolbar > div.col-xs-12.col-sm-9 > div > a:nth-child(2) > span');}
	get btn_Due()    {return browser.element('#tbl-subscribers_wrapper > div.dt-toolbar > div.col-xs-12.col-sm-9 > div > a:nth-child(3) > span');}
    
    open() {
        super.open('login');
    }
    
    submit() {
        this.form.submitForm();
    }
    
}
module.exports = new SubscriberListPage();