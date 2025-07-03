import toast from "react-hot-toast";
import { IoSearchOutline } from "react-icons/io5";

import styles from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  const onSubmit = (e) => {
    e.preventDefault();
    const query = e.target.elements.search.value
    if (!query) {
      return toast.error("Add search!");
    }
    onSearch(query);
  };
  return (
    <header>
      <form onSubmit={onSubmit}>
        <label htmlFor="search" className={styles.searchLabel}>
          <input
            id="search"
            className={styles.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="search"
          />
          <button className={styles.submit} type="submit">
            <IoSearchOutline />
          </button>
        </label>
      </form>
    </header>
  );
}
