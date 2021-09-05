import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';

function MainMenu(){
    return <div>
        <AppBar position="absolute">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="Menu">
                    <MenuIcon />
                </IconButton>
                <Typography edge="start" variant="h6" style={{flexGrow: 1}}>
                   
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>    
    </div>
}

export default MainMenu;