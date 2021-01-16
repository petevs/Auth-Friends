import { AppBar, Button, Toolbar } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

const Nav = () => {

    const history = useHistory()

    const logout = () => {
        localStorage.removeItem("token")
        history.push('/login')
    }


    return (
        <AppBar variant='sticky'>
            <MyToolbar>
                <MenuItem onClick={()=> {history.push('/add-a-friend')}}>Add a Friend</MenuItem>
                <MenuItem onClick={()=> {history.push('/friends')}}>Friends</MenuItem>
                <MenuItem onClick={()=> {history.push('/login')}}>Login</MenuItem>
                <MenuItem onClick={logout}>Logout</MenuItem>
            </MyToolbar>
            
        </AppBar>
    )
}

export default Nav


const MyToolbar = styled(Toolbar)`
    display: grid;
    grid-auto-flow: column;
    justify-content: end;
    justify-items: end;
    gap: .25rem;
`

const MenuItem = styled.button`
    padding: 0.25rem .5rem;
    cursor: pointer;

`