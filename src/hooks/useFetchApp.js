import { useState, useEffect } from 'react';

const POS_DATA_URL = 'http://localhost:8000';

const populateSessionStorage = data => {
  const appSections = Object.keys(data);
  appSections.forEach(section => {
    sessionStorage.setItem(section, JSON.stringify(data[section]));
  });
};

// const postNewCustomer = async customer => {
//   const res = await fetch(POS_DATA_URL + '/customers', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(customer),
//   });
// };

const useFetchApp = () => {
  const [results, setResult] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
    } catch (err) {
      console.error('Error:' + err.message, err);
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  results && populateSessionStorage(results);
  return [error, isLoading];
};

export default useFetchApp;
