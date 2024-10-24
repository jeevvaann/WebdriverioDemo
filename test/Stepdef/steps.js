const { Given, When, Then } = require('@cucumber/cucumber');
const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
const HomePage = require('../pageobjects/homePage');
const Albumpage= require('../pageobjects/albumPage');
const loginPage = require('../pageobjects/login.page');

const Translator = require('../pageobjects/Utils/Translator');
const Lang = require('../pageobjects/Utils/Lang');

Given(/^I am on the login page$/, async () => {

    // await LoginPage.getvaluefromCountrycode();
    await LoginPage.open();
    await LoginPage.max();
    browser.pause(3000);
    console.log('Application title is : ',browser.getTitle());
});

When(/^I login with (\w+) and (.+)$/, async(username, password)=>{
    await LoginPage.Click_LanguageLink();
    await LoginPage.SelectLanguage(Lang.language);
    await LoginPage.click_langPage_Close();
    // await LoginPage.verifyLoginpage();
    await LoginPage.login(username,password);
    // await HomePage.click_btn_Albums();
    await LoginPage.screenshot();
});

When(/^Verify (\w+) scenario by login with (\w+) and (.+)$/, async(Scenario,username,password)=>{ 
    var x = Translator.getTranslatedValue('SIGNIN_LOGINFAILED')+": [Invalid account Details]";
    await LoginPage.Click_LanguageLink();
    await LoginPage.SelectLanguage(Lang.language);
    await LoginPage.click_langPage_Close();
    await LoginPage.verifyLoginpage();
    switch (Scenario) {
        case 'Positive':
            await LoginPage.login(username,password);
          break; 
        case 'Invalid':
            await LoginPage.login(username,password);
            await expect($('//mat-card/mat-card-content/form/div[5]/div')).toHaveTextContaining(Translator.getTranslatedValue('ERR_CONSTRAINT_VIOLATION'));
          break;
      }
});

Then(/^verify Homepage contains dashboards$/,async ()=>{
    await HomePage.verifybtn_Homedashboard();
    await HomePage.verifybtn_Groupdashboard();
    await HomePage.verifybtn_News();
    await HomePage.verifybtn_chrips();
    await HomePage.verifybtn_sketches();
    await HomePage.verifybtn_MarketPlacedashboard();
});

Then(/^go to the MarketPlacedashboard.$/,async ()=>{
    await HomePage.Click_btn_MarketPlacedashboard();
});

Then(/^click on the Camera button on the profile picture which is for upload image.$/,async ()=>{
    await HomePage.UploadProfileImmage();  
    await HomePage.verify_uploadImageTitle();
});

Then(/^Choose an image from your device and click on open$/,async ()=>{
    await HomePage.UploadProfileImmage(); 
    await HomePage.verify_uploadImageTitle(); 
    await HomePage.imageverification();
});

Then(/^click on Save button$/,async ()=>{ 
    await HomePage.UploadProfileImmage_save();
});

Then(/^click on Cancel button$/,async ()=>{ 
    await HomePage.UploadProfileImmage_Cancel();
});

Then(/^click on close button at the top right of the pop up.$/,async ()=>{ 
    await HomePage.UploadProfileImmage_ClosePopUp();
});

Then(/^click on Flip Vertical button$/,async ()=>{ 
    await HomePage.UploadProfileImmage_FlipVertical();
});

Then(/^click on Flip Horizontal button$/,async ()=>{ 
    await HomePage.UploadProfileImmage_FlipHorizontal();
});

Then(/^click on Reset image button$/,async ()=>{ 
    await HomePage.UploadProfileImmage_ResetImage();
});

Then(/^click on zoom in button$/,async ()=>{ 
    await HomePage.UploadProfileImmage_ZoomIn();
});

Then(/^click on zoom out button$/,async ()=>{ 
    await HomePage.UploadProfileImmage_ZoomOut();
});


Then(/^click on Rotate Left button$/,async ()=>{ 
    await HomePage.UploadProfileImmage_RotateLeft();
});

Then(/^click on Rotate Right button$/,async ()=>{ 
    await HomePage.UploadProfileImmage_RotateRight();
});

Then(/^verify the changes in the image after click on zoom in button$/,async ()=>{ 
    await HomePage.verifyZoomInChanges();
});

Then(/^verify the changes in the image after click on zoom out button$/,async ()=>{ 
    await HomePage.verifyZoomOutChanges();
});

Then(/^verify the changes in the image after click on flip vertical button$/,async ()=>{ 
    await HomePage.verifyFlipVerticalChanges();
});

Then(/^verify the changes in the image after click on flip horizontal button$/,async ()=>{ 
    await HomePage.verifyFlipHorizontalChanges();
});

Then(/^verify the changes in the image after click on Reset Image button$/,async ()=>{ 
    await HomePage.verifyResetImageChanges();
});

Then(/^verify the changes in the image after click on Rotate Right button$/,async ()=>{ 
    await HomePage.verifyRotateRight();
});

Then(/^verify the changes in the image after click on Rotate Left button$/,async ()=>{ 
    await HomePage.verifyRotateLeft();
});

Then(/^verify the changes in the image after click on Rotate Right button coverPhoto$/,async ()=>{ 
    await HomePage.verifyRotateRight_coverPhoto();
});

Then(/^verify the changes in the image after click on Rotate Left button coverPhoto$/,async ()=>{ 
    await HomePage.verifyRotateLeft_coverPhoto();
});