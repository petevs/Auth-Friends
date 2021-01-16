import React, { useState } from 'react'
import styled from 'styled-components'
import { TextField, Button } from '@material-ui/core'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { useHistory } from 'react-router-dom'

const AddFriend = () => {

    const history = useHistory()

    const initialState = {
        name: '',
        age: '',
        email: ''
    }

    const [friend, setFriend] = useState(initialState)

    const handleChange = (e) => {
        setFriend({
            ...friend,
            [e.target.name]: e.target.value
        })
    }


    const addFriend = (e) => {
        e.preventDefault()
        axiosWithAuth().post("http://localhost:5000/api/friends", friend)
            .then(res => {
                setFriend(initialState)
            })
            .catch(err => console.log(err))
    }

    return (
        <Wrapper>
            <Headline>Friends</Headline>
            <MyForm onSubmit={addFriend}>
                <TextField
                    type='text'
                    name='name'
                    value={friend.name}
                    onChange={handleChange}
                    label="name" 
                    variant="standard"
                />
                <TextField
                    type='text'
                    name='age'
                    value={friend.age}
                    onChange={handleChange}
                    label="age" 
                    variant="standard"
                />
                <TextField
                    type='email'
                    name='email'
                    value={friend.email}
                    onChange={handleChange}
                    label="email" 
                    variant="standard"
                />
                <Button 
                    variant="contained" 
                    color="primary" 
                    size='large'
                    onClick={addFriend}
                >
                    Add Friend
                </Button>
            </MyForm>
        </Wrapper>
    )
}

export default AddFriend

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
