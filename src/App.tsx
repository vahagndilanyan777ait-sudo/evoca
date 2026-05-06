import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Header/Header'; 
import Swiper from './components/Swiper/Swiper';
import Face from './components/Face/Face';
import Thebest from './components/Thebest/Thebest';
import Plasticcarsd from './components/Plasticcards/Plasticcards';
import Hashvich from './components/Hashvich/Hashvich';
import Banking from './components/Banking/Banking';
import Colegas from './components/Colegas/Colegas';
import Newnwes from './components/Newnews/Newnews';
import Paykurs from './components/Paykurs/Paykurs';
import Footer from './components/Footer/Footer';
import BiznesPage from './components/BiznesPage/BiznesPage';
import SpeedPayPage from './components/SpeedPayPage/SpeedPayPage'; // Ճիշտ import
import AboutPage from './components/AboutPage/AboutPage';
import NewsPage from './components/NewsPage/NewsPage';
import BlogPage from './components/BlogPage/BlogPage';
import CareerPage from './components/CareerPage/CareerPage'
import VarkerPage from './components/VarkerPage/VarkerPage';
import CardsPage from './components/CardsPage/CardsPage';
import AvandnerPage from './components/AvandnerPage/AvandnerPage';
import HashivnerPage from './components/HashivnerPage/HashivnerPage';
import PoxancumnerPage from './components/PoxancumnerPage/PoxancumnerPage';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      
      <Routes>
        {/* Գլխավոր էջ */}
        <Route path="/" element={
          <>
            <Swiper />
            <Face />
            <Thebest />
            <Plasticcarsd />
            <Hashvich />
            <Banking />
            <Colegas />
            <Newnwes />
            <Paykurs />
          </>
        } />

        {/* Բիզնես էջ */}
        <Route path="/biznes" element={<BiznesPage />} />

        {/* Ակնթարթային վճարումներ (SpeedPay) */}
        <Route path="/speedpay" element={<SpeedPayPage />} />

        {/* Մյուս էջերը */}
        <Route path="/about" element={ <AboutPage/>} />
        <Route path="/news" element={<NewsPage/>} />
        <Route path="/blog" element={<BlogPage/>} />
        <Route path="/career" element={<CareerPage/>} />
        <Route path="/loans" element={<VarkerPage/>} />
        <Route path="/cards" element={<CardsPage/>} />
        <Route path="/deposits" element={<AvandnerPage/>} />
        <Route path="/accounts" element={<HashivnerPage/>} />
        <Route path="/transfers" element={<PoxancumnerPage/>} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;