import { useRef } from 'react';
import Card from '../UI/Card';
import classes from './NewMeetupForm.module.css';

function NewMeetupForm(props) {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const meetupData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription,
        };

        props.onAddMeetup(meetupData);
    }

    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor='title'>MeetUp Title</label>
                    <input type="text" required id="title" placeholder="Enter Title" ref={titleInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='image'>Baner</label>
                    <input type="url" required id="image" placeholder="Enter Image URL" ref={imageInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='address'>MeetUp Address</label>
                    <input type="text" required id="address" placeholder="Enter Address" ref={addressInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='description'>Description</label>
                    <textarea rows='5' required id="description" placeholder="-----Type Here---" ref={descriptionInputRef}/>
                </div>
                <div className={classes.actions}>
                    <button>Add MeetUp</button>
                </div>
            </form>
        </Card>
    );
}

export default NewMeetupForm;