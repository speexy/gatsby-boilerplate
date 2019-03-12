import React from 'react';
import Helmet from 'react-helmet';
import { Header } from '../components/Header';
import Footer from '../components/Footer';
import './global.css';
import styles from './layout.module.css';


export default ({ children, meta }) => {

    return (
        <div>
            <Helmet
                title={meta.title}
                meta={[
                    { name: 'description', content: `${meta.description}` },
                    { name: 'keywords', content: 'keywords' },
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
