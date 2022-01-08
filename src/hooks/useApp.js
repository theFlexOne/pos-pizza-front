import { useState, useEffect, useCallback } from 'react';

const POS_DATA_URL = 'http://localhost:8000';

const useApp = () => {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    console.log('Loading...');
    try {
      const res = await fetch(POS_DATA_URL + '/db');
      if (!res.ok) {
        console.error(res.message);
        return null;
      }
      const data = await res.json();
      setResult(data);
    } catch (e) {
      console.error('Error:' + e.message, e);
      setError(e);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { state: [result, error, isLoading], refreshApp: fetchData };
};
export default useApp;
