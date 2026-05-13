import { useState, useEffect, useCallback } from "react";

function useFetch(url) {

  // storing fetched data
  const [data, setData] = useState([]);

  // loading state
  const [loading, setLoading] = useState(true);

  // error state
  const [error, setError] = useState("");

  // function for fetching data
  const fetchData = useCallback(async () => {

    setLoading(true);

    try {

      // api request
      const response = await fetch(url);

      // checking response
      if (!response.ok) {
        throw new Error("Error: Failed to fetch data");
      }

      // convert into json
      const result = await response.json();

      // save data
      setData(result);

    } catch (err) {

      // save error
      setError(err.message);

    } finally {

      // stop loading
      setLoading(false);
    }

  }, [url]);

  // run when component loads
  useEffect(() => {

    fetchData();

  }, [fetchData]);

  // return values
  return { data, loading, error };
}

export default useFetch;