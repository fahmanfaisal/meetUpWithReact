import { useHistory } from "react-router-dom";
import NewMeetupForm from "../componets/meetups/NewMeetupForm";

function NewMeetUp() {
    const history = useHistory();
    function addMeetupHandler(meetupData) {
        fetch('https://meetup-with-react-default-rtdb.firebaseio.com/meetups.json',
        {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers: {
                'content-type': 'application/json'
            }
        }
        ).then(() =>{
            history.replace('/');
        });
    }
    return (
        <section>
            <h1>Add New MeetUp</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler}/>
        </section>
    );
}

export default NewMeetUp;