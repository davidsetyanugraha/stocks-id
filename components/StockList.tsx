import * as React from 'react'
import StockListItem from './StockListItem'

type Props = {
  stockCodes: string[]
}

const StockList = ({ stockCodes }: Props) => (
  <ul>
    {stockCodes.map((code) => (
      <li key={code}>
        <StockListItem code={code} />
      </li>
    ))}
  </ul>
)

export default StockList
