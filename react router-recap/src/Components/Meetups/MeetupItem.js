import React,{ useContext } from 'react'
import Card from '../UI/Card'
import styles from './MeetupItem.module.css'
import FavContext from '../../Store/fav-context';


const MeetupItem = (props) => {

    // Giving ctxValue object
    const favCtx = useContext(FavContext);

    // Check the Item is Favourite or Not
    const meetupItemIsFav = favCtx.detectFav(props.id);

    
    const toggleHandler = () => {
        // If Favourite then Remove the Item
        if(meetupItemIsFav) {
            favCtx.remFav(props.id);
        }
        // If Not Favourite then Add the Item
        else{
            favCtx.addFav( {
                id: props.id,
                title : props.title,
                image : props.image,
                address : props.address,
                description : props.description
            } );
        }
    };


    return (
        
        <li className={styles.item}>
            <Card>
                <div className={styles.image}>
                    <img src={props.image} alt='error'/>
                </div>

                <div className={styles.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                </div>

                <div className={styles.actions}>
                    <button onClick={toggleHandler}>
                        {   meetupItemIsFav ? 
                            'Remove From Favourites' 
                            :
                            'To Favourites'
                        }
                    </button>
                </div>
            </Card>
        </li>
        
    );

};

export default MeetupItem;
