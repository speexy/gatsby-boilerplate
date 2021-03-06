import React from 'react';
import { Link } from 'gatsby';
import styles from './navMain.module.css';

const NavMain = ( props ) => {

    const toggle = props.closeOverlay || undefined;
    const style = props.style === undefined ? styles.navMain : props.style;

    return (
        <nav className={style}>
            <ul>
                <Link to={'/blog'} className={styles.link} activeClassName={styles.active} onClick={toggle}>
              Blog
                </Link>
            </ul>
        </nav>
    );
};
export default NavMain;
