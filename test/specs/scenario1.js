const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
const HomePage = require('../pageobjects/homePage');
const Albumpage= require('../pageobjects/albumPage');
const loginPage = require('../pageobjects/login.page');

describe('Check the upload Button is Functional',()=>{
    it('Navigate to (Fazeal)',async ()=>{
        await LoginPage.open();
    });
    it('use these credentials to logon',async ()=>{
        await LoginPage.login('king2020', 'shaSHA123@#');
    });
    it('go to the main dashboard.',async ()=>{
        await HomePage.VerifyHomepage();
    });
    it('click on the Camera button on the profile picture which is for upload image.',async ()=>{
        await HomePage.click_btn_Albums();
        await loginPage.close();
    });
    });

    describe('Check on editing pop up before uploading the image',()=>{
        it('Navigate to (Fazeal)',async ()=>{
            await LoginPage.open();
        });
        it('use these credentials to logon',async ()=>{
            await LoginPage.login('king2020', 'shaSHA123@#');
        });
        it('go to the main dashboard.',async ()=>{
            await HomePage.VerifyHomepage();
        });
        it('click on the Camera button on the profile picture which is for upload image.',async ()=>{
            await HomePage.click_btn_Albums();
        }); 
        it('Chose an image from your device.',async ()=>{
           await Albumpage.EditImageClick();
        });
        it('click on open.',async ()=>{
           
        }); 

    })