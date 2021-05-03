import Link from 'next/link'
import Image from 'next/image'

const Navbar = (): JSX.Element => {
  return (
    <nav>
      <div className="logo">
        <Image src="/logo.png" alt="site logo" width={256} height={200} />
      </div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/favs">My Listing</Link>
    </nav>
  )
}

export default Navbar
