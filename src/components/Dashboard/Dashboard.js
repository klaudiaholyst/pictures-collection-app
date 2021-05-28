import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import Alert from '@material-ui/lab/Alert';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { useAuth } from '../../contexts/AuthContext'

const useStyles = makeStyles((theme) => ({

    paper: {
        marginTop: theme.spacing(8),
        marginBottom: '20px',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'aliceblue',
        boxShadow: '0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)'
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    typography: {
        marginBottom: '10px'
    }
}));

export default function Dashboard() {
    const classes = useStyles();

    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()

    async function handleLogout() {
        setError("")

        try {
            await logout()
            history.push("/")
        } catch {
            setError("Failed to log out")
        }
    }
    return (
        <Container component="main" className={classes.root} maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography className={classes.typography} component="h1" variant="h5">
                    Profile
          </Typography>
                {error && <Alert severity="error">{error}</Alert>}
                <Typography className={classes.typography}><strong>Email: </strong>{currentUser.email}</Typography>
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={() => {
                        history.push('/update-profile')
                    }}
                >
                    Update profile
            </Button>

            </div>
            <Grid container>
                <Grid item xs>
                    <Link onClick={handleLogout} variant="body2">
                        Log out
                </Link>
                </Grid>
            </Grid>
        </Container>
    )
}
