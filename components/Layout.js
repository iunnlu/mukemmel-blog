import React, { Children } from 'react';
import Head from 'next/head';
import Navbar from './pages/Navbar'
import {Container, Row, Col} from 'react-bootstrap';
import '../styles/layoutStyle.scss';
import Footer from './pages/Footer';

const Layout = ({ children, title }) => {
    return(
        <div>
            <Head>
                <title>İlhan Ünlü Personal Blog</title>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
            </Head>
            <header>
                <Navbar />
            </header>
            <main className="main">
                    { children }
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Layout;