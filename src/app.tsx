import Paperbase from './Paperbase';
import { ToastProvider } from 'react-toast-notifications';
import AppRoutes from './routes';

import './assets/main.sass';

function App() {
  return (
    <ToastProvider>
      <div>
        {/* <Paperbase /> */}
        <AppRoutes />
      </div>
    </ToastProvider>
  );
}

export default App;
