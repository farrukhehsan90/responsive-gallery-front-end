import React,  {useState} from 'react'
import { useHistory } from 'react-router-dom'
import './App.css';
import { Form, Button} from 'react-bootstrap'
import { connect } from 'react-redux';
import { login } from '../../Redux/actions/userAction'

function Login({login}) {
    let history = useHistory();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async () => {
        let form = {
            'email': email,
            'password': password
          }
        let { status } = await login(form)
        if(status) {
            history.push('/')
          }
        console.log(status)
    }

    return (
        <div className="App">
        <header className="App-header">
            <div className="login-container">
                <Form>
                    <h1>Login Form</h1>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember me" />
                    </Form.Group>
                    <Button variant="primary" onClick={handleSubmit}>
                        Login
                    </Button>
                    <div>
                        <Button onClick={() => history.push('/signup')} variant="link">Register a new account</Button>
                    </div>
                    <div>
                        <Button onClick={() => history.push('/forgotPassword')} variant="link">Forgot Password</Button>
                    </div>
                </Form>
            </div>
        </header>
        </div>
    );
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
    login
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);