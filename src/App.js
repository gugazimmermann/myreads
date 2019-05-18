import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import logo from './book.png'
import Shelves from './Shelves';
import SearchButton from './SearchButton';
import Search from './Search';

class BooksApp extends Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    shelves: [
      {
        id: "currentlyReading",
        title: "Current Reading"
      },
      {
        id: "wantToRead",
        title: "Want to Read"
      },
      {
        id: "read",
        title: "Read"
      }
    ],
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }

  handleSearchButton = () => {
    this.setState({ showSearchPage: true })
  }

  handleBack = () => {
    this.setState({ showSearchPage: false })
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <Search handleBack={this.handleBack} />
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <img alt="logo" src={logo} />
              <h1>MyReads</h1>
            </div>
            <Shelves shelves={this.state.shelves} books={this.state.books} />
            <SearchButton handleSearchButton={this.handleSearchButton} />
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
