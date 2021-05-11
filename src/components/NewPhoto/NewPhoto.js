import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom'
import { v4 as uuidV4 } from 'uuid'

import { useAuth } from '../../contexts/AuthContext'
import { storage, database } from '../../firebase'

import styles from './NewPhoto.module.css';
import { ProgressBar } from 'react-bootstrap';

const NewPhoto = (props) => {
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

  const submitHandler = (event) => {
    event.preventDefault();
    console.log('uploading a photo with details')

    const id = uuidV4()

    setUploadingFiles(prevUploadingFiles => [
      ...prevUploadingFiles,
      { id: id, name: selectedFile.name, progress: 0, error: false }
    ])
    const uploadTask = storage.ref(`files/${currentUser.uid}/${selectedFile.name}`)
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
      () => { },
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
      .catch(error => {
        console.log(error);
        alert(`${error}. Coś poszło nie tak. Spróbuj jeszcze raz.`)
      });

    // axiosInstance.post('/posts.json', inputState)
    //   .then(response => {
    //     props.onPostAdded(inputState);
    //     setInputState(() => initialState);
    //     setSelectedFile(null);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //     alert(`${error}. Coś poszło nie tak. Spróbuj jeszcze raz.`)
    //   });
    ;
  };

  const newValueHandler = (event) => {
    const newValue = event.target.value;
    setInputState((prevInputState) => ({
      ...prevInputState,
      [event.target.name]: newValue,
    }));
  };

  return (
    <>
      <form className={styles.Form} onSubmit={submitHandler}>
        <button className={styles.Button} type="submit">
          Save
      </button>

        <Link to="/">
          <button className={styles.Button}>Cancel</button>
        </Link>
        <div className={styles.Option}>
          <label className={styles.Label} htmlFor="name">
            Name
        </label>
          <input
            className={styles.Input}
            type="text"
            name="name"
            id="name"
            value={inputState.name}
            onChange={newValueHandler}
            required
          ></input>
        </div>
        <div className={styles.Option}>
          <label className={styles.Label} htmlFor="url">
            URL
        </label>
          <input
            className={styles.Input}
            name="url"
            id="url"
            type="file"
            onChange={(e) => setSelectedFile(e.target.files[0])}
            required
          ></input>
        </div>
        <div className={styles.Option}>
          <label className={styles.Label} htmlFor="date">
            Date
        </label>
          <input
            className={styles.Input}
            type="date"
            name="date"
            id="date"
            placeholder=""
            required
            onChange={newValueHandler}
            value={inputState.date}
          ></input>
        </div>
        <div className={styles.Option}>
          <label className={styles.Label} htmlFor="place">
            Place
        </label>
          <input
            className={styles.Input}
            type="text"
            name="place"
            id="place"
            onChange={newValueHandler}
            required
            value={inputState.place}
          ></input>
        </div>
        <div className={styles.Option}>
          <label className={styles.Label} htmlFor="tags">
            Tags
        </label>
          <input
            className={styles.Input}
            type="text"
            name="tags"
            id="tags"
            required
            onChange={newValueHandler}
            value={inputState.tags}
          ></input>
        </div>
      </form>
      {uploadingFiles.length > 0 &&
        ReactDOM.createPortal(
          <div style={{
            position: 'absolute',
            bottom: '1rem',
            right: '1rem',
            maxWidth: '250px'
          }}>
            {uploadingFiles.map(file => (
              <div key={file.id}>
                <p
                  closeButton={file.error}
                  className="text-truncate w-100 d-block">
                  {file.name}
                </p>
                <div>
                  <ProgressBar
                    animated={!file.error}
                    variant={file.error ? 'danger' : 'primary'}
                    now={file.error ? 100 : file.progress * 100}
                    label={
                      file.error ? "Error" : `${Math.round(file.progress * 100)}%`
                    }
                  />
                </div>
              </div>
            ))}
          </div>, document.body
        )}
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
