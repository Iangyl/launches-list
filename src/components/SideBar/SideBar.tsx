import React, { useCallback, useEffect, useMemo, useState } from 'react';

import useGetRockets from 'hooks/useGetRockets/useGetRockets';
import convertRocketsDataToSelectOptions from 'utils/convertRocketsDataToSelectOptions';

import SideBarStyled from './SideBarStyled';
import Select from 'components/Select/Select';
import StatusToggle from 'components/StatusToggle/StatusToggle';
import { Filter } from 'hooks/useGetLaunches/useGetLaunches.types';

const SideBar = ({
  setFilters,
}: {
  setFilters: React.Dispatch<React.SetStateAction<Filter[]>>;
}) => {
  const rockets = useGetRockets();
  const [rocketSelect, setRocketSelect] = useState<string[] | undefined>();
  const [flightStatus, setFlightStatus] = useState<boolean | 'null'>('null');

  const selectOptions = useMemo(
    () => convertRocketsDataToSelectOptions(rockets!),
    [rockets]
  );

  const handleStatusChange = useCallback((status: string) => {
    if (status === 'success') setFlightStatus(true);
    else if (status === 'unsuccess') setFlightStatus(false);
    else setFlightStatus('null');
  }, []);

  const formatFilters = useCallback(() => {
    const rocketFilter = {
      rocket: rocketSelect,
    };
    const statusFilter = {
      success: flightStatus,
    };

    if (
      (!rocketFilter.rocket || rocketFilter.rocket?.length === 0) &&
      statusFilter.success !== 'null'
    )
      return [statusFilter];
    else if (
      statusFilter.success === 'null' &&
      rocketFilter.rocket &&
      rocketFilter.rocket?.length > 0
    )
      return [rocketFilter];
    else if (
      (!rocketFilter.rocket || rocketFilter.rocket?.length === 0) &&
      statusFilter.success === 'null'
    )
      return [];

    return [rocketFilter, statusFilter];
  }, [rocketSelect, flightStatus]);

  useEffect(() => {
    setFilters(formatFilters() as Filter[]);
  }, [rocketSelect, flightStatus]);

  return (
    <SideBarStyled>
      <Select
        title="Rockets"
        onSelect={setRocketSelect}
        options={selectOptions}
      />
      <StatusToggle onChange={handleStatusChange} />
      {/* filter by date */}
    </SideBarStyled>
  );
};

export default SideBar;
