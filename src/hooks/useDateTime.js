import { useEffect, useState } from 'react';
import { DateTime as dt } from 'luxon';

const getTime = () => dt.now().toFormat('t');

const useDateTime = () => {
  const [time, setTime] = useState(getTime);
  const date = dt.now().toFormat('D');

  useEffect(() => {
    const tick = setTimeout(() => {
      setTime(getTime);
    }, 60 * 1000);
    return () => {
      clearTimeout(tick);
    };
  }, [time]);
  return [date, time];
};

export default useDateTime;
