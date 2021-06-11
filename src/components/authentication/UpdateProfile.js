import React, { useRef, useState } from 'react'
import { useAuth } from '../../contexts/AuthContext';
import { useHistory } from 'react-router-dom';

import Alert from '@material-ui/lab/Alert';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
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
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

export default function UpdateProfile() {

    const classes = useStyles();

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { currentUser, updateEmail, updatePassword } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match')
        }

        const promises = []
        setLoading(true)
        setError('')

        if (emailRef.current.value !== currentUser.email) {
            promises.push(updateEmail(emailRef.current.value))
        }
        if (passwordRef.current.value) {
            promises.push(updatePassword(passwordRef.current.value))
        }

        Promise.all(promises).then(() => {
            history.push('/')
        }).catch(() => {
            setError('Failed to update account')
        }).finally(() => {
            setLoading(false)
        })

    }
    return (
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Update Profile
          </Typography>
          {error && <Alert severity="error">{error}</Alert>}
          <form className={classes.form} onSubmit={handleSubmit}>
            <TextField
             type="email" 
             inputRef={emailRef}
              variant="outlined"
              margin="normal"
              fullWidth
              required
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              defaultValue={currentUser.email}
              autoFocus
            />
            <TextField
             type="password" 
             inputRef={passwordRef}
              variant="outlined"
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              id="password"
              placeholder="Leave blank to keep the same"
            />
            <TextField
             type="password" 
             inputRef={passwordConfirmRef}
              variant="outlined"
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              id="password-confirm"
              placeholder="Leave blank to keep the same"
            />
            <Button
            disabled={loading}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Update
            </Button>
            
          </form>
          <Grid container>
              <Grid item xs>
                <Link onClick={()=>{
                  history.push('/')}} variant="body2">
                  Cancel
                </Link>
              </Grid>
            </Grid>
        </div>
      </Container>
    )
}
