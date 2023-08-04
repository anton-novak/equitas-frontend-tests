import styles from './topbar.module.css';
import { AppBar } from '@mui/material';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import { useState } from 'react';
import { createTheme, ThemeProvider, alpha, getContrastRatio } from '@mui/material/styles';

export default function TopBar({ numLaunches }) {
    const [anchorEl, setAnchorEl] = useState(null);

    function handleClick(event) {
        setAnchorEl(event.currentTarget);
    };

    function handleClose() {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    // trying out theme creaton in MUI on a button
    const pinkBase = '#FF006E';
    const pinkMain = alpha(pinkBase, 0.7);

    const theme = createTheme({
        palette: {
            pink: {
                main: pinkMain,
                light: alpha(pinkBase, 0.5),
                dark: alpha(pinkBase, 0.9),
                contrastText: getContrastRatio(pinkMain, '#fff') > 3 ? '#fff' : '#111',
            },
        },
    });

    return (
        <>
            <AppBar
                position='static'
                className={styles.topBar}
            >
                <RocketLaunchIcon fontSize='large' />
                <Typography
                    variant='h5'
                    component='h5'
                    align='center'
                    sx={{ verticalAlign: 'middle' }}
                >SpaceX Launches Data: {numLaunches} succesful launches and going
                </Typography>
                <ThemeProvider theme={theme}>
                    <Button
                        variant='contained'
                        onClick={handleClick}
                        disableElevation
                        id='howToButton'
                        color='pink'
                    >How to use
                    </Button>
                </ThemeProvider>
                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right'
                    }}
                    transformOrigin={{
                        horizontal: 'right',
                        vertical: 'top'
                    }}
                >
                    <Typography
                        sx={{ p: 2 }}
                        width='15em'
                    >
                        In this app you can browse data on succesful SpaceX launches, starting from the latest. Browse the table, click on a row to get additional information about the launch and some cool pics 🚀

                    </Typography>
                </Popover>
            </AppBar>
        </>
    )
};
