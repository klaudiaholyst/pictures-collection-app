import { useReducer, useEffect } from 'react'
import { useAuth } from "../contexts/AuthContext"
import { database } from "../firebase"

const ACTIONS = {
    SET_FILES: "set-files"
}

function reducer(state, { type, payload }) {
    if (type === ACTIONS.SET_FILES){
        return {
                state,
                files: payload.files
            }
    } else {
        return state
    }
}

export function useFile() {
    const [state, dispatch] = useReducer(reducer, {
        files: []
    })

    const { currentUser } = useAuth()

    useEffect(() => {
        return database.files
            .where("userId", "==", currentUser.uid)
            .orderBy("createdAt")
            .onSnapshot(snapshot => {
                dispatch({
                    type: ACTIONS.SET_FILES,
                    payload: { files: snapshot.docs.map(database.formatDoc) },
                })
            })
    }, [currentUser])

    return state
}