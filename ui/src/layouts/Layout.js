import React from 'react';
import Helmet from 'react-helmet';
import { Header } from '../components/Header';
import Footer from '../components/Footer';
import './global.css';
import styles from './layout.module.css';


export default ({ children, meta, img }) => {

    const siteUrl = 'https://example.com';
    const siteLang = 'en_US';
    const siteName = 'Site Name';
    const siteDescription = 'Boilerplate Gatsby';
    const siteImage = `${siteUrl}/media/hex.jpg`;


    const pageTitle = meta.title || siteName;
    const pageDescription = meta.description || siteDescription;
    const pageImage = `${siteUrl}${img.src}` || siteImage;


    return (
        <div>
            <Helmet
                title={pageTitle}
                meta={[
                    { name: 'description', content: `${pageDescription}` },
                    { property: 'og:locale', content: `${siteLang}` },
                    { property: 'og:site_name', content: `${siteName}` },
                    { property: 'og:title', content: `${pageTitle}` },
                    { property: 'og:description', content: `${pageDescription}` },
                    { property: 'og:image', content: `${pageImage}` },
                    { name: 'twitter:card', content: `${siteLang}` },
                    { name: 'twitter:title', content: `${pageTitle}` },
                    { name: 'twitter:description', content: `${pageDescription}` },
                    { name: 'twitter:image', content: `${pageImage}` }
                ]}
            />
            <Header/>
            <div className={styles.main}>
                {children}
            </div>
            <Footer/>
        </div>
    );
};
