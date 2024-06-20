// src/App.js
import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import { UserSearchProvider } from './context/userContext';
import { UserLoginContextProvider, UserLoginContext } from './context/userLoginContext';
import { UpdateCartContextProvider } from './context/updatedCartContext';
import { PendingOrdersProvider } from './context/pendingOrdersContext';
import Sidebar from './Pages/Sidebar.js';
import { adminRoutes, userRoutes } from './router/router.js';

function App() {
  return (
    <Router>
      <PendingOrdersProvider>
        <UserLoginContextProvider>
          <UserSearchProvider>
            <UpdateCartContextProvider>
              <MainApp />
            </UpdateCartContextProvider>
          </UserSearchProvider>
        </UserLoginContextProvider>
      </PendingOrdersProvider>
    </Router>
  );
}

function MainApp() {
  const { userLoginCredential } = useContext(UserLoginContext);
  const [isAdmin, setIsAdmin] = useState(false);
  console.log(userLoginCredential);

  useEffect(() => {
    if (userLoginCredential && userLoginCredential.role === 'admin') {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  }, [userLoginCredential]);

  return (
    <>
      {isAdmin ? (
        <Routes>
          {adminRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      ) : (
        <>
          <Navbar />
          <div className="container mx-auto p-4">
            <Routes>
              {userRoutes.map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />
              ))}
            </Routes>
          </div>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
