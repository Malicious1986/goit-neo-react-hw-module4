import { useCallback, useRef, useState } from "react";

import { ClipLoader } from "react-spinners";

import { get } from "../api";
import "./App.css";
import ImageGallery from "./ImageGallery/ImageGallery";
import ImageModal from "./ImageModal/ImageModal";
import LoadMore from "./LoadMoreBtn/LoadMoreBtn";
import SearchBar from "./SearchBar/SearchBar";

function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const lastQueryRef = useRef(null);

  const shouldShowLoadMore =
    currentPage < totalPages && !isLoading && !error.length;

  const reset = () => {
    setIsLoading(true);
    setError("");
    setCurrentPage(1);
    setResults([]);
  };

  const onLoadMore = async () => {
    const nextPage = currentPage + 1;

    try {
      setIsLoading(true);
      const scrollYBefore = window.scrollY;
      const pageHeightBefore = document.body.scrollHeight;

      const { data } = await get(query, nextPage);
      setCurrentPage(nextPage);
      setResults((prev) => [...prev, ...data.results]);
      requestAnimationFrame(() => {
        const pageHeightAfter = document.body.scrollHeight;
        const heightAdded = pageHeightAfter - pageHeightBefore;

        window.scrollTo({
          top: scrollYBefore + heightAdded,
          behavior: "smooth",
        });
      });
    } catch (err) {
      setError(err?.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  const onSearch = async (searchQuery) => {
    if (searchQuery === lastQueryRef.current) return;
    lastQueryRef.current = searchQuery;
    setQuery(searchQuery);
    
    try {
      reset();
      const { data } = await get(searchQuery);
      setResults(data.results);
      setTotalPages(data.total_pages);
    } catch (err) {
      setError(err?.message || "Search failed");
    } finally {
      setIsLoading(false);
    }
  };

  const onSelectImage = useCallback((image) => {
    setCurrentImage(image);
    setModalIsOpen(true);
  }, []);

  const onCloseModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="container">
      <SearchBar onSearch={onSearch} />
      <div className="wrapper">
        {results.length > 0 && !error && (
          <ImageGallery onSelect={onSelectImage} images={results} />
        )}

        {error && <p className="error">{error}</p>}

        <ClipLoader
          loading={isLoading && !error}
          aria-label="Loading Spinner"
        />

        {shouldShowLoadMore && <LoadMore onLoadMore={onLoadMore} />}
      </div>

      <ImageModal
        modalIsOpen={modalIsOpen}
        image={currentImage}
        onClose={onCloseModal}
      />
    </div>
  );
}

export default App;
