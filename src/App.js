import React, {Component} from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import logo from './book.png'
import Shelves from './Shelves'
import SearchButton from './SearchButton'
import Search from './Search'
import BookDetails from './BookDetails';

class BooksApp extends Component {
  state = {
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
    books: [],
    searchBooks: []
  }

  componentDidMount() {
    this.getAll()
  }

  getAll = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }

  handleChangeShelf = (book, event) => {
    let value = (event.target.value) ? event.target.value : "none";
    BooksAPI.update(book, value).then(r => {
      this.getAll();
      if (value !== "none") {
        let newShelf = this.state.shelves.find(s => s.id === value);
        alert(`${book.title} added to the shelf ${newShelf.title}`);
      } else {
        alert(`${book.title} removed`);
      }
    })
  }

  handleClearSearch = () => {
    this.setState({ searchBooks: [] })
  }

  handleSearch = (query) => {
    BooksAPI.search(query).then(searchBooks => {
      if (searchBooks.length > 0) {
        for (let index in searchBooks) {
          let booksExists = this.state.books.find(bk => searchBooks[index].id === bk.id);
          if (booksExists) searchBooks[index] = booksExists
        }
        this.setState({ searchBooks: searchBooks })
      } else {
        this.handleClearSearch();
      }
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <img alt="logo" src={logo} />
              <h1>MyReads</h1>
            </div>
            <Shelves shelves={this.state.shelves} books={this.state.books} handleChangeShelf={this.handleChangeShelf} />
            <SearchButton />
          </div>
        )} />
        <Route path='/search' render={() => (
          <Search
            shelves={this.state.shelves}
            searchBooks={this.state.searchBooks}
            handleClearSearch={this.handleClearSearch}
            handleSearch={this.handleSearch}
            handleChangeShelf={this.handleChangeShelf}
          />
        )} />
        <Route path='/book/:bookId' component={BookDetails} />
      </div>
    )
  }
}

export default BooksApp
