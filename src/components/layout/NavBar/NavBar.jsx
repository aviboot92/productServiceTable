import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    logo: {
        maxWidth: 160,
        cursor: 'pointer'
      },
}));

export default function ButtonAppBar() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar>
                <Toolbar>
                    <Toolbar>
                        <img src={require("./../../../img/Banner Logo 280x60.png")} alt="logo" className={classes.logo}/>
                    </Toolbar>
                </Toolbar>
            </AppBar>
        </div>
    );
}