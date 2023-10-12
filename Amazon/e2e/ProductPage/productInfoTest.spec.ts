import { laptops } from '../../resources/dataAmazon';
import { test, expect } from '../../AmazonFixtures/basePage';
import HomePage from '../../AmazonPages/HomePage';

test.describe('Validate Amazon`s Products test', async () => {
  test.beforeEach(async ({ page }) => {
    const mainPage = new HomePage(page);
    await mainPage.goTo();
  });

  test('Validate Macbook Air 13 Info', async ({ mainPage, productPage }) => {
    await mainPage.searchProduct(`${laptops.macbookAir13.name} ${laptops.macbookAir13.screenSize}`);
    await mainPage.choseProduct(`${laptops.macbookAir13.searchName}`);
    await productPage.clickSeeMore();
    const productData = await productPage.getProductOverviewInfo();
    expect(productData["Brand"], "Not expected Brand").toEqual(laptops.macbookAir13.brand);
    expect(productData["Color"], "Not expected Color").toEqual(laptops.macbookAir13.color);
    expect(productData['CPU Model'], 'Not expected CPU Model').toEqual(laptops.macbookAir13.CPUModel);
    expect(productData['Graphics Card Description'], 'Graphics Card').toEqual(laptops.macbookAir13.graphicsCard);
    expect(productData['Hard Disk Size'], 'Not expected Hard Disc Size').toEqual(laptops.macbookAir13.hardDiskSize);
    expect(productData['Model Name'], 'Not expected Model Name').toEqual(laptops.macbookAir13.name);
    expect(productData['Operating System'], 'Not expected Operation System').toEqual(laptops.macbookAir13.operationSystem);
    expect(productData['Ram Memory Installed Size'], 'Not expected Ram Memory').toEqual(laptops.macbookAir13.RAMSize);
    expect(productData['Screen Size'], 'Not expected Screen size').toEqual(laptops.macbookAir13.screenSize);
    expect(productData['Special Feature'], 'Not expected Special Feature').toEqual(laptops.macbookAir13.specialFeature);
    await productPage.verifyPrice();
  });
});
