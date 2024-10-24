/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {
   
    open() {
        return browser.url(`/`)

    }


    deletecookies() {
        return browser.deletecookies()
    }

    maximise() {
        return browser.maximizeWindow()
    }

    delay() {
        return browser.pause(10000)
    }

    close() {
        return browser.closeWindow()
    }

    quit() {
        return browser.quit()
    }

}
