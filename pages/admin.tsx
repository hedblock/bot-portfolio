import React from 'react'

import type { NextPage } from 'next'

import Container from '../components/utilities/Container';
import AdminComponent from '../components/admin';

const Admin : NextPage = () => {

    return (
        <Container 
            title='Tokenlist Admin'
            adminGated
        >
            <AdminComponent />
        </Container>
    )
}

export default Admin