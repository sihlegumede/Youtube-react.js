import React from 'react';
import {Stack} from '@mui/material';
import {Link} from 'react-router-dom';

import {logo} from '../utility/constants';
import {IconButton} from '@mui/material';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import {SearchBar} from './'

const Navbar = () => (
    <Stack direction='row' alignItems='center' p={2} sx={{position: 'sticky', background: 'black', top: 0, justifyContent: 'space-between'}}>
      <Link to='/' style={{display: 'flex', alignItems: 'center'}}>
        <img src={logo} alt="logo" height={80}/>
      </Link>
      <SearchBar />
      <IconButton type='sumbit' 
          sx={{
            p: '10px'
          }}>
        <KeyboardVoiceIcon sx={{color: 'white', p: '5px'}}/>
        <NotificationsIcon sx={{color: 'white', p: '5px'}}/>
        <AccountCircleIcon sx={{color: 'white', p: '5px'}}/>
      </IconButton>
    </Stack>
  );

export default Navbar