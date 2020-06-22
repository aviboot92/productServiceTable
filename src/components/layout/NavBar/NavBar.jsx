import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    logo: {
        maxWidth: 160,
        cursor: 'pointer'
    },
    title: {
        flexGrow: 1,
    }
}));

export default function ButtonAppBar(props) {
    const classes = useStyles();
    return (
        <div data-testid="navBar" className={classes.root}>
            <AppBar position='static'>
                <Toolbar>
                    <Toolbar>
                        <img
                            src={require("./../../../img/Banner Logo 280x60.png")}
                            alt="logo"
                            className={classes.logo}/>
                    </Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        {props.label}
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}