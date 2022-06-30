// Components
import Hero from '../../components/Hero/Hero';
import Ingredients from '../../components/Ingredients/Ingredients';
import Introduction from '../../components/Introduction/Introduction';
import Navbar from '../../components/Navbar/Navbar';

// Styles
import './Home.css';

const Home = () => {
  return (
    <div className='Home'>
      <Hero />
      <Navbar />
      <Introduction />
      <Ingredients />
    </div>
  );
};
export default Home;
