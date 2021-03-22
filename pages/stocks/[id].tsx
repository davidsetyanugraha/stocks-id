import { GetStaticProps, GetStaticPaths } from 'next'

import { ChartData, Stock } from '../../interfaces'
import { stockList } from '../../utils/constant'
import Layout from '../../components/Layout'
import Chart from '../../components/Chart'

import StockListDetail from '../../components/StockListDetail'

type Props = {
  stock?: Stock
  errors?: string
}
const normalize = (price:string) => {
  return price.replace(".00", '').replace(",", '')
}
const StaticPropsDetail = ({ stock, errors }: Props) => {
  if (errors) {
    return (
      <Layout title="Error | Next.js + TypeScript Example">
        <p>
          <span style={{ color: 'red' }}>Error:</span> {errors}
        </p>
      </Layout>
    )
  }
  const dates = stock?.detail.map(d => d.date).reverse()
  const prices = stock?.detail.map(d => normalize(d.price)).reverse()
  console.log(prices)

  const chartData = {
    labels: dates,
    datasets: [
      {
        label: 'Stock prices for ' + stock?.name,
        data: prices,
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
    ]
  } as ChartData

  return (
    <Layout
      title={`${
        stock ? stock.name : 'Stock Detail'
      } | Next.js + TypeScript Example`}
    >
      <Chart chartData={chartData}></Chart>
      {stock && <StockListDetail stock={stock} />}
      
    </Layout>
  )
}

export default StaticPropsDetail

export const getStaticPaths: GetStaticPaths = async () => {
  // Get the paths we want to pre-render based on users
  const paths = stockList.map((name) => ({
    params: { id: name },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const id = params?.id
    const res = await fetch(`/api/stocks/${id}`)
    const stock: Stock = await res.json()

    return { props: { stock } }
  } catch (err) {
    return { props: { errors: err.message } }
  }
}
