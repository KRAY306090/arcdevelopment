import { createTheme } from '@material-ui/core/styles';

const arcBlue = "#0b7289";
const arcOrange = "#ffba60";

const theme = createTheme({
    palette: {
        common: {
            blue: `${arcBlue}`,
            orange: `${arcOrange}`
        },
        primary: {
            main: `${arcBlue}`
        },
        secondary: {
            main: `${arcOrange}`
        }
    }
});

export default theme;