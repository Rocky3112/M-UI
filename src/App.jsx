import { AppBar, Box, Button, Card, CardActions, CardContent, CardMedia, Container, CssBaseline, Grid, Link, Stack, Toolbar, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CameraIcon from '@mui/icons-material/PhotoCamera';


const Copyright=()=> {
  const currentDate = new Date();

  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  const formattedDate = currentDate.toLocaleDateString('en-BD', options);
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {formattedDate}
      
      {'.'}
    </Typography>
  );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const defaultTheme = createTheme();

 const App =()=> {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar sx={{display:"flex", justifyContent: 'space-between'}} >
         
          <Typography variant="h6" color="inherit" sx={{display:"flex", alignItems: 'center',}} >
          <CameraIcon sx={{ mr: 2 }} />
            Photo Gallery
          </Typography>
          
          <Typography variant="h6" color="inherit" noWrap>
            More Collections
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Photo Album
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae laborum distinctio et sunt! Assumenda quaerat necessitatibus, similique enim distinctio perferendis. Voluptatibus, beatae et.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">See my photo</Button>
              <Button variant="outlined">Secondary action</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
        
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://source.unsplash.com/random?wallpapers"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      wallpapers
                    </Typography>
                    <Typography>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ad impedit incidunt tenetur error voluptate.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Explore</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit natus quas hic. Sequi nobis mollitia alias quibusdam eaque! Nihil, aliquid.
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
export default App;