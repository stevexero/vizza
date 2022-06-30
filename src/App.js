import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Parallax } from 'react-parallax';

import Home from './pages/Home/Home';

import BgPhoto from './assets/pizzasign.jpg';

function App() {
  return (
    <BrowserRouter>
      {/* <div className='App'> */}
      <Parallax bgImage={BgPhoto} bgImageAlt='bg' strength={1000}>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Parallax>
      {/* </div> */}
    </BrowserRouter>
  );
}

export default App;
