import React, { useState } from 'react'
import { Card, Button, Container } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'

export default function Dashboard() {
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
        <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
            <div className="w-100" style={{ maxWidth: '400px' }}>
                <Card>
                    <Card.Body>
                        <div className="w-100 text-center mt-2"></div>
                        <h2 className="text-center mb-4">Profile</h2>
                        <strong>Email: </strong>{currentUser.email}
                        <Link to="/update-profile" className="btn btn-primary w-100 mt-2">Update Profile</Link>
                    </Card.Body>
                </Card>
                <div className="w-100 text-center mt-2">
                    <Button variant="link" onClick={handleLogout}>Log out</Button>
                </div>
            </div>
        </Container>
    )
}
