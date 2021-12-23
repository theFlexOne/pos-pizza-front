import { useState, useEffect } from 'react';

const POS_DATA_URL = 'http://localhost:8000';

const useApp = () => {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
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
    };

    fetchData();
  }, []);

  return [result, error, isLoading];
};
export default useApp;