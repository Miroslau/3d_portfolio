import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import NavBar from './components/nav-bar/index.jsx';
import { navBarMenu } from './constants/nav-bar-menu.js';

const App = () => {
  return (
    <main className="bg-slate-300/20">
      <Router>
        <NavBar />
        <Routes>
          {navBarMenu.map(({ id, path, element }) => (
            <Route key={id} path={path} element={element} />
          ))}
        </Routes>
      </Router>
    </main>
  );
};

export default App;
