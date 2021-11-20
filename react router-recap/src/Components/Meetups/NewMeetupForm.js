import React,{ useRef } from 'react';
import styles from './NewMeetupForm.module.css';
import Card from '../UI/Card';
 

const NewMeetupForm = (props) => {

    const titleRef = useRef();
    const imageRef =  useRef();
    const addressRef = useRef();
    const descriptionRef = useRef();


    const submitHandler = (event) =>{
        event.preventDefault();

        const enteredTitle = titleRef.current.value;
        const enteredImage = imageRef.current.value;
        const enteredAddress = addressRef.current.value;
        const enteredDescription = descriptionRef.current.value;

        const enteredMeetupDataObj = {
            title : enteredTitle,
            image : enteredImage,
            address : enteredAddress,
            description : enteredDescription
        };

        // Data Child To Parent
        props.inputDataFromNewMeetupForm(enteredMeetupDataObj);

    };


    return (

        <Card>
            <form className={styles.form} onSubmit={submitHandler}>

                <div className={styles.control}>
                    <label htmlFor="title">Meetup Title</label>
                    <input 
                        type="text" 
                        required 
                        id="title"
                        ref={titleRef}
                    />
                </div>

                <div className={styles.control}>
                    <label htmlFor="image">Meetup Image</label>
                    <input 
                        type="url" 
                        required 
                        id="image"
                        ref={imageRef}
                    />
                </div>

                <div className={styles.control}>
                    <label htmlFor="address">Meetup Address</label>
                    <input 
                        type="text" 
                        required 
                        id="address"
                        ref={addressRef}
                    />
                </div>

                <div className={styles.control}>
                    <label htmlFor="description">Meetup Description</label>
                    <textarea 
                        id="description"
                        rows="5" 
                        required
                        ref={descriptionRef}
                    >  
                    </textarea>
                </div>

                <div className={styles.actions}>
                    <button>Add Meetup</button>
                </div>

            </form>
        </Card>
    );
};

export default NewMeetupForm;
