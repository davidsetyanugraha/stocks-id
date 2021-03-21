import React from 'react'
import Link from 'next/link'

type Props = {
  code: string
}

const ListItem = ({ code }: Props) => (
  <Link href="/stocks/[id]" as={`/stocks/${code}`}>
    <a>
      {code}
    </a>
  </Link>
)

export default ListItem
