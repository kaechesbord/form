import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Registration from './components/Registration';
import Login from './pages/Login'
import ProtectedRoutes from './components/ProtectedRoute';

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route element={<ProtectedRoutes />}>
                <Route element={<Home/>} path="/" exact/>
                <Route element={<Registration/>} path="/products"/>
            </Route>
            <Route element={<Login/>} path="/login"/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;