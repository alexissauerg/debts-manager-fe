import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <header>Mi App</header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
