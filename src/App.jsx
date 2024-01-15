import React from "react"
import Navbar from "./Components/Navbar"
import BookList from "./Components/BookList"
import BookForm from "./Components/BookForm"

const App = () => {
  return (
    <div>
      <Navbar />
      <BookList />
      <BookForm/>
    </div>
  )
}

export default App
