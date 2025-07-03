import styles from './ImageCard.module.css'

export default function ImageCard({image, onSelect}) {
  return (
    <div onClick={() => onSelect(image)} className={styles.container}>
      <img className={styles.image} src={image.urls.small} alt={image.alt_description} title={image.alt_description} />
    </div>
  );
}
