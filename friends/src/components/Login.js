import axios from 'axios'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

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
                history.push('/protected')
            })
            .catch(err => console.log(err))
    }


    return (
        <div>
            <form onSubmit={login}>
                <input
                    type='text'
                    name='username'
                    value={credentials.username}
                    onChange={handleChange}
                />
                <input
                    type='password'
                    name='password'
                    value={credentials.password}
                    onChange={handleChange}
                />
                <button>Log in</button>
            </form>
        </div>
    )
}

export default Login
