import { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { Filter, ILaunch } from './useGetLaunches.types';
import { convertArrayOfFiltersToQueryProps } from 'utils/helpers';

const LAUNCHES_API = 'https://api.spacexdata.com/v5/launches/query';

const useGetLaunches = () => {
  const [limit, setLimit] = useState(50);
  const [filters, setFilters] = useState<Filter[]>([]);
  const [data, setData] = useState<ILaunch[]>([]);

  const filtersObj = useMemo(() => {
    return convertArrayOfFiltersToQueryProps(filters);
  }, [filters]);

  useEffect(() => {
    const filterCheck = Object.keys(filtersObj).length > 0 ?? false;

    axios
      .post(LAUNCHES_API, {
        query: filterCheck ? filtersObj : {},
        options: {
          limit,
          sort: {
            date_utc: 'desc',
          },
        },
      })
      .then((data) => setData(data.data.docs));
  }, [limit, filtersObj]);

  return { data, setLimit, setFilters };
};

export default useGetLaunches;
