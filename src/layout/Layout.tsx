import { ArrowLeftStartOnRectangleIcon, BanknotesIcon, ChartBarIcon, CurrencyDollarIcon, HomeIcon, InformationCircleIcon, UserGroupIcon, UserIcon } from '@heroicons/react/16/solid';
import { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/simple.svg';

const routes = [
  { icon: <HomeIcon className='size-4' />, label: 'Home', path: '/' },
  { icon: <ChartBarIcon className='size-4' />, label: 'Dashboard', path: '/dashboard' },
  { icon: <UserIcon className='size-4' />, label: 'Clientes', path: '/clients' },
  { icon: <BanknotesIcon className='size-4' />, label: 'Deudas', path: '/debts' },
  { icon: <CurrencyDollarIcon className='size-4' />, label: 'Pagos', path: '/payments' },
  { icon: <UserGroupIcon className='size-4' />, label: 'Usuarios', path: '/users' },
  { icon: <InformationCircleIcon className='size-4' />, label: 'Reportes', path: '/reports' },
];

const Layout = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const handleResize = () => {
      if (mediaQuery.matches) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };
    handleResize();
    mediaQuery.addEventListener('change', handleResize);
    return () => mediaQuery.removeEventListener('change', handleResize);
  }, []);

  const activeRoute = useLocation();

  return (
    <div className={`flex h-screen bg-simpleGray`}>
      <div className={`flex flex-col justify-start items-center bg-white ${isOpen ? 'w-64' : 'w-16'} transition-width duration-300 ease-in-out rounded-xl shadow-2xl`}>
        <div className="p-4 flex justify-between items-center cursor-pointer" onClick={toggleSidebar}>
            <div className='flex items-center gap-x-2'>
            <img src={logo} alt="logo" className='w-10 h-10' />
            {isOpen && <h1 className="text-xl font-bold">Debts Manager</h1>}
            </div>
        </div>
        <nav className='px-6 flex flex-col gap-y-4'>
          {routes.map((route, index) => (
            <Link
              key={index}
              to={route.path}
              className={`flex items-center px-5 py-2 rounded-lg opacity-80 ${activeRoute.pathname === route.path ? 'bg-steelBlue' : 'bg-white'} hover:bg-skyBlue transition-colors duration-300`}
            >
              <span className="text-xl">{route.icon}</span>
              {isOpen && <span className="ml-2">{route.label}</span>}
            </Link>
          ))}
          <div className='mt-16 flex items-center justify-center gap-x-2 hover:text-gray-600 transition-colors duration-300 cursor-pointer'>
                <ArrowLeftStartOnRectangleIcon className='size-6' />
                {isOpen && 'Salir'}
          </div>
        </nav>
      </div>

      <div className="flex-1 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;