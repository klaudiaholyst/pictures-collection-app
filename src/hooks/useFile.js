import { useReducer, useEffect } from 'react'
import { useAuth } from "../contexts/AuthContext"
import { database } from "../firebase"

const ACTIONS = {
    SET_FILES: "set-files"
}

function reducer(state, { type, payload }) {
    switch (type) {
        case ACTIONS.SET_FILES:
            return {
                state,
                files: payload.files
            }
        default:
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