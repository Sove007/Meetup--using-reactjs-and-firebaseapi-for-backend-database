import { useEffect, useState } from "react";
import Meetuplist from "../components/meetups/MeetupList";

export default function Allmeetups() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://react-getting-started-8bffe-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key]
          };
          meetups.push(meetup);
        }

        setIsLoading(false);
        // setLoadedMeetups(data);
        setLoadedMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      {/* <ul>
      {DUMMY_DATA.map((meetup)=>{
        return <li key={meetup.id} >{meetup.title}</li>
      })}
    </ul> */}
      {/* <Meetuplist meetups={DUMMY_DATA} /> */}

      <Meetuplist meetups={loadedMeetups} />
    </section>
  );
}
