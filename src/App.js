import { AppBar, Container, CssBaseline, Toolbar, Typography } from '@mui/material';
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
        <div>
          <Container maxWidth='sm'>
            <Typography variant='h3' align='center' color="textPrimary" gutterBottom>
              Photo Album

            </Typography>
            <Typography variant='h5' align='center' color="textSecondary" paragraph>
            An album is a cohesive collection of audio recordings, typically by a single artist or group, presented as a unified body of work. It serves as a curated journey through musical expression, offering listeners a diverse range of emotions, themes, and sonic landscapes.

            </Typography>

          </Container>
        </div>
      </main>
      
    </div>
  );
}

export default App;
