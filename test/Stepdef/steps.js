const { Given, When, Then } = require('@cucumber/cucumber');
const LoginPage = require('../pageobjects/login.page');

Given(/^I am on the login page$/, async () => {
    await LoginPage.open();
    await LoginPage.max();
    browser.pause(3000);
    console.log('Application title is : ',browser.getTitle());
});

When(/^I login with (\w+) and (.+)$/, async(username, password)=>{
    await LoginPage.ClickSignin();
    await LoginPage.login(username,password);
    await LoginPage.screenshot();
});