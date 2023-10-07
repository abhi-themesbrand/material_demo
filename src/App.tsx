import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';

import './App.css';
import { Button } from '@mui/material';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        {/* <Button onClick={}>Toggle</Button> */}

        <Button variant="contained"
          sx={{ bgcolor: 'primary.dark', '&:hover': { bgcolor: 'primary.light' } }}>
          Click Button Primary  </Button>
        <Button variant="contained" color='secondary'> Click Button Secondary </Button>
        <Button variant="contained" color='success'> Click Button Success </Button>
        <Button variant="contained" color='info'> Click Button Info </Button>
        <Button variant="contained" color='warning'> Click Button Warning </Button>
        <Button variant="contained" color='error'> Click Button Error </Button>
      </div>
    </ThemeProvider>
  );
}

export default App;
