import { AppBar, CssBaseline, Toolbar, Typography } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';

function App() {
  return (
    <div>
      <CssBaseline>
        <AppBar position='relative'>
          <Toolbar>
            <PhotoCamera></PhotoCamera>
            <Typography variant='h5'>
                Photo Gallery
            </Typography>
          </Toolbar>

        </AppBar>
      </CssBaseline>
      <main>
        
      </main>
      
    </div>
  );
}

export default App;
