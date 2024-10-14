import { ComponentProps, useEffect, useId, useRef, forwardRef } from 'react';

type SliderProps = ComponentProps<'input'> & {
  label?: string;
};

const Slider = forwardRef<HTMLInputElement, SliderProps>(function (
  { label, ...delegated },
  ref
) {
  const id = useId();
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input {...delegated} ref={ref} type="range" id={id} />
    </div>
  );
});

export default function App() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return <Slider ref={inputRef} />;
}
