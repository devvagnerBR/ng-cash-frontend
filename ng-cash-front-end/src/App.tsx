import './styles/styles.scss'

import Router from './routes/Routes';
import Global from './context/GlobalContext';

function App() {
  return (
    <Global>
      <Router />
    </Global>
  );
}

export default App;
