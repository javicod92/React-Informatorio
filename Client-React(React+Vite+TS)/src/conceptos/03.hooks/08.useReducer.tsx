import { useReducer } from 'react';

// INCREMENT, DECREMENT, RESET
function counterReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    case 'RESET':
      return { ...state, count: 0 };
    case 'CHANGE_NAME':
      return { ...state, name: action.name };
    default:
      throw new Error(`El action ${action.type} no existe!!`);
  }
}

export default function App() {
  const [state, dispatch] = useReducer(counterReducer, {
    name: 'Ivan',
    count: 10,
  });
  return (
    <div>
      <h1>useReducer {state.name}</h1>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+1</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reiniciar</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-1</button>
      <input
        value={state.name}
        onChange={(event) =>
          dispatch({ type: 'CHANGE_NAME', name: event.target.value })
        }
        type="text"
        placeholder="Cambiar nombre"
      />
    </div>
  );
}
