import { useContext } from 'react';
import './App.css';
import AllContexts from './contextAPI/Context';

function App() {
  const {name} = useContext(AllContexts)
  return (
   <>
   <h1>
{name}
   </h1>
   </>
  );
}

export default App;
