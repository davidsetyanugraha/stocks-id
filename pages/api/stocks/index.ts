import puppeteer from 'puppeteer';
import { NextApiRequest, NextApiResponse } from 'next'

import { stockList } from '../../../utils/constant';
import { runAllScrapping } from '../../../utils/scrapper';

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    //scrape stock price
    const stockUrl = `https://finance.yahoo.com/quote/`
    const stocksCode = stockList

    const browser = await puppeteer.launch()
    const responses = await Promise.all(await runAllScrapping(stockUrl, stocksCode, browser))
    await browser.close()

    console.log(`[LOG] returning ${JSON.stringify(responses)}`)
    res.status(200).json(responses)
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler