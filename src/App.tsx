import Header from './components/Header/Header.tsx';
import Hero from './components/Hero/Hero.tsx';
import Shop from './components/Shop/Shop.tsx';
import About from './components/About/About.tsx';
import Comment from './components/Comment/Comment.tsx';
import Grow from './components/Grow/Grow.tsx';
import Footer from './components/Footer/Footer.tsx';
import Location from './components/Location/Location.tsx';

function App() {
  return (
    <div className='bg-[#FDF9F3] min-h-screen font-sans'>
      <Header />
      <Hero />
      <div id='shop'>
        <Shop />
      </div>
      <About />
      <Comment />
      <Grow />
      <Location />
      <Footer />
    </div>
  );
}

export default App;
