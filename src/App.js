import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Contact from './components/contact';
import MainPage from './home';
import About from "./components/about";

const App = () => {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage/> } />
          <Route path="one" element={<About />} />
          <Route path="two" element={<Contact />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;