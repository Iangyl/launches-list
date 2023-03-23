import { useEffect, useState } from 'react';
import axios from 'axios';
import { ILaunch } from '../useGetLaunches/useGetLaunches.types';

const LAUNCH_API = 'https://api.spacexdata.com/v5/launches/:id';

const useGetLaunch = (id: string) => {
  const [data, setData] = useState<ILaunch>();

  useEffect(() => {
    axios.get(LAUNCH_API.replace(':id', id)).then((data) => setData(data.data));
  }, []);

  return data;
};

export default useGetLaunch;
