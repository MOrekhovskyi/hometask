import { Locator, Page } from '@playwright/test';

export default class HomePage {
  public page: Page;

  readonly header: Locator;

  readonly searchField: Locator;

  readonly searchSubmit: Locator;

  readonly resultsList: Locator;

  readonly productDescription: Locator;

  readonly BASE_URL = 'https://www.amazon.com/';

  constructor(page: Page) {
    this.page = page;
    this.header = page.getByTestId('header');
    this.searchField = page.getByPlaceholder('Search Amazon');
    this.searchSubmit = page.locator('#nav-search-submit-button');
    this.resultsList = page.locator("//div[@data-component-type='s-search-result']");
    this.productDescription = page.locator('.a-size-medium.a-color-base');
  }

  async goTo() {
    await this.page.goto(this.BASE_URL);
  }

  async searchProduct(product: string) {
    await this.searchField.click();
    await this.searchField.fill(product);
    await this.searchSubmit.click();
    await this.page.waitForLoadState();
  }

  async choseProduct(exactProductName: string) {
    await this.productDescription.filter({ hasText: exactProductName }).click();
  }

  async resultListLenght() {
    const resultList = await this.resultsList.count();
    return resultList;
  }
}
