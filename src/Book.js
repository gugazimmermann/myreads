import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Book extends Component {

    render() {
        const {handleChangeShelf, shelfId, shelves, book} = this.props;

        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                        <div className="book-shelf-changer">
                            <select value={shelfId}  onChange={(event) => handleChangeShelf(book, event)} className="book-shelf-changer-select">
                                <option value="move" disabled>Move to...</option>
                                {shelves.map((s) => (
                                <option key={s.id} value={s.id}>{s.title}</option>
                                ))}
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors.join(', ')}</div>
                </div>
            </li>
        )
    }

    static propTypes = {
        shelfId: PropTypes.string.isRequired,
        shelves: PropTypes.array.isRequired,
        book: PropTypes.object.isRequired,
    }
}

export default Book;