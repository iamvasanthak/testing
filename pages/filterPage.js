import BasePage from './basePage';

class FilterPage extends BasePage {
    constructor() {
        super();
        this.budgetMinBox = element(by.id('bdgmin'));
        this.budgetMaxBox = element(by.id('bdgmax'));
        this.searchButton = element(by.id('s_search_btn'));
        this.buyButton = element(by.xpath("//span[text()='Buy']"))
        this.budgetLink = element(by.xpath("//a[text()='You can see here the matches outside your budget.']"))
    }

    async filterLaptopsWithGivenBudget(min, max){
        await this.budgetMinBox.click();
        await this.budgetMinBox.clear();
        await this.budgetMinBox.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, "a"))
        await this.budgetMinBox.sendKeys(protractor.Key.chord(protractor.Key.BACK_SPACE))
        await browser.sleep(10000)
        await this.budgetMinBox.sendKeys(min);
        await this.budgetMaxBox.click();
        await this.budgetMaxBox.clear();
        await this.budgetMaxBox.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, "a"))
        await this.budgetMaxBox.sendKeys(protractor.Key.chord(protractor.Key.BACK_SPACE))
        await this.budgetMaxBox.sendKeys(max);
        await this.searchButton.click();
        await browser.sleep(10000)

    }

    async filterLaptopsWithMinPriceOnly(min){
        await this.budgetMinBox.click();
        await this.budgetMinBox.clear();
        await this.budgetMinBox.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, "a"))
        await this.budgetMinBox.sendKeys(protractor.Key.chord(protractor.Key.BACK_SPACE))
        await browser.sleep(10000)
        await this.budgetMinBox.sendKeys(min);
        await this.budgetMaxBox.click();
        await this.budgetMaxBox.clear();
        await this.budgetMaxBox.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, "a"))
        await this.budgetMaxBox.sendKeys(protractor.Key.chord(protractor.Key.BACK_SPACE))
        await this.searchButton.click();
        await browser.sleep(10000)

    }

    async filterLaptopsWithMaxPriceOnly(max){
        
        await this.budgetMaxBox.click();
        await this.budgetMaxBox.clear();
        await this.budgetMaxBox.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, "a"))
        await this.budgetMaxBox.sendKeys(protractor.Key.chord(protractor.Key.BACK_SPACE))
        await this.budgetMaxBox.sendKeys(max);
        await this.budgetMinBox.click();
        await this.budgetMinBox.clear();
        await this.budgetMinBox.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, "a"))
        await this.budgetMinBox.sendKeys(protractor.Key.chord(protractor.Key.BACK_SPACE))
        await this.searchButton.click();
        await browser.sleep(10000)

    }

    async isBuyButtonDisplayed(){
        return await this.buyButton.isDisplayed();
    }

    async isBudgetOutsideRangeLinkDisplayed(){
        return await this.budgetLink.isDisplayed();
    }

}
export default new FilterPage();