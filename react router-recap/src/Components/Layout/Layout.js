import React from 'react';
import styles from './Layout.module.css';
import MainNavigation from './MainNavigation';


const Layout = (props) => {
    return (
        <div className>

            <MainNavigation/>

            <main className={styles.main + " " + props.className}>
                {props.children}
            </main>

        </div>
    );
};

export default Layout;
