export interface SelectProps {
  selected: Option | null;
  options: string[];
  placeholder?: string;
  onChange?: (selected: string) => void;
  onClose?: () => void;
  isFetching: boolean;
}

export interface OptionProps {
  option: string;
  onClick: (value: string) => void;
}

export interface Option {
  id: string;
  min_size?: string;
  name?: string;
}
