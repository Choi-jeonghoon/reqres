import { Typography, Toolbar, Box, AppBar } from '@mui/material';

const HeaderContainer = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static'>
          <Toolbar>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Toolbar color='inherit'>Login</Toolbar>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default HeaderContainer;
