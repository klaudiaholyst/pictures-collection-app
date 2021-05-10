import React from 'react'

import { useAuth } from '../contexts/AuthContext'
import { storage, database } from '../firebase'
import { faFileUpload } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function AddFileButton() {
    const { currentUser } = useAuth()

    function handleUpload(e) {
        const file = e.target.files[0]
        if (file == null) return

        const uploadTask = storage.ref(`files/${currentUser.uid}/${file.name}`)
            .put(file)

        uploadTask.on('state_changed',
            snapshot => { },
            () => { },
            () => {
                uploadTask.snapshot.ref.getDownloadURL().then(url => {
                    console.log(url)
                    database.files.add({
                        url: url,
                        name: file.name,
                        createdAt: database.getCurrentTimestamp(),
                        userId: currentUser.uid,
                    })
                })
            })
    }
    return (
        <label className="btn btn-outline-success btn-sm m-0 mr-2">
            <FontAwesomeIcon icon={faFileUpload} />
            <input type="file" onChange={handleUpload} style={{ opacity: 0, position: "absolute", left: "-9999px" }} />
        </label>
    )
}
