import React, { useState, useContext, useEffect, useCallback } from 'react';

const URL = "http://openlibrary.org/search.json?title=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("the lost world");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [resultTitle, setResultTitle] = useState("");

  // Debounced fetchBooks function
  const fetchBooks = useCallback(async () => {
    if (!searchTerm.trim()) {
      setBooks([]);
      setResultTitle("Please enter a valid search term.");
      setLoading(false);
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`${URL}${searchTerm}`);
      const data = await response.json();
      const { docs } = data;

      if (docs && docs.length > 0) {
        const newBooks = docs.slice(0, 20).map((bookSingle) => {
          const { key, author_name, cover_i, edition_count, first_publish_year, title } = bookSingle;

          return {
            id: key,
            author: author_name,
            cover_id: cover_i,
            edition_count: edition_count,
            first_publish_year: first_publish_year,
            title: title,
          };
        });

        setBooks(newBooks);
        setResultTitle(newBooks.length > 1 ? "Your Search Result" : "No Search Result Found!");
      } else {
        setBooks([]);
        setResultTitle("No Search Result Found!");
      }
    } catch (error) {
      console.log(error);
      setBooks([]);
      setResultTitle("Error fetching results.");
    } finally {
      setLoading(false);
    }
  }, [searchTerm]);

  // Trigger fetchBooks when searchTerm changes
  useEffect(() => {
    fetchBooks();
  }, [searchTerm, fetchBooks]);

  return (
    <AppContext.Provider value={{
      loading, books, setSearchTerm, resultTitle, setResultTitle,
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
