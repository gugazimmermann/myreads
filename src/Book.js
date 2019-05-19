import React from 'react'
import PropTypes from 'prop-types'

const Book = (props) => {
    const {shelves, book, handleChangeShelf} = props;
    const author = (book.authors) ? book.authors.join(', ') : "";
    book.image = (book.imageLinks) ? book.imageLinks.smallThumbnail : ""

    return (
        <li>
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.image})` }}></div>
                    <div className="book-shelf-changer">
                        <select value={book.shelf || ''}  onChange={(event) => handleChangeShelf(book, event)} className="book-shelf-changer-select">
                            <option value="move" disabled>Move to...</option>
                            {shelves.map((s) => (
                            <option key={s.id} value={s.id}>{s.title}</option>
                            ))}
                            <option value="">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{author}</div>
            </div>
        </li>
    )

}

Book.propTypes = {
    shelves: PropTypes.array.isRequired,
    book: PropTypes.object.isRequired,
    handleChangeShelf: PropTypes.func.isRequired
}

export default Book;