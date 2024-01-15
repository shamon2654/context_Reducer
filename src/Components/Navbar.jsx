import React, { useContext } from 'react'
import { BookContext } from '../Contexts/BookContext'

const Navbar = () => {
    const{books}=useContext(BookContext)
  return (
      <div >
          <h1 className='navbar'>Your Readig list</h1>
          <p>Currently you have {books.length} books</p>
    </div>
  )
}

export default Navbar