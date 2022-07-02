// import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Parallax } from 'react-parallax';

// import FirebaseAuthService from './FirebaseAuthService';

import Home from './pages/Home/Home';
import Admin from './pages/Admin/Admin';

import BgPhoto from './assets/pizzasign.jpg';

function App() {
  // const [user, setUser] = useState(null);

  // FirebaseAuthService.subscribeToAuthChanges(setUser);

  // useEffect(() => {
  //   console.log(user);
  // }, [user]);

  return (
    <BrowserRouter>
      <Parallax bgImage={BgPhoto} bgImageAlt='bg' strength={1000}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/admin' element={<Admin />} />
        </Routes>
      </Parallax>
    </BrowserRouter>
  );
}

export default App;
