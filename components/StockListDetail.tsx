import * as React from 'react'

import { Stock } from '../interfaces'

type ListDetailProps = {
  stock: Stock
}

const StockListDetail = ({ stock: stock }: ListDetailProps) => (
  <div>
    <h1>Detail for {stock.name}</h1>
    <p>{JSON.stringify(stock.detail)}</p>
  </div>
)

export default StockListDetail
