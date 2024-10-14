import { ChangeEventHandler, useId } from 'react';

type SliderProps = {
  label: string;
  min: string;
  max: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};
export default function Slider({
  label,
  min,
  max,
  value,
  onChange,
}: SliderProps) {
  const id = useId();

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type="range"
        id={id}
        min={min}
        max={max}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
