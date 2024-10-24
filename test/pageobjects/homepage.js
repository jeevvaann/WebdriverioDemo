class homePage{

    get SearchInput() {
        return $('//input[@id="search_query_top"]');
    }

    get ButtonSearch() {
        return $('//button[@name="submit_search"]');
    }

 
    async Searchin(string) {
        await this.SearchInput.setValue(string);
        await this.ButtonSearch.click();
    }
}


module.exports = new homePage();
