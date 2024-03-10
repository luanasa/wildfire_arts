import React from 'react';
import Header from './components/Header/header';
import Categories from './components/Categories/categories';
import Footer from './components/Footer/footer';
import FooterCredits from './components/Footer_Credits/footer_credits'
import "@fontsource/roboto-mono"; 

function App() {
  return (
    <div className="App">
      <>
      <Header />
      <Categories />
      <Footer />
      <FooterCredits />
      </>
    </div>
  );
}

export default App;
