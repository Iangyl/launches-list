import { Filter } from 'hooks/useGetLaunches/useGetLaunches.types';

export const convertArrayOfFiltersToQueryProps = (filters: Filter[]) => {
  const queryProps = {};

  filters.forEach((filter) => {
    for (const key in filter) {
      Object.assign(queryProps, { [key]: filter[key] });
    }
  });

  return queryProps;
};
