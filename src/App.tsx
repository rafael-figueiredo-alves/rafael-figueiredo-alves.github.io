import { AppBar, Paper, SvgIcon } from '@mui/material';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import DevPegasusLogo from './assets/DevPegasus-Logo.svg'

function App() {
  return (
    <>
    <Box sx={{ display: 'flex' }}>
    <CssBaseline /> 
    <AppBar component="nav" position='sticky'>
      <Toolbar disableGutters>
        
      </Toolbar> 
    </AppBar>
    </Box>
    <Paper color='#0B192F' square sx={{ pb: '50px' }}>
    <Box component="main" sx={{ p: 3 }}>

    </Box>
    </Paper>
    </> 
  )
}

export default App
