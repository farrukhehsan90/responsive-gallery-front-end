import React,  {useState} from 'react'
import { useHistory, useParams } from 'react-router-dom'
import './index.css';
import { Form, Button} from 'react-bootstrap'
import { connect } from 'react-redux';
import { forgotPassword } from '../../Redux/actions/userAction'

function ForgotPassword({forgotPassword}) {
    let params = useParams()
    console.log('params', params)
    let history = useHistory();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async () => {
        let form = {
            'email': email,
          }
        let { status } = await forgotPassword(form)
        if(status) {
            // history.push('/')
          }
        console.log(status)
    }

    return (
        <div className="App">
        <header className="App-header">
            <div className="login-container">
                <Form>
                    <h1>Forgot Password</h1>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll share reset password link your email to change password.
                        </Form.Text>
                    </Form.Group>
                    <Button variant="primary" onClick={handleSubmit}>
                        Submit
                    </Button>
                </Form>
            </div>
        </header>
        </div>
    );
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
    forgotPassword
}

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);