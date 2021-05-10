import React from 'react';
import { Link } from 'react-router-dom';

import { useFile } from '../../hooks/useFile';
import Photos from '../Photos/Photos';
import AddFileButton from '../AddFileButton'
import File from '../File'

import styles from './PhotosList.module.css';

const PhotosList = () => {
  const { files } = useFile()
  console.log(files)
  return (
    <div>

      {files.length > 0 && (
        <div className="d-flex flex-wrap">
          {files.map(file => (
            <div key={file.id} style={{ maxWidth: "250px" }}
              className="p-2">
              <File file={file} />
            </div>
          ))}
        </div>
      )}

      <Link
        to='/new-photo'
        style={{ textDecoration: 'none' }}
        className={styles.Button}
      >
        Add new
      </Link>
      <AddFileButton />

      <main className={styles.PhotosList}>
        <Photos />
      </main>
    </div>
  );
};
export default PhotosList;
