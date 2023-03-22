import { useEffect, useState } from 'react';
import axios from 'axios';
import { ILaunch } from './useGetLaunches.types';

const LAUNCHES_API = 'https://api.spacexdata.com/v5/launches';

const useGetLaunches = () => {
  const [data, setData] = useState<ILaunch[]>([]);

  useEffect(() => {
    axios.get(LAUNCHES_API).then((data) => setData(data.data));
  }, []);

  return data;
};

export default useGetLaunches;
