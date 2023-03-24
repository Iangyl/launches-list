import ArrowIcon from 'assets/Arrow';
import React, { useEffect, useState } from 'react';
import { CheckboxSelectProps } from './Select.types';
import {
  Title,
  CheckboxInput,
  OpenCloseButton,
  CheckboxOptionLabel,
  CheckboxSelectContainer,
} from './SelectStyled';

const Select = ({ title, onSelect, options }: CheckboxSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const handleCheckboxChange = (value: string) => {
    const index = selectedValues.indexOf(value);
    if (index === -1) {
      setSelectedValues([...selectedValues, value]);
    } else {
      setSelectedValues([
        ...selectedValues.slice(0, index),
        ...selectedValues.slice(index + 1),
      ]);
    }
  };

  useEffect(() => {
    onSelect(selectedValues);
  }, [selectedValues]);

  return (
    <div>
      <Title>
        {title}
        <OpenCloseButton onClick={() => setIsOpen((prev) => !prev)}>
          <ArrowIcon
            width={18}
            height={18}
            style={{ transform: isOpen ? 'rotate(90deg)' : 'rotate(0)' }}
          />
        </OpenCloseButton>
      </Title>
      {isOpen && (
        <CheckboxSelectContainer>
          {options &&
            options.map((option) => (
              <CheckboxOptionLabel key={option.value}>
                <CheckboxInput
                  checked={selectedValues.includes(option.value)}
                  onChange={() => handleCheckboxChange(option.value)}
                />
                {option.label}
              </CheckboxOptionLabel>
            ))}
        </CheckboxSelectContainer>
      )}
    </div>
  );
};

export default Select;
