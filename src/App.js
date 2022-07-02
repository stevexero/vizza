import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Parallax } from 'react-parallax';

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
