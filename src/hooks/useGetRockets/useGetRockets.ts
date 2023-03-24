import { useEffect, useState } from 'react';

import axios from 'axios';
import { IRocket } from './useGetRockets.types';

const ROCKETS_API = 'https://api.spacexdata.com/v4/rockets';

const useGetRockets = () => {
  const [data, setData] = useState<IRocket[]>();

  useEffect(() => {
    axios.get(ROCKETS_API).then((data) => setData(data.data));
  }, []);

  return data;
};

export default useGetRockets;
