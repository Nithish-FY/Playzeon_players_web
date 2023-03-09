import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routes from './routes';
import { CssBaseline } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import ThemeProvider from './theme/ThemeProvider';
import MomentUtils from '@date-io/moment';

function App() {

    return (
        <ThemeProvider>
      <BrowserRouter>
        <LocalizationProvider dateAdapter={MomentUtils}>
          <CssBaseline />
          <Routes>
            {routes.map((route) => (
              <Route key={route.path} path={route.path} element={route.element} />
            ))}
          </Routes>
        </LocalizationProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
