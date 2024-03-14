import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/header';
import Categories from './components/Categories/categories';
import Footer from './components/Footer/footer';
import FooterCredits from './components/Footer_Credits/footer_credits';
import About from './components/About/about';
import Contact from './components/Contact/contact';
import "@fontsource/roboto-mono"; 
import DecorPage from './components/DecorPage/decor';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Categories />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/decorPage" element={<DecorPage />} />
        </Routes>
        <Footer />
        <FooterCredits />
      </div>
    </Router>
  );
}

export default App;