import React from 'react'
import Layout from '../components/Layout'
import Link from 'next/link'
export default function lost() {
  return (
    <Layout>
        <div className="flex py-20 flex-col gap-6 w-3/5 mx-auto">
            <h1 className="text-4xl">Are you having a character crisis?</h1>
            <h2 className="text-4xl text-pink-600">because you seem lost</h2>
            <h2 data-testid="404-h2" className="text-4xl">Nothing is here</h2>
            <Link data-testid="404-link" className="text-4xl underline text-pink-600" href="/">
                Back it up
            </Link>
        </div>
    </Layout>
  )
}
