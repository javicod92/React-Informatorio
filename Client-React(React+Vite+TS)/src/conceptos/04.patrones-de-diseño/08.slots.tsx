import { Atom } from 'lucide-react';

function IconButton({ text, icon: Icon }: { text: string }) {
  return (
    <button>
      <span>{<Icon size={22} />}</span>
      {text}
    </button>
  );
}

export default function App() {
  return (
    <div>
      <IconButton icon={Atom} text="Slots" />
    </div>
  );
}
