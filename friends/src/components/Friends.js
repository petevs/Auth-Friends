import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import FriendCard from './FriendCard'

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
        <div>
            {friends.map(friend => {
                return(
                    <FriendCard 
                        key={friend.id} 
                        {...friend}
                    />
                    )
                })
            }
        </div>
    )
}

export default Friends
