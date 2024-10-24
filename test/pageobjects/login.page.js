const CountrycodeData = require('../pageobjects/Utils/Countrycode.json');
const DBUtils = require('../pageobjects/Utils/DBUtils');
const Page = require('./page');
const Translator = require('../pageobjects/Utils/Translator');

const getAll = require('./Utils/Dbclass');

class LoginPage extends Page {
  
    
    screenshot() {
        const path = require('path');
        const dirPath = path.join(__dirname, '/Screenshot/ss.png');
        browser.saveScreenshot(dirPath);
     
    }

    get inputUsername() {
        return $('//input[@name="username"]');
    }
    
    get inputPassword() {
        return $('//input[@name="password"]');
    }

    get btnSubmit() {
        return $('button.btn.btn-primary.btn-lg.btn-block');
    }

    async login(username, password) {

        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }   

    delay() {
        return super.delay();
    }

    open() {
        return super.open();
    }
    max() {
        return super.maximise();
    }
    deletecookies() {
        return super.deletecookies();
    }
    close() {
        return super.close();
    }
}

module.exports = new LoginPage();
