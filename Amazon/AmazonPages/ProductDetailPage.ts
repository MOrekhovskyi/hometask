import { Locator, Page } from '@playwright/test';
import HomePage from './HomePage';
import { expect } from '../AmazonFixtures/basePage';

export default class ProductDetailPage extends HomePage {
  public page: Page;

  readonly price: Locator;

  readonly seeMoreButton: Locator;

  readonly productOverveiewRow: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.price = this.page.locator('.a-offscreen').first();
    this.seeMoreButton = this.page.locator('(//span[text()="See more"])[1]');
    this.productOverveiewRow = this.page.locator("//div[@id='productOverview_feature_div']//div[contains(@class,'a-row a-spacing-small')]");
  }

  async getProductOverviewInfo() {
    await this.page.waitForLoadState();
    const result = [];
    await Promise.all(
      (
        await this.productOverveiewRow.all()
      ).map(async (item) => {
        const name = (await item.locator('span.a-text-bold').innerText()).replace(':', '');
        const value = await item.locator('span.po-break-word').innerText();
        result[name] = value;
      }),
    );

    return result;
  }

  async clickSeeMore() {
    await this.seeMoreButton.scrollIntoViewIfNeeded();
    await this.seeMoreButton.click();
  }

  async verifyPrice(price: string) {
    expect(await this.price.innerText(), 'Price not equal!').toEqual(price);
  }
}
