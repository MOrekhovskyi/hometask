import { test as basePages } from '@playwright/test';
import MainPage from '../AmazonPages/HomePage';
import ProductPage from '../AmazonPages/ProductDetailPage';

type defaultPages = {mainPage: MainPage, productPage: ProductPage}

export const test = basePages.extend<defaultPages>({
  mainPage: async ({ page }, use) => {
    const mainPage = new MainPage(page);
    await use(mainPage);
  },

  productPage: async ({ page }, use) => {
    const productPage = new ProductPage(page);
    await use(productPage);
  },
});
export const { expect } = test;
