import { GetStaticProps, GetStaticPaths } from 'next'
import Image from 'next/image'
import { Book } from '../../entities'
import styles from '../../styles/Favs.module.css'

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(
    'https://www.googleapis.com/books/v1/volumes?q=TypeScript'
  )
  const data = await res.json()

  const paths = data.items.map((book: Book) => {
    return {
      params: { id: book.id.toString() },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params.id
  const res = await fetch('https://www.googleapis.com/books/v1/volumes/' + id)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { book: data },
  }
}

const Detail = ({ book }: { book: Book }): JSX.Element => (
  <div className={styles.book}>
    <div className={styles.book_detail}>
      <h1>{book.volumeInfo.title}</h1>
      <div className={styles.book_detail_publish}>
        <p>{book.volumeInfo.authors}</p>
        <p>{book.volumeInfo.publisher}</p>
        <p>{book.volumeInfo.publishedDate}</p>
      </div>
    </div>
    <Image
      src={
        book.volumeInfo.imageLinks.thumbnail
          ? book.volumeInfo.imageLinks.thumbnail
          : ''
      }
      width={200}
      height={270}
    ></Image>
  </div>
)

export default Detail
