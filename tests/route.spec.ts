import {  By, until, WebDriver } from "selenium-webdriver";
import * as assert from "assert";
import { waitUntil } from 'async-wait-until';
import { createDriver } from './driver'
import RoutPage from './pages/route.page'
jest.setTimeout(60000);

describe('route', () => {
  let driver: WebDriver;
  let routePage: RoutPage;

  beforeEach(async () => {
    routePage = new RoutPage();
    driver = await createDriver();
    await driver.manage().setTimeouts({ implicit: 10000, pageLoad: 10000, script: 3000 })
    await driver.get(process.env.URL)
    await driver.wait(until.titleIs('Via Router | Advanced Cross-Chain Liquidity Aggregation Protocol'), 10000)   
  });

  afterEach(async () => {
    await driver.quit();
  });
 
  
  it('check routing search time less than 30', async () => {   
    await driver.findElement(routePage.openFromDataButton).click()
    await driver.findElement(routePage.buttonNetworkEthereum).click()
    await driver.findElement(routePage.tokenUSDT).click()    
    await driver.findElement(routePage.buttonSelectToken).click()    
    await driver.findElement(routePage.buttonNetworkEthereum).click()
    await driver.findElement(routePage.tokenBUSD).click()    
    await driver.findElement(routePage.inputEnterAmount).sendKeys(100)   
    await driver.wait(until.elementTextContains(await driver.findElement(routePage.routFoundValue),'$'), 30000)
  });

})
