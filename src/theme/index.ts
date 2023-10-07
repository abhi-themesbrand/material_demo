import { createTheme } from '@mui/material/styles';

import palette from "./palette";
import typography from "./typography";

let mode = 'light';

const theme = createTheme({
    palette: palette(mode),
    typography
});

export default theme;