import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class Shelf extends Component {

    render() {
        const {title, shelves, books, handleChangeShelf} = this.props;
        
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

    static propTypes = {
        title: PropTypes.string.isRequired,
        shelves: PropTypes.array.isRequired,
        books: PropTypes.array.isRequired,
    }
}

export default Shelf;
