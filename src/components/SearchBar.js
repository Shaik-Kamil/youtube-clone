import { useState } from 'react';
import { searchVideo } from './Fetch';
import Video from './Video';

// let key = process.env.REACT_APP_API_KEY;
export default function SearchBar({ videos }) {
  const [search, setSearch] = useState('');
  
  function handleSubmit(e) {
    e.preventDefault();
    const getSubmit = e.target.value;
    if(getSubmit !== ''){
      searchVideo(search)
      setSearch('')
    }
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            name="search-Input"
            placeholder='Enter search here'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          ></input>
        </label>
        <button
          type="submit"
          value="submit"
        >
          Search
        </button>
      </form>
      {videos?.map(e =>{
        return <Video key={e.id}/>
      })}
    </section>
  );
}
