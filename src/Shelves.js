  
  import React, {Component} from 'react'
import Shelf from './Shelf';
  
  class Shelves extends Component {

    render() {
      return (
        <div className="list-books-content">
          {this.props.shelves.map((s) => (
            <Shelf key={s.id} title={s.title} books={this.props.books.filter(b => b.shelf === s.id)} />
          ))}
      </div>
    )
  }
}

export default Shelves;
