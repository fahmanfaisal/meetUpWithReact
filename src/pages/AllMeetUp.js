import { useState , useEffect } from 'react';
import MeetupList from '../componets/meetups/MeetupList';


function AllMeetUpPage() {

  const[isloading , setIsLoading] =useState(true);
  const [loadedMeetups, setLoadingMeetups] =useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      'https://newmeetup-2baba-default-rtdb.firebaseio.com/meetups.json'
    )
    .then((response) =>{
      return response.json();

    })
    .then((data) => {
      const meetups = [];

      for(const key in data){
        const meetup = {
          id: key,
          ...data[key]
        };

        meetups.push(meetup);
      }

      setIsLoading(false);
      setLoadingMeetups(meetups);
    
    });
  }, []);

  
  if (isloading) {
    return (
      <section>
        <p>Loading/...</p>
      </section>
    );
  }
    return (
      <section>
        <h1>All MeetUp list</h1>
        <MeetupList meetups={loadedMeetups} />
    </section>
    );
}

export default AllMeetUpPage;