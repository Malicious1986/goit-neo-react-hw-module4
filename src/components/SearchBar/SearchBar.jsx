import toast from "react-hot-toast";
import { IoSearchOutline } from "react-icons/io5";

import styles from "./SearchBar.module.css";

export default function SearchBar({ onSearch, query, setQuery }) {
  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    if (!query) {
      return toast.error("Add search!");
    }
    onSearch(query);
    form.reset();
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
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className={styles.submit} type="submit">
            <IoSearchOutline />
          </button>
        </label>
      </form>
    </header>
  );
}
