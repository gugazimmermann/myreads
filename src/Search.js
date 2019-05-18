import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Book from './Book'

class Search extends Component {

    constructor(props) {
        super(props)

        this.state = {
            query: ''
        }
    }

    updateQuery = (query) => {
        this.setState(() => ({
            query: query
        }))
        if (query) {
            this.props.handleSearch(query.toLowerCase());
        } else {
            this.props.handleClearSearch();
        }
    }

    componentDidMount() {
        this.props.handleClearSearch();
    }

    render() {
        const {shelves, searchBooks, handleChangeShelf} = this.props;

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className='close-search' to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            value={this.state.query}
                            onChange={(event) => this.updateQuery(event.target.value)}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                    {searchBooks.length > 0  ? (
                        searchBooks.map((b) => (
                            <Book key={b.id.toString()} shelves={shelves} book={b} handleChangeShelf={handleChangeShelf} />
                        ))
                    ) : (
                        this.state.query ? (
                            <div>No Books found with <strong>{this.state.query}</strong></div>
                        ) : (
                            <div>Please, type the search above</div>
                        )
                    )}
                    </ol>
                </div>
            </div>
        )
    }

    static propTypes = {
        shelves: PropTypes.array.isRequired,
        searchBooks: PropTypes.array.isRequired,
        handleClearSearch: PropTypes.func.isRequired,
        handleSearch: PropTypes.func.isRequired,
        handleChangeShelf: PropTypes.func.isRequired,
    }
}

export default Search;