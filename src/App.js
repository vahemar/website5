import { ChakraProvider } from '@chakra-ui/react';
import { React } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import MobileHeader from './components/MobileHeader/MobileHeader';
import Home from './pages/Home';
import Footer from './components/Footer/Footer';
import MobileFooter from './components/MobileFooter/MobileFooter';

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <Header />
        <MobileHeader />
        <Home />
        <Footer />
        <MobileFooter />
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
