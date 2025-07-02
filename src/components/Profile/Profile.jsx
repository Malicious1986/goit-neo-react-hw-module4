import clsx from "clsx";

import styles from "./Profile.module.css";
import Stat from "../Stat/Stat";

export default function Profile(props) {
  const { name, tag, location, image, stats } = props;
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <img src={image} alt="User avatar" className={styles.avatar} height={200} width={200} />
        <p className={clsx("bold", "font3")}>{name}</p>
        <p className={clsx(styles.tag, "font2")}>{tag}</p>
        <p className={clsx(styles.location, "font2")}>{location}</p>
      </div>

      <ul className={styles.stats}>
        {Object.entries(stats).map(([key, value]) => (
          <Stat key={key} name={key} value={value} />
        ))}
      </ul>
    </div>
  );
}
