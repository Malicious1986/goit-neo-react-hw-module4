import styles from './LoadMoreBtn.module.css'

export default function LoadMore({ onLoadMore }) {
  return <button className={styles.button} onClick={onLoadMore}>Load more</button>;
}
