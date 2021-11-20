import React from 'react';
import NewMeetupForm from '../Components/Meetups/NewMeetupForm';
import { useNavigate } from 'react-router-dom';



const NewMeetupPage = () => {


    const navigate = useNavigate();
    

    const inputDataHandler = (inpData) =>{

        // Data From Child To Parent: inpData from NewMeetupForm

        // Sending Data To Firebase
        fetch( 'https://react-hooks-bc82e-default-rtdb.firebaseio.com/Meetup.json', {
            method: 'POST',
            body : JSON.stringify(inpData),
            headers : { 'Content-Type' : 'application/json' }
        } ).then( (res) => {
            // Redirecting To Main Page Here Back Not Possible
            navigate('/', { replace: true } );
        } );

    };


    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm inputDataFromNewMeetupForm={inputDataHandler}/>
        </section>
    );
};

export default NewMeetupPage;
