import React, {Component} from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import logo from './book.png'
import Shelves from './Shelves'
import SearchButton from './SearchButton'
import Search from './Search'

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
    books: []
  }

  componentDidMount() {
    this.getAll();
  }

  getAll = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }

  handleChangeShelf = (book, event) => {
    BooksAPI.update(book, event.target.value).then(r => {
      this.getAll()
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
        <Route path='/search' component={Search} />
      </div>
    )
  }
}

export default BooksApp
