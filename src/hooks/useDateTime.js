import { useEffect } from 'react';
import { DateTime as dt } from 'luxon';

const useDateTime = () => {
  const date = dt.now().toFormat('M/d/yy');
  const date = dt.now().toFormat('hh:mm');

  // useEffect(() => {

  // })
};

export default useDateTime;
