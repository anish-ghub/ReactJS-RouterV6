import React,{ useContext } from 'react';
import FavContext from '../Store/fav-context';

// To Display The Meetup Item
import MeetupList from '../Components/Meetups/MeetupList';



const FavouritesPage = () => {

    const favCtx = useContext(FavContext);

    let content;
    if(favCtx.noOfFav === 0){
        content = <p>You got no Favourites yet. Start adding Some?</p>
    }
    else{
        content = <MeetupList dataArray={favCtx.favArray}/>
    }

    return (
        <section>
            <h1>My Favourites</h1>
            {content}
        </section>
    );
};


export default FavouritesPage;
