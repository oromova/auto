import React, { useEffect, useState } from 'react';
import Loading from './Components/Loading';
import Header from './Components/Header';
import { Outlet } from 'react-router-dom';
import Footer from './Components/Footer'

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <div>
      {loading ? <span><Loading/></span> :
        <div>
          <Header />
          <Outlet />
          <Footer />
        </div>
      }
    </div>
  );
}

export default App;