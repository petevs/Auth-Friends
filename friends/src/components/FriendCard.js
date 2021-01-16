import React from 'react'

const FriendCard = (props) => {
    return (
        <div>
            <p>Name: {props.name} · Age: {props.age}  · Email: {props.email}</p>
        </div>
    )
}

export default FriendCard
