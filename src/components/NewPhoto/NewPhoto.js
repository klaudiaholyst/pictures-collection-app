import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { v4 as uuidV4 } from 'uuid'

import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';

import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


import 'date-fns';

import { useAuth } from '../../contexts/AuthContext'
import { storage, database } from '../../firebase'

import { ProgressBar } from 'react-bootstrap';

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
  uploadBox: {
    marginTop: '20px',
    width: '100%',
    display: 'inline-flex',
    gap: '16px',
    alignItems: 'baseline'
  },
  uploadButton: {
    whiteSpace: 'nowrap'
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    textAlign: 'left',
    color: 'rgb(49, 49, 49)'
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  option: {
    margin: '30px 20px',
    display: 'flex',
    flexBasis: '200px',
    alignContent: 'space-between',
    width: '500px'
  },
  label: {
    width: '200px',
    lineHeight: '40px',
    fontEeight: 'bold',
    fontSize: '18px'
  },
  input: {
    width: '200px',
    padding: '10px',
    border: '2px solid rgb(148, 147, 147)',
    borderRadius: '5px'
  },
  button: {
    display: 'inline-block',
    margin: '20px auto 0 20px',
    width: '120px',
    height: '50px',
    backgroundColor: 'royalblue',
    color: 'white',
    borderRadius: '4px',
    border: 'none',
    fontSize: '15px',
    fontWeight: 'bold',
    letterSpacing: '0.3px'
  },
  buttonCancel: {
    backgroundColor: 'rgb(114 113 113)'
  }
}
));


const NewPhoto = (props) => {

  const classes = useStyles();

  const history = useHistory()

  const initialState = {
    id: new Date().getTime(),
    name: '',
    date: '',
    place: '',
    tags: '',
  };

  const { currentUser } = useAuth()

  const [selectedFile, setSelectedFile] = useState(null);

  const [inputState, setInputState] = useState(initialState);

  const [uploadingFiles, setUploadingFiles] = useState([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();

    const id = uuidV4()
    setSnackbarOpen(true);
    setUploadingFiles(prevUploadingFiles => [
      ...prevUploadingFiles,
      { id: id, name: selectedFile.name, progress: 0, error: false }
    ])
    const uploadTask = storage.ref(`files/${currentUser.uid}/${selectedFile.name}--${uuidV4()}`)
      .put(selectedFile)

    uploadTask.on('state_changed',
      snapshot => {
        const progress = snapshot.bytesTransferred / snapshot.totalBytes
        setUploadingFiles(prevUploadingFiles => {
          return prevUploadingFiles.map(uploadFile => {
            if (uploadFile.id === id) {
              return { ...uploadFile, progress: progress }
            }
            return uploadFile
          })
        })

      },
      (error) => {
        console.log(error);
        alert(`${error}. Something went wrong!`)
      },
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then(url => {
          console.log(url)
          database.files.add({
            url: url,
            createdAt: database.getCurrentTimestamp(),
            userId: currentUser.uid,
            name: inputState.name,
            date: inputState.date,
            place: inputState.place,
            tags: inputState.tags,

          })
          setInputState(() => initialState);
          setSelectedFile(null);
        })
      })
      ;
  };

  const newValueHandler = (event) => {
    const newValue = event.target.value;
    setInputState((prevInputState) => ({
      ...prevInputState,
      [event.target.name]: newValue,
    }));
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Add new photo
          </Typography>
          <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.uploadBox}><Button
              className={classes.uploadButton}
              variant="contained"
              component="label"
              htmlFor="url"
            >
              Choose a photo
                <input
                type="file"
                hidden
                name="url"
                id="url"
                onChange={(e) => setSelectedFile(e.target.files[0])}
                required
              />

            </Button>
              <Typography>{selectedFile ? selectedFile.name : 'No photo chosen.'}</Typography></div>

            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              label="Name"
              name="name"
              id="name"
              value={inputState.name}
              onChange={newValueHandler}
              required
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="date"
              label="Date of taking the photo"
              type="date"
              name="date"
              value={inputState.date}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={newValueHandler}
              required
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              label="Place"
              name="place"
              id="place"
              value={inputState.place}
              onChange={newValueHandler}
              required
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              label="Tags"
              name="tags"
              id="tags"
              value={inputState.tags}
              onChange={newValueHandler}
              required
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Add
            </Button>

          </form>
          <Grid container>
            <Grid item xs>
              <Link onClick={() => {
                history.push('/')
              }} variant="body2">
                Cancel
                </Link>
            </Grid>
          </Grid>
        </div>
      </Container>
      {uploadingFiles.length > 0 &&
        <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
          <MuiAlert elevation={6} variant="filled" onClose={handleSnackbarClose} severity="info">
            {uploadingFiles.map(file => (
              <div key={file.id}>
                <Typography>
                  {file.name}
                </Typography><ProgressBar
                  animated={!file.error}
                  variant={file.error ? 'danger' : 'primary'}
                  now={file.error ? 100 : file.progress * 100}
                  label={
                    file.error ? "Error" : `${Math.round(file.progress * 100)}%`
                  }
                />
              </div>
            ))}
          </MuiAlert>
        </Snackbar>}
    </>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onPostAdded: (inputState) => dispatch({
      type: 'ADD_PHOTO',
      payload: inputState
    })
  }
}

export default connect(null, mapDispatchToProps)(NewPhoto);