import axios from "axios";

function useFetchData() {
  // let [value, setValue] = useState(initialValue);
  let fetchData = async (pageNumber, limit) => {
    const axiosConfig = {
      url: `https://randomuser.me/api/?page=${pageNumber}&results=${limit}&seed=abc&inc=name,picture`,
      method: "GET",
      crossDomain: true,
      dataType: "json",
      cache: false,
      processData: false
    };
    try {
      let response = await axios.request(axiosConfig);
      // console.log('response',response);
      if (response.status === 200) {
        return response.data.results || [];
      }
    } catch (e) {
      console.log(e);
      return [];
    }
  };

  return [fetchData];
}

export default useFetchData;
