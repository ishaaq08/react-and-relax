import { motion } from 'framer-motion';
import { NavLink, Outlet } from 'react-router-dom';
import { Hamburger } from '../Icons';

const index = () => {
  return (
    <header className="bg-black text-white p-4">
      <div>
        <Hamburger />
      </div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/games">Select a game</NavLink>
        <NavLink to="/games">Login</NavLink>
        <NavLink to="/games">Select a game</NavLink>
      </nav>
      <Outlet />
    </header>
  );
};
export default index;
