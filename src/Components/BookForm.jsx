import React, { useContext, useState } from "react"
import { BookContext } from "../Contexts/BookContext"

function BookForm() {
  const { dispatch } = useContext(BookContext);
  const [formData, setFormData] = useState({
    title: "",
    author: "",
  })
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((pre) => ({
      ...pre,
      [name]: value,
    }))
  }
  console.log(formData.title)
  const handleSubmit = (e) => {
    const { title, author } = formData
    e.preventDefault()
    dispatch({ type: 'ADD_BOOK', book: { title, author } })
    setFormData({ title: "", author: "" })
  }
  return (
    <div>
      <form className="from" onSubmit={handleSubmit}>
        <h1>Book Form</h1>
        <label>Title</label>
        <input
          type="text"
          placeholder="book titile"
          onChange={handleChange}
          name="title"
          value={formData.title}
          required
        />
        <label>Author</label>
        <input
          type="text"
          placeholder="book author"
          onChange={handleChange}
          name="author"
          value={formData.author}
          required
        />
        <input type="submit" value="Add" />
      </form>
    </div>
  )
}

export default BookForm
