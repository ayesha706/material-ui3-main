import React from 'react'
import { Helmet } from 'react-helmet-async';

import { UserNameView } from 'src/sections/fetch-username';

export default function UsernameData() {
    return (
        <>
            <Helmet>
                <title> Fetch UserName | Minimal UI </title>
            </Helmet>
            <UserNameView />
        </>
    )
}




