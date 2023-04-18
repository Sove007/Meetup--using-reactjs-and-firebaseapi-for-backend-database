import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

export default function Meetuplist(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetups) => (
        <MeetupItem
          key={meetups.id}
          id={meetups.id}
          image={meetups.image}
          address={meetups.address}
          description={meetups.description}
        />
      ))}
    </ul>
  );
}
