import { GetStaticProps, GetStaticPaths } from 'next'
import Image from 'next/image'
import { Book } from '../../entities'

// interface Book {
// id: number
// volumeInfo: {
// title: string
// }
// }

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

  return {
    props: { book: data },
  }
}

const Detail = ({ book }: { book: Book }): JSX.Element => (
  <div>
    <h1>{book.volumeInfo.title}</h1>
    <h1>{book.volumeInfo.authors}</h1>
    <h1>{book.volumeInfo.publisher}</h1>
    <h1>{book.volumeInfo.publishedDate}</h1>
    <Image
      src={book.volumeInfo.imageLinks.thumbnail}
      width={200}
      height={270}
    ></Image>
  </div>
)

export default Detail
