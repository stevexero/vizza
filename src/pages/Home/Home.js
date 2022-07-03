import Footer from '../../components/Footer/Footer';
import Hero from '../../components/Hero/Hero';
import Impact from '../../components/Impact/Impact';
import Ingredients from '../../components/Ingredients/Ingredients';
import Introduction from '../../components/Introduction/Introduction';
import Menu from '../../components/Menu/Menu';
import Navbar from '../../components/Navbar/Navbar';
import Topbar from '../../components/Topbar/Topbar';

import './Home.css';

const Home = ({ existingUser }) => {
  return (
    <div className='Home'>
      <Topbar existingUser={existingUser} />
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
