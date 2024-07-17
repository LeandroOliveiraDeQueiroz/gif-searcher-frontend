import { useCallback, useState } from 'react'
import './App.css'
import SearchBar from './components/searchBar';
import { Grid } from '@giphy/react-components';
import { GiphyFetch } from '@giphy/js-fetch-api';
import useDebounce from './hooks/useDebounce';


const gf = new GiphyFetch(import.meta.env.VITE_GIPHY_API_KEY);
const PAGE_SIZE = 10;

function App() {
  const [searchText, setSearchText] = useState("");
  const searchDebouncedValue = useDebounce(searchText, 800);

  const handleSearchTextChange = (value: string) => {
    setSearchText(value);
  }

  const handleSearch = useCallback(async (offset: number) => {
    return gf.search(searchDebouncedValue, { sort: "relevant", limit: PAGE_SIZE, offset: offset });
  }, [searchDebouncedValue]);


  return (
    <>
      <SearchBar onSearchTextChange={handleSearchTextChange} searchText={searchText} />

      <Grid width={1400} columns={5} fetchGifs={handleSearch} key={searchDebouncedValue} />
    </>
  )
}

export default App
