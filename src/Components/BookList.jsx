import React, { useContext } from "react"
import { BookContext } from "../Contexts/BookContext"
import BookDetails from "./BookDetails"

const BookList = () => {
  const { books ,dispatch} = useContext(BookContext)
  return books.length ? (
      <div className="book-list">
          {books.map((book) => (
              <ul key={book.id}>
              <BookDetails book={book} dispatch={dispatch} />
             </ul>
          ))}
      
    </div>
  ) : (
      <div className="empty">No Books To Read</div>
  )
}

export default BookList
