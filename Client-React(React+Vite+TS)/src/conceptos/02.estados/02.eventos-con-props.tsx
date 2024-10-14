type Props = {
  onClick: () => void;
};

export default function Button({ onClick }: Props) {
  return <button onClick={onClick}>Soy un boton</button>;
}
