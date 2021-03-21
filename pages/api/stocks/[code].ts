import puppeteer from 'puppeteer';
import { NextApiRequest, NextApiResponse } from 'next'
import { runSingleScrapping } from '../../../utils/scrapper';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { code },
  } = req

   try {
    //scrape stock price
    const stockUrl = `https://finance.yahoo.com/quote/`
    const stocksCode = code as string

    const browser = await puppeteer.launch()
    const responses = await runSingleScrapping(stockUrl, stocksCode, browser)
    await browser.close()

    console.log(`[LOG] returning ${JSON.stringify(responses)}`)
    res.status(200).json(responses)
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}