import React,  {useState} from 'react'
import { useHistory, useParams } from 'react-router-dom'
import './index.css';
import { Form, Button} from 'react-bootstrap'
import { connect } from 'react-redux';
import { resetPassword } from '../../Redux/actions/userAction'

function ChangePassword({resetPassword}) {
    let params = useParams()
    console.log('params', params)
    let history = useHistory();
    const [confirmPassword, setconfirmPassword] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async () => {
        const { userId, token } = params
        let form = {
            'password': password,
          }
        if(password == confirmPassword) {
            let { status } = await resetPassword(form, userId, token)
            if(status) {
                history.push('/login')
            }
        }else {
            alert('Password mismatch')
        }
    }

    return (
        <div className="App">
        <header className="App-header">
            <div className="login-container">
                <Form>
                    <h1>Change Password</h1>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control onChange={(e) => setconfirmPassword(e.target.value)} type="password" placeholder="Confirm Password" />
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
    resetPassword
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword);