import React from 'react'
import { ISearchBar } from './types'


const SearchBar: React.FC<ISearchBar> = ({ searchText, onSearchTextChange, }) => {
    return (
        <div>
            <label>
                Search for a gif:
                <input id={"searchBar"}
                    value={searchText}
                    onChange={(event) => { onSearchTextChange(event.target.value) }}
                    placeholder='word'
                />
            </label>
        </div>
    )
}

export default SearchBar