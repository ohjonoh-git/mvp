import React, {useState, useEffect} from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete'


const options = ['test', 'test2']

export default function SearchBar () {

  const [searchEntry, setSearchEntry] = useState('');
  const [value, setValue] = useState('');

  return (
    <div className="search">
      <input type="text" placeholder="UNITS?" onChange={e => setSearchEntry(e.target.value)}/>
      {/* <Autocomplete value={value}/> */}
    </div>
  )
}