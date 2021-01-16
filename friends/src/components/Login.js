import { TextField, Button } from '@material-ui/core'
import axios from 'axios'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

const Login = () => {

    const history = useHistory()

    const initialValues = {
        username: '',
        password: ''
    }

    const [credentials, setCredentials] = useState(initialValues)

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const login = (e) => {
        e.preventDefault()
        axios.post("http://localhost:5000/api/login", credentials
        )
            .then(res => {
                localStorage.setItem("token", res.data.payload);
                history.push('/friends')
            })
            .catch(err => console.log(err))
    }


    return (
        <Wrapper>
            <Headline>Friends</Headline>
            <MyForm onSubmit={login}>
                <TextField
                    type='text'
                    name='username'
                    value={credentials.username}
                    onChange={handleChange}
                    label="Username" 
                    variant="standard"
                />
                <TextField
                    type='password'
                    name='password'
                    value={credentials.password}
                    onChange={handleChange}
                    label="Password" 
                    variant="standard"
                />
                <Button 
                    variant="contained" 
                    color="primary" 
                    size='large'
                    onClick={login}
                >
                    Login
                </Button>
            </MyForm>
        </Wrapper>
    )
}

export default Login

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    min-height: 100vh;
    padding: 2rem 1rem;
    align-content: start;
`

const MyForm = styled.form`
    display: grid;
    grid-template-columns: 1fr;
    max-width: 300px;
    justify-self: center;
    gap: 1rem;
    background: #fff;
    padding: 2rem;
    border: 1px solid #ccc;
    border-radius: 3px;
    box-shadow: 0 2px 4px rgba(0,0,0,.35);
`
export const Headline = styled.h2`
    font-family: 'Permanent Marker', cursive;
    letter-spacing: .5rem;
    font-size: 2.4rem;
`