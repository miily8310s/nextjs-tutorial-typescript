import Link from 'next/link'
import React from 'react'
import { redirectToHome } from '../hooks/redirectToHome'

export const NotFound = (): JSX.Element => {
  redirectToHome()

  return (
    <div className="not-found">
      <h1>Oops...</h1>
      <h2>That page not found</h2>
      <p>
        Back to
        {/* Link tag can't have only 1 element */}
        <Link href="/">
          <a> Home Page </a>
        </Link>
        is 3 seconds
      </p>
    </div>
  )
}

export default NotFound
