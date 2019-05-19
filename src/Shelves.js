import React from 'react'
import PropTypes from 'prop-types'
import Shelf from './Shelf'
  
const Shelves = (props) => {
  const {shelves, books, handleChangeShelf} = props;

  return (
    <div className="list-books-content">
    {shelves.map((s) => (
      <Shelf key={s.id} title={s.title} shelves={shelves} books={books.filter(b => b.shelf === s.id)} handleChangeShelf={handleChangeShelf} />
    ))}
    </div>
  )
}

Shelves.propTypes = {
  shelves: PropTypes.array.isRequired,
  books: PropTypes.array.isRequired,
}

export default Shelves;