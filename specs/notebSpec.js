import filterPage from '../pages/filterPage';
let min = 2000
let max = 3000

describe ('Filter Laptops by price range', () => {
	beforeEach(async () => {
        await filterPage.goto();
	});

    it('Search for a laptop in given range', async () => {
        await filterPage.filterLaptopsWithGivenBudget(min, max);
        await expect(filterPage.isBuyButtonDisplayed()).toBe(true);
    });

    it('Search for a laptop with min price only', async () => {
        await filterPage.filterLaptopsWithMinPriceOnly(min);
        //Is it correct behaviour of system when only search with min price or bug??
        await expect(filterPage.isBudgetOutsideRangeLinkDisplayed()).toBe(false);
    });

    it('Search for a laptop with max price only', async () => {
        await filterPage.filterLaptopsWithMaxPriceOnly(max);
        await expect(filterPage.isBuyButtonDisplayed()).toBe(true);
    });
});
