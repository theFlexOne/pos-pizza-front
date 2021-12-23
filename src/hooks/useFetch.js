import { useCallback, useEffect, useState } from 'react';

const useFetch = url => {
  const [appData, setAppData] = useState(null);

  const fetchApp = useCallback(async () => {
    try {
      const res = await fetch(url || 'http://localhost:8000/db');
      if (!res.ok) {
        console.error(res.message, res.status, res.statusText);
        return null;
      }
      const data = await res.json();
      setAppData(data);
    } catch (err) {
      return console.error(err);
    }
  }, [url]);

  useEffect(async () => {
    const data = await fetchApp();
    setAppData(data);
  }, [url]);
};

export default useFetch;
