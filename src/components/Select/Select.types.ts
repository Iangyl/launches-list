export interface Option {
  value: string;
  label: string;
}

export interface CheckboxSelectProps {
  title: string;
  options: Option[];
  onSelect: (selectedValues: string[]) => void;
}
