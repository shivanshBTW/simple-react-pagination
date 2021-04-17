import axios from 'axios';
import { useState, useLayoutEffect, useEffect, useCallback } from 'react';
import useFetchData from './hooks/useFetchData';
import useIteration from './hooks/useIteration';
import SimplePaginationContainer from './simple-react-pagination/SimplePaginationContainer/SimplePaginationContainer';
import UserItem from './UserItem/UserItem';
import './styles.css'; 
import './pagination-component.css';

function App() {
  let [userList, setUserList] = useState([]);
  let [pageNumber, setPageNumber] = useState(0);
  const limit = 10;
  const maxPages = 100;

  let [fetchData] = useFetchData();
  let handleFetchData = async () => {
    let newUserList = await fetchData(pageNumber, limit);
    setUserList(newUserList);
  }

  useEffect(handleFetchData, [pageNumber]);

  useLayoutEffect(handleFetchData, []);

  return (
    <div className="App">
      <SimplePaginationContainer
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
