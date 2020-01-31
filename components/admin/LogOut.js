import React from 'react';
import {Button} from 'react-bootstrap';
import { auth, firebase } from '../database'
import router from 'next/router';

const LogOut = () => {
    const handleLogOut = () => {
        firebase.auth().signOut();
        router.push('/admin/login')
    }
    return(
        <Button style={{marginLeft:"10px"}} variant="danger" onClick={handleLogOut}>Logout</Button>
    )
}

export default LogOut;
