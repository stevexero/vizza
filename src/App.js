import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Parallax } from 'react-parallax';

// eslint-disable-next-line no-unused-vars
import firebase from './FirebaseConfig';

import Home from './pages/Home/Home';
import Admin from './pages/Admin/Admin';

import BgPhoto from './assets/pizzasign.jpg';

function App() {
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
