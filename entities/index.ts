export interface Book {
  id: number
  volumeInfo: {
    title: string
    authors: string[]
    publisher: string
    publishedDate: string
    imageLinks: {
      thumbnail: string
    }
  }
}
