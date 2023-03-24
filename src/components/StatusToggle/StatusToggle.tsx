import React, { useMemo, useState, useCallback, useEffect } from 'react';
import initialState, { colors } from './StatusToggle.config';
import {
  Input,
  StyledToggle,
  Label,
  LabelLeft,
  LabelRight,
} from './StatusToggleStyled';

const StatusToggle = ({ onChange }: { onChange: (value: string) => void }) => {
  const [toggleValue, setToggleValue] = useState(initialState);

  const toggleColor = useMemo(() => {
    let color = '';

    toggleValue.forEach((item) => {
      if (item.value === 'success' && item.checked) color = colors.success;
      if (item.value === 'unsuccess' && item.checked) color = colors.unsuccess;
      if (item.value === 'all' && item.checked) color = colors.all;
    });

    return color;
  }, [toggleValue]);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const target = event.target;

      setToggleValue((prev) => {
        return prev.map((item) => {
          if (item.value === target.name) {
            return { ...item, checked: true };
          } else {
            return { ...item, checked: false };
          }
        });
      });
    },
    [setToggleValue]
  );

  useEffect(() => {
    let status = '';
    toggleValue.forEach((item) => {
      if (item.checked) {
        status = item.value;
      }
    });
    onChange(status);
  }, [toggleValue]);

  return (
    <StyledToggle color={toggleColor}>
      {toggleValue.map((toggle, idx) => {
        if (idx === 0)
          return (
            <LabelLeft
              key={idx}
              htmlFor={toggle.value}
              color={toggle.checked ? colors.success : 'transparent'}
            >
              {toggle.label}
              <Input
                id={toggle.value}
                name={toggle.value}
                type="radio"
                value={toggle.value}
                onChange={handleChange}
              />
            </LabelLeft>
          );
        else if (idx === 2)
          return (
            <LabelRight
              key={idx}
              htmlFor={toggle.value}
              color={toggle.checked ? colors.unsuccess : 'transparent'}
            >
              {toggle.label}
              <Input
                id={toggle.value}
                name={toggle.value}
                type="radio"
                onChange={handleChange}
              />
            </LabelRight>
          );
        else
          return (
            <Label
              key={idx}
              htmlFor={toggle.value}
              color={toggle.checked ? colors.all : 'transparent'}
            >
              {toggle.label}
              <Input
                id={toggle.value}
                name={toggle.value}
                type="radio"
                onChange={handleChange}
              />
            </Label>
          );
      })}
    </StyledToggle>
  );
};

export default StatusToggle;
