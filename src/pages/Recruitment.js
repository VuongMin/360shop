import React from 'react'
import { Alert, Container } from 'react-bootstrap'

export const Recruitment = () => {
    return (
        <Container>
            <Alert variant="danger">
                <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                <p>
                   Không có tin tuyển dụng !!
                </p>
            </Alert>
        </Container>
    )
}
