import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Shelf from './Shelf'
  
class Shelves extends Component {

  render() {
    const {shelves, books} = this.props;

    return (
      <div className="list-books-content">
      {shelves.map((s) => (
        <Shelf key={s.id} shelfId={s.id} title={s.title} shelves={shelves} books={books.filter(b => b.shelf === s.id)} />
      ))}
      </div>
    )
  }

  static propTypes = {
    shelves: PropTypes.array.isRequired,
    books: PropTypes.array.isRequired,
  }
}

export default Shelves;
