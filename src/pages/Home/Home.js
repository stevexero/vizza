// import { Parallax } from 'react-parallax';

import Footer from '../../components/Footer/Footer';
import Hero from '../../components/Hero/Hero';
import Impact from '../../components/Impact/Impact';
import Ingredients from '../../components/Ingredients/Ingredients';
import Introduction from '../../components/Introduction/Introduction';
import Menu from '../../components/Menu/Menu';
import Navbar from '../../components/Navbar/Navbar';
import Topbar from '../../components/Topbar/Topbar';

// import BgPhoto from '../../assets/pizzasign.jpg';

import './Home.css';

const Home = ({ existingUser, isAdmin, menuItems }) => {
  return (
    // <Parallax bgImage={BgPhoto} bgImageAlt='bg' strength={1000}>
    <div className='Home'>
      <Topbar existingUser={existingUser} />
      <Hero />
      <Navbar />
      <Introduction />
      <Ingredients />
      <Impact />
      <Menu menuItems={menuItems} />
      <Footer existingUser={existingUser} isAdmin={isAdmin} />
    </div>
    // </Parallax>
  );
};
export default Home;
