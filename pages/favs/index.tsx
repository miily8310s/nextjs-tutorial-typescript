import { GetStaticProps } from 'next'
import styles from '../../styles/Favs.module.css'

interface Book {
  id: number
  volumeInfo: {
    title: string
  }
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(
    'https://www.googleapis.com/books/v1/volumes?q=TypeScript'
  )
  const data = await res.json()
  return {
    props: { books: data.items },
  }
}

const Favs = ({ books }: { books: Book[] }): JSX.Element => {
  return (
    <div>
      <h1>All My Favs</h1>
      {books.map((book) => (
        <div key={book.id}>
          <a className={styles.book}>
            <h3>{book.volumeInfo.title}</h3>
          </a>
        </div>
      ))}
    </div>
  )
}

export default Favs
