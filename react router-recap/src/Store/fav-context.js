import React,{ useState } from 'react';


const FavContext = React.createContext( {
    // Initial Value
    favArray : [],
    noOfFav : 0,
    addFav : (fav) => {},
    remFav : (favId) => {},
    detectFav : (favId) => {}
} );


export const FavContextProvider = (props) => {


    const [ favMeetups, setFavMeetups ] = useState([]);


    const addFavMeetupsHandler = (fav) =>{
        setFavMeetups( (prevFav) => {
            return prevFav.concat(fav);
        } );
    };
    const removeFavMeetupsHandler = (favId) =>{
        setFavMeetups( (prevFavId) => {
            return prevFavId.filter( (rev) => rev.id !== favId);
        } );
    };
    const detectFavMeetupsHandler = (favId) =>{
        // If any then returns True
        return favMeetups.some( (match) => match.id ===favId);
    };


    // Pass the latest value
    const ctxValue = {
        favArray : favMeetups,
        noOfFav : favMeetups.length,
        addFav : addFavMeetupsHandler,
        remFav : removeFavMeetupsHandler,
        detectFav : detectFavMeetupsHandler
    };


    return (
        <FavContext.Provider value={ctxValue}>
            {props.children}
        </FavContext.Provider>
    );

};

export default FavContext;