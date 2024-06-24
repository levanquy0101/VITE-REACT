import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './routes/routes';
import PrivateRoute from './utils/PrivateRoute';
import './assets/styles/global.scss';

function App() {
  return (
    <Router>
      <Routes>
        {routes.map((route, index) => {
          if (route.private) {
            return (
              <Route
                key={index}
                path={route.path}
                element={<PrivateRoute element={route.element} />}
              />
            );
          }

          return (
            <Route
              key={index}
              path={route.path}
              element={route.element}
            />
          );
        })}
      </Routes>
    </Router>
  );
}

export default App;