import { GetStaticProps } from 'next'
import Link from 'next/link'

import Layout from '../../components/Layout'
import StockList from '../../components/StockList'
import { stockList } from '../../utils/constant'

type Props = {
  stockCodes: string[]
}

const WithStaticProps = ({ stockCodes }: Props) => (
  <Layout title="Users List | Next.js + TypeScript Example">
    <h1>Stocks List</h1>
    <StockList stockCodes={stockCodes} />
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const stockCodes = stockList
  return { props: { stockCodes } }
}

export default WithStaticProps
