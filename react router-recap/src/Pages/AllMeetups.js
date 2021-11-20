import React, { useState,useEffect } from 'react'
import MeetupList from '../Components/Meetups/MeetupList';


// const DUMMY_DATA = [
//   {
//     id: 'm1',
//     title: 'This is a first meetup',
//     image:
//       'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//     address: 'Meetupstreet 5, 12345 Meetup City',
//     description:
//       'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
//   },
//   {
//     id: 'm2',
//     title: 'This is a second meetup',
//     image:
//       'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//     address: 'Meetupstreet 5, 12345 Meetup City',
//     description:
//       'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
//   },
// ];


const AllMeetupsPage = () => {

  // JS is asynchronious so need time to wait
  const [ loading, setLoading ] = useState(true);
  const [ dataFromFirebase, setDataFromFirebase ] = useState([]); //Array of Meetups


  // Otherwise Goes Into Infinite Loop
  useEffect( () => {

    setLoading(true);
    // Getting Data From Firebase and Show In Home Page:
    fetch( 'https://react-hooks-bc82e-default-rtdb.firebaseio.com/Meetup.json', {
      method : 'GET', // Default
    } ).then( (res) => {
      return res.json(); //json returns a promise
    } ).then( (firebaseData) => {

      setLoading(false);

      const loadedData = [];

      // Loop to extract the Data:
      for( const key in firebaseData){

        const localData = {
          id: key,
          ...firebaseData[key]
        };

        loadedData.push(localData);
      };

      // Data from Firebase as Objects
      setDataFromFirebase(loadedData);

    } );

  },[] );
  // set Not Required as React Ensures always get the Latest Data
  


  if(loading){
    return (
    <section>
      <p>Loading...</p>
    </section>
    );
  };


  return (
      <section>
          <h1>All Meetups</h1>

          {/* Expects Array of Data */}
          <MeetupList dataArray = {dataFromFirebase}/>
      </section>
  );

}

export default AllMeetupsPage
