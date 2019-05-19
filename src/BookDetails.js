import React from 'react'
import { Link } from 'react-router-dom'

const BookDetails = (props) => {
    const {shelves, handleChangeShelf} = props;
    const book = props.location.state.book;
    book.author = (book.authors) ? book.authors.join(', ') : "";
    book.image = (book.imageLinks) ? book.imageLinks.smallThumbnail : ""
    book.avgrating = (book.averageRating) ? book.averageRating : "-"
    console.log(book);
    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link className='close-search' to="/">Back</Link>
                <div className="search-books-input-wrapper">
                    <h1>Book Detail</h1>
                </div>
            </div>
            <div className="book-details-content">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.image})` }}></div>
                <div className="book-details">
                    <h3 className="book-details-title">{book.title}: <small>{book.subtitle}</small></h3>
                    <p className="book-details-text">{book.author}</p>
                    <p className="book-details-text">
                        Published Date: <strong>{book.publishedDate} </strong> 
                        / Pages: <strong>{book.pageCount} </strong> 
                        / Average Rating: <strong>{book.avgrating} </strong>
                    </p>
                    <div className="book-details-text">
                    {book.description}
                    </div>
                </div>
            </div>
        </div>
    )

}

export default BookDetails;