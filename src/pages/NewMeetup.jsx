import { useNavigate } from "react-router-dom";

import NewMeetupForm from "../components/meetups/NewMeetupForm";

export default function NewMeetup(props) {
  const history = useNavigate();
  function addMeetupHandler(meetupsData) {
    fetch(
      "https://react-getting-started-8bffe-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupsData),
        headers: {
          "Content-Type": "application/json"
        }
      }
    ).then(() => {
      history("/", { replace: true });
    });
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}
