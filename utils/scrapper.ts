import { Stock, StockDetail } from "../interfaces";
import puppeteer from 'puppeteer';

export const runAllScrapping = async (url: string, params:string[], browser:puppeteer.Browser) => {
  return params.map(async (param) => {
    const page = await browser.newPage()
    return await _scrapePrices(url, param, page);
  })
}

export const runSingleScrapping = async (url: string, param:string, browser:puppeteer.Browser) => {
    const page = await browser.newPage()
    return await _scrapePrices(url, param, page);
}

const _scrapePrices = async (url: string, stockCode: string, page: puppeteer.Page ): Promise<Stock> => {
  const stockUrl = url + stockCode + "/history?p=" + stockCode
  console.log(`[LOG]  Fetching ${stockUrl}`)
  await page.goto(stockUrl);
  
  const stocks = await page.evaluate(()=> {
    const result:Array<StockDetail> = []
    const dateId = 53 // inspected Id - subject to change 
    const priceId = 61  
    const pastDays = 60 // todo: pass this variable outside `evaluate`
    
    for (let index = 1; index <= pastDays; index++) {
      const tempDateId = dateId + index * 15
      const tempPriceId = priceId + index * 15
      const date = document.querySelector("span[data-reactid='"+tempDateId+"']")?.innerHTML
      const price = document.querySelector("span[data-reactid='"+tempPriceId+"']")?.innerHTML
      if (date && price)
        result.push({ date, price }) 
    }
    result.unshift({ date: 'Now', price: document.querySelector("span[data-reactid='32']")?.innerHTML! }) 

    return result
  })
  
  return {name: stockCode, detail: stocks}
};