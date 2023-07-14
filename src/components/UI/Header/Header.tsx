import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Header = (): React.JSX.Element => {
  return (
    <>
  
      <Box sx={{ flexGrow: 1, marginBottom: '50px' }}>
        <AppBar position="static">
          <Toolbar>
            <Link to='/level' style={{textDecoration: 'none', marginRight: '80px'}}>
              <Typography variant="h4" component="div" sx={{ flexGrow: 1, color: 'white' }}>
                Уровни
              </Typography>
            </Link>

            <Link to='/bg'  style={{textDecoration: 'none'}}>
              <Typography variant="h4" component="div" sx={{ flexGrow: 1, color: 'white'}}>
                Фоны
              </Typography>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Header