import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export const Home = (): JSX.Element => (
  <>
    <Head>
      <title>MY FAV LIST | Home</title>
      <meta name="keywords" content="favs" />
    </Head>
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi
        impedit suscipit architecto, odio inventore nostrum non neque dicta.
        Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem
        nobis odit.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi
        impedit suscipit architecto, odio inventore nostrum non neque dicta.
        Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem
        nobis odit.
      </p>
      <Link href="/favs">
        <a className={styles.btn}>See My Favorites List</a>
      </Link>
    </div>
  </>
)

export default Home
