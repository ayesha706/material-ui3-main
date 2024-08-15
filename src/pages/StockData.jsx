import React from 'react'
import { Helmet } from 'react-helmet-async';

import { StockData } from 'src/sections/fetch-data';

export default function FetchData() {
    return (
        <>
            <Helmet>
                <title> Stock Data | Minimal UI </title>
            </Helmet>
            <StockData />
        </>
    )
}




