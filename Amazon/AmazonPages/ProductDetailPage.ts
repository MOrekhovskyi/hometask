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
    this.productOverveiewRow = this.page.locator("//div[@id='productOverview_feature_div']//*[contains(@class,'a-spacing-small')]")
  }

  async getProductOverviewInfo() {
    await this.page.waitForLoadState();

    const result = {};

    const items = await this.productOverveiewRow.all();

    for (const item of items) {
      const nameElement = await item.locator('span.a-text-bold').first();
      const valueElement = await item.locator('span.po-break-word').first();

      if (nameElement && valueElement) {
        const name = await nameElement.innerText();
        const value = await valueElement.innerText();
        result[name.replace(':', '')] = value;
      }
    }

    return result;
  }

  async clickSeeMore() {
    await this.page.waitForTimeout(1000);
    await this.seeMoreButton.scrollIntoViewIfNeeded();
    await this.seeMoreButton.click();
    await this.page.waitForLoadState();
  }

  async verifyPrice(price: string) {
    expect(await this.price.innerText(), 'Price not equal!').toEqual(price);
  }
}
