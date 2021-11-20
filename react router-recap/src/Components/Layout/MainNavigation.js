import React,{ useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from './MainNavigation.module.css';
import FavContext from '../../Store/fav-context';


const MainNavigation = () => {

    const favCtx = useContext(FavContext);

    return (
        <header className={styles.header}>
            <div className={styles.logo}>React Meetups</div>

            <nav>
                <ul>

                    <li>
                        <Link to='/'>
                            All Meetups
                        </Link>
                    </li>
                    <li>
                        <Link to='/new-meetup'>
                            New Meetup
                        </Link>
                    </li>
                    <li>
                        <Link to='/favourites'>
                            Favourites
                            <span className={styles.badge}>
                                {favCtx.noOfFav}
                            </span>
                        </Link>
                    </li>

                </ul>
            </nav>

        </header>
    );
};

export default MainNavigation;
