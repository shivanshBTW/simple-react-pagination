import axios from "axios";
import { useState, useLayoutEffect, useEffect, useCallback } from "react";
import useFetchData from "./hooks/useFetchData";
import useIteration from "./hooks/useIteration";
import SimplePaginationContainer from "./simple-react-pagination/SimplePaginationContainer";
import "./styles.css";
import UserItem from "./UserItem/UserItem";

function App() {
  let [userList, setUserList] = useState([]);
  let [pageNumber, setPageNumber] = useState(0);
  const limit = 10;
  const maxPages = 100;

  let [fetchData] = useFetchData();

  useEffect(() => {
    setUserList(fetchData(pageNumber, limit));
  }, [fetchData, pageNumber]);

  useLayoutEffect(() => {
    setUserList(fetchData(pageNumber, limit));
  }, []);

  return (
    <div className="App">
      <SimplePaginationContainer
        pageNumber={pageNumber}
        itemList={userList}
        setPageNumber={setPageNumber}
        maxPages={maxPages}
        component={UserItem}
      />
    </div>
  );
}

export default App;
