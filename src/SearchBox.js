import React from 'react'

const SearchBox = ({SearchChange}) => {
    return (
        <div>
            <input
                type="search"
                placeholder="search for friends"
                className="pa3 ba b--green bg-lightest-blue"
                onChange={SearchChange} />
        </div>
    )
}

export default SearchBox;