import { useState, useEffect, useCallback } from 'react';
import useFetchData from './hooks/useFetchData';
import SimplePagination from './simple-react-pagination/SimplePagination/SimplePagination';
import UserItem from './UserItem/UserItem';
import './styles.css';

function App() {
  let [userList, setUserList] = useState([]);
  let [pageNumber, setPageNumber] = useState(0);
  const limit = 5;
  const maxPages = 100;

  let [fetchData] = useFetchData();
  let handleFetchData = useCallback(async () => {
    let newUserList = await fetchData(pageNumber, limit);
    setUserList(newUserList);
  }, [pageNumber]);

  useEffect(() => {
    handleFetchData();
  }, [pageNumber]);

  return (
    <div className="App">
      <SimplePagination
        pageNumber={pageNumber}
        itemList={userList}
        setPageNumber={setPageNumber}
        maxPages={maxPages}
        component={UserItem}
        buttonCount={5}
      />
    </div>
  );
}

export default App;
