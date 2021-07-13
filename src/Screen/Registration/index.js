import React, { useState } from 'react'
import './App.css';
import { Form, Button} from 'react-bootstrap'
import { useHistory } from 'react-router-dom';
import { userRegister } from '../../Redux/actions/userAction'
import { connect } from 'react-redux';

function SignUp({userRegister}) {
  const [email, setEmail] = useState('')
  const [userName, setuserName] = useState('')
  const [age, setAge] = useState('')
  const [displayName, setdisplayName] = useState('')
  const [password, setPassword] = useState('')

  let history = useHistory()
  function getAge(dateString) 
  {
      var today = new Date();
      var birthDate = new Date(dateString);
      var age = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
      {
          age--;
      }
      console.log(age)
      setAge(age)
      return age;
     
  }
  const handleSubmit = async () => {
    let form = {
      'displayName': displayName,
      'email': email,
      'password': password,
      'userName': userName,
      'age':age,
      'role': '2' // 2 for user 1 for admin
    }
    let { status } = await userRegister(form)
    if(status) {
      history.push('/login')
    }
    console.log(status)
  }
  return (
    <div className="App">
      <header className="App-header">
          <div className="login-container">
            <Form>
              <h1>Registration Form</h1>
                <Form.Group >
                    <Form.Label>User Name</Form.Label>
                      <Form.Control onChange={(e) => setuserName(e.target.value)}  placeholder="Enter your username" />
                </Form.Group>
                <Form.Group >
                    <Form.Label>Display Name</Form.Label>
                      <Form.Control onChange={(e) => setdisplayName(e.target.value)} placeholder="Enter your name" />
                </Form.Group> 
                <Form.Group >
                    <Form.Label>Age</Form.Label>
                      <Form.Control onChange={(e) => getAge(e.target.value)} type="date" />
                </Form.Group> 
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
                <Button variant="primary" onClick={handleSubmit}>
                    Sign Up
                </Button>
                <div>
                    <Button onClick={() => history.push('/login')} variant="link">Login Existing account</Button>
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
    userRegister
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
