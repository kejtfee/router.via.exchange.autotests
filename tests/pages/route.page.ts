import { By } from "selenium-webdriver"

export default class RoutePage {
  openFromDataButton = By.xpath("//div[@class='flex flex-col items-end justify-between min-w-max']/button")
  openToDataButton = By.xpath("(//div[@class='flex flex-col items-end']/button")
  buttonNetworkEthereum= By.xpath("//button[@title='Ethereum']")
  buttonSelectToken = By.xpath("//*[contains(text(),'Select a token')]")
  tokenUSDT = By.xpath("//span[@title='Tether USD']")
  tokenBUSD = By.xpath("//span[@title='Binance USD']")
  inputEnterAmount = By.xpath("//input[@placeholder='Enter amount']")
  routFoundValue = By.xpath("(//span[@class='text-base leading-none text-gray-400 pl-2 pt-1'])[2]")

}
