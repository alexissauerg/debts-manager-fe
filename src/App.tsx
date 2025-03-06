import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from "@/layout/Layout"
import Home from '@/pages/home/Home'
import Login from '@/pages/login/Login'

const App = () => {
  const isAuthenticated = !!localStorage.getItem('user');

  const protectedRoutes = [
    { path: '/', element: <Home /> },
  ];

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route 
          path="/" 
          element={isAuthenticated ? <Layout /> : <Navigate to="/login" />}
        >
          {protectedRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={isAuthenticated ? element : <Navigate to="/login" />} />
          ))}
        </Route>
        <Route
          path="*"
          element={isAuthenticated ? <Navigate to="/" /> : <Navigate to="/login" />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
