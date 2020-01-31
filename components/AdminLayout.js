import React, { Children } from 'react';
import Head from 'next/head';

const Layout = ({ children, title }) => {
    return(
        <div>
            <Head>
                <title>Admin Page</title>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
            </Head>
            <main className="main">
                    { children }
            </main>
        </div>
    )
}

export default Layout;