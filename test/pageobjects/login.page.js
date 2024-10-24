const Page = require('./page');
class LoginPage extends Page {
  
    
    screenshot() {
        const path = require('path');
        const dirPath = path.join(__dirname, '/Screenshot/ss.png');
        browser.saveScreenshot(dirPath);
     
    }

get signin(){
    return $('//a[contains(text(),"Sign in")]')
}

    get inputUsername() {
        return $('//input[@id="email"]');
    }

    get inputPassword() {
        return $('//input[@id="passwd"]');
    }

    get btnSubmit() {
        return $('//button[@id="SubmitLogin"]');
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
