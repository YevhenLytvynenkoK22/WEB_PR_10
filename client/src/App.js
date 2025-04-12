import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserList from './components/UserList';
import About from './components/About';
import Home from './components/Home';
import Counter from './components/Counter';
import UserTable from './components/UserTable';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Головна</Link> | 
        <Link to="/about">Про застосунок</Link> | 
        <Link to="/users">Користувачі</Link> | 
        <Link to="/counter">Лічильник</Link> | 
        <Link to="/table">Таблиця</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/table" element={<UserTable />} />
      </Routes>
    </Router>
  );
}

export default App;
