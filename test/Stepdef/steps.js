const { Given, When, Then } = require('@cucumber/cucumber');
const LoginPage = require('../pageobjects/login.page');
const homepage = require('../pageobjects/homepage');

Given(/^I am on the login page$/, async () => {
    await LoginPage.open();
    await LoginPage.max();
});

When(/^I login with (.+) and (.+)$/, async(username, password)=>{
    await LoginPage.ClickSignin();
    await LoginPage.login(username,password);
    
});

Then(/^Enter the product (.+)$/, async(product)=>{
    await homepage.Searchin(product);
     await homepage.addImageproduct();
});

Then(/^Select the product and add kart$/, async()=>{
    await homepage.changecolour();
    await homepage.addKart();

});