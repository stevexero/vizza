// Components
import Hero from '../../components/Hero/Hero';
import Impact from '../../components/Impact/Impact';
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
      <Impact />
    </div>
  );
};
export default Home;
