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
                <Typography variant="h6">
                   
                </Typography>
                <Button color="inherit">Login</Button>
                <Button color="inherit">Login</Button>
                <Button variant="contained" color="secondary">Login</Button>
            </Toolbar>
        </AppBar>    
    </div>
}

export default MainMenu;