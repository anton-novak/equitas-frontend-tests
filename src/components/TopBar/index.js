import styles from './topbar.module.css';
import { AppBar } from '@mui/material';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import { useState } from 'react';

export default function TopBar() {
    const [anchorEl, setAnchorEl] = useState(null);

    function handleClick(event) {
        setAnchorEl(event.currentTarget);
    };

    function handleClose() {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <>
            <AppBar
                position='static'
                className={styles.topBar}
            >
                <div
                    className={styles.logoBlock}
                >
                    <RocketLaunchIcon fontSize='large' />
                    <Typography
                        variant='h5'
                        component='h5'
                    >SpaceX Launches Data
                    </Typography>
                </div>
                <Button
                    variant='contained'
                    onClick={handleClick}
                    disableElevation
                >How to use
                </Button>
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
                        vertical: 'bottom'
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
