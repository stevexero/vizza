import Footer from '../../components/Footer/Footer';
import Hero from '../../components/Hero/Hero';
import Impact from '../../components/Impact/Impact';
import Ingredients from '../../components/Ingredients/Ingredients';
import Introduction from '../../components/Introduction/Introduction';
import Menu from '../../components/Menu/Menu';
import Navbar from '../../components/Navbar/Navbar';
import Topbar from '../../components/Topbar/Topbar';

import './Home.css';

const Home = () => {
  return (
    <div className='Home'>
      <Topbar />
      <Hero />
      <Navbar />
      <Introduction />
      <Ingredients />
      <Impact />
      <Menu />
      <Footer />
    </div>
  );
};
export default Home;
