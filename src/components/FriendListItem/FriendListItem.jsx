import clsx from "clsx";

import styles from "./FriendListItem.module.css";

export default function FriendListItem(props) {
  const { avatar, name, isOnline } = props;

  return (
    <div className={styles.container}>
      <img width={100} height={100} src={avatar} alt="avatar image" />
      <p className="font2">{name}</p>
      <p className={clsx(isOnline ? styles.online : styles.offline)}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}
