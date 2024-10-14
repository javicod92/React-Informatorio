import { ComponentProps, useState } from 'react';

type TextInputProps = ComponentProps<'input'> & {
  label: string;
};
function TextInput({ label, ...delegated }: TextInputProps) {
  return (
    <div>
      <label htmlFor={delegated.id}>{label}</label>
      <input {...delegated} />
    </div>
  );
}

export default function LoginForm() {
  const [email, setEmail] = useState('');

  function handleSubmit() {
    alert(`Logged in with ${email}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        id="email"
        label="Email"
        type="email"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        required
      />
      <button>Iniciar sesión</button>
    </form>
  );
}
