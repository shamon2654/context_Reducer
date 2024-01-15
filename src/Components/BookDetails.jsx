import React from 'react'


const BookDetails = ({ book,dispatch }) => {
  
  return (
    <li onClick={() => { dispatch({ type: 'REMOVE_BOOK', id:book.id }) }}>
          <div className='title'>{ book.title}</div>
          <div className='author'>{book.author}</div>
    </li>
  )
}

export default BookDetails