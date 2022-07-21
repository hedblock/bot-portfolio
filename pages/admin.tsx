import React from 'react'

import type { NextPage } from 'next'

import AdminComponent from '../components/admin';
import PageContainer from '../components/utilities/PageContainer';

const Admin : NextPage = () => {

    return (
        <PageContainer
            adminGated
        >
            <AdminComponent />
        </PageContainer>
    )
}

export default Admin