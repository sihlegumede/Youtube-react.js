import React from 'react';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {Paper, IconButton} from '@mui/material';
import {Search} from '@mui/icons-material';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) =>{
    e.preventDefault();

    if(searchTerm){
      navigate(`/search/${searchTerm}`);

      setSearchTerm('');
    }
  }
  return (
    <Paper component='form' 
    onSubmit={(e) => handleSubmit(e)} 
        sx={{
            borderRadius: 20, 
            border: '1px solid gray',
            backgroundColor: 'black', 
            pl: 2, 
            boxShadow: 'none', 
            mr: {sm: 5},
            width: '25%'
            }}>
        
      <input className='search-bar'
      placeholder='Search...'
      value={searchTerm}
      onChange={(e) => {setSearchTerm(e.target.value)}} 
      style={{
        backgroundColor: 'black',
        color: 'gray',
        width: '84.1%'
      }}/>

      <IconButton type='sumbit' 
          sx={{
            p: '10px',
            color: 'white',
          }}>
        <Search />
      </IconButton>
    </Paper>
  )
}

export default SearchBar