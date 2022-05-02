import React, { Component } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'

export class FormHandling extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    handleEmailChange(ev) {
        this.setState({
            email: ev.target.value
        })
    }

    handlePasswordChange(ev) {
        this.setState({
            password: ev.target.value
        })
    }

    handleSubmit(ev) {
        ev.preventDefault();
        // have to do api call here 
        // this.state
    }

    render() {
        return (
            <>
                <div className="App"><b>FormHandling</b></div>
                <Container>
                    <Row>
                        <Col></Col>
                        <Col>
                            <Form onSubmit={(e) => this.handleSubmit(e)}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" name="email" onChange={(e) => this.handleEmailChange(e)} placeholder="Enter email" />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" name="password" onChange={(e) => this.handlePasswordChange(e)} placeholder="Password" />
                                </Form.Group>

                                <Button variant="primary" type="submit" onClick={(e) => this.handleSubmit(e)}>
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                        <Col></Col>
                    </Row>
                </Container>

            </>

        )
    }
}

export default FormHandling