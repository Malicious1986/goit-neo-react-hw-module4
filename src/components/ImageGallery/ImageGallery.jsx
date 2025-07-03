import styles from './ImageGallery.module.css'
import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ images, onSelect }) {
  return (
    <ul className={styles.container}>
      {images.map((image) => (
        <li key={image.id}>
            <ImageCard image={image} onSelect={onSelect}/>
        </li>
      ))}
    </ul>
  );
}
