
class wait {

    async waitforclickable(elem) {
        await $(elem).waitForClickable({ timeout: 10000 });
    }

    async waitfordisplayed(elem) {
        await $(elem).waitForDisplayed({ timeout: 10000 });
    }

    async waitforexist(elem) {
        console.log(elem);
        await $(elem).waitForExist({ timeout: 10000 });
    }
}

module.exports = new wait();