import UserName from "./UserName";
import profileStyles from "./Profile.module.css";
import Stats from "./Stats";

export default function Profile(props) {
  return (
    <div className={profileStyles.profile}>
      <UserName
        name={props.name}
        tag={props.tag}
        location={props.location}
        image={props.image}
      />
      <Stats stats={props.stats} />
    </div>
  );
}
