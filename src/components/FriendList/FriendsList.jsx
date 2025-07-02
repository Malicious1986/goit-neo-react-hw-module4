import styles from "./FriendsList.module.css";
import FriendListItem from "../FriendListItem/FriendListItem";

export default function FriendsList({ friends }) {
  return (
    <ul className={styles.container}>
      {friends.map((friend) => (
        <li key={friend.name} className={styles.item}>
          <FriendListItem {...friend} />
        </li>
      ))}
    </ul>
  );
}
