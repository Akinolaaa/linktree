import './App.css';
import { Routes, Route } from 'react-router-dom';
import ContactPage from './routes/contact/contact.components';
import Home from './routes/home/home.component';
import FooterSection from './sections/footer.component';


export default function App() {
  return (
    <Routes>
      <Route  path='/' element={<FooterSection />}>
        <Route index element={<Home />} />
        <Route path='/contact' element={<ContactPage />}> </Route>
      </Route>
    </Routes> 
  );
}