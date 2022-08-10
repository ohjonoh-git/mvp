import React, {useState, useEffect} from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete'


const options = ['test', 'test2']

export default function Top() {

  const [searchEntry, setSearchEntry] = useState('');
  const [value, setValue] = useState('');

  return (
    <div className="top">
      <h1>MORT PLEASE</h1>
    </div>
  )
}