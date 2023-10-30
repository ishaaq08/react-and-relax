import { NavLink, Outlet } from 'react-router-dom';

const index = () => {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/games">Home</NavLink>
      </nav>
      <Outlet />
    </>
  );
};
export default index;
