import './App.css';
import Header from './componets/Header';
import Footer from './componets/Footer';
import Shop from './componets/shop';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    < >
      <ToastContainer />
      <Header />
      <Shop />  
      <Footer />
    </>
  );
}

export default App;
