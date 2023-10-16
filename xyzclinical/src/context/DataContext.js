import { createContext, useState, useEffect } from 'react';
import useAxiosFetch from '../hooks/useAxiosFetch';

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const { data, fetchError, isLoading } = useAxiosFetch(
    `${process.env.REACT_APP_ENDPOINT}/api/xyzclinical`
  );

  useEffect(() => {
    setPosts(data);
  }, [data]);
  console.log(data, fetchError, isLoading);

  useEffect(() => {
    const filteredResults = posts.filter((post) => {
      const name = post.name || '';
      const condition = post.condition || '';
      const patientId = post.patientId || '';

      return (
        name.toLowerCase().includes(search.toLowerCase()) ||
        condition.toLowerCase().includes(search.toLowerCase()) ||
        patientId.toLowerCase().includes(search.toLowerCase())
      );
    });

    setSearchResults(
      filteredResults.sort(
        (a, b) => new Date(b.recruitmentDate) - new Date(a.recruitmentDate)
      )
    );
  }, [posts, search]);

  return (
    <DataContext.Provider
      value={{
        search,
        setSearch,
        searchResults,
        fetchError,
        isLoading,
        posts,
        setPosts,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
