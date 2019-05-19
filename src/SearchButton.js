import React from 'react'
import { Link } from 'react-router-dom'

const SearchButton = () => {
    return (
        <div className="open-search">
            <Link className='open-search-link' to="/search">Add a book</Link>
        </div>
    )
}

export default SearchButton;