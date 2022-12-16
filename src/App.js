import './App.css';
import NavBar from './components/NavBar';
import BannerPage from './pages/Banner-page';
import About from './pages/About';
import Skills from './components/Skills';
import ProjectPage from './pages/Projects-page';
import ContactPage from './pages/Contact-page';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes} from 'react-router-dom';
import Resume from './pages/Resume';

function App() {


  return (
    <>
    <div>
      <NavBar />
    </div>
    <div>
      <Routes>
        <Route path='/' element={<BannerPage />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/resume' element={<Resume />}></Route>
        <Route path='/skills' element={<Skills />}></Route>
        <Route path='/projects' element={<ProjectPage />}></Route>
        <Route path='/contact' element={<ContactPage />}></Route>
      </Routes>
      </div>
      <div>
        <Footer />
      </div>
      </>
  );
}

export default App;
