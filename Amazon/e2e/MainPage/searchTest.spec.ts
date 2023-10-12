import { laptops } from '../../resources/dataAmazon';
import { test, expect } from '../../AmazonFixtures/basePage';
import HomePage from '../../AmazonPages/HomePage';

test.describe('Search Amazon test', async () => {
  test.beforeEach(async ({ page }) => {
    const mainPage = new HomePage(page);
    await mainPage.goTo();
  });

  test('Search exact product', async ({ mainPage }) => {
    await mainPage.searchProduct(`${laptops.macbookAir13.name} ${laptops.macbookAir13.screenSize}`);
    expect(await mainPage.resultListLenght()).toBeGreaterThan(0);
  });
});
