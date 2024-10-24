class homePage{

    get SearchInput() {
        return $('//input[@id="search_query_top"]');
    }

    get ButtonSearch() {
        return $('//button[@name="submit_search"]');
    }

get Imageproduct(){
    return $('(//a[@title="Blouse"])[1]')
}
get Addmore() {
    return $('//span[contains(text(),"More")]');
}
get AddProdWhite() {
    return $('//a[@title="White"]');
}
get addkart(){
    return $('//button[@name="Submit"]')
}
    async Searchin(string) {
        await this.SearchInput.setValue(string);
        await this.ButtonSearch.click();
    }

    async addImageproduct() {
        await this.Imageproduct.waitForClickable({ timeout: 5000 });
        await this.Imageproduct.click();
    }

    async changecolour() {
        await this.AddProdWhite.waitForClickable({ timeout: 5000 });
        await this.AddProdWhite.click();
    }

    async addKart() {
        await this.addkart.waitForClickable({ timeout: 50000 });
        await this.addkart.click();
    }
}


module.exports = new homePage();
