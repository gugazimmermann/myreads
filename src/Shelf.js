import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

const Shelf = (props) => {
    const {title, shelves, books, handleChangeShelf} = props;
    
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                {books.map((b) => (
                    <Book key={b.id.toString()} shelves={shelves} book={b} handleChangeShelf={handleChangeShelf} />
                ))}
                </ol>
            </div>
        </div>
    )
}

Shelf.propTypes = {
    title: PropTypes.string.isRequired,
    shelves: PropTypes.array.isRequired,
    books: PropTypes.array.isRequired,
}

export default Shelf;
