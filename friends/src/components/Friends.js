import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { Card, CardContent, Typography } from '@material-ui/core/';
import styled from 'styled-components'
import { Headline } from './Login';

const Friends = () => {

    const [friends, setFriends] = useState([])

    const getFriends = () => {
        axiosWithAuth().get("http://localhost:5000/api/friends")
            .then(res => {
                console.log(res)
                setFriends(res.data)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getFriends()
    }, [])

    useEffect(()=>{
        console.log(friends)
    },[friends])

    return (
        <Wrapper>
            <Headline>FRIENDS</Headline>
            {friends.map(friend => {
                return(
                    <MyCard key={friend.id}>
                        <CardContent>
                            <Typography variant='h5'>{friend.name}</Typography>
                            <Typography variant='body2'>
                                {friend.email}
                            </Typography>
                            <Typography variant='body2'>
                                {friend.age} yrs old
                            </Typography>
                            
                        </CardContent>
                    </MyCard>
                    )
                })
            }
        </Wrapper>
    )
}

export default Friends

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    min-height: 100vh;
    align-content: start;
    background-color: #F4F7FA;
    justify-items: center;
    padding: 2rem 1rem;
`

const MyCard = styled(Card)`
    width: 350px;
    justify-self: center;
`