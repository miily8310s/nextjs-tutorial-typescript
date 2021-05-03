import Link from 'next/link'

export const NotFound = (): JSX.Element => (
  <div className="not-found">
    <h1>Oops...</h1>
    <h2>That page not found</h2>
    <p>
      Back to
      <Link href="/">
        <a> Home Page</a>
      </Link>
    </p>
  </div>
)

export default NotFound
