import Paperbase from './Paperbase';
import { ToastProvider } from 'react-toast-notifications';

import './assets/main.sass';

function App() {
  return (
    <ToastProvider>
      <div>
        <Paperbase />
      </div>
    </ToastProvider>
  );
}

export default App;
